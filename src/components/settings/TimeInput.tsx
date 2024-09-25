import { TimeClock } from "@mui/x-date-pickers";
import { useState } from "react";
import Button from "../ui/Button";

type TimeInputPropsType = {
    index: number
}

export default function TimeInput({ index }: TimeInputPropsType) {
    const [time, setTime] = useState();
    const date: Date = new Date(time ?? 'Wed Sep 25 2024 10:10:00');
    const formattedDate: string = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    function handleClick() {
        chrome.storage.local.set({ [`time${index}`]: formattedDate });
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <TimeClock value={time} onChange={n => setTime(n)} ampm={false} />
            {formattedDate && (
                <p className="text-lg font-semibold">{formattedDate}</p>
            )}

            <Button
                onClick={handleClick}
                classname="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 w-full p-3 px-4 rounded-xl self-center justify-self-end "
            >
                <p className="text-base font-semibold text-white">Save!</p>
            </Button>
        </div>
    );
}