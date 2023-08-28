export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full flex flex-col items-center p-10">
        <div className="flex max-w-5xl w-full">
          <div className="w-1/2">
            <h1 className="text-stone-800 text-5xl">TyZ</h1>
            <h3 className="text-stone-700 text-xl">Think. Yield. Zenith.</h3>
          </div>

          <p className="w-1/2 text-right">
            <a href="mailto:thijs@tyz.nl">thijs@tyz.nl</a>
            <br />
            <a href="tel:0689936821">06 899 36 821</a>
          </p>
        </div>
      </header>

      <div className="max-w-5xl relative flex flex-col place-items-center">
        <h2 className="text-stone-800 text-7xl p-5">Thijs Broerse</h2>
        <h3 className="text-stone-700 text-3xl">
          Interim Tech Lead & Freelance Frontend Architect
        </h3>

        <p className="p-10">
          Highly skilled Frontend expert with over 20 years of experience in web
          development and leadership. Able to set up, develop and maintain
          complex (frontend) systems, leading (international) development teams.
          Worked on many (award winning) projects, specialized in scripting and
          architecture
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="">
          <h2 className="mb-3 text-2xl font-semibold">Leadership</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Lead and mentor development teams with agile methodologies
          </p>
        </div>

        <div className="">
          <h2 className="mb-3 text-2xl font-semibold">Architecture</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Build complex web applications. Setup APIs.
          </p>
        </div>

        <div className="">
          <h2 className="mb-3 text-2xl font-semibold">Development</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Write solid and clean code with TypeScript or plain JS. Preferred in
            React or Angular, Vue or Vanilla JS
          </p>
        </div>
      </div>
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
                href="https://www.linkedin.com/in/tyz81/"
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
    </main>
  );
}
