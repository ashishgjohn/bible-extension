import { Dispatch, SetStateAction } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Slider from "../ui/Slider";
import star from "./../../assets/imgs/Star.png";
import faceGreen from './../../assets/imgs/Face_green.webp';
import faceRed from './../../assets/imgs/Face_red.webp';
import faceOrange from './../../assets/imgs/Face_orange.webp';
import faceYellow from './../../assets/imgs/Face_yellow.webp';

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
        <div className="w-full p-1 absolute bottom-0">
            <div className="h-[400px] p-1 flex flex-col gap-2 justify-between items-start bg-white/0 rounded-[10px] border border-white/70 backdrop-blur-[50px]">
                <div className="pt-6 w-full flex flex-col justify-center items-center gap-1">
                    <p className="text-xl font-bold ">How are you feeling?</p>
                    <p className="text-center text-xs font-normal font-['Montserrat']">Drag the slider to set your mood</p>
                </div>

                <div className="w-full relative flex justify-center">
                    {value >= -10 && value <= -6 && (
                        <img src={faceRed} title="mood image" className="w-64 absolute bottom-2" />
                    )}

                    {value >= -5 && value <= -1 && (
                        <img src={faceOrange} title="mood image" className="w-64 absolute bottom-2" />
                    )}
                    {value >= 0 && value <= 5 && (
                        <img src={faceYellow} title="mood image" className="w-64 absolute bottom-2" />
                    )}
                    {value >= 5 && value <= 10 && (
                        <img src={faceGreen} title="mood image" className="w-64 absolute bottom-2" />
                    )}

                    <Slider value={value} onChange={handleChange} min={-10} max={10} step={1} />
                    <Button
                        onClick={handleClick}
                        classname="w-full absolute bottom-0 p-4 bg-black flex justify-center items-center gap-2 rounded-xl"
                    >
                        <>
                            <img src={star} title="star icon" className="w-[13px] h-[17px]" />
                            <p className="text-sm font-semibold text-white">Show my verse!</p>
                        </>
                    </Button>
                </div>
            </div>
        </div>
    );
}