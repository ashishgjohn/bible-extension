import { useState } from "react";
import MoodSelector from "../components/home/MoodSelector";
import bgImage from './../assets/imgs/bgImage1.png';

export default function Home() {
    const [mood, setMood] = useState<number>(0);

    return (
        <div className="w-[380px] m-auto h-screen relative">
            <img src={bgImage} alt="background" className="w-[400px] h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full ">
                <MoodSelector value={mood} onChange={setMood} />
            </div>
        </div>
    );
}