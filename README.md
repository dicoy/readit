# Readit
## Simple reddit web client.

See app running [here](https://master.d10ki335cfs76s.amplifyapp.com/)

## Instalation
This app was created using create-react-app, so just run:
```bash
npm i && npm start
```
Only 1 libreary was added, for a global store hook, written in about 25kb (vs the 271kb for redux)

Pushing changes to the master branch will automatically deploy the app to the AWS static page referenced above.

## Design Choices
I've avoided using a full blown react-redux implementation to keep code simple and efficient. I did however implement the design pattern, using a centralized store and actions, with the difference of having reducers/selectors declared in each component. So for instance, the article list has:
```javascript
const [articles, [markAsRead, viewArticle, dismissArticle]] = useGlobal(
    state => state.articles,
    actions => [actions.markAsRead, actions.viewArticle, actions.dismissArticle]
  );
```

This exposes the necesary parts of the state as well as the required actions.


Styling has been done using Tachyons CSS. It's just a collection of functional classes (that's 1 specific css effect per class) so you can see the full effect of styling in the component without having to dig through stylesheets to figure out what's causing the issue.


```html
<div className="flex-column items-start list overflow-y-hidden h-100">
	<h4 className={'pt4 pb3 self-center'}>{title}</h4>
	<ArticleList />
</div>
```

here you have a div withe flexbox colum, aligned items to the start, height %100 and hidden overflow in Y. Inside you have an <h4> tag with some padding-top, a little less padding bottom and align-self: center.

For the challenge I just used the default pallet and spacing. In a real proyect however, one would set up these clases beforehand to match design specifications and only keep classes you use. Still it's a pretty small library when compared to other css frameworks.

## Next steps

Here are some items were left out due to time constraints, and some other "nice to have"s

Styling could use some more attention
App is usable from a mobile browser screen, but responsivness is not 100% (Sidebar should expand fullscreen.
General tidying up (css is implemented directly using the style={} parameter)
Image Gallery
Error handling
Testing
"Dismiss" buttons are not working
Localstorage backup for state preservation
mock service to be able to work offline

