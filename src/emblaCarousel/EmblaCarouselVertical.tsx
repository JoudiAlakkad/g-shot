import React from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarouselVertical: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="emblaV">
      <div className="embla__viewportV" ref={emblaRef}>
        <div className="embla__containerV">
          {slides.map((src) => (
            <div className="embla__slideV" key={src}>
              <div className="embla__slide__numberV">
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

export default EmblaCarouselVertical
