# 项目简介

前端主要使用框架：
- [React](https://react.docschina.org/)
- [Dva](https://dvajs.com/)
- [Ant Design 3.x](https://3x.ant.design/docs/react/introduce-cn)

## 项目结构
    .
    ├── markdown
    ├── mock
    ├── myComment         打包命令
    ├── public            资源文件
    │   ├── css
    │   ├── fonts
    │   ├── img
    │   └── pdfjs
    └── src
        ├── antd          antd样式文件
        ├── components    公共组件
        ├── config        配置文件
        ├── layouts       整体布局
        ├── models        redux models
        ├── routes        页面文件
        ├── services      接口文件
        ├── style         样式文件
        └── utils
        
## Style
1. ```sass```目录 样式主目录
    - ```index.scss``` 主文件入口
    - ```variable.scss``` 公共sass变量
    - ```utilities``` 工具样式文件夹
        - ```index.scss``` 
        - ```variable.scss``` 
    - ```dazhong``` 大众样式文件夹
    - ```component``` 组件样式文件夹
    - ```mixin``` 公共样式组合文件夹
    ::: details
    执行```npm run gen-sass```可在```sass```目录下，实时生成style.css文件.
    :::
2. ```theme``` 皮肤
    ::: details
    1.VW是主色，SKD只是切换菜单颜色，奥迪定制黑色
    
    2.开发时，切换为奥迪皮肤修改style目录下的样式文件不会自动热更新，需手动刷新浏览器。src内的样式文件修改不受影响。
    :::
    
## Components
```index.js```为大多数组件的输出口

## Http
- 用法

      http(method:'get'|'post',url,params?,options?:{expires?,headers}):Observable<{}>

- 例子

      const http=window['myHttp2'];
      http('get','/path/xxx',{page:1}).subscribe(result=>{})
      http.('post','/path/xxx',{page:1}).subscribe(result=>{})
      
- 使用options:

      http('post','/path/xxx',{page:1},{headers:{'customHeader':'value'}}) //自定义头信息
      http('post','/path/xxx',{page:1},{expires:10})  //内存缓存该请求数据10min，在url和参数相同的情况下，该请求数据将从本地获取。
