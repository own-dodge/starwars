export default interface ResponseData {
    data: responseObject;
}

interface responseObject {
    count: number,
    next: string,
    previous: null,
    results: []
}