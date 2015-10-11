# Country Flags

[FamFamFam](http://www.famfamfam.com/lab/icons/flags/) Country Flags Sprite with ISO 3166-1 [Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) and [Alpha 3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code standarts. 


## Installation

```
$ bower install country-flags --save
```

## Usage

```html
<link rel="stylesheet" href="/bower_components/country-flags/css/flags.css">
```

```html
<!-- Alpha 2 Code -->
<i class="flag ge"></i>
<!-- Alpha 3 Code -->
<i class="flag geo"></i>
<!-- Country Name -->
<i class="flag georgia"></i>
<!-- note: "ka" can be used as alternative only for georgian flag -->
<i class="flag ka"></i>
```

Flag sprites and list of countries can be found on [flag-sprites.com](https://www.flag-sprites.com/).

## SASS

This package has [SASS](http://sass-lang.com/) support (SCSS Syntax).

```
// override default options
$flags-selector: '.flag';
$flags-path: '../images/flags.png';

// import _flags.scss file
@import "/bower_components/country-flags/scss/flags";
```

## Development
```
$ sass --watch scss/_flags.scss:css/flags.css --style compressed --sourcemap=none
```


## Licence

[The MIT License (MIT)](https://opensource.org/licenses/MIT).