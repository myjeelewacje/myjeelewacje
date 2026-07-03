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
    <div
      aria-label={`${title} - porównanie przed i po`}
      style={{
        width: '100%',
        maxWidth: '1120px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: 'clamp(320px, 42vw, 600px)',
          borderRadius: '24px',
          cursor: 'ew-resize',
          touchAction: 'none',
          userSelect: 'none',
          background: '#111',
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
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            clipPath: `inset(0 ${100 - position}% 0 0)`,
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
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${position}%`,
            width: '3px',
            background: 'rgba(255,255,255,0.95)',
            transform: 'translateX(-50%)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${position}%`,
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            background: '#fff',
            color: '#111',
            display: 'grid',
            placeItems: 'center',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
            zIndex: 6,
            pointerEvents: 'none',
            fontWeight: 800,
          }}
        >
          ↔
        </div>

        <span
          style={{
            position: 'absolute',
            top: '18px',
            left: '18px',
            zIndex: 7,
            background: 'rgba(20,20,20,0.9)',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            pointerEvents: 'none',
          }}
        >
          PRZED
        </span>

        <span
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 7,
            background: '#3bad2d',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            pointerEvents: 'none',
          }}
        >
          PO
        </span>

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
