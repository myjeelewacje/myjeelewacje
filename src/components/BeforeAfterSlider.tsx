'use client'

import { useRef, useState } from 'react'

type Props = {
  before: string
  after: string
  title: string
  alt?: string
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function BeforeAfterSlider({ before, after, title, alt }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  function updatePosition(clientX: number) {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const nextPosition = ((clientX - rect.left) / rect.width) * 100

    setPosition(clamp(nextPosition, 0, 100))
  }

  return (
    <div className="ba" aria-label={`${title} - porównanie przed i po`}>
      <div
        ref={wrapperRef}
        className="ba-images"
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-label={`Suwak porównania ${title}`}
        onPointerDown={(event) => {
          setIsDragging(true)
          event.currentTarget.setPointerCapture(event.pointerId)
          updatePosition(event.clientX)
        }}
        onPointerMove={(event) => {
          if (isDragging) {
            updatePosition(event.clientX)
          }
        }}
        onPointerUp={(event) => {
          setIsDragging(false)

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
          }
        }}
        onPointerCancel={(event) => {
          setIsDragging(false)

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            setPosition((current) => clamp(current - 5, 0, 100))
          }

          if (event.key === 'ArrowRight') {
            setPosition((current) => clamp(current + 5, 0, 100))
          }

          if (event.key === 'Home') {
            setPosition(0)
          }

          if (event.key === 'End') {
            setPosition(100)
          }
        }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'ew-resize',
          touchAction: 'none',
          userSelect: 'none',
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
          className="ba-before"
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
          className="ba-line"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${position}%`,
            pointerEvents: 'none',
          }}
        >
          <span>↔</span>
        </div>

        <span className="ba-label ba-left">PRZED</span>
        <span className="ba-label ba-right">PO</span>
      </div>
    </div>
  )
}