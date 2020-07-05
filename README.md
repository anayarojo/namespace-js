# Namespace JS
Library for create namespaces in javascript.

### Installation

```bach
npm i anayarojo-namespace-js
```

### Usage

```javascript
import namespace from 'anayarojo-namespace-js';

// Create a simple namespace
namespace('App.Module.Section');

// Create multiple namespaces
namespace('App.Module.SectionA', 'App.Module.SectionB', 'App.Module.SectionC');

// Create multiple namespaces with an array as parameter
namespace(['App.Module.SectionA', 'App.Module.SectionB', 'App.Module.SectionC']);

App.Module.Section = (function() {
    // ... functions here ...
});
```
