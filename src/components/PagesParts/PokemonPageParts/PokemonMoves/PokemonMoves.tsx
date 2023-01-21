import { PokemonMove } from "../../../../utils/Pokemon";
import MoveItem from "../MoveItem/MoveItem";
import './PokemonMoves.style.scss';

export interface PokemonMovesProps {
    moves: PokemonMove[];
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {
    return (
        <ul id="PokemonMoves">
            {moves.map((value, index) => (
                <MoveItem key={index} url={value.move.url} />
            ))}
        </ul>
    );
};

export default PokemonMoves;