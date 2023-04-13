import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import insertContactInfo from '@salesforce/apex/DP2Callout.insertContactInfo';

export default class DP2JSONPayloadHandler extends LightningElement {
    jsonText;
    deserializedText;

    handleJSONChange(event) {
        this.jsonText = event.detail.value;
    }
    handleSendButtonClick() {
        this.deserializedText = this.convertToPlain(this.jsonText);
        console.log(this.deserializedText);
        insertContactInfo({jsonStr : this.deserializedText
        }).then(result => {
           this.showToast();
        }).catch(error => {
            console.log('error');
        });
    };

    showToast() {
        var toastEvent = new ShowToastEvent(
          {
            title: 'Sent',
            message:'Your Contact has been successfully inserted.',
            variant: 'success',
          }
        );
        this.dispatchEvent(toastEvent);
    }
    convertToPlain(html){
        // Create a new div element
        var tempDivElement = document.createElement("div");
    
        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;
    
        // Retrieve the text property of the element 
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }
    
}