import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navigation.style.scss';
import PokeBallIcon from '../utils/SVG/PokeBallIcon';

interface NavigationItemProps {
    name: string;
    link: string;
};

const MenuItemVariants = {
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
};

const NavigationVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const items: NavigationItemProps[] = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Pokemons',
        link: '/pokemons'
    },
];

const NavigationItem: React.FC<NavigationItemProps> = ({ name, link }) => {
    return (
        <motion.li
            variants={MenuItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='navigation-item'
        >
            <Link to={link}>
                <div className='icon'>
                    <PokeBallIcon/>
                </div>
                <div>
                    {name}
                </div>
            </Link>
        </motion.li>
    )
}

const Navigation = () => {
    return (
        <motion.ul variants={NavigationVariants} className='navigation'>
            {items.map((item, index) => (
                <NavigationItem name={item.name} key={index} link={item.link} />
            ))}
        </motion.ul>
    );
};

export default Navigation;