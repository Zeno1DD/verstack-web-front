"use client";

import React, { useEffect } from "react";
import { YMInitializer, ym as yandexYm } from "react-yandex-metrika";
import { usePathname } from "next/navigation";

interface YandexMetrikaProps {
  enabled: boolean;
}

const YM_COUNTER_ID = 101153409;

const YandexMetrikaContainer: React.FC<YandexMetrikaProps> = ({ enabled }) => {
  const pathname = usePathname();

  useEffect(() => {
    const url = pathname + window.location.search;
    if (enabled && typeof yandexYm === "function") {
      yandexYm("hit", url);
    } else {
      console.log(`%c[YandexMetrika](HIT)`, "color: orange", url);
    }
  }, [pathname, enabled]);

  if (!enabled) return null;

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrikaContainer;
