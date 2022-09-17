import * as Dialog from '@radix-ui/react-dialog';
import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Input } from '../../components/Form/Input';

import { GameBanner } from '../../components/GameBanner';
import { api } from '../../services/api';
import { IGame } from '../interfaces/IGame';

export default function Example() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    api.get<IGame[]>('/games').then(response => {
      setGames(response.data);
    });
  }, [])

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
                  <Dialog.Root>
                    <Dialog.Trigger
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-violet-500 px-8 py-3 text-base font-medium text-white hover:bg-violet-600 md:py-4 md:px-10 md:text-lg"
                    >
                      <MagnifyingGlassPlus size={24} />
                      Publicar anúncio
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

                      <Dialog.Content className='fixed max-h-[90vh] md:max-h-screen overflow-y-scroll md:overflow-y-auto bg-[#2A2634] py-8 px-4 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-4/5 lg:w-[480px] shadow-lg shadow-black/25'>
                        <Dialog.Title className='text-xl md:text-3xl font-black'>
                          Publique um anúncio
                        </Dialog.Title>

                        <form className='flex flex-col gap-4 mt-8'>
                          <div className='flex flex-col gap-2'>
                            <label htmlFor="game" className='font-semibold'>Qual o game</label>
                            <Input
                              id="game"
                              placeholder='Selecione o game que deseja jogar'
                            />
                          </div>

                          <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname)</label>
                            <Input
                              id="name"
                              placeholder='Como te chamam dentro da game?'
                            />
                          </div>

                          <div className='flex flex-col md:grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-2'>
                              <label htmlFor="yearsPlaying" className='font-semibold'>Joga há quantos anos?</label>
                              <Input
                                id="yearsPlaying"
                                type="number"
                                placeholder='Tudo bem ser 0'
                              />
                            </div>

                            <div className='flex flex-col gap-2'>
                              <label htmlFor="discord" className='font-semibold'>Qual o seu Discord?</label>
                              <Input
                                id="discord"
                                placeholder='usuario#0000'
                              />
                            </div>
                          </div>

                          <div className='flex flex-col md:flex-row gap-6'>
                            <div className='flex flex-col gap-2'>
                              <label htmlFor="weekDays">Quando costuma jogar?</label>

                              <div className='grid grid-cols-7 md:grid-cols-4 gap-2'>
                                <button
                                  title="Domingo"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >D</button>

                                <button
                                  title="Segunda"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >S</button>

                                <button
                                  title="Terça"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >T</button>

                                <button
                                  title="Quarta"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >Q</button>

                                <button
                                  title="Quinta"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >Q</button>

                                <button
                                  title="Sexta"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >S</button>

                                <button
                                  title="Sábado"
                                  className='w-8 h-8 rounded bg-zinc-900'
                                >S</button>
                              </div>
                            </div>

                            <div className='flex flex-col gap-2 md:flex-1'>
                              <label htmlFor="hourStart">Qual horário do dia?</label>
                              <div className='grid grid-cols-2 gap-6 md:gap-1'>
                                <Input type="time" id="hourStart" placeholder='De' />
                                <Input type="time" id="hourEnd" placeholder='Até' />
                              </div>
                            </div>
                          </div>

                          <div className='mt-2 flex gap-2 text-sm'>
                            <input type="checkbox" name="" id="" />
                            Costumo me conectar ao chat de voz
                          </div>

                          <footer className='mt-4 flex flex-col-reverse md:flex-row justify-end gap-4'>
                            <Dialog.Close
                              type="button"
                              className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                              Cancelar
                            </Dialog.Close>
                            <button
                              type="submit"
                              className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center hover:bg-violet-600'
                            >
                              <div className='self-center flex align-middle justify-center w-full gap-3'>
                                <GameController size={24} />
                                Encontrar duo
                              </div>
                            </button>
                          </footer>
                        </form>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
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
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 px-6'>
          {games.map(game => (
            <GameBanner key={game.id} data={game} />
          ))}
        </div>
      </section>
    </>
  )
}
