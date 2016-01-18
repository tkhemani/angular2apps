import {Component} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';
@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.html',
    styleUrls: ['app/components/app/app.css']
})
export class AppComponent { 
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