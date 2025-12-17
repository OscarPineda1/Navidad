# 🎄 Invitación Navideña - Next.js

Página de invitación navideña interactiva para el **21 de diciembre de 2025**.

## ✨ Características

- **Hero animado** con nieve cayendo y nombre personalizado vía URL
- **Cuenta regresiva** en tiempo real
- **Detalles del evento** con botones a WhatsApp, Maps y Calendar
- **Agenda** de la noche
- **Ruleta interactiva** "¿Qué te toca llevar?"
- **Botones de confirmación** pre-llenados
- Diseño responsive y moderno con Tailwind CSS

## 🚀 Ejecutar en local

```powershell
npm install
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

### Ver con nombre personalizado

Abre: `http://localhost:3000?nombre=Juan`

## 🎨 Personalizar la invitación

Edita `src/app/page.tsx` y cambia estas variables:

```typescript
// Fecha y hora del evento
const eventDate = new Date("2025-12-21T20:00:00");

// Tu número de WhatsApp (con código de país, sin +)
const whatsappNumber = "5212345678900";

// Familia organizadora y lugar
const familiaOrganizadora = "Familia Pineda Flores";
const direccion = `Casa de la ${familiaOrganizadora}`;
const direccionCompleta = direccion;

// Link de Google Maps
const googleMapsUrl = "https://maps.app.goo.gl/Esz1LUdwbtPcvK8k6";
```

También puedes cambiar la firma al final del archivo (línea con `— Familia Pineda Flores`).

## 📦 Build para producción

```powershell
npm run build
npm run start
```

## 🌐 Desplegar

Puedes desplegarlo gratis en:

- **Vercel** (recomendado para Next.js): [vercel.com](https://vercel.com)
- **Netlify**: [netlify.com](https://netlify.com)
- **GitHub Pages** con export estático

## 🎯 Lint

```powershell
npm run lint
```

