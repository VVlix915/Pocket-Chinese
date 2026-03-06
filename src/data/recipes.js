export const recipes = [
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
        image: 'assets/images/covers/番茄炒蛋封面.jpg',
        video: 'assets/videos/番茄炒蛋.mp4',
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
            illustration: 'assets/images/cultural/番茄炒蛋-文化.png'
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
        image: 'assets/images/covers/宫保鸡丁封面.jpg',
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
        image: 'assets/images/covers/红烧肉封面.jpg',
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
        image: 'assets/images/covers/上汤娃娃菜封面.jpg',
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
        image: 'assets/images/covers/凉拌黄瓜封面.jpg',
        video: 'assets/videos/凉拌黄瓜2.mp4',
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
            illustration: 'assets/images/cultural/凉拌黄瓜-文化.jpg'
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
        image: 'assets/images/covers/糖醋排骨封面.jpg',
        video: 'assets/videos/糖醋排骨更新版.mp4',
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
            illustration: 'assets/images/cultural/糖醋排骨-文化.png'
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
        image: 'assets/images/covers/锅贴封面.jpg',
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
        image: 'assets/images/covers/口水鸡封面.jpg',
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
                    en: 'Wash chicken legs, put in pot with cold water covering chicken, bring to boil over high heat, turn to low heat and cook for 15 minutes, turn off heat and simmer for 10 minutes.'
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
        image: 'assets/images/covers/鱼香茄子封面.jpg',
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
        image: 'assets/images/covers/糖拌番茄封面.jpg',
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
        image: 'assets/images/covers/蛋炒饭封面.jpg',
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
                    en: 'Add a little more oil to pan, add rice and break apart, add the cooked eggs, season with salt, sprinkle with green onions and stir-fry evenly.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '蛋炒饭是中国最经典的主食之一，几乎每个中国人都会做。这道菜看似简单，实则需要一定的技巧才能炒出粒粒分明的效果。蛋炒饭不仅可以作为主食，也可以作为一道菜，是剩米饭的绝佳去处。在海外，蛋炒饭也是最受欢迎的中餐之一。',
            en: 'Egg Fried Rice is one of the most classic staple foods in China, almost every Chinese person knows how to make it. This dish appears simple, but actually requires certain skills to achieve separate grains. Egg Fried Rice can be served as a staple food or as a dish, and it is an excellent way to use leftover rice. Overseas, Egg Fried Rice is also one of the most popular Chinese dishes.'
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
        image: 'assets/images/covers/麻婆豆腐封面.jpg',
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
        image: 'assets/images/covers/春卷封面.jpg',
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
                amount: '适量 / as needed',
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
    },
    {
        id: 14,
        name: {
            zh: '葱油面',
            en: 'Scallion Oil Noodles'
        },
        description: {
            zh: '简单快手，葱香浓郁，上海经典',
            en: 'Simple and quick, rich scallion aroma, Shanghai classic'
        },
        image: 'assets/images/covers/葱油面封面.jpg',
        video: 'assets/videos/葱油面.mp4',
        difficulty: 'beginner',
        spiciness: 0,
        time: '15分钟 / 15 min',
        servings: '1人份 / 1 servings',
        scenario: ['student'],
        ingredients: [
            {
                name: { zh: '小葱', en: 'Scallions' },
                amount: '5根 / 5 stalks',
                substitution: { zh: '可用大葱代替', en: 'Large green onions can be substituted' }
            },
            {
                name: { zh: '面条', en: 'Noodles' },
                amount: '100克 / 100g',
                substitution: { zh: '可用挂面代替', en: 'Dried noodles can be used' }
            },
            {
                name: { zh: '食用油', en: 'Cooking oil' },
                amount: '3汤匙 / 3 tbsp',
                substitution: { zh: '可用花生油或菜籽油', en: 'Peanut oil or canola oil can be used' }
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用酱油代替', en: 'Soy sauce can be substituted' }
            },
            {
                name: { zh: '老抽', en: 'Dark soy sauce' },
                amount: '1茶匙 / 1 tsp',
                substitution: { zh: '可省略', en: 'Can be omitted' }
            },
            {
                name: { zh: '糖', en: 'Sugar' },
                amount: '1茶匙(约2克) / 1 tsp (about 2g)',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备小葱', en: 'Prepare Scallions' },
                description: {
                    zh: '将小葱洗净，切成5厘米长的段，葱白和葱绿分开。',
                    en: 'Wash the scallions and cut into 5cm segments, separate white and green parts.'
                },
                time: '2分钟 / 2 min'
            },
            {
                title: { zh: '炸葱油', en: 'Make Scallion Oil' },
                description: {
                    zh: '锅中倒入食用油，小火加热，先放入葱白，炸至微黄后加入葱绿，继续炸至焦黄关火。',
                    en: 'Pour cooking oil into pan, heat over low heat. Add scallion whites first, fry until light yellow, then add scallion greens, continue frying until browned, then turn off heat.'
                },
                time: '8分钟 / 8 min'
            },
            {
                title: { zh: '调酱汁', en: 'Make Sauce' },
                description: {
                    zh: '在炸好的葱油中加入生抽、老抽和糖，搅拌均匀。',
                    en: 'Add light soy sauce, dark soy sauce, and sugar to the scallion oil, mix well.'
                },
                time: '1分钟 / 1 min'
            },
            {
                title: { zh: '煮面条', en: 'Cook Noodles' },
                description: {
                    zh: '另起锅烧开水，放入面条煮熟，捞出沥干。',
                    en: 'Bring water to boil in another pot, add noodles and cook until done, drain well.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '拌面', en: 'Mix Noodles' },
                description: {
                    zh: '将煮好的面条放入碗中，倒入调好的葱油酱汁，撒上炸好的葱段，拌匀即可。',
                    en: 'Place cooked noodles in a bowl, pour over scallion oil sauce, top with fried scallions, and mix well.'
                },
                time: '1分钟 / 1 min'
            }
        ],
        culture: {
            zh: '葱油面是上海最具代表性的家常面食之一，也是许多上海人记忆中"妈妈的味道"。这道菜看似简单，却蕴含着上海人对美食的精致追求。关键在于炸葱油的火候——火太小，葱不出香味；火太大，葱容易焦苦。只有恰到好处的火候，才能炸出金黄酥脆、香气扑鼻的葱段。葱油面的魅力在于它的"简单而不简陋"。一碗热腾腾的面条，淋上浓郁的葱油，撒上酥脆的葱段，每一口都是满满的幸福感。在快节奏的现代生活中，葱油面因其制作简单、营养丰富，成为了许多独居者的首选。它不需要复杂的调料，也不需要高超的技巧，却能在最短的时间内温暖人心。对于留学生来说，葱油面更是一种慰藉——在异国他乡，一碗葱油面就能让人想起家的味道，想起妈妈在厨房忙碌的身影。\n\n**历史背景**：葱油面是上海的传统面食，起源于20世纪初。它的制作简单，但风味独特，体现了上海菜"浓油赤酱"的特点。\n\n**文化意义**：葱油面被称为"上海人的早餐"，承载着上海人的集体记忆。它的简单性和美味性使其成为上海饮食文化的代表之一。\n\n**社交场景**：适合作为早餐、午餐或简单的晚餐。在家庭聚餐中，葱油面常常作为主食出现。',
            en: 'Scallion Oil Noodles is one of the most representative home-style noodle dishes in Shanghai, and for many Shanghai people, it represents "the taste of mom." This dish may seem simple, but it embodies the Shanghai people\'s refined pursuit of food. The key lies in the heat control when frying the scallions—if the heat is too low, the scallions won\'t release their aroma; if too high, they\'ll burn and become bitter. Only with just the right heat can you achieve golden, crispy, and fragrant scallion segments. The charm of Scallion Oil Noodles lies in its "simplicity without being simplistic." A bowl of hot noodles, drizzled with rich scallion oil, topped with crispy scallion segments—every bite is full of happiness. In the fast-paced modern life, Scallion Oil Noodles has become a top choice for many people living alone because it\'s simple to make and nutritious. It doesn\'t require complex seasonings or high-level skills, yet it can warm people\'s hearts in the shortest time. For international students, Scallion Oil Noodles is even more of a comfort food—in a foreign land, a bowl of scallion oil noodles can evoke memories of home and the image of mom busy in the kitchen.\n\n**Historical Background**: Scallion Oil Noodles is a traditional Shanghai noodle dish that originated in the early 20th century. Its preparation is simple but has a unique flavor, embodying the "rich oil and red sauce" characteristic of Shanghai cuisine.\n\n**Cultural Significance**: Scallion Oil Noodles is known as "Shanghai people\'s breakfast," carrying the collective memory of Shanghai people. Its simplicity and deliciousness make it one of the representatives of Shanghai food culture.\n\n**Social Scenarios**: Suitable as breakfast, lunch, or a simple dinner. In family meals, Scallion Oil Noodles often appears as the staple food.'
        }
    },
    {
        id: 15,
        name: {
            zh: '饺子',
            en: 'Dumplings'
        },
        description: {
            zh: '北方春节必备，象征财富，形似元宝',
            en: 'Essential for Northern Chinese Spring Festival, symbolizes wealth, shaped like ingots'
        },
        image: 'assets/images/covers/饺子封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '60分钟 / 60 min',
        servings: '4人份 / 4 servings',
        scenario: 'springFestival',
        ingredients: [
            {
                name: { zh: '猪肉末', en: 'Ground pork' },
                amount: '500克 / 500g',
                substitution: { zh: '可用牛肉末（美国：Walmart、Target；英国：Tesco、Sainsbury\'s）、鸡肉末（美国：Walmart、Kroger；英国：Tesco、ASDA）或豆腐末（美国：Whole Foods、Asian Market；英国：Tesco、Asian Store）代替。牛肉末：肉质更紧实，风味更浓郁；鸡肉末：口感更细腻，味道更清淡；豆腐末：口感软嫩，适合素食者', en: 'Ground beef (USA: Walmart, Target; UK: Tesco, Sainsbury\'s), chicken (USA: Walmart, Kroger; UK: Tesco, ASDA), or tofu (USA: Whole Foods, Asian Market; UK: Tesco, Asian Store) can be substituted. Ground beef: firmer texture, richer flavor; ground chicken: more delicate texture, milder taste; tofu: soft texture, suitable for vegetarians' }
            },
            {
                name: { zh: '饺子皮', en: 'Dumpling wrappers' },
                amount: '50张 / 50 pieces',
                substitution: null
            },
            {
                name: { zh: '白菜', en: 'Napa cabbage' },
                amount: '200克 / 200g',
                substitution: { zh: '可用韭菜（美国：Walmart、Kroger；英国：Tesco、Sainsbury\'s）代替。韭菜：辛香更突出、馅料更紧实、整体风味更浓', en: 'Chives (USA: Walmart, Kroger; UK: Tesco, Sainsbury\'s) can be substituted. Chives: more prominent aromatic flavor, firmer filling, richer overall taste' }
            },
            {
                name: { zh: '葱', en: 'Green onions' },
                amount: '2根 / 2 pieces',
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
                name: { zh: '盐', en: 'Salt' },
                amount: '1茶匙(约2克) / 1 tsp (about 2g)',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备馅料', en: 'Prepare Filling' },
                description: {
                    zh: '将白菜切碎，挤干水分。葱、姜切末。将所有食材混合，加入调料搅拌均匀。',
                    en: 'Chop cabbage and squeeze out water. Mince green onions and ginger. Mix all ingredients, add seasonings and stir well.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '包饺子', en: 'Make Dumplings' },
                description: {
                    zh: '取一张饺子皮，放入适量馅料，对折捏紧边缘，形成月牙形。',
                    en: 'Take a dumpling wrapper, add appropriate amount of filling, fold in half and pinch the edges tightly to form a crescent shape.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '煮饺子', en: 'Cook Dumplings' },
                description: {
                    zh: '锅中烧开水，放入饺子，水开后加三次冷水，饺子浮起即可。',
                    en: 'Boil water in a pot, add dumplings, add cold water three times after water boils, dumplings are ready when they float.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '饺子是中国北方春节的必备食品，象征着财富和好运。饺子的形状像古代的元宝，因此被认为能带来财运。在北方，除夕夜全家人围坐在一起包饺子是一项重要的传统活动，有些家庭还会在饺子里包入硬币、糖果等，象征着新的一年会有好运。饺子的历史悠久，最早可以追溯到东汉时期的张仲景。传说他用羊肉、辣椒和一些驱寒的药材包在面皮里，煮熟后分给穷人，治好了他们的冻耳朵。这就是饺子的起源，也是为什么饺子在北方被称为"扁食"或"煮角"。如今，饺子已经成为中国最受欢迎的传统食品之一，不仅在春节，在其他重要节日和家庭聚会上也经常出现。饺子的馅料多样，有猪肉白菜、韭菜鸡蛋、三鲜等多种口味，适应不同人的喜好。\n\n**历史背景**：饺子的历史可以追溯到东汉时期，由张仲景发明。最初是作为药用，后来逐渐演变为食物。在唐代，饺子已经成为常见的食品。\n\n**文化意义**：饺子象征着财富和好运，常出现在春节等传统节日中。它的形状像金元宝，象征着财运。在北方，除夕夜包饺子是一项重要的传统活动。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是春节等传统节日的必备食品。在北方，饺子常常作为年夜饭的主角出现。',
            en: 'Dumplings are essential food for Northern Chinese Spring Festival, symbolizing wealth and good luck. The shape of dumplings resembles ancient Chinese ingots, so they are believed to bring financial fortune. In Northern China, the whole family gathering to make dumplings on New Year\'s Eve is an important traditional activity. Some families even wrap coins, candies, etc. in dumplings, symbolizing good luck in the new year. Dumplings have a long history, dating back to Zhang Zhongjing in the Eastern Han Dynasty. Legend has it that he wrapped mutton, chili peppers and some cold-dispelling medicinal herbs in dough, cooked them and distributed them to poor people, curing their frostbitten ears. This is the origin of dumplings, and why dumplings are called "bianshi" or "zhujiao" in Northern China. Today, dumplings have become one of the most popular traditional foods in China, not only during Spring Festival but also at other important festivals and family gatherings. Dumplings have various fillings, including pork and cabbage, chives and eggs, three delicacies, etc., to suit different people\'s preferences.\n\n**Historical Background**: The history of dumplings can be traced back to the Eastern Han Dynasty, invented by Zhang Zhongjing. Initially used as medicine, later gradually evolved into food. In the Tang Dynasty, dumplings had become a common food.\n\n**Cultural Significance**: Dumplings symbolize wealth and good luck, often appearing in traditional festivals like Spring Festival. Their shape resembles gold ingots, symbolizing financial fortune. In northern China, making dumplings on New Year\'s Eve is an important traditional activity.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Spring Festival. In northern China, dumplings often appear as the main dish in the New Year\'s Eve dinner.'
        }
    },
    {
        id: 16,
        name: {
            zh: '年糕',
            en: 'Rice Cake'
        },
        description: {
            zh: '南方春节必备，象征年年高升',
            en: 'Essential for Southern Chinese Spring Festival, symbolizes advancement year after year'
        },
        image: 'assets/images/covers/年糕封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '40分钟 / 40 min',
        servings: '4人份 / 4 servings',
        scenario: 'springFestival',
        ingredients: [
            {
                name: { zh: '糯米粉', en: 'Glutinous rice flour' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '150克 / 150g',
                substitution: null
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '300毫升 / 300ml',
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
                title: { zh: '准备糯米糊', en: 'Prepare Glutinous Rice Batter' },
                description: {
                    zh: '将糯米粉、白糖混合，逐渐加入水，搅拌成均匀的糊状。',
                    en: 'Mix glutinous rice flour and white sugar, gradually add water, stir into a uniform batter.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '蒸年糕', en: 'Steam Rice Cake' },
                description: {
                    zh: '容器刷油，倒入糯米糊，大火蒸30分钟，取出冷却。',
                    en: 'Brush oil on container, pour in glutinous rice batter, steam over high heat for 30 minutes, remove and cool.'
                },
                time: '30分钟 / 30 min'
            }
        ],
        culture: {
            zh: '年糕是中国南方春节的必备食品，象征着"年年高升"。年糕的发音"年糕"与"年高"谐音，寓意着人们的生活和事业一年比一年好。在南方，特别是江浙沪一带，春节期间家家户户都会准备年糕，作为节日的重要食品。年糕的历史可以追溯到春秋战国时期，当时吴国大夫伍子胥为了防止越国入侵，在苏州城的城墙下埋了大量的糯米粉。后来越国果然入侵，苏州城被围困，城内粮食断绝，人们想起了伍子胥的话，挖开城墙，发现了糯米粉，于是用它做成了年糕，度过了难关。为了纪念伍子胥，苏州人每年都要做年糕。年糕的做法多样，有蒸、煮、炒、炸等多种方式。常见的有红糖年糕、白糖年糕、桂花年糕等。在南方，年糕不仅是春节的食品，也是日常的小吃，深受人们的喜爱。\n\n**历史背景**：年糕的历史可以追溯到春秋战国时期，与吴国大夫伍子胥有关。传说伍子胥为了防止越国入侵，在苏州城的城墙下埋了大量的糯米粉，后来这些糯米粉帮助苏州人度过了难关。\n\n**文化意义**：年糕象征着"年年高升"，常出现在春节等传统节日中。它的发音与"年高"谐音，寓意着人们的生活和事业一年比一年好。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是春节等传统节日的必备食品。在南方，年糕常常作为年夜饭的一道菜品出现。',
            en: 'Rice Cake is essential food for Southern Chinese Spring Festival, symbolizing "advancement year after year". The pronunciation of "年糕" (rice cake) is homophonous with "年高" (yearly advancement) in Chinese, implying that people\'s lives and careers get better year by year. In Southern China, especially in Jiangsu, Zhejiang and Shanghai areas, every household prepares rice cakes during Spring Festival as an important festival food. The history of rice cakes can be traced back to the Spring and Autumn Period. At that time, Wu Zixu, a minister of the Wu State, buried a large amount of glutinous rice flour under the city wall of Suzhou to prevent invasion by the Yue State. Later, the Yue State indeed invaded, Suzhou City was besieged, and food in the city was exhausted. People remembered Wu Zixu\'s words, dug open the city wall, found the glutinous rice flour, made rice cakes with it, and survived the crisis. To commemorate Wu Zixu, Suzhou people make rice cakes every year. Rice cakes can be prepared in various ways, including steaming, boiling, stir-frying, and deep-frying. Common types include brown sugar rice cakes, white sugar rice cakes, and osmanthus rice cakes. In Southern China, rice cakes are not only Spring Festival food but also daily snacks, deeply loved by people.\n\n**Historical Background**: The history of rice cakes can be traced back to the Spring and Autumn Period, related to Wu Zixu, a minister of the Wu State. Legend has it that Wu Zixu buried a large amount of glutinous rice flour under the city wall of Suzhou to prevent invasion by the Yue State, and later this glutinous rice flour helped the people of Suzhou survive the crisis.\n\n**Cultural Significance**: Rice Cake symbolizes "advancement year after year", often appearing in traditional festivals like Spring Festival. Its pronunciation is homophonous with "年高" (yearly advancement), implying that people\'s lives and careers get better year by year.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Spring Festival. In southern China, Rice Cake often appears as a dish in the New Year\'s Eve dinner.'
        }
    },
    {
        id: 17,
        name: {
            zh: '松鼠桂鱼',
            en: 'Squirrel Mandarin Fish'
        },
        description: {
            zh: '春节必备，象征年年有余',
            en: 'Essential for Spring Festival, symbolizes surplus year after year'
        },
        image: 'assets/images/covers/松鼠桂鱼封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '40分钟 / 40 min',
        servings: '4人份 / 4 servings',
        scenario: 'springFestival',
        ingredients: [
            {
                name: { zh: '桂鱼', en: 'Mandarin fish' },
                amount: '1条(约1000克) / 1 piece (about 1000g)',
                substitution: { zh: '可用草鱼、鲈鱼或鲤鱼代替', en: 'Grass carp, sea bass, or carp can be substituted' }
            },
            {
                name: { zh: '面粉', en: 'Flour' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '鸡蛋', en: 'Egg' },
                amount: '1个 / 1 piece',
                substitution: null
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '50克 / 50g',
                substitution: null
            },
            {
                name: { zh: '醋', en: 'Vinegar' },
                amount: '3汤匙 / 3 tbsp',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            },
            {
                name: { zh: '料酒', en: 'Cooking wine' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '处理鱼', en: 'Prepare Fish' },
                description: {
                    zh: '鱼处理干净，在鱼身切花刀，用料酒、盐腌制15分钟。',
                    en: 'Clean the fish, make diagonal cuts on the fish body, marinate with cooking wine and salt for 15 minutes.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '炸鱼', en: 'Fry Fish' },
                description: {
                    zh: '鸡蛋打散，鱼裹上面粉和蛋液，锅中倒油，烧至七成热，放入鱼炸至金黄酥脆。',
                    en: 'Beat egg, coat fish with flour and egg liquid, heat oil in pan to 180°C, fry fish until golden and crispy.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '调糖醋汁', en: 'Prepare Sweet and Sour Sauce' },
                description: {
                    zh: '锅中留底油，放入白糖、醋、生抽，熬至浓稠，淋在鱼上即可。',
                    en: 'Leave a little oil in the pan, add white sugar, vinegar, light soy sauce, simmer until thick, pour over the fish.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '松鼠桂鱼是一道色香味形声俱佳的传统菜肴，以鱼身炸制后呈松鼠状，再浇上热糖醋卤汁，外酥里嫩、酸甜可口。鱼肉细嫩，刺少，入口鲜美，造型独特，糖醋汁淋上时会发出吱吱声，如松鼠欢鸣，极具观赏与食用的双重趣味。它不仅是一道美味的佳肴，更是春节餐桌上寓意丰盛与吉祥的重要象征。\n\n这道菜的故事可以追溯到清朝乾隆年间。相传乾隆皇帝六下江南，曾微服至苏州松鹤楼用餐，见店中供奉的鲤鱼活泼可爱，便想品尝。店主既不敢违命，又担心宰杀"神鱼"不妥，于是与厨师商议，将鲤鱼去骨剖花，炸成松鼠状，并淋上热卤端上桌。乾隆皇帝大悦，从此"松鼠鱼"的名声传开。民间后来为了方便食用并寓意吉祥，多改用肉质鲜嫩、刺少的鳜鱼（桂鱼），形成了今天的"松鼠桂鱼"。清代食谱《调鼎集》中已有类似做法的记载，显示这道菜在乾隆、嘉庆年间已经颇为成熟。20世纪末至今，松鼠桂鱼成为江苏十大经典名菜，并在全国烹饪比赛中屡获殊荣，逐渐成为国内外知名的江南名菜。\n\n在文化意义上，松鼠桂鱼常出现在春节等重要节日餐桌上，寓意"年年有余"，因为"鱼"与"余"同音，象征生活富足、年年盈余。它酸甜适口、色泽红亮、形态生动，同时也是家庭团聚的象征。一道松鼠桂鱼端上桌，不仅让人食欲大开，更承载着新年祈福与团圆的美好寓意。\n\n在日常生活中，松鼠桂鱼多作为家庭聚餐或朋友聚会的亮点菜肴，也常见于春节年夜饭中。不同地区的做法略有差异，北方糖醋鱼多用鲤鱼，南方则以桂鱼为主。无论选用哪种鱼，这道菜都以鲜嫩的鱼肉、酥脆的外皮和酸甜的糖醋味赢得人们的喜爱，是节庆餐桌上不可或缺的一道经典佳肴。',
            en: 'Squirrel Mandarin Fish is a traditional dish that excels in color, aroma, taste, form, and sound. After frying, the fish takes on a squirrel shape, then is topped with hot sweet and sour sauce, resulting in a crispy exterior and tender interior with a sweet and sour taste. The fish meat is delicate with few bones, fresh and delicious, and the unique shape, combined with the sizzling sound when the sweet and sour sauce is poured (like a squirrels chirp), creates both visual and culinary enjoyment. It is not only a delicious delicacy but also an important symbol of abundance and good fortune on the Spring Festival dining table.\n\nThe story of this dish dates back to the Qianlong period of the Qing Dynasty. Legend has it that Emperor Qianlong made six southern tours, and once visited the Songhelou Restaurant in Suzhou incognito. Seeing the lively carp offered for worship, he wanted to try it. The shopkeeper, fearing to disobey but worried about slaughtering the "sacred fish," consulted with the chef to remove the bones, score the fish, fry it into a squirrel shape, and serve it with hot sauce. Emperor Qianlong was delighted, and the "squirrel fish" became famous. Later, the common people switched to mandarin fish (gui yu) for easier eating and auspicious meaning, forming today\'s "Squirrel Mandarin Fish." The Qing Dynasty cookbook "Tiao Ding Ji" already records similar methods, showing the dish was quite mature during the Qianlong and Jiaqing periods. Since the late 20th century, Squirrel Mandarin Fish has become one of the ten classic dishes of Jiangsu, won numerous awards in national cooking competitions, and gradually become a well-known Jiangnan dish at home and abroad.\n\nIn cultural significance, Squirrel Mandarin Fish often appears on important festival tables like Spring Festival, symbolizing "surplus every year" because "鱼" (fish) is homophonous with "余" (surplus) in Chinese, representing a prosperous life with surplus year after year. Its sweet and sour taste, bright red color, and lively form also symbolize family reunion. When a Squirrel Mandarin Fish is served, it not only stimulates the appetite but also carries the beautiful meaning of New Year blessings and reunion.\n\nIn daily life, Squirrel Mandarin Fish is often a highlight dish at family meals or friend gatherings, and frequently appears in Spring Festival New Year\'s Eve dinners. Practices vary slightly by region—northern sweet and sour fish mostly uses carp, while southern versions primarily use mandarin fish. Regardless of which fish is used, this dish wins people\'s love with its tender fish meat, crispy exterior, and sweet and sour flavor, making it an indispensable classic dish on festive tables.'
        }
    },
    {
        id: 18,
        name: {
            zh: '元宵',
            en: 'Tangyuan'
        },
        description: {
            zh: '糯米球，甜馅，象征团圆',
            en: 'Glutinous rice balls with sweet filling, symbolizing reunion'
        },
        image: 'assets/images/covers/元宵封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '45分钟 / 45 min',
        servings: '4人份 / 4 servings',
        scenario: 'lanternFestival',
        ingredients: [
            {
                name: { zh: '糯米粉', en: 'Glutinous rice flour' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '黑芝麻', en: 'Black sesame' },
                amount: '100克 / 100g',
                substitution: { zh: '可用白芝麻代替', en: 'White sesame can be substituted' }
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '猪油', en: 'Lard' },
                amount: '50克 / 50g',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '制作黑芝麻馅', en: 'Make Black Sesame Filling' },
                description: {
                    zh: '将黑芝麻炒香，碾碎，加入白糖、猪油拌匀，揉成小丸子。',
                    en: 'Roast black sesame until fragrant, crush into powder, mix with white sugar and lard, knead into small balls.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '制作元宵', en: 'Make Tangyuan' },
                description: {
                    zh: '将糯米粉加水和成面团，分成小块，包入黑芝麻馅，搓成圆球。',
                    en: 'Mix glutinous rice flour with water to form dough, divide into small pieces, wrap black sesame filling, roll into balls.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '煮元宵', en: 'Cook Tangyuan' },
                description: {
                    zh: '锅中烧开水，放入元宵，煮至浮起，再煮2-3分钟即可。',
                    en: 'Boil water in a pot, add tangyuan, cook until they float, then cook for another 2-3 minutes.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '元宵是中国元宵节的传统食品，象征着团圆和幸福。元宵的形状是圆的，寓意着团团圆圆，因此也被称为"汤圆"。在元宵节这天，家家户户都会吃元宵，祈求家人团聚，幸福美满。元宵的历史悠久，最早可以追溯到宋代。据《岁时广记》记载，当时人们在元宵节吃"圆子"，这就是元宵的前身。元宵的馅料多样，有芝麻、花生、豆沙、水果等多种口味。在北方，人们习惯在元宵节吃元宵，而在南方，人们则更习惯吃汤圆。虽然制作方法不同，但都象征着团圆和幸福。\n\n**历史背景**：元宵的历史可以追溯到宋代，当时被称为"圆子"。后来逐渐演变为现在的元宵，成为元宵节的必备食品。\n\n**文化意义**：元宵象征着团圆和幸福，常出现在元宵节等传统节日中。它的形状是圆的，寓意着团团圆圆。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是元宵节等传统节日的必备食品。在元宵节这天，家家户户都会吃元宵，祈求家人团聚，幸福美满。',
            en: 'Tangyuan is a traditional food for Chinese Lantern Festival, symbolizing reunion and happiness. Tangyuan is round in shape, symbolizing reunion, so it is also called "汤圆" (round ball). On Lantern Festival, every household eats tangyuan, praying for family reunion and happiness. Tangyuan has a long history, dating back to the Song Dynasty. According to "Shi Shi Guang Ji", people ate "圆子" (round balls) during Lantern Festival at that time, which is the predecessor of tangyuan. Tangyuan has various fillings, including sesame, peanuts, red bean paste, fruits, etc. In Northern China, people are accustomed to eating yuanxiao during Lantern Festival, while in Southern China, people are more accustomed to eating tangyuan. Although the preparation methods are different, both symbolize reunion and happiness.\n\n**Historical Background**: The history of Tangyuan can be traced back to the Song Dynasty, when it was called "圆子" (round balls). Later it gradually evolved into the current Tangyuan, becoming essential food for Lantern Festival.\n\n**Cultural Significance**: Tangyuan symbolizes reunion and happiness, often appearing in traditional festivals like Lantern Festival. Its round shape symbolizes reunion.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Lantern Festival. On Lantern Festival, every household eats Tangyuan, praying for family reunion and happiness.'
        }
    },
    {
        id: 19,
        name: {
            zh: '咸味蛋黄肉粽',
            en: 'Salty Egg Yolk Meat Zongzi'
        },
        description: {
            zh: '糯米包裹咸蛋黄和猪肉，咸香可口',
            en: 'Glutinous rice wrapped with salted egg yolk and pork, savory and delicious'
        },
        image: 'assets/images/covers/咸味蛋黄肉粽封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '120分钟 / 120 min',
        servings: '6人份 / 6 servings',
        scenario: 'dragonBoatFestival',
        ingredients: [
            {
                name: { zh: '糯米', en: 'Glutinous rice' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '猪肉', en: 'Pork' },
                amount: '300克 / 300g',
                substitution: { zh: '可用牛肉代替', en: 'Beef can be substituted' }
            },
            {
                name: { zh: '咸蛋黄', en: 'Salted egg yolk' },
                amount: '6个 / 6 pieces',
                substitution: null
            },
            {
                name: { zh: '粽叶', en: 'Bamboo leaves' },
                amount: '12张 / 12 pieces',
                substitution: { zh: '可用芦苇叶代替', en: 'Reed leaves can be substituted' }
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            },
            {
                name: { zh: '料酒', en: 'Cooking wine' },
                amount: '2汤匙 / 2 tbsp',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '糯米提前浸泡2小时，猪肉切块用生抽、料酒腌制1小时。',
                    en: 'Soak glutinous rice for 2 hours in advance, cut pork into pieces and marinate with light soy sauce and cooking wine for 1 hour.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '包粽子', en: 'Wrap Zongzi' },
                description: {
                    zh: '粽叶洗净烫软，将糯米、猪肉、咸蛋黄包入粽叶中，用绳子绑紧。',
                    en: 'Wash and soften bamboo leaves, wrap glutinous rice, pork, and salted egg yolk in bamboo leaves, tie tightly with string.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '煮粽子', en: 'Cook Zongzi' },
                description: {
                    zh: '锅中加水，放入粽子，大火煮开后转小火煮2小时即可。',
                    en: 'Add water to pot, add zongzi, bring to boil over high heat, then turn to low heat and cook for 2 hours.'
                },
                time: '120分钟 / 120 min'
            }
        ],
        culture: {
            zh: '粽子是端午节的传统食品，用糯米包裹馅料，纪念爱国诗人屈原。端午节吃粽子的习俗源于战国时期，传说屈原投江后，人们为了不让鱼虾伤害屈原的身体，纷纷将糯米投入江中。后来逐渐演变成用粽叶包裹糯米的粽子。粽子不仅纪念屈原，还注重驱邪和健康。古人认为粽叶有驱邪的作用，而糯米则有益健康。粽子的口味多样，南方偏爱咸味蛋黄肉粽，北方则喜欢甜味蜜枣豆沙粽。包粽子是重要的家庭活动，代代相传。\n\n**历史背景**：粽子的历史可以追溯到战国时期，最初是为了纪念爱国诗人屈原。传说屈原投江后，人们为了不让鱼虾伤害他的身体，纷纷将糯米投入江中，后来逐渐演变成用粽叶包裹糯米的粽子。\n\n**文化意义**：粽子象征着对屈原的纪念和对健康的追求，常出现在端午节等传统节日中。它的形状独特，寓意着驱邪避灾。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是端午节等传统节日的必备食品。在端午节这天，家家户户都会吃粽子，纪念屈原。',
            en: 'Zongzi is a traditional food for Dragon Boat Festival, made by wrapping glutinous rice with fillings, commemorating the patriotic poet Qu Yuan. The custom of eating zongzi during Dragon Boat Festival originated from the Warring States period. Legend has it that after Qu Yuan threw himself into the river, people threw glutinous rice into the river to prevent fish and shrimp from harming his body. This gradually evolved into zongzi wrapped in bamboo leaves. Zongzi not only commemorates Qu Yuan but also emphasizes warding off evil and promoting health. Ancient people believed bamboo leaves had the power to ward off evil, while glutinous rice was beneficial for health. Zongzi comes in various flavors, with Southern China preferring salty egg yolk meat zongzi, while Northern China favors sweet date and red bean paste zongzi. Making zongzi is an important family activity passed down from generation to generation.\n\n**Historical Background**: The history of Zongzi can be traced back to the Warring States period, initially to commemorate the patriotic poet Qu Yuan. Legend has it that after Qu Yuan threw himself into the river, people threw glutinous rice into the river to prevent fish and shrimp from harming his body, later gradually evolving into zongzi wrapped in bamboo leaves.\n\n**Cultural Significance**: Zongzi symbolizes the commemoration of Qu Yuan and the pursuit of health, often appearing in traditional festivals like Dragon Boat Festival. Its unique shape implies warding off evil and avoiding disasters.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Dragon Boat Festival. On Dragon Boat Festival, every household eats Zongzi to commemorate Qu Yuan.'
        }
    },
    {
        id: 20,
        name: {
            zh: '甜味蜜枣豆沙粽',
            en: 'Sweet Date and Red Bean Paste Zongzi'
        },
        description: {
            zh: '糯米包裹蜜枣和豆沙，香甜软糯',
            en: 'Glutinous rice wrapped with honey dates and red bean paste, sweet and soft'
        },
        image: 'assets/images/covers/甜味蜜枣豆沙粽封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '120分钟 / 120 min',
        servings: '6人份 / 6 servings',
        scenario: 'dragonBoatFestival',
        ingredients: [
            {
                name: { zh: '糯米', en: 'Glutinous rice' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '蜜枣', en: 'Honey dates' },
                amount: '12个 / 12 pieces',
                substitution: { zh: '可用红枣代替', en: 'Red dates can be substituted' }
            },
            {
                name: { zh: '豆沙', en: 'Red bean paste' },
                amount: '200克 / 200g',
                substitution: null
            },
            {
                name: { zh: '粽叶', en: 'Bamboo leaves' },
                amount: '12张 / 12 pieces',
                substitution: { zh: '可用芦苇叶代替', en: 'Reed leaves can be substituted' }
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '50克 / 50g',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '糯米提前浸泡2小时，蜜枣去核，豆沙分成小块。',
                    en: 'Soak glutinous rice for 2 hours in advance, remove pits from honey dates, divide red bean paste into small pieces.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '包粽子', en: 'Wrap Zongzi' },
                description: {
                    zh: '粽叶洗净烫软，将糯米、蜜枣、豆沙包入粽叶中，用绳子绑紧。',
                    en: 'Wash and soften bamboo leaves, wrap glutinous rice, honey dates, and red bean paste in bamboo leaves, tie tightly with string.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '煮粽子', en: 'Cook Zongzi' },
                description: {
                    zh: '锅中加水，放入粽子，大火煮开后转小火煮2小时即可。',
                    en: 'Add water to pot, add zongzi, bring to boil over high heat, then turn to low heat and cook for 2 hours.'
                },
                time: '120分钟 / 120 min'
            }
        ],
        culture: {
            zh: '粽子是端午节的传统食品，用糯米包裹馅料，纪念爱国诗人屈原。端午节吃粽子的习俗源于战国时期，传说屈原投江后，人们为了不让鱼虾伤害屈原的身体，纷纷将糯米投入江中。后来逐渐演变成用粽叶包裹糯米的粽子。粽子不仅纪念屈原，还注重驱邪和健康。古人认为粽叶有驱邪的作用，而糯米则有益健康。粽子的口味多样，南方偏爱咸味蛋黄肉粽，北方则喜欢甜味蜜枣豆沙粽。包粽子是重要的家庭活动，代代相传。\n\n**历史背景**：粽子的历史可以追溯到战国时期，最初是为了纪念爱国诗人屈原。传说屈原投江后，人们为了不让鱼虾伤害他的身体，纷纷将糯米投入江中，后来逐渐演变成用粽叶包裹糯米的粽子。\n\n**文化意义**：粽子象征着对屈原的纪念和对健康的追求，常出现在端午节等传统节日中。它的形状独特，寓意着驱邪避灾。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是端午节等传统节日的必备食品。在端午节这天，家家户户都会吃粽子，纪念屈原。',
            en: 'Zongzi is a traditional food for Dragon Boat Festival, made by wrapping glutinous rice with fillings, commemorating the patriotic poet Qu Yuan. The custom of eating zongzi during Dragon Boat Festival originated from the Warring States period. Legend has it that after Qu Yuan threw himself into the river, people threw glutinous rice into the river to prevent fish and shrimp from harming his body. This gradually evolved into zongzi wrapped in bamboo leaves. Zongzi not only commemorates Qu Yuan but also emphasizes warding off evil and promoting health. Ancient people believed bamboo leaves had the power to ward off evil, while glutinous rice was beneficial for health. Zongzi comes in various flavors, with Southern China preferring salty egg yolk meat zongzi, while Northern China favors sweet date and red bean paste zongzi. Making zongzi is an important family activity passed down from generation to generation.\n\n**Historical Background**: The history of Zongzi can be traced back to the Warring States period, initially to commemorate the patriotic poet Qu Yuan. Legend has it that after Qu Yuan threw himself into the river, people threw glutinous rice into the river to prevent fish and shrimp from harming his body, later gradually evolving into zongzi wrapped in bamboo leaves.\n\n**Cultural Significance**: Zongzi symbolizes the commemoration of Qu Yuan and the pursuit of health, often appearing in traditional festivals like Dragon Boat Festival. Its unique shape implies warding off evil and avoiding disasters.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Dragon Boat Festival. On Dragon Boat Festival, every household eats Zongzi to commemorate Qu Yuan.'
        }
    },
    {
        id: 21,
        name: {
            zh: '莲蓉蛋黄月饼',
            en: 'Lotus Seed Paste with Egg Yolk Mooncake'
        },
        description: {
            zh: '经典广式月饼，莲蓉细腻，蛋黄香浓',
            en: 'Classic Cantonese mooncake, delicate lotus paste, rich egg yolk'
        },
        image: 'assets/images/covers/莲蓉蛋黄月饼封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '180分钟 / 180 min',
        servings: '8人份 / 8 servings',
        scenario: 'midAutumnFestival',
        ingredients: [
            {
                name: { zh: '低筋面粉', en: 'Cake flour' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '莲蓉', en: 'Lotus seed paste' },
                amount: '400克 / 400g',
                substitution: { zh: '可用豆沙代替', en: 'Red bean paste can be substituted' }
            },
            {
                name: { zh: '咸蛋黄', en: 'Salted egg yolk' },
                amount: '8个 / 8 pieces',
                substitution: null
            },
            {
                name: { zh: '转化糖浆', en: 'Inverted sugar syrup' },
                amount: '200克 / 200g',
                substitution: { zh: '可用蜂蜜代替', en: 'Honey can be substituted' }
            },
            {
                name: { zh: '花生油', en: 'Peanut oil' },
                amount: '100毫升 / 100ml',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            }
        ],
        steps: [
            {
                title: { zh: '制作饼皮', en: 'Make Mooncake Crust' },
                description: {
                    zh: '将转化糖浆、花生油混合，加入面粉揉成面团，静置2小时。',
                    en: 'Mix inverted sugar syrup and peanut oil, add flour and knead into dough, let rest for 2 hours.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '包月饼', en: 'Wrap Mooncake' },
                description: {
                    zh: '将面团分成小份，包入莲蓉和咸蛋黄，用模具压出花纹。',
                    en: 'Divide dough into small pieces, wrap lotus paste and salted egg yolk, press with mold to create pattern.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '烤月饼', en: 'Bake Mooncake' },
                description: {
                    zh: '月饼表面刷水，烤箱预热180度，烤15分钟，取出刷蛋液再烤5分钟。',
                    en: 'Brush mooncake surface with water, preheat oven to 180°C, bake for 15 minutes, remove and brush with egg wash, bake for another 5 minutes.'
                },
                time: '20分钟 / 20 min'
            }
        ],
        culture: {
            zh: '莲蓉蛋黄月饼是广式月饼的经典代表，以其细腻的莲蓉和香浓的咸蛋黄而闻名。莲蓉是用莲子磨制而成的馅料，口感细腻香甜。咸蛋黄则为月饼增添了丰富的层次感。\n\n中秋节吃月饼的习俗源于唐代，当时人们在八月十五赏月时，会制作圆形的糕点，象征团圆。这个节日与嫦娥奔月的传说紧密相连——相传嫦娥偷吃了丈夫后羿的不死药，飞升到月宫，从此与丈夫天人永隔。每年中秋，后羿都会在月下摆放嫦娥喜爱的食物，寄托思念之情。\n\n宋代大文豪苏轼的《水调歌头·明月几时有》更是中秋文化的经典之作："但愿人长久，千里共婵娟"，表达了对亲人的思念和对团圆的美好祝愿。莲蓉蛋黄月饼不仅口感好，还寓意着"莲"（连）和"圆"（团圆），象征着家庭和睦、团圆美满。\n\n**历史背景**：莲蓉蛋黄月饼是广式月饼的经典代表，起源于广东地区。它的历史可以追溯到清代，当时广州的饼家开始制作莲蓉月饼，后来逐渐加入咸蛋黄，成为现在的莲蓉蛋黄月饼。\n\n**文化意义**：莲蓉蛋黄月饼象征着团圆和美满，常出现在中秋节等传统节日中。它的圆形形状寓意着团圆，莲蓉则象征着纯洁和美好。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是中秋节等传统节日的必备食品。在中秋节这天，家家户户都会吃月饼，赏月，祈求家人团圆，幸福美满。',
            en: 'Lotus seed paste with egg yolk mooncake is a classic representative of Cantonese mooncakes, famous for its delicate lotus paste and rich salted egg yolk. Lotus paste is a filling made from ground lotus seeds, with a delicate and sweet taste. Salted egg yolk adds rich layers to the mooncake.\n\nThe custom of eating mooncakes during Mid-Autumn Festival originated from the Tang Dynasty, when people would make round pastries while admiring the moon on the 15th day of the 8th lunar month, symbolizing reunion. This festival is closely connected to the legend of Chang\'e flying to the moon—according to the tale, Chang\'e ate her husband Hou Yi\'s elixir of immortality and ascended to the Moon Palace, separating from her husband forever. Every Mid-Autumn Festival, Hou Yi would place Chang\'e\'s favorite foods under the moon to express his longing.\n\nThe Song Dynasty literary giant Su Shi\'s famous poem "Prelude to Water Melody·When Will the Moon Be Clear and Bright" is a classic of Mid-Autumn culture: "May we all be blessed with longevity. Though far apart, we\'ll share the beauty of the moon together," expressing longing for loved ones and best wishes for reunion. Lotus seed paste with egg yolk mooncake not only tastes good but also implies "lotus" (connection) and "round" (reunion), symbolizing family harmony and perfect reunion.\n\n**Historical Background**: Lotus seed paste with egg yolk mooncake is a classic representative of Cantonese mooncakes, originating from Guangdong region. Its history can be traced back to the Qing Dynasty, when bakeries in Guangzhou began making lotus paste mooncakes, later gradually adding salted egg yolk to become the current lotus seed paste with egg yolk mooncake.\n\n**Cultural Significance**: Lotus seed paste with egg yolk mooncake symbolizes reunion and happiness, often appearing in traditional festivals like Mid-Autumn Festival. Its round shape implies reunion, while lotus paste symbolizes purity and beauty.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Mid-Autumn Festival. On Mid-Autumn Festival, every household eats mooncakes, admires the moon, and prays for family reunion and happiness.'
        }
    },
    {
        id: 22,
        name: {
            zh: '五仁月饼',
            en: 'Five Kernel Mooncake'
        },
        description: {
            zh: '传统口味，坚果丰富，香脆可口',
            en: 'Traditional flavor, rich in nuts, crispy and delicious'
        },
        image: 'assets/images/covers/五仁月饼封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '180分钟 / 180 min',
        servings: '8人份 / 8 servings',
        scenario: 'midAutumnFestival',
        ingredients: [
            {
                name: { zh: '低筋面粉', en: 'Cake flour' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '核桃仁', en: 'Walnuts' },
                amount: '80克 / 80g',
                substitution: { zh: '可用杏仁代替', en: 'Almonds can be substituted' }
            },
            {
                name: { zh: '花生仁', en: 'Peanuts' },
                amount: '80克 / 80g',
                substitution: null
            },
            {
                name: { zh: '瓜子仁', en: 'Melon seeds' },
                amount: '50克 / 50g',
                substitution: null
            },
            {
                name: { zh: '芝麻', en: 'Sesame' },
                amount: '50克 / 50g',
                substitution: null
            },
            {
                name: { zh: '杏仁', en: 'Almonds' },
                amount: '50克 / 50g',
                substitution: { zh: '可用核桃代替', en: 'Walnuts can be substituted' }
            },
            {
                name: { zh: '转化糖浆', en: 'Inverted sugar syrup' },
                amount: '200克 / 200g',
                substitution: { zh: '可用蜂蜜代替', en: 'Honey can be substituted' }
            }
        ],
        steps: [
            {
                title: { zh: '制作五仁馅', en: 'Make Five Kernel Filling' },
                description: {
                    zh: '将核桃、花生、瓜子、芝麻、杏仁炒香，切碎混合，加入糖浆拌匀。',
                    en: 'Roast walnuts, peanuts, melon seeds, sesame, and almonds, chop and mix, add syrup and mix well.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '制作饼皮', en: 'Make Mooncake Crust' },
                description: {
                    zh: '将转化糖浆、花生油混合，加入面粉揉成面团，静置2小时。',
                    en: 'Mix inverted sugar syrup and peanut oil, add flour and knead into dough, let rest for 2 hours.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '包月饼', en: 'Wrap Mooncake' },
                description: {
                    zh: '将面团分成小份，包入五仁馅，用模具压出花纹。',
                    en: 'Divide dough into small pieces, wrap five kernel filling, press with mold to create pattern.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '烤月饼', en: 'Bake Mooncake' },
                description: {
                    zh: '月饼表面刷水，烤箱预热180度，烤15分钟，取出刷蛋液再烤5分钟。',
                    en: 'Brush mooncake surface with water, preheat oven to 180°C, bake for 15 minutes, remove and brush with egg wash, bake for another 5 minutes.'
                },
                time: '20分钟 / 20 min'
            }
        ],
        culture: {
            zh: '五仁月饼是传统月饼的经典口味，以五种坚果仁为馅料，香脆可口。五仁通常包括核桃、花生、瓜子、芝麻、杏仁等，每种坚果都有独特的香味和营养价值。\n\n五仁月饼不仅口感丰富，还寓意着"五谷丰登"，象征着丰收和富足。中秋节吃月饼的习俗源于唐代，当时人们在八月十五赏月时，会制作圆形的糕点，象征团圆。这个节日与嫦娥奔月的传说紧密相连——相传嫦娥偷吃了丈夫后羿的不死药，飞升到月宫，从此与丈夫天人永隔。每年中秋，后羿都会在月下摆放嫦娥喜爱的食物，寄托思念之情。\n\n宋代大文豪苏轼的《水调歌头·明月几时有》更是中秋文化的经典之作："但愿人长久，千里共婵娟"，表达了对亲人的思念和对团圆的美好祝愿。五仁月饼是北方人喜爱的传统口味。\n\n**历史背景**：五仁月饼是传统月饼的经典口味，起源于北方地区。它的历史可以追溯到明代，当时月饼的馅料开始多样化，五仁月饼逐渐成为主流口味之一。\n\n**文化意义**：五仁月饼象征着丰收和富足，常出现在中秋节等传统节日中。它的五种坚果仁寓意着"五谷丰登"，象征着丰收和富足。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是中秋节等传统节日的必备食品。在中秋节这天，家家户户都会吃月饼，赏月，祈求家人团圆，幸福美满。',
            en: 'Five kernel mooncake is a classic flavor of traditional mooncakes, using five kinds of nuts as filling, crispy and delicious. The five kernels usually include walnuts, peanuts, melon seeds, sesame, almonds, etc., each with unique aroma and nutritional value.\n\nFive kernel mooncake not only has rich taste but also implies "abundant harvest of five grains", symbolizing harvest and prosperity. The custom of eating mooncakes during Mid-Autumn Festival originated from the Tang Dynasty, when people would make round pastries while admiring the moon on the 15th day of the 8th lunar month, symbolizing reunion. This festival is closely connected to the legend of Chang\'e flying to the moon—according to the tale, Chang\'e ate her husband Hou Yi\'s elixir of immortality and ascended to the Moon Palace, separating from her husband forever. Every Mid-Autumn Festival, Hou Yi would place Chang\'e\'s favorite foods under the moon to express his longing.\n\nThe Song Dynasty literary giant Su Shi\'s famous poem "Prelude to Water Melody·When Will the Moon Be Clear and Bright" is a classic of Mid-Autumn culture: "May we all be blessed with longevity. Though far apart, we\'ll share the beauty of the moon together," expressing longing for loved ones and best wishes for reunion. Five kernel mooncake is a traditional flavor favored by people in Northern China.\n\n**Historical Background**: Five kernel mooncake is a classic flavor of traditional mooncakes, originating from northern China. Its history can be traced back to the Ming Dynasty, when mooncake fillings began to diversify, and five kernel mooncake gradually became one of the mainstream flavors.\n\n**Cultural Significance**: Five kernel mooncake symbolizes harvest and prosperity, often appearing in traditional festivals like Mid-Autumn Festival. Its five kinds of nuts imply "abundant harvest of five grains", symbolizing harvest and prosperity.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Mid-Autumn Festival. On Mid-Autumn Festival, every household eats mooncakes, admires the moon, and prays for family reunion and happiness.'
        }
    },
    {
        id: 23,
        name: {
            zh: '云腿月饼',
            en: 'Yunnan Ham Mooncake'
        },
        description: {
            zh: '云南特色，火腿鲜香，咸甜适中',
            en: 'Yunnan specialty, savory ham, moderate sweet and salty'
        },
        image: 'assets/images/covers/云腿月饼封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '180分钟 / 180 min',
        servings: '8人份 / 8 servings',
        scenario: 'midAutumnFestival',
        ingredients: [
            {
                name: { zh: '低筋面粉', en: 'Cake flour' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '云腿', en: 'Yunnan ham' },
                amount: '200克 / 200g',
                substitution: { zh: '可用金华火腿代替', en: 'Jinhua ham can be substituted' }
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '蜂蜜', en: 'Honey' },
                amount: '50克 / 50g',
                substitution: null
            },
            {
                name: { zh: '花生油', en: 'Peanut oil' },
                amount: '100毫升 / 100ml',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            }
        ],
        steps: [
            {
                title: { zh: '制作云腿馅', en: 'Make Yunnan Ham Filling' },
                description: {
                    zh: '将云腿蒸熟，切碎，加入白糖、蜂蜜拌匀。',
                    en: 'Steam Yunnan ham, chop into pieces, add white sugar and honey, mix well.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '制作饼皮', en: 'Make Mooncake Crust' },
                description: {
                    zh: '将蜂蜜、花生油混合，加入面粉揉成面团，静置2小时。',
                    en: 'Mix honey and peanut oil, add flour and knead into dough, let rest for 2 hours.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '包月饼', en: 'Wrap Mooncake' },
                description: {
                    zh: '将面团分成小份，包入云腿馅，用模具压出花纹。',
                    en: 'Divide dough into small pieces, wrap Yunnan ham filling, press with mold to create pattern.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '烤月饼', en: 'Bake Mooncake' },
                description: {
                    zh: '月饼表面刷水，烤箱预热180度，烤15分钟，取出刷蛋液再烤5分钟。',
                    en: 'Brush mooncake surface with water, preheat oven to 180°C, bake for 15 minutes, remove and brush with egg wash, bake for another 5 minutes.'
                },
                time: '20分钟 / 20 min'
            }
        ],
        culture: {
            zh: '云腿月饼是云南的特色月饼，以云南宣威火腿为馅料，鲜香可口。云腿月饼的历史可以追溯到清代，当时云南的商人在中秋节会制作火腿月饼作为礼品。\n\n云腿月饼的特点是咸甜适中，火腿的香味浓郁，是云南人中秋节必备的食品。这个节日与嫦娥奔月的传说紧密相连——相传嫦娥偷吃了丈夫后羿的不死药，飞升到月宫，从此与丈夫天人永隔。每年中秋，后羿都会在月下摆放嫦娥喜爱的食物，寄托思念之情。\n\n宋代大文豪苏轼的《水调歌头·明月几时有》更是中秋文化的经典之作："但愿人长久，千里共婵娟"，表达了对亲人的思念和对团圆的美好祝愿。云腿月饼不仅口感独特，还体现了云南的地方特色和饮食文化。\n\n**历史背景**：云腿月饼是云南的特色月饼，起源于云南地区。它的历史可以追溯到清代，当时云南的商人在中秋节会制作火腿月饼作为礼品。\n\n**文化意义**：云腿月饼象征着团圆和美好，常出现在中秋节等传统节日中。它体现了云南的地方特色和饮食文化，是云南饮食文化的重要组成部分。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是中秋节等传统节日的必备食品。在中秋节这天，家家户户都会吃月饼，赏月，祈求家人团圆，幸福美满。',
            en: 'Yunnan ham mooncake is a specialty mooncake of Yunnan, using Yunnan Xuanwei ham as filling, savory and delicious. The history of Yunnan ham mooncake can be traced back to the Qing Dynasty, when Yunnan merchants would make ham mooncakes as gifts during Mid-Autumn Festival.\n\nYunnan ham mooncake is characterized by moderate sweet and salty taste, with rich ham aroma, and is an essential food for Yunnan people during Mid-Autumn Festival. This festival is closely connected to the legend of Chang\'e flying to the moon—according to the tale, Chang\'e ate her husband Hou Yi\'s elixir of immortality and ascended to the Moon Palace, separating from her husband forever. Every Mid-Autumn Festival, Hou Yi would place Chang\'e\'s favorite foods under the moon to express his longing.\n\nThe Song Dynasty literary giant Su Shi\'s famous poem "Prelude to Water Melody·When Will the Moon Be Clear and Bright" is a classic of Mid-Autumn culture: "May we all be blessed with longevity. Though far apart, we\'ll share the beauty of the moon together," expressing longing for loved ones and best wishes for reunion. Yunnan ham mooncake not only has unique taste but also reflects Yunnan\'s local characteristics and food culture.\n\n**Historical Background**: Yunnan ham mooncake is a specialty mooncake of Yunnan, originating from Yunnan region. Its history can be traced back to the Qing Dynasty, when Yunnan merchants would make ham mooncakes as gifts during Mid-Autumn Festival.\n\n**Cultural Significance**: Yunnan ham mooncake symbolizes reunion and beauty, often appearing in traditional festivals like Mid-Autumn Festival. It reflects Yunnan\'s local characteristics and food culture, and is an important part of Yunnan food culture.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Mid-Autumn Festival. On Mid-Autumn Festival, every household eats mooncakes, admires the moon, and prays for family reunion and happiness.'
        }
    },
    {
        id: 24,
        name: {
            zh: '豆沙月饼',
            en: 'Red Bean Paste Mooncake'
        },
        description: {
            zh: '经典甜味，豆沙细腻，口感绵软',
            en: 'Classic sweet flavor, delicate red bean paste, soft texture'
        },
        image: 'assets/images/covers/豆沙月饼封面.jpg',
        difficulty: 'advanced',
        spiciness: 0,
        time: '180分钟 / 180 min',
        servings: '8人份 / 8 servings',
        scenario: 'midAutumnFestival',
        ingredients: [
            {
                name: { zh: '低筋面粉', en: 'Cake flour' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '红豆', en: 'Red beans' },
                amount: '400克 / 400g',
                substitution: { zh: '可用绿豆代替', en: 'Mung beans can be substituted' }
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '200克 / 200g',
                substitution: null
            },
            {
                name: { zh: '转化糖浆', en: 'Inverted sugar syrup' },
                amount: '200克 / 200g',
                substitution: { zh: '可用蜂蜜代替', en: 'Honey can be substituted' }
            },
            {
                name: { zh: '花生油', en: 'Peanut oil' },
                amount: '100毫升 / 100ml',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            }
        ],
        steps: [
            {
                title: { zh: '制作豆沙', en: 'Make Red Bean Paste' },
                description: {
                    zh: '红豆提前浸泡，煮至软烂，打成泥，加糖炒干。',
                    en: 'Soak red beans in advance, cook until soft, mash into paste, stir-fry with sugar until dry.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '制作饼皮', en: 'Make Mooncake Crust' },
                description: {
                    zh: '将转化糖浆、花生油混合，加入面粉揉成面团，静置2小时。',
                    en: 'Mix inverted sugar syrup and peanut oil, add flour and knead into dough, let rest for 2 hours.'
                },
                time: '120分钟 / 120 min'
            },
            {
                title: { zh: '包月饼', en: 'Wrap Mooncake' },
                description: {
                    zh: '将面团分成小份，包入豆沙馅，用模具压出花纹。',
                    en: 'Divide dough into small pieces, wrap red bean paste filling, press with mold to create pattern.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '烤月饼', en: 'Bake Mooncake' },
                description: {
                    zh: '月饼表面刷水，烤箱预热180度，烤15分钟，取出刷蛋液再烤5分钟。',
                    en: 'Brush mooncake surface with water, preheat oven to 180°C, bake for 15 minutes, remove and brush with egg wash, bake for another 5 minutes.'
                },
                time: '20分钟 / 20 min'
            }
        ],
        culture: {
            zh: '豆沙月饼是传统月饼的经典甜味，以红豆沙为馅料，口感绵软香甜。豆沙月饼的历史悠久，是广式月饼的代表之一。红豆在中国文化中象征着"相思"，因此豆沙月饼也寓意着对远方亲人的思念。\n\n中秋节吃月饼的习俗源于唐代，当时人们在八月十五赏月时，会制作圆形的糕点，象征团圆。这个节日与嫦娥奔月的传说紧密相连——相传嫦娥偷吃了丈夫后羿的不死药，飞升到月宫，从此与丈夫天人永隔。每年中秋，后羿都会在月下摆放嫦娥喜爱的食物，寄托思念之情。\n\n宋代大文豪苏轼的《水调歌头·明月几时有》更是中秋文化的经典之作："但愿人长久，千里共婵娟"，表达了对亲人的思念和对团圆的美好祝愿。豆沙月饼不仅口感好，还寓意着"相思"和"团圆"，寄托着人们对亲人的思念。\n\n**历史背景**：豆沙月饼是传统月饼的经典甜味，起源于广东地区。它的历史可以追溯到清代，当时广州的饼家开始制作豆沙月饼，逐渐成为广式月饼的代表之一。\n\n**文化意义**：豆沙月饼象征着相思和团圆，常出现在中秋节等传统节日中。红豆在中国文化中象征着"相思"，因此豆沙月饼也寓意着对远方亲人的思念。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是中秋节等传统节日的必备食品。在中秋节这天，家家户户都会吃月饼，赏月，祈求家人团圆，幸福美满。',
            en: 'Red bean paste mooncake is a classic sweet flavor of traditional mooncakes, using red bean paste as filling, with soft and sweet texture. Red bean paste mooncake has a long history and is one of the representatives of Cantonese mooncakes. Red beans symbolize "missing" in Chinese culture, so red bean paste mooncake also implies longing for distant relatives.\n\nThe custom of eating mooncakes during Mid-Autumn Festival originated from the Tang Dynasty, when people would make round pastries while admiring the moon on the 15th day of the 8th lunar month, symbolizing reunion. This festival is closely connected to the legend of Chang\'e flying to the moon—according to the tale, Chang\'e ate her husband Hou Yi\'s elixir of immortality and ascended to the Moon Palace, separating from her husband forever. Every Mid-Autumn Festival, Hou Yi would place Chang\'e\'s favorite foods under the moon to express his longing.\n\nThe Song Dynasty literary giant Su Shi\'s famous poem "Prelude to Water Melody·When Will the Moon Be Clear and Bright" is a classic of Mid-Autumn culture: "May we all be blessed with longevity. Though far apart, we\'ll share the beauty of the moon together," expressing longing for loved ones and best wishes for reunion. Red bean paste mooncake not only tastes good but also implies "missing" and "reunion", expressing people\'s longing for their relatives.\n\n**Historical Background**: Red bean paste mooncake is a classic sweet flavor of traditional mooncakes, originating from Guangdong region. Its history can be traced back to the Qing Dynasty, when bakeries in Guangzhou began making red bean paste mooncakes, gradually becoming one of the representatives of Cantonese mooncakes.\n\n**Cultural Significance**: Red bean paste mooncake symbolizes missing and reunion, often appearing in traditional festivals like Mid-Autumn Festival. Red beans symbolize "missing" in Chinese culture, so red bean paste mooncake also implies longing for distant relatives.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Mid-Autumn Festival. On Mid-Autumn Festival, every household eats mooncakes, admires the moon, and prays for family reunion and happiness.'
        }
    },
    {
        id: 25,
        name: {
            zh: '重阳糕',
            en: 'Chongyang Cake'
        },
        description: {
            zh: '重阳节传统糕点，象征步步高升',
            en: 'Traditional Chongyang Festival pastry, symbolizing rising step by step'
        },
        image: 'assets/images/covers/重阳糕封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '90分钟 / 90 min',
        servings: '6人份 / 6 servings',
        scenario: 'doubleNinthFestival',
        ingredients: [
            {
                name: { zh: '糯米粉', en: 'Glutinous rice flour' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '150克 / 150g',
                substitution: null
            },
            {
                name: { zh: '红枣', en: 'Red dates' },
                amount: '100克 / 100g',
                substitution: { zh: '可用蜜枣代替', en: 'Honey dates can be substituted' }
            },
            {
                name: { zh: '核桃仁', en: 'Walnuts' },
                amount: '80克 / 80g',
                substitution: { zh: '可用杏仁代替', en: 'Almonds can be substituted' }
            },
            {
                name: { zh: '葡萄干', en: 'Raisins' },
                amount: '50克 / 50g',
                substitution: { zh: '可用蔓越莓干代替', en: 'Dried cranberries can be substituted' }
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '红枣去核切碎，核桃仁炒香，葡萄干洗净。',
                    en: 'Remove pits from red dates and chop, roast walnut kernels, wash raisins.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '制作糕体', en: 'Make Cake Body' },
                description: {
                    zh: '将糯米粉、白糖混合，逐渐加入水，揉成光滑的面团。',
                    en: 'Mix glutinous rice flour and white sugar, gradually add water, knead into smooth dough.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '蒸糕', en: 'Steam Cake' },
                description: {
                    zh: '将面团分成小块，加入红枣、核桃、葡萄干，放入蒸笼大火蒸40分钟。',
                    en: 'Divide dough into small pieces, add red dates, walnuts, and raisins, place in steamer and steam over high heat for 40 minutes.'
                },
                time: '40分钟 / 40 min'
            }
        ],
        culture: {
            zh: '重阳糕是重阳节的传统食品，象征着"步步高升"。重阳节在农历九月初九，"九"与"久"谐音，寓意着长久。重阳糕的制作历史悠久，最早可以追溯到汉代。重阳糕通常有多层，每层都铺有不同的馅料，如红枣、核桃、葡萄干等。吃重阳糕的习俗源于人们对健康长寿的期盼，希望家人朋友都能"步步高升"，生活和事业越来越好。重阳节还有登高赏秋的习俗，人们会登高远眺，欣赏秋天的美景，祈求健康长寿。\n\n**历史背景**：重阳糕的历史可以追溯到汉代，当时人们在重阳节会制作糕点，象征着"步步高升"。后来逐渐演变为现在的重阳糕，成为重阳节的必备食品。\n\n**文化意义**：重阳糕象征着"步步高升"和长寿，常出现在重阳节等传统节日中。它的多层结构寓意着"步步高升"，而"九"与"久"谐音，寓意着长久。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是重阳节等传统节日的必备食品。在重阳节这天，家家户户都会吃重阳糕，登高赏秋，祈求健康长寿。',
            en: 'Chongyang cake is a traditional food for Chongyang Festival, symbolizing "rising step by step". Chongyang Festival falls on the 9th day of the 9th lunar month, and "nine" is homophonous with "long-lasting" in Chinese, implying longevity. The history of making Chongyang cake is long, dating back to the Han Dynasty. Chongyang cake usually has multiple layers, with different fillings spread on each layer, such as red dates, walnuts, raisins, etc. The custom of eating Chongyang cake originates from people\'s hope for health and longevity, wishing family and friends can "rise step by step," with better lives and careers. Chongyang Festival also has the custom of climbing heights to admire autumn, where people climb high and look far, enjoying the beautiful scenery of autumn and praying for health and longevity.\n\n**Historical Background**: The history of Chongyang cake can be traced back to the Han Dynasty, when people would make cakes during Chongyang Festival, symbolizing "rising step by step". Later it gradually evolved into the current Chongyang cake, becoming essential food for Chongyang Festival.\n\n**Cultural Significance**: Chongyang cake symbolizes "rising step by step" and longevity, often appearing in traditional festivals like Chongyang Festival. Its multi-layered structure implies "rising step by step", while "nine" is homophonous with "long-lasting", implying longevity.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Chongyang Festival. On Chongyang Festival, every household eats Chongyang cake, climbs heights to admire autumn, and prays for health and longevity.'
        }
    },
    {
        id: 26,
        name: {
            zh: '青团',
            en: 'Green Rice Balls'
        },
        description: {
            zh: '清明节传统食品，艾草糯米，清香软糯',
            en: 'Traditional Qingming Festival food, mugwort and glutinous rice, fragrant and soft'
        },
        image: 'assets/images/covers/青团封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '120分钟 / 120 min',
        servings: '6人份 / 6 servings',
        scenario: 'qingmingFestival',
        ingredients: [
            {
                name: { zh: '糯米粉', en: 'Glutinous rice flour' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '艾草', en: 'Mugwort' },
                amount: '200克 / 200g',
                substitution: { zh: '可用菠菜汁代替', en: 'Spinach juice can be substituted' }
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '红豆沙', en: 'Red bean paste' },
                amount: '200克 / 200g',
                substitution: null
            },
            {
                name: { zh: '猪油', en: 'Lard' },
                amount: '50克 / 50g',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备艾草汁', en: 'Prepare Mugwort Juice' },
                description: {
                    zh: '将艾草洗净焯水，捞出沥干，打成汁。',
                    en: 'Wash mugwort, blanch in boiling water, drain and blend into juice.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '制作面团', en: 'Make Dough' },
                description: {
                    zh: '将糯米粉、白糖、猪油混合，加入艾草汁和适量水，揉成光滑的面团。',
                    en: 'Mix glutinous rice flour, white sugar, and lard, add mugwort juice and appropriate amount of water, knead into smooth dough.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '包青团', en: 'Wrap Green Rice Balls' },
                description: {
                    zh: '将面团分成小块，包入红豆沙，搓成圆球。',
                    en: 'Divide dough into small pieces, wrap red bean paste, roll into balls.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '蒸青团', en: 'Steam Green Rice Balls' },
                description: {
                    zh: '将青团放入蒸笼，大火蒸20分钟即可。',
                    en: 'Place green rice balls in steamer, steam over high heat for 20 minutes.'
                },
                time: '20分钟 / 20 min'
            }
        ],
        culture: {
            zh: '青团是清明节的传统食品，用艾草和糯米制作，通常是绿色的，象征春天的到来和缅怀先人。清明节是中国的传统节日，人们会在这一天扫墓祭祖，表达对先人的思念。青团的制作历史悠久，最早可以追溯到春秋时期。艾草有驱邪的作用，糯米则有益健康。青团的绿色象征着春天的生机和希望，吃青团不仅是对先人的缅怀，也是对美好生活的期盼。在江南地区，青团是清明节必备的食品，家家户户都会制作。\n\n**历史背景**：青团的历史可以追溯到春秋时期，最初是作为清明节的祭品。后来逐渐演变为现在的青团，成为清明节的必备食品。\n\n**文化意义**：青团象征着春天的到来和对先人的缅怀，常出现在清明节等传统节日中。它的绿色象征着春天的生机和希望，艾草则有驱邪的作用。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是清明节等传统节日的必备食品。在清明节这天，家家户户都会制作青团，扫墓祭祖，表达对先人的思念。',
            en: 'Green rice balls are traditional food for Qingming Festival, made with mugwort and glutinous rice, usually green in color, symbolizing the arrival of spring and remembering ancestors. Qingming Festival is a traditional Chinese holiday when people sweep tombs and worship ancestors, expressing longing for their ancestors. The history of making green rice balls is long, dating back to the Spring and Autumn Period. Mugwort has the power to ward off evil, while glutinous rice is beneficial for health. The green color of green rice balls symbolizes the vitality and hope of spring. Eating green rice balls is not only a remembrance of ancestors but also an expectation for a better life. In the Jiangnan region, green rice balls are essential food for Qingming Festival, and every household makes them.\n\n**Historical Background**: The history of green rice balls can be traced back to the Spring and Autumn Period, initially as an offering for Qingming Festival. Later it gradually evolved into the current green rice balls, becoming essential food for Qingming Festival.\n\n**Cultural Significance**: Green rice balls symbolize the arrival of spring and remembrance of ancestors, often appearing in traditional festivals like Qingming Festival. Their green color symbolizes the vitality and hope of spring, while mugwort has the power to ward off evil.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Qingming Festival. On Qingming Festival, every household makes green rice balls, sweeps tombs and worships ancestors, expressing longing for their ancestors.'
        }
    },
    {
        id: 27,
        name: {
            zh: '饺子（北方）',
            en: 'Dumplings (North China)'
        },
        description: {
            zh: '冬至北方传统，形似元宝，象征财富',
            en: 'Northern tradition for Winter Solstice, shaped like gold ingots, symbolizing wealth'
        },
        image: 'assets/images/covers/饺子封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '90分钟 / 90 min',
        servings: '6人份 / 6 servings',
        scenario: 'winterSolstice',
        ingredients: [
            {
                name: { zh: '面粉', en: 'All-purpose flour' },
                amount: '500克 / 500g',
                substitution: null
            },
            {
                name: { zh: '猪肉馅', en: 'Ground pork' },
                amount: '400克 / 400g',
                substitution: { zh: '可用牛肉馅或鸡肉馅代替', en: 'Ground beef or chicken can be substituted' }
            },
            {
                name: { zh: '韭菜', en: 'Chinese chives' },
                amount: '200克 / 200g',
                substitution: { zh: '可用芹菜或白菜代替', en: 'Celery or cabbage can be substituted' }
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用盐代替', en: 'Salt can be substituted' }
            },
            {
                name: { zh: '料酒', en: 'Cooking wine' },
                amount: '1汤匙 / 1 tbsp',
                substitution: { zh: '可用白酒代替', en: 'White wine can be substituted' }
            },
            {
                name: { zh: '香油', en: 'Sesame oil' },
                amount: '1茶匙 / 1 tsp',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '和面', en: 'Make Dough' },
                description: {
                    zh: '面粉加水和成光滑的面团，静置30分钟。',
                    en: 'Mix flour with water to form smooth dough, let rest for 30 minutes.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '调馅', en: 'Prepare Filling' },
                description: {
                    zh: '猪肉馅加韭菜、生抽、料酒、香油搅拌均匀。',
                    en: 'Mix ground pork with Chinese chives, light soy sauce, cooking wine, and sesame oil.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '包饺子', en: 'Wrap Dumplings' },
                description: {
                    zh: '面团擀成饺子皮，包入馅料，捏成元宝形状。',
                    en: 'Roll dough into dumpling wrappers, fill with filling, shape like gold ingots.'
                },
                time: '30分钟 / 30 min'
            },
            {
                title: { zh: '煮饺子', en: 'Boil Dumplings' },
                description: {
                    zh: '水开后下饺子，煮至饺子浮起即可。',
                    en: 'Boil water, add dumplings, cook until they float to the surface.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '饺子是北方冬至的传统食品，形似元宝，象征着财富和好运。冬至在中国传统文化中是一个重要的节气，有"冬至大如年"的说法。北方人认为冬至吃饺子可以防止冻耳朵，这个习俗源于医圣张仲景的"祛寒娇耳汤"传说。饺子的形状像耳朵，寓意着保护耳朵免受寒冷。在北方，冬至吃饺子是必不可少的习俗，家家户户都会包饺子，一家人围坐在一起吃饺子，象征着团圆和温暖。\n\n**历史背景**：饺子在冬至的食用习俗源于医圣张仲景的"祛寒娇耳汤"传说。据说张仲景在冬至这天看到百姓耳朵冻伤，于是用羊肉、辣椒和药材包在面皮里煮成汤，分给百姓食用，治好了他们的冻耳朵。\n\n**文化意义**：饺子象征着财富和好运，常出现在冬至等传统节日中。它的形状像元宝，寓意着财运；又像耳朵，寓意着保护耳朵免受寒冷。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是冬至等传统节日的必备食品。在北方，冬至这天家家户户都会包饺子，一家人围坐在一起吃饺子，象征着团圆和温暖。',
            en: 'Dumplings are traditional food for Winter Solstice in northern China, shaped like gold ingots, symbolizing wealth and good luck. Winter Solstice is an important solar term in traditional Chinese culture, with the saying "Winter Solstice is as important as the New Year." Northerners believe that eating dumplings on Winter Solstice can prevent frozen ears, a custom derived from the legend of the medical sage Zhang Zhongjing\'s "dispelling cold delicate ear soup." The shape of dumplings resembles ears, implying protection of ears from cold. In the north, eating dumplings on Winter Solstice is an essential custom, and every household makes dumplings, with the family sitting together eating dumplings, symbolizing reunion and warmth.\n\n**Historical Background**: The custom of eating dumplings on Winter Solstice originated from the legend of the medical sage Zhang Zhongjing\'s "dispelling cold delicate ear soup." It is said that on Winter Solstice, Zhang Zhongjing saw people\'s ears frostbitten, so he wrapped mutton, chili peppers, and medicinal herbs in dough and boiled them into soup, distributing them to people and curing their frostbitten ears.\n\n**Cultural Significance**: Dumplings symbolize wealth and good luck, often appearing in traditional festivals like Winter Solstice. Their shape resembles gold ingots, implying financial fortune; it also resembles ears, implying protection of ears from cold.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Winter Solstice. In northern China, on Winter Solstice every household makes dumplings, with the family sitting together eating dumplings, symbolizing reunion and warmth.'
        }
    },
    {
        id: 28,
        name: {
            zh: '汤圆（南方）',
            en: 'Tangyuan (South China)'
        },
        description: {
            zh: '冬至南方传统，糯米团子，象征团圆',
            en: 'Southern tradition for Winter Solstice, glutinous rice balls, symbolizing reunion'
        },
        image: 'assets/images/covers/汤圆（南方）封面.jpg',
        difficulty: 'intermediate',
        spiciness: 0,
        time: '60分钟 / 60 min',
        servings: '6人份 / 6 servings',
        scenario: 'winterSolstice',
        ingredients: [
            {
                name: { zh: '糯米粉', en: 'Glutinous rice flour' },
                amount: '300克 / 300g',
                substitution: null
            },
            {
                name: { zh: '黑芝麻', en: 'Black sesame' },
                amount: '100克 / 100g',
                substitution: { zh: '可用花生代替', en: 'Peanuts can be substituted' }
            },
            {
                name: { zh: '白糖', en: 'White sugar' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '猪油', en: 'Lard' },
                amount: '50克 / 50g',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '制作馅料', en: 'Make Filling' },
                description: {
                    zh: '黑芝麻炒香，加白糖、猪油捣成泥状。',
                    en: 'Roast black sesame, add white sugar and lard, mash into paste.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '和面', en: 'Make Dough' },
                description: {
                    zh: '糯米粉加水和成光滑的面团。',
                    en: 'Mix glutinous rice flour with water to form smooth dough.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '包汤圆', en: 'Wrap Tangyuan' },
                description: {
                    zh: '面团分成小块，包入芝麻馅，搓成圆球。',
                    en: 'Divide dough into small pieces, wrap sesame filling, roll into balls.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '煮汤圆', en: 'Boil Tangyuan' },
                description: {
                    zh: '水开后下汤圆，煮至汤圆浮起即可。',
                    en: 'Boil water, add tangyuan, cook until they float to the surface.'
                },
                time: '10分钟 / 10 min'
            }
        ],
        culture: {
            zh: '汤圆是南方冬至的传统食品，用糯米制作，象征着团圆和美满。冬至在中国传统文化中是一个重要的节气，有"冬至大如年"的说法。南方人认为冬至吃汤圆可以驱寒保暖，汤圆的圆形象征着团圆和完整。汤圆的馅料通常是甜的，寓意着生活甜甜蜜蜜。在南方，冬至吃汤圆是必不可少的习俗，家家户户都会做汤圆，一家人围坐在一起吃汤圆，象征着团圆和温暖。汤圆的"团"字也寓意着团聚，表达了人们对家庭和睦、团圆美满的期盼。\n\n**历史背景**：汤圆的历史可以追溯到宋代，当时被称为"圆子"。后来逐渐演变为现在的汤圆，成为冬至和元宵节的必备食品。\n\n**文化意义**：汤圆象征着团圆和美满，常出现在冬至和元宵节等传统节日中。它的圆形象征着团圆和完整，馅料通常是甜的，寓意着生活甜甜蜜蜜。\n\n**社交场景**：适合家庭聚餐、朋友聚会，也是冬至和元宵节等传统节日的必备食品。在南方，冬至这天家家户户都会做汤圆，一家人围坐在一起吃汤圆，象征着团圆和温暖。',
            en: 'Tangyuan is traditional food for Winter Solstice in southern China, made with glutinous rice, symbolizing reunion and completeness. Winter Solstice is an important solar term in traditional Chinese culture, with the saying "Winter Solstice is as important as the New Year." Southerners believe that eating tangyuan on Winter Solstice can drive away cold and keep warm, and the round shape of tangyuan symbolizes reunion and completeness. The filling of tangyuan is usually sweet, implying a sweet life. In the south, eating tangyuan on Winter Solstice is an essential custom, and every household makes tangyuan, with the family sitting together eating tangyuan, symbolizing reunion and warmth. The character "团" in tangyuan also implies gathering, expressing people\'s expectation for family harmony and reunion.\n\n**Historical Background**: The history of tangyuan can be traced back to the Song Dynasty, when it was called "圆子" (round balls). Later it gradually evolved into the current tangyuan, becoming essential food for Winter Solstice and Lantern Festival.\n\n**Cultural Significance**: Tangyuan symbolizes reunion and completeness, often appearing in traditional festivals like Winter Solstice and Lantern Festival. Its round shape symbolizes reunion and completeness, and the filling is usually sweet, implying a sweet life.\n\n**Social Scenarios**: Suitable for family meals, friend gatherings, and also essential food for traditional festivals like Winter Solstice and Lantern Festival. In southern China, on Winter Solstice every household makes tangyuan, with the family sitting together eating tangyuan, symbolizing reunion and warmth.'
        }
    },
    {
        id: 29,
        name: {
            zh: '长寿面',
            en: 'Longevity Noodles'
        },
        description: {
            zh: '生日传统，面条细长，象征长寿健康',
            en: 'Birthday tradition, long noodles, symbolizing longevity and health'
        },
        image: 'assets/images/covers/长寿面封面.jpg',
        difficulty: 'beginner',
        spiciness: 0,
        time: '30分钟 / 30 min',
        servings: '2人份 / 2 servings',
        scenario: 'birthday',
        ingredients: [
            {
                name: { zh: '面条', en: 'Noodles' },
                amount: '200克 / 200g',
                substitution: null
            },
            {
                name: { zh: '青菜', en: 'Green vegetables' },
                amount: '100克 / 100g',
                substitution: { zh: '可用菠菜或小白菜代替', en: 'Spinach or baby bok choy can be substituted' }
            },
            {
                name: { zh: '鸡蛋', en: 'Eggs' },
                amount: '2个 / 2 pieces',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用盐代替', en: 'Salt can be substituted' }
            },
            {
                name: { zh: '香油', en: 'Sesame oil' },
                amount: '1茶匙 / 1 tsp',
                substitution: { zh: '可用植物油代替', en: 'Vegetable oil can be substituted' }
            },
            {
                name: { zh: '葱花', en: 'Green onions' },
                amount: '适量 / as needed',
                substitution: null
            },
            {
                name: { zh: '水', en: 'Water' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '煎荷包蛋', en: 'Fry Poached Eggs' },
                description: {
                    zh: '平底锅刷油，打入鸡蛋，小火煎至两面金黄。',
                    en: 'Brush pan with oil, crack eggs, fry over low heat until both sides are golden brown.'
                },
                time: '5分钟 / 5 min'
            },
            {
                title: { zh: '煮面条', en: 'Boil Noodles' },
                description: {
                    zh: '水开后下面条，煮至面条软熟。',
                    en: 'Boil water, add noodles, cook until noodles are soft and cooked.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '烫青菜', en: 'Blanch Green Vegetables' },
                description: {
                    zh: '青菜洗净，放入开水中烫熟，捞出沥干。',
                    en: 'Wash green vegetables, blanch in boiling water until cooked, drain.'
                },
                time: '3分钟 / 3 min'
            },
            {
                title: { zh: '调味装盘', en: 'Season and Serve' },
                description: {
                    zh: '面条盛入碗中，加入生抽、香油调味，放上荷包蛋和青菜，撒上葱花。',
                    en: 'Place noodles in a bowl, season with light soy sauce and sesame oil, top with poached eggs and green vegetables, sprinkle with green onions.'
                },
                time: '2分钟 / 2 min'
            }
        ],
        culture: {
            zh: '长寿面是中国人在生日时常吃的一种传统食物。它通常是一碗细长的面条，有时配上鸡蛋和几片青菜，看起来简单，却有着非常明确的寓意。与普通面条不同，长寿面强调"面条要长、不要断"，因为人们相信面条的长度象征着寿命的长久。对很多中国人来说，生日时吃一碗长寿面，是一种自然又温暖的仪式。\n\n关于生日吃面条的习俗，历史记载可以追溯到唐代。宋代学者朱翌在《猗觉寮杂记》中写道："唐人生日多具汤饼。"这里的"汤饼"其实就是古代对面条的称呼。宋代马永卿在《懒真子》中也提到，人们在生日时会吃"长命面"。《新唐书·王皇后传》中还记录了一个故事：唐玄宗年轻时生活并不富裕，有一年生日，他的岳父阿忠用自己的衣服换来一斗面，为他做了一碗生日面条。这说明在唐代，生日吃面条已经是一种被记录下来的习俗。\n\n关于长寿面的文化来源，民间还流传着一个与汉武帝和大臣东方朔有关的故事。相传汉武帝曾说，人如果"人中"长，就会更长寿。如果一寸代表一百岁，那么传说中活了八百岁的彭祖，人中应该有八寸长。东方朔听后忍不住笑，说那样的话彭祖的脸就会非常长。这个玩笑让大家都笑了起来。因为中文里"面孔"的"面"和"面条"的"面"是同一个字，人们后来便用吃长面条来象征"脸长"，进而象征长寿。虽然很多学者认为这个故事更像是后来的民间解释，但它已经成为长寿面文化的一部分。\n\n在文化上，长寿面的寓意十分直接：面条越长，象征寿命越长。因此传统上吃面时尽量不把面条咬断，希望好运和寿运能够延续下去。很多地方还会在长寿面里加一个鸡蛋，因为鸡蛋象征新的生命和圆满。在一些地区，人们甚至会在吃之前把熟鸡蛋在脸上轻轻滚一滚，寓意新的一岁好运"滚滚而来"。整碗面不仅代表对长寿的祝愿，也象征着生活的完整与延续。\n\n长寿面通常出现在生日这一天，尤其是在家庭庆祝中。家人或朋友会为过生日的人准备一碗面，表达祝福。有时它是一顿生日餐中的第一道食物，有时则是一顿简单但有意义的生日餐本身。无论是在家里还是在餐馆，这碗面更多承载的是祝福和情感，而不仅仅是一道普通的主食。',
            en: 'Longevity noodles are a traditional food often eaten by Chinese people on birthdays. They are usually a bowl of thin, long noodles, sometimes served with eggs and a few slices of green vegetables, appearing simple but carrying very clear meaning. Different from ordinary noodles, longevity noodles emphasize "noodles should be long and not broken," because people believe the length of noodles symbolizes the longevity of life. For many Chinese people, eating a bowl of longevity noodles on birthdays is a natural and warm ritual.\n\nRegarding the custom of eating noodles on birthdays, historical records can be traced back to the Tang Dynasty. Song Dynasty scholar Zhu Yi wrote in "Yijue Liao Zaji": "Tang people on birthdays often have soup cakes." Here "soup cakes" is actually the ancient term for noodles. Song Dynasty scholar Ma Yongqing also mentioned in "Lanzhenzi" that people would eat "longevity noodles" on birthdays. "New Book of Tang · Biography of Empress Wang" also records a story: When Tang Xuanzong was young, his life was not wealthy, and one year on his birthday, his father-in-law Ah Zhong used his own clothes to exchange for a dou of noodles, making him a bowl of birthday noodles. This shows that in the Tang Dynasty, eating noodles on birthdays was already a recorded custom.\n\nRegarding the cultural origin of longevity noodles, folklore also circulates a story related to Emperor Wu of Han and his minister Dongfang Shuo. Legend has it that Emperor Wu of Han once said that if a person\'s "philtrum" is long, they will live longer. If one cun represents one hundred years, then Peng Zu, who is said to have lived for eight hundred years in legend, should have a philtrum eight cun long. Dongfang Shuo couldn\'t help laughing after hearing this, saying that if so, Peng Zu\'s face would be very long. This joke made everyone laugh. Because in Chinese, the "face" character "面" and the "noodle" character "面" are the same character, people later used eating long noodles to symbolize "long face," thereby symbolizing longevity. Although many scholars believe this story is more like a later folk explanation, it has become part of longevity noodle culture.\n\nCulturally, the meaning of longevity noodles is very direct: the longer the noodles, the longer the life symbolized. Therefore, traditionally when eating noodles, people try not to bite the noodles broken, hoping good luck and longevity fortune can continue. Many places also add an egg to longevity noodles, because eggs symbolize new life and completeness. In some regions, people even gently roll a cooked egg on their face before eating, implying that good luck for the new year will "roll in." The whole bowl not only represents wishes for longevity, but also symbolizes the completeness and continuation of life.\n\nLongevity noodles usually appear on birthdays, especially in family celebrations. Family or friends will prepare a bowl of noodles for the birthday person, expressing blessings. Sometimes it is the first dish in a birthday meal, sometimes it is a simple but meaningful birthday meal itself. Whether at home or in a restaurant, this bowl carries more blessings and emotion, not just an ordinary staple food.'
        }
    },
    {
        id: 30,
        name: {
            zh: '全家福',
            en: 'Family Reunion Platter'
        },
        description: {
            zh: '婚宴或寿宴上的传统大盘菜，通常包含海鲜、肉类和蔬菜，象征家人团圆与和谐。每一口都寓意着喜庆和幸福。',
            en: 'A traditional large platter served at weddings or birthday banquets, usually featuring seafood, meat, and vegetables. It symbolizes family reunion, unity, and happiness, with every bite carrying festive blessings.'
        },
        image: 'assets/images/covers/全家福封面.jpg',
        difficulty: 'advanced',
        spiciness: 1,
        time: '120分钟 / 120 min',
        servings: '8人份 / 8 servings',
        scenario: 'wedding',
        ingredients: [
            {
                name: { zh: '大虾', en: 'Large shrimp' },
                amount: '8只 / 8 pieces',
                substitution: { zh: '可用虾仁代替', en: 'Peeled shrimp can be substituted' }
            },
            {
                name: { zh: '海参', en: 'Sea cucumber' },
                amount: '200克 / 200g',
                substitution: { zh: '可用墨鱼代替', en: 'Cuttlefish can be substituted' }
            },
            {
                name: { zh: '鸡肉', en: 'Chicken' },
                amount: '300克 / 300g',
                substitution: { zh: '可用鸭肉代替', en: 'Duck can be substituted' }
            },
            {
                name: { zh: '猪肉', en: 'Pork' },
                amount: '200克 / 200g',
                substitution: null
            },
            {
                name: { zh: '香菇', en: 'Shiitake mushrooms' },
                amount: '100克 / 100g',
                substitution: { zh: '可用口蘑代替', en: 'Button mushrooms can be substituted' }
            },
            {
                name: { zh: '西兰花', en: 'Broccoli' },
                amount: '200克 / 200g',
                substitution: { zh: '可用菜花代替', en: 'Cauliflower can be substituted' }
            },
            {
                name: { zh: '胡萝卜', en: 'Carrots' },
                amount: '100克 / 100g',
                substitution: null
            },
            {
                name: { zh: '生抽', en: 'Light soy sauce' },
                amount: '3汤匙 / 3 tbsp',
                substitution: { zh: '可用盐代替', en: 'Salt can be substituted' }
            },
            {
                name: { zh: '料酒', en: 'Cooking wine' },
                amount: '2汤匙 / 2 tbsp',
                substitution: { zh: '可用白酒代替', en: 'White wine can be substituted' }
            },
            {
                name: { zh: '姜', en: 'Ginger' },
                amount: '适量 / as needed',
                substitution: null
            },
            {
                name: { zh: '蒜', en: 'Garlic' },
                amount: '适量 / as needed',
                substitution: null
            },
            {
                name: { zh: '葱', en: 'Green onions' },
                amount: '适量 / as needed',
                substitution: null
            }
        ],
        steps: [
            {
                title: { zh: '准备食材', en: 'Prepare Ingredients' },
                description: {
                    zh: '大虾去虾线，海参切片，鸡肉和猪肉切块，香菇泡发，西兰花切小朵，胡萝卜切片。',
                    en: 'Remove shrimp veins, slice sea cucumber, cut chicken and pork into pieces, soak shiitake mushrooms, cut broccoli into small florets, slice carrots.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '焯水处理', en: 'Blanch Ingredients' },
                description: {
                    zh: '鸡肉、猪肉、海参分别焯水去腥，西兰花和胡萝卜焯水断生。',
                    en: 'Blanch chicken, pork, and sea cucumber separately to remove fishy smell, blanch broccoli and carrots until cooked.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '炒制主料', en: 'Stir-fry Main Ingredients' },
                description: {
                    zh: '热锅下油，爆香姜蒜，下鸡肉和猪肉翻炒至变色，加入海参和香菇继续炒制。',
                    en: 'Heat oil in pan, sauté ginger and garlic, add chicken and pork stir-fry until color changes, add sea cucumber and shiitake mushrooms continue stir-frying.'
                },
                time: '20分钟 / 20 min'
            },
            {
                title: { zh: '加入大虾', en: 'Add Shrimp' },
                description: {
                    zh: '加入大虾翻炒至变色，加入生抽、料酒调味。',
                    en: 'Add shrimp stir-fry until color changes, season with light soy sauce and cooking wine.'
                },
                time: '10分钟 / 10 min'
            },
            {
                title: { zh: '加入蔬菜', en: 'Add Vegetables' },
                description: {
                    zh: '加入西兰花和胡萝卜，翻炒均匀，加适量水焖煮10分钟。',
                    en: 'Add broccoli and carrots, stir-fry evenly, add appropriate amount of water and simmer for 10 minutes.'
                },
                time: '15分钟 / 15 min'
            },
            {
                title: { zh: '收汁装盘', en: 'Reduce Sauce and Serve' },
                description: {
                    zh: '大火收汁，撒上葱花，装入大盘中即可。',
                    en: 'Turn up heat to reduce sauce, sprinkle with green onions, serve in large platter.'
                },
                time: '5分钟 / 5 min'
            }
        ],
        culture: {
            zh: '全家福是婚宴和寿宴上的传统大盘菜，通常包含海鲜、肉类和蔬菜，象征着家人团圆与和谐。这道菜的名称寓意着"全家团圆、幸福美满"，是宴席上必不可少的菜品。全家福的制作需要多种食材的搭配，每一种食材都有其特殊的寓意：大虾象征着"红红火火"，海参象征着"长寿"，鸡肉象征着"吉祥"，猪肉象征着"富贵"，香菇象征着"圆满"，西兰花象征着"生机"。在婚宴上，全家福象征着新人的幸福美满；在寿宴上，全家福则象征着寿星的长寿健康。这道菜不仅味道鲜美，更承载着人们对美好生活的向往和祝福。\n\n**历史背景**：全家福是婚宴和寿宴上的传统大盘菜，起源于中国南方地区。它的历史可以追溯到清代，当时是宴席上的压轴菜品。\n\n**文化意义**：全家福象征着家人团圆与和谐，常出现在婚宴、寿宴等重要场合中。它的名称寓意着"全家团圆、幸福美满"，是宴席上必不可少的菜品。\n\n**社交场景**：适合婚宴、寿宴、家庭聚餐等重要场合。在婚宴上，全家福象征着新人的幸福美满；在寿宴上，全家福则象征着寿星的长寿健康。',
            en: 'Family Reunion Platter is a traditional large platter served at weddings and birthday banquets, usually featuring seafood, meat, and vegetables, symbolizing family reunion, unity, and harmony. The name of this dish implies "family reunion and happiness," making it an essential dish at banquets. The preparation of Family Reunion Platter requires the combination of various ingredients, each with its special meaning: shrimp symbolizes "prosperity," sea cucumber symbolizes "longevity," chicken symbolizes "good luck," pork symbolizes "wealth," shiitake mushrooms symbolize "completeness," and broccoli symbolizes "vitality." At weddings, Family Reunion Platter symbolizes the happiness and completeness of the newlyweds; at birthday banquets, it symbolizes the longevity and health of the birthday person. This dish is not only delicious but also carries people\'s longing and blessings for a better life.\n\n**Historical Background**: Family Reunion Platter is a traditional large platter served at weddings and birthday banquets, originating from southern China. Its history can be traced back to the Qing Dynasty, when it was the finale dish at banquets.\n\n**Cultural Significance**: Family Reunion Platter symbolizes family reunion, unity, and harmony, often appearing in important occasions like weddings and birthday banquets. Its name implies "family reunion and happiness," making it an essential dish at banquets.\n\n**Social Scenarios**: Suitable for important occasions like weddings, birthday banquets, and family meals. At weddings, Family Reunion Platter symbolizes the happiness and completeness of the newlyweds; at birthday banquets, it symbolizes the longevity and health of the birthday person.'
        }
    }
];
