
/**
 *  将中文json文件翻译为其他语言json文件
 *  支持语言：https://cloud.google.com/translate/docs/languages
 */
const gulp = require('gulp'),
    i18n = require('./i18n/config'),
    rename = require('gulp-rename') ;
// 翻译文件的任务
gulp.task('default',function() {
    // 需要翻译的语种
    const languges=[
        'af',//南非荷兰语
	    'sq',//阿尔巴尼亚人
	    'am',//阿姆哈拉语
	    'ar',//阿拉伯
	    'hy',//亚美尼亚
	    'az',//Aserbajni
	    'eu',//巴斯克
	    'be',//白俄罗斯
	    'bn',//孟加拉
	    'bs',//波斯尼亚
	    'bg',//保加利亚语
	    'ca',//加泰罗尼亚
	    'ceb',//宿务
	    'zh-CN',//简体中文
	    'zh-TW',//中国传统的）
	    'co',//科西嘉
	    'hr',//克罗地亚
	    'cs',//捷克
	    'da',//丹麦
	    'nl',//荷兰人
	    'en',//英语
	    'eo',//世界语
	    'et',//爱沙尼亚语
	    'fi',//芬兰
	    'fr',//法国
	    'fy',//弗里斯兰
	    'gl',//加利西亚
	    'ka',//格鲁吉亚
	    'de',//德语
	    'el',//希腊语
	    'gu',//古吉拉特语
 	    'ht',//海地克里奥尔语
	    'ha',//豪萨语
	    'haw',//夏威夷
	    'iw',//希伯来语
	    'hi',//不
	    'hmn',//苗族
	    'hu',//匈牙利
	    'is',//冰岛的
	    'ig',//伊博
	    'id',//印度尼西亚
	    'ga',//爱尔兰的
	    'it',//意大利
	    'ja',//日本
	    'jw',//爪哇
	    'kn',//卡纳达语
	    'kk',//哈萨克人
	    'km',//高棉
	    'ko',//朝鲜的
	    'ku',//库尔德
	    'ky',//吉尔吉斯
	    'lo',//Lao
	    'la',//拉丁
	    'lv',//拉脱维亚
	    'lt',//立陶宛
	    'lb',//卢森堡
	    'mk',//马其顿
	    'mg',//马尔加什
	    'ms',//马来语
	    'ml',//马拉雅拉姆语
	    'mt',//马耳他语
	    'mi',//毛利
	    'mr',//马拉
	    'mn',//蒙
	    'my',//缅甸（缅甸）
	    'ne',//尼泊尔
	    'no',//挪威
	    'ny',//海（英语）
	    'ps',//普什图语
	    'fa',//波斯语
	    'pl',//抛光
	    'pt',//葡萄牙语（葡萄牙，巴西）
	    'pa',//旁遮普
	    'ro',//罗马尼亚
	    'ru',//俄语
	    'sm',//萨摩亚
 	    'gd',//苏格兰盖尔语
	    'sr',//塞尔维亚
	    'st',//塞索托语
	    'sn',//绍纳语
	    'sd',//信德
	    'si',//僧伽罗语（僧伽罗语）
	    'sk',//斯洛伐克
	    'sl',//斯洛文尼亚
	    'so',//索马里
	    'es',//西班牙语
	    'su',//巽
	    'sw',//斯瓦希里
	    'sv',//瑞典
 	    'tl',//菲律宾语（菲律宾语）
	    'tg',//塔吉克
	    'ta',//泰米尔人
	    'te',//泰卢固语
	    'th',//泰国
	    'tr',//土耳其
	    'uk',//乌克兰
	    'ur',//乌尔都语
	    'uz',//乌兹别克
	    'vi',//越南
	    'cy',//威尔士语
	    'xh',//科萨
	    'yi',//意第绪语
	    'yo',//约鲁巴
	    'zu'//祖鲁
    ];
    for(const languge in languges){
        gulp.src('./i18n/tap-i18n.json')
            .pipe(
                // 翻译的具体逻辑
                i18n('',languges[languge])
            )
            .pipe(rename({
                dirname: "i18n",
                basename: languges[languge],
                extname: ".json"
            }))
            //  翻译之后的文件输出的文件路径
            .pipe(gulp.dest('./src/renderer/'));
    }
});