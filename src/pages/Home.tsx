import { useState } from "react";
import MoodSelector from "../components/home/MoodSelector";

export default function Home() {
    const [mood, setMood] = useState<number>(0);

    return <MoodSelector value={mood} onChange={setMood} />;
}