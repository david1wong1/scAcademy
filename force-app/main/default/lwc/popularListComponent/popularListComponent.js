import { LightningElement } from 'lwc';
import popularList from '@salesforce/apex/PopularListController.popularList';

export default class PopularListComponent extends LightningElement {
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
    for (let key in this.popularAnimeMap) {
        this.popularAnimeMap[key].Preview__c = this.popularAnimeMap[key].Preview__c.split('"',2)[1];
        this.popularAnimeMap[key].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.popularAnimeMap[key].Id + "/view";
    }
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
    //console.log(this.popularAnimeMap);
    //console.log(this.anime1.Preview__c);
    console.log('working');
    //console.log(typeof this.popularAnimeMap);
    //console.log(typeof this.anime1);
}).catch(error => {
    console.log('error');
});
}

OnClick(event){
    let url = event.target.id;
    //console.log(urlval);
    let lastHyphenIndex = url.lastIndexOf("-");
    let newUrl = url.substring(0, lastHyphenIndex);
    window.open(newUrl, '_blank');
    }
}