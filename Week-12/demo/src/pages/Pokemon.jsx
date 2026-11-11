import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";


function Pokemon() {

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            try {

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);

                if (!response.ok) {
                    throw new Error("This is an HTTP error")
                }

                const json = await response.json();

                console.log(json);

                if (isMounted) {
                    setData({
                        name: json.name,
                        baseXp: json.base_experience
                    });
                    setLoading(false);
                }

            } catch (err) {
                if (isMounted) {
                    setError(err.message)
                    setLoading(false);
                }
            }
        }

        fetchData()

        return () => {
            isMounted = false;
        }


    }, [params.id])

    return (
        <>
            <h1>{data.name}</h1>
            <Link to={"/pokemon/"+(Number(params.id)-1)}>Previous</Link>
            <Link to={"/pokemon/"+(Number(params.id)+1)}>Next</Link>
        </>
    )
}

export default Pokemon;