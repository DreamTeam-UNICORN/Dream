(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 页面目录数据：首页
 */
var pageList = [{
  name: '生命周期',
  href: '/Lifecycle'
}, {
  name: '页面样式与布局',
  href: '/StyleLayout'
}, {
  name: '框架指令',
  href: '/Directive'
}, {
  name: '页面切换及参数传递',
  href: '/PageParams'
}, {
  name: '事件监听与触发',
  href: '/BindEvents'
}, {
  name: '父子组件通信',
  href: '/InterVms'
}, {
  name: '使用Async',
  href: '/Async'
}, {
  name: '优化技巧',
  href: '/Optimization'
}, {
  name: 'list教程',
  href: '/ComponentList'
}, {
  name: 'tabs教程',
  href: '/ComponentTabs'
}];

/**
 * 框架指令，基础数据
 */
var dataDirective = [{
  'name': '北京',
  'showSpots': true,
  'spots': [{ 'name': '天安门' }, { 'name': '八达岭' }]
}, {
  'name': '上海',
  'showSpots': false,
  'spots': [{ 'name': '东方明珠' }]
}];

/**
 * list教程，基础数据
 */
var dataComponentListBase = [{
  img: '/Common/img/demo.png',
  name: '梦想1',
  brief: '梦想描述信息梦想描述信息1',
  price: '￥价格1'
}, {
  img: '/Common/img/demo.png',
  name: '梦想2',
  brief: '梦想描述信息梦想描述2',
  price: '￥价格2'
}, {
  img: '/Common/img/demo.png',
  name: '梦想3',
  brief: '梦想描述信息梦想描述信息3',
  price: '￥价格3'
}, {
  img: '/Common/img/demo.png',
  name: '梦想4',
  brief: '梦想描述信息梦想描述信息4',
  price: '￥价格4'
}, {
  img: '/Common/img/demo.png',
  name: '梦想5',
  brief: '梦想描述信息梦想描述信息5',
  price: '￥价格5'
}];

/**
 * list教程，细粒度划分list-item页面的数据
 */
var dataComponentListFinegrainsize = [{
  title: '新品上线',
  bannerImg: '/Common/img/demo_large.png',
  productMini: [{
    img: '/Common/img/demo.png',
    name: '梦想1',
    brief: '梦想描述信息梦想描述信息1',
    price: '￥价格1'
  }, {
    img: '/Common/img/demo.png',
    name: '梦想2',
    brief: '梦想描述信息梦想描述信息2',
    price: '￥价格2'
  }],
  textHint: '更多新品'
}, {
  title: '梦想列表',
  bannerImg: '/Common/img/demo_large.png',
  productMini: [{
    img: '/Common/img/demo.png',
    name: '梦想3',
    brief: '梦想描述信息梦想描述信息3',
    price: '￥价格3'
  }, {
    img: '/Common/img/demo.png',
    name: '梦想4',
    brief: '梦想描述信息梦想描述信息4',
    price: '￥价格4'
  }],
  textHint: '更多梦想'
}];

/**
 * list教程，list-item懒加载
 */
var dataComponentListLazyload = [{
  img: '/Common/img/demo.png',
  name: '梦想1',
  brief: '梦想描述信息梦想描述信息1',
  price: '￥价格1'
}, {
  img: '/Common/img/demo.png',
  name: '梦想2',
  brief: '梦想描述信息梦想描述信息2',
  price: '￥价格2'
}, {
  img: '/Common/img/demo.png',
  name: '梦想3',
  brief: '梦想描述信息梦想描述信息3',
  price: '￥价格3'
}, {
  img: '/Common/img/demo.png',
  name: '梦想4',
  brief: '梦想描述信息梦想描述信息4',
  price: '￥价格4'
}, {
  img: '/Common/img/demo.png',
  name: '梦想5',
  brief: '梦想描述信息梦想描述信息5',
  price: '￥价格5'
}, {
  img: '/Common/img/demo.png',
  name: '梦想6',
  brief: '梦想描述信息梦想描述信息6',
  price: '￥价格6'
}, {
  img: '/Common/img/demo.png',
  name: '梦想7',
  brief: '梦想描述信息梦想描述信息7',
  price: '￥价格7'
}, {
  img: '/Common/img/demo.png',
  name: '梦想8',
  brief: '梦想描述信息梦想描述信息8',
  price: '￥价格8'
}, {
  img: '/Common/img/demo.png',
  name: '梦想9',
  brief: '梦想描述信息梦想描述信息9',
  price: '￥价格9'
}, {
  img: '/Common/img/demo.png',
  name: '梦想10',
  brief: '梦想描述信息梦想描述信息10',
  price: '￥价格10'
}, {
  img: '/Common/img/demo.png',
  name: '梦想11',
  brief: '梦想描述信息梦想描述信息11',
  price: '￥价格11'
}, {
  img: '/Common/img/demo.png',
  name: '梦想12',
  brief: '梦想描述信息梦想描述信息12',
  price: '￥价格12'
}, {
  img: '/Common/img/demo.png',
  name: '梦想13',
  brief: '梦想描述信息梦想描述信息13',
  price: '￥价格13'
}, {
  img: '/Common/img/demo.png',
  name: '梦想14',
  brief: '梦想描述信息梦想描述信息14',
  price: '￥价格14'
}, {
  img: '/Common/img/demo.png',
  name: '梦想15',
  brief: '梦想描述信息梦想描述信息15',
  price: '￥价格15'
}, {
  img: '/Common/img/demo.png',
  name: '梦想16',
  brief: '梦想描述信息梦想描述信息16',
  price: '￥价格16'
}, {
  img: '/Common/img/demo.png',
  name: '梦想17',
  brief: '梦想描述信息梦想描述信息17',
  price: '￥价格17'
}, {
  img: '/Common/img/demo.png',
  name: '梦想18',
  brief: '梦想描述信息梦想描述信息18',
  price: '￥价格18'
}, {
  img: '/Common/img/demo.png',
  name: '梦想19',
  brief: '梦想描述信息梦想描述信息19',
  price: '￥价格19'
}, {
  img: '/Common/img/demo.png',
  name: '梦想20',
  brief: '梦想描述信息梦想描述信息20',
  price: '￥价格20'
}];

exports.pageList = pageList;
exports.dataDirective = dataDirective;
exports.dataComponentListBase = dataComponentListBase;
exports.dataComponentListFinegrainsize = dataComponentListFinegrainsize;
exports.dataComponentListLazyload = dataComponentListLazyload;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5)
__webpack_require__(9)
var $app_template$ = __webpack_require__(13)
var $app_style$ = __webpack_require__(14)
var $app_script$ = __webpack_require__(15)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(6)
var $app_style$ = __webpack_require__(7)
var $app_script$ = __webpack_require__(8)

