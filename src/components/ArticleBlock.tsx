import type { ReactElement } from 'react';
import type { Article } from '@/data/copy';

export default function ArticleBlock({
  title,
  subtitle,
  text,
  variant,
}: Article & { variant: 'white' | 'black' }): ReactElement {
  return (
    <article
      className={`p-5 lg:pb-32 rounded-xl to-transparent
     ${
       variant === 'white'
         ? `bg-gradient-to-r lg:bg-gradient-to-b from-white text-black`
         : `bg-gradient-to-l lg:bg-gradient-to-t from-[rgba(255,255,255,0.2)] text-white`
     }
    `}
    >
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
      <h3 className="mb-3 text-xl">{subtitle}</h3>
      <p className="text-sm opacity-70">{text}</p>
    </article>
  );
}
