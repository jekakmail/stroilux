var renderPricepage = function (req, res) {
    res.render('price', {
        title: 'Отделочные работы в Минске',
        siteName: 'StroiLux.by',
        header: 'Цены',
        landHeader: 'Расценки на отделочные работы 2017 год',
        taxInfo: {
            name: 'Климович Р.А.',
            state: 'ИП',
            uniqueTaxNumber: '192986798',
            scanDocument: '/images/img1.jpg',
            linkToProfile: 'https://s.onliner.by/profiles/39974'
        },
        about: {
            header: 'О нас',
            body: 'Большой опыт. Договор. Гарантия. Выезд мастера на обмер и составление сметы бесплатно. Все пыльные работы выполняются только с промышленным пылесосом, что гарантирует чистоту в помещении. Использование профессионального инструмента. Помощь в выборе материалов, консультация.'
        }
    })
}

module.exports.index = function (req, res) {
    renderPricepage(req, res);
};