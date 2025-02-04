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
      className={`p-5 lg:pb-16 rounded-tr-2xl rounded-bl-lg to-transparent
     ${
       variant === 'white'
         ? `bg-gradient-to-r lg:bg-gradient-to-b from-orangeStart  via-orangeStart/30 via-20% `
         : `bg-gradient-to-l lg:bg-gradient-to-t from-orangeEnd/70   via-orangeEnd/20 via-20%`
     }
    `}
    >
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
      <h3 className="mb-3 text-xl">{subtitle}</h3>
      <p className="text-sm opacity-70">{text}</p>
    </article>
  );
}
