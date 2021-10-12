# 编译CUDA代码

在安装一些依赖，或者编译其他CUDA代码时，需要使用NVIDIA发布的编译器nvcc，但该软件不太容易安装。因此我们提供了全局安装，方便大家使用。

在使用时，在安装其他软件或编译前，先执行以下以下命令以设置环境变量（[参考NVIDIA文档](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#environment-setup)）：
```bash
# 在下列几行中选择一个版本
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-9.0
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-10.0
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-10.1
export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-10.2
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-11.0
# export CUDA_HOME=/mnt/cephfs/smil/cuda/cuda-11.1

export PATH=${CUDA_HOME}/bin${PATH:+:${PATH}}
```

::: warning 注意
在选择版本时，请保持CUDA_HOME引用的版本和其他库使用的版本一致，例如pytorch安装时选择的版本。
:::

::: tip
编译好的软件在运行时也需要链接一些动态库。如果你使用pip或conda安装pytorch的话，这些都应该已经自动安装了。但如果出现找不到cuda相关动态链接库的错误，可以尝试从全局安装的目录中加载。添加以下环境变量：
```bash
export LD_LIBRARY_PATH=${CUDA_HOME}/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```
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
