import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanPokemonDetail, getPokemonDetail } from "../redux/actions";

const usePokemon = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pokemonDetail } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getPokemonDetail(id))
            .then(() => {
                console.log('exito');
            })
            .catch((error) => {
                console.log(`NOPE: ${error.message}`);
            });
        return () => { dispatch(cleanPokemonDetail()) };
    }, [id, dispatch]);
    return pokemonDetail;
};

export default usePokemon;