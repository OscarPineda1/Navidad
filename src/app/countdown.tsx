"use client";

import { useEffect, useState } from "react";

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isToday: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isToday) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-rose-600 to-red-700 p-12 text-center shadow-3xl shadow-red-600/50 ring-4 ring-amber-400 transition-all duration-300 hover:shadow-[0_0_60px_rgba(239,68,68,0.8)] sm:p-16 lg:p-20">
        <div className="mb-6 text-8xl animate-bounce sm:text-9xl lg:text-[10rem]">🎉</div>
        <p className="text-4xl font-black text-white drop-shadow-2xl sm:text-5xl lg:text-7xl xl:text-8xl">
          ¡Hoy es el día!
        </p>
        <p className="mt-5 text-2xl font-bold text-red-100 sm:text-3xl lg:text-4xl">
          Nos vemos esta noche 🎄
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6 lg:gap-8">
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 p-8 shadow-xl shadow-red-600/30 ring-2 ring-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 hover:ring-white/50 sm:p-9 lg:p-11">
        <div className="absolute -top-4 -right-4 text-5xl opacity-60 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 sm:text-6xl lg:text-7xl">🎁</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.days}
        </p>
        <p className="relative mt-3 text-sm font-bold uppercase tracking-wider text-red-100 sm:mt-4 sm:text-base lg:text-lg">
          Días
        </p>
      </div>
      
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 p-8 shadow-xl shadow-emerald-600/30 ring-2 ring-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/50 hover:ring-white/50 sm:p-9 lg:p-11">
        <div className="absolute -top-4 -right-4 text-5xl opacity-60 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 sm:text-6xl lg:text-7xl">⭐</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.hours}
        </p>
        <p className="relative mt-3 text-sm font-bold uppercase tracking-wider text-emerald-100 sm:mt-4 sm:text-base lg:text-lg">
          Horas
        </p>
      </div>
      
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 shadow-xl shadow-amber-500/30 ring-2 ring-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/50 hover:ring-white/50 sm:p-9 lg:p-11">
        <div className="absolute -top-4 -right-4 text-5xl opacity-60 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 sm:text-6xl lg:text-7xl">🔔</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.minutes}
        </p>
        <p className="relative mt-3 text-sm font-bold uppercase tracking-wider text-amber-100 sm:mt-4 sm:text-base lg:text-lg">
          Min
        </p>
      </div>
      
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-green-800 p-8 shadow-xl shadow-emerald-700/30 ring-2 ring-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-700/50 hover:ring-white/50 sm:p-9 lg:p-11">
        <div className="absolute -top-4 -right-4 text-5xl opacity-60 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 sm:text-6xl lg:text-7xl">✨</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.seconds}
        </p>
        <p className="relative mt-3 text-sm font-bold uppercase tracking-wider text-emerald-100 sm:mt-4 sm:text-base lg:text-lg">
          Seg
        </p>
      </div>
    </div>
  );
}
