import { LightningElement} from 'lwc';
import animeSearch from '@salesforce/apex/AnimeSearchComponentController.animeSearch';
import animeSearchModal from 'c/animeSearchModal';

export default class AnimeSearchComponent extends LightningElement {
    animeName;
    character;
    genre;
    showModal = true;
    result;

    handleInputChange(event) {
        var componentName = event.target.name;
        switch (componentName) {
          case 'animeName':
            this.animeName = event.detail.value;
          case 'character':
            this.character = event.detail.value;
        }
      }

    get options() {
        return [
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
    handleSendButtonClick() {
        animeSearch({
          animeName : this.animeName,
          character : this.character,
          genre : this.genre
        }).then(result => {
        this.handleShowModal();
          }).catch(error => {
            console.log('error');
          });
        }

    async handleShowModal() {
         this.result = await lightningModalLWC.open({
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            content: 'Passed into content api',
            headerText:'I am a dynamic header.'
        });
        console.log(result);
    }
}