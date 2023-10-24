import Link from 'next/link';
import { type ReactElement } from 'react';
import { Logo } from '@/app/components/Logo';
import { email, phonenumber, slogan } from '@/app/data/copy';

export function Header(): ReactElement {
  return (
    <header className="w-full flex flex-col items-center px-10 py-5 text-white">
      <div className="flex max-w-5xl w-full">
        <Link
          className="w-1/2 hover:no-underline max-sm:scale-75 max-sm:-translate-x-10 max-sm:-translate-y-4"
          href="/"
        >
          <Logo />
        </Link>
        <div className="w-1/2 text-right text-s leading-8 max-sm:text-sm">
          <h1 className="text-3xl max-sm:text-xl">TYZ</h1>
          <h3 className="">{slogan}</h3>
          <a href={email.href} title={email.title}>
            {email.text}
          </a>
          <br />
          <a
            href={phonenumber.href}
            title={phonenumber.title}
            className="max-sm:text-sm"
          >
            {phonenumber.text}
          </a>
        </div>
      </div>
    </header>
  );
}
