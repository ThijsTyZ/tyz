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
            <a href="mailto:thijs@tyz.nl">thijs@tyz.nl</a>
            <br />
            <a href="tel:+31689936821">+31 (0) 6 899 36 821</a>
          </p>
        </div>
      </header>

      <main className="w-full flex flex-col  items-center p-10">
        <div className="max-w-5xl relative flex flex-col lg:place-items-center">
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
        </div>

        <div className="mb-32 grid justify-between lg:max-w-5xl w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <div className="py-5 lg:max-w-[30ch]">
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
          </div>

          <div className="py-5 lg:max-w-[30ch]">
            <h2 className="mb-3 text-2xl font-semibold">Architecture</h2>
            <p className="m-0 text-sm opacity-50">
              Building for Change with Solid APIs. In the realm of architecture,
              I specialize in crafting robust solutions for intricate
              challenges, ensuring your systems remain agile and adaptive
              through smart <strong>API</strong> integration that creates a
              foundation embracing change. Let&apos;s collaborate to conquer
              complexity and construct a future-ready framework.
            </p>
          </div>

          <div className="py-5 lg:max-w-[30ch] ">
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
          </div>
        </div>
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
                href="https://www.linkedin.com/in/tyz81/"
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
