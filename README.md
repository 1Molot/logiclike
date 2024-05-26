Приложение logiclike (тестовое задание) - это веб-приложение на React, который отображает боковую панель со списком фильтров и областью контента, показывающей карточки курсов. Компонент получает данные о курсах с помощью API-запроса и позволяет фильтровать курсы по тегам.

Для установки и запуска приложения logiclike локально, вам потребуется выполнить следующие шаги:

1.Склонируйте репозиторий с помощью команды: git clone https://github.com/1Molot/logiclike.git

2.Перейдите в директорию проекта: cd logiclike

3.Установите зависимости с помощью команды: yarn add

4.Запустите сервер разработки с помощью команды: yarn start

5.Откройте браузер и перейдите по адресу http://localhost:3000, чтобы просмотреть приложение.

Использование

Компонент получает данные о курсах с помощью API-запроса к адресу https://logiclike.com/docs/courses.json. Он отображает боковую панель со списком фильтров и областью контента, на которой отображаются карточки курсов. Каждая карточка курса содержит название курса, изображение и стилизуется в соответствии с заданным цветом фона.

Компонент позволяет фильтровать курсы, выбирая тег из выпадающего списка. При выборе тега будут отображены только курсы, относящиеся к этому тегу. Если не выбран ни один тег (по умолчанию), будут показаны все курсы.

Структура данных

Тип Course представляет структуру каждого объекта курса, полученного из API. Он имеет следующие свойства:

name (string): Название курса.
id (string): Уникальный идентификатор курса.
image (string): URL изображения курса.
bgColor (string): Цвет фона карточки курса.
tags (string[]): Массив тегов, связанных с курсом.

Приложение logiclike разработано с использованием следующих технологий:

React: JavaScript-библиотека для создания пользовательских интерфейсов. TypeScript: Типизированный надмножество JavaScript, которое обеспечивает статическую типизацию. SCSS: это расширение языка CSS, которое предоставляет дополнительные функции и возможности для оформления веб-приложений. Каскадные таблицы стилей (CSS) используются в приложении для определения внешнего вида и визуального оформления различных элементов интерфейса. API: В данном приложении используется Axios для получения данных из API, представляющих список курсов. Он обеспечивает удобный интерфейс для отправки запросов и обработки ответов. При получении ответа, приложение обрабатывает данные и отображает список курсов. Axios упрощает выполнение запросов и обработку данных из API в приложении. Автором приложения logiclike является 1Molot. Это тестовое задание, разработанный им.

Приложение logiclike распространяется под лицензией MIT, что означает, что вы можете свободно использовать, изменять и распространять его код в соответствии с условиями лицензии.