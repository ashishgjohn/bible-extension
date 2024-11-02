// import img0 from './../../assets/imgs/img0.jpg'
// import img1 from './../../assets/imgs/img1.jpg'
// import img2 from './../../assets/imgs/img2.jpg'
// import img3 from './../../assets/imgs/img3.jpg'
// import img4 from './../../assets/imgs/img4.jpg'
// import img5 from './../../assets/imgs/img5.jpg'
// import img6 from './../../assets/imgs/img6.jpg'
// import img7 from './../../assets/imgs/img7.jpg'
// import img8 from './../../assets/imgs/img8.jpg'
// import img9 from './../../assets/imgs/img9.jpg'
// import img10 from './../../assets/imgs/img10.jpg'
// import img11 from './../../assets/imgs/img11.jpg'
// import img12 from './../../assets/imgs/img12.jpg'
// import img13 from './../../assets/imgs/img13.jpg'
// import img14 from './../../assets/imgs/img14.jpg'
// import img15 from './../../assets/imgs/img15.jpg'
// import img16 from './../../assets/imgs/img16.jpg'
// import img17 from './../../assets/imgs/img17.jpg'
// import img18 from './../../assets/imgs/img18.jpg'
import { useEffect, useState } from "react";
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

// const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

export default function VersesContainer({ verses, images }: VersesContainerPropsType) {
    const image = images[generateRandomIndex(images.length)];
    const [index, setIndex] = useState<number>(0);
    const verse = verses[index];

    function handleClickOnVerse() {
        setIndex(generateRandomIndex(verses.length));
    }

    useEffect(() => {
        setIndex(0);
    }, [verses]);

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