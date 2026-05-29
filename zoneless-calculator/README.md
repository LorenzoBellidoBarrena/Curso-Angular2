# Zoneless Calculator

Calculadora desarrollada con Angular usando Signals y detección de cambios experimental sin Zone.js. El proyecto sirve como práctica de estado reactivo, componentes standalone y entrada por teclado.

## 🚀 Demo

> Actualmente no hay una demo pública disponible. El proyecto puede ejecutarse en local siguiendo las instrucciones de instalación.

## 📸 Capturas

> Pendiente de añadir capturas de pantalla de la aplicación.

## 🧩 Funcionalidades

* Operaciones básicas: suma, resta, multiplicación y división.
* Entrada por botones de la interfaz.
* Entrada mediante teclado físico.
* Botón de limpiar (`C`) y borrado con `Backspace`.
* Cambio de signo (`+/-`).
* Manejo de decimales.
* Estado con Angular Signals.
* `provideExperimentalZonelessChangeDetection`.
* Tests configurados y script de coverage.

## 🛠️ Tecnologías utilizadas

* Angular 18
* TypeScript
* Angular Signals
* Angular Router
* Tailwind CSS
* Karma/Jasmine

## 🏗️ Arquitectura y estructura

```text
zoneless-calculator/
├── src/app/
│   ├── calculator/
│   │   ├── components/
│   │   ├── services/
│   │   └── views/
│   ├── app.config.ts
│   └── app.routes.ts
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
npm run test:coverage
```

## 📦 Build o despliegue

```bash
npm run build
```

## 📌 Estado del proyecto

Práctica académica funcional. Pendiente de capturas y mejora de casos borde de cálculo.

## 👨‍💻 Autor

Lorenzo Bellido Barrena

* Portfolio: https://lorenzo-bellido.vercel.app/
* LinkedIn: https://www.linkedin.com/in/lorenzo-bellido-barrena/
* GitHub: https://github.com/LorenzoBellidoBarrena
* Email: [lorenzobeba2@gmail.com](mailto:lorenzobeba2@gmail.com)
