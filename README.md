# Country Flags

[FamFamFam](http://www.famfamfam.com/lab/icons/flags/) Country Flags Sprite with ISO 3166-1 [Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), [Alpha 3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) and [numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) code standarts. 


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
<!-- Numeric Code -->
<i class="flag n-268"></i>
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
$flags-numeric-code-prefix: '.n-';
$flags-path: '../images/flags.png';

// import _flags.scss file
@import "/bower_components/country-flags/scss/flags";
```

## Unofficial Country Codes

Some countries does not have an official Alpha 2, Alpha 3 or Numeric codes.

Below is the table of those countries and their unofficial ISO codes, which is used in this CSS.

Country Name | Alpha 2 | Alpha 3 | Numeric
------------ | ------------- | ------------ | ------------
[Catalonia](https://en.wikipedia.org/wiki/Catalonia) | `ct` | `ctl` | `---`
[Canary Islands](https://en.wikipedia.org/wiki/Canary_Islands) | `ci` | `cic` | `---`
[England](https://en.wikipedia.org/wiki/England) | `en` | `eng` | `---`
[Kurdistan](https://en.wikipedia.org/wiki/Kurdistan) | `kd` | `krd` | `---`
[Scotland](https://en.wikipedia.org/wiki/Scotland) |  `sq`  | `sco` | `---`
[Somaliland](https://en.wikipedia.org/wiki/Somaliland) | `sw` | `sml` | `---`
[Tibet](https://en.wikipedia.org/wiki/Tibet) | `tb` | `tbt` | `---`
[Wales](https://en.wikipedia.org/wiki/Wales) | `wa` | `wls` | `---`
[Zanzibar](https://en.wikipedia.org/wiki/Zanzibar) | `zn` | `znz` | `---`

## Development
```
$ sass --watch scss/_flags.scss:css/flags.css --style compressed --sourcemap=none
```


## Licence

[The MIT License (MIT)](https://opensource.org/licenses/MIT).