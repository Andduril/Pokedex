import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MenuItemVariants } from '../Navigation'
import './NavigationItem.style.scss'

export interface NavigationItemProps {
  name: string
  link: string
};

const NavigationItem: React.FC<NavigationItemProps> = ({ name, link }) => {
  return (
    <motion.li
      variants={MenuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='navigation-item'
    >
      <Link to={link} className='navigation-link'>
        {name}
      </Link>
    </motion.li>
  )
}

export default NavigationItem
