import { LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';


export default class AnimeSearchModal extends LightningModal {
    @api content;

    handleCloseModal() {
        this.close('Done');
    }

}