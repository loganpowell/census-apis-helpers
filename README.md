# Census APIs Helpers Library

## Helpers

1) Functions for navigating the [Census Data "Discovery" API](https://api.census.gov/data.html)
2) Conveniences for getting data via the Census Data API ([Examples from 2016 American Community Survey - ACS 5yr](https://api.census.gov/data/2016/acs/acs5/examples.html))
3) Functions to get a FIPS code by `[lng, lat]` from the [Tigerweb REST API](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_wms.html)
4) Helpers for creating maps using the [Census Cartography Files](https://www.census.gov/geo/maps-data/data/cbf/cbf_description.html)

## Notes

### Libraries Used (Dependencies)

#### JavaScript (in `package.json`)

#### ClojureScript (in `shadow-cljs.edn` {`:dependencies`})

- [cljs-ajax](https://github.com/JulianBirch/cljs-ajax): Simple Ajax client for Clojure(script)
- [org.clojure/core.async](https://github.com/clojure/core.async): A Clojure(script) library providing facilities for async programming and communication.

### Cartography Files

These are not the highest precision boundary files the Census has to offer. Instead they are geared towards helping users/developers create maps for visualizing statistics and are detailed enough to serve related purposes.

These files allow the developer to display Census boundaries in an online/web context and - thus - are necessarily of lower precision than [Census Detailed Geography files](https://www.census.gov/geo/maps-data/data/tiger.html), which can be 10x larger (and 10x slower to load). This is a compromise that is intended to help developers create products without the need for sophisticated/expensive GIS software. I.e., the intended audience for Cartography files are for visualization purposes and should not be used for mission-critical (e.g., governmental administration) decision making. For such critical applications, it would be preferred to use something like [QGis](https://qgis.org/en/site/) or a proprietary GIS product.

For more information as to which Tiger product may best suit your purpose, please see [this brochure](https://www2.census.gov/geo/pdfs/education/brochures/TIGERcomparison.v3.0.pdf). For general information regarding maps and data, see the [Maps & Data page on census.gov](https://www.census.gov/geo/maps-data/)

## Contact Info

If you have any questions, need any assistance or run into *any* problems using these helpers, please reach out on Census Bureau's [gitter channel](https://gitter.im/uscensusbureau/home) or reach out via email at [cnmp.developers.list@census.gov](mailto:cnmp.developers.list@census.gov). Users have found the Census Bureau staff helpful and responsive.

# Environment Variables

This library relies on [getting a Census API Key](https://api.census.gov/data/key_signup.html). It uses the [`dotenv`]() library to load keys in `process.env.CENSUS_DATA_KEY`. Please `.gitignore` your `.env` file holding your API keys (as this repo does).
