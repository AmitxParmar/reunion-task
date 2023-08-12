import React from 'react'
import { Button } from '../ui/button';

type Props = {
    [key: string]: number;
}

const Categories = (props: Props) => {
    return (
        <div>
            <span className="text-sm text-gray-400">Property Type</span>
            <span className="font-semibold">Land</span>
        </div>
    )
}

export default Categories