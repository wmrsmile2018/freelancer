# navigation - метод, который отвечает за навигацию между страницами

# dispatch - метод, через которого можно вызвать изменение в store

# useSelector - метод (хук - hook), который в качестве входного параметра принимает callBack. В callBack описывается, какое поле нам необходимо получить из store

# useEffect - метод (хук - hook), который позволяет отслеживать изменения переменных, что указаны в массиве (2й параметр). 1й параметр - callBack, который срабатывает каждый раз, если значения поменялись

# useLayoutEffect - метод (хук - hook), который позволяет отслеживать изменения переменных, что указаны в массиве (2й параметр). 1й параметр - callBack, который срабатывает каждый раз, если значения поменялись. Отличие от useEffect в том, что данный метод работает синхронно.

# getStorage - кастомный метод, который позволяет доставать данные из локального хралища

# функциональный компонент - метод, который называется с заглавной буквы, чаще всего название метода совпадает с названием самого файла, в котором он определен. Отличие функционального компонента от обычной функции в том, что он вовзращает Jsx.

# Чтобы вызвать функциональный компонент, мы пишем конструкцию <App/> либо <App> </App>. Все как в HTML разметке.

# JSX - расширение языка JavaScript, благодаря ему мы можем использовать объясгить React, как должен выглядеть UI

# Магазин для Лели

## Структура папок

### `assets`

там хранятся картинки, шрифты и т д

### `components`

там хранятся базовые компоненты, который могут быть переиспользованы во многих места

### `layouts`

там хранятся полноценные экраны или часть экранов
3.1 - список экранов либо составляющее экрана
3.2 - components - список компонентов, который могут быть переиспользованы в рамках данного экрана. Используется для того, чтобы вынести общую логику наружу и сделать родительский компонент более читабельным и простым
3.3 - view - компонент, который отвечает только за отображение различных элементов в зависимости от входного параметра, также называемый пропсами от слова Props
3.4 - index - используется только для экспорта компонента наружу, чтобы при импорте не дублировать в пути название (/layouts/movie/movie)
3.5 - файлы, который называется в точности, как название самой папки - компонент, который отвечает за бизнес логику и передает в компонент View входные параметры для отображения

### `store`

глобальное хранилище нашего сайта, чаще всего используется, чтобы хранить данные, которые приходят с BackEnd

### `4.1 - saga`

централизованное место, где происходит вызов Api, обработка ошибок при надобности и т д

### `4.2 - reducers`

тут происходит подключение наших сущностей к нашему глобальному хранилищу

### `4.3 - store`

магия вне Хогвартса, вряд ли вам понадобится сюда заходить, но тут настраивается наше глобальное хранилище, чтобы потом подключить к нашему сайту

### `4.4 оставшиеся папки:`

#### `4.4.1 - папка API`

описываются методы, при вызове которые обращаются к backEnd за данными, в файле index исопльзуется Singleton паттерн, чтобы предварительно их настроить и экспортировать для простой работы с ними

#### `4.4.2 - reducer`

описание наших сущностей и в каком виде хранить ответ, полученный от запроса на BackEnd

### `utils`

набор методов или хуков, которые могут быть переиспользованы во многих местах и не привязаны конкректно к одному экрану.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
