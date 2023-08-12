import React, { useEffect } from 'react'
import { Button } from '../ui/button';
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
        <div>
            {/* <span className="font-semibold">Land</span> */}
            <Select onValueChange={handleCategoryChange}>
                <SelectTrigger >
                    <SelectValue placeholder="select property type" />
                </SelectTrigger>
                <SelectContent className='h-56'>
                    {Object.keys(categoryMappings).map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default Categories