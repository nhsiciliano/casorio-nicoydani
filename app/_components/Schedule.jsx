import Image from "next/image"
import { Parallax } from './Providers'
import { Button } from './material-tailwind'
import Link from "next/link"

export default function Schedule() {
    return (
        <section className="flex flex-col bg-[#bab296] lg:flex-row items-center justify-evenly">
            <Parallax scale={[1.2, 0.5, 'easeInQuad']}>
                <div className="mt-6 p-8 saturate-100 md:p-16 md:mt-0 md:h-[720px] md:w-[560px] flex justify-center">
                    <Image
                        src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1720654584/IMG_9666_yiuygx.jpg"
                        alt="Boda"
                        width={500}
                        height={700}
                        className="w-full h-full bg-cover rounded-md shadow-lg"
                    />
                </div>
            </Parallax>
            <div className="bg-[#ddc685] rounded-xl text-center md:w-full lg:w-1/2 mx-4 py-16 md:py-10 mt-4 mb-8 md:mt-0 ">
                <h1 className="text-3xl text-[#726d5d] md:text-5xl font-medium mb-2">Fiesta: Estancia La Linda</h1>
                <p className="text-2xl px-3 text-center text-white font-normal">Manuel Luis de Oliden 4651, Tortuguitas, Provincia de Buenos Aires</p>
                <Link
                    href='https://www.google.com/maps/place/Estancia+La+Linda+Eventos/@-34.472154,-58.7739365,15z/data=!4m6!3m5!1s0x95bc98e653d416b5:0xa321ba3b8a830551!8m2!3d-34.472154!4d-58.7739365!16s%2Fg%2F11bvtgtj3_?entry=ttu'
                    target="_blank"
                >
                    <Button variant="outlined" size="lg" color="brown" className="flex items-center gap-3 mx-auto mt-5">
                        <Image src="/maps.svg" alt="Maps" width={30} height={30} />
                        <p className="text-white">Ver ubicación en el mapa</p>
                    </Button>
                </Link>
                <h1 className="text-[#726d5d] text-xl font-semibold mt-5">DRESS CODE: FORMAL/ELEGANTE</h1>
                <div className="flex flex-col items-center justify-center md:flex-row gap-8 mt-5">
                    <div>
                        <h1 className="text-[#726d5d] text-3xl">CEREMONIA</h1>
                        <p className="text-[#726d5d] text-2xl">17:45 HS</p>
                    </div>
                    <div>
                        <h1 className="text-[#726d5d] text-3xl">RECEPCIÓN</h1>
                        <p className="text-[#726d5d] text-2xl">18:30 HS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}