const manage = require('../manage');
const {ObjectID} = require('mongodb');
const expect = require('expect');

it('Should save a new listing', (done) => {
    var listingItem = {
        _id: new ObjectID(),
        listingId: '122333',
        url: 'www.rrr.comcc',
        description: 'Great house'
    };
    manage.saveListing(listingItem)
        .then(function() {
            manage.removeListing('122333', (data) => {
                console.log(data);
            }).then(function() {
                done();
            });
        });
});

it('Should retrieve a listing', (done) => {
    var listingItem = {
        _id: new ObjectID(),
        listingId: '51273',
        url: 'www.rrr.comcc',
        description: 'Great house'
    };

    manage.saveListing(listingItem);
    manage.getListing('51273', (data) => {
        expect(data[0].listingId).toBe('51273');
        manage.removeListing('51273', (data) => {
            console.log(data);
        }).then(function() {
            done();
        });
    });

});



