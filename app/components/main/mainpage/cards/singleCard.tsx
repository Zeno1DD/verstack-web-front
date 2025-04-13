"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ScrollSliderWrapper({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [inView, setInView] = useState(false);
    const totalSlides = React.Children.count(children);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.6 }
        );
        if (wrapperRef.current) observer.observe(wrapperRef.current);

        return () => {
            if (wrapperRef.current) observer.unobserve(wrapperRef.current);
        };
    }, []);

    useEffect(() => {
        let scrollDelta = 0;
        let scrollTimeout: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            const wrapperTop = wrapperRef.current?.getBoundingClientRect().top ?? 0;
            const wrapperBottom = wrapperRef.current?.getBoundingClientRect().bottom ?? 0;
            const windowHeight = window.innerHeight;

            const isAboveView = wrapperBottom < 0;
            const isBelowView = wrapperTop > windowHeight;

            // Повторно активируем inView, если пользователь вернулся в зону
            if (!inView && !isAboveView && !isBelowView) {
                setInView(true);
            }

            if (!inView) return;

            e.preventDefault();

            scrollDelta += e.deltaY;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const threshold = 100;

                if (scrollDelta > threshold && activeIndex < totalSlides - 1) {
                    setActiveIndex((prev) => prev + 1);
                } else if (scrollDelta < -threshold && activeIndex > 0) {
                    setActiveIndex((prev) => prev - 1);
                } else if (scrollDelta > threshold && activeIndex === totalSlides - 1) {
                    setInView(false); // отпускаем прокрутку
                }

                scrollDelta = 0;
            }, 100);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [activeIndex, inView, totalSlides]);

    return (
        <div
            ref={wrapperRef}
            className="h-[100vh] sticky top-0 overflow-hidden z-0"
        >
            <div
                className="transition-transform duration-500 h-full"
                style={{
                    transform: `translateY(-${activeIndex * 100}vh)`,
                    height: `${totalSlides * 100}vh`,
                }}
            >
                {React.Children.map(children, (child) => (
                    <div className="h-[100vh]">{child}</div>
                ))}
            </div>
        </div>
    );
}
