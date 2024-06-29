import Image from "next/image"

export default function Schedule() {
    return (
        <section className="flex flex-col bg-[#bab296] lg:flex-row items-center justify-evenly">
            <div className="mt-6 p-8 saturate-100 md:p-16 md:mt-0 md:h-[720px] md:w-[560px] flex justify-center">
                <img src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719431619/74F61368-663C-4EBD-B01B-709808A18E55_eu20un.jpg" alt="Boda" className="w-full h-full bg-cover rounded-md shadow-lg" />
            </div>
            <div className="bg-[#ddc685] rounded-xl text-center md:w-full lg:w-1/2 mx-4 py-16 md:py-10 mt-4 mb-8 md:mt-0 ">
                <div className="flex flex-col items-center justify-center gap-2 mb-4">
                    <Image src="/checklist.svg" alt="Hero" width={60} height={60} />
                    <h1 className="text-3xl text-black md:text-4xl font-normal">Detalles de la boda</h1>
                </div>
                <p className="text-2xl text-black font-normal mb-4">Preparate para un día lleno de alegría y diversión.</p>
                <div className="flex flex-col items-center justify-center gap-8 mt-8">
                    <div>
                        <h1 className="text-[#726d5d] text-4xl">CEREMONIA</h1>
                        <p className="text-[#726d5d] text-3xl">18:30 HS</p>
                    </div>
                    <div>
                        <h1 className="text-[#726d5d] text-4xl">RECEPCIÓN</h1>
                        <p className="text-[#726d5d] text-3xl">19:00 HS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}