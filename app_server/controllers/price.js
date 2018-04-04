var request = require('request');
var xlsxtojson = require('xlsx-to-json-lc');
var apiOptions = {
    server: "http://localhost:3000"
}

var renderPricepage = function (req, res, responseBody) {
    res.render('price', {
        title: 'Отделочные работы в Минске',
        siteName: 'StroiLux.by',
        header: 'Цены',
        landHeader: 'Расценки на отделочные работы 2018 год',
        taxInfo: {
            name: 'Климович Р.А.',
            state: 'ИП',
            uniqueTaxNumber: '192986798',
            scanDocument: '/images/img1.jpg',
            linkToProfile: 'https://s.onliner.by/profiles/39974'
        },
        priceData: responseBody,
        priceLink: '/resources/PriceOfWork.xlsx',
        about: {
            header: 'О нас',
            body: 'Большой опыт. Договор. Гарантия. Выезд мастера на обмер и составление сметы бесплатно. Все пыльные работы выполняются только с промышленным пылесосом, что гарантирует чистоту в помещении. Использование профессионального инструмента. Помощь в выборе материалов, консультация.'
        }
    })
}

module.exports.index = function (req, res) {
    var requestOptions, path;
    path = '/api/price';
    requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    }
    request(requestOptions, function (err, response, body) {
        renderPricepage(req, res, body);
    })
};

var sendJSONResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.upload = function (req, res) {
    if (!req.files) {
        sendJSONResponse(res, 404, {
            "message": "No files were uploaded"
        });
        return;
    }
    var sampleFile;
    sampleFile = req.files.file;
    sampleFile.mv('./uploads/' + sampleFile.name, function (err) {
        if (err) {
            sendJSONResponse(res,500,err);
            return;
        } else {
            sendJSONResponse(res,200);
        }
        try {
            xlsxtojson({
                input: './uploads/' + sampleFile.name,
                output: null, //since we don’t need output.json
                lowerCaseHeaders: true
            }, function (err, result) {
                if (err) {
                    return res.json({error_code: 1, err_desc: err, data: null});
                }
                res.json({error_code: 0, err_desc: null, data: result});
                var fs = require('fs');
                try {
                    fs.unlinkSync('./uploads/' + sampleFile.name);
                } catch (e) {
                    //error deleting the file
                }

            });
        } catch (e) {
            console.log('error');
            res.json({error_code: 1, err_desc: 'Corrupted excel file'});
        }
    });
}