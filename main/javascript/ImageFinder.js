(function () {

  /**
  * @constructor
  * @param {static} staticImgagesFinder
  * @param {flickr} flickrImagesFinder
  */
  var ImageFinder = window.CLASSES.ImageFinder = function (staticImgagesFinder, flickrImagesFinder) {
    this._staticImgagesFinder = staticImgagesFinder;
    this._flickrImagesFinder = flickrImagesFinder;
  };
  
/**
 * Search the images in static-images-db or Flickr server depending on module ID
  @param query -> a phrase added in a search imput field
  @param moduleId -> module ID for diferentiation from where images is fetched
 */ 
  ImageFinder.prototype.search = async function (query, moduleId) {
    if (moduleId === 'static') {
      return this._staticImgagesFinder.search(query);
    }
    if (moduleId === 'flickr') {
      return await this._flickrImagesFinder.search(query);
    }
    throw Error('Wrong module');
    
  };

})();