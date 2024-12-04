'use client';

import { navigation } from '../page';
import Logo from '../../../public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-base-200 text-white'>
      <div className='max-w-7xl mx-auto px-8 py-6'>
        <div className='flex lg:items-end md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <Link
              href='/#'
              aria-current='page'
              className='flex gap-2 justify-center md:justify-start items-center'
            >
              <Image
                src={Logo}
                alt={`pixelbit logo`}
                priority={true}
                className='w-auto h-full'
                width={250}
                height={250}
              />
            </Link>
            <p className='mt-3 text-xs text-gray-500'>
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className='flex-grow flex flex-wrap flex-col gap-8 justify-center md:mt-0 mt-10 text-center'>
            <div className='flex flex-col md:flex-row gap-4 md:justify-end'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-base font-semibold'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <p className='text-xs text-center md:text-right text-gray-500'>
              Designed & Developed by{' '}
              <a href='https://aguynamedandre.com/' target='_blank'>
                A Guy Named Andre
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
