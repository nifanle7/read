# read


平时主要使用微信读书，看书过程中会进行划线和评论。完成后，习惯性导出笔记整理，不定期重看。否则，过不了多久，看书过程中产生的灵感、看到的金句在脑海里都会丢失，有时候甚至为了找一本书里写过的一句话，费老鼻子劲，有点像找房间里的东西，你知道它在，但就是找不到，难受。

**笔记不能只是静态归档，要做动态闪回**，才能发挥它的最大价值。

我的方案是，通过 [Weread](https://community.obsidian.md/plugins/obsidian-weread-plugin) 插件同步至 Obsidian 的文件夹，整理笔记格式，补充修改 metadata 标签、评分、评价等信息，对于要回看的笔记段落会加上 Quote 标签，并移动至在归档文件夹，避免 Weread 插件下次同步时，把整理完成的笔记覆盖了。**对于特别喜欢的语句，还会抄录到手帐中。**

Weread 插件是一个微信读书笔记的同步插件，由 [@hank_zhao](https://x.com/hank_zhao) 开发。按插件说明填上 API，就可以同步了。同步有两种模式，一种是白名单模式，想要同步哪本书就同步哪本书，一种是黑名单模式，想不同步哪本书就不同步哪本书，剩余的全部同步。我选择的是黑名单模式，每次归档完一个读书笔记，就加入黑名单不再同步。插件支持定义同步笔记的主题模板，内置了一些模板，但是我有个性化的需求，所以自定义了 [模板](https://github.com/nifanle7/read/blob/main/note-template.txt)。对这个模板作三点说明：

- 同一章节划线和评论显示在一起，而不是先显示完所有划线，再显示所有评论。
- 摘要条目用列表方式展示，不使用引用格式，评论用引用格式做特别标识。这么做的原因是读书笔记，往往是摘要为主，评论为辅的，所以在 Markdown 文件里面，摘要不用引用格式，避免通篇全是引用格式，阅读体验比并不友好。
- 配套 [Columns](https://community.obsidian.md/plugins/obsidian-columns) 插件，实现图书信息的双栏显示。

![imgae20260916110930417.jpg](https://i.see.you/2026/09/16/q7gZ/imgae20260916110930417.jpg)

配合 [Homepage](https://community.obsidian.md/plugins/homepage)、[Dateview](https://community.obsidian.md/plugins/dataview) 插件，使用这个 [dataviewjs 脚本](https://github.com/nifanle7/read/blob/main/dataview.js)，实现 Obsidian 的首页随机笔记展示 3 条带 `Quote` 标签的笔记条目，用于回看。详细教程见之前的 [博文](https://www.uncoverman.com/random-notes-in-obsidian.html)。

![imgae20260916110951422.jpg](https://i.see.you/2026/09/16/qvG6/imgae20260916110951422.jpg)

此外，通过 Obsidian 的数据库功能，利用笔记属性功能，可以实现每年的读书记录画廊功能。

![imgae20260916152538064.png](https://i.see.you/2026/09/16/ukZ5/imgae20260916152538064.png)


