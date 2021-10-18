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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","64d2aa35bd9377a0d74b9d67353509df"],["/2017/09/12/css/block/index.html","e8a5a509a9250e5974a3162a80b33825"],["/2017/09/12/css/css-properties/index.html","5dc632f45b1f5078045b9964c9bfddc7"],["/2017/09/12/js/closure-js/index.html","e0569f7a38c64f3f4b7e79cc5bf0def8"],["/2017/09/12/js/prototype/index.html","680c6b8a4cb0a8688d6b36f850bf4f0e"],["/2017/11/12/cookie/set-cookie/index.html","326311f4979acff860ac45c79c8e0072"],["/2018/02/15/docsify/docsify/index.html","a79d4ad3b5106d81de64d5b8825c09a7"],["/2018/02/15/html/divCenter/index.html","0ec95b8903b6b84b52fcb454c1441bf5"],["/2018/02/15/js/RegExp/index.html","12c24928de008e13b518ba304e55e25a"],["/2018/03/21/js/js-set-html-font-size/index.html","ddf935101467e60cff5b8a0c3695530f"],["/2018/04/15/wx/login-wx/index.html","71b8b3ebaec50eb2a6a215dafeb78eb9"],["/2018/04/19/other/norm/index.html","fbf9f1f031e969950fe3ae1fd06329e4"],["/2018/05/12/js/qureyUrlParams/index.html","3132f849bafefef7350e70eed90eff8a"],["/2018/07/13/html/layout/index.html","936e7aa674c802418bcca5bebd25b6aa"],["/2018/08/15/js/amdcmdcom/index.html","7f87cae71f95ee450e669d1fabe0326f"],["/2018/08/15/vue/vue-1/index.html","22d6a7c7401aeefb84841b72f8c4985b"],["/2018/09/12/css/css-line-text/index.html","6837f12be6f50e840b557115139086e5"],["/2018/09/12/other/classic-article/index.html","69a6580b1ec5676a9c0dcbe3d4c56790"],["/2018/09/16/css/css-attr-practical/index.html","d4da2aff14ccc4b165e8370778fc6842"],["/2019/03/06/css/css-margin-negative/index.html","95ad0e37d16fc0a522c0f59679a2f1d4"],["/2019/03/21/iconfont/iconfont/index.html","815a8349e31e3ddfe984b7dda8d321ac"],["/2019/05/18/vue/vue-i18n/index.html","29509a919dd9584bbf1da75b6500f8a9"],["/2019/05/24/vue/vue-router-parms/index.html","55906807a14890b77b0d2f7ad31c8d8e"],["/2019/06/04/vue/vant-list/index.html","2ee3555e32e619b514f6fddae756b1bf"],["/2019/06/04/yarn/doc_yarn/index.html","ba6f99fceb34195d1fa0849e33357f0c"],["/2020/03/20/hexo/hexo-gitalk/index.html","506d27596a075b1e8637ada7f9ee2b4f"],["/2020/05/12/vue/vue-proxy/index.html","28c86d66370a5b617a39a662bc909302"],["/2020/06/30/hexo/hexo-move-mac/index.html","a9a5690cef7a33c44b6c87258d343639"],["/2020/07/03/vue/vue-network-online/index.html","6c47623e07214bc64f5ee59d98c16032"],["/2020/07/07/nuxt/nuxt-i18n/index.html","9115d60124883241aff8ca87abaab111"],["/2020/07/09/nuxt/nuxt-proxy/index.html","fe150be52bc96fab6384d9b6c0544730"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","c2007d228566c933156206e4bf0b68aa"],["/2020/07/13/less/less-var/index.html","db9f992ac3acf77a8f0ca905df375bba"],["/2020/07/23/life/life-big/index.html","d84300165aceeeaa5b4d4c72cffb759d"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","0a78555f0596ccea820f624de78bf887"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","a65ec43771e06bc18840222816e47036"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","2843c161077f5437887953a58ef60cad"],["/2020/07/27/other/zsb-math-gs/index.html","8f4e882d60b5f3c27207acb6df8dbb81"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","054ffaa84b909f7cb029f55245cf7d71"],["/2020/08/05/flutter/ambient/index.html","ff7cb1eeab31b0018891a5496bc1a073"],["/2020/08/06/other/target-2020/index.html","1258224f45185575f30cca2ab8c6a0ac"],["/2020/08/12/js/input-fixed/index.html","586851a91284eb44ce998385485ef2eb"],["/2020/08/12/js/ios-android-time/index.html","af2fbdd146924ca32520a5c5c7e43d50"],["/2020/08/18/ui/peise/tonal_balance/index.html","7e191e16e35177dac42b910b24973472"],["/2020/08/20/css/effect/index.html","32980fdc093db1b50dca8264ba02feec"],["/2020/08/27/css/unit/index.html","7b927ed27344c23e01a7f3dbb64ab681"],["/2020/09/01/react/antd-mobile-theme/index.html","32f82d00361f8b5bd0c2f540f39a8404"],["/2020/09/09/js/js-cookie/index.html","69132d9ea19460e03fbdb3e77213282b"],["/2020/09/10/vue/vant-ui-code/index.html","4d02a7b903a624f3773b904a785041ae"],["/2020/09/12/css/sass-script/index.html","b7550f9396672b91d3c95b5e23ff47f7"],["/2020/09/21/js/log/index.html","f6c74b73a61d42cd5a4c7424044ccf7c"],["/2020/09/27/npm/package/index.html","82a06ddd7410cec7a228eccf10448e2f"],["/2020/11/02/html/emmet/index.html","df7b5364a9219867ca0e73d06f112361"],["/2020/11/15/flutter/basis_one/index.html","45c3249d22c1d9c7eb22a342d741932a"],["/2020/11/23/js/change-url/index.html","a04e4886c4764096b09ec1a913bf0a0a"],["/2020/11/26/ui/ps/delete-text/index.html","4f896d64f7460229c667da229983bbec"],["/2020/11/30/vscode/bg/index.html","3d600bf55ec15c4746df72ab5757eca9"],["/2020/12/02/flutter/apk/index.html","c22078f398c01e18f4c5f727ba531016"],["/2020/12/04/flutter/drawer/index.html","5dc860c11507dd53011da318602afac1"],["/2020/12/04/flutter/l10n/index.html","0afdb35b1dc465fa6a65bb55bfb77c7c"],["/2020/12/10/js/es6/array/index.html","496d28e41d4c5f0ff688565f47c03b66"],["/2020/12/14/nginx/proxy/index.html","1485fe77e9d597bc7914e92a7a915423"],["/2020/12/18/css/fixed/index.html","e0bc8f1063c5ca3fd96e59bb6a7f8e70"],["/2020/12/22/vue/vue-3_ts/index.html","20e248064be69a1c6ddce2e8fef072c7"],["/2021/01/21/shell/zip/index.html","58aa8d317c457af1e27279a31621b3ed"],["/2021/02/11/target/2021-target/index.html","35f26d7c2a10372a648cc38ec870c2b1"],["/2021/02/18/life/life-2021-218/index.html","f661fca8bbb948fc1ea3c482bf878195"],["/2021/04/10/other/picture-bed/index.html","1eb9634ba8eb7bbd221e42a1deecac28"],["/2021/04/13/vue/cq-vui/index.html","b6f915cfa3eab15e04205ced00201c39"],["/2021/07/05/build/gulp/index.html","26286e1db87119748600e6aa8e970d85"],["/2021/07/07/tiku/meiriyiti/index.html","2d55e6222fd45bea617ac01fa9874d49"],["/about/index.html","f40618b6af591f1ee9caf5df8266406a"],["/archives/2017/08/index.html","19e42bcb8367a00f2d5068ef7b8c8378"],["/archives/2017/09/index.html","1577d2e46c4777932e2ecccf62cab1d6"],["/archives/2017/11/index.html","1dd8d86dcf4a434515cb4bbc34cc28b1"],["/archives/2017/index.html","4ba4ddc7f16b9c9ccc28c2fe19ebf3a7"],["/archives/2018/02/index.html","527ea5f20eddaee1762997455a4fbb16"],["/archives/2018/03/index.html","612fd5451d4ec517f0e0f568d9e12c9d"],["/archives/2018/04/index.html","d889a2dc67d8b73e0461397632626423"],["/archives/2018/05/index.html","de3eff9f2b3fff138261ade95856d5c4"],["/archives/2018/07/index.html","22c06fddc5f748ef4aeee526e6c718c1"],["/archives/2018/08/index.html","a1407ca2209bfa4bfd80ceaccb6993cf"],["/archives/2018/09/index.html","45c9313e9a552fa8401ce35d547be6a9"],["/archives/2018/index.html","ecc0711542a03b85dafad15ae9c56d4f"],["/archives/2018/page/2/index.html","b6cd59e3d3cf2638882ee25bfca5c167"],["/archives/2019/03/index.html","f27e205d5a8759722e207f82a293f7f3"],["/archives/2019/05/index.html","2b6703c8b33db6a8f211c6ac0f558b22"],["/archives/2019/06/index.html","983009d28cab8df31b9c849eb37f8593"],["/archives/2019/index.html","5a52cadedd3a44a243b0701f7d5a097d"],["/archives/2020/03/index.html","9bc6f2a153528a88cf3e04b5c202f0c2"],["/archives/2020/05/index.html","73649bee3cd46041101a9f7d5ccb4483"],["/archives/2020/06/index.html","62cc21f05a525e114a398c217c54ce99"],["/archives/2020/07/index.html","74c0c9347c7ab385dd773980b39eb8f5"],["/archives/2020/07/page/2/index.html","3a76fdf760f95b12b15a0caf8ecfe611"],["/archives/2020/08/index.html","a7085c25ddda52785f72606b04ed6661"],["/archives/2020/09/index.html","cf9046b9dd56108c1d6144199c05c70a"],["/archives/2020/11/index.html","3350ed400591944ddab4a86e166df6df"],["/archives/2020/12/index.html","db825c89513fa1a429a8366952cddc07"],["/archives/2020/index.html","7447cc45e6ebf91c5fc721e8053ea4ee"],["/archives/2020/page/2/index.html","d0b7bc3d544e65e9774f601774a10d51"],["/archives/2020/page/3/index.html","c7aa8f36e4ca7e7d1c6e036fdea5ca62"],["/archives/2020/page/4/index.html","5997bbf346d95d10861450c20774b065"],["/archives/2021/01/index.html","c606af70a31aa6b2e825fb780a77054e"],["/archives/2021/02/index.html","7d1341fa7ba001a1d649685046d13319"],["/archives/2021/04/index.html","3f4919512130f522e588e10f45bf5006"],["/archives/2021/07/index.html","8405cde470940b15ab1ab52246e4259f"],["/archives/2021/index.html","1af68125451b42410dc617cf819100c4"],["/archives/index.html","2eebffd6933504f7a6a861fb4919c59f"],["/archives/page/2/index.html","816934e4c2e8d0e3c6eed08844a49666"],["/archives/page/3/index.html","17829a424dd801cd2d2f12cafd35f0e1"],["/archives/page/4/index.html","c56451c9a1d646449e6ae17cd8b7586f"],["/archives/page/5/index.html","783aadc682d9b165631f5c66750db7f3"],["/archives/page/6/index.html","34596df0a8ed1cca677095d2c85bf258"],["/archives/page/7/index.html","e2d78f2373c2f44707fa937699abcb8f"],["/archives/page/8/index.html","6db176d0cafc248e68e602ba666c663a"],["/categories/Emmet/index.html","a32c3f6fc5bddc3e979f01b2ce0ae29e"],["/categories/common/index.html","cd9036d3d7cf5bf39fdb85b8bfc528b6"],["/categories/cookie/index.html","968296df75038d930066cb32b76873b4"],["/categories/cookie/设置cookie/index.html","0496e0db4f8d772b20d1ec3aed1a70cc"],["/categories/css/fixed/index.html","9d50fe0a94c637a75c6838225dd72c80"],["/categories/css/index.html","b342936d958f30fd2d4271c160e29ad7"],["/categories/css/sass/index.html","f05bbde241b51292be7a1d6b61dbb5fb"],["/categories/css/三大特性/index.html","387f44a9a1fa1766d5b177c1c9b07843"],["/categories/css/不常见但是实用css属性/index.html","c3b83d5e029a4c841090328622070c9b"],["/categories/css/中间文字-两端横线/index.html","de5180033b04f5c44df6cc5f734d04fc"],["/categories/css/块级格式化上下文/index.html","248df415d121a8d76a1d7817968a138b"],["/categories/css/水平居中/index.html","0276289bd09d790a393ab2bec09f1c9d"],["/categories/css/负外边距的巧妙运用/index.html","1938a3f4d02a1c3b24ab93e1c0def079"],["/categories/docsify/index.html","1ac8f1d181c2f27b7fdfdfe8ae10f134"],["/categories/flutter/Drawer/index.html","285488c8ebf6ac939774c423cce6cae6"],["/categories/flutter/index.html","47a39567abad82d10c485fdb8204a5d5"],["/categories/flutter/国际化/index.html","bb383fc42842f94418094eb3658d280d"],["/categories/flutter/基础/index.html","9a16cbc3e5db13e141232d9e5a3fb613"],["/categories/flutter/环境搭建/index.html","a1da10243304bf5d41196e1106faed33"],["/categories/flutter/部署/index.html","a77d3d3e42e84bc57d5ad4ba7482293d"],["/categories/gulp/index.html","7b0b218a01d4ea3819dce045051ba43d"],["/categories/hexo/index.html","c270a2c1e0a1cefd9bd72a28a106fefd"],["/categories/hexo/windows转mac/index.html","be86983cabd181ff1ee53b6bac0764e2"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","69648c27a60cb6cf11b4e057239724ec"],["/categories/html/index.html","2aba5338fc1e8dac0593cae119ad4484"],["/categories/html/基础知识/index.html","e48ffdbaa57913d7d848fdc7205921ef"],["/categories/html/页面布局/index.html","82868e97f12b35634cf5f4e333873d4b"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","59516131bb7bba7055c058158ef45461"],["/categories/iconfont/index.html","d8a202f1146929edfc20e9b3b9123a02"],["/categories/index.html","5f8cda84776fe4dab5892de28dd83a5b"],["/categories/js/es6/index.html","cc9509f7408807763fdc6fe357822be1"],["/categories/js/index.html","a6f25e0b17b4c271559108fc553248b0"],["/categories/js/page/2/index.html","8d9871f2fdba9a69b28bb1012ebce1cc"],["/categories/js/url/index.html","bff69511595be3552ffe0830f7cf20db"],["/categories/js/原型/index.html","d75daba3e1d2320e54b046690737fad5"],["/categories/js/正则表达式/index.html","537103e6e871b312e2e08811f2e6def5"],["/categories/js/获取html到fontSize大小/index.html","945136f5f04822c35178b855b188500b"],["/categories/js/获取url的各个参数的值/index.html","d83599c2a759eeb697672fc22017d941"],["/categories/js/闭包详解/index.html","0f30d15fa5734e96009a6d86f21954f2"],["/categories/less/index.html","eb7a7e0ddc3b229ab06bd2cba2ba1dc4"],["/categories/less/全局变量/index.html","14794f6809d6b17b99254a0cbd4cf00b"],["/categories/nginx/index.html","bed9e16bfd4b16d24c49d5aa9d969a2d"],["/categories/npm/index.html","97e3ed4f0cb7e4e85002b7f95fc976b5"],["/categories/nuxt/index.html","8cab36ee9ba328d68359ea8c317529e9"],["/categories/nuxt/代理/index.html","464d2393ae14f7c6f00f8181651a368b"],["/categories/nuxt/国际化/index.html","3066602adb1fe5f45e2efde7b2270c0b"],["/categories/nuxt/页面刷新数据丢失/index.html","af5ebe3ed4a68d07c879de713562b4b9"],["/categories/react/index.html","a3339e542d811c8c3cdd35990afaf067"],["/categories/shell/index.html","6de58ee3aacf9d48f087fc1cb971dcf9"],["/categories/target/index.html","7f3b986acac90fe24383a6bd0e8a5a2e"],["/categories/ui/index.html","429c17ad2f1678bd9b5269457cd1a047"],["/categories/ui/ps/index.html","20f8acaec0e46833391887df3023e511"],["/categories/vscode/index.html","4419beee5e99d061ddc8c65f60a7fa0a"],["/categories/vue/UI组件库/index.html","510dd093543be01598a275bd41597250"],["/categories/vue/index.html","6575ef7e672c89e14c47f2932c5fbc09"],["/categories/vue/router/index.html","a49028f419accdba5a0c54ccc16089f1"],["/categories/vue/vant/index.html","10c0d9bb150da351637f8cd803d1c147"],["/categories/vue/代理/index.html","b752edbb467b076205e9ee453d054d0a"],["/categories/vue/国际化/index.html","9c424c625080cc4f5bf57835a46beb72"],["/categories/vue/时时监听网络的链接状态/index.html","1eae1c4ca77a0dd14af71297e72dae50"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","8c39e8ed9bf496bc3c2b7815412adc29"],["/categories/yarn/index.html","7e727e3fbfd6e4390a68703e56097189"],["/categories/其他/index.html","1263f99b8f03a2497bf5aaa3213e8b04"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","9d9e57ae00b0c9fcd37ee40b3b86d4de"],["/categories/其他/目标/index.html","9468d9c8d73552541a41d071c683940d"],["/categories/其他/规范/index.html","c92c8af0d0c041d9950ad57a081a0c77"],["/categories/其他/高等数学/index.html","de7983dcea4936aebe92487c86fde045"],["/categories/图床/index.html","011cba8a6d4b1e35442ded0d1da169ca"],["/categories/小程序/index.html","d9f4a0d3de5299bec37897a3145dfbc8"],["/categories/小程序/wx/index.html","c24291d78356e960cc11dc6dbcbc11be"],["/categories/数据结构与算法/index.html","71d8099248d361036b91b4a87fd30627"],["/categories/数据结构与算法/图形结构/index.html","b4c409e846cd1b4990d27f29832d4b60"],["/categories/数据结构与算法/排序和查找/index.html","c7fc419eb25db1f0adf0c314c4437eb4"],["/categories/数据结构与算法/树形结构/index.html","ced8d85cc76f721da74b691c4858866f"],["/categories/数据结构与算法/线性结构/index.html","5fe696dc08f86ebe5ae6e30a5bdf0a7f"],["/categories/生活/index.html","3e8f3dccb0e17100921ded184a27d69d"],["/categories/生活/生活杂谈/index.html","113462418dde41d89bfea2b929a9b484"],["/categories/生活/长大后明白的道理/index.html","d8d6730287d93f0af3dcefd484ec6bc7"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4769423759ba9fc2604bba1484d91b84"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2dcd148d200578b695240fe95f297a63"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","2b691878031d7be8af6c2f5ea18a1609"],["/movies/index.html","88687cf46ff06e67b19a866cefc25359"],["/music/index.html","68397048a649f2cbf1d7dc2e53950a38"],["/page/2/index.html","c7b46d98d3931dbea607d23d31db8371"],["/page/3/index.html","8e20c8ed405163f782d6e9e260fc0c75"],["/page/4/index.html","1003d4c6425d3e6d0df9d2f9eb1f9902"],["/page/5/index.html","54b3f325caf2c38d1f4abc3482de6678"],["/page/6/index.html","bebe7d4fa79664a8de5571a263254758"],["/page/7/index.html","0f9fbdf344863ef5244e75122fc7f5f2"],["/page/8/index.html","e86996b6f030b7ac65859cc8f6f4edd9"],["/photos/tangyan.html","4e339abfd4d9937741aa9e716c69a020"],["/tags/Emmet/index.html","f50a6625573bb72b7a7f26e790681d84"],["/tags/amd/index.html","444bd5b0ad6f777ad43bf8931c6f7d3c"],["/tags/cmd/index.html","d14a168a5ebd89de4986e64946db1184"],["/tags/common-js/index.html","dd0f78f393d936f3bb01ce9fce14a763"],["/tags/cookie/index.html","5fb82ed38811d3304388935566720753"],["/tags/css/index.html","2c9cfd59ff48b9a125c2045074ed3ab0"],["/tags/css/page/2/index.html","a3ee82ac6579c59e588851bb1c63fec0"],["/tags/docsify/index.html","76ea30fd967056d8457f701b61ff99e8"],["/tags/flutter/index.html","6b5f7e95fff150e502bce7ba59f29a94"],["/tags/gulp/index.html","ed3842f6c3c3f718e7b9a07f9a9ba3cd"],["/tags/hexo/index.html","7f3bf63eafb9ee414998d67dc5569eff"],["/tags/html/index.html","e22e6e0b8e01577d20b121480f84287c"],["/tags/i18n/index.html","c0d914abc66237e74883fd7d5d0f5098"],["/tags/iconfont/index.html","fdeaf0a62c479bdfebdd5c19ef6eb177"],["/tags/index.html","66d0f3c666e21ef88c37a1026bf05a14"],["/tags/js/index.html","1c3787d89432d3c361095ca5bbf5df7e"],["/tags/js/page/2/index.html","ad1b5067d2ac1232d11c897966c76f90"],["/tags/less/index.html","e64245d427a0e34184bf899a8a427f02"],["/tags/nginx/index.html","1ea135f8547a582f2ea1341c67a8b0e4"],["/tags/npm/index.html","2cc7a30dec696c826b1bba3a4b8f4843"],["/tags/nuxt/index.html","7e4eecc990c410207f5e5d1aad2b4b18"],["/tags/proxy/index.html","39f3d83025e3337aa34918a5c1a5481e"],["/tags/react/index.html","3e9e926942799e4133f68da5945f20b8"],["/tags/sass/index.html","184fc60ff741cbbceab90410170e0001"],["/tags/shell/index.html","e44bac06eaa8a491f92d5be8dc5134d1"],["/tags/target/index.html","4c80838cee9943d56ec980edd6d963cd"],["/tags/ui/index.html","87899fcc023591bc0c037192d3bda6b2"],["/tags/vant/index.html","8f3db8ee7b4853c6656f2ca593edc72f"],["/tags/vscode/index.html","09cc6c067e80e030a2d53ae6dc02cf2f"],["/tags/vue/index.html","45ee7677e830463d0294c9ac5e09f51b"],["/tags/yarn/index.html","9078054ad7f289312bf78e6faf2662ff"],["/tags/其他/index.html","19d2d6c823f3895990c7d267302d4be1"],["/tags/图床/index.html","dc432baad49661eb2f680c6f7c2b8942"],["/tags/基础-一/index.html","169b085bab365f2f983c2d3781438b8b"],["/tags/小程序/index.html","5b0a0aef4667044a19160edd2f3f5cb4"],["/tags/数据结构与算法/index.html","764dfe61d3010e955be8d79356a9ba87"],["/tags/生活/index.html","68eea1fc7c0a3e016989bf362eb8d8c6"],["/tags/目标/index.html","3ab7887038d21baa6ecc10722814b35a"],["/tags/规范/index.html","8b4f0652fb2e1df2d23f3d7a2acdd3e1"],["/tags/高等数学/index.html","64c69f3e27cc082e6a84d796ca0c4cbd"]];
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




