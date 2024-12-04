'use client';
import React, { useState } from 'react';

const Portfolio = () => {
  const [showCard, setShowCard] = useState('all');

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <>
      <section className='pt-20 pb-12 px-4 sm:px-6 lg:pt-[120px] lg:pb-[90px] dark:bg-dark'>
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
                    onClick={() => handleProject('branding')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'branding'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('design')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'design'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('marketing')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'marketing'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className='mb-1'>
                  <button
                    onClick={() => handleProject('development')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'development'
                        ? 'activeClasses bg-indigo-900 text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-indigo-900 hover:text-white'
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-wrap -mx-4'>
            <PortfolioCard
              ImageHref='https://i.ibb.co/64WfFPt/image-01.jpg'
              category='Branding'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/PT7ghRs/image-06.jpg'
              category='marketing'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/vkt8C1P/image-02.jpg'
              category='marketing'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/3FKqS1G/image-03.jpg'
              category='Development'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/m6dq2fX/image-04.jpg'
              category='Design'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://i.ibb.co/mCPjBsH/image-05.jpg'
              category='Marketing'
              title='Creative Agency'
              button='View Details'
              buttonHref='#'
              showCard={showCard}
            />
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
