import { LightningElement } from 'lwc';
import getRandomAnimes from '@salesforce/apex/GetRandomAnimesController.getRandomAnimes';

export default class RandomAnimeComponent extends LightningElement {
    randomAnimes;
    anime1;
    anime2;
    anime3;
    anime4;
    anime5;

    connectedCallback() {
        getRandomAnimes()
        .then(result => {
            this.randomAnimes = result;
            console.log(this.randomAnimes[0]);
            for (let key in this.randomAnimes) {
                this.randomAnimes[key].Preview__c = this.randomAnimes[key].Preview__c.split('"',2)[1];
                this.randomAnimes[key].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.randomAnimes[key].Id + "/view";
            }
            this.anime1 = this.randomAnimes[0];
            this.anime2 = this.randomAnimes[1];
            this.anime3 = this.randomAnimes[2];
            this.anime4 = this.randomAnimes[3];
            this.anime5 = this.randomAnimes[4];
        });
    }

    OnClick(event) {
        let url = event.target.id;
        let lastHyphenIndex = url.lastIndexOf("-");
        let newUrl = url.substring(0, lastHyphenIndex);
        window.open(newUrl, '_blank');
    }
}