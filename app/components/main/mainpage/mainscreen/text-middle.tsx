import Arrow from '@media/arrow.png'
import Image from 'next/image'
import Link from 'next/link'

export default function TextMiddle({className}: Readonly<{
    className?: string}>) 
    {
    return (
        <div className={`${className} flex flex-row mt-[160px] justify-between mb-[100px]`}>
            <div>
                <p className="font-extrabold text-2xl leading-6">
                Раскрываем безграничное <br />
                творчество для <br />
                вашего бренда <br />
                </p>
            </div>
            <div className="flex flex-col items-end">
                <div className='flex flex-row items-end'>
                    <Link className='text-accent text-2xl leading-5 font-extrabold flex flex-row items-end' href="/contacts"> Связаться с нами
                    <Image className='h-[23px] ml-3'
                        src={Arrow}
                        width={25}
                        height={23}
                        alt="arrow"
                    />
                    </Link>
                    
                </div>
                <div className='text-right mt-4 text-5xl font-extrabold'>
                    <p>Разработка веб‑сайтов <br />
                        и мобильных приложений <br />
                        для бизнеса</p>
                </div>
            </div>
        </div>
    )

};
