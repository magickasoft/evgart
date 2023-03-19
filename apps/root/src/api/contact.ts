import {API} from './axios';

export const contact = (data: any) => API.post('contact', data);
