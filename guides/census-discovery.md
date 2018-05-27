# Guide

## Introduction

We started our work setting up [a simple `shadow-cljs` config](https://github.com/loganpowell/shadow-proto-starter). In this guide, we're going to dig deeper into building a Node Library with shadow.

## Scope of Work

As making a hypothetical project is never as useful - to me - when learning how to do something as is the steps involved with creating a working product, I'm writing this as I configure and build out my first actual Node library using shadow and ClojureScript.

The scope of this library is to provide helper functions for using a number of Census APIs.

# Getting Started

Straight away, we're going to need to add some `:dependencies` and `:builds` config to our `shadow-cljs.edn` file.

```clj
{:source-paths ["src"]
 :dependencies [[proto-repl "0.3.1"]
                [cljs-ajax "0.7.3"]
                [org.clojure/core.async "0.4.474"]]
 :nrepl {:port 3333}
 :builds
 {:lib {:target     :node-library
        :output-dir "public/lib"
        :output-to "public/lib/library.js"
        :compiler-options {:pretty-print true}
        :exports {:vintages census.discovery/vintages}}}}
```
As in the basic setup guide, the folder structure convention is:

```
.
├── package.json
├── shadow-cljs.edn
└── src
    └── census
        └── discovery.cljs
```

### Adding `core.async` and `cljs-ajax`

We'll create a `utils` folder in our `src` directory to hold an `async-fetch` function, which we'll use quite frequently in our project and in various namespaces:

```
└── src
    ├── census
    │   └── discovery.cljs
    └── utils
        └── async-fetch.cljs
```

I stole the example for how to wrap `cljs-ajax` with `core.async` from [here](https://github.com/vvvvalvalval/reagent-phonecat-tutorial/wiki/Step-11:-Asynchrony-and-error-management-with-core.async), which uses the `=channel-name=` naming convention to name core.async channels.

### Resources:

- `core.async` [Getting Started Guide](https://github.com/clojure/core.async/wiki/Getting-Started)
