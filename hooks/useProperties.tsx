'use client'
import { baseUrl, fetchApi } from "@/config/apiConfig";
import { useContext, createContext, useState, useEffect, Dispatch, SetStateAction } from "react";

type PropertyContext = {
    setCategory: Dispatch<SetStateAction<number | undefined>>
    properties: IProperties | null
    loading: boolean
}

const Properties = createContext<PropertyContext | null>(null);

export const PropertiesStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [properties, setProperties] = useState<IProperties | null>(null);
    const [category, setCategory] = useState<number | undefined>(4);

    useEffect(() => {
        async function fetchProperties() {
            const result = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=${category}`)
            setProperties(result)
            setLoading(true)
        }

        fetchProperties()
        console.log(properties)
        console.log(category, 'category change check')

    }, [category]);

    return (
        <Properties.Provider value={{ setCategory, properties, loading }}>
            {children}
        </Properties.Provider>
    )
}

export const useProperties = () => useContext(Properties);