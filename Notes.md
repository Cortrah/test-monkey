# Notes

So what kinds of concerns do we typically need to test and how do we typically go about them in vue?

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
    . pros and cons of getting refs and el's of collections via id's vs a classname

## Testing Views
    . sets and gets it's default props (partially overlapping models responsability) 
    . nulls, undefined and other simple types
    . reference types and custom objects
    . validation
    . initialization sequence overrides between; data, props, computed, methods, watch
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
    . transitions? (css or js cases different) 
    . parent child relationships
    . slots as a special kind of child
    . containers and collections map to proper props and items (of proper types if mixed)
    . interactions    

## Testing Models    

We're not using any models in data monkey currently but we are passing around complex objects

The vue docs specifically warn against passing around complex objects 
And doing so violates the law of demeter (which while having a silly name, is a reasonable notion)

Not sure where I stand with this in the universal sense but if we were using traditional models 
I'd focus on checking that for simple models

    . nulls, undefined and other simple types
    . reference types and custom objects
    . validation
    . objects can be instantiated with supplied values or using default values
    . data can be synchronized with a store both locally and remotely
    . custom and built in events fire and/or are consumed on appropriate state changes
    . validation logic accurately distiquishes the correctness of attribute data

and for collections which are lists or groups of models (largely in v-fors)

    . that a collection can be created with or without a list or group of elements
    . that model objects can be added and removed
    . that events are triggered on container and model changes
    . data can be synchronized with a store both locally and remotely
    . distinguish between whether the list is of a uniform type or of mixed types
    
I think some of these we'll want to do in the vue view with it's props, but having actual models 
that are assembled and taken apart at the component level is worth thinking about

As well as adding controllers, in particular to get fine grained undo/redo and playback

## Testing Controllers

This is a strange one as vue doesn't have controllers, but nevertheless 
I think if we look into the use of traditional controllers we'll find that there are analogs here.

## Testing Routers
   
One of those analogs, most likely. Passing data into routers

    . Url routes are accurately matched to views and actions
    . We can split a route into parallel subroutes
    . A router maintains the browser history corectly after navigation events
    
## Utilities
    
    usually pretty straightforward function tests

## Other Thoughts and Questions

When to unit test or test end to end
How do you do the command patten in vue? Modify veux or just use it?
Different ways of appending and instantiating dynamically