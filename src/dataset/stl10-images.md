---
path: stl10-images
quota:
  bytes: 4294967296
  files: 113010
owner: huangdeng
---

# STL-10 Images

<dataset-info/>

[cs.stanford.edu/~acoates/stl10/](https://cs.stanford.edu/~acoates/stl10/)

The STL-10 dataset is an image recognition dataset for developing unsupervised feature learning, deep learning, self-taught learning algorithms. It is inspired by the CIFAR-10 dataset but with some modifications. In particular, each class has fewer labeled training examples than in CIFAR-10, but a very large set of unlabeled examples is provided to learn image models prior to supervised training. The primary challenge is to make use of the unlabeled data (which comes from a similar but different distribution from the labeled data) to build a useful prior. We also expect that the higher resolution of this dataset (96x96) will make it a challenging benchmark for developing more scalable unsupervised learning methods.

该数据集包含10个分类，每个分类包含500张训练图片，800张测试图片，以及100000张无标签的图片。每张图片分辨率为96x96。

原数据集中用单个二进制文件存储多张图片。这个文件夹对每张图片分别保存为png文件，方便使用DALI等工具进行加载。
