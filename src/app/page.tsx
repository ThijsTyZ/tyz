import Link from 'next/link';
import { type ReactElement, Fragment } from 'react';
import { Cta } from '@/app/components/Cta';
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
          <h3 className="mb-3 text-xl">Elevate your software architecture</h3>
          <p className="text-sm opacity-70">
            In the world of web development, sound software architecture is the
            bedrock of every successful project. As an interim Tech Lead with a
            specialization in Frontend and web development, I make
            &apos;Think&apos; the cornerstone of my approach. It&apos;s about
            envisioning the structural framework of your digital masterpiece,
            meticulously planning every element to ensure scalability,
            efficiency, and sustainability. Together, we&apos;ll lay the
            foundation for a robust software architecture that stands the test
            of time, enabling your project to thrive and evolve.
            <br />
            <br />
            <Link href={paths.portfolio}>Read more...</Link>
          </p>
        </article>
        <article className="p-5 pb-10 lg:pb-32 bg-gradient-to-l lg:bg-gradient-to-t from-[rgba(255,255,255,0.2)] to-transparent rounded-xl text-black">
          <h2 className="mb-3 text-2xl font-semibold text-white">Yield.</h2>
          <h3 className="mb-3 text-xl text-white">
            Leadership that produces results
          </h3>
          <p className="text-sm opacity-70 text-white">
            Effective leadership is the key to unlocking the full potential of
            your development team. As an interim Tech Lead, my focus on
            &apos;Yield&apos; centers on cultivating strong leadership skills. I
            empower your team to excel, guiding them towards peak performance
            and success. Through mentorship, collaboration, and clear
            communication, I ensure that your project not only meets but exceeds
            expectations. With me at the helm, you&apos;ll experience leadership
            that produces tangible results, driving your project forward with
            confidence.
            <br />
            <br />
            <Link href={paths.portfolio}>Read more...</Link>
          </p>
        </article>
        <article className="p-5 pb-10 lg:pb-32 bg-gradient-to-r lg:bg-gradient-to-b from-white to-transparent rounded-xl text-black">
          <h2 className="mb-3 text-2xl font-semibold">Zenith.</h2>
          <h3 className="mb-3 text-xl">
            Crafting web experiences at their peak
          </h3>
          <p className="text-sm opacity-70">
            Every website aspires to reach its &apos;Zenith&apos;, the pinnacle
            of its potential. My passion lies in crafting web experiences that
            are nothing short of extraordinary. With a keen eye for design and
            an unwavering commitment to detail, I transform your vision into
            reality. &apos;Zenith&apos; is where amazing websites are born,
            where aesthetics meet functionality, and where user experience
            reigns supreme. Together, we&apos;ll ascend to the peak of web
            development, creating digital wonders that leave a lasting impact.
            <br />
            <br />
            <Link href={paths.portfolio}>Read more...</Link>
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
