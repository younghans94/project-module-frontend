#### 概念/名词解释
- 输入输出：
  - entry：用于定义项目入口文件，Webpack 会从这些入口文件开始按图索骥找出所有项目文件； 
  - context：项目执行上下文路径； 
  - output：配置产物输出路径、名称等；
- 模块处理： 
  - resolve：用于配置模块路径解析规则，可用于帮助 Webpack 更精确、高效地找到指定模块 
  - module：用于配置模块加载规则，例如针对什么类型的资源需要使用哪些 Loader 进行处理
  - externals：用于声明外部资源，Webpack 会直接忽略这部分资源，跳过这些资源的解析、打包操作
- 后处理： 
  - optimization：用于控制如何优化产物包体积，内置 Dead Code Elimination、Scope Hoisting、代码混淆、代码压缩等功能 
  - target：用于配置编译产物的目标运行环境，支持 web、node、electron 等值，不同值最终产物会有所差异 
  - mode：编译模式短语，支持 development、production 等值，可以理解为一种声明环境的短语  
    

- 开发效率类： 
  - watch：用于配置持续监听文件变化，持续构建 
  - devtool：用于配置产物 Sourcemap 生成规则
  - devServer：用于配置与 HMR 强相关的开发服务器功能 
- 性能优化类： 
  - cache：Webpack 5 之后，该项用于控制如何缓存编译过程信息与编译结果 
  - performance：用于配置当产物大小超过阈值时，如何通知开发者 
- 日志类： 
  - stats：用于精确地控制编译过程的日志内容，在做比较细致的性能调试时非常有用
  - infrastructureLogging：用于控制日志输出方式，例如可以通过该配置将日志输出到磁盘文件

