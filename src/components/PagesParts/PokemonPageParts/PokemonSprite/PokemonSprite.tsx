import { useState } from "react";
import './PokemonSprite.style.scss';
import { AnimatePresence, motion } from "framer-motion";
import { PokemonSprites } from "../../../../utils/Pokemon";
import Arrow from "../../../utils/SVG/Arrow";

export interface PokemonSpriteProps {
    sprites: PokemonSprites;
};

const PokemonSprite: React.FC<PokemonSpriteProps> = ({ sprites }) => {
    const images: string[] = [];

    Object.entries(sprites).forEach((value) => {
        if ((value[1] !== null) && !(value[1] instanceof Object)) {
            if (value[0] === 'front_default') {
                images.unshift(value[1]);
            } else {
                images.push(value[1]);
            };
        };
    });

    const [index, setIndex] = useState<number>(0);

    const goLeft = () => {
        let newIndex = index - 1;

        if (newIndex < 0) newIndex = images.length - 1;

        setIndex(newIndex);
    };

    const goRight = () => {
        let newIndex = index + 1;

        if (newIndex === images.length) newIndex = 0;

        setIndex(newIndex);
    };

    return (
        <div id="PokemonSprite">
            <button className="button left" onClick={() => goLeft()}>
                <Arrow />
            </button>
            <div className="sprite-container">
                <AnimatePresence mode="wait">
                    <motion.img
                        src={images[index]}
                        alt={'pokemon'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={images[index]}
                    />
                </AnimatePresence>
            </div>
            <button className="button" onClick={() => goRight()}>
                <Arrow />
            </button>
        </div>
    );
};

export default PokemonSprite;