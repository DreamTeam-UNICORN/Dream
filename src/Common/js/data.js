/**
 * 页面目录数据：首页
 */
const pageList = [
  {
    name: '生命周期',
    href: '/Lifecycle'
  },
  {
    name: '页面样式与布局',
    href: '/StyleLayout'
  },
  {
    name: '框架指令',
    href: '/Directive'
  },
  {
    name: '页面切换及参数传递',
    href: '/PageParams'
  },
  {
    name: '事件监听与触发',
    href: '/BindEvents'
  },
  {
    name: '父子组件通信',
    href: '/InterVms'
  },
  {
    name: '使用Async',
    href: '/Async'
  },
  {
    name: '优化技巧',
    href: '/Optimization'
  },
  {
    name: 'list教程',
    href: '/ComponentList'
  },
  {
    name: 'tabs教程',
    href: '/ComponentTabs'
  }
]

/**
 * 框架指令，基础数据
 */
const dataDirective = [
  {
    'name': '北京',
    'showSpots': true,
    'spots': [
      { 'name': '天安门' },
      { 'name': '八达岭' }
    ]
  },
  {
    'name': '上海',
    'showSpots': false,
    'spots': [
      { 'name': '东方明珠' }
    ]
  }
]

/**
 * list教程，基础数据
 */
const dataComponentListBase = [
  {
    img: '/Common/img/demo.png',
    name: '梦想1',
    brief: '梦想描述信息梦想描述信息1',
    price: '￥价格1'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想2',
    brief: '梦想描述信息梦想描述2',
    price: '￥价格2'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想3',
    brief: '梦想描述信息梦想描述信息3',
    price: '￥价格3'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想4',
    brief: '梦想描述信息梦想描述信息4',
    price: '￥价格4'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想5',
    brief: '梦想描述信息梦想描述信息5',
    price: '￥价格5'
  }
]

/**
 * list教程，细粒度划分list-item页面的数据
 */
const dataComponentListFinegrainsize = [
  {
    title: '新品上线',
    bannerImg: '/Common/img/demo_large.png',
    productMini: [
      {
        img: '/Common/img/demo.png',
        name: '梦想1',
        brief: '梦想描述信息梦想描述信息1',
        price: '￥价格1'
      },
      {
        img: '/Common/img/demo.png',
        name: '梦想2',
        brief: '梦想描述信息梦想描述信息2',
        price: '￥价格2'
      }
    ],
    textHint: '更多新品'
  },
  {
    title: '梦想列表',
    bannerImg: '/Common/img/demo_large.png',
    productMini: [
      {
        img: '/Common/img/demo.png',
        name: '梦想3',
        brief: '梦想描述信息梦想描述信息3',
        price: '￥价格3'
      },
      {
        img: '/Common/img/demo.png',
        name: '梦想4',
        brief: '梦想描述信息梦想描述信息4',
        price: '￥价格4'
      }
    ],
    textHint: '更多梦想'
  }
]

/**
 * list教程，list-item懒加载
 */
const dataComponentListLazyload = [
  {
    img: '/Common/img/demo.png',
    name: '梦想1',
    brief: '梦想描述信息梦想描述信息1',
    price: '￥价格1'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想2',
    brief: '梦想描述信息梦想描述信息2',
    price: '￥价格2'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想3',
    brief: '梦想描述信息梦想描述信息3',
    price: '￥价格3'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想4',
    brief: '梦想描述信息梦想描述信息4',
    price: '￥价格4'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想5',
    brief: '梦想描述信息梦想描述信息5',
    price: '￥价格5'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想6',
    brief: '梦想描述信息梦想描述信息6',
    price: '￥价格6'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想7',
    brief: '梦想描述信息梦想描述信息7',
    price: '￥价格7'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想8',
    brief: '梦想描述信息梦想描述信息8',
    price: '￥价格8'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想9',
    brief: '梦想描述信息梦想描述信息9',
    price: '￥价格9'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想10',
    brief: '梦想描述信息梦想描述信息10',
    price: '￥价格10'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想11',
    brief: '梦想描述信息梦想描述信息11',
    price: '￥价格11'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想12',
    brief: '梦想描述信息梦想描述信息12',
    price: '￥价格12'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想13',
    brief: '梦想描述信息梦想描述信息13',
    price: '￥价格13'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想14',
    brief: '梦想描述信息梦想描述信息14',
    price: '￥价格14'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想15',
    brief: '梦想描述信息梦想描述信息15',
    price: '￥价格15'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想16',
    brief: '梦想描述信息梦想描述信息16',
    price: '￥价格16'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想17',
    brief: '梦想描述信息梦想描述信息17',
    price: '￥价格17'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想18',
    brief: '梦想描述信息梦想描述信息18',
    price: '￥价格18'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想19',
    brief: '梦想描述信息梦想描述信息19',
    price: '￥价格19'
  },
  {
    img: '/Common/img/demo.png',
    name: '梦想20',
    brief: '梦想描述信息梦想描述信息20',
    price: '￥价格20'
  }
]

export {
  pageList,
  dataDirective,
  dataComponentListBase,
  dataComponentListFinegrainsize,
  dataComponentListLazyload
}