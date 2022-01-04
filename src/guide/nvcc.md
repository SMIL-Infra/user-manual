# 编译CUDA代码

在安装一些依赖，或者编译其他CUDA代码时，需要使用NVIDIA发布的编译器nvcc，但该软件不太容易安装。因此我们提供了全局安装，方便大家使用。

在使用时，在安装其他软件或编译前，先执行以下以下命令以设置环境变量（[参考NVIDIA文档](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#environment-setup)）：
```bash
# 在下列几行中选择一个版本
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-9.0
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-9.2
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-10.0
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-10.1
export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-10.2
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-11.0
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-11.1

export PATH=${CUDA_HOME}/bin${PATH:+:${PATH}}
```

::: tip
实验室的服务器上默认的gcc版本是9，而CUDA 11之前的版本并不支持这么高的gcc的版本，会导致编译错误：
```:no-line-numbers
unsupported GNU version! gcc versions later than 7 are not supported!
```
这时可以通过以下环境变量更改默认的gcc版本：
```bash
export CC=gcc-7 CXX=g++-7
```
然后删除各种编译缓存并重试。若还是不行，则通过以下方式更改PATH中的gcc
```bash
ln -s /usr/bin/gcc-7 ~/.local/bin/gcc # 若~/.local/bin不存在，则先运行mkdir -p ~/.local/bin，然后重新登录
ln -s /usr/bin/g++-7 ~/.local/bin/g++
```
然后运行`gcc -v`命令确认现在默认的gcc版本是7，再重试安装过程。

完成后，若要恢复默认使用新版gcc，则需手动删除上面创建的`~/.local/bin/`中的两个文件
:::

::: warning 注意
在选择版本时，请保持CUDA_HOME引用的版本和其他库使用的版本一致，例如pytorch安装时选择的版本。
:::

::: tip
编译好的软件在运行时也需要链接一些动态库。如果你使用pip或conda安装pytorch的话，这些都应该已经自动安装了。但如果出现找不到cuda相关动态链接库的错误，可以尝试从全局安装的目录中加载。添加以下环境变量：
```bash
export LD_LIBRARY_PATH=${CUDA_HOME}/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```
:::

::: tip
实验室不同机器上有新旧不同的多种GPU，而pytorch默认只会为当前系统中的GPU编译。所以在较新的机器上安装的环境在较老的服务器上可能出现无法运行，并有以下报错：
```:no-line-numbers
no kernel image is available for execution on the device
```
在较老的服务器上编译的程序在新服务器上也可能无法发挥出最佳性能。

这时可以参考[pytorch文档](https://pytorch.org/docs/stable/cpp_extension.html#torch.utils.cpp_extension.CUDAExtension)，在编译安装前手动指定需要支持的计算兼容性版本：
```bash
export TORCH_CUDA_ARCH_LIST="6.1 8.6"
```
其中的版本号可参考[NVIDIA官网](https://developer.nvidia.com/cuda-gpus#compute)的表。这里列出的是实验室所用的TITAN X/Xp和RTX 3090，可在实验室所有服务器上运行。
:::

## /mnt/cephfs/smil/cuda中的软件的安装方法

供大家在排查问题时参考

### cuda-9.0

```bash
wget https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda_9.0.176_384.81_linux-run
wget https://developer.nvidia.com/compute/cuda/9.0/Prod/patches/4/cuda_9.0.176.1_linux-run
wget https://developer.nvidia.com/compute/cuda/9.0/Prod/patches/4/cuda_9.0.176.2_linux-run
wget https://developer.nvidia.com/compute/cuda/9.0/Prod/patches/4/cuda_9.0.176.3_linux-run
wget https://developer.nvidia.com/compute/cuda/9.0/Prod/patches/4/cuda_9.0.176.4_linux-run
chmod +x cuda_*run
./cuda_9.0.176.1_linux-run --silent --toolkit --toolkitpath=/mnt/cephfs/smil/cuda/cuda-9.0/ --override
./cuda_9.0.176.1_linux-run --silent --installdir=/mnt/cephfs/smil/cuda/cuda-9.0/ --accept-eula
./cuda_9.0.176.2_linux-run --silent --installdir=/mnt/cephfs/smil/cuda/cuda-9.0/ --accept-eula
./cuda_9.0.176.3_linux-run --silent --installdir=/mnt/cephfs/smil/cuda/cuda-9.0/ --accept-eula
./cuda_9.0.176.4_linux-run --silent --installdir=/mnt/cephfs/smil/cuda/cuda-9.0/ --accept-eula
```

### cuda-10.0

```bash
wget https://developer.nvidia.com/compute/cuda/10.0/Prod/local_installers/cuda_10.0.130_410.48_linux
wget http://developer.download.nvidia.com/compute/cuda/10.0/Prod/patches/1/cuda_10.0.130.1_linux.run
chmod +x cuda_10.0*
./cuda_10.0.130_410.48_linux --silent --toolkit --toolkitpath=/mnt/cephfs/smil/cuda/cuda-10.0/ --override
./cuda_10.0.130.1_linux.run --silent --installdir=/mnt/cephfs/smil/cuda/cuda-10.0/ --accept-eula
```

### cuda-10.1

```bash
wget https://developer.download.nvidia.com/compute/cuda/10.1/Prod/local_installers/cuda_10.1.243_418.87.00_linux.run
chmod +x cuda_*.run
./cuda_10.1.243_418.87.00_linux.run --silent --toolkit --installpath=/mnt/cephfs/smil/cuda/cuda-10.1/ --override
```

### cuda-10.2

```bash
wget https://developer.download.nvidia.com/compute/cuda/10.2/Prod/local_installers/cuda_10.2.89_440.33.01_linux.run
wget https://developer.download.nvidia.com/compute/cuda/10.2/Prod/patches/1/cuda_10.2.1_linux.run
wget https://developer.download.nvidia.com/compute/cuda/10.2/Prod/patches/2/cuda_10.2.2_linux.run
chmod +x cuda_*.run
./cuda_10.2.89_440.33.01_linux.run --silent --toolkit --installpath=/mnt/cephfs/smil/cuda/cuda-10.2/
./cuda_10.2.1_linux.run --silent --toolkit --installpath=/mnt/cephfs/smil/cuda/cuda-10.2/
./cuda_10.2.2_linux.run --silent --toolkit --installpath=/mnt/cephfs/smil/cuda/cuda-10.2/
```

### cuda-11.0

```bash
wget https://developer.download.nvidia.com/compute/cuda/11.0.3/local_installers/cuda_11.0.3_450.51.06_linux.run
chmod +x cuda_*.run
./cuda_11.0.3_450.51.06_linux.run --silent --toolkit --installpath=/mnt/cephfs/smil/cuda/cuda-11.0/
```
