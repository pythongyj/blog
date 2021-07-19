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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","90bcc3879315ffa63085a8d34ad3c741"],["/2017/09/12/css/block/index.html","29513f67881cf1bd395e3a0c5247c456"],["/2017/09/12/css/css-properties/index.html","61b4ede0fa6afbfb5a47a1c8b6c716ea"],["/2017/09/12/js/closure-js/index.html","1fe58378b1b0548c288132e76edd7bf3"],["/2017/09/12/js/prototype/index.html","8ecd21dce939bdd0e406e2b42ffbd013"],["/2017/11/12/cookie/set-cookie/index.html","9ca97c8c44b0bbc4d1b423fd07d4bf23"],["/2018/02/15/docsify/docsify/index.html","45718bf2e232c96d0686ebe9b91c2f89"],["/2018/02/15/html/divCenter/index.html","a408b9550e6d6d278188c5abae7eb4da"],["/2018/02/15/js/RegExp/index.html","9c70e046ff4d504f8c4b3d3f8b9809a3"],["/2018/03/21/js/js-set-html-font-size/index.html","d2596eafc8ca51d0377943ef64573a8a"],["/2018/04/15/wx/login-wx/index.html","1c2547010e002d00d283ff09a89b4d81"],["/2018/04/19/other/norm/index.html","89e234dfd6f9b571b3307acac97a5fbe"],["/2018/05/12/js/qureyUrlParams/index.html","f308bcff0f5db51128bf10b6c8b7c3aa"],["/2018/07/13/html/layout/index.html","8e41403e49ccd53c6f68674d498276d5"],["/2018/08/15/js/amdcmdcom/index.html","1f92ed2972006efd98b1da334cc63263"],["/2018/08/15/vue/vue-1/index.html","a161bdeed9512181752f0e568d26f478"],["/2018/09/12/css/css-line-text/index.html","c14145cd276b2886c2dcfee7e25ae001"],["/2018/09/12/other/classic-article/index.html","1eca310d0e5b8b92769a09ebef38839c"],["/2018/09/16/css/css-attr-practical/index.html","89b82dd562e1685cacd6cc18c8ae733c"],["/2019/03/06/css/css-margin-negative/index.html","770815008a7d8e1f5047b5cf8948a5e4"],["/2019/03/21/iconfont/iconfont/index.html","98f56703d075bcc1f0b6e24f3f0abee9"],["/2019/05/18/vue/vue-i18n/index.html","36c9f28e72e8d355c10d1777ca5f35fa"],["/2019/05/24/vue/vue-router-parms/index.html","5e447c75d9e8d661c0d69092ad60a22f"],["/2019/06/04/vue/vant-list/index.html","867db7be9adbf19680421652b7e075cd"],["/2019/06/04/yarn/doc_yarn/index.html","771c541d2bdfb7c994ed9adfd5c46c4e"],["/2020/03/20/hexo/hexo-gitalk/index.html","009ee76690bb139982cc4b06980901fb"],["/2020/05/12/vue/vue-proxy/index.html","f79d14ae8fdd23647083085e808d0503"],["/2020/06/30/hexo/hexo-move-mac/index.html","402e23a4c0503d5915230b0781ae4f32"],["/2020/07/03/vue/vue-network-online/index.html","6afa512e9364c12df1bfa2a70aecd382"],["/2020/07/07/nuxt/nuxt-i18n/index.html","e4f5541e8f7f657f5b268c72d066128e"],["/2020/07/09/nuxt/nuxt-proxy/index.html","ffc7efe2d2d52d2dd904b66c0a714b15"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","9186a42d88352cc2413c5044440a7942"],["/2020/07/13/less/less-var/index.html","3d56e812f334894475cda2f1297bd7a0"],["/2020/07/23/life/life-big/index.html","28fe7efdb70b1f417a651be9ad786607"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","26277611e73a88fddf50002866617d50"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","084f2ac2f2e322cfe7fb802700993735"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","c260fedf20c201e0308ec656120e2429"],["/2020/07/27/other/zsb-math-gs/index.html","350f7fbc4617e87d0ceff90d52b037e9"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","603f90c38070853aaec70416c6431e22"],["/2020/08/05/flutter/ambient/index.html","a27521f8f426502fb112f5ff8a32da0d"],["/2020/08/06/other/target-2020/index.html","1a2911176459d3a224bc4764ebf302c6"],["/2020/08/12/js/input-fixed/index.html","6b6ad7b1b2510af639ea478bee6d8f36"],["/2020/08/12/js/ios-android-time/index.html","018b828d8d4bf33068049e0bdeea5fa9"],["/2020/08/18/ui/peise/tonal_balance/index.html","fed1636be8ed9fbaae08e3e7be155407"],["/2020/08/20/css/effect/index.html","739e20a4d8b871363c056821dc47022e"],["/2020/08/27/css/unit/index.html","e7dc060243e015d86584ddc85394a480"],["/2020/09/01/react/antd-mobile-theme/index.html","587085234390f08a4f45de6b447cde8b"],["/2020/09/09/js/js-cookie/index.html","34e379a26f40f101aeba63c3d59703fb"],["/2020/09/10/vue/vant-ui-code/index.html","9f7e8de0fbea48d99016e100a9d7e38e"],["/2020/09/12/css/sass-script/index.html","5ecf6f6246d17864e8b3d868100c502d"],["/2020/09/21/js/log/index.html","33b182ef73829a6f79f0a687a3b55484"],["/2020/09/27/npm/package/index.html","f885640b34ac2302560e0c525a6a0a3b"],["/2020/11/02/html/emmet/index.html","6756408915af9ef5e43b386a136930c7"],["/2020/11/15/flutter/basis_one/index.html","a146953b2901becc6a1edee6c8f4ddb1"],["/2020/11/23/js/change-url/index.html","fc5bd3f8d90d32efa37fcab7a6fc3af5"],["/2020/11/26/ui/ps/delete-text/index.html","935e07114665dc40ee4f7bb5b87e2223"],["/2020/11/30/vscode/bg/index.html","844afbd1ef09915d62d4e6128c18a425"],["/2020/12/02/flutter/apk/index.html","dae22cdb14e32ac127ff0b6bf6b75d44"],["/2020/12/04/flutter/drawer/index.html","a57dd157da565c3097e44c88e03c02f0"],["/2020/12/04/flutter/l10n/index.html","b0f98ff20b455c982218f8f7bf912eae"],["/2020/12/10/js/es6/array/index.html","0eea556a6b6075b53992e7e9b0e5e8d9"],["/2020/12/14/nginx/proxy/index.html","8b4794477c2bc91b57927646be5053b7"],["/2020/12/18/css/fixed/index.html","07edbd083cdc9b8ebf304587cbf1ac82"],["/2020/12/22/vue/vue-3_ts/index.html","83b765ba0b08b48aabf76a1cc4ceb087"],["/2021/01/21/shell/zip/index.html","216c91bf55e15a7d0fae64f8966e175f"],["/2021/02/11/target/2021-target/index.html","24abc61b0db707bc9e1892becb132516"],["/2021/02/18/life/life-2021-218/index.html","872d92769dbdb42d75648a4b25688d50"],["/2021/04/10/other/picture-bed/index.html","b57642fa37b44adbd7dd84720c30eaa2"],["/2021/04/13/vue/cq-vui/index.html","2ae807fc93bc3e88fcf6333055908b20"],["/2021/07/05/build/gulp/index.html","4f50c328dddae2f31c3739344c7ea322"],["/2021/07/07/tiku/meiriyiti/index.html","2f5161319cf272df463947dce2c1adef"],["/about/index.html","19fce1ee8982c1f437c0cae35cf286e4"],["/archives/2017/08/index.html","4ca3abf18b577e8e532d7859e4c887b6"],["/archives/2017/09/index.html","427114489de9c48203e5c0425fced41f"],["/archives/2017/11/index.html","56e04067ecfb6e6e667652ac458a351a"],["/archives/2017/index.html","6c98a920b012301acb0ad48896aa2268"],["/archives/2018/02/index.html","8b347c3a3960ff59f914530817118ff0"],["/archives/2018/03/index.html","c58e0f21cffe708a3091742add59b287"],["/archives/2018/04/index.html","f48207ef9198fbf07182e88f861281b1"],["/archives/2018/05/index.html","3161732f59de56b3730c74d727648208"],["/archives/2018/07/index.html","ea01db4eaca49d1ad934fc29c09bfcdc"],["/archives/2018/08/index.html","9c19edf9eb21eb44c997dfc1c644f51a"],["/archives/2018/09/index.html","07e02db055db476b88a15b916c321abb"],["/archives/2018/index.html","9419eba9fa10eb71e4ad0b5d33a03f76"],["/archives/2018/page/2/index.html","7d35685a5f39ecc7d47569be7583f206"],["/archives/2019/03/index.html","7deb4dc828a1691799d29c081dd37c66"],["/archives/2019/05/index.html","b1ede8caf397554aa850aa13bab28755"],["/archives/2019/06/index.html","3adf85aefe7f43d91de96789707d237e"],["/archives/2019/index.html","5acf3eda1678c33a20dcad0214c75760"],["/archives/2020/03/index.html","5aa1da5adc8b23caa02a0ee9b7f39e8a"],["/archives/2020/05/index.html","3127e457001272eff4d5488814caa82c"],["/archives/2020/06/index.html","94baa843c5d454729d91cdc9d137cf02"],["/archives/2020/07/index.html","d806d06e3f61ba3f5ce05727a0f366fb"],["/archives/2020/07/page/2/index.html","ea68e7cb7edce925608361d0e2c0ff93"],["/archives/2020/08/index.html","e045708fcf3bce0e043ada2d4c0590f3"],["/archives/2020/09/index.html","4540892db5083af429173bc852b0457f"],["/archives/2020/11/index.html","1197748211ecf1c98bb8313887c0706e"],["/archives/2020/12/index.html","fd72fb92e6685ec688a3e468a691a820"],["/archives/2020/index.html","be244cd430c0835e206f95072cc312a9"],["/archives/2020/page/2/index.html","008d0b49c1c51d8f5ba20bb0f7bc4547"],["/archives/2020/page/3/index.html","b0029e43fe85674a2165c48494a4b5f8"],["/archives/2020/page/4/index.html","18c8bd86895446861e2d0ebe6992e867"],["/archives/2021/01/index.html","71aa22704d40cd75c774e98093d334aa"],["/archives/2021/02/index.html","ef517face386c6bfb4b9b7b652ce7cf7"],["/archives/2021/04/index.html","18ee9a7603ad8775ade0cbcf19710172"],["/archives/2021/07/index.html","7e62e6e58ecff9f8f30efc58f031662c"],["/archives/2021/index.html","9d41b087027fe790173343838d84c21d"],["/archives/index.html","835854ff1e3fd46f248033c850705599"],["/archives/page/2/index.html","3ac38a7a700276bfd455d23d75159592"],["/archives/page/3/index.html","27ca08fb7dc9e8b71430e313f2b06b03"],["/archives/page/4/index.html","737e01d1de5a4b29f5722df7418a2412"],["/archives/page/5/index.html","05ddde163dc63fa59283cb0741ed2b7c"],["/archives/page/6/index.html","0fdf55541405371dcb1a324c877f75ee"],["/archives/page/7/index.html","583c2f667a5a2bb5015ce98469f491eb"],["/archives/page/8/index.html","4c9c9c7e1fab1416ea3298c3f4e43c40"],["/categories/Emmet/index.html","896019324fb6f2d4fc567cc557b679fd"],["/categories/common/index.html","be413d725224e7d8732a0a2ba93e30ee"],["/categories/cookie/index.html","e09ff1bd6a205b4e658f48626e8de91d"],["/categories/cookie/设置cookie/index.html","2e1737e202a112ed0e50261b816eeb9a"],["/categories/css/fixed/index.html","82b88a4f5844c1b7f0b8faa91375adb1"],["/categories/css/index.html","78ff8fb21e85bac8e026a37e2cbbb5ba"],["/categories/css/sass/index.html","1f5e56b2446751488ca82b8915475fdb"],["/categories/css/三大特性/index.html","e5e898e75d5630faf95b14565f9463d3"],["/categories/css/不常见但是实用css属性/index.html","321b67b427f34132e2a6217e0f517007"],["/categories/css/中间文字-两端横线/index.html","7db91a343c9f3fa1697ccc14dfa244f9"],["/categories/css/块级格式化上下文/index.html","8395b98341afa14e7daf4124898f8dbe"],["/categories/css/水平居中/index.html","0552c39c94059b3b19cbc5f8df625b3c"],["/categories/css/负外边距的巧妙运用/index.html","3d5f721d08e77c1f23901be7aab95a06"],["/categories/docsify/index.html","bc3abd1da65159ef9435bb454048069f"],["/categories/flutter/Drawer/index.html","c72562045da1684d04abfe06619f1271"],["/categories/flutter/index.html","04cc3c536367de57ad1dddc8507cf63f"],["/categories/flutter/国际化/index.html","cccbdc20e99ff39f0fad27fd925cd8c9"],["/categories/flutter/基础/index.html","c1961f9f531126eede649827298a6dcd"],["/categories/flutter/环境搭建/index.html","46b1b0c30880510c64be74ca1c568c05"],["/categories/flutter/部署/index.html","74b583e0602d4b284f4abfccd6affd35"],["/categories/gulp/index.html","f836796ebc2e4ff261851a6bf4209f05"],["/categories/hexo/index.html","72f2a72d1d9d8e5597249b5cda948985"],["/categories/hexo/windows转mac/index.html","695bb11593dffed649258460624c635e"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","dce965bf32e9901f485862b6f9baacd2"],["/categories/html/index.html","1730ce51ac719cf3a8d05ae056bf6ef6"],["/categories/html/基础知识/index.html","f0aa32df33b53f0705df758c1a172c92"],["/categories/html/页面布局/index.html","a7c2482fe99141661a1e127f50171b5d"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","18c5abfb85384872018e32514285a7ac"],["/categories/iconfont/index.html","45e75786412b91371013156c5f70ef07"],["/categories/index.html","cf448dccefccf4dcb05303038d144283"],["/categories/js/es6/index.html","214a16151403978fede4c1f0021f503f"],["/categories/js/index.html","6dcaa9101629026246c399c6ca110792"],["/categories/js/page/2/index.html","77a100839d206d164e54392b81fd3a10"],["/categories/js/url/index.html","1f92e5f8359248c33723bb71adc99c9c"],["/categories/js/原型/index.html","85f5ac2403aa30dbdda8c8f9418e0199"],["/categories/js/正则表达式/index.html","4aee2dd4e66c5860b50569362ee1d78d"],["/categories/js/获取html到fontSize大小/index.html","238f652ededbe36ca3c5ac0077004bcc"],["/categories/js/获取url的各个参数的值/index.html","226f8c1db9f6a3b5d16cce9eb36e3077"],["/categories/js/闭包详解/index.html","fe9babc7fc831934f37a39f02c2e4a2d"],["/categories/less/index.html","fd12684518c096f6228f73f64b8f3cc7"],["/categories/less/全局变量/index.html","b2908a46cba4939fed54925c328b7b16"],["/categories/nginx/index.html","9c15d4691a42f238d53fc0543815abda"],["/categories/npm/index.html","d4519032cc80df8d4077431a195b56d4"],["/categories/nuxt/index.html","5fbd0a9f81177334940812268d8eae39"],["/categories/nuxt/代理/index.html","106f61bc8e74a28898bc2201cf83fef9"],["/categories/nuxt/国际化/index.html","3ab8e5babd1b1ea2f08b86f908b368ad"],["/categories/nuxt/页面刷新数据丢失/index.html","1072499f1247ea96bbb1e89a3da7c1ab"],["/categories/react/index.html","9f0d33f32ed64f70cba39edefd2dd420"],["/categories/shell/index.html","b3f6fe62fcf297298abd42eefea945f0"],["/categories/target/index.html","24178c98b3926b969f6890b9120e6bbe"],["/categories/ui/index.html","7e9ecdeee6acbed6515b440af7050a49"],["/categories/ui/ps/index.html","9b5abe798daedc2d261a722d739c9d3f"],["/categories/vscode/index.html","8367b589f3bc310305cfb3bb842bb9ef"],["/categories/vue/UI组件库/index.html","e958a082480235a77c9a27d035372e30"],["/categories/vue/index.html","a30490f00109b5c99155d5b8b8c62211"],["/categories/vue/router/index.html","fad0007d452c6e8948275e1b9365dd23"],["/categories/vue/vant/index.html","26d856fbd1e5491832ce258e50d66772"],["/categories/vue/代理/index.html","d81cac4530e601be2dcf1bae50e1fa38"],["/categories/vue/国际化/index.html","028ba77360f3d29a1299a230779288f3"],["/categories/vue/时时监听网络的链接状态/index.html","21019d26642eafb0ecc95e2942eb410b"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","939170e41f2d6c41c55daa6ab4020999"],["/categories/yarn/index.html","7504afdafeb846e291eaaef92bfcb28c"],["/categories/其他/index.html","01aae8cc122bbb7c12e8ec19176ddb7a"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","2e873f4562b3407a8b00de505e839bab"],["/categories/其他/目标/index.html","7b84384872e794dbd7fdc509340b7b34"],["/categories/其他/规范/index.html","88715f188baee3d3637142faba53c993"],["/categories/其他/高等数学/index.html","f6bdfad6582af89eae4aa601e7c21b50"],["/categories/图床/index.html","9072f4a14418e4d612ea959125d05e4f"],["/categories/小程序/index.html","dd64846039c229dd0775e8362133aaf6"],["/categories/小程序/wx/index.html","0652600f05abdb26fe857a3f061e721e"],["/categories/数据结构与算法/index.html","65aa218cca0f632366b59550a4292e11"],["/categories/数据结构与算法/图形结构/index.html","862c9e12e7dac8d4fc87a6082479e71e"],["/categories/数据结构与算法/排序和查找/index.html","e1417e7cbf4199f3c238455b94ed9ea7"],["/categories/数据结构与算法/树形结构/index.html","33a683205933dde6fd456d50f3f0e2ad"],["/categories/数据结构与算法/线性结构/index.html","ed256ee4538529e14432ced4628a3408"],["/categories/生活/index.html","baacf653e374a94de84bebea64f39370"],["/categories/生活/生活杂谈/index.html","0c5411058a231e7954791e33d3c44add"],["/categories/生活/长大后明白的道理/index.html","e381a29d1c7ec1ea5fa3f43cde69af93"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2077689b9585aeaad78e7e84a1305abb"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bf8c1fd057876389185fafb861890faa"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","988a20030625369acac02d4056497e3f"],["/movies/index.html","7caa0b697fa70a0766af73f4bfa8ed4d"],["/music/index.html","2eb4c23ffb24e2bcf15e2e484d5b19e7"],["/page/2/index.html","7c7a37f03e4fdcf6eac7bc5e3156c1a5"],["/page/3/index.html","880f52fe9b1bdfe201bb176af8d4e674"],["/page/4/index.html","7dd3a314e641839f179fcd7aca6d4668"],["/page/5/index.html","a17991ff53f3c79a1072d1cc1db1f720"],["/page/6/index.html","51e8174a410698b722c79c49c510209b"],["/page/7/index.html","aac461da7b630b8eec98c9c62088f2ab"],["/page/8/index.html","0ddeb64b8c91d175a4b3acb855f8c782"],["/photos/tangyan.html","64834cd7ecf24ec75fad6e1a24625b52"],["/tags/Emmet/index.html","27e141777796f08457272484b1c3d07e"],["/tags/amd/index.html","92ddf2b45c7ac8a2a260b9c26e5a3b40"],["/tags/cmd/index.html","bca35c0dce3d064331c440c7de6b4abd"],["/tags/common-js/index.html","189ba0efe0a8deaf14fdf8a828fcd4ad"],["/tags/cookie/index.html","1b1d191db0172bd8f13933a3452390a4"],["/tags/css/index.html","6d0be5dfd696541c3ee31fdfdd22667b"],["/tags/css/page/2/index.html","23c61d6cb0a67d124664aa5c37b68022"],["/tags/docsify/index.html","5f133babeda93f7d1feddfd3f055f678"],["/tags/flutter/index.html","d5b3ef3c382ec7a4be94261fa78d10f3"],["/tags/gulp/index.html","f7474b30a02151d94be7f3d6ebf2607e"],["/tags/hexo/index.html","93b12c4c3a7b56d20333a9418dda1f6a"],["/tags/html/index.html","fdb6a976e97a61f535f878ec84354136"],["/tags/i18n/index.html","6d1053fdf3ef3eb385519683aae5a498"],["/tags/iconfont/index.html","2bee8aba94b90a1616d801c2404b4e99"],["/tags/index.html","f6645bdf0df257c722d516e55cb5a0df"],["/tags/js/index.html","7afc6ff98a7c3a4a892a12039a132567"],["/tags/js/page/2/index.html","72bbc1a24ae6c818c4246237c3858c43"],["/tags/less/index.html","232a5b542802e4f20c05eb5fc4a8c41f"],["/tags/nginx/index.html","72d1ec95ac0d1854ef04054c484b8ab8"],["/tags/npm/index.html","5556a86965e1f7d401738873d3a4fc06"],["/tags/nuxt/index.html","bea6aa5ccfc6abe71a775f04ecf1c68b"],["/tags/proxy/index.html","6ada41c8ee06a9cd2321bc3fb4cfe875"],["/tags/react/index.html","d7bf5fc3b8d17ef634394d04a1812f31"],["/tags/sass/index.html","46a8f8e1194fe30573549e9d56905597"],["/tags/shell/index.html","63be8c9afd7bc11a174fdb447ad4088b"],["/tags/target/index.html","241bbf7c664917b5bcc0e300f3d883b8"],["/tags/ui/index.html","642ccc5da4d52570bc154479c6d5feef"],["/tags/vant/index.html","3c30ae18045e30dd71192448f88343db"],["/tags/vscode/index.html","9243758d0ba333593565cdfd1a43ef54"],["/tags/vue/index.html","0c5af4f874caf93e73d58084b2fba088"],["/tags/yarn/index.html","f84e9a48a5cc11f5b962a3280271b169"],["/tags/其他/index.html","741475acab5ff2dbd70585f2eed3708b"],["/tags/图床/index.html","e551d8b39b121a2ae57634e69043b23c"],["/tags/基础-一/index.html","cc110f834b347dd5f9a9b3c1bf8fcf66"],["/tags/小程序/index.html","48a8b119ec51265ffe38795935283826"],["/tags/数据结构与算法/index.html","599bb3ee0e07738ef277fbb8c526e789"],["/tags/生活/index.html","7b781dd75cbbadd8ed429e2291c0dfff"],["/tags/目标/index.html","24f7b52e9493721673caaa62ab9018ac"],["/tags/规范/index.html","4f61bc22b6c618d958fafc4a3dfbe9bb"],["/tags/高等数学/index.html","fb0e7bc275382435f7f0a06f11299fd5"]];
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




