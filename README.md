# Gulp actions to prepare assets.

##Install guide

Presuming you have Node installed.

```
npm install
```

##Usage

Use this gulp tasks to optimize all your web assets.

`gulp icons` will run the svgo compression and remove the fill colors, so that icons can then be styled with css fill.

`gulp svgo` runs the svgo compression without removing fills.

`gulp tinypng` can be used to compress images jpg and png images.
In order to run tinypng you need to create a .tinypng-sigs file.

`gulp assets` runs both, svgo and tinypng.


The `default` task is `gulp icons`

The files need to be stored in the same folder of  `gulpfile.js` and will then be outputtet in the `out` folder 
