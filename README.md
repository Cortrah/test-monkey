# Test Monkey

Notes on what to test and links to examples of how to do it with vue.

# Update

It looks like the vue community is on the job and are merging a bunch of exiting tools into an official test utility

https://github.com/vuejs/vue-test-utils


# Prior Art

https://github.com/eddyerburgh/avoriaz (requires vue 2)

https://github.com/callumacrae/vue-test (supports vue 1)

https://github.com/jackmellis/vuenit

https://github.com/wrseward/vue-unit


# Examples

https://jackmellis.gitbooks.io/vuenit/content/


# Articles

https://www.metachris.com/2017/05/how-to-test-vue.js-plugins-and-extensions/

https://github.com/BosNaufal/vuex-saga

https://alligator.io/vuejs/testing-vuex-vue/


https://github.com/davidmoshal/reactive-vue-typescript-testing/tree/master/src

https://www.drydenwilliams.co.uk/code/2017/06/03/unit-testing-in-vuejs/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=revue

https://github.com/vuejs/vue/tree/dev/test/unit/features/options

https://gist.github.com/roberthamel/670640351ccac7a63630ec8b68537455



# Notes

What kinds of concerns do we typically need to test and how do we typically go about them in vue?

## Testing Api Calls
    . configuration
    . timeouts    
    . success and failure
    . actual call sequences
    . odd event/response ordering
    . when to mock actual data vs explicitly create objects
    . when to get data from static files vs a live service proxy

## Testing Templates
    . render the appropriate html output with the provided props data
    . complex arrays and objects are correctly iterated through and interpolated in the template output
    . getting refs and els of collections via ids or classnames

## Testing Views
    . -- partially overlapping models responsability --
    . sets and overrides it's default props  
    . nulls and undefined for simple types
    . nulls and undefined for reference types and custom objects
    . validation
    . initialization sequence overrides between; props, data, computed, methods, watch  
    . -- more traditional view issues --
    . binding template data to it's attributes 
    . el gets added to the dom when given a place to be mounted, and is displayed after a tick
    . replace=false overwrites the elements inner conent without replacing the element itself
    . replace=true overwrites the element and merges the attributes with the components root node
    . static data is loaded and displayed from the right folders
    . events are bound and fire correctly
    . events only fire once if they are only supposed to fire once (no cycles)
    . events propagate when they are supposed to (using spies)
    . child objects are disposed properly on view removal
    . testing that hook mixins call hooks in the correct order
    . testing that methods, components and directives in mixins override and execute only once
    . explicitly test any custom logic that doesn't use one of those two forms of merging mixins
    . transitions (css or js cases different) 
    . parent child relationships
    . slots as a special kind of child
    . containers and collections map to proper props and items (of proper types if mixed)
    . interactions    

Models and Controllers are a strange one as vue doesn't technically have them, but nevertheless 
I think if we look into the use of traditional models and controllers we'll find that there are analogs here.

At the very least we need to be sure that the vueific way covers the traditional uses of them.

## Testing Models (stores or es6 classes?)
    . a prop of an es6 class sent in as a prop can be split into and used in the view
    . that es6 class can check and/or pass through
    . nulls and undefined for simple types
    . nulls and undefined for reference types and custom objects
    . validation
    . objects can be instantiated with supplied values or using default values
    . data can be synchronized with a store both locally and remotely
    . custom and built in events fire and/or are consumed on appropriate state changes
    . validation logic accurately distiquishes the correctness of attribute data

## Collections which are lists or groups of models (largely in v-fors)
    . that a collection can be created with or without a list or group of elements
    . that model objects can be added and removed
    . that events are triggered on container and model changes
    . data can be synchronized with a store both locally and remotely
    . distinguish between whether the list is of a uniform type or of mixed types
    
## Testing Controllers

What do I mean by controller? Not the client server model that folk typically mean nowdays.
I mean a queue that accepts child events with data or command objects and either
exectutes them or forwards them to a parent. Probably some relationship with vuex.

A good concrete example would be a Vue component that orchestrates a sequence 
of programmatic child animations via events. Or to receive, save, load and run 
a fine grained list of commands for undo/redo and playback

    . can receive and store a list of commands or events with data
    . can execute those commands or events with data 
    . can pause the execution of those events
    . can save and load them to localstorage

## Testing Routers
    . Url routes are accurately matched to views and actions
    . We can split a route into parallel subroutes
    . A router maintains the browser history corectly after navigation events
    
## Utilities    
    usually pretty straightforward function tests

## Other Thoughts and Questions
    When to unit test or test end to end
    Different ways of appending and instantiating dynamic elements

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

For more information see the docs for

[*vueify](https://github.com/vuejs/vueify)

[*karma](https://github.com/karma-runner/karma)

[*browserify](https://github.com/substack/node-browserify#usage)

[*jasmine](https://jasmine.github.io/api/2.6/global)
    
        
