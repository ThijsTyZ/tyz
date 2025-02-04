import Link from 'next/link';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import type { Path } from '@/data/copy';

export function Cta({
  children,
  path,
  href,
  ...rest
}: {
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, 'href'> &
  (
    | { path: Path; href?: never }
    | { href: string; path?: never }
  )): ReactElement {
  return (
    <Link
      href={path ?? href}
      {...rest}
      className={`
              text-white text-3xl
              p-4 m-2 
              rounded-xl
              transition-colors 
              border border-opacity-10
              bg-gradient-to-b from-orangeStart to-orangeEnd 
              
              hover:no-underline
              hover:from-orangeEnd hover:to-orangeStart
              `}
    >
      {children}
    </Link>
  );
}
