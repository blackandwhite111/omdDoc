## test环境

1. 本地打包

```text
vms/omd 测试环境
npm run z-build private2 zip

audi 测试环境
npm run z-build private3 zip
```

2. 将```dist.zip```文件提交到对应git仓库

    测试环境提交到git： ```vms/vms-react-package``` 对应文件夹

3. jenkins 一键发布

    jenkins地址和账号 请联系对应负责人
    
4. 打包部署完毕

## uat环境

服务器打包

1. 将代码同步到```大众```的git仓库

2. 进入大众 jenkins

3. 找到前端应用，一键打包发布


## prod环境

1. 本地打包

```text
npm run z-build prod tar
npm run z-build prod iframe tar
```
   
::: details
注意: 命令运行前会自动删除```dist```和```dist2```,```iframe```为嵌入模式。
  ```/myComment/config.js```,可更改打包配置
打包后得到的```dist```,```dist2```文件，已做过gzip压缩.
:::

2. 将```dist```和```dist2```文件提交到大众git /build 文件夹

3. jenkins 一键发布

    jenkins地址和账号 请联系对应负责人
    
4. 打包部署完毕