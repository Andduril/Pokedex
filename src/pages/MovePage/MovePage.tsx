import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Move } from "../../utils/Pokemon";
import { api } from "../../utils/Api";

const MovePage = () => {
    const { moveId } = useParams();
    // eslint-disable-next-line
    const { data, error } = useFetch<Move>(api + `move/${moveId}`)

    return (
        <>
            <h1>Move Page</h1>
            {data && (
                <span>{data.name}</span>
            )}
        </>
    );
};

export default MovePage;