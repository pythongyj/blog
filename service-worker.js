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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","158c7b54cceed7aff80face6497f1680"],["/2017/09/12/css/block/index.html","a5881af5a8336d05d852f2ac0f24a66a"],["/2017/09/12/css/css-properties/index.html","1c07d2c0dd0df5bc5cbc9ee4facdad0f"],["/2017/09/12/js/closure-js/index.html","175958a241d05d74a1eaf6d46b19712d"],["/2017/09/12/js/prototype/index.html","8f4cf9972d2303406145e9b582506480"],["/2017/11/12/cookie/set-cookie/index.html","d6bc19aa3a37552876f505b9c198b8da"],["/2018/02/15/docsify/docsify/index.html","d8e214d713a4408d30a0d6c2b4537ee8"],["/2018/02/15/html/divCenter/index.html","b5c2984cd1dbfe9244dc9bfbc4fea041"],["/2018/02/15/js/RegExp/index.html","a2262c766b282e78ec06168e33f29b31"],["/2018/03/21/js/js-set-html-font-size/index.html","9703366ee672605883c059030d0425df"],["/2018/04/15/wx/login-wx/index.html","aceb193bd0ad9e58e7ee90aa261f2028"],["/2018/04/19/other/norm/index.html","97a1c456cca5ae25ba91215a2052bee7"],["/2018/05/12/js/qureyUrlParams/index.html","52ca172b4a17e15e9ea0b5244323d189"],["/2018/07/13/html/layout/index.html","c305cf413272a67560ebbec08e385ed9"],["/2018/08/15/js/amdcmdcom/index.html","70aa3f9260a7430aff33d678516d8f91"],["/2018/08/15/vue/vue-1/index.html","bc36a7221c103e734bc5c31a3130d199"],["/2018/09/12/css/css-line-text/index.html","c502d88fec1766e74cfe53e2af1e59fb"],["/2018/09/12/other/classic-article/index.html","fdbe3cea87efc2a84ce0eb9b21a49cfb"],["/2018/09/16/css/css-attr-practical/index.html","2f4c398bd0dbbfed9518cd69da6eccb6"],["/2019/03/06/css/css-margin-negative/index.html","c7c05865382602f45860f8f324f39169"],["/2019/03/21/iconfont/iconfont/index.html","c4e7c857dddc8e5dd47e48f32fdf0ee5"],["/2019/05/18/vue/vue-i18n/index.html","3c8d1ccf0b5e6d2fa2913faf4d69879f"],["/2019/05/24/vue/vue-router-parms/index.html","3a18da49bf0b8fc9ebd1b329c8931ed2"],["/2019/06/04/vue/vant-list/index.html","6be29a1b2bd2969836ef2d374b4a7158"],["/2019/06/04/yarn/doc_yarn/index.html","e00b7b957cfb49e468c49e21a5e23b36"],["/2020/03/20/hexo/hexo-gitalk/index.html","254ffc16d2a8554f8f11e56d316c7c5f"],["/2020/05/12/vue/vue-proxy/index.html","ef96edcfb9cc24fdd12c8bfa5b7f4335"],["/2020/06/30/hexo/hexo-move-mac/index.html","adb1c5dbd21d314362f41de1e0c81b6a"],["/2020/07/03/vue/vue-network-online/index.html","49a8311438d9248ab747b474f9a69961"],["/2020/07/07/nuxt/nuxt-i18n/index.html","e298adba6d01b4c3c0d625ba6d8c47e8"],["/2020/07/09/nuxt/nuxt-proxy/index.html","c10f2abfcbda45601c6879c354ca37bb"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","60d962891c2d78c7c5ee8b1215f986f9"],["/2020/07/13/less/less-var/index.html","dc55cbecca2e45fef3305b27786d91c9"],["/2020/07/23/life/life-big/index.html","c321189a601d40c2b8bd66788b7ebb46"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","f7487d6c18820904080c209cc864653a"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","836b4ce825a486114f41965c61ad4528"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","865476f845efb03dedc7498ad806528c"],["/2020/07/27/other/zsb-math-gs/index.html","7c9e0638fecf73550f38bc9c595a99f6"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","98fcdcf695c875e7628f587114c7fe04"],["/2020/08/05/flutter/ambient/index.html","a695f36a12467571e184ec2e14c8ad99"],["/2020/08/06/other/target-2020/index.html","3c0ccde4e9ec4a56f2052ce897fd41be"],["/2020/08/12/js/input-fixed/index.html","5e2a42ff683e6091ca9270bed968617e"],["/2020/08/12/js/ios-android-time/index.html","ca6ad6beedff4c9b078aba9a1a0d1367"],["/2020/08/18/ui/peise/tonal_balance/index.html","a8d17a55585a97e03dd1282209056f9f"],["/2020/08/20/css/effect/index.html","c55ee96837be2e75cffe0cc4f714a271"],["/2020/08/27/css/unit/index.html","3c54154137d909f7fdfb965cb4980b93"],["/2020/09/01/react/antd-mobile-theme/index.html","d3f1b4e2fcd0861e3f9e1acb44b8c508"],["/2020/09/09/js/js-cookie/index.html","fe63798e8395bb83e9f66efae00e1ff0"],["/2020/09/10/vue/vant-ui-code/index.html","5755d55acb4e72b069b3e8166e6fb22d"],["/2020/09/12/css/sass-script/index.html","7a46c6498fca3a03baf02e5a1580e1b1"],["/2020/09/21/js/log/index.html","515c986969d911ff404d14d8386db392"],["/2020/09/27/npm/package/index.html","6cbdd6990c4cc2c2edf076761aa182a1"],["/2020/11/02/html/emmet/index.html","a88a572214755a531dbff3b47b988d0b"],["/2020/11/15/flutter/basis_one/index.html","c6889eda01683815388bc491d8217973"],["/2020/11/23/js/change-url/index.html","84ef55eb9d5025096891e97a467db1ea"],["/2020/11/26/ui/ps/delete-text/index.html","0dab52011b93b735f01823aec1cfb175"],["/2020/11/30/vscode/bg/index.html","6949425082eaadf6320cb7265c446b2a"],["/2020/12/02/flutter/apk/index.html","e8cd907952be1fc4fabb5775bee6676e"],["/2020/12/04/flutter/drawer/index.html","1c76370764bae5a9ce84d87d3e639680"],["/2020/12/04/flutter/l10n/index.html","7005ca3a2c899006d8752258992faca1"],["/2020/12/10/js/es6/array/index.html","ec64143570113353dd2f7bbe0a3e5b66"],["/2020/12/14/nginx/proxy/index.html","ceaaa1f651b53f6222535f399aa5056e"],["/2020/12/18/css/fixed/index.html","54543815e04e51694f6e14161e7417e1"],["/2020/12/22/vue/vue-3_ts/index.html","c0409b55b80d2ce06b0b103c27570531"],["/2021/01/21/shell/zip/index.html","121e3a312d939b2dc53cbc0da8a646dc"],["/2021/02/11/target/2021-target/index.html","346375a630e7ae195bbdf4b066127cde"],["/2021/02/18/life/life-2021-218/index.html","4aea87881f3e6273211389699149dcd5"],["/2021/04/10/other/picture-bed/index.html","b0f9bfdb0174243212c52b56934b4569"],["/2021/04/13/vue/cq-vui/index.html","8bf12014e44b15cd19b77d4826ac8521"],["/2021/07/05/build/gulp/index.html","6c407a1a48d8cda1cc283795f066bab1"],["/2021/07/07/tiku/meiriyiti/index.html","4ac74f16c38aeca19621d7eababb0b7b"],["/about/index.html","13ef83f5bbdf0862627c041a11b0c7f8"],["/archives/2017/08/index.html","3d30735d850c6e44ad25b065fa06bbca"],["/archives/2017/09/index.html","6dec437dc0b741aeca2be2530fba24e3"],["/archives/2017/11/index.html","2c622a9a98afe361dfcffa5563afa92d"],["/archives/2017/index.html","4869bf707e258c8691870113e88e9f1b"],["/archives/2018/02/index.html","a215396807d47a2360632cdd352aa496"],["/archives/2018/03/index.html","000f7c596881e8742dfc227aec0b70e9"],["/archives/2018/04/index.html","d5cd1547a948b6b2d1e115097ce0566d"],["/archives/2018/05/index.html","2b7d657004d87bc44c62dc858cc9f98b"],["/archives/2018/07/index.html","c8f1811ef6ca3f253005812c893c4c15"],["/archives/2018/08/index.html","c17a9d99fed2c2ecaec68e6745bc5d13"],["/archives/2018/09/index.html","63a7afb354d50c5bd1c3f8f3ef1ac9a7"],["/archives/2018/index.html","0fdcdc74ddc98ceec296b41f1db56a75"],["/archives/2018/page/2/index.html","c9feab803467e1a02d64279c1bb97a60"],["/archives/2019/03/index.html","3e0b0e8daf352906b4e6022c48d80dfc"],["/archives/2019/05/index.html","ea7dc657b3d225d70199862e2917bad6"],["/archives/2019/06/index.html","dab07833b483f2255e461f03531c2e6b"],["/archives/2019/index.html","7eb39db73c7f05c6128cb1a6df996ffc"],["/archives/2020/03/index.html","6df6c6513b6fc8169908970a136f35be"],["/archives/2020/05/index.html","cce2117c252113efd6569b8f034f712a"],["/archives/2020/06/index.html","1ae2399cf0e58e6870de81458f4589ff"],["/archives/2020/07/index.html","457d081b949228d23aca1087fc0e40c7"],["/archives/2020/07/page/2/index.html","3ea9295c15847330d0339c2cb921e032"],["/archives/2020/08/index.html","b6d276974116af852e3188c7cfd665fc"],["/archives/2020/09/index.html","2a517703607dc55b4c72707bfa4c402b"],["/archives/2020/11/index.html","2a32f8bab899d3170fb16460aa8ea60a"],["/archives/2020/12/index.html","cbd47dbf9b82054be93269c0111a28e9"],["/archives/2020/index.html","fad9849bf785f9060c656674196c89db"],["/archives/2020/page/2/index.html","c860fdc94a65fe4d1008e96d1415b42f"],["/archives/2020/page/3/index.html","81eff1a444371cd7ee989698d41e42de"],["/archives/2020/page/4/index.html","3ef9964a4d84cc05332bb6b611b95e9f"],["/archives/2021/01/index.html","54a27fa6c1177ae92abfa05d15d862ed"],["/archives/2021/02/index.html","902f19cc1ecd17c5ebf4f6cf543416c2"],["/archives/2021/04/index.html","6c747125b59c61617c6eb223f78dc367"],["/archives/2021/07/index.html","391bd3a0bf30780aaba68f4088b9ae5a"],["/archives/2021/index.html","386ba1f1b8236b151ae74b97e2ebf547"],["/archives/index.html","5da867bf95fdc4e761b2e0dc0ff07c23"],["/archives/page/2/index.html","9e2129cfb73a9034cc0a77b14e5c52e5"],["/archives/page/3/index.html","16e9dc1033e40b2aef53242f87d80e7f"],["/archives/page/4/index.html","9a9c0b12d8416bdcd9fbe5fe86542e6f"],["/archives/page/5/index.html","bea43d359c3bd8f4642d1fa07887cd9d"],["/archives/page/6/index.html","fd482368f5c6a0775404038a20814cdb"],["/archives/page/7/index.html","fcdf6d0922a9287cd06a0518e9d83f8f"],["/archives/page/8/index.html","875280d65231ae98fd9cee94c1c33034"],["/categories/Emmet/index.html","2fa49905474e0d1860ff90d496dd9c3b"],["/categories/common/index.html","f92f6b77398cc1577c4a6c55f7b1b08f"],["/categories/cookie/index.html","503ae045b92734e884d914e3dce6fa9e"],["/categories/cookie/设置cookie/index.html","054ad0458db0cecf97f9b3b926fbc8c8"],["/categories/css/fixed/index.html","a1510f4bfd53ed088b23cbd6cdfd0ea2"],["/categories/css/index.html","d363ef9afca889107df82e6680ccea67"],["/categories/css/sass/index.html","2549e7243882599c84b9632b061c6ba9"],["/categories/css/三大特性/index.html","0912ec6cff56d664fbdb18cfff8a70a3"],["/categories/css/不常见但是实用css属性/index.html","d70f1132e456dea1dda29b1c90fec347"],["/categories/css/中间文字-两端横线/index.html","00174ff2627f13527ee4c458cea5c082"],["/categories/css/块级格式化上下文/index.html","c02554accd33b29ef7bbb37cc696139f"],["/categories/css/水平居中/index.html","618e9881da965995e7c111dbc768b78e"],["/categories/css/负外边距的巧妙运用/index.html","4341377c603ae836233eb1cdf5fd9a90"],["/categories/docsify/index.html","4e7793c601d44e6be451c35682552155"],["/categories/flutter/Drawer/index.html","bcfb47abf169a8b7e650efeb4a9110d2"],["/categories/flutter/index.html","85b70212c556c26a4cfff0dbd2bc8766"],["/categories/flutter/国际化/index.html","8b0a83324fcd20883cbc90f025d22376"],["/categories/flutter/基础/index.html","05b235d598a4d2bae4588296c82786fe"],["/categories/flutter/环境搭建/index.html","b58adc3191e4f4e5a7d61e7379a866d7"],["/categories/flutter/部署/index.html","575a8ff97df06f81fccc2da527c1d24c"],["/categories/gulp/index.html","838d5672d74745ada844b7f0539a26b5"],["/categories/hexo/index.html","3ac32d7700110e503f057a783d438297"],["/categories/hexo/windows转mac/index.html","8048c82c48b827d163e55e168f3194ca"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","d4473acd9f50c90fe9fe40c89f84c8af"],["/categories/html/index.html","0ad511291363099ac62526bb5379fb0e"],["/categories/html/基础知识/index.html","3d3631f3fa84dfa2d7159db95e574ccd"],["/categories/html/页面布局/index.html","2e3fbbd7b0c5e7bcacc2bb5a5272a882"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","3b826303907fd100e6ce762dcd92572e"],["/categories/iconfont/index.html","3cfdde6b1b1bd958755bb43798a901de"],["/categories/index.html","3143beb1491abd2b2993231afc0e5ccb"],["/categories/js/es6/index.html","62d961b75410e940818f8068cb490149"],["/categories/js/index.html","5155fbca51fdd4d47014a8aa8bc1dc47"],["/categories/js/page/2/index.html","cc5ba538a88da8e67c11d2e4f9831c0e"],["/categories/js/url/index.html","2d69c87c120ade1c0581bea94fcccf95"],["/categories/js/原型/index.html","91062381b007ee35ac75ae7f0da50e36"],["/categories/js/正则表达式/index.html","4ad2ddef01c38e8d030f70ed54c0f8a2"],["/categories/js/获取html到fontSize大小/index.html","31edb08a154d9f78582033566687da5e"],["/categories/js/获取url的各个参数的值/index.html","499f1b365b4a943e60139b23cc40ba2e"],["/categories/js/闭包详解/index.html","f9437145dce0bbf15cbcdbf896cf1235"],["/categories/less/index.html","c14cd1cd663fb815e5acdd7c50ad6409"],["/categories/less/全局变量/index.html","9286a5241f047824a96371f0ff858dfd"],["/categories/nginx/index.html","aff38a290aab0cc2c66bf240f4c37235"],["/categories/npm/index.html","3f0113ee00c171d5a082eb0b06ebaea0"],["/categories/nuxt/index.html","d0ef8c655bf1010acf050a7b36323aed"],["/categories/nuxt/代理/index.html","11a5178bbb5bfb1e8db228f85193794d"],["/categories/nuxt/国际化/index.html","40e389dd1b3c45beb7448e700f0809f1"],["/categories/nuxt/页面刷新数据丢失/index.html","094faccb131f8b9d18d534ab4884153d"],["/categories/react/index.html","6c0b17dca44d2c0b6b84ca219d23eed1"],["/categories/shell/index.html","7f873c46bdc1213933b53c123cddc2cd"],["/categories/target/index.html","3847463b19e51217c4700231353106a6"],["/categories/ui/index.html","f2e46b416e38633db698a5f233f13144"],["/categories/ui/ps/index.html","c85e6e6c4ec3a70d5156a753f1524a27"],["/categories/vscode/index.html","cf37d55eedf26a292594444484e9abf8"],["/categories/vue/UI组件库/index.html","69d6fac929c29529dea05283bd2c64a9"],["/categories/vue/index.html","0a8ea194134b71bcebe68bdf3eb5e571"],["/categories/vue/router/index.html","410a53b5d7d33209279c3fb66afb1a5e"],["/categories/vue/vant/index.html","18dc9d12fee9ca4a42c1a25d7d6b3989"],["/categories/vue/代理/index.html","ea9bff7cf9e7179925c032d59f43e9f2"],["/categories/vue/国际化/index.html","4f1b2fc79b3e5e546c05ebfb432cb972"],["/categories/vue/时时监听网络的链接状态/index.html","bc5c93742a784fd1bed4bf3c8ffd93b0"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","6f1fb197c9250cca10d92948b24d9f85"],["/categories/yarn/index.html","960c50d7dc7ffeebbb21b0d485051e76"],["/categories/其他/index.html","2500c7e4540666e142a1317ea671e820"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","2e40412d4ded8adac523989b67fdba75"],["/categories/其他/目标/index.html","3449c82eff72d3530375093ea12f7e47"],["/categories/其他/规范/index.html","6c230f86bce4923d57993fa3c31f3ad9"],["/categories/其他/高等数学/index.html","c2613132c35c9d081a2a41a24fdf0874"],["/categories/图床/index.html","8473fd408b88f69bea1795cae3a09965"],["/categories/小程序/index.html","ef79bcd39b2c2c1b5a650d53b50d78a5"],["/categories/小程序/wx/index.html","d569195652651e73fa1653f21e8af156"],["/categories/数据结构与算法/index.html","7ddc74917df63b74001d7fe5af91b191"],["/categories/数据结构与算法/图形结构/index.html","af8ca925a93fa6c86032f44c074cde9a"],["/categories/数据结构与算法/排序和查找/index.html","38ccebce407f646f9a01e874abc6988f"],["/categories/数据结构与算法/树形结构/index.html","89f08cbfd75239ec46377a41befe7468"],["/categories/数据结构与算法/线性结构/index.html","6c5af3d765fa80d5c6a7ceb6088186a8"],["/categories/生活/index.html","1ef3957b5a64221d3cf32070cefc312c"],["/categories/生活/生活杂谈/index.html","de6945f3335ed65e2e9f248850770b3e"],["/categories/生活/长大后明白的道理/index.html","8294c04e2804689d434322f59770be76"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6c7fc4e475f714da9e4f7dcc2f60063a"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","44914878fef75220e1e59c4f56a92b1c"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","f3d70b68c31e60073ed299b2803ae800"],["/movies/index.html","e94f0f290424d8fe699c3cba6c2130bd"],["/music/index.html","f1486f2ac077a7eafdaf7708abff7d86"],["/page/2/index.html","c5582e54f096db090609718bcd8077ac"],["/page/3/index.html","b9dc3d84aee93277c32d3fe281a637a1"],["/page/4/index.html","7eba3e5983970e86aea8548f8d6e258a"],["/page/5/index.html","2440d5df210030e45fe3754e841afba5"],["/page/6/index.html","ff58dbc888eca859c17371c994710a3f"],["/page/7/index.html","5ef0f7be9fcfdf146577803dd4b39f4e"],["/page/8/index.html","13cfba788b08f2600afe7c4939a885b8"],["/photos/tangyan.html","03a78db14631c313d94cc0584d2f4181"],["/tags/Emmet/index.html","f83d706fb28deb36ff7bb9cc558d329e"],["/tags/amd/index.html","b3fa4d2c453234d9ad6870e28aeb139c"],["/tags/cmd/index.html","dd4b2431e849cb00e5bc13563d9ebdb0"],["/tags/common-js/index.html","acec4a317d0ee70ddb9016ac401ae954"],["/tags/cookie/index.html","282146e3c63b4bcabf58d80529cc9513"],["/tags/css/index.html","97b0221fb45ee935a4f103f60462460e"],["/tags/css/page/2/index.html","ff6f09435f41faca63da73e6107b224d"],["/tags/docsify/index.html","17f378f3e61b5453b23f5bade0cb9ec0"],["/tags/flutter/index.html","224280244abd25957e236c4019a7119b"],["/tags/gulp/index.html","a2044b26b3e9f4b663a8a56c576e9e83"],["/tags/hexo/index.html","8c853c42f40d36964ebeadf2b81562e7"],["/tags/html/index.html","872a2ba4d51256554105333ad8aa5ee9"],["/tags/i18n/index.html","673fec7048abb3ae2385cd0bef16ca6e"],["/tags/iconfont/index.html","ec12c567a87452d9584a8b731b05b2bf"],["/tags/index.html","26a14e0fd6ac98bf98c7002e4ff554cc"],["/tags/js/index.html","08fa7133ac59693e667c98e5984ebb24"],["/tags/js/page/2/index.html","5b63acf9a028353fe4f4c47ff0756015"],["/tags/less/index.html","68ce11a761ec60e2fd929f9dbb22936c"],["/tags/nginx/index.html","27121cf05413ce34bfaedcebfa3f398d"],["/tags/npm/index.html","4f813a425daacc719caef8fc924c4cd8"],["/tags/nuxt/index.html","34e2b52ebbe38319d5c9d69907b76a7a"],["/tags/proxy/index.html","013c5b6491c9a2f5dc125e09d211614b"],["/tags/react/index.html","eb5915475d39e997f1f3a186460198c2"],["/tags/sass/index.html","4e0fa27344e221f6659f21ee31687f79"],["/tags/shell/index.html","71f6310c95f5d75541a604a59717b967"],["/tags/target/index.html","39259c2bd64b34cfcbafb134c02f801a"],["/tags/ui/index.html","1da78faafd55a2004ce6bf51edce9ef9"],["/tags/vant/index.html","4f961cd97855c5519ada17316090cc19"],["/tags/vscode/index.html","f6e97e22e570c396e8122d68c48226a7"],["/tags/vue/index.html","e148ad032bf0fd4cc0fe9a2e78e9becc"],["/tags/yarn/index.html","4ee8d21bf01da79c46d7b9c1a14a7e08"],["/tags/其他/index.html","3ef3bed1adb4c32e3ec9a2c43c3b4abd"],["/tags/图床/index.html","a9d1cb31694bd5ae43da8481d5b72859"],["/tags/基础-一/index.html","98b11dba3bc6dc89eb56e150da8080ad"],["/tags/小程序/index.html","1ff27c02a2a3aefee7f254db62866d92"],["/tags/数据结构与算法/index.html","ae3ed7cf0895e2d71897b16fb2ea73ce"],["/tags/生活/index.html","f15dc6663cb28f6d8063ffe4d689b673"],["/tags/目标/index.html","47f711349789bcaf213c1168c004c46e"],["/tags/规范/index.html","93c5dd87501daf55b5e236ff512b6527"],["/tags/高等数学/index.html","5cdff5549870a383b9cdfb4bf1bba518"]];
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




