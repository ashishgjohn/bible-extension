// import verses from '../data/verses.json';
import VersesContainer from "../components/home/VersesContainer";
import { useParams } from "react-router-dom";
import verses from '../data/data.json';

export default function VersePage() {
    const { index } = useParams();
    const versesList = verses.filter(v => v.Score === Number(index));

    return (
        <div className='w-[400px] resize-none'>
            <VersesContainer verses={versesList} />
        </div>
    );
}