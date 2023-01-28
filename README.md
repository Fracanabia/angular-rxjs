# AngularRxjs

## Angular CLI

### ***15.1.3***

## Node

### ***18.13.0***

## Packages

### ESLint

```bash
ng add @angular-eslint/schematics
```

### TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
