'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from "@comp/main/logo"

export default function Header() {
    const pathname = usePathname()
    const [isTabsReady, setIsTabsReady] = useState(false)

    const items = [
        {
            text: 'Главная',
            type: 'link',
            href: '/',
            active: pathname === '/',
        },
        {
            text: 'Проекты',
            type: 'link',
            href: '/projects',
            active: pathname === '/projects',
        },
        {
            text: 'Контакты',
            type: 'link',
            href: '/contacts',
            active: pathname === '/contacts',
        },
    ]

    return (
        <header className="w-full flex items-center justify-start px-6 py-4">
            <div className="text-xl"
                
            />
            <div className="absolute right-[calc(36.33vw-141.24px)]">
                <Logo />
            </div>

        </header>
    )
}
