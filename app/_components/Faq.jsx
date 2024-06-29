

export default function Faq() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#726d5d] gap-3 py-12">
            <div>
                <h1 className="text-3xl md:text-4xl text-[#ddc685] text-center font-bold mb-4">¿Consultas?</h1>
                <h2 className="text-2xl md:text-3xl text-white text-center font-normal mb-4">Envianos un mensaje</h2>
            </div>
            <div className="flex items-center justify-center gap-20">
                <div>
                    <h1 className="text-2xl md:text-3xl text-[#ddc685] text-center font-normal mb-4">DANI</h1>
                    <p className="text-white text-center text-xl">11-3686-1316</p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl text-[#ddc685] text-center font-normal mb-4">NICO</h1>
                    <p className="text-white text-center text-xl">11-3155-2925</p>
                </div>
            </div>
        </div>
    )
}