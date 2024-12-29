import MobileFriendly from '../../../public/assets/mobile-friendly.jpg'
import ClearDesign from '../../../public/assets/clear-design.jpg'


export default function Promises() {
  return (
    <div id="services" className='bg-base/60 py-12'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-center text-base/7 font-semibold text-cyan-400'>
          Make an impact
        </h2>
        <p className='mx-auto mt-2 max-w-xl text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
          The things you need for your online presence
        </p>
        <div className='mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2'>
          <div className='relative lg:row-span-2'>
            <div className='absolute inset-px rounded-lg bg-slate-900 lg:rounded-l-[2rem]'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]'>
              <div className='px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10'>
                <p className='mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center'>
                  Mobile friendly
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-white max-lg:text-center'>
                 In this day and age of accessing the world on our phones, all of our websites and applications will have a mobile friendly approach.
                </p>
              </div>
              <div className='relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm'>
                <div className='absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl'>
                  <img
                    className='size-full object-cover object-top'
                    src={MobileFriendly.src}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]'></div>
          </div>
          <div className='relative max-lg:row-start-1'>
            <div className='absolute inset-px rounded-lg bg-slate-800 max-lg:rounded-t-[2rem]'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]'>
              <div className='px-8 pt-8 sm:px-10 sm:pt-10'>
                <p className='mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center'>
                  Performance
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-white max-lg:text-center'>
                 Nothing is worse than waiting for a website to load. We prioritize speed. Your data needs to load, and load quickly to get done what needs to be done.
                </p>
              </div>
              <div className='flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2'>
                <img
                  className='w-full max-lg:max-w-xs'
                  src='https://tailwindui.com/plus/img/component-images/bento-03-performance.png'
                  alt=''
                />
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]'></div>
          </div>
          <div className='relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2'>
            <div className='absolute inset-px rounded-lg bg-slate-950'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]'>
              <div className='px-8 pt-8 sm:px-10 sm:pt-10'>
                <p className='mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center'>
                  Security
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-white max-lg:text-center'>
                 Safety and security is our top priority. Every website and application will have top-tier specs for securing your customers data and ensuring site visitors are protected.
                </p>
              </div>
              <div className='flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2'>
                <img
                  className='h-[min(152px,40cqw)] object-cover object-center'
                  src='https://tailwindui.com/plus/img/component-images/bento-03-security.png'
                  alt=''
                />
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5'></div>
          </div>
          <div className='relative lg:row-span-2'>
            <div className='absolute inset-px rounded-lg bg-slate-900 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]'>
              <div className='px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10'>
                <p className='mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center'>
                  Clear design
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-white max-lg:text-center'>
                 We understand the pain of not knowing where to click or what to do next. All design are clean AND clear. No questions asked!
                </p>
              </div>
              <div
                  className='relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm'>
                <div
                    className='absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl'>
                  <img
                      className='size-full object-cover object-top'
                      src={ClearDesign.src}
                      alt=''
                  />
                </div>
              </div>
            </div>
            <div
                className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
