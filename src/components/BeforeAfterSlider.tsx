'use client'

import { useState } from 'react'

type Props = {
  before: string
  after: string
  title: string
  alt?: string
}

export function BeforeAfterSlider({ before, after, title, alt }: Props) {
  const [position, setPosition] = useState(50)
  return (
    <div className="ba" aria-label={`${title} - porównanie przed i po`}>
      <div className="ba-images">
        <img src={after} alt={alt || `${title} po czyszczeniu`} />
        <div className="ba-before" style={{ width: `${position}%` }}>
          <img src={before} alt={alt || `${title} przed czyszczeniem`} />
        </div>
        <div className="ba-line" style={{ left: `${position}%` }}><span>↔</span></div>
        <span className="ba-label ba-left">PRZED</span>
        <span className="ba-label ba-right">PO</span>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label={`Suwak porównania ${title}`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
    </div>
  )
}
