import Link from 'next/link';
import { type ReactElement } from 'react';
import ArticleBlock from '@/components/ArticleBlock';
import { Cta } from '@/components/Cta';
import { Hero } from '@/components/Hero';
import { Logo } from '@/components/Logo';
import {
  skills,
  recommendations,
  paths,
  articles,
  email,
  phonenumber,
} from '@/data/copy';

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      {/* Think. Yield. Zenith. */}
      <section className="grid justify-between w-full lg:grid-cols-3 lg:text-left py-5">
        {articles.map((article, index) => (
          <ArticleBlock
            key={article.title}
            {...article}
            variant={index % 2 ? 'black' : 'white'}
          />
        ))}
      </section>
      {/**/}

      {/* CTA */}
      <section className="flex flex-col lg:place-items-center py-5">
        <Cta href={email.href} title={email.title}>
          Email {email.text}
        </Cta>

        <a
          href={phonenumber.href}
          title={phonenumber.title}
          className="text-white text-m text-center"
        >
          or call me on {phonenumber.text}
        </a>
      </section>
      {/**/}

      {/* Skills */}
      <section className="p-5 mt-4 relative  bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-transparent rounded-xl text-black w-full">
        <h2 className="mb-3 text-2xl font-semibold">Skills</h2>

        <ul className="text-sm grid lg:grid-cols-3 grid-cols-2">
          {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
          {skills.map(({ group, skills }) => (
            <li key={group}>
              <span className="font-semibold">{group}</span>
              <ul className="ml-4 mb-4">
                {skills.map(({ name, href, description, isHighlighted }) => (
                  <li key={name}>
                    {href ? (
                      <Link
                        href={`${href}`}
                        title={description ?? name}
                        target={href.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className={`opacity-60 hover:opacity-100 ${
                          isHighlighted ? 'font-bold' : ''
                        }`}
                      >
                        {name}&nbsp;
                        <span className="inline-block rotate-90 opacity-30">
                          ⎋
                        </span>
                      </Link>
                    ) : (
                      <span
                        className={`opacity-60 ${
                          isHighlighted ? 'font-bold' : ''
                        }`}
                      >
                        {name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="flex flex-col lg:place-items-center py-10">
          <Cta
            href="/pdf/Curriculum Vitae - Thijs Broerse.pdf"
            target="_blank"
            rel="noreferrer"
            title="Download my Curriculum Vitae"
            download
          >
            Download CV
          </Cta>
        </div>
      </section>
      {/**/}

      <section className="p-5 mt-4">
        <Logo />
      </section>

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
          </Link>{' '}
          for code examples.
        </p>

        <div className="flex flex-col lg:place-items-center py-10">
          <Cta path={paths.portfolio}>Check out my portfolio</Cta>
        </div>
      </section>
      {/**/}

      {/* Recommendations */}
      <section className="p-5 mb-10 mt-10 bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent rounded-xl text-black text-sm">
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
        <br />
        <a
          href="https://www.linkedin.com/in/tyz81/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          title="Read more recommendations about me on LinkedIn"
          className="underline p-5"
        >
          Read more...
        </a>
      </section>
      {/**/}
    </>
  );
}
