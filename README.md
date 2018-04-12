# google-translation-by-gulp

支持谷歌、百度、有道的API翻译，将中文json文件翻译为其他语言json文件，通过Google翻译出一百多国家的语言；

### 项目完成场景：

由一个 `tap.json` 文件转换成不同国家的语言（可以结合 Vue和React的 i18n进行配合使用）；

主文件：`./i18n/tap-i18n.json` 这里是中文文件，当前使用的语言

任务导入的文件目录在 `./src/renderer/i18n`  文件名字为code名；比如English 则为 `en.json`

### 使用

        # Star
        npm install
        
        # Build
        gulp
        

### 实现思路解析

Gulp借助node Stream；通过 translation.js 实现翻译；目前只用了Google翻译；

