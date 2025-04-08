import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
    setValue((prevValue: boolean) => !prevValue);
    }, []);

    return [value, toggle];
}