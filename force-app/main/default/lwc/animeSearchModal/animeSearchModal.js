import { LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';
import { refreshApex } from '@salesforce/apex';

export default class AnimeSearchModal extends LightningModal {
    @api content;

    handleCloseModal() {
        this.dispatchEvent(new CustomEvent('refresh'));
        this.close('Done');
    }
    

}