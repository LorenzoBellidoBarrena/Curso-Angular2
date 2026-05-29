# GitHub Issues

Aplicación Angular para consultar issues del repositorio `angular/angular` usando la GitHub REST API. Permite listar issues, filtrar por estado y etiquetas, y consultar el detalle con comentarios.

## 🚀 Demo

> Actualmente no hay una demo pública disponible. El proyecto puede ejecutarse en local siguiendo las instrucciones de instalación.

## 📸 Capturas

> Pendiente de añadir capturas de pantalla de la aplicación.

## 🧩 Funcionalidades

* Listado de issues desde GitHub.
* Filtro por estado: todos, abiertos y cerrados.
* Carga y selección de labels.
* Página de detalle por número de issue.
* Consulta de comentarios del issue.
* Estado remoto con `@tanstack/angular-query-experimental`.
* Renderizado de Markdown con `ngx-markdown`.

## 🛠️ Tecnologías utilizadas

* Angular 19
* TypeScript
* Angular Router
* Angular Query
* ngx-markdown
* Tailwind CSS
* GitHub REST API
* Karma/Jasmine

## 🏗️ Arquitectura y estructura

```text
githubIssues/
├── src/app/modules/issues/
│   ├── actions/
│   ├── components/
│   ├── interfaces/
│   ├── pages/
│   └── services/
├── src/environments/
├── package.json
└── angular.json
```

## ⚙️ Instalación y ejecución

```bash
npm install
npm start
```

## 🧪 Tests

```bash
npm test
```

## 📦 Build o despliegue

```bash
npm run build
```

## 🔐 Variables de entorno

Los archivos `src/environments/environment.ts` y `src/environments/environment.development.ts` definen:

* `baseUrl`: endpoint base de GitHub.
* `gitHubToken`: token opcional. Está vacío para no publicar credenciales.

Se incluye `src/environments/environment.example.ts` como referencia.

## 📌 Estado del proyecto

Práctica académica funcional. Pendiente de capturas y de revisar una estrategia segura si se decide usar token de GitHub.

## 👨‍💻 Autor

Lorenzo Bellido Barrena

* Portfolio: https://lorenzo-bellido.vercel.app/
* LinkedIn: https://www.linkedin.com/in/lorenzo-bellido-barrena/
* GitHub: https://github.com/LorenzoBellidoBarrena
* Email: [lorenzobeba2@gmail.com](mailto:lorenzobeba2@gmail.com)
