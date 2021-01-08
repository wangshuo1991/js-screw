## js-screw
---
- 定位
提供项目中常用的工具函数，比如时间戳多种格式的转换，对于缓存的存取，数据类型判断等等；如名字screw一样，做一个项目开发过程中的小螺丝钉。

- use

**1、安装（insatll）**
```
  npm i -S js-screw
```

**2、入口文件引入（entry）**
```
  // main.js
  const $tool = require('js-screw');
  
  // For example, VUE project
  Vue.prototype.$tool = $tool;
```

**3、组件中使用（template use）**
```
  ...

  // For example, VUE TEMPLAte project 
  computed: {
    // 转换时间 使用converTime方法
    return this.$tool.convertTime(1610068902452, 'ymdhm');
    /*
      * 默认 'y-m-d' -> 2021-10-20
      * 'y-m-d-h-m' -> 2021-10-20 10:28
      * 'm-d' -> 10-20
      * 'ymdhm' -> 2021年10月20日 10:28
      * 'md' -> 10月20日
    */
    // results(最终结果就是) -> 2021年01月08日 09:21
  }

  ...
```

- Github
目前暂时提供了时间转换，缓存存取，字符校验等方法，后续会不断更新，具体方法和使用可直接查看源码。

github地址:https://github.com/wangshuo1991/js-screw

*I hope that it is helpful for front end developer! Enjoy !*

