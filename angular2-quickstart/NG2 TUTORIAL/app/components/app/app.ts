import {Component} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';
import {contactList} from '../contactList/contactList';
import {NgIf, NgFor} from 'angular2/common';
import {contactList} from '../contactList/contactList';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
@Component({
    selector: 'my-app',
    directives: [contactList, ROUTER_DIRECTIVES],
    templateUrl: 'app/components/app/app.html',
    styleUrls: ['app/components/app/app.css']
})
@RouteConfig([
    {path:"/contacts", name: "Contacts", component: contactList, useAsDefault:true },
    {path:"/newcontacts", name: "NewContacts", component: contactList }    
])
export class AppComponent { 
    
}