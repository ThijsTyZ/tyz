import Link from 'next/link';
import { type ReactElement, Fragment } from 'react';
import ArticleBlock from '@/app/components/ArticleBlock';
import { Cta } from '@/app/components/Cta';
import { Hero } from '@/app/components/Hero';
import { skills, recommendations, paths, articles } from '@/app/data/copy';

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      {/* Think. Yield. Zenith. */}
      <section className="grid justify-between w-full lg:mb-0 lg:grid-cols-3 lg:text-left py-10">
        {articles.map((article, index) => (
          <ArticleBlock
            key={article.title}
            {...article}
            variant={index % 2 ? 'black' : 'white'}
          />
        ))}
      </section>
      {/**/}

      {/* Skills */}
      <section className="p-5 pb-20 mt-4 relative flex flex-col bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(255,255,255,0.6)] to-transparent rounded-xl text-black">
        <h2 className="mb-3 text-2xl font-semibold">Skills</h2>
        <p className="text-sm">
          {skills.map(({ name, href, description }, index) => (
            <Fragment key={name}>
              {Boolean(index) && <span className="opacity-60">, </span>}
              {href ? (
                <Link
                  href={`${href}`}
                  title={description ?? name}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="opacity-60 hover:opacity-100"
                >
                  {name}
                </Link>
              ) : (
                <span className="opacity-60">{name}</span>
              )}
            </Fragment>
          ))}
        </p>
      </section>
      {/**/}

      {/* CTA */}
      <section className="max-w-5xl flex flex-col lg:place-items-center py-10">
        <Cta href="mailto:thijs@tyz.nl">Email thijs@tyz.nl</Cta>

        <a href="tel:+31689936821" className="text-white text-m max-w-5xl">
          or call me on +31 (0) 6 899 36 821
        </a>
      </section>
      {/**/}

      {/* Portfolio */}
      <section className="p-5 w-full mt-4 bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent rounded-xl text-white text-sm">
        <h3 className="text-2xl mb-5">Work</h3>
        <p className="text-sm opacity-70">
          During my employment at Media.Monks, Lost Boys and as a freelancer I
          have worked for Hyundai Genesis, Prologis, Albert Heijn, Efteling,
          Kodak, Amazon, Radio 538, GMC, Nickelodeon, KPN Hi, Brunel, Old Spice,
          Remy Martin, Doritos, Pearl Opticiens, Ikea, ING, Dela, T-Mobile,
          Heineken, Coca Cola and more. For a selection of my work, checkout{' '}
          <Link
            href={paths.portfolio}
            className="underline hover:text-black"
            title="View my porfolio"
          >
            {' '}
            my portfolio
          </Link>{' '}
          or check my profile on{' '}
          <Link
            href="https://github.com/ThijsTyZ"
            target="_blank"
            rel="noreferrer"
            title="View my profile on Github"
            className="underline hover:text-black"
          >
            Github
          </Link>{' '}
          or{' '}
          <Link
            href="https://codepen.io/_TyZ_"
            target="_blank"
            rel="noreferrer"
            title="View my profile on Codepen"
            className="underline hover:text-black"
          >
            Codepen
          </Link>
        </p>

        <div className="flex flex-col lg:place-items-center py-10">
          <Cta path={paths.portfolio}>Check out my portfolio</Cta>
        </div>
      </section>
      {/**/}

      {/* Recommendations */}
      <section className="p-5 pb-20 mt-10 bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent rounded-xl text-black text-sm">
        <h3 className="text-white text-2xl mb-5">What others say about me</h3>
        {recommendations.map(({ text, author, position }, index) => (
          <p
            className={`p-5 from-white to-transparent rounded-xl text-black ${
              index % 2 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
            }`}
            key={author}
          >
            <q className="lg:text-justify italic">{text}</q>
            <br />
            <br />- <strong>{author}</strong> {position}
          </p>
        ))}
        <a
          href="https://www.linkedin.com/in/tyz81/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          title="Read more recommendations about me on LinkedIn"
        >
          Read more...
        </a>
      </section>
      {/**/}
    </>
  );
}
