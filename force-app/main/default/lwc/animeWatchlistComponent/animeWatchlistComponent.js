import { LightningElement, api } from 'lwc';

export default class AnimeWatchlistComponent extends LightningElement {
    @api content;
    value = [];

    get options() {
        return [
            { label: 'Watchlist', value: 'watchList' }
        ];
    }
    
    handleWatchlistChange(event) {
        this.value = event.detail.value;
        console.log(value);
        console.log(event.detail);
    }
}