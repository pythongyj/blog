/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","efd8cd1fb35f68aee95f31697087daa8"],["/2017/09/12/css/block/index.html","5a68417708825447c6462e6aa2f9005a"],["/2017/09/12/css/css-properties/index.html","2c9847c712d865f59190917fd1ebffaa"],["/2017/09/12/js/closure-js/index.html","15e6bd16687af1d0df419cc0cd76c816"],["/2017/09/12/js/prototype/index.html","ed2af1115a594d09a4a1eed3caf6bdbe"],["/2017/11/12/cookie/set-cookie/index.html","024cbc3333507f8b42ef3587ec006180"],["/2018/02/15/docsify/docsify/index.html","987aab5044b88bd07802c82ed1633953"],["/2018/02/15/html/divCenter/index.html","cbe4aa0e126860068630f607842af4ba"],["/2018/02/15/js/RegExp/index.html","f1717356b2564f6e8e6ea92f51ecf897"],["/2018/03/21/js/js-set-html-font-size/index.html","eb2360f86be2f9833524f1f9d0c0e9e7"],["/2018/04/15/wx/login-wx/index.html","71f77610cd5a923450a9d874296b13b9"],["/2018/04/19/other/norm/index.html","d987e9fb7f7c897e6d4faab8ebca9f0f"],["/2018/05/12/js/qureyUrlParams/index.html","eb5c5228c75d2859cbc4a686019b0979"],["/2018/07/13/html/layout/index.html","04bd8d549ef77c88a1024f30ed1418bb"],["/2018/08/15/js/amdcmdcom/index.html","332d58950771bbb1bba02b72c2a978ed"],["/2018/08/15/vue/vue-1/index.html","c594b85593fe25bdaf5f3acf87e8d359"],["/2018/09/12/css/css-line-text/index.html","efef9afcefc1337cb48cfcb4b7f63fff"],["/2018/09/12/other/classic-article/index.html","bc047ac79e6686460bee1ac5606be500"],["/2018/09/16/css/css-attr-practical/index.html","91b72fe0a1d370b17ba832e215ebf432"],["/2019/03/06/css/css-margin-negative/index.html","8856096e168ef77d020ff2aea3d99a85"],["/2019/03/21/iconfont/iconfont/index.html","230523405853ebf9aadb25791e852807"],["/2019/05/18/vue/vue-i18n/index.html","01f0dc5fa1289be181161e63d2db7b57"],["/2019/05/24/vue/vue-router-parms/index.html","7d5a48d3d559ab52cb10310d8adad27b"],["/2019/06/04/vue/vant-list/index.html","ad152b87cbe6490ff9d8c7384fe2ae61"],["/2019/06/04/yarn/doc_yarn/index.html","700d939f0d5ea020b0a988181ab4fce7"],["/2020/03/20/hexo/hexo-gitalk/index.html","ab0255787f0422406cb1836889b25bce"],["/2020/05/12/vue/vue-proxy/index.html","4b461d93bcb31806e4917d0b0095ed95"],["/2020/06/30/hexo/hexo-move-mac/index.html","c25e535520ff87032a70d5c655bbc42d"],["/2020/07/03/vue/vue-network-online/index.html","e0e6062b34e6dbcbd22093661a2d1d31"],["/2020/07/07/nuxt/nuxt-i18n/index.html","0beafac99f631051c2f9316e3e676adc"],["/2020/07/09/nuxt/nuxt-proxy/index.html","634de55872e44c4bed9a94276627ecf4"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","025f9ffe7a4623d627385bd90d3b3e5b"],["/2020/07/13/less/less-var/index.html","ae48e4c1e379ac710b3fa5b1d6a77146"],["/2020/07/23/life/life-big/index.html","9f0c46519f423fa9ed50a2f81df665e5"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","972cadda1e8416b93f526f6034f79655"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","6adb106206d3bef5f96f2764bf20a1d2"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","1cfc52ada78c466beb3ea4b18a57b0cf"],["/2020/07/27/other/zsb-math-gs/index.html","b3c354e30f0391d92cd3140d30ea24b7"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","ac1aa7ab462130c478f2b53119c56087"],["/2020/08/05/flutter/ambient/index.html","99c3bcecc8c2dacc275ea4b2e0038a36"],["/2020/08/06/other/target-2020/index.html","557ddeb0c8d680bb3cee605983de79e0"],["/2020/08/12/js/input-fixed/index.html","62b6d8282cef51792a96fb6e78347b22"],["/2020/08/12/js/ios-android-time/index.html","d5ad4e88cc72fb69894a3c722347d7f5"],["/2020/08/18/ui/peise/tonal_balance/index.html","88c459c23f80d2ca2c60aae1484fddbc"],["/2020/08/20/css/effect/index.html","f6bdf90bc9783ebd31c417b98fc6c365"],["/2020/08/27/css/unit/index.html","af542b738fce6d277316c4d70677edb0"],["/2020/09/01/react/antd-mobile-theme/index.html","23ad372ef0a4fe48fe51d25eb4cee4ad"],["/2020/09/09/js/js-cookie/index.html","5c36967f0f9a280ad66dcc5dfefc1036"],["/2020/09/10/vue/vant-ui-code/index.html","1ebb29126fbf6e44ab9c31abb53f3033"],["/2020/09/21/js/log/index.html","745779fe10cbc16bfdc821fe25cdeee7"],["/2020/09/27/npm/package/index.html","8425383091149440a4dd334eb95d58a0"],["/2020/11/02/html/emmet/index.html","e18040747d2d42433974701743e5a855"],["/2020/11/15/flutter/basis_one/index.html","defe54593b2be62c587a29ab53b517a0"],["/2020/11/23/js/change-url/index.html","10b2d1720bd1e6674fb5b1511cd40b94"],["/2020/11/26/ui/ps/delete-text/index.html","a60cf5635e005880d2e77e05895f257d"],["/2020/11/30/vscode/bg/index.html","78ad2ed291c9dec9bcd14d56846149e2"],["/2020/12/02/flutter/apk/index.html","f522831f61225e5696e9470e8d57d913"],["/2020/12/04/flutter/drawer/index.html","3564220d7ff51f27bdd74ae1ea5476a2"],["/2020/12/04/flutter/l10n/index.html","d4027fdfebf1c68467ed2bf1de6e343d"],["/2020/12/10/js/es6/array/index.html","2a0e322ba6f86ce7e4762a97e874e623"],["/2020/12/14/nginx/proxy/index.html","70ff5a6000f943653207b629d610c276"],["/2020/12/18/css/fixed/index.html","22e963f9dace9cbdcb90112f4f8e66a7"],["/2020/12/22/vue/vue-3_ts/index.html","dc5968971bc8c27d72cf49de350eaa93"],["/2021/01/21/shell/zip/index.html","c40f2815d909a7815ff90a56a66980a5"],["/2021/02/11/target/2021-target/index.html","5e271314a5c875bb7cdb3634f9910c6a"],["/2021/02/18/life/life-2021-218/index.html","362488e3b08b998175e4973fd41dfada"],["/2021/04/10/other/picture-bed/index.html","47539d5b28142913bbdbb89c71e07f6c"],["/2021/04/13/vue/cq-vui/index.html","0e8bb7b0fcbdbf4a971cd0acb9daa992"],["/2021/07/05/build/gulp/index.html","6a050a3612f0d0f1a92878833cdada7f"],["/about/index.html","263f54bcb4e9840c010d0a729b0d8532"],["/archives/2017/08/index.html","01e2c3f3c68f26d74699b8b5fdb85206"],["/archives/2017/09/index.html","e464f14ba48b76febc245dbda25ac822"],["/archives/2017/11/index.html","16c80d14be10965a5a257d8df725dcf3"],["/archives/2017/index.html","1f2893a5c9027de8b040fe3f52223532"],["/archives/2018/02/index.html","fd0c50404103100d145e9b06f3d87000"],["/archives/2018/03/index.html","020420a9df4313f18647e8ce1b66aa43"],["/archives/2018/04/index.html","d9ac073bd4313ee36c4d18302b8015c8"],["/archives/2018/05/index.html","870c1cfb885d90d93ad90d2722a46217"],["/archives/2018/07/index.html","355c1a278b3805bb45f232f3283f0bd3"],["/archives/2018/08/index.html","c6695ffa371f07a9752b9bb9003048bf"],["/archives/2018/09/index.html","cf756b582b69901cdb4fc7bfc74d2a9b"],["/archives/2018/index.html","b52e48dcb19c4cfa9bfdd4d4e118e5ee"],["/archives/2018/page/2/index.html","776e863ad969d52e59f0f047c8acc1d0"],["/archives/2019/03/index.html","b98ece60ebcb3d3a2522985b20dba79f"],["/archives/2019/05/index.html","5d73701df49d8966c4e020c06858d4f3"],["/archives/2019/06/index.html","9ee73470826c4fa2d0278165a4563374"],["/archives/2019/index.html","02fe48beec854c75e06722151cbafabe"],["/archives/2020/03/index.html","921bc5cd27d1e77cc78ddf8f667b8c8a"],["/archives/2020/05/index.html","31473115002f9175753d0f57b6123336"],["/archives/2020/06/index.html","14b5f67baad43cafc69830792283dfe6"],["/archives/2020/07/index.html","919a8b3d22b46747bc3bf2e5c87ae2da"],["/archives/2020/07/page/2/index.html","eee3f21ef883c39dbd1957e9e2588d60"],["/archives/2020/08/index.html","670e7422e08e456b2120846819f35b81"],["/archives/2020/09/index.html","bd41d7b98676f75291a210d34b5e0b23"],["/archives/2020/11/index.html","ab9fbe3a6ea227757dffa4638c46508a"],["/archives/2020/12/index.html","973a07f09b93d7704f13473abd4b5d34"],["/archives/2020/index.html","3dd962ab092f4abef0b661ad00ad4111"],["/archives/2020/page/2/index.html","ab883078d9bd56d8e9de97cff0ebe6e4"],["/archives/2020/page/3/index.html","c7927ce727052d9ddf88d5b145e274c4"],["/archives/2020/page/4/index.html","d84c9da466c9dce82340af7c6ac597ff"],["/archives/2021/01/index.html","db73989f7ce81d70176c9adefa5a3ee5"],["/archives/2021/02/index.html","42fc14d4fee51b23682accf17b082878"],["/archives/2021/04/index.html","a04b54162c550285d016c196cf0dfa6f"],["/archives/2021/07/index.html","b2ad15964f797c404b2d22454c52d7a2"],["/archives/2021/index.html","3878f0bf5f2025eb67f7d7612e3246f7"],["/archives/index.html","2b0487b60c880b1542b803374f789529"],["/archives/page/2/index.html","ae91a9f6f6cb445992b5ccba3766983b"],["/archives/page/3/index.html","f1099653218605fc44470372bba69c29"],["/archives/page/4/index.html","034e41b2b8cf348ba42ef6c6be7a0b34"],["/archives/page/5/index.html","5cfdda75d05d42ca4894456267994f15"],["/archives/page/6/index.html","b9d3bba7c881fdaf3457907cad1cf749"],["/archives/page/7/index.html","9bebb85b95f7a0f4f72ece2829ed40ba"],["/categories/Emmet/index.html","423aa6593d64f934d6f9e782febe7239"],["/categories/common/index.html","89cd7d13a696a5dd4bea6d052d5f88f0"],["/categories/cookie/index.html","2f84ab0375f1e37dba28d52d5401485c"],["/categories/cookie/设置cookie/index.html","2c64b9ac7e705e58a83b336bb77ac5f4"],["/categories/css/fixed/index.html","221cfdf6d01abbdeb71a644cb46e44c5"],["/categories/css/index.html","e0434f1c520314a590de363fd1e57b2d"],["/categories/css/三大特性/index.html","19dfe1c615950b5aabc39715ee7d069e"],["/categories/css/不常见但是实用css属性/index.html","9552d05ceffe4ee73ab03bb2f4d76c4b"],["/categories/css/中间文字-两端横线/index.html","a598385b5c3f19ef8e533ac2967fdf50"],["/categories/css/块级格式化上下文/index.html","c758340fa9c6336b4f6e2eceb9157bc3"],["/categories/css/水平居中/index.html","962cec44b2a6bba9d06ce5ecc34a7a44"],["/categories/css/负外边距的巧妙运用/index.html","16cbbf0ad2e927c5e92e6fc43f198326"],["/categories/docsify/index.html","ada3b6cea932a8db62bf41b6397424c0"],["/categories/flutter/Drawer/index.html","8db1d8afaedb42709c9e5b4e1f370353"],["/categories/flutter/index.html","4250ad74ac2dd3b0ac1ce985719605ce"],["/categories/flutter/国际化/index.html","408e58d515ef03b3a27f127e1ef99d73"],["/categories/flutter/基础/index.html","dd82ea7c1acdacbaf5b6739f68087a64"],["/categories/flutter/环境搭建/index.html","9cbdbc5f2f460cf160bc0bfc9f9ee774"],["/categories/flutter/部署/index.html","aa2ad83cf24912237aeff4bf4f1c0ce5"],["/categories/gulp/index.html","afce60acdc4e03aa48ce0b42478d7583"],["/categories/hexo/index.html","58e87ea09bbc90a7e6420f5d1da84ff5"],["/categories/hexo/windows转mac/index.html","577d42679048dd04897ae8d5ebc99bec"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","0b8bb5d6d86cd872eca0421fa9876e54"],["/categories/html/index.html","525d5dfeee12321d43d2b3ddbc30ad64"],["/categories/html/基础知识/index.html","af0d862b5178fb9afcc8472856611856"],["/categories/html/页面布局/index.html","977f145dff0f9e8d9436ff0e9239b8c0"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","ed163ce2788e7ba50d5cd34a2be4b1e9"],["/categories/iconfont/index.html","259a7a1ae3db51e9ec4c20defcffc509"],["/categories/index.html","0fb1ba14b47f8dcf1f5fb05cdedcab39"],["/categories/js/es6/index.html","ef84052d9704a7d94d366ba82651a4e4"],["/categories/js/index.html","204e629ecf43db63e5186ac7867390dd"],["/categories/js/page/2/index.html","e3188fefcfc5c098a67986abd87976f3"],["/categories/js/url/index.html","fb249709fbda96b49ead14dd02922cb0"],["/categories/js/原型/index.html","a4f83d059a3055d6efbf51f54ef05a4c"],["/categories/js/正则表达式/index.html","abc96fabedf4aa33d6e9a7d110d13243"],["/categories/js/获取html到fontSize大小/index.html","2f924d277b5542401ea75855ccf891ab"],["/categories/js/获取url的各个参数的值/index.html","973809e37e6062e3db7640c2db9c96a5"],["/categories/js/闭包详解/index.html","fe2e4893ef66bf11a3a9ec01fc8f30d8"],["/categories/less/index.html","49f03fad15bf522684800b0cfcf2b761"],["/categories/less/全局变量/index.html","1cd3d126fb013f53b7a6ee00d479bc3f"],["/categories/nginx/index.html","74c81827449588a9108af6cf16d9c547"],["/categories/npm/index.html","e19b6c0da71c9d0f8f16cf60edd17c91"],["/categories/nuxt/index.html","f302b718847a20843a8c0f4b1b89af7f"],["/categories/nuxt/代理/index.html","4730cd3078a431d9c0378636b34ac565"],["/categories/nuxt/国际化/index.html","35820b6eae86eee69ddb09ca55eea05f"],["/categories/nuxt/页面刷新数据丢失/index.html","1d1feb293d8442a6ad0256d63c605834"],["/categories/react/index.html","fcbf23d20af6781bebe54f2f4aefa4d5"],["/categories/shell/index.html","f37335152ad83890a7fabaa296b1cc16"],["/categories/target/index.html","d2981cc7a78c2989bf5811e300e0cbdd"],["/categories/ui/index.html","5da7e23b9e5e8e3d64b4f91987deec80"],["/categories/ui/ps/index.html","eb9eadbd19bd9aee6aee90840c6fbde2"],["/categories/vscode/index.html","eabf3cb8894c7bd21e51e3383835fc28"],["/categories/vue/UI组件库/index.html","71f74f04ea659afbd048f7d8c55307b6"],["/categories/vue/index.html","86bb772749169617039945023d2cbec1"],["/categories/vue/router/index.html","299f6ee16bb523586771c089f5eee209"],["/categories/vue/vant/index.html","f333f892b6f7a5aa7f5bf5c90a976618"],["/categories/vue/代理/index.html","03f43055e8822f116eec3dc54746f4d7"],["/categories/vue/国际化/index.html","901bfd0c09f7b7b0120f0e6a338c973e"],["/categories/vue/时时监听网络的链接状态/index.html","b64c8686932fb4527d22f09aad727659"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","19df144b4904677270c43ab3518f3af7"],["/categories/yarn/index.html","792ce1c1ec1436a06932d31812c9dbac"],["/categories/其他/index.html","7652259e253ba3eff3dd0ea01f05c5fd"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","7a8a7eb544e466ee2ad629727b94c967"],["/categories/其他/目标/index.html","cfe65e630ab7b2857e346c0cd18a6389"],["/categories/其他/规范/index.html","fd2eadb99115ed6d5b5a9f865a5befa7"],["/categories/其他/高等数学/index.html","aac4aa27a8741720d9a8fe18ec05902b"],["/categories/图床/index.html","7c1f571899b1e357f71dd812c613083f"],["/categories/小程序/index.html","fbcbc87a035927b0f46d1e7b215210b4"],["/categories/小程序/wx/index.html","1bd74f4c2209092ba093ec0a0d995393"],["/categories/数据结构与算法/index.html","13575e772da2bff0de56347497cbec90"],["/categories/数据结构与算法/图形结构/index.html","5cd2caca6dd18c72688449ca3b0ba1f9"],["/categories/数据结构与算法/排序和查找/index.html","c080ee7e9f85a4067a5bd9b84330887b"],["/categories/数据结构与算法/树形结构/index.html","8f10d83d066deb578f0df128da51ece1"],["/categories/数据结构与算法/线性结构/index.html","93ca553d4a11c53fe5deec144f29bc85"],["/categories/生活/index.html","8ff071af99c0d8dbb3c307039d2f9db1"],["/categories/生活/生活杂谈/index.html","383f3cbe1cb71f5ef432f9ff571bc6c3"],["/categories/生活/长大后明白的道理/index.html","883abeb743e6b3deccecb56e6efd5a42"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","58e3d82597f237058a61f0646e6956ff"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","95e06fc8f55fcba14fe6e49c2d210445"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","183762c7d4deb0c6c8b29f29fafcdd93"],["/movies/index.html","079e2b4e02097c392c0a272ae96c1746"],["/music/index.html","8b5e1b0b90bc52e9ed7e5e453ee4c641"],["/page/2/index.html","2568ff6b80822540bf1bb0dcfa2132c6"],["/page/3/index.html","5d5d56cb439b7f49347612f2a3d949f0"],["/page/4/index.html","079513f5c22a518d9e756d3050c24a7c"],["/page/5/index.html","289bf3ae5869f12565bfc2a99e615def"],["/page/6/index.html","485423c74d543fcdf705fdb943798f93"],["/page/7/index.html","92aa17598ea2c003cb7da991cc171f28"],["/photos/tangyan.html","e6dd4d1e4710a20f8711b2804390fdf5"],["/tags/Emmet/index.html","5867f6482b08a022396a7a8878aef771"],["/tags/amd/index.html","ea30c3f3042a0e17d5a4ddf7c09eec74"],["/tags/cmd/index.html","871db33f9734434011929f8f5e8a2950"],["/tags/common-js/index.html","9b7ff6b9f8b685eb578d20e545c5f1bc"],["/tags/cookie/index.html","6e5092d543e6dedc5b90b1910e2e16bd"],["/tags/css/index.html","f157d217e1fa8a95625fa5b0db9dd4f0"],["/tags/docsify/index.html","3e19090dc7fcf41d0ec45d2224535c67"],["/tags/flutter/index.html","474912b7439e44b1aebc4d8617e6bc0c"],["/tags/gulp/index.html","0d0b79ac1d09e0c96efa4baa701a4e9b"],["/tags/hexo/index.html","d8ef7126f0b4d1381cc3fa77978669fe"],["/tags/html/index.html","0345813865732f49871379f674f8484b"],["/tags/i18n/index.html","0ab8aaed6f4a3512a8aebd67c5f42dcf"],["/tags/iconfont/index.html","ff5b58b815c9f89ba2518c5008e8272e"],["/tags/index.html","173bdfe2c5446d773acf194a92185d9d"],["/tags/js/index.html","895f87b6bb4c39da7d307157134ba829"],["/tags/js/page/2/index.html","314a72f5b720b755843c7fef7d076427"],["/tags/less/index.html","7d1ee4c0ec3f9c7c2e06bafeb463abe5"],["/tags/nginx/index.html","2e92f655c7f659735784c12e651f8004"],["/tags/npm/index.html","8955743ba2df5006888f124e28a6c53c"],["/tags/nuxt/index.html","a305a2849a34f7e222d688c91e757cd0"],["/tags/proxy/index.html","a9beb088fdeba36125cce92e6e74d571"],["/tags/react/index.html","421e9ad565d0da701fedc85749b0a24b"],["/tags/shell/index.html","a6c4721ad22b29c08d0290e6b39e7616"],["/tags/target/index.html","cfaba60e888ce8d988c5b952c5cd8b5a"],["/tags/ui/index.html","a7cd7bc16db0cad2bb2bf97ce207c9b3"],["/tags/vant/index.html","6d584c3fa75265e5f76d4b6a773be634"],["/tags/vscode/index.html","fcb8d1c75fc6372411f5b22b2cab1d8e"],["/tags/vue/index.html","992ec4378be45af923b97d288934aa91"],["/tags/yarn/index.html","3af85de64a18374489883536fa1400e0"],["/tags/其他/index.html","3f77c4e0144332e50e6b029450d7da95"],["/tags/图床/index.html","e76d861ef330c0891b508d381771df1e"],["/tags/基础-一/index.html","90ba4e1666601045842d09de11df4ebc"],["/tags/小程序/index.html","9dc89533ebd0c49fae211d452c385f3f"],["/tags/数据结构与算法/index.html","e4e898d31dec6b317974b3221583691b"],["/tags/生活/index.html","9e976796cfd8b4a3d73a30131c11ebe4"],["/tags/目标/index.html","717aff7c95c5d2dca951f72bb6323541"],["/tags/规范/index.html","ee9075b7354befeed36af05b0c24dfc0"],["/tags/高等数学/index.html","984b2df7780994836cf40483a377302b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.cq.qcwy.org.cn"});




