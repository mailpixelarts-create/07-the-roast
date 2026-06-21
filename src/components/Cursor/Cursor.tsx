import { useEffect, useRef } from 'react'
import { animateCursor } from '../../animations/cursor'
import './Cursor.scss'

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cursorRef.current && dotRef.current && ringRef.current) {
      const cleanup = animateCursor(cursorRef.current, dotRef.current, ringRef.current)
      return cleanup
    }
  }, [])

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor__dot" ref={dotRef} />
      <div className="cursor__ring" ref={ringRef} />
    </div>
  )
}

export default Cursor
