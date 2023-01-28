import usePagination from "../../../../hooks/usePagination";
import { APIResourceList, api } from "../../../../utils/Api";
import Pagination from "../../../utils/Pagination/Pagination";
import useFetch from "../../../../hooks/useFetch";
import { Pokemon } from "../../../../utils/Pokemon";
import PokemonArrayItem from "../PokemonArrayItem/PokemonArrayItem";
import './PokemonArray.style.scss';

const pokemonsNb = 905;

export interface PokemonArrayProps {
    itemPerPage: number;
};

const PokemonArray: React.FC<PokemonArrayProps> = ({ itemPerPage }) => {
    const { currentPage, setPage, totalPages, limit, offset } = usePagination({ itemsPerPage: itemPerPage, totalCount: pokemonsNb });
    const { data } = useFetch<APIResourceList<Pokemon>>(`${api}pokemon/?limit=${limit}&offset=${offset}`);

    return (
        <div id="PokemonArray">
            <div className="array-container">
                <ul className="item-list">
                    {data ? (
                        data.results.map((value, index) => (
                            <PokemonArrayItem key={index} url={value.url} />
                        ))
                    ) : (
                        [...Array(itemPerPage)].map((value, index) => (
                            <PokemonArrayItem key={index}/>
                        ))
                    )}
                </ul>
            </div>
            <Pagination currentPage={currentPage} onPageChange={setPage} totalPages={totalPages} />
        </div>

    );
};

export default PokemonArray;