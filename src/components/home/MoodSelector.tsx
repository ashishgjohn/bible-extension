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
            <div className="w-full flex flex-col gap-4 items-start">
                <p className="font-bold text-base">I am feeling</p>
                <div className="w-full flex flex-col gap-3">
                    <Slider value={value} min={-10} max={10} step={1} onChange={handleChange} />

                    <div className="w-full flex justify-between">
                        <p className="font-bold text-xs">Downcast</p>
                        <p className="font-bold text-xs">Cheerful</p>
                    </div>
                </div>
            </div>

            <Button
                onClick={handleClick}
                classname="w-full bg-primary p-2 px-4 rounded-lg self-center justify-self-end "
            >
                <p className="text-base font-semibold text-white">View</p>
            </Button>
        </div>
    );
}