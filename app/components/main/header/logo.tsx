import Link from 'next/link';

export default function first() {
    return (
        <div className={`hidden md:block font-extrabold`}>
            <Link href="/" className="text-[20px] cursor-pointer">
                VERSTACK-WEB
            </Link>
        </div>
    )
}