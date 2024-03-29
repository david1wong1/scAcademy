import { LightningElement, api } from 'lwc';
import updateCheckbox from '@salesforce/apex/UpdateCheckboxController.updateCheckbox';
import getCheckboxValue from '@salesforce/apex/GetCheckboxValue.getCheckboxValue';

export default class AnimeWatchlistComponent extends LightningElement {
    @api animeName;
    whichList = 'Watchlist';
    changeCheckboxValue;
    currentCheckboxValue;
    value=[];
    options = [
        { label: 'Watchlist', value: 'Watchlist'},
    ];

    connectedCallback() {
        getCheckboxValue({
            whichList: this.whichList,
            animeName: this.animeName
        }).then(result => {
            this.currentCheckboxValue = result.Watchlist__c;
            if (this.currentCheckboxValue) {
                this.value = [this.whichList];
            } else {
                this.value = [];
            }
        }).catch(error => {
            console.log('error');
        });
    }
    
    handleWatchlistChange(event) {
        if (event.detail.value.length > 0) {
            this.changeCheckboxValue = true;
            console.log(this.currentCheckboxValue);
            updateCheckbox({
                whichList: this.whichList,
                animeName: this.animeName,
                checkboxValue: this.changeCheckboxValue
            });
        } else {
            this.checkboxValue = false;
            updateCheckbox({
                whichList: this.whichList,
                animeName: this.animeName,
                checkboxValue: this.checkboxValue
            });
        }
    }
}