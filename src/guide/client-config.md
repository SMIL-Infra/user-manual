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

配置了系统DNS搜索域后，你将能在几乎任何位置使用单标签域名来访问各种服务

TODO

### 限制

由于不能颁发单标签域名的受信任的数字整数。使用https协议的服务依然需要使用完整域名访问。
