# 下载镜像

## PyPI

PyPI是Python包管理器`pip`的默认源。本镜像是[清华源](https://pypi.tuna.tsinghua.edu.cn/)的缓存反向代理。

### 临时使用

```bash
pip install -i https://pypi.scut-smil.cn/simple some-package
```

### 设为默认

```bash
pip config set global.index-url https://pypi.scut-smil.cn/simple
```

## Anaconda

Anaconda是一个用于科学计算的 Python 发行版，支持Linux, Mac, Windows，包含了众多流行的科学计算、数据分析的 Python包。本镜像是[清华源](https://mirrors.tuna.tsinghua.edu.cn/anaconda)的缓存反向代理。

使用方法可参考[清华源的帮助](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)。创建`~/.condarc`文件，并写入：
```yaml
channels:
  - defaults
show_channel_urls: true
channel_alias: https://mirrors.scut-smil.cn/anaconda
default_channels:
  - https://mirrors.scut-smil.cn/anaconda/pkgs/main
  - https://mirrors.scut-smil.cn/anaconda/pkgs/free
  - https://mirrors.scut-smil.cn/anaconda/pkgs/r
  - https://mirrors.scut-smil.cn/anaconda/pkgs/pro
  - https://mirrors.scut-smil.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.scut-smil.cn/anaconda/cloud
  msys2: https://mirrors.scut-smil.cn/anaconda/cloud
  bioconda: https://mirrors.scut-smil.cn/anaconda/cloud
  menpo: https://mirrors.scut-smil.cn/anaconda/cloud
  pytorch: https://mirrors.scut-smil.cn/anaconda/cloud
  simpleitk: https://mirrors.scut-smil.cn/anaconda/cloud
```

## NVIDIA

包含NVIDIA发行的pip包，如[DALI](https://developer.nvidia.com/DALI)。本镜像是 https://developer.download.nvidia.cn/compute/redist 的缓存反向代理。

使用时将安装网址中的`https://developer.download.nvidia.com/compute/redist`替换为`https://mirrors.scut-smil.cn/nvidia/compute/redist`。例如，参考[DALI的文档](https://docs.nvidia.com/deeplearning/dali/user-guide/docs/installation.html)，安装的命令为：
```bash
pip install --extra-index-url https://mirrors.scut-smil.cn/nvidia/compute/redist nvidia-dali-cuda110
```

## APT镜像

以Ubuntu 20.04 (focal)为例

### Ubuntu

```
deb https://mirrors.scut-smil.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.scut-smil.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.scut-smil.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.scut-smil.cn/ubuntu/ focal-security main restricted universe multiverse
```
本镜像反向代理至清华源。

### ceph

```
deb https://mirrors.scut-smil.cn/ceph/debian-pacific/ focal main
```

### docker-ce

```
deb [arch=amd64] https://mirrors.scut-smil.cn/docker-ce/linux/ubuntu focal stable
```
