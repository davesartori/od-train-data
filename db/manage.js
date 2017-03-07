const Schema = require('./models/listing');
var mongoose = require('mongoose');


var saveListing = (item) => {
    var item = new Schema(item);
    var save = item.save();
    return save;
};

var getListing = (listingId, callback) => {
    var listingFilter = new Schema({listingId: `${listingId}`});
    var listing = listingFilter.findByListingId(function(err, listingResult) {
        callback(listingResult);
    });

    return listing;

};

var removeListing = (listingId) => {
    var listingFilter = new Schema({listingId: `${listingId}`});
    var listing = listingFilter.removeByListingId(function(err, cb) {

    });
    return listing;
};

module.exports = {
    saveListing,
    getListing,
    removeListing
};

