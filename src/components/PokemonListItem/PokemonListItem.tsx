import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useFetch from "../../hooks/useFetch";
import { Pokemon } from "../../utils/Pokemon";

export interface PokemonListItemProps {
    id?: number;
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({id}) => {

    const {data, error} = useFetch<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if(error) return (<Typography>error</Typography>)

    return (
        <Box onClick={() => {}}>
            {data ? (
                <>
                <Typography>{data?.id}</Typography>
                <Typography>{data?.name}</Typography>
                <img src={data?.sprites.front_default} alt={'pokemon'}/>
                <ul>
                    {data?.types.map((value) => {
                        return (
                            <li onClick={() => {}}>{value.type.name}</li>
                        )
                    })}
                </ul>
                </>   
            ) : (
                <>
                    <Typography>Loading....</Typography>
                </>
            )}
        </Box>
    );
};

export default PokemonListItem;