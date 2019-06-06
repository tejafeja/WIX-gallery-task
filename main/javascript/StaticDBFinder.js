(function () {

    var static = window.MODULES.static = function () { };

    /**
     * Search the images in static-images-db
      @param query -> a phrase added in a search imput field
     *  
     */
    static.prototype.search = function (query) {
        let searchData = window.DATA.staticImagesDb;
        let results = {
            query: query,
            images: []
        };
        searchData.forEach(function (image) {
            if (image.title.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                results.images.push({
                    id: image.id,
                    url: image.url,
                    title: image.title
                }
                );
            }
        });
        return results;
    }

})();