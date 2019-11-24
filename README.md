# vue-simple-debounce-throttle

simple debounce and throttle

## setup

```
npm install vue-simple-debounce-throttle
```

### node.js

```
import Vue from 'vue';
import VueStorage from 'vuestorage';

Vue.use(VueStorage);

```

### browser

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="build.js"></script>
```

## usage

-   arg

Define custom delay time in debounce or throttle

-   modifier

Invoke the event you want to debounce or throttle

```
<div id="app">
    <button @click="_print">_print</button>
    <button v-debounce:3000.click="_print">debounce</button>
    <div
        v-throttle:300.mousemove="_print"
        style="width: 200px;height: 200px;border: 1px solid black;"
    >
        throttle
    </div>
</div>
```
