---

layout: presentation
title: "Javascript: HTTP Cookies"

---

# [X](/)
# Javascript: HTTP Cookies

## Table of Contents
- [HTTP Cookies](#http-cookies)
- [Javascript Cookie Library](#javascript-cookie)
- [Boiler Plate File](/assets/files/cookie.zip)

## HTTP Cookies
HTTP [Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) allow us to store data in the client’s browser via text files. This is often used to catalogue user&rsquo;s information and activitiy for subsequent visits (mouse or link behaviour, passwords, fields, etc.).

HTTP Cookies are [native](https://www.w3schools.com/js/js_cookies.asp) to the Javascript programming language. 
We’re going to use the [JS Cookie library&#42;](https://github.com/js-cookie/js-cookie) which gives us an API that works across all browsers and uses slightly more legible formatting.

&#42;A Javascript Library is a collection of code that is built on top of the default Javascript language. Often, libraries offer syntactic shortcuts around a certain area of focus (ex: jQuery is a Javascript Library). 


## Javascript Cookie

Loading the Javascript Cookie library: 

```html 

	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>

```

### Setting a Cookie

```javascript
Cookies.set('name', 'value');
```

Creates a cookie, valid across the entire site.


### Expiration Date

```javascript
Cookies.set('name', 'value', { expires: 7 }); 
```

Creates a cookie that expires 7 days from now. (By default, the cookie is deleted when the browser is closed).



### Reading a Cookie

```javascript  

  Cookies.get('name'); // => 'value' `

  Cookies.get('nothing'); // => undefined

```

Gets the value of a specific cookie. By default, `.get('name')` returns a string.


### Reading All Cookies

```javascript
	Cookies.get(); // => { name: 'value' }
```
Gets the value of all cookies from this site.



### Cookies, Arrays, and Objects

```javascript

  Cookie.set('anArray', ["this", "is", "an", "array"])

  Cookie.set('anObject', { 'foo': 'bar' }) // an object

```
Giving a cookie an array or an object is much like giving it a string.

```javascript

	Cookies.getJSON('anObject'); // returns {foo: 'bar'}

  var theCookieObject = Cookies.getJSON('anObject');

  theCookieObject.foo; //would return 'bar'

```

The object or array is saved in a JSON format (JSON is a text format that is often used to store content). To read a JSON file with javascript, one usually has to run `JSON.parse()` after retrieving the file. Our Cookie.js library takes care of this step.


### Delete a Cookie
```javascript
Cookies.remove('name');
```


## In-Class Demo

### Install Options

In order to get your cookies to work locally, you will need to run a simple server.

To do this, you can either run the class example from your cloud9 account, use Mamp, or navigate to your directory via the terminal and run this simple python script `python -m SimpleHTTPServer 8000` (and view your site at http://localhost:8000/).

For our in-class example we will create a cookie that, upon each visit, appends a new circle to our DOM.

[Boilerplate Files](/assets/files/cookie.zip)

