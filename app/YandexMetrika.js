import Router from "next/router";
import React, { useCallback, useEffect } from "react";
import { YMInitializer, ym as yandexYm } from "react-yandex-metrika";

const YM_COUNTER_ID = 101153409;

const YandexMetrikaContainer = ({ enabled }) => {
  const hit = useCallback(
    (url) => {
      if (enabled && typeof yandexYm === "function") {
        yandexYm("hit", url);
      } else {
        console.log(`%c[YandexMetrika](HIT)`, "color: orange", url);
      }
    },
    [enabled]
  );

  useEffect(() => {
    hit(window.location.pathname + window.location.search);

    const handleRouteChange = (url) => hit(url);
    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [hit]);

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
