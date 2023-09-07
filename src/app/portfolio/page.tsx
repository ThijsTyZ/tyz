import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';
import { paths } from '@/app/data/copy';

type Project = {
  title: string;
  employer: string;
  year: string;
  description: string | ReactNode;
  href?: string;
  technique?: string;
  role: string;
  images: ReadonlyArray<string>;
  hasFwa?: boolean;
};

const projects: ReadonlyArray<Project> = [
  {
    title: 'Puntos Colombia',
    employer: 'MediaMonks',
    year: '2020',
    description: 'Online booking tool for flights, hotels, cars and more.',
    href: 'https://viajes.puntoscolombia.com/vuelos',
    technique: 'Angular, TypeScript',
    role: 'Lead Developer',
    images: [
      'puntos_columbia_1.png',
      'puntos_columbia_2.png',
      'puntos_columbia_3.png',
    ],
  },
  {
    title: 'Prologis Operation Essentials',
    employer: 'MediaMonks',
    year: '2019',
    description:
      'Progressive web app for property managers to contact vendors.',
    technique: 'React, TypeScript, AWS Amplify, AppSync, GraphQL',
    role: 'Technical Director and Lead Developer',
    images: ['prologis_operation_essentials.png'],
  },
  {
    title: 'MonkAcademy',
    employer: 'MediaMonks',
    year: '2019',
    description:
      'Internal schooling program at MediaMonks to train new and junior Frontend developers',
    href: 'https://codepen.io/collection/DbYLGP?grid_type=list',
    role: 'Teacher',
    images: ['monk_academy.png'],
  },
  {
    title: 'Genesis Car Configurator',
    employer: 'MediaMonks',
    year: '2019',
    description: (
      <>
        3D experience where you can configure your own Genesis car. Watch your
        car from every angle, look inside the car, turn on the lights, open
        doors, etc.
        <br />
        <br />
        The best-looking car configurator on the web — according to Reddit — the
        new Genesis.com puts the G70, G80 and G90 in the spotlight like never
        before. Build your own MotorTrend Car of the Year 2019 from color to
        trim in a seamless 3D environment with true-to-life lighting.
      </>
    ),
    href: 'https://thefwa.com/cases/genesiscom',

    technique: 'Vue, WebGL, TypeScript',
    role: 'Architect and Lead Developer',
    images: [
      'genesis_car_configurator_1.png',
      'genesis_car_configurator_2.png',
      'genesis_car_configurator_3.png',
    ],
    hasFwa: true,
  },
  {
    title: 'Kodak Moments',
    employer: 'MediaMonks',
    year: '2017',
    description: 'Online Photo Book, Canvas, Prints, etc. creator',
    href: 'https://www.kodakmoments.com/',
    technique: 'TypeScript, React with custom server side rendering',
    role: 'Lead Developer',
    images: [
      'kodak_moments_1.png',
      'kodak_moments_2.png',
      'kodak_moments_3.png',
      'kodak_moments_4.png',
      'kodak_moments_5.png',
      'kodak_moments_6.png',
    ],
  },
  {
    title: 'Old Spice Dream Runner',
    employer: 'MediaMonks',
    year: '2016',
    description: (
      <>
        We introduced old spice dream runner: if you can run it, you can get it!
        through our custom-built mobile website, people were encouraged to
        <br />
        1) apply the product, <br />
        2) plan a creative run <br />
        3) run/jog/walk a that route in the shape of something they have always
        wanted, <br />
        4) submit run to old spice <br />
        5) stand by the mailbox and wait for their thingy. Thousands and
        thousands of runs were submitted and prizes distributed, but most
        importantly we finally gave people a reason to exercise that didn&apos;t
        not involve dreams of gold medals, profitable shoe endorsements or
        better health!
      </>
    ),
    href: 'https://davidsonmike.com/dreamrunner',
    technique: 'TypeScript',
    role: 'Lead Developer',
    images: [
      'oldspice_dreamrunner_1.png',
      'oldspice_dreamrunner_2.png',
      'oldspice_dreamrunner_3.png',
      'oldspice_dreamrunner_4.png',
    ],
  },
  {
    title: 'Bratz Studio App',
    employer: 'MediaMonks',
    year: '2016',
    description: (
      <>
        Mobile app for kids where they can play games and create their own Bratz
        doll.
        <br />
        <br />
        In this Bratz App, you’ll start by customizing your very own Bratz
        character. You can give her a name and of course, give her awesome
        style! You can choose from a ton of different outfits and accessories,
        and you can even select pieces from your favorite Bratz outfits.
      </>
    ),
    href: 'https://www.yayomg.com/bratz-app/',

    technique: 'TypeScript',
    role: 'Lead Developer',
    images: [
      'bratz_studio_app_1.jpg',
      'bratz_studio_app_2.jpg',
      'bratz_studio_app_3.jpg',
      'bratz_studio_app_4.jpg',
      'bratz_studio_app_5.jpg',
    ],
  },
  {
    title: 'Ask Russell',
    employer: 'MediaMonks',
    year: '2014',
    description:
      'Ask pro quarterback Russell Wilson about his on- and off the field dreams to start the conversation with this voice controlled app. Hours of content, unlocked by queries and questions across iOS and Android.',
    href: 'https://thefwa.com/cases/ask-russell-american-family-insurance',
    technique: 'TypeScript',
    role: 'Lead Developer',
    images: ['ask_russell_1.png', 'ask_russell_2.png', 'ask_russell_3.png'],
    hasFwa: true,
  },
  {
    title: 'Temple ActionScript Library',
    employer: 'MediaMonks',
    year: '2008-2014',
    description: (
      <>
        Open Source ActionScript 3 toolkit for stable, high performance and
        maintainable Flash applications. Special designed for general everyday
        development.
        <br />
        <br />
        The Temple consists of classes we use on a regular basis. They are
        designed for re-usability and optimized for performance and memory
        usage. The Temple is specially designed to work with other frameworks
        like Gaia, Robotlegs or TweenLite.
        <br />
        <br />
        The Temple focuses on: Memory Management, Event listeners management
        (removeAllEventListeners(), addEventListenerOnce()), Destruction,
        Debugging, Utilities, UI Components, Forms, Data loading, parsing and
        handling, Layout, Caching, Facebook Communication But the Temple
        contains many other classes which can help you in work as a Flash
        Developer. The Temple can also be useful for Flash Animators for
        creating easy, fast and stable interactive UI Components.
      </>
    ),
    href: 'https://code.google.com/archive/p/templelibrary/',
    technique: 'Flash, AS3',
    role: 'Founder & Lead Developer',
    images: [
      'temple_actionscript_library_1.png',
      'temple_actionscript_library_2.png',
      'temple_actionscript_library_3.png',
    ],
  },
  {
    title: 'Hi Tweet Fighter',
    employer: 'MediaMonks',
    year: '2013',
    description:
      'Tweetfighter challenges you to a social browser based battle and brawl. Pit your Likes, Tweets and Instagram posts against friend or foe and may the most social fighter win!',
    href: 'https://thefwa.com/cases/hi-tweet-fighter',
    technique: 'HaXe, Flambe',
    role: 'Senior Developer',
    images: [
      'hi_tweet_fighter_1.png',
      'hi_tweet_fighter_2.png',
      'hi_tweet_fighter_3.png',
    ],
    hasFwa: true,
  },
  {
    title: 'Nickelodeon - Teenage Mutant Ninja Turtles - Sewer Run',
    employer: 'MediaMonks',
    year: '2012',
    description:
      'Super side scrolling mayhem ensues as the Teenage Mutant Ninja Turtles make their long awaited return. Each character has unique levels and gameplay options, and is rendered in their full 3D glory.',
    href: 'https://thefwa.com/cases/teenage-mutant-ninja-turtles-sewer-run',
    technique: 'HaXe, Flambe',
    role: 'Senior Developer',
    images: [
      'tmnt_sewer_run_1.jpg',
      'tmnt_sewer_run_2.jpg',
      'tmnt_sewer_run_3.jpg',
    ],
    hasFwa: true,
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
    images: [
      'efteling_persoonlijk_sprookje_1.png',
      'efteling_persoonlijk_sprookje_2.png',
      'efteling_persoonlijk_sprookje_3.png',
    ],
  },
  {
    title: 'Albert Heijn - Voetbalplaatjes campaign (Hyves)',
    employer: 'MediaMonks',
    year: '2011',
    description: (
      <>
        The website for the Albert Heijn - Football Sticker campaign served as a
        central hub where customers and football fans could participate in this
        highly successful campaign. On the website, users could not only view
        the available football stickers but also personalize their own football
        stickers by uploading photos. This added a personal touch to the
        campaign and allowed people to create their own unique collection.
        <br />
        <br />
        The campaign was exceptionally successful because it not only excited
        football fans to collect but also fostered a sense of community and
        interaction. People could trade football stickers with friends and
        family, and the ability to create personalized football stickers added a
        creative dimension to the collection process. This made the campaign not
        only fun but also highly engaging, quickly becoming a standout and
        memorable marketing initiative by Albert Heijn.
      </>
    ),
    href: 'https://www.youtube.com/watch?v=Eshbfdn69Ts',
    technique: 'Flash',
    role: 'Lead Developer',
    images: [
      'albertheijn_voetbalplaatjes_1.png',
      'albertheijn_voetbalplaatjes_2.png',
      'albertheijn_voetbalplaatjes_3.png',
      'albertheijn_voetbalplaatjes_4.png',
      'albertheijn_voetbalplaatjes_5.png',
      'albertheijn_voetbalplaatjes_6.png',
      'albertheijn_voetbalplaatjes_7.png',
    ],
  },
  {
    title: 'Apart Game Table',
    employer: 'HKU graduation project',
    year: '2003',
    description:
      'A physical game table with 5 rows and 16 columns, 80 parts. Each part is a button and can light up in several colors and allows you to play games.',
    technique: 'Director Lingo, Flash',
    role: 'Founder, Game Developer',
    images: [
      'apart_game_table_1.jpg',
      'apart_game_table_2.jpg',
      'apart_game_table_3.jpg',
      'apart_game_table_4.jpg',
      'apart_game_table_5.jpg',
    ],
  },
  {
    title: 'Eastcore',
    employer: 'Self Employed',
    year: '2002',
    description:
      'A social media platform with chat, photo upload, agenda and much more. Built before Facebook even existed!',
    technique: 'HTML, CSS, JavaScript, PHP, MySQL',
    role: 'Founder, Developer',
    images: [
      'eastcore_1.png',
      'eastcore_2.png',
      'eastcore_3.png',
      'eastcore_4.png',
      'eastcore_5.png',
      'eastcore_6.png',
    ],
  },
];

