import { LightningElement, api, wire } from 'lwc';
import popularList from '@salesforce/apex/PopularListController.popularList';

export default class PopularListComponent extends LightningElement {
    @api popularList
    popularAnimeMap;
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
    @wire(popularList, {numOfAnimes: 10})
    wiredList({ error,data }) {
    if (data) {
        this.popularAnimeMap = data;
        this.anime1 = JSON.stringify(popularAnimeMap.get(1));
        console.log(this.popularAnimeMap);
        console.log(anime1);
        console.log('hi');
    } else if (error) {
        console.log('error');
    }
    }
}