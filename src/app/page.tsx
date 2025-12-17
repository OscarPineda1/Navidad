"use client";

import { Suspense, useState, useEffect } from "react";
import { Countdown } from "./countdown";
import { Roulette } from "./roulette";
import { Snowfall } from "./snowfall";

function HomeContent() {
  const familiaInvitada = "Familia Flores Talavera";
  const familiaOrganizadora = "Familia Pineda Flores";
  const direccion = "Casa de la Familia Pineda Flores";
  const eventDate = new Date("2025-12-21T18:00:00");

  const whatsappNumber = "6462034756";
  const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia a la cena navideña 🎄");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensaje}`;

  const googleMapsUrl = "https://maps.app.goo.gl/dLpb8bDUSg6XPohh9";

  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Cena Navideña Familia Pineda Flores")}&dates=20251221T180000/20251221T213000&details=${encodeURIComponent("Celebración de Navidad en familia")}&location=${encodeURIComponent(direccion)}`;

  // Easter Egg: contador de clicks
  const [clickCount, setClickCount] = useState(0);
  const [showPrizeModal, setShowPrizeModal] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleEasterEggClick = () => {
    if (timer) clearTimeout(timer);

    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setShowPrizeModal(true);
      setClickCount(0);
    } else {
      const newTimer = setTimeout(() => setClickCount(0), 3000);
      setTimer(newTimer);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return (
    <>
      <Snowfall />
      <main className="relative min-h-dvh overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 scroll-smooth">
        {/* 1. HERO PERSONALIZADO */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-rose-50 to-amber-50 p-8 text-center shadow-2xl shadow-red-500/30 ring-2 ring-red-200 transition-all duration-300 hover:shadow-3xl sm:mb-24 sm:rounded-[2rem] sm:p-10 lg:mb-28 lg:p-20 xl:p-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-amber-100/30" />
          
          {/* Guirnalda de luces decorativa (rojo brillante, verde vivo, dorado) */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 flex justify-around px-4 py-2">
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-red-600 shadow-lg shadow-red-600/60 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/60 delay-100 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-amber-500 shadow-lg shadow-amber-500/60 delay-200 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-red-600 shadow-lg shadow-red-600/60 delay-300 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/60 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-amber-500 shadow-lg shadow-amber-500/60 delay-100 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-red-600 shadow-lg shadow-red-600/60 delay-200 sm:h-4 sm:w-4" />
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/60 delay-300 sm:h-4 sm:w-4" />
          </div>

          {/* Decoraciones flotantes con emojis grandes y coloridos */}
          <div className="pointer-events-none absolute left-2 top-10 flex flex-col gap-4 text-4xl sm:left-4 sm:gap-5 sm:text-5xl lg:left-8 lg:text-6xl">
            <span className="animate-bounce drop-shadow-2xl">🎁</span>
            <span className="animate-pulse delay-100 drop-shadow-2xl">🎄</span>
            <span className="animate-bounce delay-200 drop-shadow-2xl">⭐</span>
          </div>
          <div className="pointer-events-none absolute right-2 top-10 flex flex-col gap-4 text-4xl sm:right-4 sm:gap-5 sm:text-5xl lg:right-8 lg:text-6xl">
            <span className="animate-pulse drop-shadow-2xl">🔔</span>
            <span className="animate-bounce delay-100 drop-shadow-2xl">🎅</span>
            <span className="animate-pulse delay-200 drop-shadow-2xl">🎀</span>
          </div>

          {/* Brillos cálidos dorados y rojos */}
          <div className="pointer-events-none absolute right-4 top-4 h-40 w-40 rounded-full bg-gradient-to-bl from-amber-300/40 to-transparent blur-3xl sm:h-52 sm:w-52" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-40 w-40 rounded-full bg-gradient-to-tr from-red-400/40 to-transparent blur-3xl sm:h-52 sm:w-52" />

          <div className="relative mb-4 text-6xl sm:mb-5 sm:text-7xl lg:mb-6 lg:text-8xl">🎄</div>
          
          <div className="relative">
            <div className="relative mb-6 sm:mb-8 lg:mb-10">
              <h1
                className="relative text-5xl font-black text-red-700 drop-shadow-lg sm:text-7xl lg:text-9xl xl:text-[10rem]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                🎄 Cena Navideña 🎄
              </h1>
              <div className="mt-4 h-1.5 w-44 bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600 mx-auto rounded-full shadow-lg sm:mt-5 sm:w-56 lg:mt-6 lg:w-64" />
            </div>
            <p className="mb-6 text-2xl font-bold text-red-600 sm:mb-8 sm:text-3xl md:text-4xl lg:mb-10 lg:text-5xl xl:text-6xl">
              ⭐ 21 de diciembre de 2025 ⭐
            </p>

            {/* Chips de fecha y hora con colores brillantes */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10 sm:gap-4 lg:mb-12 lg:gap-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-red-600 to-rose-700 px-7 py-3.5 text-base font-black text-white shadow-lg shadow-red-600/40 transition-all duration-200 hover:scale-105 hover:shadow-xl sm:gap-2.5 sm:px-8 sm:py-4 sm:text-lg lg:px-9 lg:py-4.5 lg:text-xl">
                <span className="text-2xl sm:text-3xl lg:text-4xl">📅</span>
                Domingo
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-600 to-green-700 px-7 py-3.5 text-base font-black text-white shadow-lg shadow-emerald-600/40 transition-all duration-200 hover:scale-105 hover:shadow-xl sm:gap-2.5 sm:px-8 sm:py-4 sm:text-lg lg:px-9 lg:py-4.5 lg:text-xl">
                <span className="text-2xl sm:text-3xl lg:text-4xl">⏰</span>
                6:00 PM
              </span>
            </div>

            {/* Foto familiar circular */}
            <div className="relative mx-auto mb-8 sm:mb-10 lg:mb-12">
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-400 via-red-600 to-rose-700 shadow-2xl ring-4 ring-amber-300 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-red-500/50 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <span className="text-8xl sm:text-9xl lg:text-[7rem]">👨‍👩‍👧‍👦</span>
              </div>
            </div>
              
              <p className="text-lg font-black uppercase tracking-wider text-red-700 sm:text-xl lg:text-2xl">
                🎁 Invitación especial para 🎁
              </p>
              <p className="relative mt-5 text-4xl font-black text-red-800 drop-shadow-lg sm:mt-6 sm:text-6xl md:text-7xl lg:mt-7 lg:text-8xl xl:text-9xl">
                {familiaInvitada}
              </p>
              <p className="mt-6 text-xl font-bold text-emerald-700 sm:mt-7 sm:text-2xl md:text-3xl lg:text-4xl">
                Organiza: <span className="text-amber-600">{familiaOrganizadora}</span>
              </p>
              
              {/* Mensaje personalizado de la familia */}
              <div className="relative mx-auto mt-10 max-w-2xl sm:mt-12 lg:mt-14">
                <div className="relative rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl ring-2 ring-red-200 transition-all duration-300 hover:shadow-2xl hover:ring-red-300 sm:p-10 lg:p-12">
                  {/* Decoraciones en esquinas */}
                  <div className="absolute left-2 top-2 h-6 w-6 border-l-4 border-t-4 border-emerald-600 rounded-tl-xl" />
                  <div className="absolute right-2 top-2 h-6 w-6 border-r-4 border-t-4 border-red-600 rounded-tr-xl" />
                  <div className="absolute bottom-2 left-2 h-6 w-6 border-b-4 border-l-4 border-red-600 rounded-bl-xl" />
                  <div className="absolute bottom-2 right-2 h-6 w-6 border-b-4 border-r-4 border-emerald-600 rounded-br-xl" />
                  
                  <p className="relative text-xl font-bold leading-relaxed text-gray-800 sm:text-2xl lg:text-3xl">
                    🎄 Este año queremos celebrar lo más importante: estar juntos. Tu presencia es el mejor regalo que podemos recibir. ¡Te esperamos con mucho cariño!
                  </p>
                </div>
              </div>

            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 px-8 py-6 text-lg font-black text-white shadow-lg shadow-emerald-600/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/60 hover:from-emerald-500 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-emerald-400 active:scale-95 sm:px-9 sm:py-7 sm:text-xl lg:text-2xl"
              >
                <span className="text-xl sm:text-2xl">✅</span>
                Confirmar por WhatsApp
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-7 py-5 text-lg font-black text-white shadow-2xl shadow-red-500/50 transition-all duration-200 hover:scale-105 hover:shadow-red-500/70 focus:outline-none focus:ring-4 focus:ring-red-400 active:scale-95 sm:px-8 sm:py-6 sm:text-xl lg:text-2xl"
              >
                <span className="text-xl sm:text-2xl">📍</span>
                Ver ubicación
              </a>
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-5 text-lg font-black text-white shadow-2xl shadow-amber-500/50 transition-all duration-200 hover:scale-105 hover:shadow-amber-500/70 focus:outline-none focus:ring-4 focus:ring-amber-400 active:scale-95 sm:col-span-2 sm:px-8 sm:py-6 sm:text-xl lg:col-span-1 lg:text-2xl"
              >
                <span className="text-xl sm:text-2xl">📅</span>
                Agregar a calendario
              </a>
            </div>

            <p className="mt-8 text-base font-black text-green-700 drop-shadow-lg sm:mt-12 lg:mt-14 sm:text-lg lg:text-xl">
              🎄 Te esperamos con mucho cariño 🎄
            </p>
          </div>
        </section>

        {/* 2. CUENTA REGRESIVA */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 p-10 shadow-2xl shadow-green-600/50 ring-4 ring-amber-400 transition-all duration-300 hover:shadow-3xl sm:mb-24 sm:rounded-[2rem] sm:p-12 lg:mb-28 lg:p-20 xl:p-24">
          {/* Brillos decorativos */}
          <div className="pointer-events-none absolute right-4 top-4 h-40 w-40 rounded-full bg-gradient-to-bl from-amber-400/40 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-40 w-40 rounded-full bg-gradient-to-tr from-red-500/40 to-transparent blur-3xl" />
          
          {/* Puntos decorativos más visibles */}
          <div className="pointer-events-none absolute left-6 top-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500" />
            <span className="h-3 w-3 rounded-full bg-amber-400 animate-pulse delay-100 shadow-lg shadow-amber-400" />
          </div>
          <div className="pointer-events-none absolute right-6 top-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-400" />
            <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse delay-100 shadow-lg shadow-red-500" />
          </div>
          
          <div className="mb-4 text-center text-5xl sm:mb-6 sm:text-6xl lg:mb-8 lg:text-7xl">⏳</div>
          <h2
            className="mb-8 text-center text-4xl font-black text-white drop-shadow-2xl sm:mb-10 sm:text-5xl lg:mb-12 lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Falta poco…
          </h2>
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <Countdown targetDate={eventDate} />
          </div>
          <p className="text-center text-base font-semibold text-white sm:text-lg lg:text-xl xl:text-2xl">
            Guarda la fecha para que no se te pase.
          </p>
        </section>

        {/* 3. DETALLES DEL EVENTO */}
        <section className="mb-16 sm:mb-24 lg:mb-28">
          <div className="relative mb-8 text-center sm:mb-10 lg:mb-14">
            <div className="mb-3 flex items-center justify-center gap-4 text-5xl sm:mb-4 sm:text-6xl lg:mb-5 lg:gap-5 lg:text-7xl">
              <span className="animate-bounce delay-100">🎇</span>
              <span className="animate-pulse">🎊</span>
              <span className="animate-bounce delay-200">🎈</span>
            </div>
            <h2 className="text-5xl font-black text-red-800 drop-shadow-xl sm:text-7xl lg:text-9xl xl:text-[10rem]" style={{fontFamily: "'Playfair Display', serif"}}>
              🎁 Detalles del evento 🎁
            </h2>
            <div className="mx-auto mt-5 h-2 w-44 bg-gradient-to-r from-red-700 via-amber-600 to-emerald-700 rounded-full shadow-xl sm:mt-6 sm:w-52 lg:mt-7 lg:w-60" />
          </div>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 p-12 shadow-xl shadow-red-600/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-600/60 focus-within:ring-4 focus-within:ring-red-300 sm:rounded-[2rem] sm:p-14 lg:p-16">
              <p className="relative mb-5 text-7xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:mb-6 sm:text-8xl lg:mb-7 lg:text-9xl">📅</p>
              <p className="relative mb-3 text-base font-bold uppercase tracking-wider text-red-100 sm:mb-4 sm:text-lg lg:text-xl">
                Fecha
              </p>
              <p className="relative text-3xl font-black text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Domingo, 21 de diciembre
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 p-10 shadow-xl shadow-emerald-600/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-600/50 focus-within:ring-4 focus-within:ring-emerald-300 sm:rounded-[2rem] sm:p-12 lg:p-14">
              <p className="relative mb-5 text-7xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:mb-6 sm:text-8xl lg:mb-7 lg:text-9xl">⏰</p>
              <p className="relative mb-3 text-base font-bold uppercase tracking-wider text-emerald-100 sm:mb-4 sm:text-lg lg:text-xl">
                Hora
              </p>
              <p className="relative text-3xl font-black text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                6:00 PM <span className="text-xl font-bold text-emerald-200 sm:text-2xl lg:text-3xl">(puntual 😅)</span>
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-10 shadow-xl shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/50 focus-within:ring-4 focus-within:ring-amber-300 sm:rounded-[2rem] sm:p-12 lg:p-14">
              <p className="relative mb-5 text-7xl transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:text-8xl lg:mb-7 lg:text-9xl">📍</p>
              <p className="relative mb-3 text-base font-bold uppercase tracking-wider text-amber-100 sm:mb-4 sm:text-lg lg:text-xl">
                Lugar
              </p>
              <p className="relative mb-5 text-3xl font-black text-white sm:mb-6 sm:text-4xl lg:mb-7 lg:text-5xl xl:text-6xl">{direccion}</p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-black text-amber-700 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95 sm:px-12 sm:py-6 sm:text-xl lg:text-2xl"
              >
                <span className="text-2xl transition-transform duration-300 group-hover:rotate-12 sm:text-3xl">🗺️</span>
                Abrir en Google Maps
              </a>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 to-pink-700 p-12 shadow-xl shadow-rose-600/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-rose-600/60 focus-within:ring-4 focus-within:ring-rose-300 sm:rounded-[2rem] sm:p-14 lg:p-16">
              <p className="relative mb-5 text-7xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:mb-6 sm:text-8xl lg:mb-7 lg:text-9xl">🎁</p>
              <p className="relative mb-3 text-base font-bold uppercase tracking-wider text-rose-100 sm:mb-4 sm:text-lg lg:text-xl">
                Dinámica
              </p>
              <p className="relative text-3xl font-black text-white sm:text-4xl lg:text-5xl xl:text-6xl">Amigo secreto</p>
              <p className="relative mt-4 text-lg font-bold text-rose-100 sm:mt-5 sm:text-xl lg:text-2xl">
                Traer algo para compartir o solo ven con ganas de pasarla bien.
              </p>
            </div>
          </div>
        </section>

        {/* 4. AGENDA */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-10 shadow-2xl shadow-red-500/30 ring-2 ring-red-200 transition-all duration-300 hover:shadow-3xl sm:mb-24 sm:rounded-[2rem] sm:p-12 lg:mb-28 lg:p-20 xl:p-24">
          <div className="pointer-events-none absolute left-4 top-4 h-52 w-52 rounded-full bg-gradient-to-br from-red-300/30 to-transparent blur-3xl" />
          <div className="mb-6 text-center text-6xl sm:mb-8 sm:text-7xl lg:mb-10 lg:text-8xl">⏱️</div>
          <h2 className="mb-10 text-center text-4xl font-black text-red-700 sm:mb-12 sm:text-6xl lg:mb-14 lg:text-8xl xl:text-9xl" style={{fontFamily: "'Playfair Display', serif"}}>
            Agenda de la noche
          </h2>
          <div className="mx-auto max-w-4xl space-y-4 sm:space-y-5 lg:space-y-6">
            {[
              { time: "6:00 PM", activity: "Llegada y saludo", emoji: "👋" },
              { time: "6:30 PM", activity: "Cena / compartir", emoji: "🍽️" },
              { time: "7:30 PM", activity: "Foto familiar", emoji: "📸" },
              { time: "8:00 PM", activity: "Amigo secreto / juegos", emoji: "🎁" },
              { time: "9:30 PM", activity: "Cierre", emoji: "✨" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-green-800 p-7 shadow-lg ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:ring-white/30 sm:gap-6 sm:p-8 lg:gap-8 lg:p-9"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400 text-3xl shadow-lg transition-transform duration-200 hover:scale-110 sm:h-18 sm:w-18 sm:text-4xl lg:h-20 lg:w-20 lg:text-5xl">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold uppercase tracking-wider text-emerald-200 sm:text-base lg:text-lg">{item.time}</p>
                  <p className="text-xl font-black text-white sm:text-2xl lg:text-3xl xl:text-4xl">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SECCIÓN WOW - RULETA */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-red-700 p-10 shadow-2xl shadow-red-900/40 ring-4 ring-amber-400 transition-all duration-300 hover:shadow-3xl sm:mb-24 sm:rounded-[2rem] sm:p-12 lg:mb-28 lg:p-16 xl:p-20">
          {/* Decoraciones navideñas */}
          <div className="pointer-events-none absolute left-4 top-4 text-5xl animate-bounce">🎄</div>
          <div className="pointer-events-none absolute right-4 top-4 text-5xl animate-pulse">🎁</div>
          <div className="pointer-events-none absolute left-4 bottom-4 text-4xl animate-pulse delay-100">⭐</div>
          <div className="pointer-events-none absolute right-4 bottom-4 text-4xl animate-bounce delay-200">🔔</div>
          
          <div className="mb-5 text-center text-7xl sm:mb-6 sm:text-8xl lg:mb-8 lg:text-9xl">🎰</div>
          <h2 className="mb-10 text-center text-4xl font-black text-white drop-shadow-lg sm:mb-12 sm:text-6xl lg:mb-14 lg:text-8xl xl:text-9xl" style={{fontFamily: "'Playfair Display', serif"}}>
            ¿Qué te toca llevar?
          </h2>
          <Roulette />
        </section>

        {/* 6. CONFIRMACIÓN + BOTONES FINALES */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-green-700 p-10 text-center shadow-2xl shadow-green-900/40 ring-4 ring-red-500 transition-all duration-300 hover:shadow-3xl sm:mb-24 sm:rounded-[2rem] sm:p-12 lg:mb-28 lg:p-16 xl:p-20">
          {/* Decoraciones navideñas */}
          <div className="pointer-events-none absolute left-8 top-8 text-6xl animate-spin-slow">❄️</div>
          <div className="pointer-events-none absolute right-8 top-8 text-6xl animate-spin-slow">❄️</div>
          <div className="pointer-events-none absolute left-1/4 bottom-8 text-5xl animate-bounce">🎅</div>
          <div className="pointer-events-none absolute right-1/4 bottom-8 text-5xl animate-bounce delay-100">🤶</div>
          
          <div className="mb-5 text-7xl sm:mb-6 sm:text-8xl lg:mb-8 lg:text-9xl">🎉</div>
          <h2 className="mb-4 text-4xl font-black text-white drop-shadow-lg sm:mb-5 sm:text-6xl lg:mb-6 lg:text-8xl xl:text-9xl" style={{fontFamily: "'Playfair Display', serif"}}>
            ¡Confirma tu asistencia!
          </h2>
          <p className="mb-10 text-lg font-bold text-white sm:mb-12 sm:text-xl lg:mb-14 lg:text-3xl xl:text-4xl">
            Confirma para saber cuánta comida preparar 😄
          </p>
          <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5 lg:gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-600 px-8 py-5 text-lg font-black text-white shadow-xl ring-2 ring-white transition-all duration-200 hover:scale-105 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-white sm:px-10 sm:py-6 sm:text-xl lg:px-12 lg:py-7 lg:text-2xl"
            >
              ✅ Confirmar por WhatsApp
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-red-600 px-8 py-5 text-lg font-black text-white shadow-xl ring-2 ring-white transition-all duration-200 hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-white sm:px-10 sm:py-6 sm:text-xl lg:px-12 lg:py-7 lg:text-2xl"
            >
              📍 Ver ubicación
            </a>
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-amber-500 px-8 py-5 text-lg font-black text-white shadow-xl ring-2 ring-white transition-all duration-200 hover:scale-105 hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-white sm:px-10 sm:py-6 sm:text-xl lg:px-12 lg:py-7 lg:text-2xl"
            >
              📅 Agregar a calendario
            </a>
          </div>
        </section>

        {/* 7. MENSAJE FINAL EMOCIONAL */}
        <section className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 p-10 text-center shadow-2xl shadow-red-600/30 ring-2 ring-red-300 transition-all duration-300 hover:shadow-3xl sm:mb-16 sm:rounded-[2rem] sm:p-12 lg:mb-20 lg:p-16 xl:p-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5" />
          
          <div className="relative mb-5 text-6xl sm:mb-6 sm:text-7xl lg:mb-8 lg:text-9xl">
            <span className="inline-block animate-pulse">❤️</span>
          </div>
          <p className="mb-5 text-2xl font-black text-white sm:mb-6 sm:text-3xl md:text-4xl lg:mb-7 lg:text-5xl xl:text-6xl">
            Gracias por ser parte de nuestra familia.
          </p>
          <p className="mb-6 text-xl font-bold text-red-100 sm:mb-7 sm:text-2xl lg:text-3xl xl:text-4xl">
            Te esperamos con el corazón abierto.
          </p>
          <p className="text-3xl font-black text-amber-200 sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl" style={{fontFamily: "'Playfair Display', serif"}}>
            — Familia Pineda Flores
          </p>
        </section>

        <footer className="relative border-t border-red-300/30 pt-8 text-center sm:pt-10 lg:pt-12">
          {/* Guirnalda decorativa superior */}
          <div className="mb-4 flex justify-center gap-2 sm:mb-5 sm:gap-2.5 lg:gap-3">
            <span className="inline-block h-3 w-3 animate-bounce rounded-full bg-red-600 shadow-lg shadow-red-600/50 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span className="inline-block h-3 w-3 animate-bounce rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/50 delay-75 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span className="inline-block h-3 w-3 animate-bounce rounded-full bg-red-600 shadow-lg shadow-red-600/50 delay-150 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span className="inline-block h-3 w-3 animate-bounce rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/50 delay-200 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span className="inline-block h-3 w-3 animate-bounce rounded-full bg-red-600 shadow-lg shadow-red-600/50 delay-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span className="hidden animate-bounce rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/50 delay-100 sm:inline-block sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span className="hidden animate-bounce rounded-full bg-red-600 shadow-lg shadow-red-600/50 sm:inline-block sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
          </div>
          
          <div className="mb-3 flex justify-center gap-3 text-3xl opacity-90 sm:mb-4 sm:gap-4 sm:text-4xl lg:mb-5 lg:gap-5 lg:text-5xl">
            <span className="animate-bounce">🎄</span>
            <span className="animate-pulse delay-100">⭐</span>
            <span className="animate-bounce delay-200">🎁</span>
          </div>
          <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl xl:text-5xl">Feliz Navidad ✨</p>
          
          {/* Easter Egg: Estrella secreta */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={handleEasterEggClick}
              className="group inline-block cursor-default opacity-50 transition-all duration-300 hover:opacity-80 focus:outline-none"
              aria-label="Decoración"
            >
              <span className="inline-block text-3xl transition-transform group-hover:scale-125 group-active:scale-95 sm:text-4xl">
                ⭐
              </span>
            </button>
            <p className="mt-3 text-sm font-medium italic text-white sm:text-base">
              ✨ A veces los detalles esconden sorpresas…
            </p>
          </div>
        </footer>
      </main>

      {/* Modal de Premio Easter Egg */}
      {showPrizeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setShowPrizeModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl animate-[bounceIn_0.6s_ease-out] rounded-[2rem] bg-gradient-to-br from-red-50 via-amber-50 to-rose-50 p-10 shadow-2xl ring-4 ring-amber-400 sm:p-14 lg:p-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decoraciones flotantes */}
            <div className="pointer-events-none absolute -left-4 -top-4 text-6xl animate-spin-slow lg:text-7xl">⭐</div>
            <div className="pointer-events-none absolute -right-4 -top-4 text-5xl animate-bounce lg:text-6xl">🎁</div>
            <div className="pointer-events-none absolute -bottom-4 -left-4 text-5xl animate-pulse lg:text-6xl">🎄</div>
            <div className="pointer-events-none absolute -bottom-4 -right-4 text-6xl animate-spin-slow lg:text-7xl">✨</div>

            {/* Confeti decorativo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="absolute left-[10%] top-[15%] h-3 w-3 animate-bounce rounded-full bg-red-500 delay-100 lg:h-4 lg:w-4" />
              <div className="absolute right-[15%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-amber-500 delay-200 lg:h-5 lg:w-5" />
              <div className="absolute left-[20%] top-[40%] h-3 w-3 animate-bounce rounded-full bg-emerald-500 delay-300 lg:h-4 lg:w-4" />
              <div className="absolute right-[25%] bottom-[30%] h-4 w-4 animate-pulse rounded-full bg-rose-500 lg:h-5 lg:w-5" />
              <div className="absolute left-[30%] bottom-[20%] h-3 w-3 animate-bounce rounded-full bg-green-500 delay-100 lg:h-4 lg:w-4" />
            </div>

            {/* Botón cerrar mejorado */}
            <button
              onClick={() => setShowPrizeModal(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-red-600 p-3 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:rotate-90 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300 lg:p-4"
              aria-label="Cerrar"
            >
              <svg className="h-6 w-6 lg:h-7 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenido */}
            <div className="relative text-center">
              <div className="mb-6 flex justify-center gap-2 text-7xl sm:mb-8 sm:text-8xl lg:mb-10 lg:gap-4 lg:text-9xl">
                <span className="inline-block animate-bounce">🎉</span>
                <span className="inline-block animate-pulse delay-100">🎊</span>
                <span className="inline-block animate-bounce delay-200">🎉</span>
              </div>
              
              <h3 className="mb-5 bg-gradient-to-r from-red-700 via-rose-600 to-amber-600 bg-clip-text text-5xl font-black text-transparent drop-shadow-lg sm:mb-6 sm:text-6xl lg:mb-8 lg:text-8xl" style={{fontFamily: "'Playfair Display', serif"}}>
                ¡Felicidades!
              </h3>
              
              <p className="mb-8 text-xl font-bold text-gray-800 sm:text-2xl lg:mb-10 lg:text-4xl">
                Encontraste el secreto navideño 🌟
              </p>

              <div className="mb-8 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 shadow-lg ring-2 ring-amber-400 sm:mb-10 sm:p-10 lg:mb-12 lg:p-12">
                <div className="mb-4 text-6xl lg:mb-6 lg:text-7xl">🎁</div>
                <p className="mb-3 text-2xl font-black text-red-700 sm:text-3xl lg:mb-4 lg:text-4xl">
                  ¡Eres un observador atento!
                </p>
                <p className="text-lg font-semibold text-gray-700 leading-relaxed sm:text-xl lg:text-2xl">
                  Menciona este mensaje a la familia para reclamar tu <span className="font-black text-amber-700">premio especial</span> en la fiesta.
                </p>
              </div>

              <button
                onClick={() => setShowPrizeModal(false)}
                className="w-full rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 px-8 py-5 text-xl font-black text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-red-600/50 focus:outline-none focus:ring-4 focus:ring-red-300 active:scale-95 sm:text-2xl lg:py-6 lg:text-3xl"
              >
                ✨ ¡Genial! ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-christmas-forest" />}>
      <HomeContent />
    </Suspense>
  );
}
