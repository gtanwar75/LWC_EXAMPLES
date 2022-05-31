import { LightningElement,track } from 'lwc';

export default class CustomEventChild extends LightningElement {
    @track test = 'Hi buddy this is child message';
    handleClick(event){
        alert('fire');
        const storeEvent = new CustomEvent('myevent',
        {detail : this.test}

        );
        this.dispatchEvent(storeEvent);
    }
    
}