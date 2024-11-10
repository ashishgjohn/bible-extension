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
            <div className="w-full absolute flex justify-between items-start p-6">
                <Button
                    onClick={handleClick}
                    classname="p-[10px] bg-white/10 backdrop-blur-[50px] border-white/70 border rounded-[10px] z-10"
                >
                    <img src={settings} title="settings logo" className="w-[17.50px] h-[16.16px]" />
                </Button>

                <Logo
                    img={logo}
                    classname="w-[140px] h-[140px]"
                />

                <CloseButton/>
            </div>

            <img src={bgImage} alt="background" className="w-[400px] h-screen object-cover" />
            <MoodSelector value={mood} onChange={setMood} />
        </div>
    );
}