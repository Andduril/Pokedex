import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { APIResourceURL } from "../../../../utils/Api";
import { Pokemon } from "../../../../utils/Pokemon";
import PokemonTypeIcon from "../../../utils/PokemonTypeIcon/PokemonTypeIcon";
import { TailSpin } from "react-loader-spinner";
import './PokemonArrayItem.style.scss';

export interface PokemonArrayItemProps {
    url?: APIResourceURL<Pokemon>;
};

const getRessource = (url: APIResourceURL<Pokemon> | undefined): string | undefined => {
    if(url) {
        return url.toString();
    };

    return undefined;
}

const PokemonArrayItem: React.FC<PokemonArrayItemProps> = ({url}) => {

    const {data} = useFetch<Pokemon>(getRessource(url));

    return (
        <li className="PokemonArrayItem">
            {data ? (
                <Link className="pokemon-container" to={`/pokemon/${data.id}`}>
                    <img src={data.sprites.front_default} alt="pokemon"/>
                    <h4>{`${data.id} - ${data.name}`}</h4>
                    <ul className="types-container">
                        {data.types.map((value, index) => (
                            <li className="type" key={index}>
                                <PokemonTypeIcon typeName={value.type.name}/>    
                            </li>
                        ))}
                    </ul>
                </Link>
            ) : (
                <TailSpin
                    height={96}
                    width={96}
                    color="#4fa94d"
                />
            )}
        </li>
    );
};

export default PokemonArrayItem;