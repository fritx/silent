# great

> Another task runner with js

Source Code: [fritx/great](https://github.com/fritx/great)

## great vs gulp vs grunt

Great compared to major Task Runners (or Build Systems)

&nbsp; | great | gulp | grunt
:-: | :-: | :-: | :-:
Orienting | Data | File | File
Flow | Clear | Clear | Mess
Easy | Yes | No | No

## great vs nodeunit vs mocha

Great compared to major Test Frameworks

&nbsp; | great | nodeunit | mocha
:-: | :-: | :-: | :-:
Test Only | No | Yes | Yes
Event Driven | Yes | No | No
Nested | Good | Bad | Good
Browser | Good | Bad | Bad

## Quick Look

### A task file to load:

```js
module.exports = function() {
  // upward emitting
  this.emit('log', 'example: run');

  // downward capturing
  this.capture('title', function (title) {
    this.emit('log', 'titled: ' + title);
    this.set('title', title);
  });
  this.capture('end', function () {
    this.emit('log', 'ended: ' + this.get('title'));
  });

  // task loading
  this.add(function () {
    this.emit('title', 'series');
    this.add(createBody('a-1'));
    this.add(createBody('a-2'));
    this.add(createBody('a-3'));
  });
  this.add(function () {
    this.emit('title', 'parallel');
    this.add([
      createAsyncBody('b-1'),
      createAsyncBody('b-2'),
      createAsyncBody('b-3'),
      createAsyncBody('b-4'),
      createAsyncBody('b-5'),
      createAsyncBody('b-6')
    ]);
  });
};
```

### `Greatfile.js` for entry:

```js
var great = require('great');
var args = process.argv.slice(2);
great(function () {
  // task picking
  if (args[0] === 'example') {
    this.add(require('./example/' + args[1]));
  }
});
```

### Run tasks from command line:

```
node Greatfile [arg1] [arg2] ..
```

Or after `alias great='node Greatfile'`:

```
great [arg1] [arg2] ..
```

### Also this way on **browser**:

```html
<!-- include great.js -->
<script src="great.js"></script>

<!-- define tasks -->
<script src="task1.js"></script>
<script src="task2.js"></script>

<!-- configure tasks -->
<script>
  great(function() {
    this.add(task1);
    this.add(task2);
  });
</script>
```

### See for more:

- `Greatfile.js`: [Greatfile.js](https://github.com/fritx/great/tree/master/Greatfile.js)
- Task files: [example/](https://github.com/fritx/great/tree/master/example/)
