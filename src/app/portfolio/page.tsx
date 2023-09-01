import type { ReactElement } from 'react';
import ArticleBlock from '@/app/components/ArticleBlock';

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
      'Internal schooling program to train new and junior Frontend developer',
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
    <section className="p-5 mb-10 mt-10 bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent rounded-xl text-black text-sm">
      <h1 className="text-white text-2xl mb-5">Portfolio</h1>
      <div className="grid justify-between w-full lg:grid-cols-3 lg:text-left py-5">
        {projects.map(
          (
            { title, employer, year, description, href, technique, role },
            index,
          ) => (
            <ArticleBlock
              title={title}
              subtitle={`${year} - ${employer}`}
              text={description}
              variant={index % 2 ? 'black' : 'white'}
            />
            // <article
            //   className={`p-5 from-white to-transparent rounded-xl text-black ${
            //     index % 2 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
            //   }`}
            //   key={title}
            // >
            //   <h2>{title}</h2>
            //   <p>{description}</p>
            // </article>
          ),
        )}
      </div>
    </section>
  );
}
