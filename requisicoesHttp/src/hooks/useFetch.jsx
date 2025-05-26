import { useState, useEffect } from "react";

// Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // Refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    // loading
    const [loading, setLoading] = useState(false)

    // Tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method, 
                headers:{
                    "Content-type": "application/json"    
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // Tratando erros
            try {
            // loading
            setLoading(true)

            const res = await fetch(url)
            const json = await res.json()

            // loading
            setLoading(false)

            setData(json)
            } catch (error) {
                console.log(error.message)

                setError("Houve algum erro ao carregar os dados!")
            }
        }

        fetchData()
    }, [url, callFetch])

    // Refatorando o POST
    useEffect(() => {

        const httpRequest = async() => {
            let json

            if(method === "POST"){
                // loading
                setLoading(true)

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                json = await res.json()

                // loading
                setLoading(false)
            }

            setCallFetch(json)
        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig, loading, error }
}