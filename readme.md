# Redmine Enhancer for Chrome and Safari

Browser extension which modifies and enhances Redmine to make it more useful.

## Features

* Looks for signs of a page belonging to Redmine (a <meta> description of "Redmine")
* Cleans up the title, putting the ticket ID and name first
* Forces the quick search form to open in a new window/tab
* Creates a quickly selectable text box in place of the ticket title, including the issue number, preformatted for your commit messages

## Installation

This is not yet supplied in packaged form. To build an unpacked version, you'll need `make`.

* `make all` will package a version each for Chrome and Safari
* `make chrome` will just package for Chrome
* `make safari` will just package for Safari

Use each browser's developer tools to load the extension unpacked.

* In Chrome, open `Tools`->`Extensions`, tick `Developer Mode` and choose `Load unpacked extension...`
* In Safari, enable the developer tools, then open the Extension Builder, click the + in the bottom left and choose `Add Extension...`

There are plans to provide versions for Chrome and Safari pre-packaged and signed once the code is better.

## License

Redmine Enhancer is Copyright © 2013 Geoff Stokes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Redmine Logo is Copyright © 2009 Martin Herr and is licensed under the Creative Commons Attribution-Share Alike 2.5 Generic license. See http://creativecommons.org/licenses/by-sa/2.5/ for more details.
