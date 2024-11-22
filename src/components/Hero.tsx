import Image from 'next/image';
import { type ReactElement } from 'react';
import { name, role } from '@/data/copy';

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
          {role.split(' /').map((text, index) => (
            <>
              {index > 0 && (
                <>
                  &nbsp;/
                  <br />
                </>
              )}
              {text}
            </>
          ))}
        </h3>
        <p className="lg:text-justify opacity-70 pt-4 text-xl">
          Hi, I&apos;m Thijs Broerse, a frontend and full-stack expert with{' '}
          <strong>
            20+ years of experience in web development and leadership
          </strong>
          . I specialize in crafting robust web applications and leading
          international teams to success, with a track record of contributing to
          many <strong>award-winning</strong> projects.
        </p>
        <p className="lg:text-justify opacity-70 pt-10 text-xl">
          Passionate about web development and armed with expertise in{' '}
          <strong>TypeScript</strong>, <strong>React</strong>,{' '}
          <strong>NextJS</strong>, <strong>architecture</strong> and more. I
          embrace technical challenges and leadership roles but cherish
          teamwork. Let&apos;s collaborate on your next project!
        </p>
      </div>
    </section>
  );
}
