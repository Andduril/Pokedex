import SliderImage from "../SliderImage/SliderImage";
import { motion } from "framer-motion";
import './Slider.style.scss';

export interface SliderProps {
    nbItem: number;
};

const nbMax = 905;

const getRandomId = (): number => {
    return Math.floor(Math.random() * (nbMax - 1) + 1);
}

const Slider: React.FC<SliderProps> = ({ nbItem }) => {

    const pokemonsIds: number[] = [];
    for(let i = 0; i < nbItem; i++) {
        pokemonsIds.push(getRandomId());
    }

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
                {/* {[...Array(nbItem)].map((value, index) => (
                    <SliderImage pokemonId={index + 1} key={index} />
                ))}
                {[...Array(nbItem)].map((value, index) => (
                    <SliderImage pokemonId={index + 1} key={index} />
                ))} */}
                {pokemonsIds.map((id, index) => (
                    <SliderImage pokemonId={id} key={index}/>
                ))}
                {pokemonsIds.map((id, index) => (
                    <SliderImage pokemonId={id} key={index}/>
                ))}
            </motion.ul>
        </div>
    )
}

export default Slider;
