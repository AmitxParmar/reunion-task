'use client'
import { baseUrl, fetchApi } from "@/config/apiConfig";
import { useContext, createContext, useState, useEffect, Dispatch, SetStateAction } from "react";

interface PropertyContext {
    setCategory: Dispatch<SetStateAction<string>>
    properties: IProperties[] | null
    loading: boolean
    error: Error | null
}
const initialContext: PropertyContext = {
    setCategory: () => { }, // Placeholder value
    properties: null,
    loading: false,
    error: null,
};

const Properties = createContext<PropertyContext>(initialContext);

export const categoryMappings: {
    [key: string]: number
} = {
    Apartment: 4,
    Townhouses: 16,
    Villas: 3,
    Penthouses: 18,
    'Hotel Apartments': 21,
    'Villa Compound': 19,
    'Residential Plot': 14,
    'Residential Floor': 12,
    'Residential Building': 17,
    Office: 5,
    Shop: 6,
    Warehouse: 7,
    'Labour camp': 9,
    'Commercial Villa': 25,
    'Bulk Units': 20,
    'Commercial Plot': 15,
    'Commercial Floor': 13,
    'Commercial Building': 10,
    Factory: 8,
    'Industrial Land': 22,
    'Mixed Use Land': 23,
    Showroom: 24,
    'Other Commercial': 11,
};

export const getCategoryId = (category: string) => {
    return categoryMappings[category];
};


export const PropertiesStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [properties, setProperties] = useState<IProperties[] | null>(null);
    const [category, setCategory] = useState<string>('Apartment');
    const [error, setError] = useState<Error | null>(null);


    console.log('properties check', properties)
    async function fetchProperties() {
        setLoading(true);
        const result = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=${getCategoryId(category)}`)
        setProperties(result.hits)
        setLoading(false)
    }
    useEffect(() => {
        fetchProperties()
    }, [category]);

    return (
        <Properties.Provider value={{ setCategory, properties, loading, error }}>
            {children}
        </Properties.Provider>
    )
}




export const useProperties = () => useContext(Properties);