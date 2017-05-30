# Notes

So what kinds of concerns do we typically need to test and how do we typically go about them in vue?

## Testing Api Calls
    . configuration
    . timeouts    
    . odd event ordering

## Testing Templates
    . render the appropriate html output with the provided attribute data
    . complex arrays an objects are correctly iterated through and interpolated in the template output

## Testing Views
    . sets and gets it's default props (partially overlapping models responsability) 
    . binding template data to it's attributes 
    . get added to the dom when given a place to be mounted, and is displayed after a tick
    . that static data is loaded and displayed from the right folders
    . events are bound and fire correctly
    . events only fire once if they are only supposed to fire once (no cycles)
    . child objects are disposed properly on vue removal
    . testing that hook mixins call hooks in the correct order
    . testing that methods, components and directives in mixins override and execute only once
    . explicitly test any custom logic that doesn't use one of those two forms of merging
    . transitions? (css vs js) 
    . parent child relationships
    . specifically containers and collections
    . interactions    

## Testing Models    
    . nulls, undefined and other simple types
    . reference types and custom objects
    . validation

We're not using any models in data monkey currently but we are passing around complex objects

The vue docs specifically warn against passing around complex objects 

And doing so violates the law of demeter (which while having a silly name, is a reasonable notion)

Not sure where I stand with this in the universal sense but if we were using traditional models 
I'd focus on checking that for simple models
    . objects can be instantiated with supplied values or using default values
    . data can be synchronized with a store both locally and remotely
    . custom and built in events fire and/or are consumed on appropriate state changes
    . validation logic accurately distniquishes the correctness of attribute data

and for collections which are lists or groups of models
    . that a collection can be created with or without a list or group of elements
    . that model objects can be added and removed
    . that events are triggered on container and model changes
    . data can be synchronized with a stor both locally and remotely
    . distinguish between whether the list is of a uniform type or of mixed types

## Testing Controllers

This is a strange one as vue doesn't have controllers, but nevertheless I think if we look into the use of traditional controllers we'll find that there are analogs here.

## Testing Routers
   
One of those analogs, most likely. Passing data into routers

    . Url routes are accurately matched to views and actions
    . A router maintains the browser history corectly after navigation events
    
## Utilities
    
    usually pretty straightforward function tests

## Other Thoughts and Questions

When to mock vs explicitly create objects
Getting data from static files vs a live service
When to unit test or test end to end