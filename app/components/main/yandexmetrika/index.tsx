"use client"
import { YMInitializer } from 'react-yandex-metrika';
import { useEffect } from 'react';

export default function Mertika() {
    useEffect(() => {
        // Use window.ym if available
        if (typeof window !== 'undefined' && window.ym) {
            window.ym('hit', window.location.pathname);
        }
    }, []);
    return (

        <YMInitializer
            accounts={[101153409]}
            options={{
                defer: true,
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
            }}
            version="2"
        />
    )

}