# TiIconicFont

Iconic font charcode wrapping library for Titanium.

## Install
1. Put the IconicFont.js and icon font JavaScript file on your project
2. Download and put .ttf file on Resources/fonts folder

## Usage

You can see example at [blob/master/Resources/app.js](blob/master/Resources/app.js).
If you want to use in Alloy [Ti.UX.Templates](https://github.com/jaraen/Ti.UX.Templates). This project is very usefull.

```javascript
var IconicFont = require('/lib/IconicFont'),
	iconicFont = new IconicFont({
		font: '/lib/FontAwesome'
	});
var label = Ti.UI.createLabel({
	font: {
		fontFamily: iconicFont.fontfamily
	},
	text: iconicFont.icon('icon name here')
});
```

### Font Awesome

![fontawesome.png](screenshot/fontawesome.png)

### Glyphs

![glyphs.png](screenshot/glyphs.png)

### Entypo

![entypo.png](screenshot/entypo.png)

### Typicons

![typicons.png](screenshot/typicons.png)

### Ligature Symbols

![ligaturesymbols.png](screenshot/ligaturesymbols.png)

## Credits

### Font Awesome

[Font Awesome 4.1.0 Created by Dave Gandy](http://fontawesome.io/), [SIL Open Font Licence](http://scripts.sil.org/OFL)

### Glyphs

[WebHostingHub Glyphs Created by WebHostingHub](http://www.webhostinghub.com/glyphs/), [SIL Open Font Licence](http://scripts.sil.org/OFL)

### Entypo

[Entypo pictograms 2.0 by Daniel Bruce](www.entypo.com), [SIL Open Font Licence](http://scripts.sil.org/OFL)

### Typicons

[Typicons 2.0.3 Created by Stephen Hutchings](http://typicons.com/), [SIL Open Font Licence](http://scripts.sil.org/OFL)

### Ligature Symbols

[Ligature Symbols 2.11 Created by Kazuyuki Motoyama](http://kudakurage.com/ligature_symbols/), [SIL Open Font Licence](http://scripts.sil.org/OFL)

## License

The MIT License (MIT) Copyright (c) 2014 Kosuke Isobe