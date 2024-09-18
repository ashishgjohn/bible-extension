import { useQuery } from '@tanstack/react-query';
import { getRandomImage } from '../services/unsplashApi';

export default function useVerseImage() {
    const { data, isLoading } = useQuery({
        queryKey: ['verseImage'],
        queryFn: getRandomImage
    });

    return { data: data?.urls.small_s3, isLoading };
}