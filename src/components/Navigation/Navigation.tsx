import { motion } from 'framer-motion'
import './Navigation.style.scss'
import NavigationItem, { type NavigationItemProps } from './NavigationItem/NavigationItem'

export const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const NavigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const items: NavigationItemProps[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Pokemons',
    link: '/pokemons'
  }
]

const Navigation = () => {
  return (
    <>
      <motion.ul variants={NavigationVariants} className='navigation'>
        {items.map((item, index) => (
          <NavigationItem name={item.name} key={index} link={item.link} />
        ))}
      </motion.ul>
    </>
  )
}

export default Navigation
