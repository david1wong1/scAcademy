import { LightningElement} from 'lwc';

export default class AnimeSearchComponent extends LightningElement {
    genre;
    animeName;
    character;

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
    handleInputChange(event) {
        var componentName = event.target.name;
        switch (componentName) {
          case 'animeName':
            this.animeName = event.detail.value;
          case 'character':
            this.character = event.detail.value;
        }
      }
}