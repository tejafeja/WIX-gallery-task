(function () {

    var flickr = window.MODULES.flickr = function () { 
    };

    /**
     * Call flickr API and search the images in flickr server
      @param query -> a phrase added in a search imput field
     *  
     */
    flickr.prototype.search = function (query) {
        let APIKey = 'b394136d5dde8d9d0d4f8fc6685386e2';
        let flickrAPI = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${query}&format=json&nojsoncallback=1`;
        let results = {
            query: query,
            images: []
        };
       
        fetch(flickrAPI)
            .then(response => response.json())
            .then(console.log(response))
            .catch (e => requestError(e, 'There are no photos'));
        return results;
    }

})();