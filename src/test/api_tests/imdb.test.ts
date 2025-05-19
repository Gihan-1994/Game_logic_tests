require('dotenv').config();
import axios from 'axios';

interface IMDBResult {
    l: string;       // Title/name
    q: string;       // Type (movie/tvSeries/name)
    id: string;      // IMDB ID
    y?: number;      // Optional year
    i?: {            // Optional image
        imageUrl: string;
        height: number;
        width: number;
    };
    s?: string;      // Optional additional info
    // ... other possible fields
}

describe('IMDB API test', () => {
    test('should fetch IMDB data', async () => {
        const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'game of thr'},
        headers: {
            'x-rapidapi-key': process.env.RAPID_IMDB_API_KEY,
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };
        try{
            const response = await axios.request(options);
            console.log('😎',response.data);
            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('d');

        } catch (error) {
            // Fail the test if there's an error
            if (axios.isAxiosError(error)) {
                console.error('❌ API Error:', error.response?.data || error.message);
            } else {
                console.error('❌ Unexpected Error:', error);
            }
            throw error; // This will make the test fail

        }
    });
    test('should return different types of media', async () => {
        const testCases = [
            //{query: 'lord of the rings', media: 'TV series'},
            {query: 'rings of power', media: 'TV series'},
            //{query: 'the walking dead', media: 'TV series'},
        ]

        for (const testCase of testCases) {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/auto-complete',
                params: { q: testCase.query },
                headers: {
                    'x-rapidapi-key': process.env.RAPID_IMDB_API_KEY,
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                 response.data.d.forEach((item: IMDBResult) => {
                     console.log('🎉', item.l);
                     console.log('😎', item.q);
                })

                expect(response.status).toBe(200);
                expect(response.data.d.some((item:IMDBResult) =>item && item.q.toLowerCase() === testCase.media.toLowerCase() )).toBeTruthy();
            } catch (error) {
                // Fail the test if there's an error
                if (axios.isAxiosError(error)) {
                    console.error('❌ API Error:', error.response?.data || error.message);
                } else {
                    console.error('❌ Unexpected Error:', error);
                }
                throw error; // This will make the test fail
            }
        }

    })
})