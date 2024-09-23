/// <reference types="chrome"/>

import { useEffect, useState } from "react";

export default function useChromeStorage(key: string, defaultValue: string) {
    const [value, setValue] = useState(defaultValue);

    // Load value from Chrome storage on mount
    useEffect(() => {
        chrome.storage.sync.get([key], (result: any) => {
            if (result[key]) {
                setValue(result[key]);
            }
        });
    }, [key]);

    // Save value to Chrome storage whenever it changes
    useEffect(() => {
        chrome.storage.sync.set({ [key]: value });
    }, [key, value]);

    return [value, setValue];
}
