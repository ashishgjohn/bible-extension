import { Dispatch, SetStateAction } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Slider from "../ui/Slider";

type MoodSelectorPropsType = {
    value: number;
    onChange: Dispatch<SetStateAction<number>>;
}

export default function MoodSelector({ value, onChange }: MoodSelectorPropsType) {
    const navigate = useNavigate();
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(parseInt(e.target.value));
    }

    function handleClick() {
        navigate(`/verse/${value}`);
    }

    return (
        <div className="w-full h-screen p-6 pt-72 flex flex-col gap-2 justify-between items-start">

            <div className="w-full p-6 px-4 rounded-2xl bg-slate-300 bg-opacity-60 flex flex-col gap-4 justify-center items-center">
                <p className="font-semibold text-base">I am feeling</p>

                <div className="w-full flex justify-between items-center gap-3">
                    <p className="font-bold text-3xl">&#128532;</p>
                    <Slider value={value} min={-10} max={10} step={1} onChange={handleChange} />
                    <p className="font-bold text-3xl">&#128522;</p>
                </div>
            </div>

            <Button
                onClick={handleClick}
                classname="w-full bg-primary p-3 px-4 rounded-xl self-center justify-self-end "
            >
                <p className="text-base font-semibold text-white">View</p>
            </Button>
        </div>
    );
}