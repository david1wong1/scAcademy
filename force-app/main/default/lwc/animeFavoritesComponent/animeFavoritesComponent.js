import { LightningElement, api } from 'lwc';
import updateCheckbox from '@salesforce/apex/UpdateCheckboxController.updateCheckbox';

export default class AnimeFavoritesComponent extends LightningElement {
    @api animeName;
    @api currentCheckboxValue
    whichList = 'Favorites';
    changeCheckboxValue;
    value;
    options = [
        { label: 'Favorite', value: 'Favorites'},
    ];

    connectedCallback() {
        console.log(this.currentCheckboxValue);
        if (this.currentCheckboxValue) {
            this.value = ['Favorite'];
        } else {
            this.value = [];
        }
    }
    handleFavoritesChange(event) {
        if (event.detail.value.length > 0) {
            this.changeCheckboxValue = true;
            console.log(this.currentCheckboxValue);
            updateCheckbox({
               whichList: this.whichList,
                name: this.animeName,
                checkboxValue: this.changeCheckboxValue
            })
        } else {
            //console.log(JSON.parse(JSON.stringify(event.detail)));
            this.checkboxValue = false;
            updateCheckbox({
                whichList: this.whichList,
                name: this.animeName,
                checkboxValue: this.checkboxValue
            })
        }
        }
    }