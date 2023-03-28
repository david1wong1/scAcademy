import { LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';
import updateCheckbox from '@salesforce/apex/UpdateCheckboxController.updateCheckbox';

export default class AnimeSearchModal extends LightningModal {
    @api content;


    handleChange(event) {
        this.value = event.detail.value;
        console.log(value);
        console.log(event.detail);
    }
    
    handleCloseModal() {
        this.close('Done');
    }

}