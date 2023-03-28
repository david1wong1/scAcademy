import { LightningElement} from 'lwc';
import displayList from '@salesforce/apex/DisplayListComponentController.displayList';

export default class WatchlistComponent extends LightningElement {
favoriteList;
watchList;
watched;

connectedCallback() {
    displayList({whichList:'Favorites'})
    .then(result => {
        this.favoriteList = result;
        for (let i = 0; i < this.favoriteList.length; i++) {
            this.favoriteList[i].Preview__c = this.favoriteList[i].Preview__c.split('"',2)[1];
            this.favoriteList[i].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.favoriteList[i].Id + "/view";
        }
        console.log(this.favoriteList);
}).catch(error => {
console.log('favorites error');
});
displayList({whichList:'Watchlist'})
    .then(result => {
        this.watchList = result;
}).catch(error => {
console.log('watchlist error');
});
displayList({whichList:'Watched'})
    .then(result => {
        this.watched = result;
}).catch(error => {
console.log('watched error');
});
}
}