import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import sendEmail from '@salesforce/apex/MyComponentController.sendEmail';
export default class MyComponent extends LightningElement {
  
  toAddress;
  subject;
  body;

  handleSendButtonClick() {
    sendEmail({
      toAddress : this.toAddress,
      subject : this.subject,
      body : this.body
    }).then(result => {
      this.showToast();
      }).catch(error => {

      });
    }

  handleInputChange(event) {
    var componentName = event.target.name;

    /*if (componentName == 'toAddress') {
      this.toAddress = event.detail.value;
    } else if (componentName == 'subject') {
      this.subject = event.detail.value;
    } else if (componentName == 'body') {
      this.body = event.detail.value;
    }
    */

    switch (componentName) {
      case 'toAddress':
        this.toAddress = event.detail.value;
      case 'subject':
        this.subject = event.detail.value;
      case 'body':
        this.body = event.detail.value;
    }
  }
  
  showToast() {
      var toastEvent = new ShowToastEvent(
        {
          title: 'Sent',
          message:'Your email has been successfully sent.',
          variant: 'success',
        }
      );
      this.dispatchEvent(toastEvent);
  }
}