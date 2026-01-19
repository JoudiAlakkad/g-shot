import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
import EmblaCarouselVertical from '../emblaCarousel/EmblaCarouselVertical'
import { Header } from './Header'
const SLIDES = [
  '/assets/Jacob.jpg',
  '/assets/Jacob (9).jpg',
  '/assets/Jacob (8).jpg',
  '/assets/Jacob (7).jpg',
  '/assets/Jacob (6).jpg',
]

const OPTIONS: EmblaOptionsType = { loop: true }
const OPTIONSVer: EmblaOptionsType = { axis: 'y', loop: true }

export const HomeScreen = () => {
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const width = track.scrollWidth / 2

    gsap.to(track, {
      x: -width,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Header
          className="fixed flex flex-row justify-between items-center gap-4 md:gap-10 
         top-0 z-50 w-full p-2"
        >
          <img
            src="/logo 2.png"
            alt="G-Shot"
            className="w-50 
           "
          />

          <div className="flex px-4 w-fit h-8 z-50">
            <div className="md:hidden">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            {/* Spacer */}
            <div className="flex-1" />

            <nav className="hidden md:flex md:flex-row gap-8 items-center text-white font-oswald text-xl">
              <a>Home</a>
              <a>Services</a>
              <a>Contact</a>
            </nav>
          </div>
        </Header>
        <video
          src="/backgroundVideo.mp4"
          className="absolute inset-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
      {/* White Section */}
      <section className="bg-white p-10 md:h-64">
        <h2 className="text-black text-4xl text-center font-header">
          Branding and Digital Marketing
        </h2>
        <p className="text-2xl font-oswald text-wrap text-center py-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </section>
      {/* Sliding Images Section */}
      <section className="bg-white ">
        <div className="">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
      {/* SImages with Text Section */}
      <section className="border-white p-10 flex flex-col content-center">
        <h2 className="text-white text-4xl text-center font-header">
          Everything You Need For Your Business
        </h2>
        <p className="text-2xl font-oswald text-white text-wrap text-center py-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="pt-8 px-4">
          <EmblaCarouselVertical slides={SLIDES} options={OPTIONSVer} />
        </div>
        <div className="pt-8 px-4 flex items-center justify-center font-oswald">
          <button className="p-3 ">See Our Portfolio</button>
        </div>
      </section>

      {/* 3D Section 
        <section>
        <div className="banner">
          <div
            className="slider"
            style={{ '--quantity': 10 } as React.CSSProperties}
          >
            <div
              className="item"
              style={{ '--position': 1 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 2 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 3 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 4 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 5 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 6 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 7 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 8 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 9 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
            <div
              className="item"
              style={{ '--position': 10 } as React.CSSProperties}
            >
              <img src="src/assets/Jacob.jpg" alt="" />
            </div>
          </div>
          <div className="content">
            
            <h1 className="font-oswald">G-Shot Designs</h1>
            <div className="author">
              <h2 className="font-oswald">Brand your Business</h2>
            </div>
            <div className="model"></div>
          </div>
        </div>
      </section>*/}
      <section>
        {/* Image Marquee with Logo */}
        <div className="bg-[url('/logo3d.png')] bg-contain bg-no-repeat z-10 bg-center">
          <div>
            <div className="carousel">
              <div className="group-right" ref={trackRef}>
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />

                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />
              </div>
              <div className="group-right" ref={trackRef}>
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />

                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel">
              <div className="group-left" ref={trackRef}>
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />

                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />
              </div>
              <div className="group-left" ref={trackRef}>
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />

                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />
              </div>
            </div>
            <div className="carousel">
              <div className="group-right" ref={trackRef}>
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />

                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />
              </div>
              <div className="group-right" ref={trackRef}>
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />

                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob.jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (9).jpg"
                />
                <img
                  className="w-[220px] h-[140px] object-cover mr-6 shrink-0"
                  src="/assets/Jacob (8).jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section className="bg-white text-black py-16 px-4" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-header font-bold mb-4">Contact Us</h2>
          <p className="mb-8 text-black font-oswald font-bold">
            Reach out to us on WhatsApp or Instagram and we’ll get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+4917664014753"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-white font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48a11.88 11.88 0 00-16.8 16.8l-1.41 4.91 4.91-1.41a11.88 11.88 0 0013.3-13.3zm-2.09 11.96c-.25.7-1.43 1.34-1.98 1.42-.5.07-1.11.1-3.18-1.14-2.09-1.24-3.42-3.05-3.54-3.21-.12-.16-1-1.38-1-2.63 0-1.25.64-1.85.88-2.11.23-.23.5-.23.66-.23.16 0 .31 0 .45 0 .14.01.33-.05.51.38.18.43.61 1.48.66 1.59.05.11.08.25.02.39-.06.13-.09.21-.19.34-.1.12-.21.26-.31.36-.1.11-.2.23-.08.45.12.23.53.92 1.14 1.5.78.73 1.44.97 1.66 1.08.21.11.33.09.45-.05.12-.14.5-.57.63-.77.12-.2.25-.16.45-.09.2.07 1.26.59 1.48.7.22.12.37.19.42.29.05.11.05.64-.2 1.34z" />
              </svg>
              WhatsApp
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/renxx96/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 transition-colors px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-white font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.402a4.92 4.92 0 011.73 1.01 4.92 4.92 0 011.01 1.73c.162.46.348 1.26.402 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.402 2.43a4.92 4.92 0 01-1.01 1.73 4.92 4.92 0 01-1.73 1.01c-.46.162-1.26.348-2.43.402-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.402a4.92 4.92 0 01-1.73-1.01 4.92 4.92 0 01-1.01-1.73c-.162-.46-.348-1.26-.402-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.97.402-2.43a4.92 4.92 0 011.01-1.73 4.92 4.92 0 011.73-1.01c.46-.162 1.26-.348 2.43-.402C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.737 0 8.332.012 7.052.07 5.78.127 4.88.308 4.06.57a7.003 7.003 0 00-2.54 1.49A7.003 7.003 0 00.57 4.06C.308 4.88.127 5.78.07 7.052.012 8.332 0 8.737 0 12s.012 3.668.07 4.948c.057 1.272.238 2.172.5 2.992a7.003 7.003 0 001.49 2.54 7.003 7.003 0 002.54 1.49c.82.262 1.72.443 2.992.5C8.332 23.988 8.737 24 12 24s3.668-.012 4.948-.07c1.272-.057 2.172-.238 2.992-.5a7.003 7.003 0 002.54-1.49 7.003 7.003 0 001.49-2.54c.262-.82.443-1.72.5-2.992.058-1.28.07-1.685.07-4.948s-.012-3.668-.07-4.948c-.057-1.272-.238-2.172-.5-2.992a7.003 7.003 0 00-1.49-2.54 7.003 7.003 0 00-2.54-1.49c-.82-.262-1.72-.443-2.992-.5C15.668.012 15.263 0 12 0z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
