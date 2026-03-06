# -*- coding: utf-8 -*-
import re

file_path = r'c:\Users\vivia\Desktop\CTB\app.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 旧的中文内容
old_zh = '''番茄炒蛋是一道"不知道吃什么时就会出现"的菜。它常常出现在忙碌的一天结束后，或者家里食材不多的时候。只要有鸡蛋和番茄，就能很快做出一顿饭，因此在很多中国家庭中，它是最常被拿出来应急、却又不会被嫌弃的选择。这道菜很少被严格地按照食谱来做。番茄是切块还是切小，鸡蛋先炒还是后放，每个人家里都有不同的做法。有的人喜欢偏甜，有的人更偏酸，这些差异并不会被纠正，反而被视为"各家各味"的一部分。正因为做法自由，番茄炒蛋往往承载着个人记忆，而不是统一标准。

**历史背景**：番茄炒蛋的起源可以追溯到19世纪末，当时番茄从美洲传入中国。最初，番茄被视为观赏植物，直到20世纪初才开始被广泛食用。这道菜真正流行起来是在新中国成立后，成为普通家庭的常见菜品。

**文化意义**：番茄炒蛋被称为"国民下饭菜"，几乎每个中国家庭都会做。它的简单性和美味性使其成为"家"的象征，承载着无数人的童年记忆。在海外，番茄炒蛋也是许多留学生的首选，成为他们思乡之情的寄托。

**社交场景**：适合日常家庭聚餐，也适合在朋友聚会时作为一道快手菜。它的酸甜口味适合各种年龄段的人，是餐桌上的"安全选择"。

在很多情况下，番茄炒蛋并不是用来招待客人的菜，而是留给自己、家人或熟人吃的菜。它常出现在普通的工作日、独自在家的夜晚，或是身体不太舒服、只想吃点清淡食物的时候。番茄炒蛋更像是一道与日常生活紧密相连的菜，代表的是稳定、熟悉和持续的生活节奏。'''

# 新的中文内容
new_zh = '''番茄炒蛋是一道在中国家庭中非常常见的家常菜。很多时候，当人们不知道该做什么菜，或是在忙碌的一天结束后想要快速准备一顿饭时，它就会自然地出现在餐桌上。只要有鸡蛋和番茄，两种简单的食材，就可以在很短的时间内做出一道温暖又下饭的菜。因此，在许多家庭里，番茄炒蛋常常是"应急时刻"的选择，却又从不会让人觉得敷衍。

有意思的是，这道菜很少被严格地按照食谱来制作。番茄是切成大块还是小块，鸡蛋是先炒好再和番茄一起翻炒，还是直接一起下锅，每个家庭都有自己的习惯。有的人喜欢偏甜的口味，有的人更喜欢酸一点的味道，这些差异并不会被认为是"做错了"，反而被视为一种自然的"各家各味"。正因为做法自由，番茄炒蛋往往承载的是个人和家庭的记忆，而不是一个统一的标准版本。

从历史上看，番茄并不是中国传统食材。番茄在19世纪末从美洲传入中国，最初更多被当作观赏植物。到了20世纪初，它才逐渐进入日常饮食之中。新中国成立之后，随着食材供应逐渐稳定、家庭烹饪更加普及，番茄炒蛋也慢慢成为普通家庭餐桌上的常见菜品。

今天，番茄炒蛋常被称为中国的"国民下饭菜"。几乎每个家庭都会做这道菜，它的味道简单、温和，却让人很容易产生熟悉和安心的感觉。对很多人来说，它不仅是一道菜，也是一种关于"家"的记忆。在海外，这道菜同样非常常见。许多中国留学生在刚开始自己做饭时，往往最先做的就是番茄炒蛋，因为食材容易获得、做法简单，也因为它能带来一种熟悉的味道。

在社交场景中，番茄炒蛋通常出现在日常的家庭餐桌上，也常作为朋友聚餐时的一道快手菜。它酸甜温和的味道适合不同年龄的人，因此常被视为餐桌上的"安全选择"。不过在很多情况下，番茄炒蛋并不是用来招待重要客人的菜，而更像是一道留给自己、家人或熟人的菜。它常常出现在普通的工作日、独自在家的夜晚，或者身体不太舒服、只想吃点清淡食物的时候。

正因如此，番茄炒蛋不仅是一道简单的家常菜，也是一种与日常生活紧密相连的味道。它代表的不是隆重或精致，而是一种稳定、熟悉、持续的生活节奏。'''

