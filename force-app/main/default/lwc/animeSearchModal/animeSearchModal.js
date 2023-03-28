import { LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';
import updateCheckbox from '@salesforce/apex/UpdateCheckboxController.updateCheckbox';

export default class AnimeSearchModal extends LightningModal {
    @api content;
    value = [];

    get options() {
        return [
            { label: 'Favorite', value: 'favorite' },
            { label: 'Watchlist', value: 'watchList' },
            { label: 'Watched', value: 'watched' },
        ];
    }


    handleChange(event) {
        this.value = event.detail.value;
        console.log(value);
    }
    
    handleCloseModal() {
        this.close('Done');
    }

}