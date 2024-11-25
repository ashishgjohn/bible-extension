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
    const [index, setIndex] = useState<number>(function () {
        return generateRandomIndex(verses.length);
    });
    const verse = verses[index];
    const [image] = useState<ImageType>(function () {
        return images[generateRandomIndex(images.length)];
    });

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