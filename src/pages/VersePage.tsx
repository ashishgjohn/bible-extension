import verses from '../data/verses.json'
import VersesContainer from "../components/home/VersesContainer";
import { useParams } from "react-router-dom";

export default function VersePage() {
    const { index } = useParams();
    const versesList = verses.filter(v => v.mood === Number(index));

    return (
        <div>
            <VersesContainer verses={versesList} />
        </div>
    );
}