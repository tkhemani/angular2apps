import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
    <div>
    {{c.name}}
    </div>
    `,
    inputs: ["c"]
})
export class contact { 
    public c = {};    
}