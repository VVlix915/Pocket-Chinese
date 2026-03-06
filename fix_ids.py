# -*- coding: utf-8 -*-
import re

file_path = r'c:\Users\vivia\Desktop\CTB\app.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 需要修改的ID映射 (旧ID -> 新ID)
id_mapping = {
    9: 10,    # 鱼香茄子
    10: 11,   # 麻婆豆腐
    11: 12,   # 春卷
    12: 13,   # 饺子
    13: 14,   # 糖醋里脊
    14: 15,   # 扬州炒饭
    15: 16,   # 葱油拌面
    16: 17,   # 回锅肉
    17: 18,   # 鱼香肉丝
    18: 19,   # 清蒸鲈鱼
    19: 20,   # 西湖牛肉羹
    20: 21,   # 松鼠桂鱼
    21: 22,   # 东坡肉
    22: 23,   # 北京烤鸭
    23: 24,   # 佛跳墙
    24: 25,   # 白切鸡
    25: 26,   # 蒜蓉粉丝虾
    26: 27,   # 小笼包
    27: 28,   # 粽子
    28: 29,   # 月饼
}

# 从大到小替换，避免冲突
for old_id, new_id in sorted(id_mapping.items(), reverse=True):
    # 匹配 "id: X," 的模式，确保是菜品ID而不是其他数字
    pattern = rf'^(        id: ){old_id}(,\s*$)'
    replacement = rf'\g<1>{new_id}\g<2>'
    content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
    print(f"已将 ID {old_id} 改为 {new_id}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n所有ID更新完成！")
