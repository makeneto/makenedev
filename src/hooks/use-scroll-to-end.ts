import { useLayoutEffect, useRef } from "react"

export function useScrollToEnd<T extends HTMLElement>(deps: unknown[] = []) {
  const scrollRef = useRef<T>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const scrollElement = scrollRef.current
    const innerElement = innerRef.current
    if (!scrollElement || !innerElement) return

    const scrollToEnd = () => {
      scrollElement.scrollLeft =
        scrollElement.scrollWidth - scrollElement.clientWidth
    }

    scrollToEnd()

    const resizeObserver = new ResizeObserver(scrollToEnd)
    resizeObserver.observe(innerElement)

    document.fonts?.ready.then(scrollToEnd)
    window.addEventListener("load", scrollToEnd)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("load", scrollToEnd)
    }
  }, deps)

  return { scrollRef, innerRef }
}
