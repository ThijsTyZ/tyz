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
              bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-transparent 
              
              hover:text-black
              hover:no-underline
              hover:bg-white
              `}
    >
      {children}
    </Link>
  );
}
