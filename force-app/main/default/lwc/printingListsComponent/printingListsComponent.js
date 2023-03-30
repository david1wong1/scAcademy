import { LightningElement, wire, track} from 'lwc';
import  displayList  from '@salesforce/apex/DisplayListComponentController.displayList';
import { refreshApex } from '@salesforce/apex';
import { subscribe, MessageContext } from 'lightning/messageService';
import refreshChannel from '@salesforce/messageChannel/refreshChannel__c';

export default class PrintingListsComponent extends LightningElement {
    favoriteList;
    watchList;
    watchedList;
    channel = refreshChannel;
    @wire (MessageContext)
    messageContext;
    wiredFavoriteListResult;
    wiredWatchListResult;
    wiredWatchedResult;

    @wire(displayList, {whichList: 'Favorites'})
    wiredFavorite(result) {
        this.wiredFavoriteListResult = result;
        if (result.data) {
            this.favoriteList = JSON.parse(JSON.stringify(result.data));
            for (let i = 0; i < this.favoriteList.length; i++) {
                this.favoriteList[i].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.favoriteList[i].Id + "/view";
            }
        } else if (result.error) {
            console.log('favoriteList error');
        }
    };

    @wire(displayList, {whichList: 'Watchlist'})
    wiredWatchList(result) {
        this.wiredWatchListResult = result;
        if (result.data) {
            this.watchList = JSON.parse(JSON.stringify(result.data));
            for (let i = 0; i < this.watchList.length; i++) {
                this.watchList[i].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.watchList[i].Id + "/view";
            }
        } else if (result.error) {
            console.log('watchlist error');
        }
    };

    @wire(displayList, {whichList: 'Watched'})
    wiredWatched(result) {
        this.wiredWatchedResult = result;
        if (result.data) {
            this.watchedList = JSON.parse(JSON.stringify(result.data));
            for (let i = 0; i < this.watchedList.length; i++) {
                this.watchedList[i].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.watchedList[i].Id + "/view";
            }
        } else if (result.error) {
            console.log('watchedList error');
        }
    };
    connectedCallback() {
        subscribe(this.messageContext, refreshChannel, (message) => {
            this.handleRefreshEvent();
        });
    }

    disconnectedCallback() {
        window.removeEventListener('refresh', this.handleRefreshEvent);
    }

    handleRefreshEvent() {
        console.log('event is working');
        refreshApex(this.wiredFavoriteListResult);
        refreshApex(this.wiredWatchListResult);
        refreshApex(this.wiredWatchedResult);
        console.log('refreshApex was ran');
    }
}