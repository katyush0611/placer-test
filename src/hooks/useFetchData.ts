import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setError(data.error)
                setData(data)
            })
    }, [url]);

    return { data, error };
};

export default useFetchData;