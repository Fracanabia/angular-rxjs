# AngularRxjs

## Angular CLI

### **_15.1.3_**

## Node

### **_18.13.0_**

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
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Prettier

```bash
npm install prettier -D
npx prettier -write .
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier -D
# Create Files
.prettierignore
.prettierrc.json
```

### Json-server

```bash
npm i -g json-server
# Create files
db/db.json   
```

### db.json

```json
{
  "users": [
    { "id": 1, "name": "Wesley", "email": "wesley@gmail.com" },
    { "id": 2, "name": "Ana Paula", "email": "anapaula@gmail.com" },
    { "id": 3, "name": "Amanda", "email": "amanda@gmail.com" }
  ]
}
```
