import { MagnifyingGlassPlus } from 'phosphor-react';

export default function Example() {
  return (
    <>
      <div className="min-h-[90vh] bg-main bg-no-repeat bg-cover bg-center">
        <div className="mx-auto max-w-7xl">
          <main className="sm:text-center lg:text-left h-[90vh] w-full flex flex-col-reverse lg:flex-row align-middle justify-evenly lg:justify-between">
            <aside className='lg:h-full px-8 flex align-middle justify-center flex-col lg:w-1/2'>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Seu <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span> está aqui.
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Encontre aqui aquela dupla perfeita para você compartilhar as melhores (ou não tão boas) experiências enquanto joga.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-violet-500 px-8 py-3 text-base font-medium text-white hover:bg-violet-600 md:py-4 md:px-10 md:text-lg"
                  >
                    Encontrar meu duo
                  </a>
                </div>
              </div>
            </aside>
            <section className='h-64 lg:h-full flex align-middle justify-center flex-col lg:w-1/2'>
              <img src="/assets/logo.svg" alt="logo" className='w-64 lg:w-2/4 self-center' />
            </section>
          </main>
        </div>
      </div>

      <section className="mx-auto max-w-[1344px] flex flex-col items-center mb-10">
        <div className='grid grid-cols-6 gap-6'>
          <a className='relative rounded-lg overflow-hidden'>
            <img
              src="https://www.xtrafondos.com/wallpapers/ano-nuevo-lunar-league-of-legends-9411.jpg"
              alt="imagem"
              className='w-48 h-60 object-cover'
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold block text-white'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>

          <a className='relative rounded-lg overflow-hidden'>
            <img
              src="https://www.xtrafondos.com/wallpapers/ano-nuevo-lunar-league-of-legends-9411.jpg"
              alt="imagem"
              className='w-48 h-60 object-cover'
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold block text-white'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>

          <a className='relative rounded-lg overflow-hidden'>
            <img
              src="https://www.xtrafondos.com/wallpapers/ano-nuevo-lunar-league-of-legends-9411.jpg"
              alt="imagem"
              className='w-48 h-60 object-cover'
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold block text-white'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>

          <a className='relative rounded-lg overflow-hidden'>
            <img
              src="https://www.xtrafondos.com/wallpapers/ano-nuevo-lunar-league-of-legends-9411.jpg"
              alt="imagem"
              className='w-48 h-60 object-cover'
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold block text-white'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>

          <a className='relative rounded-lg overflow-hidden'>
            <img
              src="https://www.xtrafondos.com/wallpapers/ano-nuevo-lunar-league-of-legends-9411.jpg"
              alt="imagem"
              className='w-48 h-60 object-cover'
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold block text-white'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>

          <a className='relative rounded-lg overflow-hidden'>
            <img
              src="https://www.xtrafondos.com/wallpapers/ano-nuevo-lunar-league-of-legends-9411.jpg"
              alt="imagem"
              className='w-48 h-60 object-cover'
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold block text-white'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>
        </div>
      </section>

      <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 mx-auto mb-20'>
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </button>
    </>
  )
}
