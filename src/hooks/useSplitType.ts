import { useEffect, RefObject } from 'react'
import SplitType from 'split-type'

interface SplitTypeOptions {
  type?: string
  lineClass?: string
  wordClass?: string
  charClass?: string
}

const useSplitType = (
  ref: RefObject<HTMLElement | null>,
  options: SplitTypeOptions = {}
): SplitType | null => {
  let instance: SplitType | null = null

  useEffect(() => {
    if (!ref.current) return

    const { type = 'chars, words, lines', lineClass = 'split-line', wordClass = 'split-word', charClass = 'split-char' } = options

    instance = new SplitType(ref.current, {
      types: type,
      lineClass,
      wordClass,
      charClass,
    })

    return () => {
      instance?.revert()
    }
  }, [ref, options.type])

  return instance
}

export default useSplitType
