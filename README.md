## music

基于React Natve开发的音乐App


### 遇到的一些问题

本来想弄个读取本地mp3文件,并且返回相关路径和主题图的,但是这个没写好,却把原来的搞坏了,原来的release版本编译正常通过,现在release版本编译报错"__fbBatchedBridge is undefined",查了半天google和issue,最后在这个[issue](https://github.com/facebook/react-native/issues/5820)中找到了解决办法。

### todo

1. 目前音乐列表是写死的,还没找到一个合适的api地址
2. 未来考虑音乐支持本地读取

