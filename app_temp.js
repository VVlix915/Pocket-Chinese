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
                <div class="recipe-detail-section">
                    <h2>中式烹饪哲学 / Chinese Culinary Philosophy</h2>
                    <p style="margin-bottom: 1rem;">
                        中式烹饪强调"天人合一"的理念，注重食材的天然本味和营养平衡。通过不同的烹饪技法，如炒、蒸、煮、炖、炸等，最大程度地保留食材的营养成分，同时创造出丰富的口感层次。
                    </p>
                    <p style="margin-bottom: 1rem;">
                        Chinese cooking emphasizes the philosophy of "harmony between heaven and humanity," focusing on the natural flavors of ingredients and nutritional balance. Through various cooking techniques such as stir-frying, steaming, boiling, braising, and deep-frying, the nutritional content of ingredients is maximally preserved while creating rich layers of texture and flavor.
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
                        Chinese seasoning emphasizes the "harmony of five flavors" - the balance of sour, sweet, bitter, spicy, and salty. Different regional cuisines have different seasoning characteristics, but all pursue a harmonious unity of flavors. Through clever combinations of various seasonings, rich but not chaotic flavors are created.
                    </p>
                </div>
            `
        },
        etiquette: {
            icon: '🍽️',
            title: '餐桌礼仪与习俗 / Table Etiquette & Customs',
            description: '学习中式用餐礼仪，了解座次安排、敬酒文化等传统习俗',
            content: `
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
            `
        },
        festival: {
            icon: '🎊',
            title: '节日特殊菜限定菜 / Festival & Seasonal Specialties',
            description: '了解中国传统节日的特色菜肴和限定美食，感受节日氛围',
            content: `
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