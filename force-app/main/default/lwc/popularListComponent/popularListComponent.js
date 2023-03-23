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
connectedCallback() {
    popularList({numOfAnimes:10})
    .then(result => {
        this.popularAnimeMap = result;
        this.anime1 = this.popularAnimeMap[1];
        this.anime2 = this.popularAnimeMap[2];
        this.anime3 = this.popularAnimeMap[3];
        this.anime4 = this.popularAnimeMap[4];
        this.anime5 = this.popularAnimeMap[5];
        this.anime6 = this.popularAnimeMap[6];
        this.anime7 = this.popularAnimeMap[7];
        this.anime8 = this.popularAnimeMap[8];
        this.anime9 = this.popularAnimeMap[9];
        this.anime10 = this.popularAnimeMap[10];
        console.log(this.popularAnimeMap);
        console.log(this.popularAnimeMap[1]);
        console.log('working');
        console.log(typeof this.popularAnimeMap);
        console.log(typeof this.anime1);
    }).catch(error => {
        console.log('error');
    });
    }
}