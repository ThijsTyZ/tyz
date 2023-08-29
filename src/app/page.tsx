export default function Home(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center min-h-screen justify-between">
      <header className="w-full flex flex-col items-center p-10">
        <div className="flex max-w-5xl w-full">
          <div className="w-1/2">
            <h1 className="text-stone-800 text-4xl">TyZ</h1>
            <h3 className="text-stone-700 text-s">Think. Yield. Zenith.</h3>
          </div>
          <p className="w-1/2 text-right text-xl">
            <a
              href="mailto:thijs@tyz.nl"
              title="Contact me by email on thijs@tyz.nl"
            >
              thijs@tyz.nl
            </a>
            <br />
            <a href="tel:+31689936821" title="phonenumer">
              +31 (0) 6 899 36 821
            </a>
          </p>
        </div>
      </header>

      <main className="w-full flex flex-col  items-center p-10">
        <section className="max-w-5xl flex flex-col lg:place-items-center">
          <h2 className="text-black text-7xl py-5">Thijs Broerse</h2>
          <h3 className="text-stone-700 text-3xl max-w-5xl">
            Interim Tech Lead & Freelance Frontend Architect
          </h3>

          <p className="py-5 lg:text-justify lg:max-w-3xl">
            Highly skilled Frontend expert with over 20 years of experience in
            web development and leadership. Able to set up, develop and maintain
            complex (frontend) systems, leading (international) development
            teams. Worked on many (award winning) projects, specialized in
            scripting and architecture
          </p>
        </section>

        <section className="grid justify-between lg:max-w-5xl w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <article className="py-5 lg:max-w-[30ch]">
            <h2 className="mb-3 text-2xl font-semibold">Leadership</h2>
            <p className="m-0 text-sm opacity-50">
              Unlock your team&apos;s full potential with my leadership. As an
              experienced leader for development teams, I offer a distinctive
              approach that blends <strong>mentoring</strong> and{' '}
              <strong>Agile</strong> methodologies seamlessly. With a focus on{' '}
              <strong>personal growth</strong> within an international context,
              I don&apos;t just drive projects forward – I cultivate individuals
              and teams, and elevate your team&apos;s performance to new
              heights.
            </p>
          </article>

          <article className="py-5 lg:max-w-[30ch]">
            <h2 className="mb-3 text-2xl font-semibold">Architecture</h2>
            <p className="m-0 text-sm opacity-50">
              Building for Change with Solid APIs. In the realm of architecture,
              I specialize in crafting robust solutions for intricate
              challenges, ensuring your systems remain agile and adaptive
              through smart <strong>API</strong> integration that creates a
              foundation embracing change. Let&apos;s collaborate to conquer
              complexity and construct a future-ready framework.
            </p>
          </article>

          <article className="py-5 lg:max-w-[30ch] ">
            <h2 className="mb-3 text-2xl font-semibold">Development</h2>
            <p className="m-0 text-sm opacity-50">
              In the world of development, I bring high standards, robustness,
              and a performance-driven approach to the table. With expertise in{' '}
              <strong>TypeScript</strong>, I create inclusive experiences
              through <strong>Accessibility</strong>
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
          <a
            href="tel:+31689936821"
            className="text-stone-700 text-xl max-w-5xl"
          >
            or call me on +31 (0) 6 899 36 821
          </a>
        </section>

        <section className="max-w-5xl relative flex flex-col py-5">
          <h4 className="text-stone-700 text-3xl max-w-5xl">
            What others say about me
          </h4>
          <p className=" lg:max-w-3xl py-5">
            <q className="lg:text-justify opacity-50 italic">
              During Thijs his 15 years at the Media.Monks he has shown to be a
              specialist within his role and able to maneuver in a dynamic high
              paced environment and skilled in communicating with stakeholders
              across different teams. Next to this he has also invested in
              improving the company culture and wellbeing through his efforts
              within the Culture Club. Some traits that add to the above and
              Thijs has shown throughout his time with Media.Monks are: critical
              thinking, connectivity, empathy and mentorship.
            </q>
            <br />
            Anne van Zessen - HR Business Partner at MediaMonks
          </p>
          <p className="lg:max-w-3xl py-5">
            <q className="lg:text-justify opacity-50 italic">
              I&apos;ve worked with Thijs for 12,5 years and have always been
              impressed by his skill and knowledge. He&apos;s an absolute legend
              and one of the best I&apos;ve ever worked with. Would absolutely
              recommend!
            </q>
            <br />
            Dennis de Rooij - Project Director at MediaMonks
          </p>
          <p className="lg:max-w-3xl py-5">
            <q className="lg:text-justify opacity-50 italic">
              Thijs is a machine. Not only is he a very skilled developer but
              he&apos;s someone who likes to strive for top quality and transfer
              his knowledge to everyone in his team. During my years working
              with him, I not only learned from his technical skills but also
              from his vast experience leading other developers (which included
              many highly skilled, experienced programmers).
            </q>
            <br />
            Ronald Méndez - Operations Director at MediaMonks & FWA Jury Member
          </p>
          <p className="lg:max-w-3xl py-5">
            <q className="lg:text-justify opacity-50 italic">
              I highly recommend Thijs for his great technical skills and
              ability to deliver high quality work. He possess a friendly and
              approachable nature, fostering a collaborative work environment.
              With his attention to detail and commitment to meeting deadlines,
              he is a valuable asset to any development team.
            </q>
            <br />
            Dennis de Rooij - Project Director at MediaMonks
          </p>
          <p className="lg:max-w-3xl py-5">
            <q className="lg:text-justify opacity-50 italic">
              I&apos;ve worked with Thijs for 12,5 years and have always been
              impressed by his skill and knowledge. He&apos;s an absolute legend
              and one of the best I&apos;ve ever worked with. Would absolutely
              recommend!
            </q>
            <br />
            Robert Slootjes - Technical Director at MediaMonks
          </p>
          <p className="lg:max-w-3xl py-5">
            <q className="lg:text-justify opacity-50 italic">
              Having worked with Thijs over a period of more than 15 years, I
              can honestly say that Thijs is one of the people I have enjoyed
              most working with. Thijs is a hard worker, with great dedication
              and focus, who will always go the extra mile to reach the best
              result possible. As a developer he has vast knowledge of the field
              he is active in, always strives for improvements, and puts quality
              first. He has a broad perspective, always trying to view things
              from multiple sides, and is always willing to learn new things. As
              a team lead Thijs takes great care of his team members, putting
              their interests in favour of his own, while using a personal
              approach to each and every one to make sure they have an optimal
              environment to work, thrive and develop in. Besides that, Thijs is
              generally a really nice guy with a great sense of humour, easy
              going and flexible, with a strong focus on principles without
              being dogmatic. Any company should feel proud and blessed to have
              Thijs in their team.
            </q>
            <br />
            Stephan Bezoen - Lead Android Developer at MediaMonks
          </p>
          <a
            href="https://www.linkedin.com/in/tyz81/details/recommendations/"
            target="_blank"
            rel="noreferrer"
            title="Read more recommendations about me on LinkedIn"
          >
            Read more...
          </a>
        </section>
      </main>

      <footer className="w-full text-white flex flex-col items-center p-10">
        <div className="flex max-w-5xl w-full">
          <p className="w-1/2">
            Lingewijk 14
            <br />
            3831LH Leusden
            <br />
            The Netherlands
            <br />
            KVK: 91034396
            <br />
            BTW: NL004861037B68
          </p>
          <ul className="w-1/2 text-right">
            <li>
              <a
                href="./Curriculum Vitae - Thijs Broerse.pdf"
                target="_blank"
                rel="noreferrer"
                title="Download my Curriculum Vitae"
                download
              >
                Curriculum Vitae
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tyz81/"
                target="_blank"
                rel="noreferrer"
                title="View my profile on LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tyz81/"
                target="_blank"
                rel="noreferrer"
                title="View my profile on Github"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/_TyZ_"
                target="_blank"
                rel="noreferrer"
                title="View my profile on Github"
              >
                Codepen
              </a>
            </li>
            <li>
              <a
                href="./Algemene Voorwaarden - TyZ.pdf"
                target="_blank"
                rel="noreferrer"
                title="Download my Terms and Conditions"
                download
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
