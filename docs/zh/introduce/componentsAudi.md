# 公共组件-奥迪
大多数公共组件都在 @components 下引用。

## Form
```@components/Form``` 封装了 ```@antd/Form```， 在原基础上，增加了几项功能：

1. Form.create 新增```toggle```参数，并且被封装组件将会得到 ```props.formExpand``` ，可以对该Form组件封装的表单进行显示和隐藏。
```jsx
Form.create({name: 'page_name', toggle: 6})(PageComponent);
```
组件内使用formExpand
```jsx
const {isExpand, toggle} = this.props.formExpand;

isExpand // 表示当前表单是否展开
toggle() // 切换当前表单展开状态
```

2. Form.Item 增强
- 必须传入props:```form```对象
- 可以使用props: ```bind``` 绑定同级FormItem组件的联动效果

### Form.ToggleButton
展开隐藏按钮
```jsx
<Form.ToggleButton isExpand={isExpand} onClick={()=>{toggle()}} />
```
### Form._createFormItem
可以将一个React组件封装成FormItem组件， 以```id```作为唯一标识。
```jsx
const FormItemSales = Form._createFormItem({
  label: "区域",
  getOptions: (props) => ({
    initialValue: undefined
  }),
  onChange: (e, {form, isBind, bindName, id}) => {
    
  }
})(Sales)
```
然后使用该组件
```jsx
<FormItemSales form={form} id={'searchDealer.sales'}/>
```

### FormQueryButtonsCol
集成了查询条件内的 "查询"、"重置"、"展开" 三个功能的组件
```jsx
<FormQueryButtonsCol 
    colProps={colProps}               // 传入col的span值
    isToggle={true}                   // 是否开启展开隐藏功能
    formExpand={props.formExpand}     // 当前是否展开
    form={form}
    loading={loading}                 // 查询按钮的loading
    onSearch={() => onSearch()}       // 点击查询按钮执行
/>
```

## Text
展示纯文本
```jsx
<Text value={"这是一段文本"}/>
```

## TextLink
拥有链接样式的按钮
```jsx
<TextLink>链接按钮</TextLink>
```

## ButtonOperate
用于table内的操作按钮
```jsx
<ButtonOperate>操作</ButtonOperate>
```

## Icon
奥迪专用图标, 我将UI给的svg所有图标都整合在了一起。type都在@public/fonts/svgs.js中
```jsx
<Icon type={"system-search"}/>
```