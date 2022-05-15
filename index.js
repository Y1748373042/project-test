// 通过：git status 查看当前文件状态
// 显示的装填：未被追踪的文件：untrack

// 可以使用 clear 清除屏幕信息

// 查看状态精简命令：git status -s
// ?? 这个表示当前文件未被追踪的意思

// 要添加追踪文件：git add 你要追踪的文件
// 其中可以先书写两个字母，然后摁下 tab 键，可以补齐路径
// A 表示当前文件已处于追踪文件了

// M 表示当前文件已经修改了

// git commit -m '描述信息'
// -m 就是表示 message 的意思，命令后面的描述信息，一定要写

// 暂存已修改的文件

/**
 * 复习：
 * 1、git init 初始化本地仓库，会生成 .git 隐藏文件
 * 2、git add 你要追踪的文件
 * 3、git status -s 查看状态
 * 4、git commit -m '描述信息'
 * 5、git add 你要追踪的文件
 * 6、git status -s -> M
 * 
 */

// 添加了个人 token

// 回顾一下：
// git 是干什么呀？
// 用来管理代码的，在公司里面用于团队协作（多人开发）
// svn 14年之前用的很多，后面慢慢的被 git 所替代

// add 命令的作用：
// 1、可以添加新加的文件
// 2、文件做了修改之后，本地提交之前还需要 add 一下
// 3、多个人合并完代码之后，解决冲突之后，提交之前，还需要 add 一下

// 本地可以去生成一个仓库：git init
// 查看当前文件夹里面的文件的状态：git status -s
// 添加文件被git所管理：git add 你要添加的文件的名称
// 添加文件到暂存区：git commit -m '描述信息一定要写'
// 一次性添加多个文件到暂存区：git add .
// 跳过使用暂存区，就是 git add 和 git commit 两个命令的复合写法，git commit -a -m '描述信息'（用的比较多）
// 忽略文件：.gitignore

// 取消暂存文件：git reset HEAD 你要取消的文件（了解一下）
// 移除文件：git rm -f 你要移除的文件（rm -> remove f -> force强制的意思）
// 只移除仓库里面的文件，保留本地的文件：git rm --cached 你要移除的文件

// git init
// git add git commit -> git commit -a -m '描述信息'