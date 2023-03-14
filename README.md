# AngularResolver

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Angular RxJs

### Angular CLI

### **_15.1.3_**

### Node

### **_18.13.0_**

### Packages

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

### ESLint

```bash
ng add @angular-eslint/schematics
```

### .eslintrc.json

```json
{
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "excludedFiles": [
        "*inline-template-*.component.html"
      ],
      "extends": [
        // "plugin:@angular-eslint/template/recommended",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "prettier/prettier": [
          "error",
          {
            "parser": "angular"
          }
        ]
      }
    }
  ]
}

```

### TailwindCSS

### Prettier

```bash
npm install prettier -D
npx prettier -write .
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier -D
# Create Files
.prettierignore
.prettierrc.json
```

### .prettierrc.json

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}

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
  "example": [
    { "example": "example" },
  ]
}
```
