import { useState } from "react";
import MoodSelector from "../components/home/MoodSelector";
import bgImage from './../assets/imgs/HomeBg.webp';
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import { useNavigate } from "react-router-dom";
import CloseButton from "@/components/ui/CloseButton";
import settings from './../assets/imgs/Settings.png';
import logo from './../assets/imgs/SelahVieLogo.webp';

export default function Home() {
    const navigate = useNavigate();
    const [mood, setMood] = useState<number>(0);

    const handleClick = () => navigate('/settings');

    return (
        <div className="home w-[400px] h-screen m-auto relative">
            <Logo
                img={logo}
                classname="w-[158px] h-[158px] absolute top-6 left-32"
            />
            <Button
                onClick={handleClick}
                classname="absolute top-6 left-6 p-2 bg-white/10 backdrop-blur-[50px] border-white/70 border rounded-[10px] z-10"
            >
                <img src={settings} title="settings logo" className="w-[17.50px] h-[16.16px]" />
            </Button>

            <CloseButton className="absolute top-6 right-6" />

            <img src={bgImage} alt="background" className="w-[400px] h-screen object-cover" />
            <MoodSelector value={mood} onChange={setMood} />
        </div>
    );
}