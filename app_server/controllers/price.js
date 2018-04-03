var request = require('request');
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