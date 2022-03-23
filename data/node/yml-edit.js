// source: https://www.npmjs.com/package/js-yaml

const yaml = require('js-yaml');
const fs   = require('fs');

const yaml = 'test.yml';

yamlEdit.init(yaml);


yamlEdit.insertChild('functions', {
    hello: {
        handler: 'index.handler'
    }        
})

console.log('done');