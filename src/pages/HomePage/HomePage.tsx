import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "../../components/PagesParts/HomePageParts/Slider/Slider";

const HomePage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <motion.h1 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>Pokedex</motion.h1>
            </div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} style={{marginBottom: 20, width: '100%'}}>
                <Slider nbItem={10}/>
            </motion.div>
            <div>
                <Link to={'/pokemons'}>
                    Check all pokemons !
                </Link>
            </div>
        </div>
    );
};

export default HomePage;