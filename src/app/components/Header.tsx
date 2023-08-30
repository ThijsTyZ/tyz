import { type ReactElement } from 'react';

export function Header(): ReactElement {
  return (
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
  );
}
