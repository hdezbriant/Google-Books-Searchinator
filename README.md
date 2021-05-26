# Google Books Searchinator

This app provides a simple ui with which you may searh the Google Books API and see information of the books that were searched for.
The results will provide lots of useful information, such as the Author, a short description of the book, and a link to view more detailed information
by clicking the "view" button.

Simply type in the book you want to search for in the search field, and hit Submit! Easy.

![Searchinator](googlebookssample.png)

## Future Development

This app is still in early development, and in the future will allow users to save a personal "reading list" of books that were searched for.
This feature has not yet been implemented, but soon™!

## About This Boilerplate
(This App was created using a boilerplate provided by [a powerful wizard](github.com/median-man) Thank you so much for your help!)

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
