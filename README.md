# 🏪 Hong Chiang (v1)

[![ci](https://github.com/jennifershih/Hong-Chiang/actions/workflows/ci.yml/badge.svg)](https://github.com/jennifershih/Hong-Chiang/actions/workflows/ci.yml)
[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![Ignite UI](https://img.shields.io/badge/Ignite%20UI-22-0099ff)](https://www.infragistics.com/products/ignite-ui-angular)

First prototype of a store-management back office (店家管理): a store list grid with create and delete dialogs and status filters.

Originally generated in 2021 with [Infragistics App Builder](https://www.infragistics.com/products/appbuilder), then upgraded in 2026 from Angular 12 to Angular 22.

## Pages

- Store list (店家列表) with create/delete dialogs
- Two placeholder views

## Built with

- Angular 22 and Ignite UI for Angular 22
- Built-in control flow (`@if` / `@for`) and `inject()`
- Vitest with a smoke test that opens every route
- ESLint (angular-eslint) and Prettier

## Related

The Hong Chiang prototypes evolved in three repos: [Hong-Chiang](https://github.com/jennifershih/Hong-Chiang) (v1) → [Hong-Chiang2.0](https://github.com/jennifershih/Hong-Chiang2.0) → [HongChiangTest](https://github.com/jennifershih/HongChiangTest) (test build).

## Getting started

Requires Node.js 22+.

```bash
npm install
npm start          # opens http://localhost:4200
```

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `npm run test:ci` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
