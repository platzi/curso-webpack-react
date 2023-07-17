import { useEffect, useState } from "react";

function usePresentationCard() {
    const [data, setData] = useState();
    
    const API = process.env.API;

    useEffect(() => {
        async function fetchData(id) {
            const apiURl = id ? `${API}${id}` : API;
            try {
                const response = await fetch(apiURl);
                const data = await response.json();
                return data.results[0];
            } catch (error) {
                console.log('Fetch Error', error);
            }; 
        }
        fetchData().then((data) => setData(data))
    }, [])

    return data;
}

export default usePresentationCard;