let yamlEdit = require('yaml-edit');

const yaml = 'test.yml';

yamlEdit.init(yaml));



yamlEdit.insertChild('functions', {
    hello: {
        handler: 'index.handler'
    }        
})

console.log('done');