import { motion, useCycle } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import MenuToggleIcon from '../MenuToggleIcon/MenuToggleIcon'
import './SideMenu.style.scss'

export interface SideMenuProps {
  children?: React.ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle<boolean>(false, true)
  const containerRef = useRef<HTMLElement>(null)
  const [height, setHeight] = useState<number>(0)

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 160px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: 'circle(30px at 160px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }

  useLayoutEffect(() => {
    if (containerRef) {
      if (containerRef.current != null) setHeight(containerRef.current.offsetHeight)
    }
  }, [])

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
      custom={height}
      ref={containerRef}
      className='side-menu'
    >
      <motion.div className='background' variants={sidebar}>
        {children}
      </motion.div>

      <MenuToggleIcon toggle={() => { toggleOpen() }} />
    </motion.nav>
  )
}

export default SideMenu
