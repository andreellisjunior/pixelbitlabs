import Button from './Button';

export default function CTA() {
  return (
    <div className='relative isolate overflow-hidden bg-base py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <div className='max-w-xl lg:max-w-lg flex flex-col gap-4'>
            <h2 className='text-4xl font-semibold tracking-tight'>
              What are you waiting for?
            </h2>
            <p className='mt-4 text-lg'>
             Get in contact today to get your online presence tailored to your brand and experience!
            </p>
            <a href='https://uw908ylzc31.typeform.com/to/l94YCrvK'>
              <Button>Get Started</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
