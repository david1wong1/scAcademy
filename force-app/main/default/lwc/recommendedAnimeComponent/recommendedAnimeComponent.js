import { LightningElement } from 'lwc';
import getRecommendedAnimes from '@salesforce/apex/GetRecommendedAnimesController.getRecommendedAnimes';


export default class RecommendedAnimeComponent extends LightningElement {
    recommendedAnimes;
    anime1;
    anime2;
    anime3;
    anime4;
    anime5;

    connectedCallback() {
        getRecommendedAnimes()
        .then(result => {
            this.recommendedAnimes = result;
            console.log(this.recommendedAnimes[0]);
            for (let key in this.recommendedAnimes) {
                this.recommendedAnimes[key].Preview__c = this.recommendedAnimes[key].Preview__c.split('"',2)[1];
                this.recommendedAnimes[key].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.recommendedAnimes[key].Id + "/view";
            }
            this.anime1 = this.recommendedAnimes[0];
            this.anime2 = this.recommendedAnimes[1];
            this.anime3 = this.recommendedAnimes[2];
            this.anime4 = this.recommendedAnimes[3];
            this.anime5 = this.recommendedAnimes[4];
        });
    }

    onClick(event) {
        let url = event.target.id;
        let lastHyphenIndex = url.lastIndexOf("-");
        let newUrl = url.substring(0, lastHyphenIndex);
        window.open(newUrl, '_blank');
    }
}