# 🅰️ Tutorial Angular — Proyecto de ejemplo

Este proyecto es una **aplicación Angular minimalista** desarrollada como apoyo didáctico para aprender los fundamentos del framework: instalación, estructura, componentes standalone, enrutado y despliegue en GitHub Pages.
Incluye dos páginas (`Tutorial` y `About`) y un diseño adaptado a partir de la plantilla **Spurgeon Template** para ofrecer una apariencia profesional tipo artículo técnico.

---

## Tecnologías utilizadas

* **Angular 17+** (con componentes *standalone*)
* **TypeScript**
* **HTML5 + CSS3**
* **Spurgeon Template** (adaptada)
* **Node.js + npm**
* **gh-pages** para despliegue estático

---

## Estructura principal del proyecto

```
tutorial-angular/
├── angular.json
├── package.json
├── tsconfig.json
│
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   │
│   ├── app/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── pages/
│   │       ├── tutorial/
│   │       │   ├── tutorial.ts
│   │       │   ├── tutorial.html
│   │       │   └── tutorial.css
│   │       └── about/
│   │           ├── about.ts
│   │           ├── about.html
│   │           └── about.css
│   │
│   └── assets/
│       └── spurgeon/
│           ├── images/
│           ├── main.js
│           ├── plugins.js
│           ├── spurgeon-custom.css
│           ├── styles.css
│           └── vendor.css
│
└── ...
```

---

## Características principales

### Componentes standalone

El proyecto utiliza exclusivamente **componentes standalone**, simplificando la arquitectura y eliminando la necesidad de módulos (`NgModule`).

### Enrutado básico

Se definen dos rutas en `app.routes.ts`:

```ts
{ path: '', component: Tutorial },
{ path: 'about', component: About },
```

### Integración de plantilla externa

La plantilla **Spurgeon** se ha incorporado en `assets/spurgeon/` y adaptado mediante:

* Limpieza y reorganización de CSS
* Creación de `spurgeon-custom.css` con overrides
* Uso de la fuente **Poppins** frente a las originales Castoro / Inter

### Bloques de código seguros

Todos los ejemplos del tutorial usan:

```html
<pre><code ngNonBindable> ... </code></pre>
```

para evitar errores de compilación como **NG5002** debido a caracteres no escapados.

---

## Scripts disponibles

### Servir en desarrollo

```
ng serve -o
```

### Generar build de producción

```
ng build --output-path dist/tutorial-angular --base-href="/tutorial-angular/"
```

---

## Despliegue en GitHub Pages

### 1. Instalar `gh-pages` (una sola vez)

```
npm install --save-dev gh-pages
```

### 2. Compilar con el `base-href` correcto

```
ng build --output-path dist/tutorial-angular --base-href="/tutorial-angular/"
```

### 3. Publicar en GitHub Pages

```
npx gh-pages -d dist/tutorial-angular/browser
```

Después, en GitHub:

**Settings → Pages → Branch: `gh-pages` → Folder: `/ (root)`**

---

## Requisitos previos

* Node.js (v18 o superior recomendado)
* npm
* Angular CLI

  ```
  npm install -g @angular/cli
  ```

---

## Autor

Proyecto desarrollado por **Antonio Serrano** como demostración práctica para un tutorial de introducción a Angular.

---

## Licencia

Este proyecto se distribuye bajo licencia **MIT**.
