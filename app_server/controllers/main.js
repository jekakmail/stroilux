var renderHomepage = function (req, res) {
    res.render('index', {
        title: 'Отделочные работы в Минске',
        siteName: 'StroiLux.by',
        landHeader: 'Все виды отделочных работ в Минске',
        taxInfo:{
            name: 'Климович Р.А.',
            state: 'ИП',
            uniqueTaxNumber: '192986798'
        },
        contacts: [{
            name: 'Александр',
            phones: [{
                phone: '+375 29 6362733',
                op: 'Velcom'
            }, {
                phone: '+375 25 7857327',
                op: 'Life:)'
            }]
        }, {
            name: 'Роман',
            phones: [{
                phone: '+375 25 5114505',
                op: 'Life:)'
            }, {
                phone: '+31 64 7658746',
                op: 'Viber'
            }]
        }],
        advantagesBlock: [{
            title: 'Официальный договор, гарантия',
            body: 'Мы работаем только официально и заключаем договор. Даем гарантию на все выполненные нами работы до одного года.'
        }, {
            title: 'Имеем большой опыт',
            body: 'Наши сотрудники профессионалы своего дела и имеют большой опыт работ.'
        }, {
            title: 'Беспыльные работы',
            body: 'Наши инструменты и оборудование позволяют проводить все работы без пыли, что сохранит все в чистоте.'
        }, {
            title: 'Конкурентные цены',
            body: 'Наши цены ниже-среднего по рынку, а качество на высоте. Не верите? Проверьте сами!'
        }],
        toolsBlock: {
            header: 'Мы используем только профессиональное оборудование и инструменты'
            //TODO links to images
        },
        worksBlock: {
            worksHeader: 'Наши работы'
            //TODO links to images
        },
        descriptionBlock: {
            header: 'Работаем только официально',
            description: 'Наша команда имеет большой опыт работ на рынке строительных услуг. За время становления мы сумели мобилизовать необходимые ресурсы для выполнения строительно-монтажных работ, а также смогла завоевать доверие Заказчиков. Многолетний опыт работы позволяет нам на высоком уровне выполнять весь спектр услуг. Постоянное изучение динамики рынка, а также, пожеланий Заказчиков позволяет нам гарантировать высокое качество строительно-монтажных работ.'
        },
        reviewsBlock: {
            header: 'Отзывы наших клиентов',
            reviews: [{
                name: 'Евгений',
                work: 'комплексная отделка комнаты',
                body: 'Отличные мастера. Работают быстро, качественно и ответственно. Очень радует беспыльные работы, также каждый день за собой убирают. Грязи после работ не было вообще! Приятно было общаться и работать. Спасибо!'
            }, {
                name: 'Татьяна',
                work: 'укладка плитки',
                body: 'Хочу выразить свою благодарность Роману и Александру за проделанную работу. Помог определится с раскладкой плитки и выбором материалов. Чистота и порядок в конце работы приятно удивила.'
            }, {
                name: 'Светлана',
                work: 'фигурный потолок с гипсокартона и поклейка обоев',
                body: 'Спасибо большое за проделанную работу! Все очень понравилось. Профессионалы своего дела! Сверлили и шлифовали без пыли.'
            }]
        },
        aboutBlock: {
            header: 'О нас',
            body: 'Большой опыт. Договор. Гарантия. Выезд мастера на обмер и составление сметы бесплатно. Все пыльные работы выполняются только с промышленным пылесосом, что гарантирует чистоту в помещении. Использование профессионального инструмента. Помощь в выборе материалов, консультация.'
        }
    })
}

module.exports.index = function (req, res) {
    renderHomepage(req, res);
};