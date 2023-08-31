import Link from 'next/link';
import { type ReactElement, Fragment } from 'react';
import { Hero } from '@/app/components/Hero';
import { skills, recommendations, paths } from '@/app/data/copy';

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      {/* Think. Yield. Zenith. */}
      <section className="grid justify-between w-full lg:mb-0 lg:grid-cols-3 lg:text-left py-10">
        <article className="p-5 pb-10 lg:pb-32 bg-gradient-to-r lg:bg-gradient-to-b from-white to-transparent rounded-xl text-black">
          <h2 className="mb-3 text-2xl font-semibold">Think.</h2>
          <h3 className="mb-3 text-xl font-semibold">Architecture</h3>
          <p className="text-sm opacity-70">
            Unlock your team&apos;s full potential with my leadership. As an
            experienced leader for development teams, I offer a distinctive
            approach that blends <strong>mentoring</strong> and{' '}
            <strong>Agile</strong> methodologies seamlessly. With a focus on{' '}
            <strong>personal growth</strong> within an international context, I
            don&apos;t just drive projects forward – I cultivate individuals and
            teams, and elevate your team&apos;s performance to new heights.
          </p>
        </article>
        <article className="p-5 pb-10 lg:pb-32 bg-gradient-to-l lg:bg-gradient-to-t from-[rgba(255,255,255,0.2)] to-transparent rounded-xl text-black">
          <h2 className="mb-3 text-2xl font-semibold text-white">Yield.</h2>
          <h3 className="mb-3 text-xl font-semibold text-white">Leadership</h3>
          <p className="text-sm opacity-70 text-white">
            Building for Change with Solid APIs. In the realm of architecture, I
            specialize in crafting robust solutions for intricate challenges,
            ensuring your systems remain agile and adaptive through smart{' '}
            <strong>API</strong> integration that creates a foundation embracing
            change. Let&apos;s collaborate to conquer complexity and construct a
            future-ready framework.
          </p>
        </article>
        <article className="p-5 pb-10 lg:pb-32 bg-gradient-to-r lg:bg-gradient-to-b from-white to-transparent rounded-xl text-black">
          <h2 className="mb-3 text-2xl font-semibold">Zenith.</h2>
          <h3 className="mb-3 text-xl font-semibold">Amazing Websites</h3>
          <p className="text-sm opacity-70">
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
        <Link
          href="mailto:thijs@tyz.nl"
          className="text-black text-4xl p-5 m-2 rounded-lg border border-transparent transition-colors border-gray-300 bg-gray-100 hover:border-gray-600 hover:bg-white hover:no-underline"
        >
          Email thijs@tyz.nl
        </Link>
        <a href="tel:+31689936821" className="text-stone-700 text-xl max-w-5xl">
          or call me on +31 (0) 6 899 36 821
        </a>
      </section>
      {/**/}

      {/* Portfolio */}
      <section className="p-5 pb-20 w-full mt-4 bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent rounded-xl text-white text-sm">
        <h3 className="text-2xl mb-5">Work</h3>
        <p className="text-sm opacity-70">
          During my employment at Media.Monks, Lost Boys and as a freelancer I
          have worked for Hyundai Genesis, Prologis, Albert Heijn, Efteling,
          Kodak, Amazon, Radio 538, GMC, Nickelodeon, KPN Hi, Brunel, Old Spice,
          Remy Martin, Doritos, Pearl Opticiens, Ikea, ING, Dela, T-Mobile,
          Heineken, Coca Cola and more. <br />
          <Link href={paths.portfolio}>Please take a look at my portfolio</Link>
          <div className="flex flex-col lg:place-items-center py-10">
            <Link
              href={paths.portfolio}
              className="text-black text-4xl p-5 m-2 rounded-lg border border-transparent transition-colors border-gray-300 bg-gray-100 hover:border-gray-600 hover:bg-white hover:no-underline"
            >
              Portfolio
            </Link>
          </div>
        </p>
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
