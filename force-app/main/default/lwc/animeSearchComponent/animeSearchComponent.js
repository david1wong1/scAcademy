import { LightningElement, api} from 'lwc';
import animeSearch from '@salesforce/apex/AnimeSearchComponentController.animeSearch';
import AnimeSearchModal from 'c/animeSearchModal';

export default class AnimeSearchComponent extends LightningElement {
animeName;
character;
genre;
showModal = true;
searchedAnimes;

handleAnimeNameInputChange(event) {
    this.animeName = event.detail.value;
}
handleCharacterInputChange(event) {
    this.character = event.detail.value;
}

get options() {
return [
    { label: '', value: null },
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Gourmet', value: 'Gourmet' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Sci-Fi', value: 'Sci-Fi' },
    { label: 'Slice of Life', value: 'SoL' },
    { label: 'Sports', value: 'Sports' },
    { label: 'Supernatural', value: 'Supernatural' },
    { label: 'Suspense', value: 'Suspense' },
];
}

handleComboboxChange(event) {
this.genre = event.detail.value;
}
handleSearchButtonClick() {
    animeSearch({
    animeName : this.animeName,
    character : this.character,
    genre : this.genre
}).then(result => {
    if (result.length > 0) {
        this.searchedAnimes = result;
    } else {
        this.searchedAnimes = "";
    }
    for (let i = 0; i < this.searchedAnimes.length; i++) {
        this.searchedAnimes[i].Preview__c = this.searchedAnimes[i].Preview__c.split('"',2)[1];
        this.searchedAnimes[i].pageURL = "https://salescraft-a-dev-ed.develop.lightning.force.com/lightning/r/Anime__c/" + this.searchedAnimes[i].Id + "/view";
    }
    this.handleShowModal();
    }).catch(error => {
    console.log('error');
    });
}

async handleShowModal() {
    //console.log(this.searchedAnimes);
    const result = await AnimeSearchModal.open({
    size: 'medium',
    content: this.searchedAnimes,
});

}
}