if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-fa8c4ce5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"f21c379cc1d8826275703e75f10ff4f3"},{url:"js/extensions.min.js",revision:"73cc2b66f2ddc50354256dc6b065af7d"},{url:"js/stencils.min.js",revision:"98924b5296c015cef20b904ef861eeea"},{url:"js/shapes-14-6-5.min.js",revision:"f0e1d4c09054df2f3ea3793491e9fe08"},{url:"js/math-print.js",revision:"0611491c663261a732ff18224906184d"},{url:"index.html",revision:"8b5b1cf07fc74454cf354717e9d18534"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"4f2c07c4585347249c95cd9158872fb2"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"d45531d32424a3d6673bfc5b807ab4e6"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6d5a85e70c7b82ba685782ca6df2b9d5"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"c6552981ba1add209fe3e12ffcf79c9a"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"fab9a95f19a57bb836e42f67a1c0078b"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"d089f12446d443ca01752a5115456fcc"},{url:"connect/confluence/viewer-init.js",revision:"2bd677096ebffd3aa5cab0c347851e3f"},{url:"connect/confluence/viewer.js",revision:"a9d84488d17425d28e5d85d464e0a8f8"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4c58f3a1a4c99b1c4264593b6e05100b"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"352d2782274de07617d117926b68c205"},{url:"connect/confluence/includeDiagram.html",revision:"5cefef0227d058cf716d1f51f2cf202f"},{url:"connect/confluence/macro-editor.js",revision:"412bc4b87e630b697a40f247c579d398"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"4a867862bf904c7ad3a64df7dad16418"},{url:"resources/dia_am.txt",revision:"4689225def33ebe303b3cb139853496a"},{url:"resources/dia_ar.txt",revision:"7f304c86dc394b9af1ad6164c6d3ddd5"},{url:"resources/dia_bg.txt",revision:"d61d74692a5bf45f73fc93f1d7e87920"},{url:"resources/dia_bn.txt",revision:"3872321b45397def596cdf1bda972b28"},{url:"resources/dia_bs.txt",revision:"a71af7c97bdc76f5aac426df06b4e3f8"},{url:"resources/dia_ca.txt",revision:"0157e5c040a2f8267eb9ca49d22e3826"},{url:"resources/dia_cs.txt",revision:"333a3ee5b7b7df98971f6d19a21f39b5"},{url:"resources/dia_da.txt",revision:"6cb7a6e408feed6af210b6d056e347ce"},{url:"resources/dia_de.txt",revision:"18e94ca0a4b7186bffd5be4469bd2034"},{url:"resources/dia_el.txt",revision:"f61edf46348bb30a2167a15ebf5c279d"},{url:"resources/dia_eo.txt",revision:"6c7972069739da31ef54bd86633d0ffa"},{url:"resources/dia_es.txt",revision:"7d7e05567922e5e513161b1dee485077"},{url:"resources/dia_et.txt",revision:"99497a7ed1e75872b306b0f644e0293d"},{url:"resources/dia_eu.txt",revision:"dee2e4b5cbf36d918d2680cd820396c5"},{url:"resources/dia_fa.txt",revision:"adccf1eca87f7b03787ace14c25d69b1"},{url:"resources/dia_fi.txt",revision:"d4ce04c27dd20140847809f289fae661"},{url:"resources/dia_fil.txt",revision:"1e4a095234dab2b0f9bf46c93954227e"},{url:"resources/dia_fr.txt",revision:"69e45804fef71e02de20e2b630b4d1a1"},{url:"resources/dia_gl.txt",revision:"0669d8f3ec00ead8714d58af07d24d66"},{url:"resources/dia_gu.txt",revision:"b608a7aa6c6fc2f131be132388b629b0"},{url:"resources/dia_he.txt",revision:"9aa9fc87c0a97f0bd241554b9b4216b6"},{url:"resources/dia_hi.txt",revision:"d8c988437bf2d9c80c44a93055c5c5f3"},{url:"resources/dia_hr.txt",revision:"e50f8893d4fbf00434de72ec9d109780"},{url:"resources/dia_hu.txt",revision:"f8b6b0735c787f7e655da7127e84b930"},{url:"resources/dia_id.txt",revision:"5466988af743d857a245c8f4f01e5159"},{url:"resources/dia_it.txt",revision:"a32f008225133eefac800cebddb8ddcb"},{url:"resources/dia_ja.txt",revision:"a683a7cd55e67852c6d639f8f4ab0a9f"},{url:"resources/dia_kn.txt",revision:"e73e06abe7f40a5734d491292e89748d"},{url:"resources/dia_ko.txt",revision:"9856ddd95c7b25be26eb99014968dc9d"},{url:"resources/dia_lt.txt",revision:"c1c24186569131733bdd45fd98d19c33"},{url:"resources/dia_lv.txt",revision:"c93d5d21c6d5864623db09c47cdb67ef"},{url:"resources/dia_ml.txt",revision:"70bd1e5024c8fb8d234575dd3e59c954"},{url:"resources/dia_mr.txt",revision:"49fb0b282abd23a20b6f818b76fa70bf"},{url:"resources/dia_ms.txt",revision:"a86c345ad3266ec55ca2f645a5043483"},{url:"resources/dia_my.txt",revision:"4a867862bf904c7ad3a64df7dad16418"},{url:"resources/dia_nl.txt",revision:"6ecd54a5d4376288499420f1bad7cb5d"},{url:"resources/dia_no.txt",revision:"787c1ef695d70116887c87bf55112b01"},{url:"resources/dia_pl.txt",revision:"efce793a77009b73b4d491e4678f5207"},{url:"resources/dia_pt-br.txt",revision:"68b48b305ed1c63f5fd55af096ec3b5b"},{url:"resources/dia_pt.txt",revision:"82f0affa616995eafd8c7f0151d1662f"},{url:"resources/dia_ro.txt",revision:"0091276e527e52e72b9dc3b87e05171c"},{url:"resources/dia_ru.txt",revision:"7004c5621dd1d1eec21e249547dc564b"},{url:"resources/dia_si.txt",revision:"4a867862bf904c7ad3a64df7dad16418"},{url:"resources/dia_sk.txt",revision:"69e29124515cbeace9d72f3b2575c871"},{url:"resources/dia_sl.txt",revision:"bc8a59b4b0a4410b1a3019cb7b7b24d6"},{url:"resources/dia_sr.txt",revision:"f6886d9c5d5c8052135bcdd5417247f0"},{url:"resources/dia_sv.txt",revision:"3ea62fbf4bfac96b2aabf9bc9a8378e4"},{url:"resources/dia_sw.txt",revision:"4ed9d255a447fa4d78efe08d7ee633af"},{url:"resources/dia_ta.txt",revision:"7eff30c11d017190ea1e13d0cbc1a32b"},{url:"resources/dia_te.txt",revision:"75f39c5c527129b4f5ccf60b2b10b7cb"},{url:"resources/dia_th.txt",revision:"bc28afe63d3b37c34e94d1874f87d22c"},{url:"resources/dia_tr.txt",revision:"a5ec306083c41ad693babc0830c338dc"},{url:"resources/dia_uk.txt",revision:"e02d3e8090a9fb30281bfd31e0469d66"},{url:"resources/dia_vi.txt",revision:"123eef638fc928a74639ee1c88dd69dc"},{url:"resources/dia_zh-tw.txt",revision:"d2d3186931252f427e8c6711ed4b79d2"},{url:"resources/dia_zh.txt",revision:"cebe4e3dd5c6c7e862a7b0205ff60dfb"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
