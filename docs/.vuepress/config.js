module.exports = {
    title: "Declan's Notebook", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Tech documents by Declan', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', 
            { rel: 'icon', href: '/favicon.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
    
    //下面涉及到的md文件和其他文件的路径下一步再详细解释
    themeConfig: {
        logo: '/favicon.png',  //网页顶端导航栏左上角的图标
        
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: 'Home', link: '/' },    
            
            //格式二：添加下拉菜单，link指向的文件路径
            // {
            //     text: 'Projects',  //默认显示        
            //     ariaLabel: 'Categories',   //用于识别的label
            //     items: [
            //         { text: 'FolderA', link: '/pages/folder1/test1.md' },  
            //         //点击标签会跳转至link的markdown文件生成的页面
            //         { text: 'FolderB', link: '/pages/folder2/test4.md' },
            //     ]
            // },
            { text: 'VEX', link: '/VEX1/' },
            
            { text: 'Blog', link: 'https://blog.lihaojin.cn' },
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'GitHub', link: 'https://github.com/declan-haojin' }
            
        ],
        
        sidebar: [
            '/VEX1/',
            '/VEX2/'
        ],
        
        sidebarDepth: 3,
        search: false
        
    },
    
    plugins: {
        "vuepress-plugin-smooth-scroll": {},

        // "vuepress-plugin-auto-sidebar": {}
    }
        
}

