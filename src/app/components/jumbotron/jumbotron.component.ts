import { Component } from '@angular/core';

@Component({
    selector: 'jumbotron',
    templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent{
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnTex: string;
    private jbtBtnUrl: string;

    constructor(){
        this.jbtHeading = "Hello World";
        this.jbtText= "This is a simple hero unit, a simple jumbotron-style";
        this.jbtBtnTex = "Read More";
        this.jbtBtnUrl = "/about"
    }

}