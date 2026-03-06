export const communityPosts = [
    {
        id: 1,
        user: {
            name: '美食爱好者',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
        },
        image: 'assets/images/community/宫保鸡丁买家秀.png',
        caption: {
            zh: '第一次做宫保鸡丁，味道还不错！虽然卖相一般，但是家人都说好吃 😊',
            en: 'First time making Kung Pao Chicken, tastes pretty good! Although it doesn\'t look perfect, my family said it\'s delicious 😊'
        },
        likes: 42,
        comments: [
            {
                user: '小厨娘',
                text: {
                    zh: '看起来很棒！我也想试试',
                    en: 'Looks great! I want to try it too'
                }
            }
        ],
        timestamp: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: 2,
        user: {
            name: '留学生小王',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy'
        },
        image: 'assets/images/community/红烧肉买家秀.png',
        caption: {
            zh: '在海外也能做出正宗的红烧肉！感谢这个APP的详细教程 🙏',
            en: 'Can make authentic Braised Pork Belly even overseas! Thanks to this app\'s detailed tutorials 🙏'
        },
        likes: 67,
        comments: [],
        timestamp: new Date(Date.now() - 172800000).toISOString()
    },
    {
        id: 3,
        user: {
            name: '新手厨师',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Max'
        },
        image: 'assets/images/community/番茄炒蛋买家秀.png',
        caption: {
            zh: '西红柿炒鸡蛋，简单但经典！每次做都感觉像回到了家 ❤️',
            en: 'Tomato and Egg Stir-fry, simple but classic! Every time I make it, it feels like coming home ❤️'
        },
        likes: 89,
        comments: [
            {
                user: '美食家',
                text: {
                    zh: '这道菜真的很有家的味道',
                    en: 'This dish really has the taste of home'
                }
            },
            {
                user: 'CookingLover',
                text: {
                    zh: '我也经常做这个，太治愈了',
                    en: 'I make this often too, so healing'
                }
            }
        ],
        timestamp: new Date(Date.now() - 259200000).toISOString()
    }
];
