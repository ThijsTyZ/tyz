import Link from 'next/link';
import type { ReactElement } from 'react';
import { Cta } from '@/app/components/Cta';

type Project = {
  title: string;
  employer: string;
  year: string;
  description: string;
  href?: string | ReadonlyArray<string>;
  technique?: string;
  role: string;
};

const projects: ReadonlyArray<Project> = [
  {
    title: 'Puntos Colombia',
    employer: 'MediaMonks',
    year: '2020',
    description: 'Online booking tool',
    href: 'https://viajes.puntoscolombia.com/vuelos',
    technique: 'Angular, TypeScript',
    role: 'Lead Developer',
  },
  {
    title: 'Prologis Operation Essentials',
    employer: 'MediaMonks',
    year: '2019',
    description:
      'Progressive web app for property managers to contact vendors.',
    technique: 'React, TypeScript, AWS Amplify, AppSync, GraphQL',
    role: 'Technical Director and Lead Developer',
  },
  {
    title: 'MonkAcademy',
    employer: 'MediaMonks',
    year: '2019',
    description:
      'Internal schooling program to train new and junior Frontend developers',
    role: 'Teacher',
  },
  {
    title: 'Genesis Car Configurator',
    employer: 'MediaMonks',
    year: '2019',
    description:
      '3D experience where you can configure your own Genesis car. Watch your car from every angle, look inside the car, turn on the lights, open doors, etc.',
    href: [
      'https://www.genesis.com/us/en/2021/genesis-g90.html/#/car-configurator/G90',
      'https://thefwa.com/cases/genesiscom',
    ],
    technique: 'Vue, WebGL, TypeScript',
    role: 'Architect and Lead Developer',
  },
  {
    title: 'Kodak Moments',
    employer: 'MediaMonks',
    year: '2017',
    description: 'Online Photo Book, Canvas, Prints, etc. creator',
    href: 'https://www.kodakmoments.com/',
    technique: 'TypeScript, React with custom server side rendering',
    role: 'Lead Developer',
  },
  {
    title: 'Old Spice Dream Runner',
    employer: 'MediaMonks',
    year: '2016',
    description: 'Mobile sports app',
    href: 'https://davidsonmike.com/dreamrunner',
    technique: 'TypeScript',
    role: 'Lead Developer',
  },
  {
    title: 'Bratz Studio App',
    employer: 'MediaMonks',
    year: '2016',
    description:
      'Mobile app for kids where they can play games and create their own Bratz doll',
    href: 'https://www.youtube.com/watch?v=MR_-07nMe10',
    technique: 'TypeScript',
    role: 'Lead Developer',
  },
  {
    title: 'Ask Russell',
    employer: 'MediaMonks',
    year: '2014',
    description: 'Mobile app, FWA',
    href: 'https://thefwa.com/cases/ask-russell-american-family-insurance',
    technique: 'TypeScript',
    role: 'Lead Developer',
  },
  {
    title: 'Temple ActionScript Library',
    employer: 'MediaMonks',
    year: '2008-2014',
    description:
      'Open Source ActionScript 3 toolkit for stable, high performance and maintainable Flash applications. Special designed for general everyday development.',
    href: 'https://code.google.com/archive/p/templelibrary/',
    technique: 'Flash, AS3',
    role: 'Founder & Lead Developer',
  },
  {
    title: 'Hi Tweet Fighter',
    employer: 'MediaMonks',
    year: '2013',
    description: 'Mobile game, FWA',
    href: 'https://thefwa.com/cases/hi-tweet-fighter',
    technique: 'HaXe, Flambe',
    role: 'Senior Developer',
  },
  {
    title: 'Nickelodeon - Teenage Mutant Ninja Turtles - Sewer Run',
    employer: 'MediaMonks',
    year: '2012',
    description: 'Mobile game, FWA',
    href: 'https://thefwa.com/cases/teenage-mutant-ninja-turtles-sewer-run',
    technique: 'HaXe, Flambe',
    role: 'Senior Developer',
  },
  {
    title: 'Efteling - Persoonlijk Sprookje (Personal Fairy Tale)',
    employer: 'MediaMonks',
    year: '2012',
    description:
      'An interactive fairy tale based on your personal visit to theme park Efteling. The fairy tale can be turned into a real book',
    href: 'https://www.youtube.com/watch?v=Zds7wDwZCy4',
    technique: 'Flash',
    role: 'Lead Developer',
  },
  {
    title: 'Albert Heijn - Voetbalplaatjes campaign (Hyves)',
    employer: 'MediaMonks',
    year: '2011',
    description: 'Create your own football picture',
    href: [
      'https://www.youtube.com/watch?v=Eshbfdn69Ts',
      'https://www.youtube.com/watch?v=KHCGUziH_EQ',
    ],
    technique: 'Flash',
    role: 'Lead Developer',
  },
  {
    title: 'Apart Game Table',
    employer: 'HKU graduation project',
    year: '2003',
    description:
      'A physical game table with 5 rows and 16 columns, 80 parts. Each part is a button and can light up in several colors and allows you to play games.',
    technique: 'Director Lingo, Flash',
    role: 'Founder, Game Developer',
  },
  {
    title: 'Eastcore',
    employer: 'Self Employed',
    year: '2002',
    description:
      'A social media platform with chat, photo upload, agenda and much more. Built before Facebook even existed!',
    technique: 'HTML, CSS, JavaScript, PHP, MySQL',
    role: 'Founder, Web Developer',
  },
];

export default function Portfolio(): ReactElement {
  return (
    <section>
      <h2 className="text-6xl py-5">Portfolio</h2>
      <p className="py-2 lg:text-justify opacity-70 lg:pr-10 pt-4">
        I&apos;ve had the privilege of working on numerous exciting web
        projects. Please explore this selection of my recent work. Due to
        confidentiality, I can&apos;t showcase everything, but these examples
        highlight my expertise.
        <br />
        <br />
        For more details or specific project inquiries, feel free to contact me.
        Thank you for visiting, and let&apos;s discuss how I can bring your web
        project to life.
      </p>
      {/* CTA */}
      <section className="max-w-5xl flex flex-col lg:place-items-center py-5">
        <Cta href="mailto:thijs@tyz.nl">Email thijs@tyz.nl</Cta>

        <a href="tel:+31689936821" className="text-white text-m max-w-5xl">
          or call me on +31 (0) 6 899 36 821
        </a>
      </section>
      {/**/}
      {projects.map(
        (
          { title, employer, year, description, href, technique, role },
          index,
        ) => (
          <article
            className={`p-5 pr-28 from-white to-transparent rounded-xl ${
              index % 2
                ? 'bg-gradient-to-l text-white'
                : 'bg-gradient-to-r text-black'
            }`}
            key={title}
          >
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h3 className="mb-3 opacity-40">
              {year} - {employer}
            </h3>
            <p className="text-sm opacity-70">
              {description}
              <br />
              {technique && (
                <>
                  <br />
                  Technique: {technique}
                </>
              )}
              <br />
              Role: {role}
              <br />
              {href &&
                (Array.isArray(href) ? (
                  <>
                    <br />
                    {href.map((h, hIndex) => (
                      <>
                        <Link
                          href={h}
                          className="underline"
                          target="_blank"
                          rel="noreferrer"
                          title={title}
                        >
                          Link to project {hIndex + 1}
                        </Link>
                        <br />
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    <br />
                    <Link
                      href={href as string}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                      title={title}
                    >
                      Link to project
                    </Link>
                  </>
                ))}
            </p>
          </article>
        ),
      )}
    </section>
  );
}
