# -*- coding: utf-8 -*-
import re

file_path = r'c:\Users\vivia\Desktop\CTB\app.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有菜品ID的位置
lines = content.split('\n')

# 记录所有id行的索引和当前值
id_lines = []
for i, line in enumerate(lines):
    match = re.match(r'^(\s+id:\s*)(\d+)(,\s*)$', line)
    if match:
        id_lines.append((i, int(match.group(2)), line))

print(f"找到 {len(id_lines)} 个ID行")

# 只处理主菜谱部分的ID（排除社区分享部分）
# 社区分享部分从大约2838行开始
main_recipe_ids = [(idx, id_val, line) for idx, id_val, line in id_lines if idx < 2800]

print(f"主菜谱部分有 {len(main_recipe_ids)} 个ID")

# 检查重复的ID
id_counts = {}
for idx, id_val, line in main_recipe_ids:
    id_counts[id_val] = id_counts.get(id_val, 0) + 1

duplicates = {k: v for k, v in id_counts.items() if v > 1}
if duplicates:
    print(f"\n发现重复的ID: {duplicates}")
else:
    print("\n没有发现重复的ID")

# 修复重复的ID - 从后向前处理，确保连续的ID
# 目标：让ID从1开始连续递增
expected_id = 1
for idx, id_val, line in main_recipe_ids:
    if id_val != expected_id:
        old_line = lines[idx]
        lines[idx] = re.sub(r'id:\s*\d+', f'id: {expected_id}', line)
        print(f"行 {idx+1}: {old_line.strip()} -> {lines[idx].strip()}")
    expected_id += 1

# 写回文件
with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("\n所有ID修复完成！")
