# LBB Side Menu

Librería Angular que expone un componente standalone de menú lateral con navegación, estado de autenticación y acciones de login/logout.

## 🚀 Demo

> Actualmente no hay una demo pública disponible. El componente puede probarse desde el workspace padre.

## 📸 Capturas

> Pendiente de añadir capturas de pantalla del componente.

## 🧩 Funcionalidades

* Componente `lib-lbb-side-menu`.
* Input `isAuthenticated`.
* Input `titleColor` basado en el enum `TitleColor`.
* Outputs `onSignIn` y `onSignOut`.
* Plantilla con enlaces de navegación y acciones de autenticación.

## 🛠️ Tecnologías utilizadas

* Angular 19
* TypeScript
* Angular Router
* ng-packagr

## 🏗️ Arquitectura y estructura

```text
projects/lbb-side-menu/
├── src/lib/
│   ├── lbb-side-menu.component.ts
│   ├── lbb-side-menu.component.html
│   └── lbb-side-menu.component.spec.ts
├── ng-package.json
└── package.json
```

## ⚙️ Instalación y ejecución

Desde `lbb-workspace/`:

```bash
npm install
npm run lbb-side-menu:build
```

## 🧪 Tests

```bash
npm run lbb-side-menu:test
```

## 📦 Build o despliegue

```bash
npm run lbb-side-menu:build
```

## 📌 Estado del proyecto

Librería de práctica. Pendiente de publicar ejemplos de integración y documentación de inputs/outputs.

## 👨‍💻 Autor

Lorenzo Bellido Barrena

* Portfolio: https://lorenzo-bellido.vercel.app/
* LinkedIn: https://www.linkedin.com/in/lorenzo-bellido-barrena/
* GitHub: https://github.com/LorenzoBellidoBarrena
* Email: [lorenzobeba2@gmail.com](mailto:lorenzobeba2@gmail.com)
