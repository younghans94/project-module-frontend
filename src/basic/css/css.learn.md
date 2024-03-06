### css样式的基础
#### 样式层叠冲突的处理规则
  - !import
  - 样式表的来源
    - 作者样式表(即开发者设计的样式)
    - 用户代理样式表(浏览器的默认的样式)
  - 选择器的优先级
    - 行内样式(直接写在/作用在标签的style)
    - ID > ClassName > Label
  - 源码的顺序
    - 在来源和优先级相同的前提下, 后来者居上
备注：
  - 在选择器中不要使用id;
  - 不要使用!import
  - 发布的库尽量不要使用行内样式
#### 继承: 当一个元素没有层叠值的时候, 则可能继承某个祖先元素的值
  - 条件: 并不是所有的属性都能被继承, 主要是和文本相关的那些: 比如color、font、font-family、
    font-size、font-weight、font-variant、font-style、line-height、letter-spacing、 
    text-align、text-indent、text-transform、white-space以及word-spacing; 列表属性:
    list-style、list-style-type、list-style-position以及list-style-image。表格的边
    框属性border-collapse和border-spacing也能被继承
#### 特殊值
  - inherit: 继承值, 即元素继承其父元素的属性值;
  - initial: 初始值, 即该属性的默认值（不进行任何设置） 
#### 简写属性: 简写属性可能会导致未写明属性的值在设置过其他值的前提下被默认值覆盖
  - 上、右、下、左; 上、左右、下; 上下、左右
  - 笛卡尔网络的测量值则是先水平后垂直
#### 相对单位: 
- 常见属性单位
  - em: 相对直接父元素的尺寸单位
  - rem: 相对根元素的尺寸单位
- 构造响应式面板
  - 使用@media规则, 如  
    `` @mdeia (min-width: 300px) { .root { font-size: 0.75em } }``  
    `` @mdeia (min-width: 800px) { .root { font-size: 0.875em } }``
  - 浏览器试口
    - vh: 视口宽度的1/100
    - vw: 视口高度的1/100
    - vmin: 取视口宽、高 1/100 中较小的 
    - vmax: 取视口宽、高 1/100 中较大的
  - 可以使用vw定义字体的相对大小
  - 无单位意义的数值使用：如行高
  - 自定义属性: 
    - 定义需要在作用域中且以``--``开头, 如``:root { --main-font: 12px }``
    - 使用的地方需要以 ``var()``包裹且其第二个参数未默认值, 如``var(--main-font, 10px)``
    - js改变值: 找到定义的dom层级获取element对象, 以``element.style.setProperty("--main-font", "14px")``处理

