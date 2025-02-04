import Image from 'next/image';
import { type ReactElement } from 'react';
import { name, role } from '@/data/copy';

export function Hero(): ReactElement {
  return (
    <section className="max-w-5xl flex flex-col  lg:pl-10 lg:py-10">
      <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
        <Image
          src="/img/thijs.jpeg"
          alt="Thijs profile picture"
          width={280}
          height={280}
          className="rounded-full lg:float-left lg:mr-8 border-4 border-orangeStart border-opacity-80"
        />
        <h2 className="text-6xl pb-4">{name}</h2>
        <h3 className="opacity-90 text-2xl max-w-5xl">{role}</h3>
        <h4 className="opacity-90 text-xl max-w-5xl pt-2">
          Architecting scalable solutions & leading teams to success
        </h4>
        <p className="lg:text-justify opacity-70 pt-4 text-l">
          I help companies build{' '}
          <strong className="text-orangeEnd">
            scalable, high-quality web applications
          </strong>{' '}
          and optimize their development processes. With 20+ years of experience
          in{' '}
          <strong className="text-orangeEnd">
            frontend engineering, architecture, and leadership
          </strong>
          , I specialize in{' '}
          <strong className="text-orangeEnd">React, TypeScript, Next.js</strong>
          , and guiding teams to success.
        </p>
        <p className="lg:text-justify opacity-70 pt-4 text-l italic">
          Hands-on, strategic, and always focused on impact. Let’s connect!
        </p>
      </div>
    </section>
  );
}
