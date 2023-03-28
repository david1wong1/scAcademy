import { LightningElement, api } from 'lwc';

export default class AnimeFavoritesComponent extends LightningElement {
    @api content;
    value = [];

    get options() {
        return [
            { label: 'Favorite', value: 'favorite' },
        ];
    }

    
    handleFavoritesChange(event) {
        this.value = event.detail.value;
        console.log(value);
        console.log(event.detail);
    }
}