import { useLayoutEffect, useRef } from "react"

/**
 * Mantém `scrollRef` sempre encostado ao fim horizontal, reagindo a mudanças
 * de tamanho no `innerRef` (ex.: fontes a carregar, resize da janela).
 */
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { scrollRef, innerRef }
}
