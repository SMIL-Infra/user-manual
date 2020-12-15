# 自助服务

在使用FreeIPA后，部分涉及账号的维护操作将有所不同。

下列操作可以在任何已接入的服务器上运行，也可登录[Web界面][ipa-web]完成。操作后将影响到所有已接入的服务器。

## 修改密码

标准的`passwd`命令依然可以使用。也可使用ipa命令：
```bash
ipa passwd
```

## 修改个人信息

例如，修改自己的默认shell，home目录，姓名等
```bash
ipa user-mod <你的用户名> --shell /usr/bin/zsh
ipa user-mod <你的用户名> --homedir /mnt/cephfs/home/<你的用户名>
```
详见`ipa user-mod --help`。修改后，需要几分钟时间才能同步至各台服务器。

## 添加ssh公钥

```bash
ipa user-mod <你的用户名> --sshpubkey="ssh-rsa 12345abcde= bob@DESCTOP-XXXXXX"
```
添加后，该公钥即可在任何已接入的服务器中使用。

上述命令将替换任何已存在的公钥。若要添加多个公钥，可在一个命令中指定多次`--sshpubkey`。可用`ipa user-show --all <你的用户名>`查看已导入的公钥。或使用[Web界面][ipa-web]


[ipa-web]: https://ipa0.scut-smil.cn/
