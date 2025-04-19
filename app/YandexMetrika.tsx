"use client";

import React, { useEffect } from "react";
import { YMInitializer } from "react-yandex-metrika";
import { usePathname } from "next/navigation";

const YM_COUNTER_ID = 101153409;

interface YandexMetrikaProps {
  enabled: boolean;
}

declare global {
  interface Window {
    ym?: (
      method: string,
      target: string,
      options?: Record<string, unknown>
    ) => void;
  }
}

const YandexMetrikaContainer: React.FC<YandexMetrikaProps> = ({ enabled }) => {
  const pathname = usePathname();

  useEffect(() => {
    const url = pathname + window.location.search;
    if (enabled && typeof window.ym === "function") {
      window.ym("hit", url);
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