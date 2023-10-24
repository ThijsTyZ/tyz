import Image from 'next/image';
import { type ReactElement } from 'react';
import { name, role } from '@/app/data/copy';

export function Hero(): ReactElement {
  return (
    <section className="max-w-5xl flex flex-col text-white lg:pl-10 lg:py-10">
      <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
        <Image
          src="/img/thijs.jpeg"
          alt="Thijs profile picture"
          width={260}
          height={260}
          className="rounded-full lg:float-left lg:mr-10 mt-8 border-4 border-white border-opacity-60"
        />
        <h2 className="text-6xl py-5">{name}</h2>
        <h3 className="opacity-90 text-3xl max-w-5xl">
          {role.split('/').map((text, index) => (
            <>
              {index > 0 && (
                <>
                  /<br />
                </>
              )}
              {text}
            </>
          ))}
        </h3>
        <p className="lg:text-justify opacity-70 pt-4">
          Hi, I&apos;m Thijs Broerse, a passionate and highly skilled frontend
          expert with over 20 years of experience in web development and
          leadership. I excel at setting up, developing, and maintaining complex
          frontend systems, as well as leading international development teams.
          I have contributed to numerous award-winning projects and specialize
          in TypeScript, React, NextJS, Leadership and architecture.
        </p>
      </div>
    </section>
  );
}
