import Link from 'next/link';
import { type ReactElement, Fragment } from 'react';
import { Hero } from '@/app/components/Hero';
import { skills, recommendations } from '@/app/data/copy';

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      <section className="relative flex flex-col py-5">
        <h2 className="mb-3 text-2xl font-semibold">Skills</h2>
        <p className="text-sm text-gray-400">
          {skills.map(({ name, href, description }, index) => (
            <Fragment key={name}>
              {Boolean(index) && `, `}
              {href ? (
                <Link
                  href={`${href}`}
                  title={description ?? name}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="hover:text-gray-900"
                >
                  {name}
                </Link>
              ) : (
                <span className="">{name}</span>
              )}
            </Fragment>
          ))}
        </p>
      </section>

      <section className="grid justify-between w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <article className="py-5 lg:max-w-[30ch]">
          <h2 className="mb-3 text-2xl font-semibold">Leadership</h2>
          <p className="m-0 text-sm opacity-50">
            Unlock your team&apos;s full potential with my leadership. As an
            experienced leader for development teams, I offer a distinctive
            approach that blends <strong>mentoring</strong> and{' '}
            <strong>Agile</strong> methodologies seamlessly. With a focus on{' '}
            <strong>personal growth</strong> within an international context, I
            don&apos;t just drive projects forward – I cultivate individuals and
            teams, and elevate your team&apos;s performance to new heights.
          </p>
        </article>

        <article className="py-5 lg:max-w-[30ch]">
          <h2 className="mb-3 text-2xl font-semibold">Architecture</h2>
          <p className="m-0 text-sm opacity-50">
            Building for Change with Solid APIs. In the realm of architecture, I
            specialize in crafting robust solutions for intricate challenges,
            ensuring your systems remain agile and adaptive through smart{' '}
            <strong>API</strong> integration that creates a foundation embracing
            change. Let&apos;s collaborate to conquer complexity and construct a
            future-ready framework.
          </p>
        </article>

        <article className="py-5 lg:max-w-[30ch] ">
          <h2 className="mb-3 text-2xl font-semibold">
            Award Winning Websites
          </h2>
          <p className="m-0 text-sm opacity-50">
            In the world of development, I bring high standards, robustness, and
            a performance-driven approach to the table. With expertise in{' '}
            <strong>TypeScript</strong>, I create inclusive experiences through{' '}
            <strong>Accessibility</strong>
            (A11Y) integration. While my preference is <strong>React</strong>,
            I&apos;m proficient in <strong>Angular</strong> and{' '}
            <strong>Vue</strong> as well. Let&apos;s collaborate to deliver
            top-tier solutions that redefine possibilities and leave a lasting
            mark.
          </p>
        </article>
      </section>

      <section className="max-w-5xl flex flex-col lg:place-items-center py-10">
        <a
          href="mailto:thijs@tyz.nl"
          className="text-black text-4xl p-5 m-2 rounded-lg border border-transparent transition-colors border-gray-300 bg-gray-100 hover:border-gray-600 hover:bg-white hover:no-underline"
        >
          Email thijs@tyz.nl
        </a>
        <a href="tel:+31689936821" className="text-stone-700 text-xl max-w-5xl">
          or call me on +31 (0) 6 899 36 821
        </a>
      </section>

      <section className="max-w-5xl relative flex flex-col py-5">
        <h4 className="text-stone-700 text-3xl max-w-5xl">
          What others say about me
        </h4>

        {recommendations.map(({ text, author, position }) => (
          <p className="text-sm py-3 " key={author}>
            <q className="lg:text-justify text-sm text-gray-400 italic">
              {text}
            </q>
            <br />
            {author} - {position}
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
    </>
  );
}
