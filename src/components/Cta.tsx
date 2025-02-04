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
              px-4 py-2 m-2 
              rounded-tr-2xl
              rounded-bl-lg
              transition-colors 
              bg-gradient-to-b from-orangeStart to-orangeEnd 
              relative
              
              before:absolute
              before:rounded-tr-[18px]
              before:rounded-bl-[10px]
              before:bg-gradient-to-b before:from-orangeEnd before:to-orangeStart
              before:content-['']
              before:top-0
              before:bottom-0
              before:left-0
              before:right-0
              before:z-[-1]
              before:m-[-2px]
              
              hover:no-underline
              hover:from-orangeEnd hover:to-orangeStart
              hover:before:bg-gradient-to-t
              `}
    >
      {children}
    </Link>
  );
}
