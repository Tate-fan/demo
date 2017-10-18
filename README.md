NODE DEMO
=========

[![Greenkeeper badge](https://badges.greenkeeper.io/cheerfyt/demo.svg)](https://greenkeeper.io/)

- 项目结构
- 开发流程
- 代码风格
- 测试
- 开发文档, 接口文档
- 部署

**Node项目， 请充分利用`package.json`和`.npmrc`文件;**

- `npm start`
- `npm test`
- `npm config set`
- ...

### 项目结构

- 此项目的文件结构可以作为参考
- __CHANGELOG__ 文件非常有必要提供
- 使用新版的NPM安装并锁定依赖
- 提供开发以及部署的所需要的config文件非常有必要提供
- ignore 掉本地文件(.env, dist, ......)

### 开发流程

- 工具链 __git flow__, __source tree__ 等
  所有分支都是以 develop 分支为base分支, 然后进行feature 开发， bug fix等， 然后合并到 release 分支
- __git lab__ 代码review;
- 避免使用`git merge`, 使用`git rebase`代替;
- `git push`前请执行 `npm test`(通过`git hook`强制执行)

### 代码风格

- 在代码开发的过程中通过编辑器来统一编码风格(editorconfig), 开发者的`.editorconfig`
  配置文件需要统一，且不能私自更改;

- 编码风格也可通过`grunt jsbeautify` 进行统一;

- `eslint` 或是 `jslint` 或是 `standardjs(推荐)`随便选一个;

- 优先使用环境变量`process.env`, 其次才是配置文件;

- `Nodejs` 尽量向`es6, 7`靠拢, 使用 LTS的 latest version node.js;

- `promise` 使用原生；可以配合 `async` 解决 异步的 waterfall 问题;

- 单分支的`if ... else ...` 尽量避免出现, 使用 `?:` 代码, 提高代码的可读性;

- 返回给前端的`Error`, 在一个地方统一处理`return next(err)`, `Error Code` 和
  `Error Message` 需要可配置且可查询, 最好以JSON API的方式返回给前端, 方便测试
  和前端进行查询;

- 更多可参考: [Google javascript Style Guide](https://https://google.github.io/styleguide/jsguide.html)

### 测试

- `util test` 尽可能多的覆盖, 使用`mocha`或是`ava` 进行测试;
- `Endpoint test` 请使用 `supertest`, 这样就要求 `app`是可`export`的;
- `git push`请必须进行 `test`, 避免修改或是被修改别人的代码， 对以前的代码进行破坏;
- 必要时可以收集测试报告;


### 接口文档

- 推荐使用 `raml` 格式, 转化为`html`后, 通过静态文件服务器可以随时查看;


### 部署

- 最大化的利用自动化工具`jenkins`; 可以使用`git lab`提供的`web hook`功能实现自动
  触发构建, 自动`Email` 发送;

- 使用`make`工具, 自动构建`docker image`;
