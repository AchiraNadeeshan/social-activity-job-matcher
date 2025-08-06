# CRUSH.md

Project: Next.js 13 (app router) frontend using React 18, Tailwind CSS, Framer Motion. ESLint config present (Airbnb + react + Next core web vitals).

Commands
- Dev server: npm run dev
- Build: npm run build
- Start (prod): npm run start
- Lint all: npm run lint
- Typecheck: (no TS configured). If added later: npm run typecheck
- Tests: none configured. To add Jest+RTL quickly: npm i -D jest @testing-library/react @testing-library/jest-dom babel-jest jest-environment-jsdom; then use: npx jest; single test: npx jest path/to/test.spec.(js|ts) -t "test name"

Code style
- Language: JavaScript (no TypeScript). Prefer ES modules, functional React components (arrow functions) per ESLint rule react/function-component-definition.
- Imports: absolute/relative allowed; import/extensions disabled; prefer named exports; default exports allowed.
- Formatting: follow ESLint Airbnb; max-len ~1050 enforced; single quotes; semicolons; no multiple empty lines; linebreak-style off for cross‑platform.
- React: no prop-types required; jsx filename extensions unrestricted; props spreading allowed; React in scope not required (Next 13).
- Accessibility: many jsx-a11y rules relaxed; still prefer label-control pairing and valid anchors via Next/link when applicable.
- Naming: camelCase for variables/functions; PascalCase for components; no underscore dangles except whitelisted ones (_id, etc.).
- State and components: function components only; context values may be constructed inline (rule off).
- Error handling: avoid alert unless intentional (rule allows); prefer try/catch around async boundaries; never log secrets; console allowed for dev, remove noisy logs before prod.
- Animations: use framer-motion variants from utils/motion.js; keep motion configs in utils; avoid inline magic numbers.
- Styles: Tailwind utility-first; global styles in styles/globals.css; share constants in styles/index.js.
- Next.js: pages live in app/ with layout.js and route segments; use next/config and next/link as needed; images via next/image unless external policy requires <img> (alt rule relaxed).

Repo automation
- No Cursor/Copilot rules detected. If added later in .cursor/rules or .github/copilot-instructions.md, mirror key constraints here.

Notes
- If adding tests, record exact commands here so agents can run single tests reliably.
