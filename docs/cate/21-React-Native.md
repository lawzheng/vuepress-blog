# React Native

## 环境准备
安装android studio
java jdk

## 命令
打开虚拟机
emulator -avd Pixel_9_Pro_XL -gpu off

跑不起来，npm重装node_modules
```
cd android
./gradlew clean
```

```
cd ..
npm start --reset-cache
npm run android
```
每次还必须这样，不然跑不起来


ctrl + m 打开调试菜单
