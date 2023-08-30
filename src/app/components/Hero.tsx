import Image from 'next/image';
import { type ReactElement } from 'react';

export function Hero(): ReactElement {
  return (
    <section className="max-w-5xl flex flex-col">
      <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
        <Image
          src="/img/thijs.jpeg"
          alt="Thijs profile picture"
          width={150}
          height={150}
          className="rounded-full lg:float-left mr-10 mt-3"
        />
        <h2 className="text-black text-7xl py-5">Thijs Broerse</h2>
        <h3 className="text-stone-700 text-3xl max-w-5xl">
          Interim Tech Lead & Freelance Frontend Architect
        </h3>
      </div>

      <p className="py-5 lg:text-justify ">
        Thijs Broerse is a highly skilled Frontend expert with over 20 years of
        experience in web development and leadership. Thijs is able to set up,
        develop and maintain complex (frontend) systems, leading (international)
        development teams. Thijs worked on many (award winning) projects,
        specialized in scripting and architecture.
      </p>
    </section>
  );
}