$app_define$('@app-component/dreamlist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "tutorial-page"
  ],
  "events": {
    "scrollbottom": "loadMoreData"
  },
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.productList},
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "product"
          },
          "classList": [
            "content-item"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.img}
              },
              "classList": [
                "img"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "text-wrap"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "top-line"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.name}
                      },
                      "classList": [
                        "text-name"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.price}
                      },
                      "classList": [
                        "text-price"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.brief}
                  },
                  "classList": [
                    "bottom-line"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list-item",
      "attr": {
        "type": "loadMore"
      },
      "classList": [
        "load-more"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "加载更多"
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  ".tutorial-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
    "backgroundColor": "#ffffff"
  },
  ".tutorial-page .content-item": {
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "borderBottomWidth": "1px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        }
      ]
    }
  },
  ".tutorial-page .content-item .img": {
    "flexShrink": 0,
    "width": "250px",
    "height": "250px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img"
        }
      ]
    }
  },
  ".tutorial-page .content-item .text-wrap": {
    "flexDirection": "column",
    "flexGrow": 1,
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "height": "250px",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        }
      ]
    }
  },
  ".tutorial-page .content-item .text-wrap .top-line": {
    "justifyContent": "space-between",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-line"
        }
      ]
    }
  },
  ".tutorial-page .content-item .text-wrap .top-line .text-name": {
    "fontSize": "35px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-line"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-name"
        }
      ]
    }
  },
  ".tutorial-page .content-item .text-wrap .top-line .text-price": {
    "color": "#ff6000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-line"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-price"
        }
      ]
    }
  },
  ".tutorial-page .content-item .text-wrap .bottom-line": {
    "marginTop": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bottom-line"
        }
      ]
    }
  },
  ".tutorial-page .load-more": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": "100px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "borderBottomWidth": "1px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        }
      ]
    }
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(0);

