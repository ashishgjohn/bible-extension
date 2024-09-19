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
        const cheerfulColor = [255, 176, 46];
        const gloomyColor = [0, 28, 64];
        const moodNormalized = (mood + 10) / 20;

        const r = Math.round(gloomyColor[0] * (1 - moodNormalized) + cheerfulColor[0] * moodNormalized);
        const g = Math.round(gloomyColor[1] * (1 - moodNormalized) + cheerfulColor[1] * moodNormalized);
        const b = Math.round(gloomyColor[2] * (1 - moodNormalized) + cheerfulColor[2] * moodNormalized);

        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <input
            type="range"
            value={value}
            step={step}
            onChange={onChange}
            min={min}
            max={max}
            title="Select your Mood"
            className="w-full h-6 px-2 appearance-none bg-gray-300 rounded-2xl cursor-pointer outline-none shadow-lg "
            style={{
                background: getMoodColor(value)
            }}
        />
    )
}