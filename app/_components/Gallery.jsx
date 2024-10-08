import Image from "next/image";


export default function Gallery() {
    return (
        <div className="bg-[#726d5d]">
            <div className="container mx-auto px-3 py-8 md:px-10 md:py-14 lg:px-32">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                width={300}
                                height={300}
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719431619/74F61368-663C-4EBD-B01B-709808A18E55_eu20un.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                width={300}
                                height={300}
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1720655292/fotogatusi_vlqgmu.png" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                width={300}
                                height={300}
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719431619/E2D62994-9267-46E4-81F8-CA80912CE2DE_pcxzjw.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                width={300}
                                height={300}
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719431620/CE482B4B-E3AC-4959-8CB3-8B6FAF90F380_pqjozx.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                width={300}
                                height={300}
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719611458/paris467_uhj4ip.png" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                width={300}
                                height={300}
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719611929/cope345_krclj2.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}