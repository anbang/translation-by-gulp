# translation-by-gulp

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


### 这个任务在我项目中的角色；

目前在做一个Electron + vue 的 Windows 、Mac 、Linux 桌面客户端项目，并且需要支持离线使用；

实现思路是，先获取本地的系统语言，然后写入储存的数据文件（我使用lowDB作为数据库的），然后初始化Vue的时候获取数据库中的语言；

然后再使用对应的语言包即可；

因为使用vue，所以使用vue-i18n 来辅助；

> main.js

        import VueI18n from 'vue-i18n'
        
        Vue.use(VueI18n);
        // 加载i18语言,并不是只有18的，下面仅仅是演示的；实际我是加载100多个语言包的；
        const messages = {
            'zh-CN': require('@/i18n/zh-CN.json'),
            'en': require('@/i18n/en.json'),
            'ja': require('@/i18n/ja.json'),
            'zh-TW': require('@/i18n/zh-TW.json'),
            'fr': require('@/i18n/fr.json')
        };
        
        //从数据库获取用户使用的语言
        var locale =db.get('czr_contacts.lang').value() ;
        //生成国际化插件实例
        const i18n = new VueI18n({
            locale: locale ,// set locale
            messages, // set locale messages
        });

        new Vue({
            el: '#app',
            router,
            // store,
            i18n,
            render:h=>h(App)
        })
        
> 使用语言包的优点：
- 不同语言包不耦合在一起，如果感觉Google的机翻不好，以后请人工翻译，可以直接修改对应的json文件就好
- 支持离线；
- 切换显示语言时，渲染无延迟，体验不错；
