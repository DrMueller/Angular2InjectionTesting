# General
## Timing and locking
A dependency gets registered, when the Module-Instance is created.
The registering can only happen, before any dependency from the injector was obtained, after the first serving of a dependency, the registering is frozen.

This is the reason, why lazy-modules have their own di-container: Since they could never register servies to the app-di, they have to manage it by themself.

## Dependency-Injector hierarchy
There are multiple Dependency-Injectors in this hierarchical order
1. Application (Including each Eager-Module providing service)
2. Per Lazy-Loaded Module (Each lazy loaded Module has its own Injector)
3. Component-Hierarchy (Ever Sub-Component travels up to the Parent-Component)

If a dependency is not found on its own level, it travels up until it founds one.


# Module-Level
## Providers
###M Multiple providers per Type on global injector 
Generally, the last provider per DI-Hierarchy wins. For example, if you switch the import order of
```javascript
    TestEager2Module,
    CoreModule
```
The code-module service provider will be taken instead of the eager2 one.

## Lazy vs eager
### Difference
Eager-loaded modules use the app-di, so every instance is injected only once anyway.
A lazy-loaded module creates its own injector, which is only applied to its own Module-scope.

### Example:
Eager1, Eager2 and Lazy1 are injected with the service from the code-module.
The Eager2 service-instance gets ignored, because it would in fact get registered on the app-di, but the core-module overwrittes this registration.
Lazy1 gets the app-di instance, because it has no own registered, so it travels up to the app-level

Lazy2 on the other side has its own instance registered, whic hgets used.


# Component-Level
## Providers
Every Component can define its providers. 
Since every Component-Tag is an own instance, each instance creates a new service-instance, if provided on the component-level.
Example: test-components.component has 3 tags for the comp1, so 3 services get created.

## Hierarchy
If a Sub-Component, so a Component its tag is used on another Component, also requests a Service it doesn't provide, by itself, the parent-Component gets recursively checked.
For example:
> Coretest1Service created from Comp1Component
> comp1.component.ts:20 Created Comp1Component with Service from: Comp1Component
> sub-comp3-1.component.ts:18 Created SubComp31Component with Service from: Comp1Component
> sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component
> sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component
> sub-comp3-1.component.ts:18 Created SubComp31Component with Service from: Comp1Component
> sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component
> sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component


# TLDR
- Create shared services in a core-folder and register them ONLY on the app-module
- Never use feature-services outside of their feature
- If shared-feature services are needed, register them on the app-module via the _forRoot_ trick
