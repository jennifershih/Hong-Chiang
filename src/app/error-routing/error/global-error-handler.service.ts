import {
  ErrorHandler,
  Injectable,
  Injector,
  NgZone,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  private injector = inject(Injector);
  private zone = inject(NgZone);

  handleError(error: any) {
    // handle and/or log error, for example:
    console.error(error);

    // show error page
    const router = this.injector.get(Router);
    if (router) {
      this.zone.run(() => {
        router.navigate(['error']).catch((err: any) => console.error(err));
      });
    }
  }
}
