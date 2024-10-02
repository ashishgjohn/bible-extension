import { MultiSectionDigitalClock } from "@mui/x-date-pickers";
import { useState } from "react";
import Button from "../ui/Button";
import toast from "react-hot-toast";

type TimeInputPropsType = {
    index: number
}

export default function TimeInput({ index }: TimeInputPropsType) {
    const [time, setTime] = useState();
    const date: Date = new Date(time ?? 'Wed Sep 25 2024 10:10:00');
    const formattedDate: string = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    function handleClick() {
        chrome.storage.local.set({ [`time${index}`]: formattedDate });
        chrome.storage.local.set({ [`openedForTime${index}`]: false });
        toast.success("Saved!")
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <MultiSectionDigitalClock value={time} onChange={setTime} timeSteps={{ hours: 1, minutes: 1, seconds: 5 }} ampm={true} className="flex justify-center border-none" />
            <Button
                onClick={handleClick}
                classname="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 w-full p-3 px-4 rounded-xl self-center justify-self-end "
            >
                <p className="text-base font-semibold text-white">Save!</p>
            </Button>
        </div>
    );
}