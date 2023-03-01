<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterUniqueByHash

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which returns unique values according to a hash function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-unique-by-hash
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var iterUniqueByHash = require( '@stdlib/iter-unique-by-hash' );
```

#### iterUniqueByHash( iterator, hashFcn\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which returns unique values according to a hash function.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function hashFcn( v ) {
    return v;
}

var src = array2iterator( [ 2, 1, 1, 2, 4, 3, 4, 3 ] );

var it = iterUniqueByHash( src, hashFcn );
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

A hash function is provided one argument:

-   **v**: the current iterated value

To set the execution context of the hash function, provide a `thisArg`.

<!-- eslint-disable object-curly-newline -->

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function hashFcn( v ) {
    this.count += 1;
    return JSON.stringify( v );
}

var values = [
    { 'v': 2 },
    { 'v': 1 },
    { 'v': 1 },
    { 'v': 2 },
    { 'v': 4 },
    { 'v': 3 },
    { 'v': 4 },
    { 'v': 3 }
];

var src = array2iterator( values );

var ctx = {
    'count': 0
};

var it = iterUniqueByHash( src, hashFcn, ctx );
// returns <Object>

var v = it.next().value;
// returns { 'v': 2 }

v = it.next().value;
// returns { 'v': 1 }

v = it.next().value;
// returns { 'v': 4 }

v = it.next().value;
// returns { 'v': 3 }

var bool = it.next().done;
// returns true

bool = ( ctx.count > 0 );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A returned [iterator][mdn-iterator-protocol] internally buffers unique hashes and, thus, has `O(N)` memory requirements.
-   An iterated value is considered "unique" if a hash function returns a unique hash value for that iterated value. Beware that this _may_ result in unexpected behavior. Namely, only the **first** iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-iter-discrete-uniform' );
var iterMap = require( '@stdlib/iter-map' );
var iterUniqueByHash = require( '@stdlib/iter-unique-by-hash' );

function mapFcn( v ) {
    return {
        'v': v
    };
}

function hashFcn( v ) {
    return JSON.stringify( v );
}

// Create a seeded iterator which can generate 1000 pseudorandom numbers:
var rand = discreteUniform( 1, 10, {
    'seed': 1234,
    'iter': 1000
});

// Create an iterator which maps each number to an object:
var miter = iterMap( rand, mapFcn );

// Create an iterator which returns unique (object) values:
var it = iterUniqueByHash( miter, hashFcn );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-unique`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>
-   <span class="package-name">[`@stdlib/iter-unique-by`][@stdlib/iter/unique-by]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values according to a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-unique-by-hash.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-unique-by-hash

[test-image]: https://github.com/stdlib-js/iter-unique-by-hash/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-unique-by-hash/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-unique-by-hash/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-unique-by-hash?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-unique-by-hash.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-unique-by-hash/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-unique-by-hash/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-unique-by-hash/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-unique-by-hash/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-unique-by-hash/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-unique-by-hash/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter-unique

[@stdlib/iter/unique-by]: https://github.com/stdlib-js/iter-unique-by

<!-- </related-links> -->

</section>

<!-- /.links -->
