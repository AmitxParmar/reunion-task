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
                    <span className="font-bold">
                        {date ? format(date, "PPP") : "Select Move-In Date"}
                        <span className='h-fit w-fit bg-primary/10'>
                            <CalendarIcon size={15} className="mx-2 inline bg-primary/10 align-middle" />
                        </span>

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