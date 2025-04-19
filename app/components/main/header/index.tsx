'use client'
import { usePathname } from 'next/navigation'
import Logo from "@/app/components/main/header/logo"
import LeftIcon from './leftIcon'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NavLink {
    text: string;
    href: string;
    active: boolean;
    pos: number;
}


export default function Header() {
    const pathname = usePathname()
    const [items, setItems] = useState<NavLink[]>([]);

    useEffect(() => {
        setItems([
            { text: 'Главная', href: '/', active: pathname === '/', pos: 0 },
            { text: 'Проекты', href: '/projects', active: pathname.startsWith('/projects'), pos: 1 },
            { text: 'Контакты', href: '/contacts', active: pathname === '/contacts', pos: 2 },
        ])
    }, [pathname]);
    

    return (
        <header className="w-full px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <LeftIcon />
            </div>
            <nav className="grid grid-cols-3 items-center gap-x-6 relative">
                {items.map(({ text, href, active }, index) => {
                    return (
                        <Link
                            key={index}
                            href={href}
                            className={`w-40 max-w-40 min-w-40 text-1xl font-semibold text-center py-3 rounded-full transition-all relative z-10
                                ${active
                                    ? 'text-white'
                                    : 'text-black'
                                }`}
                        >
                            ТЕСТИРОВАНИЕ
                            {text}
                        </Link>
                    )
                })}
                <div style={{ left: `${(items?.find((item, index, array) => item.active)?.pos ?? 0) * 184}px` }} className={`transition-all duration-300 bg-accent rounded-2xl w-40 h-full absolute z-0`}></div>
            </nav>
            <div className="text-xl font-bold tracking-wide">
                <Logo />
            </div>
        </header>
    )
}
