import { useState } from "react";
import VerseType from "../../constants/VerseType";
import Verse from "./Verse";
import ErrorPlaceholder from '../ui/ErrorPlaceholder';
import ImageType from '@/constants/ImageType'

type VersesContainerPropsType = {
    verses: VerseType[];
    images: ImageType[];
}

function generateRandomIndex(length: number) {
    return Math.floor(Math.random() * length);
}

export default function VersesContainer({ verses, images }: VersesContainerPropsType) {
    const image = images[generateRandomIndex(images.length)];
    const [index, setIndex] = useState<number>(generateRandomIndex(verses.length));    
    const verse = verses[index];

    function handleClickOnVerse() {
        setIndex(generateRandomIndex(verses.length));
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {verses.length === 0 ? (
                <ErrorPlaceholder message='No verses found!' />
            ) : (
                <Verse
                    text={verse?.verse}
                    reference={verse?.reference}
                    mood={verse?.score}
                    image={image?.name}
                    onClick={handleClickOnVerse}
                />
            )}
        </div>
    );
}