## 慕课网项目

### 1 项目初始化
```
├── Readme.md
├── node_modules
├── package.json
├── src
│   ├── css
│   ├── images
│   ├── js
│   │	├── components
│   │   │    └──
│   │   └──  root.js
│	└── bundle.js
│
├── index.html
└── webpack.config.js
```
```
README.md  帮助文件
node_modules 模块文件夹
package.json 模块配置文件
webpack.config.js webpack配置文件
```
启动热加载看配置： webpack-dev-server --hot --inline

### 2 ant design
```
npm install antd --save
```

### API接口
获取新闻列表 http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10

获取新闻详情 http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161022191707874

获取文章评论 http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=123

新闻添加评论 http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=1&uniquekey=123&commnet=content

收藏新闻 http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=1&uniquekey=123

注册登录接口 http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=r_userName&r_password=r_password&r_confirmPassword=r_confirmPassword

获取用户收藏 http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=1

获取用户发出的评论 http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=1


### PC端 （组件开发）
图标网站：
https://www.iconfinder.com/
http://www.easyicon.net/

布局采用flex  ant design （layout）  栅格布局

- fetch （框架）
数据请求，类似ajax
```
npm install fetch --save

```




### 移动端 （react-responseive）
import MediaQuery from 'react-responsive';

```
            <div>
			    <MediaQuery query="(min-device-width:1224px)">
					<PCIndex/>
				</MediaQuery>
				<MediaQuery query="(max-device-width:1224px)">
					<MobileIndex/>
				</MediaQuery>
			</div>
```


综合新闻网站项目
UI组件 ： Ant Design； flex 布局
开发环境： webpack、react、redux、es6 技术栈
CSS Modules；  ； React-Router

使用 Babel 和 babel-loader 编译 jsx、es6

从后台获取数据使用 Fetch  Promise