import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

export default function usePortal() {
  const [isOpen, setIsOpen] = useState(false)
  const portal = useRef(null)

  const openPortal = useCallback((callback) => {
    if (!portal.current) {
      portal.current = document.createElement('div')
      document.body.appendChild(portal.current)
      if (typeof callback === 'function') {
        callback(portal)
      }
      setIsOpen(true)
    }
  }, [])

  const closePortal = useCallback(() => {
    if (portal.current) {
      setIsOpen(false)
      document.body.removeChild(portal.current)
      portal.current = null
    }
  }, [])

  useEffect(() => () => {
    if (portal.current) {
      document.body.removeChild(portal.current)
    }
  }, [])

  const Portal = useCallback((children) => {
    if (portal.current !== null) return createPortal(children, portal.current)
    return null
  }, [])

  return {
    isOpen,
    openPortal,
    closePortal,
    Portal,
  }
}
