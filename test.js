const pinyin = require('./index')

console.log('full 中华人民共和国', pinyin('中华人民共和国'))
console.log('initials 中华人民共和国', pinyin.initials('中华人民共和国'))
