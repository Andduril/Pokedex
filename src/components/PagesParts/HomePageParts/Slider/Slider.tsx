import SliderImage from "../SliderImage/SliderImage";
import { motion } from "framer-motion";
import './Slider.style.scss';

export interface SliderProps {
    nbItem: number;
}

const Slider: React.FC<SliderProps> = ({ nbItem }) => {
    return (
        <div className="slider">
            <motion.ul
                className="slider-list"
                style={{width: (nbItem*2)*96}}
                animate={{
                    transform: `translateX(-${nbItem*96}px)`
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: 'linear'
                }}
            >
                {[...Array(nbItem)].map((value, index) => (
                    <SliderImage pokemonId={index + 1} key={index} />
                ))}
                {[...Array(nbItem)].map((value, index) => (
                    <SliderImage pokemonId={index + 1} key={index} />
                ))}
            </motion.ul>
        </div>
    )
}

export default Slider;
