import { HERO_SLIDES } from '@/data/site'

export function HeroSlider() {
  return (
    <div className="hero-slider" aria-hidden="true">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className="hero-slide"
          style={{ backgroundImage: `url(${slide.image})`, animationDelay: `${index * 5}s` }}
        />
      ))}
    </div>
  )
}
