/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "111ba1449943fd570ec715b70665d15e"
  },
  {
    "url": "assets/css/0.styles.e4652b28.css",
    "revision": "4328569f671503e0f214be69a7f233e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.abc03eb8.js",
    "revision": "4c4fb34729d8b01d17924b4a0a4f2fa4"
  },
  {
    "url": "assets/js/11.7deb1693.js",
    "revision": "4a9d884bacac1c0489511e7e77e45358"
  },
  {
    "url": "assets/js/12.d060ee23.js",
    "revision": "53f635469ca3104e18ab806a384c761f"
  },
  {
    "url": "assets/js/13.072947e9.js",
    "revision": "14cbe8ad1b3ad7fe9cb41101562e7b27"
  },
  {
    "url": "assets/js/14.dcebe8a8.js",
    "revision": "1bc6b0bb49601c3f79977b72e68ed8a0"
  },
  {
    "url": "assets/js/15.67af6a0c.js",
    "revision": "7d80f9c37f133fbfb5e0b3185448d25a"
  },
  {
    "url": "assets/js/16.3d6ee986.js",
    "revision": "bacdbebec9029881c6fb06b7e8571cf0"
  },
  {
    "url": "assets/js/17.5cba7332.js",
    "revision": "126f4fcd6669361be71b7c8e41cf2625"
  },
  {
    "url": "assets/js/18.797690b4.js",
    "revision": "75391eba7a0a915368f15306eed5d28c"
  },
  {
    "url": "assets/js/19.936a8061.js",
    "revision": "6dbd8014c90e1a9e26e4f24af698b22f"
  },
  {
    "url": "assets/js/20.9ff9cf9f.js",
    "revision": "d96868e3e84606fc9c43f6c6006acb4f"
  },
  {
    "url": "assets/js/21.497bd6cd.js",
    "revision": "dffa4c5bf4e6185586266426e0a88bd5"
  },
  {
    "url": "assets/js/22.f2cfbc5e.js",
    "revision": "48acb36e882dae8fc6b3fc4a621cbb44"
  },
  {
    "url": "assets/js/23.21921ed9.js",
    "revision": "dbd31ccdae87788d10e6aae2e6189c5f"
  },
  {
    "url": "assets/js/24.6f5c7c94.js",
    "revision": "1ac2382a021b5c479605413da080d614"
  },
  {
    "url": "assets/js/25.bd5abb4c.js",
    "revision": "f3295a914e93ff4aaa22c5be79afb45c"
  },
  {
    "url": "assets/js/26.47f0294c.js",
    "revision": "cd3961d135bf777a1d0bad581a0ff550"
  },
  {
    "url": "assets/js/27.4e769d0f.js",
    "revision": "ddf41284de7d5547e9c8b1aabf05aab8"
  },
  {
    "url": "assets/js/28.f388033b.js",
    "revision": "8cb97579ac6a21e119a3bc5f378a525b"
  },
  {
    "url": "assets/js/29.497856e9.js",
    "revision": "d661b30257ca9e9283c4ecdf08873327"
  },
  {
    "url": "assets/js/3.e23d2e11.js",
    "revision": "4dda72dbc226af8553c97901f5120f98"
  },
  {
    "url": "assets/js/30.39ad2375.js",
    "revision": "5e2190fd39a5206c461e3c1dbfaa1a97"
  },
  {
    "url": "assets/js/31.352dd50a.js",
    "revision": "df91124666e9fd90c4d6242e65e4f2e2"
  },
  {
    "url": "assets/js/32.4518d778.js",
    "revision": "e55d8e70d75d963b95065f07c57a74fe"
  },
  {
    "url": "assets/js/33.b3763067.js",
    "revision": "1a7e23ea3b803fc39c6b7dab115501bb"
  },
  {
    "url": "assets/js/34.0161234e.js",
    "revision": "e5a73fb9938d8fff62cad01e193834f3"
  },
  {
    "url": "assets/js/35.efda1d8f.js",
    "revision": "83baead2559ee05dd8572eb7751442af"
  },
  {
    "url": "assets/js/36.76286b0e.js",
    "revision": "fe3c86e2427ef96c615e2a364beace51"
  },
  {
    "url": "assets/js/37.48a40922.js",
    "revision": "f6acdc212c15e78c349f0dff9554dcdd"
  },
  {
    "url": "assets/js/38.fafc6647.js",
    "revision": "2747fc7784e9bc4e3b013a76e404fd82"
  },
  {
    "url": "assets/js/39.f37c8151.js",
    "revision": "17f4dd194286404d14bbdeb6d445a5fe"
  },
  {
    "url": "assets/js/4.8e0d770d.js",
    "revision": "d442d2595b041eb1d5971f2e6f351e5c"
  },
  {
    "url": "assets/js/40.4aad44e0.js",
    "revision": "81630d8d78110ffd950e85052a83caf1"
  },
  {
    "url": "assets/js/41.bd12b299.js",
    "revision": "fd274756cf70c44ebf27cb56fb82e198"
  },
  {
    "url": "assets/js/42.023d23fe.js",
    "revision": "6c7fa7ee2e4dbb2954cdeea1b0fbd4f5"
  },
  {
    "url": "assets/js/43.f0885d47.js",
    "revision": "282fdeb2ad241e9c52cc097caac36a08"
  },
  {
    "url": "assets/js/44.b916c33c.js",
    "revision": "470fd15096c445a093325e0ae60686d7"
  },
  {
    "url": "assets/js/5.763f9e55.js",
    "revision": "2fa353776cc172f4b3a27899c83f89a3"
  },
  {
    "url": "assets/js/6.7dbe80e6.js",
    "revision": "101ce54d567b21e24480d087ef107d68"
  },
  {
    "url": "assets/js/7.fc7078a4.js",
    "revision": "bb840c3d8aa0d9a293a8c8850c08f4b6"
  },
  {
    "url": "assets/js/8.dcb413f9.js",
    "revision": "b7551a93eb830b1025b38c610a53a477"
  },
  {
    "url": "assets/js/9.953f6bdb.js",
    "revision": "0a4c86cab8cec68b7a00c5816f8d7117"
  },
  {
    "url": "assets/js/app.1fb47c7b.js",
    "revision": "f1d7ccf88dc857908b0117bc477344cc"
  },
  {
    "url": "assets/js/vendors~composition-api.f8b2f9eb.js",
    "revision": "14b0db6802e47afa1480e081b8443465"
  },
  {
    "url": "index.html",
    "revision": "297f5fe80636dbfbb553e2f083cfd882"
  },
  {
    "url": "javascript/2019前端必用正则表达式汇总整理.html",
    "revision": "3f29aedd5d55ccbecc69e44fd57f1eff"
  },
  {
    "url": "javascript/Array.html",
    "revision": "659402893adbc8e413b632254625107e"
  },
  {
    "url": "javascript/Object.html",
    "revision": "14913dafe820fbfacceefb7c40370a44"
  },
  {
    "url": "javascript/URLSearchParamsFormatter.html",
    "revision": "df9e48e39f3d8654711a5aa59c731b95"
  },
  {
    "url": "javascript/下划线命名转成大驼峰命名.html",
    "revision": "77b83192e43583be9677be168686c220"
  },
  {
    "url": "javascript/冒泡排序.html",
    "revision": "95e68636ad5053769d07077cb08c3814"
  },
  {
    "url": "javascript/判断数据类型的方法.html",
    "revision": "9386c62383c8d6ee4f50ce89b6bdfffa"
  },
  {
    "url": "javascript/原型链.html",
    "revision": "10cc72c73ade6b73c23e0f7fc02dabbe"
  },
  {
    "url": "javascript/去除字符串空格.html",
    "revision": "01c1cd4d11ac7b311acc662b6ebbc254"
  },
  {
    "url": "javascript/实现一个call或 apply.html",
    "revision": "1a016c72f29537b8e13b9ee48dd547e8"
  },
  {
    "url": "javascript/实现一个instanceOf.html",
    "revision": "52e13a69d196fb4ec11271e6d359de14"
  },
  {
    "url": "javascript/实现一个继承.html",
    "revision": "d3eebee416cb3d643977f83f1412926a"
  },
  {
    "url": "javascript/带有记忆功能的函数.html",
    "revision": "b756926d0195e7e6e8f6cbb89c4d2d1c"
  },
  {
    "url": "javascript/快速排序.html",
    "revision": "5900e8af24c0f1a68844e19fe64f1917"
  },
  {
    "url": "javascript/手写代码.html",
    "revision": "8577b14bf1316f6f534d53a0ae111291"
  },
  {
    "url": "javascript/插入排序.html",
    "revision": "0aefb6a3cac6e71e8283e755a8b465b7"
  },
  {
    "url": "javascript/数组去重.html",
    "revision": "ae91a933e353e3f9a77f418a1348b407"
  },
  {
    "url": "javascript/深拷贝.html",
    "revision": "88387fc389d9b5884487a3a24a82ab80"
  },
  {
    "url": "javascript/节流.html",
    "revision": "5d98977f915b99c2fecf3fa7d3aea458"
  },
  {
    "url": "javascript/防抖.html",
    "revision": "3072346313b5778b161907a25d2bbe63"
  },
  {
    "url": "node.js/npm.html",
    "revision": "74999d1b1b606efc227e835198cd9bbe"
  },
  {
    "url": "node.js/nrm和yrm的区别.html",
    "revision": "ce865b258835834efbe3d75ccfb848d3"
  },
  {
    "url": "node.js/yarn.html",
    "revision": "b06bb9e5cab3779137b87756c3ceb119"
  },
  {
    "url": "node.js/镜像源列表.html",
    "revision": "575e1fa82f783b14eedcfc011bfc7202"
  },
  {
    "url": "react/react食用eslint的正确姿势.html",
    "revision": "867fab99af86710a085f953af0299589"
  },
  {
    "url": "system/mac os/安装node.js.html",
    "revision": "4a8dcc4d7ad961ff3b64722551c8ab14"
  },
  {
    "url": "system/windows/windows10系统数字激活.html",
    "revision": "423cae8b4b752e8f7bbbb1a2c9c9bb1e"
  },
  {
    "url": "system/windows/windows10系统重置.html",
    "revision": "7b2891224b8938287cf34dee9c18e8bc"
  },
  {
    "url": "system/windows/windows7升级到windows10并数字激活.html",
    "revision": "991b11035619c51c0164dc2c27e7d714"
  },
  {
    "url": "system/windows/windows系统下硬盘重装系统.html",
    "revision": "e9e6450d65ce46db52376702307159c3"
  },
  {
    "url": "system/windows/无法加载ps1文件.html",
    "revision": "49400e4890a6009e85d100d88080d978"
  },
  {
    "url": "vscode/插件列表.html",
    "revision": "81dffd6c3ad5fd0dd5193abb9e27326e"
  },
  {
    "url": "vscode/配置文件.html",
    "revision": "db3efd0acb20a62e4f7189272b912fbd"
  },
  {
    "url": "vue/composition-api/食用composition-api的正确姿势.html",
    "revision": "96517f4ef9cbb3fb232b7d445f374bd2"
  },
  {
    "url": "vue/vue-next/vue-next尝鲜.html",
    "revision": "921c0131e1fd7769af7214f1598155c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
