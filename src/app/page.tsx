'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Specs from './components/Specs';
import CTA from './components/CTA';
import Promises from './components/Promises';
import Footer from './components/Footer';
import Button from './components/Button';
import Logo from '../../public/Logo.svg';
import Image from 'next/image';
import { rubik } from './fonts/config';
import Portfolio from './components/Portfolio';

export const navigation = [
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div>
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav
            aria-label='Global'
            className='flex items-center justify-between p-6 lg:px-8'
          >
            <div className='flex lg:flex-1'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image src={Logo} alt='' className='h-16 w-auto' />
              </a>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(true)}
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon aria-hidden='true' className='h-6 w-6' />
              </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-sm/6 font-semibold'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <Button>Get Started</Button>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className='lg:hidden'
          >
            <div className='fixed inset-0 z-50' />
            <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0C0A10] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>PixelBitLabs</span>
                  <Image src={Logo} alt='' className='h-16 w-auto' />
                </a>
                <button
                  type='button'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-m-2.5 rounded-md p-2.5'
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <Button>Get Started</Button>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
          <div className='mx-auto max-w-6xl py-32 sm:py-48 lg:py-56'>
            {/* <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Announcing our next round of funding.{' '}
                <a href='#' className='font-semibold text-indigo-600'>
                  <span aria-hidden='true' className='absolute inset-0' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className='text-center'>
              <h1
                className={`text-balance text-5xl font-semibold tracking-tight sm:text-7xl ${rubik.className}`}
              >
                Transforming Your Vision into Engaging Digital Experiences
              </h1>
              <p className='mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8 max-w-2xl mx-auto'>
                From idea to launch, we’re here to bring your vision to life.
                Let’s build digital experiences that drive growth and success.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Button>Get Started</Button>
                <a href='#' className='text-sm/6 font-semibold'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
      {/* <SocialProof /> */}
      <Promises />
      <Specs />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  );
}
