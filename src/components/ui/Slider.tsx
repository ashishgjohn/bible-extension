import { ChangeEvent } from "react";

type SliderPropsType = {
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Slider({ value, min, max, step, onChange }: SliderPropsType) {
    const getMoodColor = (mood: number) => {
        const cheerfulColor = [84, 214, 109];
        const gloomyColor = [255, 94, 94];
        const moodNormalized = (mood + 10) / 20;

        const r = Math.round(gloomyColor[0] * (1 - moodNormalized) + cheerfulColor[0] * moodNormalized);
        const g = Math.round(gloomyColor[1] * (1 - moodNormalized) + cheerfulColor[1] * moodNormalized);
        const b = Math.round(gloomyColor[2] * (1 - moodNormalized) + cheerfulColor[2] * moodNormalized);

        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <div className="w-full px-3 flex flex-col gap-2 absolute bottom-16">
            <input
                type="range"
                value={value}
                step={step}
                onChange={onChange}
                min={min}
                max={max}
                title="Select your Mood"
                className="w-full h-6 px-2 appearance-none bg-gray-300 rounded-2xl cursor-pointer outline-none shadow-lg border border-white"
                style={{
                    background: getMoodColor(value)
                }}
            />
            <div className="flex flex-row justify-between items-center">
                <p className="text-center text-xs font-semibold leading-3 tracking-wide">Terrible</p>
                <p className="text-center text-xs font-semibold leading-3 tracking-wide">Excellent</p>
            </div>
        </div>
    )
}