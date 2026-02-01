const translations = {
    zh: {
        nav: {
            home: '首页',
            scenarios: '场景分类',
            recipes: '菜谱大全',
            culture: '文化故事'
        },
        hero: {
            title: '探索中华美食文化',
            subtitle: '连接中西饮食文化的桥梁，让每个人都能轻松学习中餐'
        },
        scenarios: {
            title: '按场景选择',
            subtitle: '根据您的需求找到合适的菜谱',
            student: {
                title: '留学生的一人食慰藉',
                description: '快速、简单、营养，适合忙碌的留学生生活'
            },
            potluck: {
                title: '西方人的Potluck聚会惊艳单品',
                description: '在聚会中展示中华美食，成为焦点'
            },
            festival: {
                title: '节日庆典必备',
                description: '传统节日菜谱，感受节日氛围'
            },
            beginner: {
                title: '初学者友好',
                description: '从零开始，轻松入门中餐烹饪'
            }
        },
        recipes: {
            title: '精选菜谱',
            difficulty: '难度',
            time: '时间',
            servings: '份量',
            beginner: '初学者',
            intermediate: '中级',
            advanced: '高级'
        },
        recipeDetail: {
            ingredients: '食材清单',
            steps: '制作步骤',
            culture: '文化链接',
            substitution: '替代方案',
            video: '视频教程',
            back: '返回列表'
        },
        footer: {
            text: '© 2026 中华美食 | 连接中西饮食文化'
        }
    },
    en: {
        nav: {
            home: 'Home',
            scenarios: 'Scenarios',
            recipes: 'Recipes',
            culture: 'Culture'
        },
        hero: {
            title: 'Explore Chinese Cuisine',
            subtitle: 'A bridge connecting Eastern and Western culinary cultures, making Chinese cooking accessible to everyone'
        },
        scenarios: {
            title: 'Choose by Scenario',
            subtitle: 'Find the perfect recipe based on your needs',
            student: {
                title: 'Comfort Food for International Students',
                description: 'Quick, simple, and nutritious meals for busy student life'
            },
            potluck: {
                title: 'Showstoppers for Potluck Parties',
                description: 'Impress your friends with authentic Chinese dishes'
            },
            festival: {
                title: 'Festival Essentials',
                description: 'Traditional recipes for festive celebrations'
            },
            beginner: {
                title: 'Beginner Friendly',
                description: 'Start from scratch with easy-to-follow recipes'
            }
        },
        recipes: {
            title: 'Featured Recipes',
            difficulty: 'Difficulty',
            time: 'Time',
            servings: 'Servings',
            beginner: 'Beginner',
            intermediate: 'Intermediate',
            advanced: 'Advanced'
        },
        recipeDetail: {
            ingredients: 'Ingredients',
            steps: 'Cooking Steps',
            culture: 'Cultural Link',
            substitution: 'Substitution',
            video: 'Video Tutorial',
            back: 'Back to List'
        },
        footer: {
            text: '© 2026 Chinese Cuisine | Bridging Eastern and Western Culinary Cultures'
        }
    }
};

