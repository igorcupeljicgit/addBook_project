import {fetch} from './Server';

class BookService {
    getBooks(){
        return fetch().then((response)=>response);
    }
}

export const bookService = new BookService();