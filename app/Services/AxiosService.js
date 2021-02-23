// @ts-ignore
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10',
    timeout: 5000
})