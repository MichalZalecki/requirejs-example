# RequireJS example

Example of my approach when it comes to RequireJS. It differs from [requirejs/example-multipage](https://github.com/requirejs/example-multipage). I use absolute paths to be able to load modules independently from current URL, but it will complicate working with [r.js](http://requirejs.org/docs/optimization.html), redefining path will be needed. Also a directories structure is slightly different. I'm loading controllers not as defined modules (they aren't portable anyway), but using `src[data-main]` so I'm omitting additional script tags after loading require.js.
