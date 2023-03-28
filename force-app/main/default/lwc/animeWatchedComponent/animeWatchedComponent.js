import { LightningElement, api } from 'lwc';

export default class AnimeWatchedComponent extends LightningElement {
    @api content;
    value = [];

    get options() {
        return [
            { label: 'Watched', value: 'watched' }
        ];
    }
    
    handleWatchedChange(event) {
        this.value = event.detail.value;
        console.log(value);
        console.log(event.detail);
    }
}