# 使用域名系统

域名系统历史悠久，源远流长，自1985年以来，域名系统一直是Internet功能的重要组成部分。至今人们已经发明了非常多利用域名的方法。这里列举一些最常用的，便于大家快速完成工作。

在以下例子中，单标签的短域名仅可在服务器上，或完成了[配置](/guide/client-config.md#dns搜索域)的客户端上使用。否则，请给域名加上`.scut-smil.cn`的后缀。

## 使用域名访问服务器

在连接服务器，传输文件等操作的时候，可以直接使用域名，例如：
```bash
$ ssh gpu024
Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 5.4.0-52-generic x86_64)
...

$ scp gpu024:somefile.txt ./
somefile.txt                          100%   10     9.2KB/s   00:00
```

## 查看本机的完整域名

完整域名指完全限定域名（FQDN, Fully Qualified Domain Name）。通常在shell的提示符中会显示本机的主机名，该名称也可做为单标签域名使用。但若要在没有手动配置的客户端上访问服务器，则需使用完整域名。
```bash
$ hostname -f
gpu024.scut-smil.cn
```

## 手动解析IP地址

虽然域名很方便，但有时还是会用到IP地址，此时可以使用`host`命令，例如：
```bash
$ host gpu024
gpu024.scut-smil.cn has address 222.201.187.170
gpu024.scut-smil.cn has IPv6 address 2001:250:3000:2b70:a242:3fff:fe3a:c864
```

## 反向域名解析

有时需要在已知IP地址的情况下，了解它是属于哪台主机，也可用`host`命令，例如：
```bash
$ host 222.201.187.170
170.187.201.222.in-addr.arpa domain name pointer gpu024.scut-smil.cn.
```

此功能只能在服务器上，或在配置了使用SMIL的DNS服务器的客户端上才能使用。
