var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listingSchema = new Schema ({
    listingId:  String,
    url: String,
    description: String,
    publishedDate: Date,
    floors: Number,
    bedrooms: Number,
    bathroooms: Number,
    listingType: String,
    stats: String,
    propertyType: String,
    price: String,
    location: {
        latitude: Number,
        longitude: Number,
        address: String,
        postcode: String,
        country: String
    },
    image: String,
    thumbnail: String

});

listingSchema.methods.findAll = function(cb) {
    return this.model('Listing').find({}, cb);
};

listingSchema.methods.findByListingId = function(cb) {
    return this.model('Listing').find({ listingId: this.listingId }, cb);
};

listingSchema.methods.removeByListingId = function(cb) {
    return this.model('Listing').remove({ listingId: this.listingId }, cb);
};

listingSchema.methods.createProperty = function(cb) {
    return this.model('Listing').save(this, cb);
};

var listing = mongoose.model('Listing', listingSchema);
module.exports = listing;
