### 现代布局
#### web布局的发展
1. 无任何布局：最早的web网页是没有任何布局能力的, 甚至没有色块、图像、图形,只有文字[第一个网页](http://info.cern.ch/hypertext/WWW/TheProject.html)
2. 单一像素的GIF技巧：支持`<img>`标签后, 开发这会使用单像素的图片来简单的改变布局`<img src="smiley.gif" hspace="75" >`用以改变水平和垂直的间距
3. 表格布局：`<table>`标签, 并一次为基础产生了布局概念的雏形
4. Css的出现Web布局的概念才算正式产生
5. 响应式布局（RWD）：自适应设备尺寸的布局的方式
6. 内在Web设计（IWD）：以最少的代码来实现复杂的Web设计，且要关注到不是内容以设计为导向, 而是专注于让设计受内容驱动
7. 组件驱动式Web设计（CDWD）：基于组件驱动开发
   - 响应用户的需求
   - 响应容器的需求
   - 响应外形的需求

#### 一些术语
1. 坐标轴：现在常见的是三维布局即X、Y、Z
2. 逻辑坐标轴：
   - 内联轴：书写模式的方向
   - 块轴：盒子自动流的方向
3. 盒子模型：容器和容器空间
   - block：块容器--指单独撑满一行的容器
   - inline：内联容器--不单独占有区域由内部支撑的容器
   - flex/inline-flex：弹性盒子容器
   - grid/inline-grid：网格盒子容器
4. 样式
   - margin: 外边距, 是不属于被设置元素的部分(比如被设置元素的背景色是设置不到margin部分的)
   - padding: 内边距, 属于被设置元素部分(比如被设置元素的背景色是覆盖padding部分的)
   - gap: 间隔, 属于被设置元素部分, 父类元素用来控制内部子元素间隔，是不属于子元素的部分
   - T、R、B、L: 物理方向
   - T、S、B、E：逻辑方向（以start、end替换right、left）[CSS逻辑属性](https://www.w3.org/TR/css-logical-1/#intro)

#### 弹性盒子 -- Flex
1. 主/侧轴：Flexbox 中的主轴由 flex-direction 属性设置，默认情况下，主轴沿行方向（内联轴 Inline Axis）分布，如果该属性为 column ，则主轴沿列方向（块轴 Block Axis）；
2. order属性可以影响flex项目的排列顺序;
3. flex的gap可以看作是row-gap、column-gap两个的复合（区别于margin）
4. flex布局的核心（剩余空间的分配规则）
    - justify-content：沿 Flex 容器的主轴分配 Flex 容器的剩余空间；
    - align-content：沿 Flex 容器的侧轴分配 Flex 容器的剩余空间；
    - place-content：它是 justify-content 和 align-content 的简写属性。
    - align-items: flex元素内部的布局方式
