import React from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const SLIDES = [
    '/src/assets/Jacob.jpg',
    '/src/assets/Jacob (9).jpg',
    '/src/assets/Jacob (8).jpg',
    '/src/assets/Jacob (7).jpg',
    '/src/assets/Jacob (6).jpg',
  ]
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src) => (
            <div className="embla__slide" key={src}>
              <div className="embla__slide__number">
                <img
                  src={src}
                  alt={`Slide ${src + 1}`}
                  className="h-full w-full rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
