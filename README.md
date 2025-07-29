# Coze Studio RAG百科

一个专注于检索增强生成（RAG）技术的独立知识库网站，特别是RAG系统中的索引策略。

## 项目概述

本项目是一个静态网站，提供了关于RAG技术的系统性介绍，包括：

- **向量索引**：HNSW、IVF、PQ等算法的原理和应用
- **关键词索引**：倒排索引、BM25算法等的工作机制
- **分层索引**：利用文档层次结构提升检索效率
- **混合索引策略**：结合多种索引方法的融合机制
- **索引参数配置**：各类索引的关键参数及调优建议

## 项目特性

- 📱 **响应式设计**：支持移动端和桌面端
- 🎨 **现代化UI**：使用Bootstrap 5.3.0框架
- 🔍 **详细解析**：包含技术原理、案例研究和代码示例
- 📚 **丰富资源**：提供学习资源和参考文献
- 🚀 **快速部署**：纯静态网站，易于部署

## 文件结构

```
coze-studio-rag-wiki/
├── index.html              # 首页
├── vector-index.html        # 向量索引页面
├── keyword-index.html       # 关键词索引页面
├── hierarchical-index.html  # 分层索引页面
├── hybrid-index.html        # 混合索引策略页面
├── index-parameters.html    # 索引参数配置页面
├── about.html              # 关于页面
├── contact.html            # 联系我们页面
├── resources.html          # 资源页面
├── css/
│   └── style.css           # 样式文件
├── js/
│   └── main.js             # JavaScript文件
├── images/
│   ├── favicon.svg         # 网站图标
│   └── logo.svg            # 网站Logo
└── README.md               # 项目说明
```

## 本地运行

1. 克隆或下载项目文件
2. 在项目根目录启动本地服务器：
   ```bash
   python3 -m http.server 8001
   ```
   或者使用其他HTTP服务器：
   ```bash
   # 使用Node.js
   npx serve .
   
   # 使用PHP
   php -S localhost:8001
   ```
3. 在浏览器中访问 `http://localhost:8001`

## 部署

### GitHub Pages
1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源

### Netlify
1. 将项目文件夹拖拽到Netlify部署页面
2. 或连接GitHub仓库进行自动部署

### Vercel
1. 使用Vercel CLI：`vercel --prod`
2. 或在Vercel网站导入GitHub仓库

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计
- **Bootstrap 5.3.0** - 响应式框架
- **Bootstrap Icons 1.11.0** - 图标库
- **JavaScript** - 交互功能

## 贡献

欢迎提交Issue和Pull Request来改进这个项目：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 邮箱：contact@cozestudio.com
- GitHub：https://github.com/coze-studio
- Twitter：@CozestudioAI

## 致谢

感谢所有为RAG技术发展做出贡献的研究者和开发者。

---

**Coze Studio RAG百科** - 让RAG技术更易理解和应用
