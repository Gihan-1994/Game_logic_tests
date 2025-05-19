require('dotenv').config();
import axios from 'axios';

interface Product_Type {
    product_title: string,
    on_sale: boolean,
    price: number,
    store_name: string
}

describe('Product API', () => {
    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search-light-v2',
        params: {
            q: 'Nike shoes',
            country: 'us',
            language: 'en',
            page: '1',
            limit: '10',
            sort_by: 'BEST_MATCH',
            product_condition: 'ANY',
            return_filters: 'false'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPID_PRODUCTS_API_KEY,
            'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
        }
    };
    test('should fetch product data', async () => {
        try {
            const response = await axios.request(options);
            const data = response.status === 200 ?
                response.data.data.products.forEach((item: Product_Type) => {
                    console.log(
                        '🎁', item.product_title, '\n',
                        '✨', item.on_sale, '\n',
                        '💰', item.price, '\n',
                        '⚖', item.store_name)
                })
                : console.log('😡', response.data)

            expect(response.status).toBe(200);
            expect(response.data.data.products.length).toBeGreaterThan(0);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('❌ API Error:', error.response?.data || error.message)
            } else {
                console.error('❌ Unexpected error:', error)
            }
            throw error;
        }
    })
})