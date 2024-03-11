#### 配置文件相关
- 不同配置文件生效的顺序: .eslintrc.js -> .eslintrc.cjs -> .eslintrc.yaml -> .eslintrc.yml -> .eslintrc.json -> package.json
- .eslintignore文件可以忽略对具体文件的校验, 类似于.gitigonre

#### 配置说明
- 如果为值，在该值为这条规则的错误级别，其他选项为默认
- 如果为数组，数组中各项都有特定含义：
  - 数组第一项为该规则的 错误级别(level)
    - "off" 或 0 - 关闭规则;"warn" 或 1 - 将规则视为一个警告;"error" 或 2 - 将规则视为一个错误
  - 数组的其他项为该规则 配置选项(options)
