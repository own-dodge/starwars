import IPerson from '@/types/IPerson';

export default interface ResponseData {
    data: responseObject;
}

interface responseObject {
    count: number,
    next: string,
    previous: null,
    results: Array<IPerson>
}