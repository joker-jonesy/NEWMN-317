import {useState, useEffect} from "react";

function SetList(){
    const [loading, setLoading] = useState(true);
    const [data, setData]= useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let isMounted = true;

        async function fetchData(){
            try{

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);

                if(!response.ok){
                    throw new Error("This is an HTTP error")
                }

                const json = await response.json();

                if(isMounted){
                    setData(json.results);
                    setLoading(false);
                }

            }catch(err){
                if(isMounted){
                    setError(err.message)
                    setLoading(false);
                }
            }
        }

        fetchData()

        return ()=>{
            isMounted = false;
        }


    },[])

    console.log(data)

    const pokemans = data.map((item, idx)=>
    <div key={idx}>
        <h1>{item.name}</h1>
    </div>
    )


    return (
        <>
           <h1>SetList</h1>
            {data.length===0? <h2>So Results</h2>:pokemans}
            <p>{error}</p>
        </>
    )
}

export default SetList;