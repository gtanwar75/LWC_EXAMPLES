import { LightningElement,track } from 'lwc';


export default class HelloWorld extends LightningElement {
    //@track: It is used to make variable private but reactive
@track greeting ='LWC';
greetingChange(event){
    //use event handler to create data binding from template to JS controller.
this.greeting = event.target.value;
}

}