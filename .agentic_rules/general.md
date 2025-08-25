# React + Vite Frontend Best Practices

## 1. Projekto struktūra
```
src/
├─ assets/ # statiniai failai (ikonos, css, šriftai)
├─ components/ # bendriniai UI komponentai
├─ features/ # atskiros domeno sritys (user, auth, dashboard)
├─ hooks/ # custom React hook'ai
├─ pages/ # puslapiai (maršrutai)
├─ services/ # API užklausos, integracijos
├─ store/ # state management (Redux/Zustand/Jotai)
├─ utils/ # pagalbinės funkcijos
├─ App.tsx
├─ main.tsx
```

- Venk **God Components** – komponentai turi būti maži ir vienos atsakomybės (SRP).
- Feature-based struktūra – logika, UI ir testai viename feature aplanke.

---

## 2. Kodo kokybė
- Naudoti **TypeScript** (stipri tipizacija).
- Įsidiegti **ESLint + Prettier** (pvz. `airbnb` arba `next/core-web-vitals` konfigūracija).
- **Husky + lint-staged** – lint/test paleisti prieš `git commit/push`.
- Failų dydis: >150 eilučių komponentas → refactorinti.
- Aiškūs pavadinimai (`UserCard`, `useAuth`, `getUserProfile`).

---

## 3. React komponentai
- Tik **function components** + **hooks**.
- Visada tipizuoti props su `interface` / `type`.
- Mažiau propų, bet aiški API.
- Skirstyti į **UI dumb components** ir **container components**.
- Naudoti `React.memo` / `useMemo` / `useCallback` tik kai reikia.
- Formose naudoti **Controlled Components**.

---

## 4. State valdymas
- Lokalus state → `useState`, `useReducer`.
- Globalus state → **Zustand / Redux Toolkit / Jotai** (vengti prop drilling).
- Serverio state → **TanStack Query (React Query)**.
- Nepersistengti su global state – naudoti React Query, kai įmanoma.

---

## 5. API ir duomenų sluoksnis
- API kvietimus laikyti `services/`.
- Naudoti **Axios** arba `fetch` su wrapperiu.
- Visada tvarkyti **loading** ir **error** būsenas.
- Tipizuoti API atsakymus (`zod` arba `io-ts` validacija).

---

## 6. UI ir stilius
- Naudoti **TailwindCSS** arba CSS-in-JS.
- Stiliai komponentų lygio, ne globalūs.
- Įdiegti tamsų/šviesų režimą (`theme`).
- Inline-styles – tik paprastiems atvejams.

---

## 7. Performance
- **Code Splitting** (`React.lazy`, `Suspense`).
- Dinaminis importas dideliems feature.
- Naudoti Vite pluginus (`vite-plugin-svgr`, `vite-plugin-compression`).
- Optimizuoti eventus (`debounce`, `throttle`).
- Testuoti Lighthouse.

---

## 8. Testavimas
- **Unit testai** – Jest + React Testing Library.
- **Integration testai** – komponentų sąveika.
- **E2E testai** – Cypress / Playwright.
- Testuoti:
  - kritinius feature
  - business logic
  - edge cases

---

## 9. Git ir CI/CD
- Git commit’ai – **Conventional Commits** (`feat:`, `fix:`, `chore:`).
- CI pipeline:
  - Lint
  - Test
  - Build
- Automatizuotas deploy (Vercel, Netlify, GitHub Actions).

---

## 10. Dokumentacija ir DX
- Naudoti **Storybook** UI komponentams.
- API tipizacija – automatinė dokumentacija (OpenAPI/Swagger).
- Komponentų JSDoc/TypeDoc.
- README su projekto setup, struktūra, deploy instrukcijomis.

---

**Santrauka**:  
Aiški projekto struktūra → TypeScript → state tvarkymas per React Query/Zustand → testavimas → lint/prettier → CI/CD → dokumentacija.
