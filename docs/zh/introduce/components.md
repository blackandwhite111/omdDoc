# 公共组件

## SwitchPage
多用于主页与明细页的切换
``` jsx
const obj={use=0}
    class {
        bindSwitch={use:0}
        render(){ 
            return ({
            <PageSwitch bind={this.bindSwitch} useSearch={true}>
                <Page1 bind={this.bindSwitch}/>
                <Page2 bind={this.bindSwitch}/>
            </PageSwitch>
    
            })
        }
    }
```
开启```useSearch```可让组件动态替换url参数，该功能只在开发模式下有效.

```bind```对象，会被设置数据监听，所以无须调用setState，改变use值会自动触发事件。

## Upload
文件上传组件
``` jsx
class {
    upload=(file,uploadRef)=>{
        const form=new FormData();
        form.append('file',file);
        window['myUpload'](url,form)
            .then(()=>{
                //告诉组件上传结束，出现结束动画
                uploadRef.end();
            })
            .catch(()=>{
                uploadRef.end()
                //此处处理上传失败
            })
    }

    render(){
        return 
        (<div>
            <Upload onUpload={this.upload}/>            
        </div>)
    }
}

```
## Upload2

文件上传组件2

Upload2封装了异步上传，该组件使用有局限性，需要后端严格按照约定规则写api。
``` jsx
class {
    upload=()=>{
       return {
             title: "导入",
             btnLabel: "导入",
             asynUpload: true,       // 是否是异步上传
             upload: {
               url: "",
               fileSizeMax: "2MB",
               onUpload: (res) => {
                 // 上传完成后执行
               }
             },
             progress: {               // 进度条相关配置
               url: "",
               method: "GET",
             },
             download: {              // 下载相关配置
               templateCode: "",
               asynResult: {          // 异步上传结果下载
                 url: "",
               }
             }
           }
    }

    render(){
        return 
        (<div>
            <Upload2 options={this.upload()}/>            
        </div>)
    }
}

```
## FileExport

文件下载

``` jsx
class{
    down=open=>open(url,params)

    render(){
        return <FileExport value='导出文件' onExport={down}/>
    }
}


```

## SearchTable

根据array生成查询条件, 支持的type可以去```@z/components/common/searchTable.js```中查看和维护。

``` jsx
class{
    searchMethod = {};
    queryData = [
        { col: 1, type: 'input', label: '输入框', bind: 'inputvalue',}
        { col: 1, type: 'rangeDate', label: '日期区间', bind:{begin: 'beginKey', end: 'endKey'} }
    ]

    render(){
        return <SearchQuery method={this.searchMethod} data={this.queryData}/>
    }
}

``` 

method.getResult() 可以获取所有表单的值
``` js
let searchResult = this.searchMethod.getResult();
```

## Cols

根据array生成col列表， 多用于明细展示

``` jsx
class{
    company = '元';
    array = [
      {
        label: "车型大类",
        value: ""
      },
      {
        label: "车型年",
        value: ""
      },
      {
        label: "车型",
        value: ""
      },
      {
        label: "版本",
        value: ""
      },
      {
        label: "外色",
        value: ""
      },
      {
        label: "内饰",
        value: ""
      },
      {
        label: "选装件/包",
        value: ""
      }
    ]

    render(){
        return <Cols data={this.array} company={this.company}></Cols>
    }
}

``` 