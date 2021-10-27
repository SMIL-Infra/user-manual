# 开始使用

首先向Infra团队成员申请账号

我们会为你提供初始密码，请使用该密码登录任何一台服务器，并按提示修改密码。

在Windows10系统上，右键单击左下角的Windows徽标，选择“Windows PowerShell”，在打开的窗口中键入：
```powershell
ssh <你的用户名>@gpu024.scut-smil.cn
```

::: tip
请注意，在首次ssh登录和修改密码的流程中总共需要输入两次初始密码，请仔细阅读屏幕上的提示内容。
:::

::: tip
你也可以登录[FreeIPA网站](https://ipa0.scut-smil.cn/)完成修改密码。打开时若弹出登录对话框请点击“取消”。更多账户操作可参考[自助服务](../auth/self-service.md)
:::

## 下一步

查看[客户端配置](client-config.md)以了解如何让你访问服务器更加方便，或者使用其他的客户端。

查看[环境搭建](deps-install.md)了解如何在服务器上安装实验常用的软件环境。
