import { useEffect, useState } from "react";
import { VerseType } from "../../constants/VerseType";
import Verse from "./Verse";
import useVerseImage from "../../functions/useVerseImage";
import Loader from "../ui/Loader";

type VersesContainerPropsType = {
    verses: VerseType[];
}

function generateRandomIndex(length: number) {
    return Math.floor(Math.random() * length);
}


export default function VersesContainer({ verses }: VersesContainerPropsType) {
    const { data, isLoading } = useVerseImage();
    const [index, setIndex] = useState<number>(0);
    const verse = verses[index];

    function handleClickOnVerse() {
        setIndex(generateRandomIndex(verses.length));
    }

    useEffect(() => {
        setIndex(0);
    }, [verses]);

    if (verses.length === 0) {
        return (
            <p className="text-center">No verses found</p>
        );
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {isLoading ? (
                <Loader />
            ) : (
                <Verse {...verse} image={data} onClick={handleClickOnVerse} />
            )}
        </div>
    );
}