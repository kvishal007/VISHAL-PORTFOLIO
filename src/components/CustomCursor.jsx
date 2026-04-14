import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', mouseOver)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', mouseOver)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
      transition: { type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }
    }
  }

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-secondary/50 backdrop-blur-sm rounded-full pointer-events-none z-[10000]"
        style={{ left: mousePosition.x - 4, top: mousePosition.y - 4 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
    </>
  )
}

export default CustomCursor
