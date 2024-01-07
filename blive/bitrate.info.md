GitHub: https://github.com/PaperStrike/scripts/blob/main/blive/bitrate.user.js

计算并展示哔哩哔哩直播码率信息。仅考虑支持最新的现代浏览器。

**M3U8 直播流**：每获取到一个 M3U8 片段，预估码率为：（片段大小 / 片段时长）- 服务端报告的音频码率。

**FLV 直播流**：累计 FLV 视频 TAG 大小，每当最新视频 TAG 的时间戳 - 上次计算码率的时间戳 >= 5 秒，预估码率为：本次累计大小 / 时间差值。

这两处计算都是针对最新缓存的片段进行的，所以反应的往往不是当前播放的片段的码率。另外，这两种算法都有一定的误差，但是误差应当不大，在展示时经过舍入处理后应当可以忽略不计。如果你使用时注意到了明显的计算错误，可能是哪处有 BUG，欢迎反馈。

服务端报告的视频码率经常为 0，这不是本脚本的问题。