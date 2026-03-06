# -*- coding: utf-8 -*-
import re

file_path = r'c:\Users\vivia\Desktop\CTB\app.js'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 需要修改的行号和新的ID值
# 从 line 1208 (id: 10, 糖拌番茄) 开始，到 line 2702 (id: 29, 月饼)
# 每个ID加1

modifications = [
    (1207, 11),  # 糖拌番茄 id: 10 -> 11 (line 1208 in 1-based, 1207 in 0-based)
    (1257, 12),  # 蛋炒饭 id: 11 -> 12
    (1331, 13),  # 麻婆豆腐 id: 12 -> 13
    (1410, 14),  # 春卷 id: 13 -> 14
    (1483, 15),  # 饺子 id: 14 -> 15
    (1567, 16),  # 糖醋里脊 id: 15 -> 16
    (1628, 17),  # 扬州炒饭 id: 16 -> 17
    (1712, 18),  # 葱油拌面 id: 17 -> 18
    (1786, 19),  # 回锅肉 id: 18 -> 19
    (1865, 20),  # 鱼香肉丝 id: 19 -> 20
    (1939, 21),  # 清蒸鲈鱼 id: 20 -> 21
    (2013, 22),  # 西湖牛肉羹 id: 21 -> 22
    (2105, 23),  # 松鼠桂鱼 id: 22 -> 23
    (2187, 24),  # 东坡肉 id: 23 -> 24
    (2269, 25),  # 北京烤鸭 id: 24 -> 25
    (2348, 26),  # 佛跳墙 id: 25 -> 26
    (2435, 27),  # 白切鸡 id: 26 -> 27
    (2527, 28),  # 蒜蓉粉丝虾 id: 27 -> 28
    (2609, 29),  # 小笼包 id: 28 -> 29
    (2701, 30),  # 粽子 id: 29 -> 30
]

for line_idx, new_id in modifications:
    if line_idx < len(lines):
        old_line = lines[line_idx]
        # 匹配 id: X, 的模式
        if re.match(r'^\s+id:\s*\d+,\s*$', old_line):
            lines[line_idx] = re.sub(r'id:\s*\d+', f'id: {new_id}', old_line)
            print(f"Line {line_idx + 1}: {old_line.strip()} -> {lines[line_idx].strip()}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("\n所有ID更新完成！")
