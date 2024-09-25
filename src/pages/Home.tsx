import { useState } from "react";
import MoodSelector from "../components/home/MoodSelector";
import bgImage from './../assets/imgs/bgImage1.png';
import Button from "../components/ui/Button";
import { FcSettings } from "react-icons/fc";
import Logo from "../components/ui/Logo";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [mood, setMood] = useState<number>(0);

    const handleClick = () => navigate('/settings');

    return (
        <div className="w-[380px] h-[600px] m-auto relative">
            <Logo
                classname="absolute p-4 top-6 left-6 bg-slate-300 bg-opacity-60 rounded-xl"
            />
            <Button
                onClick={handleClick}
                classname="absolute top-6 right-6 p-2 bg-slate-300 bg-opacity-60 rounded-lg z-10"
            >
                <FcSettings size={24} className="" />
            </Button>
            <img src={bgImage} alt="background" className="w-[400px] h-screen object-cover" />
            <div className="absolute top-0 left-0 w-full">
                <MoodSelector value={mood} onChange={setMood} />
            </div>
        </div>
    );
}