import Image from "next/image"
import { Button } from './material-tailwind'
import Link from "next/link"

export default function Place() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#ddc685] gap-3 py-12">
            <h1 className="text-3xl text-white md:text-5xl font-medium mb-2">Lugar: Estancia La Linda</h1>
            <p className="text-2xl text-center text-white font-normal">Manuel Luis de Oliden 4651, Tortuguitas, Provincia de Buenos Aires</p>
            <Link 
                href='https://www.google.com/maps/place/Estancia+La+Linda+Eventos/@-34.472154,-58.7739365,15z/data=!4m6!3m5!1s0x95bc98e653d416b5:0xa321ba3b8a830551!8m2!3d-34.472154!4d-58.7739365!16s%2Fg%2F11bvtgtj3_?entry=ttu'
                target="_blank"
            >
                <Button variant="outlined" size="lg" color="white" className="flex items-center gap-3 mt-3">
                    <Image src="/maps.svg" alt="Maps" width={30} height={30} />
                    <p className="text-white">Ver ubicación en el mapa</p>
                </Button>
            </Link>
        </div>
    )
}