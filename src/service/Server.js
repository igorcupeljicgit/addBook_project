import {genreArray} from "../DataFolder/GenreData";

const fetch = () => new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(genreArray);
  }, 300);
});

export { fetch };
