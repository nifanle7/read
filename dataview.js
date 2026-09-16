// 设定随机笔记标签关键词
const term = "#Quote"; 
const files = app.vault.getMarkdownFiles(); 
// 遍历所有文件，收集带关键词的行 + 文件名 
const results = []; 
// 设定踢除规则1：当前脚本所在文件
const currentFilePath = dv.current().file.path;
// 设定踢除规则2：文件名包含在 excludeText 字段中，全部排除 
const excludeText = ["",""];
const arr = files.map(async (file) => { 
    // 执行踢除规则
	if (file.path === currentFilePath || file.basename.includes(excludeText)) return;
	const content = await app.vault.cachedRead(file); 
	const lines = content.split("\n").filter(line => line.contains(term)); 
	
	lines.forEach(line => { 
		results.push({ 
			text: line.trim(), 
			fileName: file.basename, // 文件名（不带后缀） 
			path: file.path // 文件完整路径 
			}); 
		}); 
	}); 
	Promise.all(arr).then(() => { 
		if (results.length === 0) { 
			dv.paragraph("未找到带 #Quote 的内容"); 
			return; 
		} // 随机抽取 3 条 
	const ranNum = 3; 
	const shuffled = [...results].sort(() => 0.5 - Math.random()); 
	const selected = shuffled.slice(0, ranNum); // 输出：内容 + 双链文件名 
	selected.forEach(item => { 
		dv.paragraph(`${item.text}  ——[[${item.fileName}]]`); 
		}); 
	});