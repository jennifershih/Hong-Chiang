// Browser APIs Ignite UI uses that the test DOM (happy-dom) lacks or stubs out.
class NoopObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): [] {
    return [];
  }
}

Object.assign(window, {
  ResizeObserver: NoopObserver,
  IntersectionObserver: NoopObserver,
});
Object.assign(globalThis, {
  ResizeObserver: NoopObserver,
  IntersectionObserver: NoopObserver,
});

if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
    }) as unknown as MediaQueryList;
}

// zone.js wraps MutationObserver in a way the test DOM does not support.
if (typeof new MutationObserver(() => undefined).observe !== 'function') {
  Object.assign(window, { MutationObserver: NoopObserver });
  Object.assign(globalThis, { MutationObserver: NoopObserver });
}
