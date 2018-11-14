export const tabsData = {
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
}

export const homeData = {
    dreamList_own:[
        {
            id:1,
            aim_name:'背单词哦',
            aim_description:'背单词详情',
            start_time:'2018-11-13',
            end_time:'2018-12-13',
            user_id:1,
            prize:{
                prize_id:1,
                prize_content:'奖品1',
            },
            tags:[
                '学习',
            ],
            clocks:[
                {
                    clock_id:1,
                    clock_content:'打卡内容1',
                    time:'2018-12-13',
                },
                {
                    clock_id:2,
                    clock_content:'打卡内容2',
                    time:'2018-12-14',
                },
            ],
            status:0,
            share_status:0,
            reward:{
                reward_id:1,
                reward_price:5,
                reward_user_id:2,
            }
        },
        {
            id:2,
            aim_name:'跑步',
            aim_description:'跑步详情',
            start_time:'2018-11-16',
            end_time:'2018-12-16',
            user_id:1,
            prize:{
                prize_id:2,
                prize_content:'奖品1',
            },
            tags:[
                '运动',
            ],
            clocks:[
                {
                    clock_id:1,
                    clock_content:'打卡内容1',
                    time:'2018-12-13',
                },
                {
                    clock_id:2,
                    clock_content:'打卡内容2',
                    time:'2018-12-14',
                },
            ],
            status:0,
            share_status:0,
            reward:{
                reward_id:1,
                reward_price:10,
                reward_user_id:2,
            }
        }
    ]
}
  