exports.default = {
  data: function data() {
    return {
      productList: [],
      productAddList: _data.dataComponentListBase
    };
  },
  onInit: function onInit() {
    console.log('onInit');
    this.$page.setTitleBar({ text: '简单场景-list实现' });
    console.log('--------------');
    console.log(this);
    console.log(this.productList);

    this.productList = [].concat(this.productAddList);
    console.log('--------------=========' + this.productList);
  },
  loadMoreData: function loadMoreData() {
    this.productList = this.productList.concat(this.productAddList);
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  }
};}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(10)
var $app_style$ = __webpack_require__(11)
var $app_script$ = __webpack_require__(12)

$app_define$('@app-component/dreamdetail', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "id": "icon",
        "src": function () {return this.icon}
      },
      "id": "icon"
    },
    {
      "type": "text",
      "attr": {
        "id": "name",
        "value": function () {return this.name}
      },
      "id": "name"
    },
    {
      "type": "div",
      "attr": {
        "id": "tags"
      },
      "id": "tags",
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "无安装"
          },
          "classList": [
            "tag"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "|"
          },
          "classList": [
            "gap"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "体积小"
          },
          "classList": [
            "tag"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "|"
          },
          "classList": [
            "gap"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "一步直达"
          },
          "classList": [
            "tag"
          ]
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "id": "desc",
        "value": function () {return this.desc}
      },
      "id": "desc"
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail",
        "detail-first"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "服务类型"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.serviceType}
          },
          "classList": [
            "detail-content"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "主体信息"
          },
          "classList": [
            "detail-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.subjectInfo}
          },
          "classList": [
            "detail-content"
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "创建快捷方式"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "createShortcut"
      }
    },
    {
      "type": "text",
      "attr": {
        "id": "footer",
        "value": function () {return this.copyright}
      },
      "id": "footer"
    }
  ]
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "#icon": {
    "marginTop": "90px",
    "width": "134px",
    "height": "134px",
    "borderRadius": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#8d8d8d",
    "borderRightColor": "#8d8d8d",
    "borderBottomColor": "#8d8d8d",
    "borderLeftColor": "#8d8d8d"
  },
  "#name": {
    "marginTop": "20px",
    "fontSize": "36px",
    "color": "#000000"
  },
  "#tags": {
    "marginTop": "22px",
    "alignItems": "center"
  },
  ".tag": {
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "fontSize": "28px",
    "color": "#2a9700"
  },
  ".gap": {
    "fontSize": "22px",
    "color": "#b2b2b2"
  },
  "#desc": {
    "width": "650px",
    "marginTop": "40px",
    "lineHeight": "35px",
    "fontSize": "25px",
    "color": "#8d8d8d"
  },
  ".detail": {
    "width": "650px",
    "height": "90px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f0f0f0"
  },
  ".detail-first": {
    "marginTop": "65px",
    "borderTopWidth": "1px",
    "borderTopColor": "#f0f0f0"
  },
  ".detail-title": {
    "width": "160px",
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#000000"
  },
  ".detail-content": {
    "fontSize": "25px",
    "color": "#8d8d8d"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#09ba07",
    "fontSize": "30px",
    "color": "#ffffff"
  },
  "#footer": {
    "width": "750px",
    "position": "fixed",
    "bottom": "55px",
    "fontSize": "25px",
    "color": "#8d8d8d",
    "textAlign": "center"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  protected: {
    name: null,
    icon: null
  },
  private: {
    desc: '即点即用，让你省去下载安装的步骤，立即使用各类服务',
    serviceType: '工具类',
    subjectInfo: 'xxx有限公司',
    copyright: ''
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: this.name });
  },
  createShortcut: function createShortcut() {
    this.$app.$def.createShortcut();
  }
};}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {
        "change": "tabBarTurn(index)"
      },
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "group-container"
          ],
          "children": [
            {
              "type": "dreamdetail",
              "attr": {
                "index": "0"
              }
            },
            {
              "type": "dreamlist",
              "attr": {
                "index": "1"
              }
            },
            {
              "type": "dreamlist",
              "attr": {
                "index": "2"
              }
            },
            {
              "type": "dreamlist",
              "attr": {
                "index": "3"
              }
            },
            {
              "type": "dreamlist",
              "attr": {
                "index": "4"
              }
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {},
          "classList": function () {return ['footer-container', this.currentIndex==0?'':'footer-container-1']},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.dataMap[this.$item].name}
              },
              "classList": [
                "tab-text"
              ],
              "repeat": function () {return this.tabItemList}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundImage": "/Common/boom-banner.jpg",
    "backgroundSize": "cover"
  },
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".group-container": {
    "height": "100%"
  },
  ".group-content": {
    "flexDirection": "column",
    "flex": 1
  },
  ".introduce": {
    "paddingLeft": "80px",
    "paddingRight": "80px",
    "marginBottom": "80px",
    "marginTop": "60px"
  },
  ".introduce-detail": {
    "color": "#ffffff"
  },
  ".dreamItem": {
    "borderTopColor": "#0faeff",
    "borderRightColor": "#0faeff",
    "borderBottomColor": "#0faeff",
    "borderLeftColor": "#0faeff",
    "borderLeft": "1px",
    "borderRight": "1px",
    "borderTop": "1px",
    "borderBottom": "1px",
    "borderRadius": "100px",
    "backgroundColor": "#ffffff",
    "marginTop": "10px",
    "marginRight": "20px",
    "marginBottom": "10px",
    "marginLeft": "20px",
    "paddingTop": "8px",
    "paddingRight": "8px",
    "paddingBottom": "8px",
    "paddingLeft": "8px",
    "width": "100px",
    "height": "100px",
    "textAlign": "center"
  },
  ".tab-text": {
    "textAlign": "center",
    "color:active": "#0faeff"
  },
  ".footer-container": {
    "height": "120px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".footer-container-1": {
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _data = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    title: '首页',
    dataMap: _data.tabsData,
    tabItemList: [],
    selectedIdxMap: {},
    dreamList: [],
    currentIndex: 0
  },
  onInit: function onInit() {
    var _this = this;

    this.tabItemList = [].concat(Object.keys(this.dataMap));
    this.tabItemList.forEach(function (tabItem) {
      _this.$set('selectedIdxMap.' + tabItem, -1);
      console.log(tabItem);
    });

    this.dreamList = _data.homeData.dreamList_own;
  },
  routePath: function routePath(path, params) {
    _system2.default.push({ uri: path, params: params });
  },
  routeDetail: function routeDetail() {
    console.log('打印东西呀！！！！！');
  },
  tabBarTurn: function tabBarTurn(index) {
    this.currentIndex = index;
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabsData = exports.tabsData = {
    index: {
        name: '首页',
        desc: 'boom首页',
        path: 'home'
    },
    square: {
        name: '广场',
        desc: '所有人的信息',
        path: './Modules/Dream/dreamList'
    },
    add: {
        name: '添加',
        desc: '添加boom球',
        path: 'about'
    },
    mySquare: {
        name: '个人广场',
        desc: '用户自己广场',
        path: 'DemoDetail'
    },
    personalCenter: {
        name: '个人中心',
        desc: '用户信息',
        path: 'DemoDetail'
    }
};

var homeData = exports.homeData = {
    dreamList_own: [{
        id: 1,
        aim_name: '背单词哦',
        aim_description: '背单词详情',
        start_time: '2018-11-13',
        end_time: '2018-12-13',
        user_id: 1,
        prize: {
            prize_id: 1,
            prize_content: '奖品1'
        },
        tags: ['学习'],
        clocks: [{
            clock_id: 1,
            clock_content: '打卡内容1',
            time: '2018-12-13'
        }, {
            clock_id: 2,
            clock_content: '打卡内容2',
            time: '2018-12-14'
        }],
        status: 0,
        share_status: 0,
        reward: {
            reward_id: 1,
            reward_price: 5,
            reward_user_id: 2
        }
    }, {
        id: 2,
        aim_name: '跑步',
        aim_description: '跑步详情',
        start_time: '2018-11-16',
        end_time: '2018-12-16',
        user_id: 1,
        prize: {
            prize_id: 2,
            prize_content: '奖品1'
        },
        tags: ['运动'],
        clocks: [{
            clock_id: 1,
            clock_content: '打卡内容1',
            time: '2018-12-13'
        }, {
            clock_id: 2,
            clock_content: '打卡内容2',
            time: '2018-12-14'
        }],
        status: 0,
        share_status: 0,
        reward: {
            reward_id: 1,
            reward_price: 10,
            reward_user_id: 2
        }
    }]
};

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map