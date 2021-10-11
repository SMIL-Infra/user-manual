# 环境安装建议

Python程序启动时通常需要读取大量文件，由于分布式存储延迟较高，启动时间可能很长。为此，用户可以将相关环境安装在SSD上（`/mnt/cephfs/mixed/home/<用户名>`目录），以加速程序启动。

## Conda

conda通常占用空间较大，为节省SSD空间，推荐将conda本身安装至HDD中（`/mnt/cephfs/home/<用户名>`目录），而仅将运行环境创建在mixed目录。具体方法为：
```bash
conda create --prefix /mnt/cephfs/mixed/home/<用户名>/envs/<环境名> --copy ...
```
请注意在创建或安装新的软件包时均需要指定`--copy`参数，否则conda将会只创建链接，而不会把文件真正复制到SSD中。

为可以使用`conda activate <环境名>`，可以修改[condarc](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/use-condarc.html)文件添加环境目录，例如：
```yaml
envs_dirs:
  - /mnt/cephfs/home/<用户名>/miniconda3/envs
  - /mnt/cephfs/mixed/home/<用户名>/envs
```
