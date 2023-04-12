import { LightningElement } from 'lwc';
/*import insertContactInfo from '@salesforce/apex/DP2Callout.insertContactInfo';*/

export default class DP2JSONPayloadHandler extends LightningElement {
    jsonText;

    handleJSONChange(event) {
        this.jsonText = event.detail.value;
    }
    handleSendButtonClick() {
        insertContactInfo({jsonStr : this.jsonText});
    }
}