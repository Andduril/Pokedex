import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { api } from "../../../../utils/Api";
import { Pokemon } from "../../../../utils/Pokemon";

export interface SliderImageProps {
    pokemonId: number;
}

const SliderImage: React.FC<SliderImageProps> = ({pokemonId}) => {
    // eslint-disable-next-line
    const {data, error} = useFetch<Pokemon>(api+`pokemon/${pokemonId}`);

    return (
        <li style={{cursor: 'touch'}}>
            {data ? (
                <Link to={`/pokemon/${pokemonId}`}>
                    <img src={data.sprites.front_default} alt={'pokemon'}/>
                </Link>
            ) : (
                <div>
                    <span>Loading...</span>
                </div>
            )}
        </li>
    )
};

export default SliderImage;