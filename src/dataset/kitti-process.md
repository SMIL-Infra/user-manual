---
path: kitti-process
quota:
  bytes: 22773224448
  files: 51664
owner: lizhenliang
---

# KITTI raw处理后数据

<dataset-info/>

[原始数据集KITTI raw](http://www.cvlibs.net/datasets/kitti/raw_data.php)

该数据目的是用于点云+RGB语义分割，由于KITTI raw(38个带tracklets的sequences)不包含点云label, 故做如下处理：
- 将点云投影至kitti-raw的左侧RGB图像，获取uv坐标
- 将3D检测框的轨迹数据(tracklets)，转换为点云label数据

数据目录结构
- 2011_09_26_xxxx
  + pointcloud
    * 点云数据 (.npy)
  + image
    * RGB图片 (.png)
  + uv
    * 点云投影后uv坐标 (.npy)
  + label
    * 点云对应label (.npy)
- 2011_09_26_xxxx(...)
