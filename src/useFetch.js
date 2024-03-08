import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setdata] = useState(null)
    const [isWaiting, setIsWaiting] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("could not fetch the data.")
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    setdata(data);
                    setIsWaiting(false);
                    setError(null)
                })
                .catch(err => {
                    setIsWaiting(false);
                    setError(err.message);
                });
        }, 500);   // setTimeout function is used to show user 'Loading...' msg (isWaiting). If you dont use setTimeut function user cant see 'Loading...' msg because ing will change state very fast

    }, [url])   // can remove 'url' from the dependency array

    return { data, isWaiting, error };
}

export default useFetch;