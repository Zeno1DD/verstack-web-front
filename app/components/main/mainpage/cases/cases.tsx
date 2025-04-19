'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface CaseItem {
    title: string
    tags: string[]
    bg: string
    icon: string
    href: string
    category: string
}

const casesData: CaseItem[] = [
    {
        title: 'Linco',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
        category: 'Сайты',
    },
    {
        title: 'ЦЭО "Взгляд"',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
        category: 'Сайты',
    },
    {
        title: 'СкайПром',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
        category: 'Сайты',
    },
    {
        title: 'Walmi',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/walmi',
        category: 'Сайты',
    },
    {
        title: 'W2C',
        tags: ['Аватарка', 'Illustrator'],
        bg: '/cases/work2.jpg',
        icon: '',
        href: '',
        category: 'Аватарки',
    },
    {
        title: 'Межрегиональная Алюминевая компания',
        tags: ['Аватарка', 'Illustrator'],
        bg: '/cases/alum.jpg',
        icon: '',
        href: '',
        category: 'Аватарки',
    },
    {
        title: 'Аниме стикеры',
        tags: ['Аватарка', 'Illustrator'],
        bg: '/cases/animestik.jpg',
        icon: '',
        href: '',
        category: 'Аватарки',
    },
    {
        title: 'Чистый рынок',
        tags: ['Аватарки', 'Illustrator'],
        bg: '/cases/clearrinok.jpg',
        icon: '',
        href: '',
        category: 'Аватарки',
    },
    {
        title: 'Complexus',
        tags: ['Логотипы', 'Illustrator'],
        bg: '/cases/Complexus.jpg',
        icon: '',
        href: '',
        category: 'Логотипы',
    },
]

const categories = ['Все', 'Сайты', 'Логотипы', 'Аватарки']

export default function Cases() {
    const [activeCategory, setActiveCategory] = useState('Все')

    const filteredCases =
        activeCategory === 'Все'
            ? casesData
            : casesData.filter(item => item.category === activeCategory)

    const isSimpleGrid = activeCategory === 'Логотипы' || activeCategory === 'Аватарки'

    return (
        <section className="py-12">
            <h1 className="text-5xl font-extrabold mb-10 leading-7">Проекты</h1>

            {/* Табы */}
            <div className="flex gap-4 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full border transition ${activeCategory === cat
                                ? 'bg-black text-white'
                                : 'bg-white text-black border-gray-300'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Контент */}
            {isSimpleGrid ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredCases.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[450px] rounded-xl overflow-hidden group"
                        >
                            <Image
                                src={item.bg}
                                alt={item.title}
                                fill
                                className="object-cover rounded-xl transition duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex flex-col justify-end p-4">
                                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-white/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-[15px]">
                    {filteredCases.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            rel="noopener noreferrer"
                            className="w-[700px] h-[548px] relative rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src={item.bg}
                                alt={item.title}
                                fill
                                className="object-cover rounded-[50px]"
                            />
                            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end text-white z-10 p-[15px]">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3 text-sm font-medium">
                                        {item.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 rounded-full bg-white/25 backdrop-blur-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {item.icon && (
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src={item.icon}
                                                alt="Project Icon"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute inset-0 z-0" />
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}
