import axiosInstance from "./axiosInstance";

export default async function getVersesApi(score: number) {
    const { data, status } = await axiosInstance.request({
        url: `/verses/${score}`,
        method: 'get',
    });

    if (status !== 200) throw new Error('Failed to fetch verses');

    return data;
}

export async function getVerseImage(text: string, reference: string, image: string) {
    const { data, status } = await axiosInstance.request({
        url: `/share`,
        method: 'get',
        params: {
            format: 'image',
            verse: text,
            reference: reference,
            bgImage: image
        }
    });

    if (status !== 200) throw new Error('Failed to fetch image link');

    return data;
}