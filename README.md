# Шаблоны для лекций AHJ

Набор шаблонов для проведения лекций по AHJ

Содержание:
* [x] [Рабочее окружение](/workspace)
* [x] [DOM](/dom)
* [x] [Events](/events)
* [ ] [Testing](/testing)
* [ ] [Forms](/forms)
* [ ] [DnD](/dnd)
* [ ] [HTTP](/http)
* [ ] [Animations](/anim)
* [ ] [Geolocation, Notification, Media](/geo)
* [ ] [RxJS](/rxjs)
* [ ] [SSE, WS](/sse-ws)
* [ ] [Web Workers, Service Workers](/workers)

По всем вопросам обращайтесь к @coursar.

## Как использовать

1. Склонируйте репозиторий
1. Перейдите в каталог интересующей вас лекции
1. Запустите `npm install` для установки зависимостей
1. Запустите `npm start` для старта в режиме разработки
1. Запустите `npm build` для сборки
1. Запустите `npm test` для прогона тестов

*Важно*: в некоторых лекциях (HTTP, SSE + WS), предполагается наличие серверной части. Для таких лекций внутри каталога идёт деление на frontend/backend. Это значит, что `npm install/start` нужно делать и для frontend'а и для backend'а.
