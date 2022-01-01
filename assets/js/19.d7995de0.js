(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{440:function(e,n,t){"use strict";t.r(n);var r=t(70),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"拦截复制事件并替换图片url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截复制事件并替换图片url"}},[e._v("#")]),e._v(" 拦截复制事件并替换图片url")]),e._v(" "),t("p",[e._v("项目为vue")]),e._v(" "),t("h2",{attrs:{id:"监听粘贴事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听粘贴事件"}},[e._v("#")]),e._v(" 监听粘贴事件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * 监听粘贴事件，将外链的图片转为我们的\n */\nlistenPaste () {\n  window.addEventListener('paste', this.pasteEventHandle)\n  this.$on('hook:beforeDestroy', () => {\n    window.removeEventListener('paste', this.pasteEventHandle)\n  })\n},\n")])])]),t("h2",{attrs:{id:"事件处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[e._v("#")]),e._v(" 事件处理")]),e._v(" "),t("ol",[t("li",[e._v("先用html格式获取，没有则用纯文本text格式")]),e._v(" "),t("li",[e._v("将width,z-index替换为空，解决样式问题")]),e._v(" "),t("li",[e._v("有图片就拦截原生事件，替换图片为自己服务器的")]),e._v(" "),t("li",[e._v("没图片就用原生事件粘贴上去就行")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("async pasteEventHandle (e) {\n  // Prevent the default pasting event and stop bubbling\n  let paste = (e.clipboardData || window.clipboardData).getData('text/html')\n  if (!paste) {\n    paste = (e.clipboardData || window.clipboardData).getData('text')\n  }\n  // Do something with paste like remove non-UTF-8 characters\n  this.pasteInfo = paste.replace(/width|z-index/g, '').replace(/[\\\\]/g, '')\n  if (this.pasteInfo.indexOf('<img') !== -1) {\n    e.preventDefault()\n    e.stopPropagation()\n    this.pasteInfo = await this.replaceImgInHtmlString(this.pasteInfo)\n    this.pasteToTarget()\n  }\n},\n")])])]),t("h2",{attrs:{id:"获取图片并替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取图片并替换"}},[e._v("#")]),e._v(" 获取图片并替换")]),e._v(" "),t("p",[e._v("用正则匹配出所有图片src，传给接口换取自己服务器链接")]),e._v(" "),t("p",[e._v("将字符串的图片地址替换掉，这一步写法有点蠢，待优化")]),e._v(" "),t("p",[e._v("实测data-src也得替换，貌似会触发懒加载然后把src又换成外链了")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('async replaceImgInHtmlString (paste) {\n  this.showImgPasteProgress = true\n  let arrImg = []\n  paste.replace(/<(img) [^>]*src=[\'"]([^\'"]+)[^>]*>/gi, function (match, $1, $2) {\n    arrImg.push($2)\n  })\n  const replaceArrImg = await this.changeSystemUrl(arrImg)\n  arrImg.forEach((item, index) => {\n    paste = paste.replace(`data-src="${item}"`, `data-src="${replaceArrImg[index]}"`)\n    paste = paste.replace(`src="${item}"`, `src="${replaceArrImg[index]}" style="width: 100%!important;height: auto!important;"`)\n  })\n  return paste\n},\n')])])]),t("h2",{attrs:{id:"粘贴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#粘贴"}},[e._v("#")]),e._v(" 粘贴")]),e._v(" "),t("p",[e._v("转换图片完成后，获取光标位置，调用一系列api将内容赋值上去即可")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * 粘贴到光标处\n */\npasteToTarget () {\n  // Find the cursor location or highlighted area\n  const selection = window.getSelection()\n  // Cancel the paste operation if the cursor or highlighted area isn't found\n  if (!selection.rangeCount) return false\n  var div = document.createElement('div')\n  div.innerHTML = this.pasteInfo\n  // Paste the modified clipboard content where it was intended to go\n  selection.getRangeAt(0).insertNode(div)\n  this.showImgPasteProgress = false\n},\n")])])]),t("h2",{attrs:{id:"进度条-假"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进度条-假"}},[e._v("#")]),e._v(" 进度条（假）")]),e._v(" "),t("p",[e._v("上面已经完成了功能，下面加个动画组件，优化下体验")]),e._v(" "),t("p",[e._v("长这样")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://photo.greenplayer.cn/h5/2020/09/21/1600680817946.png",alt:""}})]),e._v(" "),t("p",[e._v("就直接粘代码了")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- 粘贴图文详情进度条组件 --\x3e\n\x3c!-- Create by luozheng on 2020/08/10 --\x3e\n<style lang="less" scoped>\n  @import "../../assets/less/variable.less";\n  .progress-bar-box {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.5);\n    z-index: 100;\n    padding: 0.18rem 0.32rem;\n    color: #ffffff;\n    .progress-bar-item {\n      width: 70%;\n      height: 0.6rem;\n      background: #555;\n      border-radius: 0.5rem;\n      padding: 0.2rem;\n      box-shadow: inset 0 -0.02rem 0.02rem rgba(255, 255, 255, 0.3);\n    }\n    .progress-item {\n      width: 100%;\n      height: 0.3rem;\n      background: #262626;\n      padding: 0.06rem;\n      overflow: visible;\n      border-radius: 0.4rem;\n      border-top: 0.02rem solid #000;\n      border-bottom: 0.02rem solid #7992a8;\n      margin-top: 0.06rem;\n    }\n    .progress-bar {\n      border-radius: 0.4rem;\n      position: relative;\n      animation: animate-positive 2s;\n    }\n    .progress-value {\n      display: block;\n      padding: 0.06rem 0.14rem;\n      font-size: 0.26rem;\n      color: #fff;\n      border-radius: 0.08rem;\n      background: #191919;\n      border: 0.02rem solid #000;\n      position: absolute;\n      top: -0.9rem;\n      right: -0.2rem;\n    }\n    .progress-value:after {\n      content: "";\n      border-top: 0.2rem solid #191919;\n      border-left: 0.2rem solid transparent;\n      border-right: 0.2rem solid transparent;\n      position: absolute;\n      bottom: -0.12rem;\n      left: 26%;\n    }\n    .active {\n      animation: reverse progress-bar-stripes 0.40s linear infinite, animate-positive 2s;\n    }\n    .progress-bar-striped {\n      background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n      background-size: 0.9rem 0.9rem;\n    }\n    @keyframes animate-positive {\n      0% {\n        width: 0;\n      }\n    }\n    .progress-bar {\n      float: left;\n      width: 0;\n      height: 100%;\n      font-size: 0.24rem;\n      line-height: 0.4rem;\n      color: #fff;\n      text-align: center;\n      -webkit-box-shadow: inset 0 -0.02rem 0 rgba(0, 0, 0, .15);\n      box-shadow: inset 0 -0.02rem 0 rgba(0, 0, 0, .15);\n      -webkit-transition: width .6s ease;\n      -o-transition: width .6s ease;\n      transition: width .6s ease;\n    }\n    @keyframes progress-bar-stripes {\n      from {\n        background-position: 0.9rem 0\n      }\n      to {\n        background-position: 0 0\n      }\n    }\n  }\n  .paste-btn {\n    width: 0.8rem;\n    height: 0.8rem;\n  }\n  .paste-progress {\n    padding: 0 0.2rem;\n  }\n</style>\n\n<template>\n  <div class="progress-bar-box _flex">\n    <img class="paste-btn" src="//image.greenplayer.cn/share/img/icon/icon_paste.svg" alt="">\n    <div class="_flex-item paste-progress">\n      <div>图文解析中...</div>\n      <div class="progress-item">\n        <div class="progress-bar progress-bar-striped active"\n             :style="{width: `${progress}%`, backgroundColor: bgColor}">\n          \x3c!--        <div class="progress-value">{{progress}}%</div>--\x3e\n        </div>\n      </div>\n    </div>\n    <div class="paste-btn _flex" @click="clickMenu">\n      <i class="ly-icon-sandian"></i>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'ProgressBar\',\n    data () {\n      return {\n        progress: this.startProgress\n      }\n    },\n    props: {\n      breakPointList: {\n        type: Array,\n        default: () => [33, 80, 99]\n      },\n      bgColor: {\n        type: String,\n        default: \'#3db657\'\n      },\n      startProgress: {\n        type: Number,\n        default: 0\n      }\n    },\n    mounted () {\n      this.animationToPercent(...this.breakPointList)\n    },\n    methods: {\n      clickMenu () {\n        this.showConfirm({\n          content: \'确定取消图文解析吗？\',\n          confirm: () => {\n            this.$emit(\'cancel\')\n          }\n        })\n      },\n      animationToPercent (percent, nextPercent1, nextPercent2) {\n        window.requestAnimationFrame(() => {\n          if (this.progress < percent) {\n            this.progress++\n            this.animationToPercent(percent, nextPercent1, nextPercent2)\n          } else {\n            setTimeout(() => {\n              percent = nextPercent1\n              nextPercent1 = nextPercent2\n              nextPercent2 = \'\'\n              if (!percent) return\n              this.animationToPercent(percent, nextPercent1, nextPercent2)\n            }, 500)\n          }\n        })\n      }\n    }\n  }\n<\/script>\n\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);