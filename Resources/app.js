var IconicFont = require('/lib/IconicFont'),
	iconicFont = new IconicFont({
		font: '/lib/FontAwesome'
	});

// Font Awesome
var fontawesomeWindow = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: 'Font Awesome'
	}),
	fontawesomeTab = Ti.UI.createTab({
		title: 'Font Awesome',
		window: fontawesomeWindow
	}),
	fontawesomeScrollView = Ti.UI.createScrollView({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		layout: 'vertical'
	});
fontawesomeWindow.add(fontawesomeScrollView);

var iterator = 0,
	row;
for (var key in iconicFont.font.charcode) {
	if (iterator % 5 === 0) {
		if (row) {
			fontawesomeScrollView.add(row);
		}
		row = Ti.UI.createView({
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: Ti.UI.FILL,
			height: 64,
			layout: 'horizontal'
		});
	}

	row.add(Ti.UI.createLabel({
		width: '20%',
		height: 64,
		color: '#333',
		font: {
			fontSize: 48,
			fontFamily: iconicFont.fontfamily
		},
		text: iconicFont.icon(key),
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	}));

	iterator++;
}

// Glyphs
iconicFont.font = '/lib/Glyphs';

var glyphsWindow = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: 'Glyphs'
	}),
	glyphsTab = Ti.UI.createTab({
		title: 'Glyphs',
		window: glyphsWindow
	}),
	glyphsScrollView = Ti.UI.createScrollView({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		layout: 'vertical'
	});
glyphsWindow.add(glyphsScrollView);

iterator = 0;
row = null;
for (var key in iconicFont.font.charcode) {
	if (iterator % 5 === 0) {
		if (row) {
			glyphsScrollView.add(row);
		}
		row = Ti.UI.createView({
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: Ti.UI.FILL,
			height: 64,
			layout: 'horizontal'
		});
	}

	row.add(Ti.UI.createLabel({
		width: '20%',
		height: 64,
		color: '#333',
		font: {
			fontSize: 48,
			fontFamily: iconicFont.fontfamily
		},
		text: iconicFont.icon(key),
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	}));

	iterator++;
}

// Entypo
iconicFont.font = '/lib/Entypo';

var entypoWindow = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: 'Entypo'
	}),
	entypoTab = Ti.UI.createTab({
		title: 'Entypo',
		window: entypoWindow
	}),
	entypoScrollView = Ti.UI.createScrollView({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		layout: 'vertical'
	});
entypoWindow.add(entypoScrollView);

iterator = 0;
row = null;
for (var key in iconicFont.font.charcode) {
	if (iterator % 5 === 0) {
		if (row) {
			entypoScrollView.add(row);
		}
		row = Ti.UI.createView({
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: Ti.UI.FILL,
			height: 64,
			layout: 'horizontal'
		});
	}

	row.add(Ti.UI.createLabel({
		width: '20%',
		height: 64,
		color: '#333',
		font: {
			fontSize: 48,
			fontFamily: iconicFont.fontfamily
		},
		text: iconicFont.icon(key),
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	}));

	iterator++;
}

// Typicons
iconicFont.font = '/lib/Typicons';

var typiconsWindow = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: 'Typicons'
	}),
	typiconsTab = Ti.UI.createTab({
		title: 'Typicons',
		window: typiconsWindow
	}),
	typiconsScrollView = Ti.UI.createScrollView({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		layout: 'vertical'
	});
typiconsWindow.add(typiconsScrollView);

iterator = 0;
row = null;
for (var key in iconicFont.font.charcode) {
	if (iterator % 5 === 0) {
		if (row) {
			typiconsScrollView.add(row);
		}
		row = Ti.UI.createView({
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: Ti.UI.FILL,
			height: 64,
			layout: 'horizontal'
		});
	}

	row.add(Ti.UI.createLabel({
		width: '20%',
		height: 64,
		color: '#333',
		font: {
			fontSize: 48,
			fontFamily: iconicFont.fontfamily
		},
		text: iconicFont.icon(key),
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	}));

	iterator++;
}

// Ligature Symbols
iconicFont.font = '/lib/LigatureSymbols';

var ligaturesymbolsWindow = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: 'Ligature Symbols'
	}),
	ligaturesymbolsTab = Ti.UI.createTab({
		title: 'Ligature Symbols',
		window: ligaturesymbolsWindow
	}),
	ligaturesymbolsScrollView = Ti.UI.createScrollView({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		layout: 'vertical'
	});
ligaturesymbolsWindow.add(ligaturesymbolsScrollView);

iterator = 0;
row = null;
for (var key in iconicFont.font.charcode) {
	if (iterator % 5 === 0) {
		if (row) {
			ligaturesymbolsScrollView.add(row);
		}
		row = Ti.UI.createView({
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: Ti.UI.FILL,
			height: 64,
			layout: 'horizontal'
		});
	}

	row.add(Ti.UI.createLabel({
		width: '20%',
		height: 64,
		color: '#333',
		font: {
			fontSize: 48,
			fontFamily: iconicFont.fontfamily
		},
		text: iconicFont.icon(key),
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	}));

	iterator++;
}

var tabgroup = Ti.UI.createTabGroup({
	tabs: [ fontawesomeTab, glyphsTab, entypoTab, typiconsTab, ligaturesymbolsTab ]
});
tabgroup.open();