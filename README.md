#### 单元测试
1. 安装enzyme
```
yarn add enzyme enzyme-adapter-react-16 -D
```

2. 写测试用例：
```
├── components     
|       ├── MainLayout          
|       |       ├── Header.test.js                         
|       |       └── MainLayout.test.js        
|       └── Users                        
|             └── index.test.js              
```

#### e2e测试
1. 安装puppeteer
```
yarn add puppeteer -D
```
2. 写测试用例
```
├── pages
|      └── users   
|             └── Users.e2e.test.js      
```
运行e2e测试时需要先把项目启动

#### 参考资料：
+ [UI 测试](https://pro.ant.design/docs/ui-test-cn)
+ [前端单元测试探索](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/UnitTest/前端单元测试探索.md)