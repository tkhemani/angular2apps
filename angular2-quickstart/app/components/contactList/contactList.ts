import {Component} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';
import {contact} from '../contact/contact';
@Component({
    selector: 'contact-list',
    //directives: ['contactList'],
    templateUrl: 'app/components/contactList/contactList.html',
    styleUrls: ['app/components/contactList/contactList.css'],
    directives: [contact]
})
export class contactList { 
    private selectedPerson = {};
    private persons = [{
        name: "tarun",
        phone: 245009
    },
    {
        name: "tasdsrun",
        phone: 245009
    },
    {
        name: "res",
        phone: 245009
    }]
    private showDetail = false;
    constructor () {
    }
    personSelected(person) {
        this.selectedPerson = person;
    }
}