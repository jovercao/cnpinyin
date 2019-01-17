# cnpinyin - 汉字转拼音

通过纯JS脚本实现

## 使用方法

```bash
npm install cnpinyin --save
```

```js
import pinyin from 'cnpinyin'

// 获取全拼字母
pinyin('中华人民共和国'); // ZhongHuaRenMinGongHeGuo

// 获取拼音首字母
pinyin.initials('中华人民共和国'); // ZHRMGHG

```
