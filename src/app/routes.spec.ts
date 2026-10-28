import { ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Route } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppModule } from './app.module';

/** Every concrete URL in the route tree, including lazy-loaded children. */
async function collectUrls(list: Route[], prefix: string, harness: RouterTestingHarness): Promise<string[]> {
  const urls: string[] = [];
  for (const route of list) {
    if (route.path === undefined || route.path === '**' || route.redirectTo !== undefined) continue;
    if (route.path.includes(':')) continue;
    const url = [prefix, route.path].filter(Boolean).join('/');
    let children = route.children ?? [];
    if (route.loadChildren) {
      await harness.navigateByUrl(`/${url}`);
      children = (route as Route & { _loadedRoutes?: Route[] })._loadedRoutes ?? [];
    }
    if (children.length) {
      urls.push(...(await collectUrls(children, url, harness)));
    } else if (route.component || route.loadComponent) {
      urls.push(url);
    }
  }
  return urls;
}

describe('every page renders', () => {
  it('navigates to each route without errors', async () => {
    const errors: unknown[] = [];
    TestBed.configureTestingModule({
      // The whole app module, so eagerly declared pages get their Ignite UI imports.
      imports: [AppModule],
      providers: [
        provideZoneChangeDetection(),
        provideNoopAnimations(),
        { provide: ErrorHandler, useValue: { handleError: (e: unknown) => errors.push(e) } },
      ],
    });
    const harness = await RouterTestingHarness.create();
    const urls = await collectUrls(routes, '', harness);
    expect(urls.length).toBeGreaterThan(0);

    for (const url of urls) {
      await harness.navigateByUrl(`/${url}`);
      expect(harness.routeNativeElement?.innerHTML.length, url).toBeGreaterThan(0);
    }
    expect(errors).toEqual([]);
  });
});
