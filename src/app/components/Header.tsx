import Link from 'next/link';
import { type ReactElement } from 'react';

export function Header(): ReactElement {
  return (
    <header className="w-full flex flex-col items-center px-10 py-5 text-white">
      <div className="flex max-w-5xl w-full">
        <Link className="w-1/2 hover:no-underline" href="/">
          <h1 className="text-4xl tracking-[-.1em]">TYZ</h1>
          <h3 className="max-sm:text-sm">Think. Yield. Zenith.</h3>
        </Link>
        <p className="w-1/2 text-right text-s leading-8">
          <a
            href="mailto:thijs@tyz.nl"
            title="Contact me by email on thijs@tyz.nl"
          >
            thijs@tyz.nl
          </a>
          <br />
          <a
            href="tel:+31689936821"
            title="phonenumer"
            className="max-sm:text-sm"
          >
            +31 (0) 6 899 36 821
          </a>
        </p>
      </div>
    </header>
  );
}
