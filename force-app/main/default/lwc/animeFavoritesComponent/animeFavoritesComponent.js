import { LightningElement, api } from 'lwc';
import updateCheckbox from '@salesforce/apex/UpdateCheckboxController.updateCheckbox';
import getCheckboxValue from '@salesforce/apex/GetCheckboxValue.getCheckboxValue';

export default class AnimeFavoritesComponent extends LightningElement {
    @api animeName;
    whichList = 'Favorites';
    changeCheckboxValue;
    currentCheckboxValue;
    value=[];
    options = [
        { label: 'Favorite', value: 'Favorite'},
    ];

    connectedCallback() {
        getCheckboxValue({
            whichList: this.whichList,
            animeName: this.animeName
        }).then(result => {
            this.currentCheckboxValue = result.Favorite__c;
            if (this.currentCheckboxValue) {
                this.value = [this.whichList];
            } else {
                this.value = [];
            }
            }).catch(error => {
                console.log('error');
            });
    }
    
    handleFavoritesChange(event) {
        if (event.detail.value.length > 0) {
            this.changeCheckboxValue = true;
            console.log(this.currentCheckboxValue);
            updateCheckbox({
                whichList: this.whichList,
                animeName: this.animeName,
                checkboxValue: this.changeCheckboxValue
            })
        } else {
            this.checkboxValue = false;
            updateCheckbox({
                whichList: this.whichList,
                animeName: this.animeName,
                checkboxValue: this.checkboxValue
            })
        }
        }
    }