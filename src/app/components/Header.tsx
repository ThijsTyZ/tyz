import Link from 'next/link';
import { type ReactElement } from 'react';
import { pages } from '@/app/data/copy';

export function Header(): ReactElement {
  return (
    <header className="w-full flex flex-col items-center px-10 py-5">
      <div className="flex max-w-5xl w-full">
        <Link className="w-1/2 hover:no-underline" href="/">
          <h1 className="text-stone-800 text-4xl">TyZ</h1>
          <h3 className="text-stone-700 text-s">Think. Yield. Zenith.</h3>
        </Link>
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
      <nav className="max-lg:w-full max-lg:mt-10">
        <ul className="lg:flex lg:flex-row lg:items-center w-full">
          {pages.map(({ href, title }) => (
            <li key={href} className="lg:px-4">
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
