import { PokemonMove } from "../../../../utils/Pokemon";
import MoveItem from "../MoveItem/MoveItem";

export interface PokemonMovesProps {
    moves: PokemonMove[];
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {
    return (
        <ul>
            {moves.map((value, index) => (
                <MoveItem key={index} url={value.move.url} />
            ))}
        </ul>
    );
};

export default PokemonMoves;