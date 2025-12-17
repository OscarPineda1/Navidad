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
      <div className="rounded-3xl bg-gradient-to-br from-rose-600 to-red-700 p-10 text-center shadow-2xl ring-2 ring-red-300 sm:p-14 lg:p-16">
        <div className="mb-5 text-7xl sm:text-8xl lg:text-9xl">🎉</div>
        <p className="text-4xl font-black text-white sm:text-5xl lg:text-7xl xl:text-8xl">
          ¡Hoy es el día!
        </p>
        <p className="mt-4 text-2xl font-bold text-red-100 sm:text-3xl lg:text-4xl">
          Nos vemos esta noche 🎄
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-7">
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 p-6 shadow-lg ring-1 ring-white/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:ring-white/30 sm:rounded-3xl sm:p-7 lg:p-9">
        <div className="absolute -top-4 -right-4 text-4xl opacity-60 transition group-hover:scale-110 sm:text-5xl lg:text-6xl">🎁</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-lg sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.days}
        </p>
        <p className="relative mt-2 text-sm font-bold uppercase tracking-wider text-red-100 sm:mt-3 sm:text-base lg:text-lg">
          Días
        </p>
      </div>
      
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 p-6 shadow-lg ring-1 ring-white/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:ring-white/30 sm:rounded-3xl sm:p-7 lg:p-9">
        <div className="absolute -top-4 -right-4 text-4xl opacity-60 transition group-hover:scale-110 sm:text-5xl lg:text-6xl">⭐</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-lg sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.hours}
        </p>
        <p className="relative mt-2 text-sm font-bold uppercase tracking-wider text-emerald-100 sm:mt-3 sm:text-base lg:text-lg">
          Horas
        </p>
      </div>
      
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 shadow-lg ring-1 ring-white/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:ring-white/30 sm:rounded-3xl sm:p-7 lg:p-9">
        <div className="absolute -top-4 -right-4 text-4xl opacity-60 transition group-hover:scale-110 sm:text-5xl lg:text-6xl">🔔</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-lg sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.minutes}
        </p>
        <p className="relative mt-2 text-sm font-bold uppercase tracking-wider text-amber-100 sm:mt-3 sm:text-base lg:text-lg">
          Min
        </p>
      </div>
      
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 to-green-800 p-6 shadow-lg ring-1 ring-white/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:ring-white/30 sm:rounded-3xl sm:p-7 lg:p-9">
        <div className="absolute -top-4 -right-4 text-4xl opacity-60 transition group-hover:scale-110 sm:text-5xl lg:text-6xl">✨</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
        <p className="relative text-5xl font-black text-white drop-shadow-lg sm:text-6xl lg:text-7xl xl:text-8xl">
          {timeLeft.seconds}
        </p>
        <p className="relative mt-2 text-sm font-bold uppercase tracking-wider text-emerald-100 sm:mt-3 sm:text-base lg:text-lg">
          Seg
        </p>
      </div>
    </div>
  );
}
