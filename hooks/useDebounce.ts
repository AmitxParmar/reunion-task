import { useEffect, useState } from "react"

type UseDebounce<T> = {
    delay: number;
    value: T;
}

export const useDebounce = <T>({ delay = 500, value }: UseDebounce<T>) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, value])

    return debounceValue;
}

