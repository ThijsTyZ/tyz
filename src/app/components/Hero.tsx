import { type ReactElement } from 'react';

export function Hero(): ReactElement {
  return (
    <section className="max-w-5xl flex flex-col lg:place-items-center">
      <h2 className="text-black text-7xl py-5">Thijs Broerse</h2>
      <h3 className="text-stone-700 text-3xl max-w-5xl">
        Interim Tech Lead & Freelance Frontend Architect
      </h3>

      <p className="py-5 lg:text-justify lg:max-w-3xl">
        Thijs Broerse is a highly skilled Frontend expert with over 20 years of
        experience in web development and leadership. Thijs is able to set up,
        develop and maintain complex (frontend) systems, leading (international)
        development teams. Thijs worked on many (award winning) projects,
        specialized in scripting and architecture.
      </p>
    </section>
  );
}
