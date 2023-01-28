import { Link } from 'react-router-dom';
import './MoveItem.style.scss';
import useFetch from '../../../../hooks/useFetch';
import { APIResourceURL } from '../../../../utils/Api';
import { Move } from '../../../../utils/Pokemon';
import { motion } from 'framer-motion';
import PokemonTypeIcon from '../../../utils/PokemonTypeIcon/PokemonTypeIcon';
import './MoveItem.style.scss';

export interface MoveItemProps {
    url: APIResourceURL<Move>;
}

const MoveItem: React.FC<MoveItemProps> = ({url}) => {
    // eslint-disable-next-line
    const {data, error} = useFetch<Move>(url.toString());

    return (
        <motion.li id='MoveItem'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            {data && (
                <Link to={`/moves/${data.id}`}>
                    <div className='move-container'>
                        <div className='move-stats'>
                            <h3 style={{margin: 0}}>{data.name}</h3>
                            {data.accuracy && (<span>Accuracy : {data.accuracy + '%'}</span>)}                            
                            {data.power && (<span>Power : {data.power}</span>)}
                        </div>
                        <div className='move-type'>
                            <PokemonTypeIcon typeName={data.type.name}/>
                        </div>
                    </div>
                </Link>   
            )}
        </motion.li>
    );
};

export default MoveItem;