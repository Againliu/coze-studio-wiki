document.addEventListener('DOMContentLoaded', function() {
    // 添加页面淡入效果
    document.body.classList.add('fade-in');
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 代码高亮初始化
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
    
    // 生成目录（如果页面有目录容器）
    const tocContainer = document.querySelector('.toc-container');
    if (tocContainer) {
        const headings = document.querySelectorAll('.content h2, .content h3');
        if (headings.length > 0) {
            const toc = document.createElement('div');
            toc.className = 'toc';
            toc.innerHTML = '<h3>目录</h3><ul></ul>';
            
            const tocList = toc.querySelector('ul');
            
            headings.forEach((heading, index) => {
                // 为每个标题添加ID（如果没有）
                if (!heading.id) {
                    heading.id = 'heading-' + index;
                }
                
                const listItem = document.createElement('li');
                listItem.className = heading.tagName.toLowerCase();
                
                const link = document.createElement('a');
                link.href = '#' + heading.id;
                link.textContent = heading.textContent;
                
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
            
            tocContainer.appendChild(toc);
        }
    }
    
    // 响应式图片处理
    document.querySelectorAll('.svg-container svg').forEach(svg => {
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', 'auto');
    });
    
    // 添加图片点击放大功能
    document.querySelectorAll('.content img:not(.no-zoom)').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <img src="${this.src}" alt="${this.alt}">
                    <button class="close-button">&times;</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // 关闭模态框
            modal.querySelector('.modal-backdrop').addEventListener('click', function() {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            });
            
            modal.querySelector('.close-button').addEventListener('click', function() {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            });
        });
    });
    
    // 添加返回顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '&uarr;';
    document.body.appendChild(backToTopButton);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // 点击返回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }
        
        .modal-content {
            position: relative;
            z-index: 1;
            max-width: 90%;
            max-height: 90%;
        }
        
        .modal-content img {
            max-width: 100%;
            max-height: 90vh;
            display: block;
            margin: 0 auto;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        
        .close-button {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
        
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background-color: #3a5bd0;
            transform: translateY(-3px);
        }
        
        .toc .h2 {
            padding-left: 0;
        }
        
        .toc .h3 {
            padding-left: 20px;
        }
    `;
    
    document.head.appendChild(style);
});