import Image from "next/image"
import { Button } from './material-tailwind'
import Link from "next/link"

export default function Place() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#ddc685] gap-3 py-12">
            <h1 className="text-3xl text-[#726d5d] md:text-5xl font-medium mb-2">Civil: Sede Comunal 6</h1>
            <p className="text-2xl text-center text-white font-normal">Av. Patricias Argentinas 277, CABA</p>
            <p className="text-4xl text-center text-white font-normal">09:30 HS</p>
            <Link
                href='https://www.google.com/maps/place/Sede+Comunal+6/@-34.6058329,-58.4327993,15z/data=!4m6!3m5!1s0x95bccb989a6cf453:0xe5486e046f4ffce4!8m2!3d-34.6058329!4d-58.4327993!16s%2Fg%2F1tfc7tff?entry=ttu'
                target="_blank"
            >
                <Button variant="outlined" size="sm" color="brown" className="flex items-center gap-3 mt-3 mb-5">
                    <Image src="/maps.svg" alt="Maps" width={30} height={30} />
                    <p className="text-white">Ver ubicación en el mapa</p>
                </Button>
            </Link>
        </div>
    )
}