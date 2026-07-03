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
      <div
        className="ba-images"
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          cursor: 'ew-resize',
          touchAction: 'none',
          userSelect: 'none',
          pointerEvents: 'auto',
        }}
      >
        <img
          src={after}
          alt={alt || `${title} po czyszczeniu`}
          draggable={false}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />

        <div
          className="ba-before"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: `${position}%`,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <img
            src={before}
            alt={alt || `${title} przed czyszczeniem`}
            draggable={false}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div
          className="ba-line"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${position}%`,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        >
          <span>↔</span>
        </div>

        <span className="ba-label ba-left">PRZED</span>
        <span className="ba-label ba-right">PO</span>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label={`Przesuń, aby porównać zdjęcie przed i po: ${title}`}
          onChange={(event) => setPosition(Number(event.target.value))}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'ew-resize',
            zIndex: 20,
            margin: 0,
            padding: 0,
            pointerEvents: 'auto',
          }}
        />
      </div>
    </div>
  )
}
