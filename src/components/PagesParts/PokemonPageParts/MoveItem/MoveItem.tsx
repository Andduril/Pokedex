import { Link } from 'react-router-dom';
import './MoveItem.style.scss';
import useFetch from '../../../../hooks/useFetch';
import { APIResourceURL } from '../../../../utils/Api';
import { Move } from '../../../../utils/Pokemon';

export interface MoveItemProps {
    url: APIResourceURL<Move>;
}

const MoveItem: React.FC<MoveItemProps> = ({url}) => {
    // eslint-disable-next-line
    const {data, error} = useFetch<Move>(url.toString());

    return (
        <li id='MoveItem'>
            {data && (
                <Link to={`/moves/${data.id}`}>
                    {data.name}
                </Link>   
            )}
        </li>
    );
};

export default MoveItem;