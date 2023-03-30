import { LightningElement } from 'lwc';
import randomAnimes from '@salesforce/apex/RandomAnimesController.randomAnimes';

export default class RandomAnimeComponent extends LightningElement {
    randomAnimesMap;
    anime1;
    anime2;
    anime3;
    anime4;
    anime5;

    connectedCallback() {
        randomAnimes()
        .then(result => {
            this.randomAnimesMap = result;
            console.log(this.randomAnimesMap);
            for (let key in this.randomAnimesMap) {
                this.randomAnimesMap[key].Preview__c = this.randomAnimesMap[key].Preview__c.split('"',2)[1];
                this.randomAnimesMap[key].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.randomAnimesMap[key].Id + "/view";
            }
            console.log(this.randomAnimesMap);
            this.anime1 = this.randomAnimesMap[1];
            this.anime2 = this.randomAnimesMap[2];
            this.anime3 = this.randomAnimesMap[3];
            this.anime4 = this.randomAnimesMap[4];
            this.anime5 = this.randomAnimesMap[5];
        });
    }

    OnClick(event) {
        let url = event.target.id;
        let lastHyphenIndex = url.lastIndexOf("-");
        let newUrl = url.substring(0, lastHyphenIndex);
        window.open(newUrl, '_blank');
    }
}