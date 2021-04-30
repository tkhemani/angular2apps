import {Component, OnInit} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';
import {contact} from '../contact/contact';
import {ContactService} from '../services/contact.service'
@Component({
    selector: 'contact-list',
    //directives: ['contactList'],
    templateUrl: 'app/components/contactList/contactList.html',
    styleUrls: ['app/components/contactList/contactList.css'],
    directives: [contact],
    providers: [ContactService]
})
export class contactList implements OnInit{ 
    private selectedPerson = {};
    private persons = [];
    private showDetail = false;
    constructor (private _contactService: ContactService) {
    }
    personSelected(person) {
        this.selectedPerson = person;
    }
    getContacts(){
        this._contactService.getContacts().then((contacts)=> this.persons = contacts);
    }
    ngOnInit(){
        this.getContacts();
    }
}