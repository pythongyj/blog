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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","404c0f3b3d6b772d00751f44b48eb122"],["/2017/09/12/css/block/index.html","6e0292cae8ddf0d2edd60c7cd8475102"],["/2017/09/12/css/css-properties/index.html","2a28e59436ab7c12eba866eff11bedee"],["/2017/09/12/js/closure-js/index.html","c5f9ef6c26574cfbedeea3b89d48dbfd"],["/2017/09/12/js/prototype/index.html","a2b272fda2e5ec4b10bd2ac95827ac85"],["/2017/11/12/cookie/set-cookie/index.html","7d381835fd22ed65279db8aefef7e776"],["/2018/02/15/docsify/docsify/index.html","d48a6b3cd5fd3c8c51cc4b9b6c7de8b4"],["/2018/02/15/html/divCenter/index.html","4fcaf7a9a5867d44fd864bbb8af51883"],["/2018/02/15/js/RegExp/index.html","c3f71e0cb194a61e8c05ce857e600a47"],["/2018/03/21/js/js-set-html-font-size/index.html","d855874eca2a3caeff88d156cfccbc03"],["/2018/04/15/wx/login-wx/index.html","2048b2d7e9edfa04ff7d6f6fdaa745bd"],["/2018/04/19/other/norm/index.html","6195780104484407ee3c21fb83c8eca4"],["/2018/05/12/js/qureyUrlParams/index.html","cc9db3ed9c296a5593ab19fd03fd194e"],["/2018/07/13/html/layout/index.html","a0bf1eb1a4c8cb2811658304c0f9aadf"],["/2018/08/15/js/amdcmdcom/index.html","60cb185a3cf21fa152ea38a60a63d2b4"],["/2018/08/15/vue/vue-1/index.html","0ecf755e204c99b77367fc57a3c1c68b"],["/2018/09/12/css/css-line-text/index.html","8f6c02960a26ccfc8a3e693c64cf39a5"],["/2018/09/12/other/classic-article/index.html","d9fe6a0ae5091758342e9de20aa21e36"],["/2018/09/16/css/css-attr-practical/index.html","7db37b5d9b653f884694cea5811ef29e"],["/2019/03/06/css/css-margin-negative/index.html","4274af0ad0e6a66ca9bd5c2584c6fbc7"],["/2019/03/21/iconfont/iconfont/index.html","3e672cf3c297a8a4963349667eb50646"],["/2019/05/18/vue/vue-i18n/index.html","df5426a550e0303a9f2dd105e78f5ab8"],["/2019/05/24/vue/vue-router-parms/index.html","6f9ea88f709e4131e0486fb6b7354e73"],["/2019/06/04/vue/vant-list/index.html","5bf77a6193860aac7104783055411d67"],["/2019/06/04/yarn/doc_yarn/index.html","86d57a524b07b8f343988fbf6178f954"],["/2020/03/20/hexo/hexo-gitalk/index.html","0601a5c8740a329ada23f62964afa91c"],["/2020/05/12/vue/vue-proxy/index.html","bc44e80cfa1198e64e65dc9d2062c676"],["/2020/06/30/hexo/hexo-move-mac/index.html","21da0f6280c346f22c3637fc5455340c"],["/2020/07/03/vue/vue-network-online/index.html","6d1c19c7362b17193140d49a4b8dac02"],["/2020/07/07/nuxt/nuxt-i18n/index.html","6b46f62a4c485e8bccbde015b3d22530"],["/2020/07/09/nuxt/nuxt-proxy/index.html","ca63be4eda66931304bd0cd845ffa7a9"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","2a79975c17412d6de8959cd524ff3ab5"],["/2020/07/13/less/less-var/index.html","5840429d3f92bbd5e42cd517161c9785"],["/2020/07/23/life/life-big/index.html","2b52d1676ca5babe93db611644c06ecc"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","1ae4147df696851c294b1956bf40dee3"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","549d2f0ac0ff8f428a002dfdef921661"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","2625f31bec8472813c230e7d0b9760f9"],["/2020/07/27/other/zsb-math-gs/index.html","1ecf38a44d1b8e25b5fdcb73cbac740c"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","3e9b0b36d6bb1a080ca3e810c44c7fc8"],["/2020/08/05/flutter/ambient/index.html","6af7adab4414caabb1f56c5161269d4a"],["/2020/08/06/other/target-2020/index.html","82248fb7685e40a2c437d00ae75782fb"],["/2020/08/12/js/input-fixed/index.html","f815ffb392e2354803ebda4324c31edc"],["/2020/08/12/js/ios-android-time/index.html","4ff2e93ab0e5bdbec41170bd22028db6"],["/2020/08/18/ui/peise/tonal_balance/index.html","227da0a62fa9f55a56fd50c4f4a23f06"],["/2020/08/20/css/effect/index.html","5f99db755da79d63f136a9870255eac5"],["/2020/08/27/css/unit/index.html","a6c6a98feb8bacfec75be14c03c79159"],["/2020/09/01/react/antd-mobile-theme/index.html","00c7f4bc886c06125b848659c9940ec6"],["/2020/09/09/js/js-cookie/index.html","7ea850d577da48fe87505b09b1522dbe"],["/2020/09/10/vue/vant-ui-code/index.html","65bd2b57009ff8fb7ebfa7f11a322436"],["/2020/09/12/css/sass-script/index.html","34cf39b0345569a82b8b9f3b95a7e8bb"],["/2020/09/21/js/log/index.html","6cdcae790838812f47b5bef94d52f54b"],["/2020/09/27/npm/package/index.html","607faf2354d0936902ce65f2d5c96c9e"],["/2020/11/02/html/emmet/index.html","563341f4ce32090242c82b128f0fd6b0"],["/2020/11/15/flutter/basis_one/index.html","5d4d34c81b39db5c6df07fd75f0bbc28"],["/2020/11/23/js/change-url/index.html","8c7f9de72d65d716e71c668604c3a17c"],["/2020/11/26/ui/ps/delete-text/index.html","7773127843b8e742e8a6d9bd420ba09e"],["/2020/11/30/vscode/bg/index.html","eef096cb18abd59434c981a141f4be09"],["/2020/12/02/flutter/apk/index.html","c3ddebbe50c5ffe0ef03bce9e7c9fe9b"],["/2020/12/04/flutter/drawer/index.html","62863f2f98227725affcc3c95c81be19"],["/2020/12/04/flutter/l10n/index.html","97cb9095e8b458aed2096042fbf4ee91"],["/2020/12/10/js/es6/array/index.html","18e9ff4627f4f054dae1e1020c7784c6"],["/2020/12/14/nginx/proxy/index.html","237afd7bc1c5ce8e5aa9f216643a426d"],["/2020/12/18/css/fixed/index.html","b1c019664d6c1a346a1408c347f47270"],["/2020/12/22/vue/vue-3_ts/index.html","e455a48d6c23eabf6d31366446e41942"],["/2021/01/21/shell/zip/index.html","d16dec0a6885d3c0b7c0edfb41c6eab9"],["/2021/02/11/target/2021-target/index.html","adc1df81c30b93744b3589f7e76c1290"],["/2021/02/18/life/life-2021-218/index.html","45486390709b4e239e998138b2b6a858"],["/2021/04/10/other/picture-bed/index.html","2bf4361b1d8ac01dce308dd24449a340"],["/2021/04/13/vue/cq-vui/index.html","9220580bd2225d76ed8f525f609ba97b"],["/2021/07/05/build/gulp/index.html","f9bb149ae3e7075a51cc0575e0de6162"],["/2021/07/07/tiku/meiriyiti/index.html","1d8d212d1f15e976fbb317694e5291ff"],["/about/index.html","22f829c13b45a51e4d9a059d0a7250af"],["/archives/2017/08/index.html","023ed40038b214898f800d6b9c553979"],["/archives/2017/09/index.html","4f9de07fb5f0447bdbb5d8f01a3b9a19"],["/archives/2017/11/index.html","10bb120547a037f08a64bbbfbd86eb21"],["/archives/2017/index.html","8610389636c331210379adb68d7cfb79"],["/archives/2018/02/index.html","902bacca4e0b5c915a983859984eb69d"],["/archives/2018/03/index.html","3e292d0ac184c33567debffae10e5cb2"],["/archives/2018/04/index.html","607862522413ff2e597ebf8522b0b553"],["/archives/2018/05/index.html","07f3780043613767092b582557e2aa17"],["/archives/2018/07/index.html","7c076fbb5aeb7bb4260cea7338c34391"],["/archives/2018/08/index.html","3f07fb1bd067f625ea8f750f82205e6d"],["/archives/2018/09/index.html","cf3be7b9b52cf8205256f25df69b9a73"],["/archives/2018/index.html","f98900d16746fd153c550bf0367466ee"],["/archives/2018/page/2/index.html","a143cb6d20d9ae2d209dce507ee85c3f"],["/archives/2019/03/index.html","f7c5c0dc638b67413fe7896755d6d227"],["/archives/2019/05/index.html","93cb089ed3ff2ca5472fe75eb9234e95"],["/archives/2019/06/index.html","e898735c7c52c13479c5c12d68656b4a"],["/archives/2019/index.html","ee80b1a5fde2f2b09195c4ea295c678a"],["/archives/2020/03/index.html","371c3c91a15b5917d96f0cf078299ee6"],["/archives/2020/05/index.html","c8317d28ed8a256032c03ceef01e60fc"],["/archives/2020/06/index.html","ba4c633ef5991c2e74fb35573af23246"],["/archives/2020/07/index.html","aff94539862c339b24159bf809cf1c84"],["/archives/2020/07/page/2/index.html","3a3c631b0580fb7f5bafeb92095bc784"],["/archives/2020/08/index.html","b7da28f6b11862a9bd5da5d59533cae7"],["/archives/2020/09/index.html","d5dc1a92b5ceb2eceb9c2765bc386150"],["/archives/2020/11/index.html","eae25b8a72ac58462639afb22e0e1393"],["/archives/2020/12/index.html","3169612abf7ce46ac58dcddd7bd04c59"],["/archives/2020/index.html","2f5cf081278565fed0865c5c40464d97"],["/archives/2020/page/2/index.html","48c09b20ba788085572555cd38395ab0"],["/archives/2020/page/3/index.html","2171ffe6ed38ee6e5648513f45c9312c"],["/archives/2020/page/4/index.html","336d29ba09f7cb46f41fc248f9e62c55"],["/archives/2021/01/index.html","5dde9122af20e59543ef2d62fbf0d4f8"],["/archives/2021/02/index.html","05b5d62f7a1d60557872798cf854b61d"],["/archives/2021/04/index.html","e91d073a215c9b6e830a733bccf4c5db"],["/archives/2021/07/index.html","c85a368c031c32ffd1124d53312404fe"],["/archives/2021/index.html","935799ff048cd7abbafb6627f7b2a7fb"],["/archives/index.html","6b32e8763668b43b3bd88edbda68f1ae"],["/archives/page/2/index.html","63e6bcbb259d40fd79ca3d615c0153d7"],["/archives/page/3/index.html","7bffbfea8f24523cfab105688b396056"],["/archives/page/4/index.html","1ec7531ed6e62aa39a30416ebd32448f"],["/archives/page/5/index.html","fac47f5923aabe822b04dee5a06ca101"],["/archives/page/6/index.html","5efdc1b7493acf9e78e55a3800b13b10"],["/archives/page/7/index.html","700eb5c3858a550c4721d1c9710a835b"],["/archives/page/8/index.html","e0b01f6b441792cf8d270d41bae58443"],["/categories/Emmet/index.html","76a2c3f2e354a4ec094ef2642c5430bd"],["/categories/common/index.html","b925101f43aebd9f843664e438c303bb"],["/categories/cookie/index.html","600f37e3d2931635dd007a001b58e673"],["/categories/cookie/设置cookie/index.html","5c4a29835a33388df09e6b8b9c8d55b8"],["/categories/css/fixed/index.html","4b93b0d159bdb5d3dcba93bd6f0b3c1e"],["/categories/css/index.html","02215d905fe202a2404bf63d19b98eaf"],["/categories/css/sass/index.html","3acfd7078e2f6cf51993c99e8fb1e03d"],["/categories/css/三大特性/index.html","3d7df569beaf1d36f06259b8b33dfcaf"],["/categories/css/不常见但是实用css属性/index.html","ff6f62fc0f6ad9c36e294d9da56d4c7b"],["/categories/css/中间文字-两端横线/index.html","50825879920c6058c2a49acc762a5a4f"],["/categories/css/块级格式化上下文/index.html","ef481f04affd39a8dd3b96083da2828d"],["/categories/css/水平居中/index.html","9ec9eecab1aef55d10c5b13b48d39a6b"],["/categories/css/负外边距的巧妙运用/index.html","d84be7942752db78f7e8e0b6f0e20e65"],["/categories/docsify/index.html","4fe1b8b424f57864f22c1e1400282553"],["/categories/flutter/Drawer/index.html","ca8aa423c960fced85cbf129ed64e221"],["/categories/flutter/index.html","2f481469d5ece4aa0802ee5eabfa33f1"],["/categories/flutter/国际化/index.html","657f03d1827225426a81d3b41de90b85"],["/categories/flutter/基础/index.html","a0ff83dcc5b1d5c284e0c53aadf247d8"],["/categories/flutter/环境搭建/index.html","6ff29ed5134955ec2ecbcc5f374a2ae9"],["/categories/flutter/部署/index.html","49e8e3a754fc327133b7858565b61f5c"],["/categories/gulp/index.html","5afc7939a9760db77a98d5a1f828ff1a"],["/categories/hexo/index.html","08b2678dd6cad138379ffa05867cea58"],["/categories/hexo/windows转mac/index.html","2e4fb4576c9194f34b00fb6f442e4ef6"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","63205a962280054203cace71ddca61b2"],["/categories/html/index.html","5bab355d2e66714e669ab447edde7e0f"],["/categories/html/基础知识/index.html","2c4741d2c4445402909850865e858e55"],["/categories/html/页面布局/index.html","456b91fe4803023d6cd328984213432c"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","979eb8ed1096b1ba8fcbab1d7ec9ed32"],["/categories/iconfont/index.html","56933685308d30accea51280038f0337"],["/categories/index.html","acdae4c6d3dcce66f4ece35454321083"],["/categories/js/es6/index.html","aea37be46e0948490f4c6a34b6b3d4ec"],["/categories/js/index.html","f25b8d9d5046cab58e9efba55640e28f"],["/categories/js/page/2/index.html","3b2a8af552497ed9c35ef3224cec45cd"],["/categories/js/url/index.html","a15f2d3c8e3b17c52c1a6954c7b7a302"],["/categories/js/原型/index.html","f024f07b4add92e7978a9b6c032de226"],["/categories/js/正则表达式/index.html","e144f2f56d01f219bc584fcfa69afcf3"],["/categories/js/获取html到fontSize大小/index.html","465c3b2256d1bdfbbbf3f5867729332f"],["/categories/js/获取url的各个参数的值/index.html","bec21fcc225793e2cc38c09a27462ed3"],["/categories/js/闭包详解/index.html","16f6882056baaafb8b08f9731786e662"],["/categories/less/index.html","d3c7da4ccc31f72278b2b8fde9f0492d"],["/categories/less/全局变量/index.html","09cefa8ec8669d03bcaaeda010645c5e"],["/categories/nginx/index.html","a9fd7241173ab18fbe2cb5ec268204a7"],["/categories/npm/index.html","90d5c88de056ac182c8dc1e339e27ef7"],["/categories/nuxt/index.html","6e7b60fbccbb1e7a977e72b321734cf7"],["/categories/nuxt/代理/index.html","ff2a2ce1d250ae4f1c72d547bb86e303"],["/categories/nuxt/国际化/index.html","cec5c2f170fe43069780c22beb5a6e75"],["/categories/nuxt/页面刷新数据丢失/index.html","194855a727e265dca2e3c7d2babd98fe"],["/categories/react/index.html","b57bee964529665c6a66a8cdaaa63ba4"],["/categories/shell/index.html","55cc1b8476fe958c8f5887a811280189"],["/categories/target/index.html","9c0eb45a29211732ca26ed5cb568c953"],["/categories/tiku/index.html","d6dc0de1e3ea97841a6ff604365131c9"],["/categories/ui/index.html","d2ee0d7c0d3940e67d145f30d7b1a41a"],["/categories/ui/ps/index.html","6d62f5548585145521d3ce7290ffaa3e"],["/categories/vscode/index.html","c82f43434faa8bfe4482bf35dfd5042e"],["/categories/vue/UI组件库/index.html","b61a96d5a4ffe4a42a32f7ae320ff19f"],["/categories/vue/index.html","421cbe5f71afd7a467b83403d329b23c"],["/categories/vue/router/index.html","b74508238c820297870bb3de274df19e"],["/categories/vue/vant/index.html","568e020887ea3951dc88fc03606b87d4"],["/categories/vue/代理/index.html","65bef3526561b77614644fe43538688b"],["/categories/vue/国际化/index.html","0874e384cb6cfe9ed14958019cb1638f"],["/categories/vue/时时监听网络的链接状态/index.html","f64a4938e9a4b68a589be61447abf357"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","84bc7d8fa170277d8d721561e3f216db"],["/categories/yarn/index.html","ef3ddf6f2f0cd95f98a55ee776979bd5"],["/categories/其他/index.html","9a62998b796d33cb42dca4492fe23b49"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","2bc22570d1ba8dc3acd6d13857daa629"],["/categories/其他/目标/index.html","7676fe8c1c848bfe4c59a73adf76f541"],["/categories/其他/规范/index.html","5bf37dfb9e9ab9cef62d99331f965857"],["/categories/其他/高等数学/index.html","6718381d6716b35a20dd8467eed8bfb8"],["/categories/图床/index.html","949e90d5007bd31e0a0195dba4e02118"],["/categories/小程序/index.html","2a2f0e120acc1ae4fea6a046f2854bb2"],["/categories/小程序/wx/index.html","2bd54b3907b54be5486c87cb9d633623"],["/categories/数据结构与算法/index.html","58ea26f4537975bf7138b50c25779d40"],["/categories/数据结构与算法/图形结构/index.html","132bc013b387ee668ad4760291787a24"],["/categories/数据结构与算法/排序和查找/index.html","cf78f67320564e5ce373aa371ba220b8"],["/categories/数据结构与算法/树形结构/index.html","2e52c48ed0b5ecf314200f751ad0b056"],["/categories/数据结构与算法/线性结构/index.html","fe2f3a70ec0d815443f03c2e80fc5b70"],["/categories/生活/index.html","d7d1e65d13531ff2d7d1c6fc57ca2dae"],["/categories/生活/生活杂谈/index.html","c53ce48382ba1403f78444b42176cbb9"],["/categories/生活/长大后明白的道理/index.html","764fa4b1eef5a68c678c984e05179678"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e3d823ba3c9660d0965a60e988210e7b"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7dc0d392dc49053646efa817f7bff845"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","877e64e545c9cb0195555ee61237750a"],["/movies/index.html","dd9f41225e663c3669848b29de841c59"],["/music/index.html","f667322dbadedf1b81fdb298fe8144e4"],["/page/2/index.html","5d63aa6cfcaf78acf45d34f3d3ce68b2"],["/page/3/index.html","80af2e8091acd84cc887e6dbb0f26beb"],["/page/4/index.html","27a0ef841acbeb449fb7d33417b4df2a"],["/page/5/index.html","6ebbbfd5315752a43b363b7019849725"],["/page/6/index.html","484edd499ac5491f70d5418c7022efe6"],["/page/7/index.html","8e775ffaef7a25dc050caf5de2de6223"],["/page/8/index.html","13124d4e0359e879627d738b49ade904"],["/photos/tangyan.html","47dd970c0b866ae18b79fdda66039d3d"],["/tags/Emmet/index.html","7cac87a91f49ebe0aff913ef8fda62a9"],["/tags/amd/index.html","72f75ba9d6e2636b86e63c7dfe4dffcd"],["/tags/cmd/index.html","5d27b14d9f5b7c88786bd6ee30ff230f"],["/tags/common-js/index.html","ad218c1d2a55931cb7759e0bc2c30cdb"],["/tags/cookie/index.html","b81bf42d43cf718cbe29df6796507b57"],["/tags/css/index.html","43b418ea4f46f5965fbe02eb88679354"],["/tags/css/page/2/index.html","19dfb14cf4118e89d54c9b82e3c535f3"],["/tags/docsify/index.html","a6179071e8a7d8472761094da9bcefcb"],["/tags/flutter/index.html","d02f80337094e6b289d4e42284431e17"],["/tags/gulp/index.html","c07e2b9cd421c4e513e047552f698913"],["/tags/hexo/index.html","4b1c47d48e8f33d0c0511c5c74f6f616"],["/tags/html/index.html","c9a6b2fb012cf68778533d995f4914ec"],["/tags/i18n/index.html","0d879c899f8cf4669535f8f298649158"],["/tags/iconfont/index.html","a46f42f5f03d2e866c32f51a318bf0b9"],["/tags/index.html","2fd335bd39f354767a653c79d311013e"],["/tags/js/index.html","b3ee021bf391a30494094189df46139f"],["/tags/js/page/2/index.html","6f5f99eddc4097f8cb9c45e0f2148fd5"],["/tags/less/index.html","eee85605a909a7dd3fd5ef3ad70dd179"],["/tags/nginx/index.html","4c61cf7bc4e5bef80bfb9e73098551b9"],["/tags/npm/index.html","1a4c3636689c605bbeaff8593ddea668"],["/tags/nuxt/index.html","fd22e70d64b58a1b6e2be5d39f7c4286"],["/tags/proxy/index.html","ddc17e14b103f29c92785edc013f954a"],["/tags/react/index.html","c45bd46f8d02061aaaa1dfacddd416c6"],["/tags/sass/index.html","93c0e708f5a927ff4eba3e3c496347e1"],["/tags/shell/index.html","a340fdb211ecd323b2063752aead4230"],["/tags/target/index.html","6e50a41bf9d94b5c26de86b8eb393b9e"],["/tags/tiku/index.html","6c0c0659aef8f6adfd98243f4655c976"],["/tags/ui/index.html","03059fa09afd52e67312325b51d36c0e"],["/tags/vant/index.html","18b473f41f7115b6ca851bc57dccd1da"],["/tags/vscode/index.html","8b2bae3507edf51d732a9b9e868a23f1"],["/tags/vue/index.html","5d857d6047c04cb89a48cee9cec65cd5"],["/tags/yarn/index.html","a9443c2f7f7821b34659d807e6c1d90d"],["/tags/其他/index.html","c2c87cd3f0738756c3c520078ce52795"],["/tags/图床/index.html","1a0992891bf2754acad52bafab105929"],["/tags/基础-一/index.html","0372b4cea768eb222a44878ce69eb507"],["/tags/小程序/index.html","94830913d3379c08a7b7112707cfca7f"],["/tags/数据结构与算法/index.html","2a228dd1a62a7284756aec6b141ee903"],["/tags/生活/index.html","092b57f61c21842e894773d3734ce3a9"],["/tags/目标/index.html","8adb92a94ef9eaacc4d4665297859074"],["/tags/规范/index.html","8014c91124b193e00271537299ae8b0e"],["/tags/高等数学/index.html","5411fa82648d3e3aa34bc7f7933d3479"]];
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




