import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{test}}</h1>'
})
export class AppComponent { 
    test = 27;
    constructor () {
        this.test = 26;
        this.tests();
    }
    tests() {
        this.test = 55;
    }
}