import axios from "axios";

export async function getRandomImage() {
    const { data, status } = await axios.get('https://api.unsplash.com/photos/random', {
        params: { query: 'Bible' },
        headers: {
            Authorization: `Client-ID iNwuaxZPAxtI2AWwO13uiqbf-19inXnoBoxBsyzCEIA`,
        },
    });

    if (status === 404 || status === 500) throw new Error('Server Error');

    return data;
}