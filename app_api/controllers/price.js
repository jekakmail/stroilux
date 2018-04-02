var mongoose = require('mongoose');
var Price = mongoose.model('Price');

var sendJSONResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.priceReadOne = function (req, res) {
    if (req.params && req.params.priceid) {
        Price
            .findOne({_id: req.params.priceid},
                function (err, price) {
                    if (!price) {
                        sendJSONResponse(res, 404, {
                            "message": "Price not found"
                        });
                        return;
                    } else if (err) {
                        sendJSONResponse(res, 404, err);
                        return;
                    }

                    sendJSONResponse(res, 200, price);
                });
    } else {
        sendJSONResponse(res, 404, {
            "message": "No priceid in request"
        });
    }
}

module.exports.priceRead = function (req, res) {
    Price.find(function (err, blocks) {
        if (!blocks) {
            sendJSONResponse(res, 404, {
                "message": "Prices not found"
            });
            return;
        } else if (err) {
            sendJSONResponse(res, 404, err);
            return;
        } else {
            var results = [];
            blocks.forEach(function (doc) {
                results.push(doc);
            });
            sendJSONResponse(res, 200, results);
        }
    });
}
module.exports.priceCreate = function (req, res) {
    sendJSONResponse(res, 200, {"status": "success"});
}
module.exports.priceDelete = function (req, res) {

}
