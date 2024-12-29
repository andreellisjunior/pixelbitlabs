'use client';
import React, { useState } from 'react';
import KJ from '../../../public/assets/kjs-nailhause.jpg'
import Lola from '../../../public/assets/lola-designs.jpg'
import Bowler from '../../../public/assets/bowler-transmission.jpg'
import Ermajean from '../../../public/assets/ermajean.jpg'

const Portfolio = () => {
  const [showCard, setShowCard] = useState('all');

  const portfolio = [{
    image: KJ.src,
    category: 'Websites',
    title: `KJ's Nailhause`,
    button: `View Details`,
    href: `https://www.kjsnailhause.com/`,
    showCard,
  },
    {
      image: Bowler.src,
      category: 'E-Commerce',
      title: `Bowler Transmissions`,
      button: `View Details`,
      href: `https://bowlertransmissions.com/`,
      showCard,
    },
    {
      image: Lola.src,
      category: `Custom`,
      title: `Lola Designs Creative Play Studio`,
      button: `View Details`,
      href: `https://www.loladesignsstudio.com/`,
      showCard,
    },
    {
      image: Ermajean.src,
      category: 'Applications',
      title: `Ermajean`,
      button: `View Details`,
      href: `https://ermajean.com/`,
      showCard,
    }]

  // ImageHref={KJ.src}
  // category='Branding'
  // title='Creative Agency'
  // button='View Details'
  // buttonHref='#'
  // showCard={showCard}

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <>
      <section id='portfolio' className='pt-20 pb-12 px-4 sm:px-6 lg:pt-[120px] lg:pb-[90px] dark:bg-dark'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[510px] text-center'>
                <span className='text-teal-400 mb-2 block text-lg font-semibold'>
                  Our Portfolio
                </span>
                <h2 className='text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]'>
                  Here&apos;s What We&apos;ve Done
                </h2>
                <p className='text-body-color text-base dark:text-dark-6'>
                  Marketing websites, ecommerce, web & mobile applications,
                  whatever you need!
                </p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-center -mx-4'>
            <div className='w-full px-4'>
              <ul className='flex flex-wrap justify-center mb-12 space-x-1'>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('all')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'all'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('websites')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'websites'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Websites
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('custom')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'custom-design'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Custom Designed
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('e-commerce')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'e-commerce'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    E-Commerce
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('applications')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'applications'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Applications
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-wrap -mx-4'>
            {portfolio.map(({ image, category, title, button, href, showCard }, index) => (
                <PortfolioCard key={index} ImageHref={image} buttonHref={href} {...{ showCard, category, title, button }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === 'all' || showCard === category.toLowerCase()
            ? 'block'
            : 'hidden'
        }`}
      >
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px]'>
            <img src={ImageHref} alt='portfolio' className='w-full' />
          </div>
          <div className='relative z-10 mx-7 -mt-20 rounded-3xl bg-slate-900/80 backdrop-blur-xl dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio border-[0.5px] border-white/35'>
            <span className='text-primary mb-2 block text-sm font-medium'>
              {category}
            </span>
            <h3 className='text-white mb-5 text-xl font-bold'>{title}</h3>
            <a
              href={buttonHref}
              className='text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white'
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
