import { useState } from "react";
import MoodSelector from "../components/home/MoodSelector";
import verses from '../data/verses.json'
import VersesContainer from "../components/home/VersesContainer";

export default function Home() {
    const [mood, setMood] = useState<number>(0);
    const versesList = verses.filter(v => v.mood === mood);

    return (
        <div>
            <MoodSelector value={mood} onChange={setMood} />
            <VersesContainer verses={versesList} />
        </div>
    );
}