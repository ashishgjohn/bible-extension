import { Dispatch, SetStateAction } from "react";

type MoodSelectorPropsType = {
    value: number;
    onChange: Dispatch<SetStateAction<number>>;
}

export default function MoodSelector({ value, onChange }: MoodSelectorPropsType) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(parseInt(e.target.value));
    }

    return (
        <div className="w-full p-6 flex flex-col gap-2 justify-center items-start">
            <p className="font-semibold text-base">Select your mood</p>
            <div className="w-full flex gap-4">
                <p className="font-bold text-sm">-10</p>
                <input type="range" value={value} step={1} onChange={handleChange} min={-10} max={10} title="Select your Mood" className="w-full" />
                <p className="font-bold text-sm">10</p>
            </div>

            <p className="self-center text-lg font-bold">{value}</p>
        </div>
    );
}