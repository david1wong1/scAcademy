import { LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class AnimeSearchModal extends LightningElement {
    @api content;
    @api headerText;
    handleDone() {
        this.close('Done');
    }
}