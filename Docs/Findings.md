# General
## Timing and locking
A dependency gets registered, when the module-instance is created.
The registering can only happen, before any dependency from the injector was obtained.
This means, as soon as one dependency is served, the registered services can't change anymore.

This is the reason, why lazy-modules have their own di-container: Since they could never register servies to the app-di, they have to manage it by themself.

## Dependency-Injector hierarchy
There are multiple dependency-injectors in this hierarchical order
1. Application (Including all eager-module providers)
2. Lazy-Loaded Module (Each lazy loaded module has its own injector)
3. Component-Hierarchy (Every sub-component travels up to the parent-component)

If a dependency is not found on its own level, the logic travels up until it finds a injector, which can provide the dependency.


# Module-Level
## Providers
### Multiple providers per Type on the same injector 
Generally, the last provider per DI-Hierarchy wins. For example, if you switch the import order of
```javascript
    TestEager2Module,
    CoreModule
```
The code-module service provider will be taken instead of the eager2 one.

## Lazy vs eager
### Difference
Eager-loaded modules use the app-di, so every instance is injected only once anyway.
A lazy-loaded module creates its own injector, which is only applied to its own module-scope.

### Example:
- Eager1, Eager2 and Lazy1 are injected with the service from the code-module
- The Eager2 service-instance gets ignored, because it would in fact get registered on the app-di, but the core-module overwrittes this registration
- Lazy1 gets the app-di instance, because it has no own dependency registered, so it travels up to the app-level
- Lazy2 on the other side has its own instance registered, which it receives


# Component-Level
## Providers
Every component can define its providers. 
Since every component-Tag is an own instance, each instance creates a new service-instance, if provided on the component-level.
Example: test-components.component has 3 tags for the comp1, thus 3 services get created.

## Hierarchy
If a sub-component, a component its tag is used on another component, also requests a Service it doesn't provide by itself, the parent-component gets recursively checked.
For example:
- Coretest1Service created from Comp1Component
- comp1.component.ts:20 Created Comp1Component with Service from: Comp1Component
- sub-comp3-1.component.ts:18 Created SubComp31Component with Service from: Comp1Component
- sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component
- sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component
- sub-comp3-1.component.ts:18 Created SubComp31Component with Service from: Comp1Component
- sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component
- sub-sub-comp3-1-1.component.ts:18 Created SubSubComp311Component with Service from: Comp1Component

If no component provides the dependency, it travels up the the module and so on.


# TLDR
- Create shared services in a core-folder and register them ONLY on the app-module
- Never use feature-services outside of their module
- If shared-feature services are needed, register them on the app-module via the _forRoot_ trick
- Use component-provisioning only, if the service is closely attached to each component-instance and its sub-components