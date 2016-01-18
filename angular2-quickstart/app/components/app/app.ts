import {Component} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';
import {contactList} from '../contactList/contactList';
@Component({
    selector: 'my-app',
    directives: [contactList],
    templateUrl: 'app/components/app/app.html',
    styleUrls: ['app/components/app/app.css']
})
export class AppComponent { 
    
}