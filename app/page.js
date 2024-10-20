import Image from 'next/image'

export default function Home() {

  const galleryImages = [
    'https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437112/3bb358ca-8485-4caf-a71a-b956f13521df_sfzoj9.jpg',
    'https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437112/9a16b61e-05b4-427c-a7f6-1e3eade7e582_suamwj.jpg',
    'https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437112/5b99fb02-5019-4d49-aa32-ad27aaa17dba_uo7nn4.jpg',
    'https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437112/4ec0a211-5254-48d1-902b-e06c098f90fd_dpqtcb.jpg',
    'https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437112/aa4668a4-eebd-4c10-bd7f-cd2f5b405082_ksghy2.jpg',
    'https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437156/PHOTO-2024-10-19-17-26-23_e3vhoz.jpg',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1729437112/30c7e488-dc57-4365-b904-9c78194a279c_sprzsj.jpg"
          alt="Foto de boda"
          layout='fill'
          objectFit="contain"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl text-center font-bold px-4">
            Gracias por haber sido parte de una noche maravillosa
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="aspect-w-4 aspect-h-3">
              <Image
                src={src}
                alt={`Foto de boda ${index + 1}`}
                width={400}
                height={600}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-2xl mt-16 font-semibold">
          Próximamente todas las fotos de la fiesta!
        </p>
      </div>
    </div>
  );
}
