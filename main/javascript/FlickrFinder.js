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
        let flickrRequest = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${query}&extras=url_s&format=json&nojsoncallback=1`; 
        let results = {
            query: query,
            images: []
        };
        const request = async () => {
            const response = await fetch(flickrRequest);
            //handle when response is not successfull
            if(!response.ok) {
                throw new Error('Network response was not ok.'); 
            }
            const data = await response.json();
            //when no results return empty array
            if(data.stat === 'fail'){
                return results;
            }
            //loop over and stick all the photos to result array
                data.photos.photo.forEach(function (image) {
                    results.images.push({
                        id: image.id,
                        url: image.url_s,
                        title: image.title === '' ? 'NO TITLE' : image.title
                    });
                });
                return results;
            
        } 
        //call this async function
        return request();
    };
})();

// fetch(flickrRequest)
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(function (data) {
//         let results = {
//             query: query,
//             images: []
//         };
//         data.photos.photo.forEach(function (image) {
//             results.images.push({
//                 id: image.id,
//                 url: image.url_s,
//                 title: image.title === '' ? 'NO TITLE' : image.title
//             });
//         })
//         return results;
//     })
//     .catch(function (e) {
//         return Error(e, 'There are no photos');
//     });