const recipes = [
    {
        id: 1,
        name: {
            zh: '西红柿炒鸡蛋',
            en: 'Tomato and Egg Stir-fry'
        },
        description: {
            zh: '最经典的家常菜，酸甜可口，营养丰富',
            en: 'Classic home-style dish, sweet and sour, nutritious'
        },
        image: '番茄炒蛋封面.jpg',
        video: '番茄炒蛋.mp4',
        difficulty: 'beginner',
        time: '15分钟 / 15 min',
        servings: '2人份 / 2 servings',
        scenario: ['student', 'beginner'],
        ingredients: [
            {
                name: { zh: '鸡蛋', en: 'Eggs' },
                amount: '3个 / 3 eggs',
                substitution: null
            },
            {
                name: { zh: '西红柿', en: 'Tomatoes' },
                amount: '2个中等大小 / 2 medium',
                substitution: { zh: '可用番茄罐头代替', en: 'Canned tomatoes can be used' }
            },
            {
                name: { zh: '葱', en: 'Green onions' },
                amount: '1根 / 1 stalk',
                substitution: { zh: '可用洋葱代替', en: 'Onion can be substituted' }
            },
            {
                name: { zh: '盐', en: 'Salt' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            },
            {
                name: { zh: '糖', en: 'Sugar' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            },
            {
                name: { zh: '食用油', en: 'Cooking oil' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '将西红柿洗净切成块状，鸡蛋打散，葱切成葱花。',
                    en: 'Wash and cut tomatoes into chunks, beat eggs, chop green onions.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '炒鸡蛋', en: 'Stir-fry Eggs' },
                description: {
                    zh: '热锅下油，倒入蛋液，快速翻炒至半熟，盛出备用。',
                    en: 'Heat oil in pan, pour in beaten eggs, stir-fry quickly until half-cooked, set aside.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '炒西红柿', en: 'Stir-fry Tomatoes' },
                description: {
                    zh: '锅中不用再加油，直接放入西红柿块，中火炒出汁水，加入盐调味。如果想要更多汁一些，可以加一点水。',
                    en: 'No need to add more oil to the pan, directly add tomato chunks, stir-fry over medium heat until juicy, add salt to season. If you want it juicier, you can add a little water.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '混合翻炒', en: 'Combine and Stir-fry' },
                description: {
                    zh: '将炒好的鸡蛋倒回锅中，加糖，翻炒均匀即可出锅。',
                    en: 'Return eggs to pan, add sugar, stir-fry evenly and serve.'
                },
                time: '2分钟 / 2 min'
            }
        ],
        culture: {
            zh: '番茄炒蛋是一道"不知道吃什么时就会出现"的菜。它常常出现在忙碌的一天结束后，或者家里食材不多的时候。只要有鸡蛋和番茄，就能很快做出一顿饭，因此在很多中国家庭中，它是最常被拿出来应急、却又不会被嫌弃的选择。这道菜很少被严格地按照食谱来做。番茄是切块还是切小，鸡蛋先炒还是后放，每个人家里都有不同的做法。有的人喜欢偏甜，有的人更偏酸，这些差异并不会被纠正，反而被视为"各家各味"的一部分。正因为做法自由，番茄炒蛋往往承载着个人记忆，而不是统一标准。在很多情况下，番茄炒蛋并不是用来招待客人的菜，而是留给自己、家人或熟人吃的菜。它常出现在普通的工作日、独自在家的夜晚，或是身体不太舒服、只想吃点清淡食物的时候。番茄炒蛋更像是一道与日常生活紧密相连的菜，代表的是稳定、熟悉和持续的生活节奏。',
            en: 'Tomato and Egg Stir-fry is a dish that "appears when you don\'t know what to eat." It often appears at the end of a busy day, or when there aren\'t many ingredients at home. As long as there are eggs and tomatoes, a meal can be made quickly, so in many Chinese families, it is the most frequently chosen emergency option that is never rejected. This dish is rarely prepared strictly according to recipes. Whether tomatoes are cut into chunks or small pieces, whether eggs are fried first or added later, every household has its own approach. Some prefer it sweeter, others more sour - these differences are not corrected but instead seen as part of "each family\'s unique flavor." Because the preparation is free and flexible, Tomato and Egg Stir-fry often carries personal memories rather than a unified standard. In many cases, this dish is not meant for entertaining guests but is reserved for oneself, family, or close friends. It often appears on ordinary weekdays, on nights spent alone at home, or when one isn\'t feeling well and just wants something light. Tomato and Egg Stir-fry is more like a dish closely connected to daily life, representing stability, familiarity, and a continuous rhythm of life.',
            illustration: '番茄炒蛋-文化.png'
        }
    },
    {
        id: 2,
        name: {
            zh: '宫保鸡丁',
            en: 'Kung Pao Chicken'
        },
        description: {
            zh: '川菜代表，麻辣鲜香，酸甜适中',
            en: 'Classic Sichuan dish, spicy and savory, perfectly balanced'
        },
        image: '宫保鸡丁封面.jpg',
        difficulty: 'intermediate',
        time: '25分钟 / 25 min',
        servings: '3人份 / 3 servings',
        scenario: 'student',
        ingredients: [
            {
                name: { zh: '鸡胸肉', en: 'Chicken breast' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '花生米', en: 'Peanuts' },
                amount: '50克 / 50g',
                substitution: { zh: '可用杏仁或腰果代替', en: 'Almonds or cashews can be substituted' }
            },
            {
                name: { zh: '干辣椒', en: 'Dried chili peppers' },
                amount: '6-8个 / 6-8 pieces',
                substitution: { zh: '可用辣椒粉代替', en: 'Chili powder can be substituted' }
            },
            {
                name: { zh: '蒜', en: 'Garlic' },
                amount: '3瓣 / 3 cloves',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用酱油代替', en: 'Regular soy sauce can be used' }
            },
            {
                name: { zh: '醋', en: 'Vinegar' },
                amount: '1汤匙 / 1 tbsp',
                substitution: null
            },
            {
                name: { zh: '糖', en: 'Sugar' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '腌制鸡肉', en: 'Marinate Chicken' },
                description: {
                    zh: '将鸡胸肉切成1.5厘米见方的丁，用生抽、料酒腌制15分钟。',
                    en: 'Cut chicken breast into 1.5cm cubes, marinate with soy sauce and cooking wine for 15 minutes.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '准备配料', en: 'Prepare Ingredients' },
                description: {
                    zh: '蒜切片，干辣椒切段，花生米炒香备用。',
                    en: 'Slice garlic, cut dried chili peppers into sections, stir-fry peanuts until fragrant and set aside.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '炒鸡丁', en: 'Stir-fry Chicken' },
                description: {
                    zh: '热锅下油，放入鸡丁炒至变色，盛出备用。',
                    en: 'Heat oil in pan, add chicken cubes and stir-fry until color changes, set aside.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '爆香调料', en: 'Stir-fry Aromatics' },
                description: {
                    zh: '锅中留底油，放入干辣椒和蒜片爆香。',
                    en: 'Leave some oil in pan, add dried chili peppers and garlic slices, stir-fry until fragrant.'
                },
                time: '1分钟 / 1 min'
            },
            {
                title: { zh: '调味收汁', en: 'Season and Reduce' },
                description: {
                    zh: '倒入鸡丁和花生米，加生抽、醋、糖调味，翻炒均匀即可。',
                    en: 'Add chicken cubes and peanuts back to pan, season with soy sauce, vinegar, and sugar, stir-fry evenly and serve.'
                },
                time: '2分钟 / 2 min'
            }
        ],
        culture: {
            zh: '宫保鸡丁是川菜中的经典名菜，起源于清朝，由四川总督丁宝桢创制。这道菜以其"糊辣荔枝味"著称，酸甜微辣，口感丰富。在国际上，宫保鸡丁是最著名的中餐之一，几乎每个中餐厅都有这道菜。它体现了川菜"一菜一格，百菜百味"的特点，是中西饮食文化交流的典范。',
            en: 'Kung Pao Chicken is a classic Sichuan dish that originated during the Qing Dynasty, created by Ding Baozhen, the Governor of Sichuan. The dish is famous for its "spicy lychee flavor" - a perfect balance of sweet, sour, and spicy. Internationally, Kung Pao Chicken is one of the most well-known Chinese dishes, found in almost every Chinese restaurant. It embodies the Sichuan philosophy of "one dish, one style; hundred dishes, hundred flavors" and serves as a prime example of East-West culinary cultural exchange.'
        }
    },
    {
        id: 3,
        name: {
            zh: '红烧肉',
            en: 'Braised Pork Belly'
        },
        description: {
            zh: '肥而不腻，入口即化，传统名菜',
            en: 'Rich but not greasy, melts in your mouth, traditional classic'
        },
        image: '红烧肉封面.jpg',
        difficulty: 'advanced',
        time: '90分钟 / 90 min',
        servings: '4人份 / 4 servings',
        scenario: 'student',
        ingredients: [
            {
                name: { zh: '五花肉', en: 'Pork belly' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '冰糖', en: 'Rock sugar' },
                amount: '10克 / 10g',
                substitution: { zh: '可用白糖代替', en: 'White sugar can be substituted' }
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            },
            {
                name: { zh: '老抽', en: 'Dark soy sauce' },
                amount: '1汤匙 / 1 tbsp',
                substitution: { zh: '可用更多生抽代替，实在没有可省略', en: 'More light soy sauce can be used, or omitted if not available' }
            },
            {
                name: { zh: '料酒', en: 'Cooking wine' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用干白葡萄酒代替', en: 'Dry white wine can be substituted' }
            },
            {
                name: { zh: '姜', en: 'Ginger' },
                amount: '3片 / 3 slices',
                substitution: null
            },
            {
                name: { zh: '八角', en: 'Star anise' },
                amount: '2个 / 2 pieces',
                substitution: { zh: '可用五香粉代替', en: 'Five-spice powder can be substituted' }
            }
        ],
        steps: [
            {
                title: { zh: '处理五花肉', en: 'Prepare Pork Belly' },
                description: {
                    zh: '将五花肉切成3厘米见方的块，冷水下锅焯水去血沫，捞出沥干。',
                    en: 'Cut pork belly into 3cm cubes, blanch in cold water to remove blood, drain well.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '炒糖色', en: 'Caramelize Sugar' },
                description: {
                    zh: '锅中放少许油，加入冰糖小火炒至融化呈焦糖色。',
                    en: 'Add a little oil to pan, add rock sugar and stir-fry over low heat until melted and caramelized.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '上色翻炒', en: 'Color and Stir-fry' },
                description: {
                    zh: '放入五花肉块翻炒上色，加入姜片和八角炒香。',
                    en: 'Add pork cubes and stir-fry to coat with color, add ginger slices and star anise, stir-fry until fragrant.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '调味炖煮', en: 'Season and Braise' },
                description: {
                    zh: '加入生抽、老抽、料酒和开水，大火烧开后转小火炖煮60分钟。',
                    en: 'Add light soy sauce, dark soy sauce, cooking wine, and hot water. Bring to boil, then simmer over low heat for 60 minutes.'
                },
                time: '65分钟 / 65 min'
            },
            {
                title: { zh: '收汁装盘', en: 'Reduce and Serve' },
                description: {
                    zh: '转大火收汁至浓稠，即可出锅装盘。',
                    en: 'Increase heat to reduce sauce until thick and glossy, then serve.'
                },
                time: '5分钟 / 5 min'
            }
        ],
        culture: {
            zh: '红烧肉是中国最著名的传统名菜之一，有着悠久的历史。这道菜色泽红亮，肥而不腻，入口即化，象征着团圆和富足。在中国传统文化中，红烧肉常在重要节日和家庭聚会时制作，是"家"的味道的象征。著名的"东坡肉"就是红烧肉的一种变体，相传由宋代文学家苏东坡创制。红烧肉的制作技艺体现了中国烹饪中"火候"的重要性，是中式烹饪哲学的完美体现。',
            en: 'Braised Pork Belly is one of the most famous traditional Chinese dishes with a long history. The dish features a bright red color, is rich but not greasy, and melts in your mouth, symbolizing reunion and abundance. In traditional Chinese culture, Braised Pork Belly is often prepared during important festivals and family gatherings, symbolizing the taste of "home." The famous "Dongpo Pork" is a variation of this dish, said to have been created by the Song Dynasty poet Su Dongpo. The cooking technique of Braised Pork embodies the importance of "huohou" (heat control) in Chinese cooking, perfectly reflecting Chinese culinary philosophy.'
        }
    },
    {
        id: 4,
        name: {
            zh: '上汤娃娃菜',
            en: 'Baby Cabbage in Broth'
        },
        description: {
            zh: '清淡鲜美，营养丰富，老少皆宜',
            en: 'Light and fresh, nutritious, suitable for all ages'
        },
        image: '上汤娃娃菜封面.jpg',
        difficulty: 'intermediate',
        time: '20分钟 / 20 min',
        servings: '2人份 / 2 servings',
        scenario: 'student',
        ingredients: [
            {
                name: { zh: '娃娃菜', en: 'Baby cabbage' },
                amount: '2颗 / 2 heads',
                substitution: { zh: '可用小白菜代替', en: 'Small bok choy can be substituted' }
            },
            {
                name: { zh: '皮蛋', en: 'Preserved egg' },
                amount: '1个 / 1 egg',
                substitution: { zh: '可省略', en: 'Can be omitted' }
            },
            {
                name: { zh: '火腿', en: 'Ham' },
                amount: '50克 / 50g',
                substitution: { zh: '可用培根代替', en: 'Bacon can be substituted' }
            },
            {
                name: { zh: '蒜', en: 'Garlic' },
                amount: '4瓣 / 4 cloves',
                substitution: null
            },
            {
                name: { zh: '高汤', en: 'Broth' },
                amount: '300毫升 / 300ml',
                substitution: { zh: '可用清水加鸡精代替', en: 'Water with chicken bouillon can be substituted' }
            },
            {
                name: { zh: '盐', en: 'Salt' },
                amount: '1/2茶匙 / 1/2 tsp',
                substitution: null
            },
            {
                name: { zh: '香油', en: 'Sesame oil' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '处理娃娃菜', en: 'Prepare Baby Cabbage' },
                description: {
                    zh: '将娃娃菜洗净，从中间切开成四瓣。',
                    en: 'Wash the baby cabbage and cut into quarters from the middle.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '焯水', en: 'Blanch Cabbage' },
                description: {
                    zh: '锅中烧开水，放入娃娃菜焯水2分钟，捞出沥干备用。',
                    en: 'Bring water to boil, add baby cabbage and blanch for 2 minutes, drain well and set aside.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '准备配料', en: 'Prepare Ingredients' },
                description: {
                    zh: '将皮蛋切丁，火腿切丁，蒜切成蒜末。',
                    en: 'Cut preserved egg and ham into small cubes, mince the garlic.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '炒配料', en: 'Stir-fry Ingredients' },
                description: {
                    zh: '热锅下油，放入蒜末爆香，加入火腿丁和皮蛋丁翻炒。',
                    en: 'Heat oil in pan, add minced garlic and stir-fry until fragrant, add ham and preserved egg cubes and stir-fry.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '煮汤', en: 'Make Broth' },
                description: {
                    zh: '倒入高汤，大火煮开后转小火煮3分钟。',
                    en: 'Pour in broth, bring to boil over high heat, then reduce to low heat and simmer for 3 minutes.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '煮娃娃菜', en: 'Cook Cabbage' },
                description: {
                    zh: '放入娃娃菜，加盐调味，煮3-4分钟至软烂。',
                    en: 'Add baby cabbage, season with salt, cook for 3-4 minutes until soft.'
                },
                time: '4分钟 / 4 min'
            },
            {
                title: { zh: '完成', en: 'Finished' },
                description: {
                    zh: '淋上香油，即可出锅享用！',
                    en: 'Drizzle with sesame oil and serve!'
                },
                time: '1分钟 / 1 min'
            }
        ],
        culture: {
            zh: '上汤娃娃菜是一道经典的粤菜，以其清淡鲜美的口感深受喜爱。这道菜体现了粤菜"清淡鲜美"的特点，用高汤煮娃娃菜，保留了蔬菜的天然甜味，同时加入了皮蛋和火腿增加鲜味。在广东，这道菜常作为宴席上的素菜，既满足了素食者的需求，又不会让荤食者觉得单调。对于初学者来说，这道菜是学习粤菜汤菜制作的绝佳入门菜，简单易学，成功率高。',
            en: 'Baby Cabbage in Broth is a classic Cantonese dish, deeply loved for its light and fresh flavor. This dish embodies the Cantonese characteristic of "light and fresh," using broth to cook baby cabbage while preserving the natural sweetness of the vegetable, with preserved egg and ham added to enhance the umami. In Guangdong, this dish is often served as a vegetarian dish at banquets, satisfying vegetarians while not making meat-eaters feel monotonous. For beginners, this dish is an excellent entry point for learning Cantonese soup dishes - simple to learn with a high success rate.'
        }
    },
    {
        id: 5,
        name: {
            zh: '凉拌黄瓜',
            en: 'Cucumber Salad'
        },
        description: {
            zh: '清爽开胃，简单易做，夏日必备',
            en: 'Refreshing and appetizing, simple to make, summer essential'
        },
        image: '凉拌黄瓜封面.jpg',
        video: '凉拌黄瓜2.mp4',
        difficulty: 'beginner',
        time: '10分钟 / 10 min',
        servings: '2人份 / 2 servings',
        scenario: ['student', 'beginner'],
        ingredients: [
            {
                name: { zh: '黄瓜', en: 'Cucumber' },
                amount: '2根 / 2 cucumbers',
                substitution: { zh: '可用其他脆嫩蔬菜代替', en: 'Other crisp vegetables can be substituted' }
            },
            {
                name: { zh: '蒜', en: 'Garlic' },
                amount: '3瓣 / 3 cloves',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用酱油代替', en: 'Soy sauce can be substituted' }
            },
            {
                name: { zh: '陈醋', en: 'Aged vinegar' },
                amount: '1汤匙 / 1 tbsp',
                substitution: { zh: '可用米醋、白醋代替', en: 'Rice vinegar or white vinegar can be substituted' }
            },
            {
                name: { zh: '香油', en: 'Sesame oil' },
                amount: '1茶匙 / 1 tsp',
                substitution: { zh: '可用花生油代替', en: 'Peanut oil can be substituted' }
            },
            {
                name: { zh: '盐', en: 'Salt' },
                amount: '1/2茶匙 / 1/2 tsp',
                substitution: null
            },
            {
                name: { zh: '糖', en: 'Sugar' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '处理黄瓜', en: 'Prepare Cucumber' },
                description: {
                    zh: '冲洗黄瓜，去皮（保留一些皮，口感更好），斜着切黄瓜，切成片状。',
                    en: 'Rinse the cucumber, peel it (keep some skin for better texture), cut the cucumber diagonally into slices.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '腌制', en: 'Marinate' },
                description: {
                    zh: '在黄瓜中加入1/2茶匙盐，拌匀腌制10分钟，倒掉腌出的水分。',
                    en: 'Add 1/2 teaspoon of salt to the cucumber, mix well and marinate for 10 minutes, then drain off the liquid.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '加蒜末', en: 'Add Garlic' },
                description: {
                    zh: '把大蒜去根、去皮、切成蒜末，加入到黄瓜中。',
                    en: 'Remove the root and peel the garlic, mince it into garlic paste, and add it to the cucumber.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '加麻油', en: 'Add Sesame Oil' },
                description: {
                    zh: '根据个人喜好加入麻油。',
                    en: 'Add sesame oil according to personal preference.'
                },
                time: '1分钟 / 1 min'
            },
            {
                title: { zh: '热油', en: 'Heat Oil' },
                description: {
                    zh: '开火，锅热倒油，等闻到油的香气就关火。',
                    en: 'Turn on the heat, pour oil into the hot pan, and turn off the heat when you smell the aroma of the oil.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '淋热油', en: 'Pour Hot Oil' },
                description: {
                    zh: '把热油淋到黄瓜上。',
                    en: 'Pour the hot oil over the cucumber.'
                },
                time: '1分钟 / 1 min'
            }
        ],
        culture: {
            zh: '凉拌黄瓜并不是一道有明确起源的"名菜"，它更像是一种中国家庭里默认存在的做法。**在很多人的日常经验中，只要桌上有热菜、有油腻的菜，就很自然会出现一盘凉拌黄瓜，用来让整顿饭吃起来更清爽一些。它不追求复杂步骤，也很少被当作主角，却几乎不会缺席。拍一拍黄瓜，加点蒜、盐、醋和香油，有人喜欢酸一点，有人偏清淡，做法因人而异，没有标准答案。正因为如此，凉拌黄瓜体现的是中餐里很生活化的一面：做菜不一定要精确复刻，而是根据当下的食材、天气和口味去调整。对中国人来说，这道菜更多关联的是"日常""平衡"和"随手就能完成的一餐"，而不是技巧或仪式感。',
            en: 'Cucumber Salad is not a famous dish with a clear origin; rather, it is more like a default preparation in Chinese households. In many people\'s daily experience, as long as there are hot dishes or greasy dishes on the table, a plate of cucumber salad naturally appears to make the whole meal taste more refreshing. It does not pursue complex steps and is rarely the main focus, yet it is almost never absent. Smash the cucumber, add garlic, salt, vinegar, and sesame oil - some like it more sour, others prefer it lighter, the method varies from person to person, and there is no standard answer. Because of this, cucumber salad embodies a very down-to-earth aspect of Chinese cuisine: cooking does not necessarily require precise replication, but rather adjustment based on current ingredients, weather, and taste. For Chinese people, this dish is more associated with "daily life," "balance," and "a meal that can be completed effortlessly," rather than technique or ritual.',
            illustration: '凉拌黄瓜-文化.jpg'
        }
    },
    {
        id: 6,
        name: {
            zh: '糖醋排骨',
            en: 'Sweet and Sour Pork Ribs'
        },
        description: {
            zh: '酸甜可口，色泽红亮，老少皆宜',
            en: 'Sweet and sour, bright red color, loved by all ages'
        },
        image: '糖醋排骨封面.jpg',
        video: '糖醋排骨更新版.mp4',
        difficulty: 'intermediate',
        time: '45分钟 / 45 min',
        servings: '3人份 / 3 servings',
        scenario: ['festival', 'student'],
        ingredients: [
            {
                name: { zh: '排骨', en: 'Pork ribs' },
                amount: '400克 / 400g',
                substitution: null
            },
            {
                name: { zh: '陈醋', en: 'Aged vinegar' },
                amount: '3汤匙 / 3 tbsp',
                substitution: { zh: '可用香醋、米醋代替，但陈醋味道最醇厚', en: 'Can use fragrant vinegar or rice vinegar, but aged vinegar has the richest flavor' }
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '3汤匙 / 3 tbsp',
                substitution: null
            },
            {
                name: { zh: '老抽', en: 'Dark soy sauce' },
                amount: '1汤匙 / 1 tbsp',
                substitution: { zh: '可用更多生抽代替，实在没有可省略', en: 'More light soy sauce can be used, or omitted if not available' }
            },
            {
                name: { zh: '冰糖', en: 'Rock sugar' },
                amount: '10克 / 10g',
                substitution: { zh: '可用白糖代替', en: 'White sugar can be substituted' }
            },
            {
                name: { zh: '盐', en: 'Salt' },
                amount: '半勺 / 0.5 tsp',
                substitution: null
            },
            {
                name: { zh: '姜', en: 'Ginger' },
                amount: '3片 / 3 slices',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '泡出血水', en: 'Soak to Remove Blood' },
                description: {
                    zh: '将排骨洗净，放入清水中浸泡30分钟，期间换水2-3次，去除血水和杂质。',
                    en: 'Wash the pork ribs and soak in cold water for 30 minutes, changing the water 2-3 times to remove blood and impurities.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '焯水处理', en: 'Blanch the Ribs' },
                description: {
                    zh: '拿出排骨冷水下锅，加入3片姜片和1汤匙料酒，煮至肉变色后盛出，放在碗里备用。',
                    en: 'Take out the ribs and put into the pot with cold water, add 3 pieces of ginger slices and 1 tablespoon of cooking wine. Boil the pork until it changes color, then remove into a bowl.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '炒糖色', en: 'Caramelize Sugar' },
                description: {
                    zh: '冷锅倒油，加入冰糖，小火炒至融化呈焦糖色。',
                    en: 'Pour oil into the pan, add rock sugar, and stir-fry over low heat until a caramel color is achieved.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '上色翻炒', en: 'Coat and Stir-fry' },
                description: {
                    zh: '倒入排骨，翻炒均匀，均匀裹上糖色。',
                    en: 'Add the pork ribs and stir-fry until evenly coated with the sugar color.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '调味', en: 'Season' },
                description: {
                    zh: '加入2汤匙生抽、2汤匙陈醋、1汤匙老抽、半勺盐。',
                    en: 'Add 2 tablespoons of light soy sauce, 2 tablespoons of aged vinegar, 1 tablespoon of dark soy sauce, and half a teaspoon of salt.'
                },
                time: '1分钟 / 1 min'
            },
            {
                title: { zh: '加水炖煮', en: 'Add Water and Braise' },
                description: {
                    zh: '倒入刚烧开的开水，浸没过排骨即可。',
                    en: 'Pour boiling water into the pot, just enough to cover the pork ribs.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '收汁', en: 'Reduce Sauce' },
                description: {
                    zh: '盖上锅盖中小火焖煮30分钟，中间建议时不时检查防止糊掉。如果发现锅中汁水已经收成原来的1/4，那么就可以关火，盛出来了。',
                    en: 'Cover the pot and simmer over medium-low heat for 30 minutes. Check occasionally to prevent scorching. If you notice that the juice in the pot has reduced to 1/4 of its original volume, turn off the heat and serve.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '完成', en: 'Finished' },
                description: {
                    zh: '糖醋排骨完成，趁热享用！',
                    en: 'Sweet and sour pork ribs are finished, enjoy while hot!'
                },
                time: '0分钟 / 0 min'
            }
        ],
        culture: {
            zh: '糖醋排骨是中国传统名菜之一，属于淮扬菜系，也是那种"上桌就会被夹走"的必点菜。不论是家庭聚餐，还是请朋友到家里做客，它几乎从不出错。酸甜的味道让小孩爱不释口，大人也不会觉得腻，因此常被当作"安全选择"。\n\n做糖醋排骨的时候，关键并不在于死记配方，而在于边做边调整——酸一点还是甜一点，都可以根据个人口味来掌握。很多中国人做这道菜，都是凭感觉判断什么时候该加糖，什么时候该收汁。\n\n在海外，糖醋排骨也常是人们认识中餐的第一步。味道直观，不需要预先理解太多文化背景。对中国人而言，这道菜常常与"热闹""共享"联系在一起，是一盘适合大家围坐一起分享的佳肴。著名作家张爱玲在小说《沉香屑·第一炉香》中甚至将糖醋排骨比作"美人"，写道："如果湘粤一带深目削颊的美人是糖醋排骨，上海女人就是粉蒸肉。"可见，这道菜在文人心中也占有独特地位。',
            en: 'Sweet and Sour Pork Ribs is one of China\'s traditional dishes, belonging to Huaiyang cuisine, and is a kind of dish that everyone reaches for as soon as it hits the table. Whether at a family gathering or when hosting friends at home, it almost never fails. Its sweet-and-sour flavor makes children love it instantly, while adults don\'t find it heavy or greasy, which is why it is often considered a "safe choice."\n\nThe key to making Sweet and Sour Pork Ribs isn\'t memorizing a fixed recipe, but adjusting as you cook—making it slightly more sour or sweeter according to personal taste. Many Chinese cooks make this dish by feel, deciding when to add sugar and when to reduce the sauce.\n\nOverseas, Sweet and Sour Pork Ribs is often one of the first Chinese dishes people try. Its flavor is straightforward, requiring no prior understanding of cultural context. For Chinese people, this dish is often associated with liveliness and sharing—a dish meant to be enjoyed together around the table. The famous writer Eileen Chang even compared Sweet and Sour Pork Ribs to a "beauty" in her novel The First Stove of Incense, writing: "If the beauties of Hunan and Guangdong are Sweet and Sour Pork Ribs, then Shanghai women are steamed pork with rice powder." This shows that this dish also holds a special place in the hearts of literati.',
            illustration: '糖醋排骨-文化.png'
        }
    },
    {
        id: 7,
        name: {
            zh: '锅贴',
            en: 'Potstickers'
        },
        description: {
            zh: '外酥里嫩，鲜香多汁，聚会必备',
            en: 'Crispy outside, tender inside, juicy and flavorful'
        },
        image: '锅贴封面.jpg',
        difficulty: 'intermediate',
        time: '30分钟 / 30 min',
        servings: '4人份 / 4 servings',
        scenario: 'potluck',
        ingredients: [
            {
                name: { zh: '猪肉馅', en: 'Ground pork' },
                amount: '300克 / 300g',
                substitution: { zh: '可用鸡肉馅代替', en: 'Ground chicken can be substituted' }
            },
            {
                name: { zh: '饺子皮', en: 'Dumpling wrappers' },
                amount: '20张 / 20 pieces',
                substitution: null
            },
            {
                name: { zh: '白菜', en: 'Napa cabbage' },
                amount: '100克 / 100g',
                substitution: { zh: '可用韭菜代替', en: 'Chives can be substituted' }
            },
            {
                name: { zh: '葱', en: 'Green onions' },
                amount: '2根 / 2 stalks',
                substitution: null
            },
            {
                name: { zh: '姜', en: 'Ginger' },
                amount: '1块 / 1 piece',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            },
            {
                name: { zh: '食用油', en: 'Cooking oil' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备馅料', en: 'Prepare Filling' },
                description: {
                    zh: '白菜切碎，加盐腌制10分钟，挤干水分。加入猪肉馅、葱花、姜末、生抽，顺时针搅拌至上劲。',
                    en: 'Chop cabbage, marinate with salt for 10 minutes, squeeze out water. Add ground pork, chopped green onions, minced ginger, light soy sauce, stir clockwise until sticky.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '包锅贴', en: 'Make Potstickers' },
                description: {
                    zh: '取一张饺子皮，放入适量馅料，对折捏紧边缘，中间留一个小口。',
                    en: 'Take a dumpling wrapper, add an appropriate amount of filling, fold in half and seal the edges, leave a small opening in the middle.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '煎制', en: 'Pan-fry' },
                description: {
                    zh: '热锅下油，放入锅贴，中小火煎至底部金黄。加入少量水，盖上锅盖焖煮5分钟，待水分收干即可。',
                    en: 'Heat oil in pan, add potstickers, fry over medium-low heat until bottom is golden. Add a little water, cover and simmer for 5 minutes until water evaporates.'
                },
                time: '5分钟 / 5 min'
            }
        ],
        culture: {
            zh: '锅贴是中国传统的小吃之一，起源于北宋时期。它结合了煎和蒸的烹饪方法，外酥里嫩，口感丰富。锅贴的馅料多样，常见的有猪肉白菜、韭菜鸡蛋等。在中国，锅贴常作为早餐或点心食用，也是聚会时的热门菜品。',
            en: 'Potstickers are one of China\'s traditional snacks, originating from the Northern Song Dynasty. They combine frying and steaming methods, resulting in a crispy exterior and tender interior. Potstickers have various fillings, with pork and cabbage, chives and eggs being common. In China, potstickers are often eaten for breakfast or as a snack, and are also popular at gatherings.'
        }
    },
    {
        id: 8,
        name: {
            zh: '口水鸡',
            en: 'Sichuan Saliva Chicken'
        },
        description: {
            zh: '麻辣鲜香，回味无穷，川菜经典',
            en: 'Spicy, numbing, flavorful, classic Sichuan dish'
        },
        image: '口水鸡封面.jpg',
        difficulty: 'intermediate',
        time: '40分钟 / 40 min',
        servings: '4人份 / 4 servings',
        scenario: 'potluck',
        ingredients: [
            {
                name: { zh: '鸡腿', en: 'Chicken legs' },
                amount: '4个 / 4 pieces',
                substitution: { zh: '可用鸡胸肉代替', en: 'Chicken breast can be substituted' }
            },
            {
                name: { zh: '红油辣椒', en: 'Chili oil' },
                amount: '3汤匙 / 3 tbsp',
                substitution: null
            },
            {
                name: { zh: '花椒油', en: 'Sichuan pepper oil' },
                amount: '1汤匙 / 1 tbsp',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            },
            {
                name: { zh: '蒜末', en: 'Minced garlic' },
                amount: '3瓣 / 3 cloves',
                substitution: null
            },
            {
                name: { zh: '葱花', en: 'Chopped green onions' },
                amount: '2根 / 2 stalks',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '煮鸡肉', en: 'Cook Chicken' },
                description: {
                    zh: '将鸡腿洗净，放入锅中，加入冷水没过鸡肉，大火煮开后转小火煮15分钟，关火焖10分钟。',
                    en: 'Wash chicken legs, put in pot with cold water covering chicken, bring to boil over high heat, turn to low heat and cook for 15 minutes, turn off heat and焖 for 10 minutes.'
                },
                time: '25分钟 / 25 min'
            },
            {
                title: { zh: '过冰水', en: 'Ice Bath' },
                description: {
                    zh: '将煮好的鸡肉捞出，放入冰水中浸泡10分钟，使鸡肉更嫩滑。',
                    en: 'Remove cooked chicken, soak in ice water for 10 minutes to make chicken more tender.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '调味', en: 'Season' },
                description: {
                    zh: '将鸡肉切块，放入碗中。混合红油辣椒、花椒油、生抽、蒜末、葱花，淋在鸡肉上即可。',
                    en: 'Cut chicken into pieces, put in bowl. Mix chili oil, Sichuan pepper oil, light soy sauce, minced garlic, chopped green onions, pour over chicken.'
                },
                time: '5分钟 / 5 min'
            }
        ],
        culture: {
            zh: '口水鸡是川菜中的经典凉菜，以其麻辣鲜香的口感而闻名。传说这道菜的名字由来是因为它的味道太美味，让人忍不住流口水。口水鸡的特点是鸡肉嫩滑，调料丰富，麻辣中带有一丝甜味，是夏季的开胃佳肴。',
            en: 'Sichuan Saliva Chicken is a classic cold dish in Sichuan cuisine, famous for its spicy, numbing and flavorful taste. Legend has it that the name comes from the fact that its taste is so delicious that it makes people drool. Saliva Chicken is characterized by tender chicken, rich seasoning, and a hint of sweetness in the spiciness, making it an appetizing dish for summer.'
        }
    },
    {
        id: 9,
        name: {
            zh: '鱼香茄子',
            en: 'Yu Xiang Eggplant'
        },
        description: {
            zh: '鱼香浓郁，酸甜可口，下饭神器',
            en: 'Fish fragrant, sweet and sour, perfect with rice'
        },
        image: '鱼香茄子封面.jpg',
        difficulty: 'intermediate',
        time: '25分钟 / 25 min',
        servings: '3人份 / 3 servings',
        scenario: 'potluck',
        ingredients: [
            {
                name: { zh: '茄子', en: 'Eggplant' },
                amount: '2个 / 2 pieces',
                substitution: null
            },
            {
                name: { zh: '猪肉末', en: 'Ground pork' },
                amount: '100克 / 100g',
                substitution: { zh: '可用牛肉末代替', en: 'Ground beef can be substituted' }
            },
            {
                name: { zh: '蒜', en: 'Garlic' },
                amount: '3瓣 / 3 cloves',
                substitution: null
            },
            {
                name: { zh: '姜', en: 'Ginger' },
                amount: '1小块 / 1 small piece',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            },
            {
                name: { zh: '醋', en: 'Vinegar' },
                amount: '1汤匙 / 1 tbsp',
                substitution: null
            },
            {
                name: { zh: '糖', en: 'Sugar' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '处理茄子', en: 'Prepare Eggplant' },
                description: {
                    zh: '将茄子洗净切条，放入盐水中浸泡10分钟，捞出沥干。',
                    en: 'Wash eggplant and cut into strips, soak in salt water for 10 minutes, remove and drain.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '炸茄子', en: 'Fry Eggplant' },
                description: {
                    zh: '热锅下油，放入茄子炸至金黄，捞出沥干油分。',
                    en: 'Heat oil in pan, fry eggplant until golden, remove and drain oil.'
                },
                time: '8分钟 / 8 min'
            },
            {
                title: { zh: '炒制', en: 'Stir-fry' },
                description: {
                    zh: '锅中留底油，放入蒜末、姜末爆香，加入猪肉末炒至变色。加入生抽、醋、糖调味，倒入茄子翻炒均匀即可。',
                    en: 'Leave some oil in pan, add minced garlic and ginger, stir-fry until fragrant, add ground pork and stir-fry until color changes. Add light soy sauce, vinegar, sugar to season, add eggplant and stir-fry evenly.'
                },
                time: '7分钟 / 7 min'
            }
        ],
        culture: {
            zh: '鱼香茄子是川菜中的经典名菜，以其独特的"鱼香"味而闻名。"鱼香"是一种调味方法，起源于四川民间，原本是用来做鱼的调料，后来被广泛应用于其他菜品。鱼香茄子的特点是酸甜微辣，口感丰富，是下饭的绝佳选择。',
            en: 'Yu Xiang Eggplant is a classic dish in Sichuan cuisine, famous for its unique "fish fragrance" flavor. "Yu Xiang" is a seasoning method originating from Sichuan folk, originally used for fish, but later widely applied to other dishes. Yu Xiang Eggplant is characterized by its sweet and sour taste with a hint of spiciness, making it an excellent choice to pair with rice.'
        }
    },
    {
        id: 10,
        name: {
            zh: '糖拌番茄',
            en: 'Sugar-coated Tomatoes'
        },
        description: {
            zh: '酸甜爽口，简单快手，夏季必备',
            en: 'Sweet and sour, refreshing, easy to make'
        },
        image: '糖拌番茄封面.jpg',
        difficulty: 'beginner',
        time: '5分钟 / 5 min',
        servings: '2人份 / 2 servings',
        scenario: ['potluck', 'beginner'],
        ingredients: [
            {
                name: { zh: '番茄', en: 'Tomatoes' },
                amount: '2个 / 2 pieces',
                substitution: null
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备番茄', en: 'Prepare Tomatoes' },
                description: {
                    zh: '将番茄洗净，切块放入碗中。',
                    en: 'Wash tomatoes, cut into pieces and put in bowl.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '加糖拌匀', en: 'Add Sugar' },
                description: {
                    zh: '撒上白糖，拌匀即可食用。',
                    en: 'Sprinkle with white sugar, mix well and serve.'
                },
                time: '3分钟 / 3 min'
            }
        ],
        culture: {
            zh: '糖拌番茄是中国最常见的家常菜之一，尤其在夏季非常受欢迎。这道菜制作简单，只需要番茄和白糖两种食材，但却能带给人清爽的口感。糖拌番茄不仅美味，而且营养丰富，富含维生素C和番茄红素。',
            en: 'Sugar-coated Tomatoes is one of the most common home-style dishes in China, especially popular in summer. This dish is simple to make, requiring only two ingredients: tomatoes and white sugar, but it provides a refreshing taste. Sugar-coated Tomatoes is not only delicious but also nutritious, rich in vitamin C and lycopene.'
        }
    },
    {
        id: 11,
        name: {
            zh: '蛋炒饭',
            en: 'Egg Fried Rice'
        },
        description: {
            zh: '粒粒分明，鲜香可口，经典主食',
            en: 'Separate grains, fragrant and delicious, classic staple'
        },
        image: '蛋炒饭封面.jpg',
        difficulty: 'beginner',
        time: '15分钟 / 15 min',
        servings: '2人份 / 2 servings',
        scenario: ['potluck', 'beginner'],
        ingredients: [
            {
                name: { zh: '米饭', en: 'Cooked rice' },
                amount: '2碗 / 2 bowls',
                substitution: null
            },
            {
                name: { zh: '鸡蛋', en: 'Eggs' },
                amount: '2个 / 2 eggs',
                substitution: null
            },
            {
                name: { zh: '葱', en: 'Green onions' },
                amount: '1根 / 1 stalk',
                substitution: null
            },
            {
                name: { zh: '盐', en: 'Salt' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            },
            {
                name: { zh: '食用油', en: 'Cooking oil' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '将鸡蛋打散，葱切成葱花。',
                    en: 'Beat eggs, chop green onions.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '炒鸡蛋', en: 'Stir-fry Eggs' },
                description: {
                    zh: '热锅下油，倒入蛋液，快速翻炒至半熟，盛出备用。',
                    en: 'Heat oil in pan, pour in beaten eggs, stir-fry quickly until half-cooked, set aside.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '炒饭', en: 'Fried Rice' },
                description: {
                    zh: '锅中再加少许油，放入米饭炒散，加入炒好的鸡蛋，加盐调味，撒上葱花翻炒均匀即可。',
                    en: 'Add a little more oil to pan, add rice and break apart, add炒好的 eggs, season with salt, sprinkle with green onions and stir-fry evenly.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '蛋炒饭是中国最经典的主食之一，几乎每个中国人都会做。这道菜看似简单，实则需要一定的技巧才能炒出粒粒分明的效果。蛋炒饭不仅可以作为主食，也可以作为一道菜，是剩米饭的绝佳去处。在海外，蛋炒饭也是最受欢迎的中餐之一。',
            en: 'Egg Fried Rice is one of the most classic staple foods in China, almost every Chinese person knows how to make it. This dish看似 simple, but actually requires certain skills to achieve separate grains. Egg Fried Rice can be served as a staple food or as a dish, and it is an excellent way to use leftover rice. Overseas, Egg Fried Rice is also one of the most popular Chinese dishes.'
        }
    },
    {
        id: 12,
        name: {
            zh: '麻婆豆腐',
            en: 'Mapo Tofu'
        },
        description: {
            zh: '麻辣鲜香，嫩滑可口，川菜经典',
            en: 'Spicy and numbing, tender and delicious, classic Sichuan dish'
        },
        image: '麻婆豆腐封面.jpg',
        difficulty: 'intermediate',
        time: '20分钟 / 20 min',
        servings: '3人份 / 3 servings',
        scenario: 'potluck',
        ingredients: [
            {
                name: { zh: '嫩豆腐', en: 'Soft tofu' },
                amount: '1块 / 1 block',
                substitution: null
            },
            {
                name: { zh: '猪肉末', en: 'Ground pork' },
                amount: '100克 / 100g',
                substitution: { zh: '可用牛肉末代替', en: 'Ground beef can be substituted' }
            },
            {
                name: { zh: '豆瓣酱', en: 'Pixian bean paste' },
                amount: '1汤匙 / 1 tbsp',
                substitution: null
            },
            {
                name: { zh: '蒜', en: 'Garlic' },
                amount: '2瓣 / 2 cloves',
                substitution: null
            },
            {
                name: { zh: '姜', en: 'Ginger' },
                amount: '1小块 / 1 small piece',
                substitution: null
            },
            {
                name: { zh: '花椒粉', en: 'Sichuan pepper powder' },
                amount: '1茶匙 / 1 tsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '将豆腐切块，蒜切末，姜切末。',
                    en: 'Cut tofu into cubes, mince garlic and ginger.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '炒肉末', en: 'Stir-fry Pork' },
                description: {
                    zh: '热锅下油，放入猪肉末炒至变色，加入豆瓣酱、蒜末、姜末爆香。',
                    en: 'Heat oil in pan, add ground pork and stir-fry until color changes, add Pixian bean paste, minced garlic and ginger, stir-fry until fragrant.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '煮豆腐', en: 'Cook Tofu' },
                description: {
                    zh: '加入适量清水，放入豆腐块，大火煮开后转小火煮5分钟，加入花椒粉调味即可。',
                    en: 'Add an appropriate amount of water, add tofu cubes, bring to boil over high heat, turn to low heat and cook for 5 minutes, add Sichuan pepper powder to season.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '麻婆豆腐是川菜中的经典名菜，由清代四川成都的陈麻婆创制。这道菜以其麻辣鲜香的口感而闻名，豆腐嫩滑，肉末鲜香，是川菜"一菜一格"的代表。麻婆豆腐不仅在中国广受欢迎，在海外也享有盛誉，是外国人认识川菜的重要窗口。',
            en: 'Mapo Tofu is a classic dish in Sichuan cuisine, created by Chen Mapo in Chengdu, Sichuan during the Qing Dynasty. This dish is famous for its spicy, numbing and flavorful taste, with tender tofu and fragrant ground pork, representing the Sichuan cuisine concept of "one dish, one style". Mapo Tofu is not only popular in China but also renowned overseas, serving as an important window for foreigners to know Sichuan cuisine.'
        }
    },
    {
        id: 13,
        name: {
            zh: '春卷',
            en: 'Spring Rolls'
        },
        description: {
            zh: '酥脆可口，鲜香四溢，节日必备',
            en: 'Crispy, flavorful, essential for festivals'
        },
        image: '春卷封面.jpg',
        difficulty: 'intermediate',
        time: '30分钟 / 30 min',
        servings: '4人份 / 4 servings',
        scenario: 'potluck',
        ingredients: [
            {
                name: { zh: '春卷皮', en: 'Spring roll wrappers' },
                amount: '20张 / 20 pieces',
                substitution: null
            },
            {
                name: { zh: '猪肉末', en: 'Ground pork' },
                amount: '200克 / 200g',
                substitution: { zh: '可用鸡肉末代替', en: 'Ground chicken can be substituted' }
            },
            {
                name: { zh: '白菜', en: 'Napa cabbage' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '胡萝卜', en: 'Carrot' },
                amount: '1根 / 1 piece',
                substitution: null
            },
            {
                name: { zh: '食用油', en: 'Cooking oil' },
                amount: '适量 /适量',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备馅料', en: 'Prepare Filling' },
                description: {
                    zh: '将白菜、胡萝卜切碎，放入锅中焯水1分钟，捞出沥干。加入猪肉末、盐、生抽调味。',
                    en: 'Chop cabbage and carrot, blanch in boiling water for 1 minute, remove and drain. Add ground pork, salt, light soy sauce to season.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '包春卷', en: 'Make Spring Rolls' },
                description: {
                    zh: '取一张春卷皮，放入适量馅料，卷成卷状，用淀粉水封口。',
                    en: 'Take a spring roll wrapper, add an appropriate amount of filling, roll into a cylinder, seal with starch water.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '炸春卷', en: 'Deep-fry Spring Rolls' },
                description: {
                    zh: '锅中倒油，烧至六成热，放入春卷炸至金黄酥脆，捞出沥干油分即可。',
                    en: 'Heat oil in pan to 160°C, add spring rolls and deep-fry until golden and crispy, remove and drain oil.'
                },
                time: '5分钟 / 5 min'
            }
        ],
        culture: {
            zh: '春卷是中国传统的节日食品，象征着春天的到来和新年的希望。春卷的历史悠久，最早可以追溯到东晋时期。春卷的馅料多样，常见的有猪肉白菜、韭菜鸡蛋等。在中国，春卷常作为春节等传统节日的必备食品，也是聚会时的热门小吃。',
            en: 'Spring Rolls are traditional festival food in China, symbolizing the arrival of spring and hope for the new year. Spring Rolls have a long history, dating back to the Eastern Jin Dynasty. Spring Rolls have various fillings, with pork and cabbage, chives and eggs being common. In China, Spring Rolls are often served as essential food during traditional festivals like Spring Festival, and are also popular snacks at gatherings.'
        }
    }
];

let currentLang = 'zh';
let currentPage = 'home';
let currentRecipeId = null;
let currentCultureCategory = null;
let currentScenario = null;

function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value[k];
    }
    return value;
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    render();
}

function navigateTo(page, recipeId = null, cultureCategory = null, scenario = null) {
    currentPage = page;
    currentRecipeId = recipeId;
    currentCultureCategory = cultureCategory;
    currentScenario = scenario;
    render();
    window.scrollTo(0, 0);
}

function render() {
    const app = document.getElementById('app');
    
    let content = `
        <header>
            <div class="container">
                <nav>
                    <a href="#" class="logo" onclick="navigateTo('home'); return false;">
                        <span>🥢</span>
                        <span>中华美食 / Chinese Cuisine</span>
                    </a>
                    <ul class="nav-links">
                        <li><a href="#" onclick="navigateTo('home'); return false;" class="${currentPage === 'home' ? 'active' : ''}">${t('nav.home')}</a></li>
                        <li><a href="#" onclick="navigateTo('scenarios'); return false;" class="${currentPage === 'scenarios' ? 'active' : ''}">${t('nav.scenarios')}</a></li>
                        <li><a href="#" onclick="navigateTo('recipes', null, null, null); return false;" class="${currentPage === 'recipes' ? 'active' : ''}">${t('nav.recipes')}</a></li>
                        <li><a href="#" onclick="navigateTo('culture'); return false;" class="${currentPage === 'culture' ? 'active' : ''}">${t('nav.culture')}</a></li>
                    </ul>
                    <div class="lang-switch">
                        <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" data-lang="zh" onclick="setLanguage('zh')">中文</button>
                        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLanguage('en')">EN</button>
                    </div>
                </nav>
            </div>
        </header>
    `;

    if (currentPage === 'home') {
        content += renderHomePage();
    } else if (currentPage === 'scenarios') {
        content += renderScenariosPage();
    } else if (currentPage === 'recipes') {
        content += renderRecipesPage();
    } else if (currentPage === 'recipeDetail') {
        content += renderRecipeDetailPage();
    } else if (currentPage === 'culture') {
        if (currentCultureCategory) {
            content += renderCultureCategoryPage(currentCultureCategory);
        } else {
            content += renderCulturePage();
        }
    }

    content += `
        <footer>
            <div class="container">
                <p>${t('footer.text')}</p>
            </div>
        </footer>
    `;

    app.innerHTML = content;
}

function renderHomePage() {
    return `
        <section class="hero">
            <div class="container">
                <h1>${t('hero.title')}</h1>
                <p>${t('hero.subtitle')}</p>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">${t('scenarios.title')}</h2>
                <div class="scenarios-grid">
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'student')">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="${t('scenarios.student.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.student.title')}</h3>
                            <p>${t('scenarios.student.description')}</p>
                        </div>
                    </div>
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'potluck')">
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400" alt="${t('scenarios.potluck.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.potluck.title')}</h3>
                            <p>${t('scenarios.potluck.description')}</p>
                        </div>
                    </div>
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'festival')">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400" alt="${t('scenarios.festival.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.festival.title')}</h3>
                            <p>${t('scenarios.festival.description')}</p>
                        </div>
                    </div>
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'beginner')">
                        <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400" alt="${t('scenarios.beginner.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.beginner.title')}</h3>
                            <p>${t('scenarios.beginner.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section" style="background: var(--white);">
            <div class="container">
                <h2 class="section-title">${t('recipes.title')}</h2>
                <div class="recipe-grid">
                    ${recipes.slice(0, 4).map(recipe => renderRecipeCard(recipe)).join('')}
                </div>
                <div style="text-align: center; margin-top: 2rem;">
                    <a href="#" class="btn" onclick="navigateTo('recipes', null, null, null); return false;">${t('nav.recipes')}</a>
                </div>
            </div>
        </section>
    `;
}

function renderScenariosPage() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">${t('scenarios.title')}</h2>
                <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem;">${t('scenarios.subtitle')}</p>
                <div class="scenarios-grid">
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'student')">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="${t('scenarios.student.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.student.title')}</h3>
                            <p>${t('scenarios.student.description')}</p>
                        </div>
                    </div>
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'potluck')">
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400" alt="${t('scenarios.potluck.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.potluck.title')}</h3>
                            <p>${t('scenarios.potluck.description')}</p>
                        </div>
                    </div>
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'festival')">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400" alt="${t('scenarios.festival.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.festival.title')}</h3>
                            <p>${t('scenarios.festival.description')}</p>
                        </div>
                    </div>
                    <div class="scenario-card" onclick="navigateTo('recipes', null, null, 'beginner')">
                        <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400" alt="${t('scenarios.beginner.title')}">
                        <div class="scenario-card-content">
                            <h3>${t('scenarios.beginner.title')}</h3>
                            <p>${t('scenarios.beginner.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderRecipesPage() {
    const filteredRecipes = currentScenario 
        ? recipes.filter(recipe => Array.isArray(recipe.scenario) ? recipe.scenario.includes(currentScenario) : recipe.scenario === currentScenario)
        : recipes;
    
    const pageTitle = currentScenario 
        ? t(`scenarios.${currentScenario}.title`)
        : t('recipes.title');
    
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">${pageTitle}</h2>
                <div class="recipe-grid">
                    ${filteredRecipes.map(recipe => renderRecipeCard(recipe)).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderRecipeCard(recipe) {
    const difficultyText = t(`recipes.${recipe.difficulty}`);
    return `
        <div class="recipe-card" onclick="navigateTo('recipeDetail', ${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.name[currentLang]}">
            <div class="recipe-card-content">
                <h3>${recipe.name[currentLang]}</h3>
                <div class="meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>👥 ${recipe.servings}</span>
                </div>
                <span class="difficulty">${difficultyText}</span>
            </div>
        </div>
    `;
}

function renderRecipeDetailPage() {
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) return '';

    const difficultyText = t(`recipes.${recipe.difficulty}`);
    const videoSection = recipe.video ? `
        <div class="recipe-detail-section">
            <h2>${t('recipeDetail.video')}</h2>
            <div class="video-container">
                <video controls>
                    <source src="${recipe.video}" type="video/mp4">
                    ${currentLang === 'zh' ? '您的浏览器不支持视频播放。' : 'Your browser does not support video playback.'}
                </video>
            </div>
        </div>
    ` : '';

    return `
        <section class="section">
            <div class="container">
                <a href="#" class="back-btn" onclick="navigateTo('recipes', null, null, null); return false;">
                    ← ${t('recipeDetail.back')}
                </a>
                
                <div class="recipe-detail">
                    <div class="recipe-detail-header">
                        <img src="${recipe.image}" alt="${recipe.name[currentLang]}">
                        <div class="recipe-detail-header-content">
                            <h1>${recipe.name[currentLang]}</h1>
                            <div class="meta">
                                <span>⏱️ ${t('recipes.time')}: ${recipe.time}</span>
                                <span>👥 ${t('recipes.servings')}: ${recipe.servings}</span>
                                <span class="difficulty">${t('recipes.difficulty')}: ${difficultyText}</span>
                            </div>
                            <p>${recipe.description[currentLang]}</p>
                        </div>
                    </div>
                    
                    ${videoSection}
                    
                    <div class="recipe-detail-section">
                        <h2>${t('recipeDetail.ingredients')}</h2>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ing => `
                                <li>
                                    <span class="ingredient-name">${ing.name[currentLang]}</span>
                                    <span>
                                        ${ing.amount}
                                        ${ing.substitution ? `<span class="substitution">${t('recipeDetail.substitution')}: ${ing.substitution[currentLang]}</span>` : ''}
                                    </span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>${t('recipeDetail.steps')}</h2>
                        <ol class="steps-list">
                            ${recipe.steps.map(step => `
                                <li>
                                    <h4>${step.title[currentLang]}</h4>
                                    <p>${step.description[currentLang]}</p>
                                    <span class="time">${step.time}</span>
                                </li>
                            `).join('')}
                        </ol>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>${t('recipeDetail.culture')}</h2>
                        <div class="culture-box">
                            ${recipe.culture.illustration ? `<div class="culture-illustration"><img src="${recipe.culture.illustration}" alt="文化插画"></div>` : ''}
                            <p>${recipe.culture[currentLang].replace(/\n\n/g, '<br><br>')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderCulturePage() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">${t('nav.culture')}</h2>
                <p style="text-align: center; color: var(--text-light); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                    探索中华美食文化的精髓，从烹饪技法到餐桌礼仪，从节日习俗到限定美味
                </p>
                
                <div class="culture-categories-grid">
                    <div class="culture-category-card" onclick="navigateTo('culture', null, 'cooking')">
                        <div class="category-icon">🔥</div>
                        <h3>烹饪技法与哲学<br><span>Cooking Techniques & Philosophy</span></h3>
                        <p>探索中式烹饪的核心理念，了解锅气、爆炒等独特技法</p>
                        <div class="category-items">
                            <span>中式烹饪哲学</span>
                            <span>锅气</span>
                            <span>爆炒技法</span>
                            <span>调味平衡</span>
                        </div>
                    </div>
                    
                    <div class="culture-category-card" onclick="navigateTo('culture', null, 'etiquette')">
                        <div class="category-icon">🍽️</div>
                        <h3>餐桌礼仪与习俗<br><span>Table Etiquette & Customs</span></h3>
                        <p>学习中式用餐礼仪，了解座次安排、敬酒文化等传统习俗</p>
                        <div class="category-items">
                            <span>筷子使用礼仪</span>
                            <span>座次安排</span>
                            <span>上菜顺序</span>
                            <span>敬酒文化</span>
                            <span>用餐礼仪</span>
                        </div>
                    </div>
                    
                    <div class="culture-category-card" onclick="navigateTo('culture', null, 'festival')">
                        <div class="category-icon">🎊</div>
                        <h3>节日特殊菜限定菜<br><span>Festival & Seasonal Specialties</span></h3>
                        <p>了解中国传统节日的特色菜肴和限定美食，感受节日氛围</p>
                        <div class="category-items">
                            <span>春节年夜饭</span>
                            <span>中秋月饼</span>
                            <span>端午粽子</span>
                            <span>冬至饺子</span>
                            <span>腊八粥</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderCultureCategoryPage(category) {
    const categories = {
        cooking: {
            icon: '🔥',
            title: '烹饪技法与哲学 / Cooking Techniques & Philosophy',
            description: '探索中式烹饪的核心理念，了解锅气、爆炒等独特技法',
            content: `
                <div class="culture-subsections-grid">
                    <div class="recipe-detail-section">
                        <h2>中式烹饪哲学 / Chinese Culinary Philosophy</h2>
                        <p style="margin-bottom: 1rem;">
                            中式烹饪强调"天人合一"的理念，注重食材的天然本味和营养平衡。通过不同的烹饪技法，如炒、蒸、煮、炖、炸等，最大程度地保留食材的营养成分，同时创造出丰富的口感层次。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            中国烹饪哲学讲究"以味为核心，以养为目的"，认为饮食不仅是为了饱腹，更是一种生活艺术和养生之道。厨师需要根据季节变化选择合适的食材，根据食材的特性选择合适的烹饪方法，以达到"色香味形意"的完美统一。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Chinese cooking emphasizes the philosophy of "harmony between heaven and humanity," focusing on the natural flavors of ingredients and nutritional balance. Through various cooking techniques such as stir-frying, steaming, boiling, braising, and deep-frying, the nutritional content of ingredients is maximally preserved while creating rich layers of texture and flavor.
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Chinese culinary philosophy emphasizes "taking flavor as the core and nutrition as the purpose," believing that eating is not only for satiety but also a living art and a way of health preservation. Chefs need to select appropriate ingredients according to seasonal changes and choose suitable cooking methods based on the characteristics of ingredients to achieve the perfect unity of "color, aroma, taste, shape, and meaning."
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>锅气 / Wok Hei</h2>
                        <p style="margin-bottom: 1rem;">
                            "锅气"是中式烹饪中一个难以量化的概念，指的是在高温快炒过程中，食材与锅具接触产生的独特香气和口感。这种香气是中餐炒菜的灵魂，需要掌握火候、油温、翻炒速度等多个要素。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            "Wok Hei" is a difficult-to-quantify concept in Chinese cooking, referring to the unique aroma and texture produced when ingredients come into contact with the wok during high-temperature quick stir-frying. This aroma is the soul of Chinese stir-fry dishes and requires mastery of multiple elements including heat control, oil temperature, and stirring speed.
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>爆炒技法 / Quick Stir-fry Technique</h2>
                        <p style="margin-bottom: 1rem;">
                            爆炒是中餐最常用的烹饪技法之一，特点是火力大、速度快、时间短。关键在于提前准备好所有食材和调料（备菜），锅要热、油要热，动作要快。爆炒能最大程度地保持食材的脆嫩口感和营养成分。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Quick stir-fry is one of the most common Chinese cooking techniques, characterized by high heat, fast speed, and short cooking time. The key is to prepare all ingredients and seasonings in advance (mise en place), ensure the wok and oil are hot, and move quickly. Quick stir-fry maximizes the preservation of ingredients' crisp texture and nutritional content.
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>调味平衡 / Flavor Balance</h2>
                        <p style="margin-bottom: 1rem;">
                            中餐调味讲究"五味调和"，即酸、甜、苦、辣、咸的平衡。不同菜系有不同的调味特点，但都追求味道的和谐统一。通过巧妙搭配各种调料，创造出层次丰富但不杂乱的味道。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            调味的艺术在于"恰到好处"，过多的调料会掩盖食材的本味，过少则会使菜品单调。例如，做鱼时加一点醋可以去腥增鲜，做肉时加一点糖可以提鲜解腻。这种微妙的平衡需要厨师通过长期实践来掌握。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Chinese seasoning emphasizes the "harmony of five flavors" - the balance of sour, sweet, bitter, spicy, and salty. Different regional cuisines have different seasoning characteristics, but all pursue a harmonious unity of flavors. Through clever combinations of various seasonings, rich but not chaotic flavors are created.
                        </p>
                        <p style="margin-bottom: 1rem;">
                            The art of seasoning lies in "just right" - too many seasonings will mask the original flavor of the ingredients, while too few will make the dish monotonous. For example, adding a little vinegar when cooking fish can remove fishy smell and enhance freshness, while adding a little sugar when cooking meat can enhance freshness and reduce greasiness. This subtle balance requires chefs to master through long-term practice.
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>🍅 约 / About "Yue"</h2>
                        <p style="margin-bottom: 1rem;">
                            "约"（例：糖约番茄）不是精确步骤，而是一种感觉。轻轻拌一下，尝一口，再决定要不要加。它代表的是：边做边判断，而不是一次到位。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            <strong>Translation for foreign users:</strong> gently mix and adjust by taste
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>🍲 收 / About "Shou"</h2>
                        <p style="margin-bottom: 1rem;">
                            "收"（例：收汁）不是把汤煮干，而是让味道"贴"在食材上。锅里还有一点汁，但能挂住食物。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            <strong>Translation for foreign users:</strong> reduce the sauce until it coats the ingredients
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>🌶 呛 / About "Qiang"</h2>
                        <p style="margin-bottom: 1rem;">
                            "呛"（例：呛锅、呛油）不是呛人，而是用热油瞬间激发香料的味道。时间很短，但香味会一下子出来。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            <strong>Translation for foreign users:</strong> flash heat spices in hot oil to release aroma
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>🧂 提味 / About "Ti Wei"</h2>
                        <p style="margin-bottom: 1rem;">
                            "提味"不是多放盐，而是让味道更清楚。一点糖、一点醋，都是在"提"，不是在抢味。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            <strong>Translation for foreign users:</strong> enhance and balance flavor
                        </p>
                    </div>
                </div>
            `
        },
        etiquette: {
            icon: '🍽️',
            title: '餐桌礼仪与习俗 / Table Etiquette & Customs',
            description: '学习中式用餐礼仪，了解座次安排、敬酒文化等传统习俗',
            content: `
                <div class="culture-subsections-grid">
                    <div class="recipe-detail-section">
                        <h2>筷子使用礼仪 / Chopstick Etiquette</h2>
                        <p style="margin-bottom: 1rem;">
                            <strong>禁忌 / Taboos：</strong><br>
                            • 不要用筷子指人或指食物 / Do not point at people or food with chopsticks<br>
                            • 不要将筷子直立插在饭中（类似祭祀仪式）/ Do not stick chopsticks upright in rice (similar to funeral rituals)<br>
                            • 不要用筷子敲击碗盘 / Do not tap bowls or plates with chopsticks<br>
                            • 不要在菜盘中翻找 / Do not dig through dishes to find preferred pieces<br>
                            • 不要将筷子交叉放置 / Do not cross chopsticks when placing them
                        </p>
                        <p style="margin-bottom: 1rem;">
                            <strong>正确做法 / Proper Usage：</strong><br>
                            • 给长辈或客人夹菜要用公筷 / Use serving chopsticks when serving elders or guests<br>
                            • 暂时不吃时，将筷子放在筷架上 / Place chopsticks on the rest when not eating<br>
                            • 用餐完毕，将筷子整齐放在碗边 / Place chopsticks neatly beside the bowl when finished
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>座次安排 / Seating Arrangements</h2>
                        <p style="margin-bottom: 1rem;">
                            中餐座次体现了尊卑有序的文化传统。正对门的座位是主位（上座），通常由最年长或地位最高的客人就座。主人通常坐在主位对面或旁边。入座时应等待长辈或客人先入座，晚辈或地位较低者最后入座。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Chinese seating arrangements reflect the cultural tradition of respecting hierarchy. The seat facing the door is the seat of honor (main seat), usually occupied by the eldest or highest-ranking guest. The host typically sits opposite or beside the main seat. When taking seats, wait for elders or guests to be seated first; juniors or those of lower status sit last.
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>上菜顺序 / Serving Order</h2>
                        <p style="margin-bottom: 1rem;">
                            传统中餐的上菜顺序有讲究：先冷后热、先咸后甜、先荤后素。正式宴席通常先上凉菜，然后是热菜，最后是汤和主食。现代家庭用餐顺序较为灵活，但仍遵循先上主菜后上主食的基本原则。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Traditional Chinese serving order follows specific principles: cold dishes before hot, savory before sweet, meat dishes before vegetables. Formal banquets typically start with cold dishes, followed by hot dishes, and finally soup and staples. Modern family dining is more flexible but still follows the basic principle of serving main dishes before staples.
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>敬酒文化 / Toasting Culture</h2>
                        <p style="margin-bottom: 1rem;">
                            敬酒是中餐文化中的重要环节，表达尊重和友谊。敬酒时，晚辈或下级的酒杯应低于长辈或上级的酒杯。碰杯时要注视对方眼睛，表达真诚。在正式场合，敬酒通常有固定的顺序和礼仪，体现了中国文化的等级观念和人情世故。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Toasting is an important part of Chinese dining culture, expressing respect and friendship. When toasting, the glass of the junior or subordinate should be held lower than that of the elder or superior. When clinking glasses, maintain eye contact to show sincerity. In formal settings, toasting follows a specific order and etiquette, reflecting Chinese cultural concepts of hierarchy and social relations.
                        </p>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>用餐礼仪 / Dining Etiquette</h2>
                        <p style="margin-bottom: 1rem;">
                            <strong>基本礼仪 / Basic Etiquette：</strong><br>
                            • 等所有人到齐后再开始用餐 / Wait for everyone to arrive before starting<br>
                            • 不要大声咀嚼或发出声音 / Chew quietly and avoid making loud noises<br>
                            • 不要在嘴里有食物时说话 / Do not speak with food in your mouth<br>
                            • 取菜时要适量，不要浪费 / Take appropriate portions and avoid waste<br>
                            • 用餐结束时，向主人表示感谢 / Thank the host when the meal ends
                        </p>
                    </div>
                </div>
            `
        },
        festival: {
            icon: '🎊',
            title: '节日特殊菜限定菜 / Festival & Seasonal Specialties',
            description: '了解中国传统节日的特色菜肴和限定美食，感受节日氛围',
            content: `
                <div class="culture-subsections-grid">
                    <div class="recipe-detail-section">
                        <h2>春节年夜饭 / Chinese New Year Eve Dinner</h2>
                        <p style="margin-bottom: 1rem;">
                            春节是中国最重要的传统节日，年夜饭是除夕夜的重头戏。每道菜都有吉祥寓意：鱼象征年年有余，饺子象征招财进宝，年糕象征步步高升。全家团聚共享年夜饭，是中国人最重要的家庭传统。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            The Spring Festival is the most important traditional Chinese holiday, and the New Year's Eve dinner is the highlight of the night. Every dish has auspicious meanings: fish symbolizes abundance year after year, dumplings symbolize bringing in wealth, and rice cakes symbolize rising step by step. The whole family gathering to share the New Year's Eve dinner is the most important family tradition in China.
                        </p>
                        <div class="festival-dishes">
                            <strong>经典菜肴 / Classic Dishes：</strong><br>
                            • 鱼象征年年有余 / Fish - symbolizing abundance<br>
                            • 饺子象征招财进宝 / Dumplings - symbolizing wealth<br>
                            • 年糕象征步步高升 / Rice cakes - symbolizing progress<br>
                            • 春卷象征黄金万两 / Spring rolls - symbolizing prosperity<br>
                            • 汤圆象征团团圆圆 / Tangyuan - symbolizing reunion
                        </div>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>中秋月饼 / Mid-Autumn Festival Mooncakes</h2>
                        <p style="margin-bottom: 1rem;">
                            中秋节是仅次于春节的第二大传统节日，月饼是必不可少的节日食品。月饼象征团圆，家人围坐赏月吃月饼，寄托对远方亲人的思念。月饼种类繁多，有广式、苏式、京式等不同流派，内馅也有豆沙、莲蓉、五仁等多种选择。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            The Mid-Autumn Festival is the second most important traditional holiday after the Spring Festival, and mooncakes are essential festival foods. Mooncakes symbolize reunion, and families gather to admire the moon and eat mooncakes, expressing longing for distant loved ones. There are many types of mooncakes, including Cantonese, Suzhou, and Beijing styles, with various fillings such as red bean paste, lotus seed paste, and five nuts.
                        </p>
                        <div class="festival-dishes">
                            <strong>月饼种类 / Mooncake Varieties：</strong><br>
                            • 广式月饼 - 皮薄馅大，口感细腻 / Cantonese - thin crust, generous filling, delicate texture<br>
                            • 苏式月饼 - 层次分明，酥脆可口 / Suzhou - distinct layers, crispy and delicious<br>
                            • 京式月饼 - 甜而不腻，传统风味 / Beijing - sweet but not greasy, traditional flavor<br>
                            • 冰皮月饼 - 现代创新，清凉爽口 / Snow skin - modern innovation, refreshing
                        </div>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>端午粽子 / Dragon Boat Festival Zongzi</h2>
                        <p style="margin-bottom: 1rem;">
                            端午节吃粽子是为了纪念爱国诗人屈原。粽子用竹叶或芦苇叶包裹糯米，内馅有咸甜之分。南方偏爱肉粽、蛋黄粽，北方则喜欢红枣粽、豆沙粽。包粽子是重要的家庭活动，代代相传。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            Eating zongzi during the Dragon Boat Festival commemorates the patriotic poet Qu Yuan. Zongzi are made by wrapping glutinous rice in bamboo or reed leaves, with fillings that can be savory or sweet. The south prefers meat and egg yolk zongzi, while the north likes red date and bean paste zongzi. Making zongzi is an important family activity passed down through generations.
                        </p>
                        <div class="festival-dishes">
                            <strong>粽子种类 / Zongzi Varieties：</strong><br>
                            • 肉粽 - 咸香可口，南方特色 / Meat - savory and delicious, southern specialty<br>
                            • 红枣粽 - 甜美软糯，北方传统 / Red date - sweet and soft, northern tradition<br>
                            • 蛋黄粽 - 油润香浓，广式风味 / Egg yolk - rich and fragrant, Cantonese style<br>
                            • 豆沙粽 - 细腻香甜，老少皆宜 / Bean paste - delicate and sweet, suitable for all ages
                        </div>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>冬至饺子 / Winter Solstice Dumplings</h2>
                        <p style="margin-bottom: 1rem;">
                            冬至是中国二十四节气之一，有"冬至大如年"的说法。北方有冬至吃饺子的习俗，相传是为了纪念医圣张仲景，他用羊肉和药材包成饺子，治好了百姓的冻耳朵。现在冬至吃饺子已成为北方的重要传统。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            The Winter Solstice is one of China's 24 solar terms, with the saying "Winter Solstice is as important as New Year." The north has the custom of eating dumplings on Winter Solstice, said to commemorate the medical sage Zhang Zhongjing, who wrapped mutton and medicinal herbs in dumplings to cure people's frozen ears. Now eating dumplings on Winter Solstice has become an important tradition in the north.
                        </p>
                        <div class="festival-dishes">
                            <strong>饺子种类 / Dumpling Varieties：</strong><br>
                            • 白菜猪肉馅 - 经典搭配，家常味道 / Cabbage pork - classic combination, home-style flavor<br>
                            • 韭菜鸡蛋馅 - 鲜香可口，素食首选 / Chives egg - fresh and delicious, vegetarian choice<br>
                            • 三鲜馅 - 海鲜丰富，口感鲜美 / Three delicacies - rich seafood, delicious taste<br>
                            • 羊肉胡萝卜馅 - 温补养生，冬季特色 / Mutton carrot - warming and nourishing, winter specialty
                        </div>
                    </div>
                    
                    <div class="recipe-detail-section">
                        <h2>腊八粥 / Laba Porridge</h2>
                        <p style="margin-bottom: 1rem;">
                            腊八节在农历十二月初八，喝腊八粥是传统习俗。腊八粥用多种谷物、豆类、干果熬制而成，营养丰富，寓意五谷丰登。民间有"过了腊八就是年"的说法，喝腊八粥也标志着春节序幕的拉开。
                        </p>
                        <p style="margin-bottom: 1rem;">
                            The Laba Festival falls on the eighth day of the twelfth lunar month, and eating Laba porridge is a traditional custom. Laba porridge is made by simmering various grains, beans, and dried fruits, rich in nutrition and symbolizing abundant harvests. There is a folk saying "After Laba, it's New Year," and drinking Laba porridge also marks the beginning of the Spring Festival.
                        </p>
                        <div class="festival-dishes">
                            <strong>腊八粥配料 / Laba Porridge Ingredients：</strong><br>
                            • 谷物类：大米、小米、糯米、高粱米 / Grains: rice, millet, glutinous rice, sorghum<br>
                            • 豆类：红豆、绿豆、芸豆、花生 / Beans: red beans, mung beans, kidney beans, peanuts<br>
                            • 干果类：红枣、桂圆、莲子、核桃 / Dried fruits: red dates, longan, lotus seeds, walnuts<br>
                            • 其他：栗子、葡萄干、枸杞 / Others: chestnuts, raisins, goji berries
                        </div>
                    </div>
                </div>
            `
        }
    };

    const cat = categories[category];
    if (!cat) return '';

    return `
        <section class="section">
            <div class="container">
                <a href="#" class="back-btn" onclick="navigateTo('culture'); return false;">
                    ← 返回文化故事 / Back to Culture
                </a>
                
                <div class="culture-category-detail">
                    <div class="category-header">
                        <span class="category-icon-large">${cat.icon}</span>
                        <h1>${cat.title}</h1>
                        <p>${cat.description}</p>
                    </div>
                    
                    ${cat.content}
                </div>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
});