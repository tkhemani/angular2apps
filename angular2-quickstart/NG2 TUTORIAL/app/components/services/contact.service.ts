import {Injectable} from 'angular2/core';
import {CONTACTS} from '../Mocks/contact.mock'

@Injectable()
export class ContactService {
    getContacts() {
        return Promise.resolve(CONTACTS);
    }
}