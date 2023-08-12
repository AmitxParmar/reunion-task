import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categoryMappings, useProperties } from '@/hooks/useProperties';


const Categories = () => {
    const { setCategory } = useProperties()

    const handleCategoryChange = (data: string) => {
        setCategory(data)
    }

    return (
        <Select onValueChange={handleCategoryChange}>
            <SelectTrigger>
                <SelectValue placeholder="Apartment" />
            </SelectTrigger>
            <SelectContent className='h-56'>
                {Object.keys(categoryMappings).map((category) => (
                    <SelectItem key={category} value={category}>
                        {category}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default Categories