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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","a81ac5b6d3ec1fda4c67663dda36edc4"],["/2017/09/12/css/block/index.html","1e9a0a6214638e8bec21b2592583ef83"],["/2017/09/12/css/css-properties/index.html","5b98e17b43a9aa30fd133baa76765bd9"],["/2017/09/12/js/closure-js/index.html","f8b6c1f39f90d9deaca5c615871013ba"],["/2017/09/12/js/prototype/index.html","e4efe44de1d2557e644b5939ff06ac4a"],["/2017/11/12/cookie/set-cookie/index.html","8c851ccd5d55c7594c9a40d326a91df6"],["/2018/02/15/docsify/docsify/index.html","8ca31e87152e27abfefeabc4fdcb03b0"],["/2018/02/15/html/divCenter/index.html","ed782e27f575ed1a67554f084a75a950"],["/2018/02/15/js/RegExp/index.html","159ba33c05f442baf255b6919311baa5"],["/2018/03/21/js/js-set-html-font-size/index.html","39f39cfcc7e143f22ab0ff2deba73294"],["/2018/04/15/wx/login-wx/index.html","f0d4cb87c43251288b6f9b61022f9b0b"],["/2018/04/19/other/norm/index.html","b5e0f14212e121b7311b5d260195977a"],["/2018/05/12/js/qureyUrlParams/index.html","e57df91e04c71f8c2f09fa44b89bc564"],["/2018/07/13/html/layout/index.html","ad4f1e9e5dffdc899e669e42f0ef6f5a"],["/2018/08/15/js/amdcmdcom/index.html","d508a46243a329c33536baa41a80c056"],["/2018/08/15/vue/vue-1/index.html","b7543a22f02c17ca733bc88fa5ff2a9e"],["/2018/09/12/css/css-line-text/index.html","4d0afaeec0251a30db314a361f5bb819"],["/2018/09/12/other/classic-article/index.html","ef1519aa1edd592a7a8db7f1f9775428"],["/2018/09/16/css/css-attr-practical/index.html","fe8fddd781058c021f2262e0fe4d241c"],["/2019/03/06/css/css-margin-negative/index.html","ce525cbc3669ac31830bb65770f077c3"],["/2019/03/21/iconfont/iconfont/index.html","4abb2b021080598bd4319b8fe5e84bae"],["/2019/05/18/vue/vue-i18n/index.html","df7134600d18713383b9d801417da14c"],["/2019/05/24/vue/vue-router-parms/index.html","8f01d8ec3e4b8815d0be86c27ac5a6a8"],["/2019/06/04/vue/vant-list/index.html","662ca4e01e034452dd6d11774648c5a3"],["/2019/06/04/yarn/doc_yarn/index.html","15ca658c45f406857f8e5debc570ebb4"],["/2020/03/20/hexo/hexo-gitalk/index.html","e60ef665222dae75a82c4e757aae8c80"],["/2020/05/12/vue/vue-proxy/index.html","b7878a6ed23f070320252f90e84680bf"],["/2020/06/30/hexo/hexo-move-mac/index.html","b1ab06baeb8a9cc1ce565f4ce941c6a8"],["/2020/07/03/vue/vue-network-online/index.html","bf086f16d83c124565bf1e6ecda07b1d"],["/2020/07/07/nuxt/nuxt-i18n/index.html","9d2d4422d5438c75bfed393a793b0cf1"],["/2020/07/09/nuxt/nuxt-proxy/index.html","7f742fd31a8bfbfa4b69c6799b531f79"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","810c04410002658567397ff53376d7a6"],["/2020/07/13/less/less-var/index.html","33702c88ee860121cf9c3ffc61374878"],["/2020/07/23/life/life-big/index.html","ea9d4e3339e2ff8e6068edc25f9f412c"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","eb1d23122dcd8e06be5fc7ed9c45185c"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","4b92297a8e763c11fdd0cafdef26de36"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","1ea041f686181fc02e958e1ad229f0b4"],["/2020/07/27/other/zsb-math-gs/index.html","1f60885ac87710e8127962b1dbe07260"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","95ab359eea7792804f0da018c62c2f66"],["/2020/08/05/flutter/ambient/index.html","130a51f362e585d65e969ff169b114d8"],["/2020/08/06/other/target-2020/index.html","9c12b1fc6ed1cdea46de22538887aa73"],["/2020/08/12/js/input-fixed/index.html","893a70dd2971d3f152b0858cda725276"],["/2020/08/12/js/ios-android-time/index.html","195308ce2f7a3be1a2fca83d3d425790"],["/2020/08/18/ui/peise/tonal_balance/index.html","3fda2f3bf77349dbac3fcc284b356b05"],["/2020/08/20/css/effect/index.html","c5bb0569443219d6ce0517ebc53c3038"],["/2020/08/27/css/unit/index.html","039a3600dadf3912060625020379473f"],["/2020/09/01/react/antd-mobile-theme/index.html","c0148aba5777cc4439fb88bbcfba9992"],["/2020/09/09/js/js-cookie/index.html","f22ff64f2cdc9edabea3f715eea36039"],["/2020/09/10/vue/vant-ui-code/index.html","9bf6735b6d6c84b2b154510e5c9950dc"],["/2020/09/12/css/sass-script/index.html","30f6fccc378161e4f73bcc275c4a6889"],["/2020/09/21/js/log/index.html","631083bb85fa1789af59feea2b4bf394"],["/2020/09/27/npm/package/index.html","477107e9496da9a3ce1bf176e822128f"],["/2020/11/02/html/emmet/index.html","6050062c9b0773469922330ac1c99561"],["/2020/11/15/flutter/basis_one/index.html","3cf345db47e832eaf35efba5ab9822c6"],["/2020/11/23/js/change-url/index.html","0b776d19e192245ff273890e72d47eb2"],["/2020/11/26/ui/ps/delete-text/index.html","007d73ac89805282b9b115e1cf34544c"],["/2020/11/30/vscode/bg/index.html","8028d4b90cb327ad70187dbf5c476ef1"],["/2020/12/02/flutter/apk/index.html","853e65df5bb412425333f1658b8e756d"],["/2020/12/04/flutter/drawer/index.html","45dd052ecf2c9fce1aa78a3d42910f08"],["/2020/12/04/flutter/l10n/index.html","fcc3da32cc50e4a38cdf7ecff5c35355"],["/2020/12/10/js/es6/array/index.html","a6055864d7d36eed1a2732ce3a92e165"],["/2020/12/14/nginx/proxy/index.html","b0ee3fb733710ffad677e2066bbe3feb"],["/2020/12/18/css/fixed/index.html","2e6c8d200b91492b65cd759a60e8e860"],["/2020/12/22/vue/vue-3_ts/index.html","16f9b9584652095cf721a444a988751c"],["/2021/01/21/shell/zip/index.html","b91c8724bec20a0d03a3108344d67620"],["/2021/02/11/target/2021-target/index.html","514447438e82b8921b8b45ff88796486"],["/2021/02/18/life/life-2021-218/index.html","9143c1eeb3694fec11f3674f273dd022"],["/2021/04/10/other/picture-bed/index.html","e59fb1bddb1642f7f3b52723700dc85a"],["/2021/04/13/vue/cq-vui/index.html","ffddabaea1764bc38554688c6a3eb2ae"],["/2021/07/05/build/gulp/index.html","c96947ca6394df408468e4510c102165"],["/2021/07/07/tiku/meiriyiti/index.html","5a824909269b2ff7db1502fed81e3882"],["/about/index.html","cb7ff57ea73b0d389d8f812b484e6400"],["/archives/2017/08/index.html","9cb1fe48020fff43adb4eb1af8b73b51"],["/archives/2017/09/index.html","d69ffadd3b2d2ce92b38d76580c43bb0"],["/archives/2017/11/index.html","498b3eeebe73a232e20ac22182d8264e"],["/archives/2017/index.html","238dcce3b89e15ae870be878720e71e5"],["/archives/2018/02/index.html","c744323141665b9aa3c314a8c97659b4"],["/archives/2018/03/index.html","fd1848fb0f7d179411df6fd4ef2b63d0"],["/archives/2018/04/index.html","1046df1ee536ac64ab2dab3b6d79f111"],["/archives/2018/05/index.html","35a225fe1ded40ff1c4fae0c60279954"],["/archives/2018/07/index.html","76e53e2a614de8b1a60d1068732319c5"],["/archives/2018/08/index.html","adeb58040f29c1e7ca9074d7f5917e07"],["/archives/2018/09/index.html","65d63cb8726b03cdaf72c754446f5a0f"],["/archives/2018/index.html","1571155666350060b6c1e3afd0548535"],["/archives/2018/page/2/index.html","ac5385ec658ec8106414810921b6d596"],["/archives/2019/03/index.html","1abb0ea1f41be0fd1d6102b24dec5565"],["/archives/2019/05/index.html","9fa3683c24ea0b0bc58f3cb4b661c207"],["/archives/2019/06/index.html","0dc2f4d62d44540c0a2d9bad5fb3189f"],["/archives/2019/index.html","4ccc2d4aa4d7ad9de0aa8284606db02f"],["/archives/2020/03/index.html","fab2a0c7374033bc1d56a4806d938c37"],["/archives/2020/05/index.html","ad62454a4c7888d5efa64d9226e934c2"],["/archives/2020/06/index.html","b6d3d8490f654461b79f1287f77ff286"],["/archives/2020/07/index.html","8ce189dd33cfe7714250a333186f0dcb"],["/archives/2020/07/page/2/index.html","023f53f71c835bdb745b4c2e5e5412d2"],["/archives/2020/08/index.html","eada67faa9cfbbcc03c2cd2cc04f630c"],["/archives/2020/09/index.html","9118c5f8f3834ed4a256409aec1ce99d"],["/archives/2020/11/index.html","8657dc62b4281ca8b0eaf2a3b67f85c3"],["/archives/2020/12/index.html","7a095c98c46231649ab43688da537423"],["/archives/2020/index.html","502ed1f15e29990d1d55d61e661b0c53"],["/archives/2020/page/2/index.html","7f7f22ef3e6ff68100ccd54629a94d0a"],["/archives/2020/page/3/index.html","81223bca846f96aeba29e09a6efb479b"],["/archives/2020/page/4/index.html","d8922cce6cf09d417945d75a701c21c8"],["/archives/2021/01/index.html","a353d06d7dd2f05c1043a1e422272894"],["/archives/2021/02/index.html","b4930a9a042ed9fca0b4987b1e0e2c40"],["/archives/2021/04/index.html","1f80b0e15c4a3834f748c7c7762c1d8f"],["/archives/2021/07/index.html","887f8190bb8568003c35242211ffc416"],["/archives/2021/index.html","8ad13f31469f640ce8fb723f6be1f902"],["/archives/index.html","986099a51b41bf16efb4c9dfa79a0bf8"],["/archives/page/2/index.html","25b0fa63145f48e25f85d8c80dab4d4e"],["/archives/page/3/index.html","0c6924225d41e410bdfc5554abe71963"],["/archives/page/4/index.html","39be72fefc951a1757dbefb743a8a3dc"],["/archives/page/5/index.html","d0ad8908b7f8ff5e3399d2d30b6b477f"],["/archives/page/6/index.html","b4922738720a7026ff891bf1920e1640"],["/archives/page/7/index.html","766096b842b46085b7ab68e995f26571"],["/archives/page/8/index.html","43029fd24375e12d289d537404159733"],["/categories/Emmet/index.html","ee685b9a00d72a65870839909cef801f"],["/categories/common/index.html","ffb954d22e7d402831b023f88c501b80"],["/categories/cookie/index.html","bdee56295a9e1de7b311034677060880"],["/categories/cookie/设置cookie/index.html","7c7de5874e9103a5246b2f05c4543f60"],["/categories/css/fixed/index.html","d76ec68fabc9e405cbdd7f6a9a3f51ac"],["/categories/css/index.html","85bfbcb96ad46c70d39279c81d8596ad"],["/categories/css/sass/index.html","fcd45a4bbe92b2badb1fe105f17fd32b"],["/categories/css/三大特性/index.html","e649c4b6e4de103700fcc2d976698785"],["/categories/css/不常见但是实用css属性/index.html","9244ea4634612df42a64a208ef0ffe19"],["/categories/css/中间文字-两端横线/index.html","3d0447e6777e1a4d246988b0285b2494"],["/categories/css/块级格式化上下文/index.html","57ade7e538755799ee1f0e33335b735d"],["/categories/css/水平居中/index.html","c3ce05506eef904aa8ddf84dee3043a2"],["/categories/css/负外边距的巧妙运用/index.html","fb761279bf2ed3dd8861b952b550578b"],["/categories/docsify/index.html","f81bd918ee15dc75ccd7af5aea31ce25"],["/categories/flutter/Drawer/index.html","37de73b5b36e790ba0200418f815e0cb"],["/categories/flutter/index.html","4f898adfeeae24d98869782d5ce499d5"],["/categories/flutter/国际化/index.html","323f44e8a037d19f9054ed71152f89cf"],["/categories/flutter/基础/index.html","881844b463b1fb55f4ba8667520a4ad8"],["/categories/flutter/环境搭建/index.html","1dec2b1dcf4c2f7ef1d5322375b1b208"],["/categories/flutter/部署/index.html","d36e424d525dc40b2a40585ff0218d19"],["/categories/gulp/index.html","f7253cc58a4d20ab6b387adacbc3fb7e"],["/categories/hexo/index.html","e38dd3cf781d07e08aaaaf1974cce6aa"],["/categories/hexo/windows转mac/index.html","011e5e191eda4105c25ce3b2045fe96e"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","a41d05485ef52aac82e56d05343f6217"],["/categories/html/index.html","b6ef99c05eb032e8adffa652d0921ef5"],["/categories/html/基础知识/index.html","4a64f218ca1b906b02ba9b95d527c987"],["/categories/html/页面布局/index.html","f94823ac8472ddb974bc2632325ea570"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","55f56a03ae4a55b3877963eaf0f3d452"],["/categories/iconfont/index.html","eba90321852c10c2a5ac89ef24bbd721"],["/categories/index.html","c65bdba7a3bc9c58a1a0d3d7423eb1f7"],["/categories/js/es6/index.html","8caa7bb8edc576398c08c442fab4674a"],["/categories/js/index.html","6f5b6434c7e5acc773c52e60ac90fbaf"],["/categories/js/page/2/index.html","c8faf7f4112b195a3af760400e76c28e"],["/categories/js/url/index.html","9d9efa27fe9d0e4d0ace22a3608254b1"],["/categories/js/原型/index.html","6f4f67d9d12b3dd8f5170498255e91d6"],["/categories/js/正则表达式/index.html","6969b22d0883e1f6e5f76375d9217c96"],["/categories/js/获取html到fontSize大小/index.html","52f6971c734c4f2326c5dbe9a77af87b"],["/categories/js/获取url的各个参数的值/index.html","8b5922d4ce964a56ee9d0eb24039ec7a"],["/categories/js/闭包详解/index.html","9753e6182ab5d10ea71e19853d990c93"],["/categories/less/index.html","561e67f27aaca3be02ee75114a9a60a4"],["/categories/less/全局变量/index.html","6b76f7635519e50f00baabd35ecc0c4d"],["/categories/nginx/index.html","20953808697d2471e67114fe87ccb323"],["/categories/npm/index.html","f88b84e02520e49227d3252ddebe8028"],["/categories/nuxt/index.html","ddbffee928e845985f95d7894fb39a6e"],["/categories/nuxt/代理/index.html","fba6722ae429d2279f1ea376e68c9e48"],["/categories/nuxt/国际化/index.html","3f8134ba3c2f79947942a75a9604080d"],["/categories/nuxt/页面刷新数据丢失/index.html","9211aa41cc1bddd56ce43fcd339a8b19"],["/categories/react/index.html","a8cbcb47cc1fa277ed931376478c8d72"],["/categories/shell/index.html","64c5186403a5b147ea8f0f415a4238f1"],["/categories/target/index.html","7b04117805fd39e9304fd012c283d85d"],["/categories/ui/index.html","e55b77873610149dc5d8a33c74c666fc"],["/categories/ui/ps/index.html","e71a4fbee737c8f7c68a269251ae678c"],["/categories/vscode/index.html","8ea9a070374d9656429c66130f75190b"],["/categories/vue/UI组件库/index.html","027a3249185da04e5faedf9e81ca709f"],["/categories/vue/index.html","a29e611df60308b18f63825e4e29a570"],["/categories/vue/router/index.html","e86de38a498ebfbc2e43ecd5b6f82632"],["/categories/vue/vant/index.html","3a2664753740bd3b11d4db218031be2a"],["/categories/vue/代理/index.html","727756b691bcd7d5fa04d48e761d9810"],["/categories/vue/国际化/index.html","8e7636444b821e11a287de4255bf4075"],["/categories/vue/时时监听网络的链接状态/index.html","6723546ea06180e8c84bed69d8f95e60"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","e758f25b7e78cbb0dcfbc08fcfab7ee4"],["/categories/yarn/index.html","39bf43d11c929670849b1025553298d4"],["/categories/其他/index.html","087d958bba7877331c3f6e68ebcd0afa"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","7fe2b143110b0145ec96cf7d9ddeb583"],["/categories/其他/目标/index.html","e7c07effe4c481f8da42327e81d7be57"],["/categories/其他/规范/index.html","a08cdc436515e3e0af7870f8a7cf7341"],["/categories/其他/高等数学/index.html","43f55e40f04a0b5cf359a41fe32d5c38"],["/categories/图床/index.html","ddf3c9ef19c8d712086495a684f21ea0"],["/categories/小程序/index.html","d74d69ef6301d331eca7d85bc2851955"],["/categories/小程序/wx/index.html","3511e276f57c8550f43ba192b9db739e"],["/categories/数据结构与算法/index.html","b6322cdafa0e5028fdf67651f1dfeb14"],["/categories/数据结构与算法/图形结构/index.html","20beb5c041a3f47532b487fa5878d403"],["/categories/数据结构与算法/排序和查找/index.html","036624bc36983ca7f542a8c0cbc64187"],["/categories/数据结构与算法/树形结构/index.html","569a92c87d73e3b23616c070da8d8127"],["/categories/数据结构与算法/线性结构/index.html","023adbe232562c6a5436a04ca961a56a"],["/categories/生活/index.html","98f659bd4d32049f5d40f4570d16ccc0"],["/categories/生活/生活杂谈/index.html","4fd8366067b256fc6d3982917aceeed2"],["/categories/生活/长大后明白的道理/index.html","8fd2fe928819cc3022b4d879d458cc7a"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4bbd7b90b4f9e4d2cc68e0bb019e06eb"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bfd12fb2f94065f7966d31e2a1f3c802"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","3984fa0d01082cdd086cc7180c1e691f"],["/movies/index.html","526b766e07b1536754dacb3ce7079ede"],["/music/index.html","d97f0a69c6ae5ceb8237c3ab0a0f2ca2"],["/page/2/index.html","2f48477550cf9b593c373be646de10cd"],["/page/3/index.html","68402ad5ddca7da8552846c17b459fb1"],["/page/4/index.html","74d56fb0f9d021bb670c678c9c3eeabd"],["/page/5/index.html","07ee62ebe5c56dc0c79e46d1ef170201"],["/page/6/index.html","04845dc6c7e04c30adc2149a0298535b"],["/page/7/index.html","7d41ee34cd30b934ac08db43cd45d463"],["/page/8/index.html","26e17d0df26e426caa93992f91d1004d"],["/photos/tangyan.html","a42657780dfc92a93a076f9b391840b3"],["/tags/Emmet/index.html","4c482fcbe64ab1df55f74050be1a259c"],["/tags/amd/index.html","bf09fceec8a1e193629b94156b64fc03"],["/tags/cmd/index.html","4976cc77f65ddfb30affa5e5b694d002"],["/tags/common-js/index.html","1ea24f8e175c6a5728d03cbae321e2e5"],["/tags/cookie/index.html","60730d2777ddeb0365c05cb715420dc7"],["/tags/css/index.html","207c395a4ccdb767e102bd41bb51e6df"],["/tags/css/page/2/index.html","dcdde645baf2a0951bcd0961db7a2534"],["/tags/docsify/index.html","acbdf848286f7caebffb48a3c73c12fa"],["/tags/flutter/index.html","8b2d20eb5205834d033b8da7502632d0"],["/tags/gulp/index.html","da698ba63e95b9f71d4875cc17f75216"],["/tags/hexo/index.html","cc69890d6dcdf2cd20cbb2f67cb4792d"],["/tags/html/index.html","926fc68d383f56fd2f06698c3b661006"],["/tags/i18n/index.html","873f601bbcc3d2fc89c9b06b3a995b75"],["/tags/iconfont/index.html","872f89fdcc72f94eb358534692d9a3ec"],["/tags/index.html","067ca085efefb61276c5f0b6c1c8a2b3"],["/tags/js/index.html","8b85af356a5ba280eb3cc262d9f8ebb1"],["/tags/js/page/2/index.html","eea9a5c9dfa9c88617143aca8330f930"],["/tags/less/index.html","4db569a3bc5df5377cc4ad1f2fea0920"],["/tags/nginx/index.html","9ce57cf4de35e06d91166c045a24eb10"],["/tags/npm/index.html","dbe4af9010181c4155f6d47593242a51"],["/tags/nuxt/index.html","1dab987e9dd4ac23d9ad6ee9b9f695f3"],["/tags/proxy/index.html","d2dc8b3920374a6c7bae2dc217b701a9"],["/tags/react/index.html","1def8795ec17238a1adcbbcbd1a58d84"],["/tags/sass/index.html","b8f2938a01f82886937c3fdff06eec8d"],["/tags/shell/index.html","6d8106a4572177a4bdb7c7bf01455a37"],["/tags/target/index.html","b8f868f2e753e66ba480e9352df82a35"],["/tags/ui/index.html","00060e6600bbeb27d592c60cab733f43"],["/tags/vant/index.html","0fbcceeaac50855bdd02132b50f17922"],["/tags/vscode/index.html","457b5681b14b8997988a8a266a07d359"],["/tags/vue/index.html","8584bd0e1af8b009fe43ce58a50fdf37"],["/tags/yarn/index.html","e4344c84a0d4b8dc88c051f3c70568d2"],["/tags/其他/index.html","c1e728e75d19d63da7fd4af0a7a1b866"],["/tags/图床/index.html","de9c7c329a074c8bfa15c92e1d8b8322"],["/tags/基础-一/index.html","31914049f33aab5cb9c5c618a5bc41aa"],["/tags/小程序/index.html","3fbb5c1f2090f30c102582fe7ca3066b"],["/tags/数据结构与算法/index.html","1bb560aa168a32cc239d680376d4e005"],["/tags/生活/index.html","38f3cbdf55089b7e045cb730101374e6"],["/tags/目标/index.html","30c8f7c5463a8612492a7d23569cf8f1"],["/tags/规范/index.html","af0697f41bdc443ebd9dd9e84a2953b0"],["/tags/高等数学/index.html","f5e4844dc004aea9c956ec2ac67c4dc4"]];
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




