'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CaseItem {
    title: string
    tags: string[]
    bg: string
    icon: string
    href: string
}

const casesData: CaseItem[] = [
    {
        title: 'Linco',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
    },
    {
        title: 'Linco',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
    },
    {
        title: 'Linco',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
    },
    {
        title: 'Linco',
        tags: ['UX/UI', 'Website', 'WordPress'],
        bg: '/cases/bg1.png',
        icon: '/cases/aww.png',
        href: 'projects/Linko',
    },
]

export default function Cases() {
    return (
        <section className="py-12">
            <h1 className="text-5xl font-extrabold mb-10 leading-7" >Проекты</h1>
            <div className="grid md:grid-cols-2 gap-[15px]">
                {casesData.map((item, index) => (
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
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={item.icon}
                                        alt="Project Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 z-0" />
                    </Link>
                ))}
            </div>
        </section>
    )
}
