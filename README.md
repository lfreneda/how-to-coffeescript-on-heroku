# how-to-coffeescript-on-heroku
Coffescript app template running on Heroku

## Publishing to Heroku

```javascript
npm install
heroku create # if new
git push heroku master
```

## Gotchas

- gulp <3 to "compile" your app into javascript ```target/```
- package.json ```postinstall``` / ```prestart``` hooks scripts 

```javascript
"scripts": {
  "start": "node ./target/app.js",
  "postinstall": "gulp", // 
  "prestart": "npm install"
},
```
- Procfile
```javascript
web: node target/app.js
```

![TA-DA](https://raw.githubusercontent.com/lfreneda/how-to-coffeescript-on-heroku/master/tada-will-smith-rage-face.png) ~~~ TA-DA! ~~~

