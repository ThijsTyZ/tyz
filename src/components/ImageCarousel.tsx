'use client';

import { useInterval } from '@mediamonks/react-hooks';
import Image from 'next/image';
import { type ReactElement, useCallback, useRef, useState } from 'react';

export type ImageCarouselProps = {
  title: string;
  images: ReadonlyArray<string>;
  autoScrollOffset: number;
};

const imageSize = 600;

export default function ImageCarousel({
  title,
  images,
  autoScrollOffset,
}: ImageCarouselProps): ReactElement {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onScroll = useCallback(() => {
    if (container.current) {
      const index = Math.round(
        container.current.scrollLeft /
          (container.current.scrollWidth / images.length),
      );

      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  }, [images.length, activeIndex]);

  const scroll = useCallback(
    (index: number) => {
      container.current?.scrollTo(
        (container.current.scrollWidth / images.length) * index,
        0,
      );
    },
    [images.length],
  );

  const onClick = useCallback(
    (index: number) => () => {
      scroll(index);
    },

    [scroll],
  );

  useInterval(() => {
    setTimeout(() => {
      scroll((activeIndex + 1) % images.length);
    }, autoScrollOffset);
  }, 4000);

  return (
    <div className="lg:w-[600px] flex flex-col ">
      <div
        className="mb-5 lg:mb-0 h-[300px] g:w-[600px] flex flex-row overflow-auto scroll-smooth rounded-lg"
        ref={container}
        onScroll={onScroll}
      >
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/img/portfolio/${image}`}
            width={imageSize}
            height={imageSize}
            alt={`image ${title} ${index + 1}`}
            className="object-cover h-[100%]  flex-shrink-0"
          />
        ))}
      </div>
      {images.length > 1 && (
        <ul className="flex flex-row m-auto mt-2">
          {images.map((image, index) => (
            <li key={image}>
              <button
                className="border rounded-full w-4 h-4 bg-white m-1 cursor-pointer shadow-md hover:bg-amber-400 disabled:bg-amber-400"
                onClick={onClick(index)}
                disabled={index === activeIndex}
                type="button"
              >
                <span className="invisible">Scroll to image {index}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
