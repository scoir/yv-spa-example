## how-to

This project can be run via the following steps:

```sh
# install all dependencies
npm install

# start the application for local development
npm start
```

The application will be accessible via http://localhost:3000

## issues

### 1. can not load the initial embed script when we would like to

We would like to have full control over when this script is placed onto the page.  Currently, if there is no link when the `js2.js` script is executed, the tours will not bootstrap, the `embed.min.js` file will not be loaded and no tours will be displayed.

Furthermore, there is no mechanism for us to force a re-evaluation of the links, so the `YVScript` object will continue to be inaccessible

#### workaround

For the time being, we are using `scriptjs` to get around this by including the `js2.js` only when we know a tour may be viewable.  While this seems to work in practice, there is a possibility of a race condition between React rendering and `YVScript` definition on `window`.

On initial render of the page containing the tour, we are reliant on the `embed.min.js` script bootstrapping all links for us, since we do not have a callback for when `YVScript` is available on `window`.

**example:** This can be seen by the console log in `YouVisitTour.jsx` after directly accessing http://localhost:3000/college/214041

### 2. tour modifies the controlled DOM

React is managing our DOM and determining when to add/remove/change DOM nodes.  Because the tour removes our anchor tag during bootstrap of the immersive initialization, React encounters issues when we eventually navigate away from the "page" where the tour is displayed.

**example:** Change `showMeIssue2` to `true` in `YouVisitTour.jsx`

#### workaround

We are able to get around this issue by taking the anchor out of React's knowledge and into string based mark-up.  This is a bad practice on our part that we try to avoid at all costs.  We would prefer that the link be simply hidden via css if possible.

### 3. tour is not force closable

If a tour is launched into full screen view, the user is still able to navigate via the browser back/forward controls.  In doing so, the page behind the tour is altered, but nothing seems to have changed for the user.

**example:**
1. open https://localhost:3000
1. select "Colleges"
1. select a college
1. play/expand the tour
1. click the browser back button

The tour is still playing, but the user has left the source page of the tour

### 4. secondary tour does not launch

While we can create the immersive image on a secondary "page", clicking the image will not launch the tour

**example:**
1. open https://localhost:3000
1. select "Colleges"
1. select a college
1. launch the tour
1. close the tour
1. navigate back to "Colleges"
1. select a college (a new one or previous one)
1. attempt to launch the tour
