## 项目中CSS全局污染的问题

> 在使用 create-react-app 自动创建的该项目中，默认是开启css module。
>
> 当创建的样式文件直接是test.css,或者其他test.less、test.sass 时是不开启module模式。
>
> 当文件名类似test.module.css、test.module.less、test.module.sass时会自动开启module模式，名称格式默认为 `[name]__[local]__[hash:base64:5]`

注意className 中如果添加多个样式类，写法要注意，或者使用 classnames 库

## 数组如何每三个一组渲染出来（此项目中书架里面的书籍每三个一组）

## a 标签的target 属性

