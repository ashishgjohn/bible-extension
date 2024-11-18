import axiosInstance from "./axiosInstance";

export default async function getVersesApi(score: number) {
    const { data, status } = await axiosInstance.request({
        url: `/verses/${score}`,
        method: 'get',
    });

    if (status !== 200) throw new Error('Failed to fetch verses');

    return data;
}

export async function getVerseImage(text: string, image: string) {
    const { data, status } = await axiosInstance.request({
        url: `/images`,
        method: 'get',
        params: {
            text,
            image
        }
    });

    if (status !== 200) throw new Error('Failed to fetch image link');

    return data;
}