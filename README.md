## List Files in a Directory (files,folder,subfolder)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

![news](https://raw.githubusercontent.com/Nodeclient/list-content/master/banner.jpg)

## (GLOBAL) Install  
```
npm install list-content -g
```

## (.ts) Typescript
```js
   import {default as test} from 'list-content';
        let newdir = new test.ls();

```
## (.js) Javascript
```js
    const test = require('list-content').default;
        let newdir = new test.ls();
```
## Function
```js
newdir.ListDirectory("D:/list_content/",function (data:any,err:any) {
    for (const item of data) {
        if(item.files.length > 0){
            for (const iterator of item.files) {
                console.log( item.folder ,"->", iterator);
            }
        } else {
            console.log( item.folder ,"->", "EMPTY_FOLDER"); // Empty folder
        }
    }
})
```

## Output 
```sh
    .  -> test.js
    .  -> test.ts
    .\dev -> main.d.ts
    .\dev -> main.js
    .\dev -> package.json
    .\dev -> README.md
    .\dev\src  -> directory.d.ts
    .\dev\src  -> directory.js
    .\dev\test -> test.d.ts
    .\dev\test -> test.js
    .\dev\dist -> EMPTY_FOLDER
```

## License

Copyright (c) 2018  | https://www.npmjs.com/~nodeclient

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-image]: https://img.shields.io/npm/v/list-content.svg?style=flat
[npm-url]: https://npmjs.org/package/list-content
[downloads-image]: https://img.shields.io/npm/dm/list-content.svg?style=flat
[downloads-url]: https://npmjs.org/package/list-content
