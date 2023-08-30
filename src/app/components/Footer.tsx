import { type ReactElement } from 'react';

export function Footer(): ReactElement {
  return (
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
              href="/pdf/Curriculum Vitae - Thijs Broerse.pdf"
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
              href="/pdf/Algemene Voorwaarden - TyZ.pdf"
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
  );
}
