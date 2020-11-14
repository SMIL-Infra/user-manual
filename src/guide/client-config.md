# 客户端配置

## OpenSSH

OpenSSH客户端在每台Windows 10的PC上都已经预装，是入门最快的客户端软件。并且VS Code remote功能也使用OpenSSH客户端的配置。

完成配置后，可用直接使用单标签域名访问服务器，例如：
```powershell
ssh gpu024
```

用你喜欢的编辑器打开文件`%userprofile%\.ssh\config`（Linux用户请使用`~/.ssh/config`），并添加以下内容：

```
CanonicalizeHostname yes
CanonicalDomains scut-smil.cn

Host *.scut-smil.cn
User <你的用户名>
```

若你还使用VS Code remote功能，继续将你常用的主机名添加到这个配置文件中，例如：

```
Host gpu023
Host gpu024
```

### 免密码登录

TODO

## XShell

TODO

## DNS搜索域

配置了系统DNS搜索域后，你将能在几乎任何位置使用单标签域名来访问各种服务。

### Windows

进入设置 -> 网络和Internet -> 更改适配器选项 -> 双击你需要配置的网卡 -> 属性

双击Internet协议版本4（TCP/IPv4）-> 高级 -> DNS

选择“附加这些DNS后缀”，并点击添加，输入scut-smil.cn，并确定。

![Windows DNS搜索域配置截图](./windows_dns_search_domain.png)

验证你的配置，例如在PowerShell中运行：

```powershell
PS > ping gpu024

正在 Ping gpu024.scut-smil.cn [2001:250:3000:2b70:a242:3fff:fe3a:c864] 具有 32 字节的数据:
来自 2001:250:3000:2b70:a242:3fff:fe3a:c864 的回复: 时间<1ms
来自 2001:250:3000:2b70:a242:3fff:fe3a:c864 的回复: 时间<1ms
来自 2001:250:3000:2b70:a242:3fff:fe3a:c864 的回复: 时间<1ms
来自 2001:250:3000:2b70:a242:3fff:fe3a:c864 的回复: 时间<1ms

2001:250:3000:2b70:a242:3fff:fe3a:c864 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 0ms，最长 = 0ms，平均 = 0ms
```

### 限制

由于不能颁发单标签域名的受信任的数字证书。使用https协议的服务依然需要使用完整域名访问。
