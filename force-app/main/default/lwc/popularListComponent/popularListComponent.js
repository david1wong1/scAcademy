import { LightningElement, api, wire } from 'lwc';
import popularList from '@salesforce/apex/PopularListController.popularList';

export default class PopularListComponent extends LightningElement {
    anime1;
    anime2;
    anime3;
    anime4;
    anime5;
    anime6;
    anime7;
    anime8;
    anime9;
    anime10;
    connectedCallback() {
        popularList({numOfAnimes:10})
        .then(result => {
            this.anime1 = result.get(1);

        })
    }
}