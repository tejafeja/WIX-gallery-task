(function () {

  var ImageFinder = window.CLASSES.ImageFinder = function () {};
  
/**
 * Search the images in static-images-db
  @param query -> a word added to search finder
 *  
 */ 
  ImageFinder.prototype.search = function (query) {
    let searchData = window.DATA.staticImagesDb;
    let results = {
      query: query,
      images: []
    };
    searchData.forEach(function (image) {
      if (image.title.indexOf(query) > -1) {
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