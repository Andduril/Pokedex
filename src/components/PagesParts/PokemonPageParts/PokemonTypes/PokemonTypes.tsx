import { PokemonType } from "../../../../utils/Pokemon";
import PokemonTypeIcon from "../PokemonTypeIcon/PokemonTypeIcon";

export interface PokemonTypesProps {
    types: PokemonType[];
};

const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => {
    return (
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: 0 }}>
            {types.map((value, index) => (
                <li key={index}>
                    <PokemonTypeIcon typeName={value.type.name} />
                </li>
            ))}
        </ul>
    );
};

export default PokemonTypes;