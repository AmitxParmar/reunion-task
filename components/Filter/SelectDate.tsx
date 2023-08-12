import { Calendar } from '@/components/ui/calendar'
import { Calendar as CalendarIcon } from "lucide-react"

import format from "date-fns/format"
import { cn } from "@/lib/utils"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Dispatch, SetStateAction } from 'react'

interface ISelectDate {
    date: Date | undefined;
    setDate: Dispatch<SetStateAction<Date | undefined>>
}

const SelectDate = ({ date, setDate }: ISelectDate) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex flex-col">
                    <h6 className="text-sm text-gray-400">When</h6>
                    <span className="min-w-fit font-bold">
                        {date ? format(date, "PPP") : "Select Move-In Date"}
                        <CalendarIcon className="mr-2 block h-3 w-3" />
                    </span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default SelectDate