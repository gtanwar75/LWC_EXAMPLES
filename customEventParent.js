import { LightningElement,track } from 'lwc';

export default class CustomEventParent extends LightningElement {

    @track response = '';
handleResponse(event) {
    alert(JSON.stringify(event));
this.response = event.detail;
console.log('event>>' +JSON.stringify(event));
 }
}