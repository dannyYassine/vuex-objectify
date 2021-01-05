# How does it work?

The three objects `dispatches`, `commits`, `getters` are `Proxy` objects. So when you are trying to access
a module store:

```javascript
dispatches.count;
```

it is impossible to check dynamically if the `count` module exists on the Vuex store. We can, but we would need to access the private
methods on the root store, that wouldn't be a good idea. It is up to you to make sure you are accessing a module that exists
on the Vuex store (perfect to write tests!). And an `ide_helper` is on my to do list, so the autocomplete would to avoid typos.

<br>

To add, in the example above, `dispatches` captures the first argument `count` as the module you are wishing to access its methods, then returns another `Proxy` object.
Its implementation will check the next accessed property and will translate it to `store.dispath()`.
For example, if we will access `dispatches.count.increment()`, this will become:

```javascript
$store.dispatches('count/increment', ...args);
```

where `...args` are any arguments passed to `dispatches.count.increment()` if any.

<br>

It is the same as for the `commits` and `getters` objects. 
 
```javascript
commits.<module>.<method>

getters.<module>.<property>
```

will be translated to:
 
 ```javascript
$store.commits('module/method')

$store.getters['module/property']
```


 