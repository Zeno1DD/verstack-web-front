'use client'
import Image from 'next/image'
interface TechItem {
    name: string
    icon: string
}

interface TechBlock {
    title: string
    items?: TechItem[]
}

const techData: TechBlock[] = [
    {
        title: 'Веб-дизайн',
        items: [
            { name: 'Figma', icon: '/figma.png' },
            { name: 'Photoshop', icon: '/photoshop.png' },
            { name: 'Illustrator', icon: '/illustrator.png' },
        ],
    },
    {
        title: `Технологии\nразработки`,
    },
    {
        title: 'Разработка',
        items: [
            { name: 'Next.js', icon: '/nextjs.png' },
            { name: 'Flutter', icon: '/flutter.png' },
            { name: 'Laravel', icon: '/laravel.png' },
            { name: 'Git', icon: '/git.png' },
        ],
    },
    {
        title: 'CMS и другие утилиты',
        items: [
            { name: 'WordPress', icon: '/wordpress.png' },
            { name: 'Blender', icon: '/blender.png' },
        ],
    },
]

export default function Technologies() {
    return (
        <section className="bg-[#171818] rounded-3xl p-8 text-white mx-auto mt-[15px]">
            <div className="grid md:grid-cols-4 gap-8">
                {techData.map((block, idx) => (
                    <div key={idx}>
                        <h3
                            className={`font-semibold mb-4 whitespace-pre-line ${block.title === 'Технологии\nразработки' ? 'text-[32px]' : 'text-[24px]'
                                }`}
                        >
                            {block.title}
                        </h3>
                        {block.items && block.items.length > 0 && (
                            <div className="flex flex-col gap-4">
                                {block.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 border border-white rounded-full px-4 py-3"
                                    >
                                        <div className="w-6 h-6 relative">
                                            <Image src={item.icon} alt={item.name} fill className="object-contain" />
                                        </div>
                                        <span className="text-base text-[24px] font-extrabold">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