export default function Portfolio(): ReactElement {
  return (
    <section className="p-5 mb-10 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-transparent rounded-xl text-white text-sm">
      <h2 className="text-6xl">Portfolio</h2>
      <p className="py-5 text-justify opacity-70 lg:pr-10 pt-4">
        I&apos;ve had the privilege of working on numerous exciting web
        projects. Please explore this selection of my work. Due to
        confidentiality, I can&apos;t showcase everything, but these examples
        highlight my expertise.
        <br />
        <br />
        For more details or specific project inquiries, feel free to contact me.
        Thank you for visiting, and let&apos;s discuss how I can bring your web
        project to life.
      </p>
      {projects.map(
        (
          {
            title,
            employer,
            year,
            description,
            href,
            technique,
            role,
            images,
            hasFwa,
          },
          index,
        ) => (
          <article
            className={`p-5 from-white to-transparent rounded-xl relative lg:flex lg:flex-row-reverse ${
              index % 2
                ? 'bg-gradient-to-l text-white'
                : 'bg-gradient-to-r text-black'
            }`}
            key={title}
          >
            {hasFwa && (
              <Image
                src="/img/portfolio/fwa-badge.png"
                alt="This project won a Favorite Website Awart"
                width={150}
                height={150}
                className="absolute top-0 right-0"
              />
            )}

            <div className="w-auto">
              <Image
                key={images[0]}
                src={`/img/portfolio/${images[0]}`}
                width={600}
                height={600}
                alt={`image ${title}`}
                className="rounded-lg max-lg:mb-5 max-lg:w-full"
              />
            </div>

            <div
              className={`w-full  pr-8 lg:pr-32 ${
                index % 2 ? `drop-shadow-[0_0px_5px_rgba(0,0,0,1)]` : ''
              }`}
            >
              <h2 className="text-2xl font-semibold">{title}</h2>
              <h3 className="mb-3 opacity-40">
                {year} - {employer}
              </h3>
              <p className="text-sm opacity-70 text-justify">
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
                {href && (
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
                )}
              </p>
            </div>
          </article>
        ),
      )}
      <br />
      <Link href={paths.home} className="underline p-5">
        Back to home
      </Link>
    </section>
  );
}