# 旧的英文内容
old_en = '''Tomato and Egg Stir-fry is a dish that "appears when you don\'t know what to eat." It often appears at the end of a busy day, or when there aren\'t many ingredients at home. As long as there are eggs and tomatoes, a meal can be made quickly, so in many Chinese families, it is the most frequently chosen emergency option that is never rejected. This dish is rarely prepared strictly according to recipes. Whether tomatoes are cut into chunks or small pieces, whether eggs are fried first or added later, every household has its own approach. Some prefer it sweeter, others more sour - these differences are not corrected but instead seen as part of "each family\'s unique flavor." Because the preparation is free and flexible, Tomato and Egg Stir-fry often carries personal memories rather than a unified standard.

**Historical Background**: The origin of Tomato and Egg Stir-fry can be traced back to the late 19th century, when tomatoes were introduced to China from the Americas. Initially, tomatoes were considered ornamental plants and were not widely consumed until the early 20th century. This dish truly became popular after the founding of New China, becoming a common dish in ordinary households.

**Cultural Significance**: Tomato and Egg Stir-fry is known as the "national side dish" - almost every Chinese family knows how to make it. Its simplicity and deliciousness make it a symbol of "home," carrying the childhood memories of countless people. Overseas, Tomato and Egg Stir-fry is also the first choice for many international students, becoming a sustenance for their homesickness.

**Social Scenarios**: Suitable for daily family meals, and also makes a quick dish for friend gatherings. Its sweet and sour taste suits people of all ages, making it a "safe choice" at the dining table.

In many cases, this dish is not meant for entertaining guests but is reserved for oneself, family, or close friends. It often appears on ordinary weekdays, on nights spent alone at home, or when one is not feeling well and just wants something light to eat. Tomato and Egg Stir-fry is more like a dish closely connected to daily life, representing a stable, familiar, and continuous rhythm of life.'''

# 新的英文内容
new_en = '''Tomato and Egg Stir-fry is a very common home-style dish in Chinese households. Many times, when people don\'t know what to cook, or want to quickly prepare a meal after a busy day, it naturally appears on the dining table. With just eggs and tomatoes, two simple ingredients, you can make a warm and appetizing dish in a very short time. Therefore, in many families, Tomato and Egg Stir-fry is often a choice for "emergency moments," yet it never feels perfunctory.

Interestingly, this dish is rarely prepared strictly according to recipes. Whether tomatoes are cut into large or small pieces, whether eggs are fried first then stir-fried with tomatoes, or put directly into the pan together, every family has its own habits. Some people prefer a sweeter taste, others like it more sour - these differences are not considered "wrong," but rather seen as a natural "each family\'s unique flavor." Because the preparation is free, Tomato and Egg Stir-fry often carries personal and family memories, rather than a unified standard version.

Historically, tomatoes are not traditional Chinese ingredients. Tomatoes were introduced to China from the Americas in the late 19th century, initially more as ornamental plants. By the early 20th century, they gradually entered daily diets. After the founding of New China, as food supply gradually stabilized and home cooking became more popular, Tomato and Egg Stir-fry slowly became a common dish on ordinary family tables.

Today, Tomato and Egg Stir-fry is often called China\'s "national side dish." Almost every family can make this dish, its taste is simple and mild, yet it easily gives people a familiar and reassuring feeling. For many people, it is not just a dish, but also a memory of "home." Overseas, this dish is equally common. Many Chinese international students, when they first start cooking for themselves, often make Tomato and Egg Stir-fry first, because ingredients are easy to obtain, the method is simple, and because it can bring a familiar taste.

In social scenarios, Tomato and Egg Stir-fry usually appears on daily family dining tables, and is often served as a quick dish when friends gather. Its sweet and sour mild taste suits people of different ages, so it is often seen as a "safe choice" at the dining table. However, in many cases, Tomato and Egg Stir-fry is not a dish for entertaining important guests, but more like a dish reserved for oneself, family, or acquaintances. It often appears on ordinary weekdays, nights alone at home, or when one is not feeling well and just wants to eat something light.

For this reason, Tomato and Egg Stir-fry is not just a simple home-style dish, but also a taste closely connected to daily life. What it represents is not grandeur or sophistication, but a stable, familiar, and continuous rhythm of life.'''

if old_zh in content:
    content = content.replace(old_zh, new_zh)
    print("中文内容替换成功")
else:
    print("未找到旧的中文内容")

if old_en in content:
    content = content.replace(old_en, new_en)
    print("英文内容替换成功")
else:
    print("未找到旧的英文内容")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("文件更新完成")
