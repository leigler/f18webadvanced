---

layout: presentation
title: Javascript Libraries

---

# [X](/)
# Javascript Libraries

## Table of Contents
- [Libraries](#libraries)
- [Paper.js](#paperjs)
- [Boilerplate for Paper.js](#boilerplate-files)

## Libraries

Javascript libraries are collections of code that have been developed for re-use (jQuery, for example, is a javascript library). For most libraries, simply link the code file (through a cdn, or locally) in your html document prior to your site’s js. For libraries that are built off of jQuery (they usually say so in their documentation), make sure to link your jQuery file before listing your additional library.

Below is a brief list of js libraries to get you started. Many js libraries are built to aid with layout and functionality, others are built to help animate, provide certain visual styles, or render more advanced graphics.

- [Greensock animation library](https://greensock.com/)
- [Paper js— the vector library of the web](http://paperjs.org/)
- [Fabric JS, html5 canvas library](http://fabricjs.com/)
- [Easel js for html5 canvas](http://www.createjs.com/easeljs)
- [SVG Drawing Animations](https://tympanus.net/codrops/2013/12/30/svg-drawing-animation/)
- [D3, data driven document manipulation](https://d3js.org/)
- [Bootstrap JS aids](https://getbootstrap.com/docs/3.3/javascript/)
- [P5.js](https://p5js.org/)
- [Three.js— a rendering library built off of webgl](https://threejs.org/)
- [Sticky-kit scrolling aid](http://leafo.net/sticky-kit/)
- [Scrollmagic animations](http://scrollmagic.io/)
- [AOS scroll animation library](https://michalsnik.github.io/aos/)
- [Flickity slideshow](https://flickity.metafizzy.co/)
- [Masonry responsive grid](https://masonry.desandro.com/)
- [Showdown, a JS markdown parser](https://github.com/showdownjs/showdown)
- [Voca JS string manipulation](https://vocajs.com/)
- [Two.js— a js driven drawing library](https://two.js.org/)
- [Vivus.js an svg drawing library](https://maxwellito.github.io/vivus/)
- [Parallax.js a simple parallax library](http://matthew.wagerfield.com/parallax/)
- [Parallax.js another simple parallax library](http://pixelcog.github.io/parallax.js/)


## Paper.js

Let&rsquo;s take a brief look at Paper.js — a vector-based library that uses an HTML canvas element and allows you to steer away from traditional html elements. A [boiler-plate](assets/files/paper-js.zip) template is available [here](assets/files/paper-js.zip).

- We can visit [Paper.js](http://paperjs.org/) here.
- Navigate to `/download`, and download the most recent files.
- Open the `.zip`, navigate to the dist folder, and copy the `paper-full.min.js` into your working directory.
- Following the "script configuration" Create a canvas, and a script tag specifying the script as `text/paperscript`.


### Paths
Multi-point Lines can be made with the Path item.

```javascript

var newLine = new Path();

newLine.strokeColor = 'black';
newLine.add(new Point(30, 30));
newLine.add(new Point(100, 100));
newLine.add(new Point(120, 200));

```

these can be accessed and revised through `newLine`&rsquo;s object. 

```javascript

newLine.segments[0].point.y
newLine.segments[0].point.x

```

Alternatively, one can access all of your canvas&rsquo;s objects through the `project.activeLayer.children` and cycle through each element with a for loop!

```javascript

var allLines = project.activeLayer.children;
for (var i = 0; i < allLines.length; i++) {			

	allLines[i].segments[1].point.y = 10;
	allLines[i].segments[1].point.x = 10;
	
}

```

### Shapes

Paper.js has lots of [shapes](http://paperjs.org/reference/path/).

Circle
```javascript

var shape = new Path.Circle(new Point(80, 50), 30); //center point, radius
shape.strokeColor = 'red';

```

Rectangle
```javascript

var rectangle = new Rectangle(new Point(20, 20), new Size(60, 60)); 
var shape = new Path.Rectangle(rectangle);
shape.strokeColor = 'red';

```

Ellipse
```javascript

var rectangle = new Rectangle(new Point(20, 20), new Size(180, 60));
var shape = new Path.Ellipse(rectangle);
shape.fillColor = 'red';

```


### Custom Shapes

You can make custom shapes with the Path item, defining each point (programmatically or specifically). to define the 

```javascript

var myPath = new Path();
myPath.strokeColor = 'red';
myPath.add(new Point(100, 75));
myPath.add(new Point(200, 25));
myPath.add(new Point(150, 75));

// Close the path:
myPath.closed = true;
myPath.fillColor = 'blue';


```


### Mouse Interactions

A full list of mouse interactions can be found [here](http://paperjs.org/reference/mouseevent/).

onMouseMove:

```javascript
	
	function onMouseMove(event){

		var mousePosition = event.point.clone();

		var y = mousePosition.y;
		var x = mousePosition.x;

		//update a line's existing points: 
		newLine.segments[0].point.y = y;
		newLine.segments[0].point.x = x;

	}

```

onMouseDown:

```javascript
	
	function onMouseDown(event) {

		var mousePosition = event.point.clone();
		var y = mousePosition.y;
		var x = mousePosition.x;

		//update a line by adding a point: 
		newLine.add(new Point(x, y));
	}

```

delta (difference between current and last event fired).

```javascript

	function onMouseMove(event){
		console.log(event.delta)
	}


```


### Dynamic sizing

So far we have only looked at static positions, but you have access to ratio-based coordinates as well through the `view` object: 

```javascript

console.log(view);

var height = view.size.height;
var width = view.size.width;

```


### On Resize
Since we don&rsquo;t have css units like `%` or `vw, vh`, we need to update our Canvas through javascript.

```javascript

function onResize(event) {
	// Whenever the window is resized, update the paths:
	newLine.position = view.center;
}

```

### Documentation

Documentation for elements is listed in the menu under Reference. Here you can explore how to make basic shapes, how paper items are stored, how to style color and typography, and what kind of interactions you can use to manipulate your canvas.


## Boilerplate Files

A boilerplate to follow along with can be found [here](assets/files/paper-js.zip).


