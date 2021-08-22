console.log(document.querySelector("input#orb-search-q"))     // поле search
a = $x('//*[@id="orb-search-q"]')            //search через XPath,обращаюсь через id,но пишут что лучше к конкретному классу или div

console.log(document.querySelector("li.orb-nav-reeldotcom").querySelector("a")) //ссылка на раздел reel

console.log(document.querySelector('[href="https://www.bbc.com/reel"]'))
a = $x('//*[@id="orb-nav-links"]/ul/li[4]/a')                                     //ссылка через XPath

console.log(document.querySelector("a.block-link__overlay-link"))     //первое изображение на главной странице
a = $x ('//*[@id="page"]/section[3]/div/ul/li[1]/div/a')                     // тоже изображение на главной странице через XPath

console.log(document.querySelector("li.media-list__item.media-list__item--2"))  //изображение 2 на главной странице
a = $x ('//*[@id="page"]/section[3]/div/ul/li[2]/div/a')                //  изображение 2 через XPath

console.log(document.querySelector('#orb-nav-links').querySelectorAll("li:nth-child(even)>a")) // четные разделы
                                                                     //как работает через XPath непонятно

console.log(document.querySelector("h2.module__title"))          //дата
a = $x ('//*[@id="page"]/section[2]/h2')                                 //дата XPath