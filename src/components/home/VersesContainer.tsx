import { useState } from "react";
import { VerseType } from "../../constants/VerseType";
import Verse from "./Verse";

type VersesContainerPropsType = {
    verses: VerseType[];
}

function generateRandomIndex(length: number) {
    return Math.floor(Math.random() * length);
  }
  

export default function VersesContainer({ verses }: VersesContainerPropsType) {
    const [index, setIndex] = useState<number>(function () {
        return generateRandomIndex(verses.length);
    });
    const verse = verses[index];

    function handleClickOnVerse() {
        setIndex(generateRandomIndex(verses.length));
    }

    if (verses.length === 0) {
        return (
            <p className="text-center">No verses found</p>
        );
    }

    return (
        <Verse {...verse} onClick={handleClickOnVerse} />
    );
}