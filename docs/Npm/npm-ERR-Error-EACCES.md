# 【Npm报错】ERR! Error: EACCES

这个错误表示权限不足，无法**安装包**。这通常是由于缺少适当的权限而引起的。

**解决方案：** 以**管理员权限**重新运行npm install。在Unix系统中，可以使用sudo npm install命令。

```bash
sudo npm install
```

