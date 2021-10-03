# Hooks
- 基于react hooks开发复用功能，降低开发成本。
- 项目集成 [ahooks](https://ahooks.js.org/zh-CN)

## useUI
hooks/ui 包含一些直接返回react组件的hooks。

### useUI_fileExport
下载组件
```jsx
const {Render: RenderFileExport} = useUI_fileExport(url, {
    beforeRequest: () => Promise,    // 下载前的预处理，返回promise
    submitMethod: 'get',
    btnLabel: '导出',
    handleParams: () => {
      return {}
    }
});
```
render:
```jsx
<RenderFileExport />
```

### useUI_uploadModal
上传组件
```jsx
const {Render: RenderUploadModal} = useUI_uploadModal(url, {
    btnLabel: '导入',
    handleForm: form => {
      // 导入前处理formData参数
      return form;
    },
    onSuccess: res => {},
    onError: err => {},
  });
```
render:
```jsx
<RenderUploadModal />
```

## useHttp
用于http请求
```jsx
const httpFn = params => window.myHttp2('GET', `xxx/service/xxx/xxx`, params, { cache: false });

const {data, error, loading, run, mutate} = useHttp(httpFn, {
    manual: true,                // 是否自动请求, true不自动， false自动
    defaultParams: [{a:1, b:2}], // 自动请求时的参数
    formatResult: res => res,    // 格式化请求结果
    onSuccess: res => {},        // 请求成功反馈
    onError: err => {}           // 请求失败反馈
  });

let params = {
    id: '123'
}

// 手动发起请求
run(params)
```

## useHttpFormTable
http请求和Form、Table组件的结合, hooks会自动接管table的一些操作，如分页,loading等。
```jsx
const httpFn = params => window.myHttp2('GET', `xxx/service/xxx/xxx`, params, { cache: false });

const {loading, tableProps, run} = useHttpFormTable({
    request: httpFn,
    form: props.form,   // 必须传入form对象
    handleParams: function (formParams, {pageNum, pageSize}) {
    // 在请求前处理参数
      return {
        dto: {},
        pageNum: pageNum,
        pageSize: pageSize
      }
    }
  })
```

render:
```jsx
<Table rowKey={'$$index'} columns={[]} {...tableProps}/>
```

## useSafeState
使用方法和React.useState相同， 增加保护机制， 如果组件已卸载（unmount），则不再setState