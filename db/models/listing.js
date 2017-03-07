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
    return this.model('Listing').find({ _id: this._id }, cb);
};

listingSchema.methods.removeByListingId = function(cb) {
    console.log('Removing ' + this);
    return this.model('Listing').remove({ _id: this._id }, cb);
};

listingSchema.methods.createProperty = function(cb) {
    return this.model('Listing').create(this, cb);
};

listingSchema.methods.updateProperty = function(cb) {
    var query = {'_id': this._id};
    this.model('Listing').findOneAndUpdate(query, this, {upsert:true}, cb);
};

var listing = mongoose.model('Listing', listingSchema);

listing.findByListingId = function(id) {
    return listing.findOne({listingId : id});
}

mongoose.connect('mongodb://localhost/od-train-data');

module.exports = listing;
