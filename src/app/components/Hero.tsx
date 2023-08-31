import Image from 'next/image';
import { type ReactElement } from 'react';

export function Hero(): ReactElement {
  return (
    <section className="max-w-5xl flex flex-col text-white lg:pl-10 py-10">
      <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
        <Image
          src="/img/thijs.jpeg"
          alt="Thijs profile picture"
          width={200}
          height={200}
          className="rounded-full lg:float-left mr-10 mt-8 border-4 border-white border-opacity-60"
        />
        <h2 className="text-6xl py-5">Thijs Broerse</h2>
        <h3 className="opacity-90 text-3xl max-w-5xl">
          Interim Tech Lead & Freelance Frontend Architect
        </h3>
        <p className="py-2 lg:text-justify opacity-70 lg:pr-10 pt-4">
          Thijs Broerse is a passionated, highly skilled Frontend expert with
          over 20 years of experience in web development and leadership. Thijs
          is able to set up, develop and maintain complex (frontend) systems,
          leading (international) development teams. Thijs worked on many (award
          winning) projects, specialized in scripting and architecture.
        </p>
      </div>
    </section>
  );
}
