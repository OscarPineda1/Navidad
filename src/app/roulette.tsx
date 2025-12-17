"use client";

import { useState } from "react";

const items = [
  { emoji: "🥤", name: "Gaseosas", desc: "2 litros para todos" },
  { emoji: "🍪", name: "Galletas", desc: "Para picar" },
  { emoji: "🍿", name: "Snacks", desc: "Papitas, chizitos, etc" },
  { emoji: "🧃", name: "Jugos", desc: "Individuales o jarra" },
  { emoji: "🍬", name: "Dulces", desc: "Caramelos, chocolates" },
  { emoji: "🎄", name: "Panetón", desc: "El clásico navideño" },
  { emoji: "🍰", name: "Postre", desc: "Torta, gelatina, etc" },
  { emoji: "🎁", name: "Sorpresa", desc: "Trae lo que quieras" },
];

export function Roulette() {
  const [result, setResult] = useState<typeof items[0] | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [currentItem, setCurrentItem] = useState<typeof items[0] | null>(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    // Animación de cambio rápido con aceleración
    let count = 0;
    let speed = 80;
    const interval = setInterval(() => {
      setCurrentItem(items[Math.floor(Math.random() * items.length)]);
      count++;
      speed += 5; // Va desacelerando
      if (count > 20) {
        clearInterval(interval);
      }
    }, speed);

    setTimeout(() => {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setResult(randomItem);
      setCurrentItem(null);
      setSpinning(false);
    }, 2500);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center sm:space-y-10 lg:space-y-12">
      {/* Grid de items disponibles mejorado */}
      <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-6 ring-2 ring-white sm:p-8">
        <p className="mb-5 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          🎲 Opciones disponibles
        </p>
        <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center rounded-2xl bg-white/20 p-4 ring-2 ring-white/40 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30 hover:ring-white/60 sm:rounded-3xl sm:p-5 lg:p-6"
            >
              <span className="text-3xl transition-transform group-hover:scale-125 sm:text-4xl lg:text-5xl">{item.emoji}</span>
              <span className="mt-2 text-xs font-black text-white/90 sm:text-sm lg:text-base">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Vista de spinning mejorada */}
      {spinning && currentItem && (
        <div className="relative overflow-hidden rounded-[2rem] bg-red-600 p-10 shadow-2xl ring-4 ring-amber-400 sm:rounded-[3rem] sm:p-14 lg:p-20">
          {/* Decoraciones navideñas */}
          <div className="pointer-events-none absolute left-4 top-4 text-5xl animate-bounce">🎄</div>
          <div className="pointer-events-none absolute right-4 top-4 text-5xl animate-pulse">⭐</div>
          <div className="pointer-events-none absolute left-4 bottom-4 text-5xl animate-pulse delay-100">🎁</div>
          <div className="pointer-events-none absolute right-4 bottom-4 text-5xl animate-bounce delay-200">🔔</div>
          
          <div className="relative">
            <div className="mb-3 text-7xl animate-bounce sm:text-8xl lg:text-9xl">{currentItem.emoji}</div>
            <p className="text-2xl font-black text-white drop-shadow-lg sm:text-3xl lg:text-5xl">
              {currentItem.name}
            </p>
            <p className="mt-2 text-lg font-bold text-white sm:text-xl lg:text-2xl">
              {currentItem.desc}
            </p>
          </div>
        </div>
      )}

      {/* Botón mejorado */}
      {!result && (
        <button
          onClick={spin}
          disabled={spinning}
          className="group relative mx-auto flex w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-[2rem] bg-green-700 px-10 py-6 text-2xl font-black text-white shadow-2xl ring-4 ring-amber-400 transition-all duration-300 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-amber-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto sm:px-14 sm:py-8 sm:text-3xl lg:text-4xl"
        >
          <span className="relative text-4xl">{spinning ? "🎰" : "🎯"}</span>
          <span className="relative">{spinning ? "Girando..." : "Girar la ruleta"}</span>
        </button>
      )}

      {/* Resultado mejorado */}
      {result && !spinning && (
        <div className="relative overflow-hidden rounded-[2rem] bg-red-700 p-10 shadow-2xl ring-4 ring-amber-400 animate-[bounceIn_0.6s_ease-out] sm:rounded-[3rem] sm:p-14 lg:p-20">
          {/* Decoraciones navideñas */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[10%] text-4xl animate-bounce">🎄</div>
            <div className="absolute right-[15%] top-[15%] text-3xl animate-pulse delay-100">⭐</div>
            <div className="absolute left-[20%] bottom-[20%] text-4xl animate-bounce delay-200">🎁</div>
            <div className="absolute right-[20%] bottom-[15%] text-3xl animate-pulse">🔔</div>
            <div className="absolute left-[50%] top-[5%] text-3xl animate-bounce">❄️</div>
            <div className="absolute right-[30%] bottom-[10%] text-3xl animate-pulse delay-100">🎅</div>
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center justify-center gap-3 text-6xl sm:mb-6 sm:text-7xl">
              <span className="animate-bounce">🎊</span>
              <span className="animate-pulse delay-100">🎉</span>
              <span className="animate-bounce delay-200">🎊</span>
            </div>
            
            <p className="mb-6 text-3xl font-black text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
              ¡Te toca llevar!
            </p>
            
            <div className="mb-6 rounded-3xl bg-white/20 backdrop-blur-sm p-8 ring-4 ring-white sm:mb-8 sm:p-10 lg:p-12">
              <div className="mb-4 text-8xl sm:text-9xl lg:text-[10rem]">{result.emoji}</div>
              <p className="mb-3 text-4xl font-black text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                {result.name}
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                {result.desc}
              </p>
            </div>
            
            <p className="mb-6 text-lg font-semibold text-white sm:text-xl lg:text-2xl">
              Si ya tienes algo, ignora la ruleta 😂
            </p>
            
            <button
              onClick={spin}
              className="rounded-2xl bg-green-600 px-10 py-5 text-xl font-black text-white shadow-xl ring-2 ring-white transition-all duration-200 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-white sm:rounded-3xl sm:px-12 sm:py-6 sm:text-2xl lg:text-3xl"
            >
              🔄 Volver a girar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
