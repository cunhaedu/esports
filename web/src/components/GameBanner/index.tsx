import { IGame } from '../../pages/interfaces/IGame';

type GameBannerProps = {
  data: IGame;
}

export function GameBanner({ data }: GameBannerProps){
  return (
    <a href={`/games/${data.id}`} className='relative rounded-lg overflow-hidden'>
      <img
        src={data.bannerUrl}
        alt="imagem"
        className='w-48 h-60 object-cover'
      />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold block text-white'>{data.title}</strong>
        <span className='text-zinc-300 text-sm block mt-1'>{data._count.ads} Anúncios</span>
      </div>
    </a>
  );
}
