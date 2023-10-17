import { Header } from "./header";

export function App() {
  return (
    <>
      <Header />
      <main className='mb-24 mt-2 lg:mt-0'>
        <section>
          <div className='max-w-[1360px] mx-auto'>
            <div className='flex flex-col lg:flex-row gap-12 lg:gap-36 max-w-[1145px] lg:ml-[120px]'>
              <figure className='lg:order-2 lg:flex-1 lg:mt-[50px]'>
                <img
                  src='/image-hero-mobile.webp'
                  alt='Make remote work'
                  width={750}
                  height={564}
                  className='lg:hidden'
                />
                <img
                  src='/image-hero-desktop.webp'
                  alt='Make remote work'
                  width={960}
                  height={1280}
                  className='hidden lg:block'
                />
              </figure>

              <div className='lg:order-1 lg:flex-1 px-3 lg:px-0 flex flex-col gap-10 lg:justify-between lg:mt-40'>
                <div className='lg:flex-1 flex flex-col items-center lg:items-start gap-7 lg:gap-14'>
                  <h1 className='text-4xl lg:text-[78px] break-words text-almost-black text-center lg:text-left lg:font-bold leading-[1] w-[512px]'>
                    Make remote work
                  </h1>
                  <p className='text-base lg:text-lg font-medium text-medium-gray text-center lg:text-left max-w-md'>
                    Get your team in sync, no matter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                  </p>

                  <button
                    type='button'
                    className='text-almost-white bg-almost-black rounded-xl py-[10px] px-6 transition-colors border-2 border-transparent hover:text-almost-black hover:border-almost-black hover:bg-almost-white'
                  >
                    Learn more
                  </button>
                </div>
                <ul className='grid grid-cols-4 items-center justify-between gap-6'>
                  <li>
                    <a href='#'>
                      <span className='sr-only'>databiz</span>
                      <img
                        src='/client-databiz.svg'
                        alt='databiz client of work'
                        width={114}
                        height={20}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='sr-only'>audiophile</span>
                      <img
                        src='/client-audiophile.svg'
                        alt='audiophile client of work'
                        width={73}
                        height={36}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='sr-only'>meet</span>
                      <img
                        src='/client-meet.svg'
                        alt='meet client of work'
                        width={90}
                        height={20}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='sr-only'>maker</span>
                      <img
                        src='/client-maker.svg'
                        alt='maker client of work'
                        width={83}
                        height={24}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
