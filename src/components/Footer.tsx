import Link from 'next/link';
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
            <Link
              href="/pdf/Curriculum Vitae - Thijs Broerse.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download my Curriculum Vitae"
              download
            >
              Curriculum Vitae
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/tyz81/"
              target="_blank"
              rel="noreferrer"
              title="View my profile on LinkedIn"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ThijsTyZ"
              target="_blank"
              rel="noreferrer"
              title="View my profile on Github"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://codepen.io/_TyZ_"
              target="_blank"
              rel="noreferrer"
              title="View my profile on Codepen"
            >
              Codepen
            </Link>
          </li>
          <li>
            <Link
              href="/pdf/Algemene Voorwaarden - TyZ.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download my Terms and Conditions"
              download
            >
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
