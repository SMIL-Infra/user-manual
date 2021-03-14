# 清理CephFS存储空间

当集群中有任意一块硬盘的使用率达到85%时，集群会进入NEARFULL状态。在该状态下，CephFS上的写入操作将不会使用buffer，导致写入性能严重下降，以及集群负载的上升。而当达到95%时集群将进入FULL状态，不再接受写入请求。

[当前各硬盘使用率](https://prometheus.scut-smil.cn/new/graph?g0.expr=ceph_osd_stat_bytes_used%2Fceph_osd_stat_bytes)

<max-ceph-osd-usage/>

## 查看各目录空间大小统计

推荐的查看统计信息的方式如下：
* 文件夹中文件总大小：`getfattr -n ceph.dir.rbytes /PATH/TO/DIR-IN-CEPHFS`
* 文件夹中文件总文件数量：`getfattr -n ceph.dir.rfiles /PATH/TO/DIR-IN-CEPHFS`

这些命令能在O(1)时间复杂度内返回结果。

由于CephFS的分布式缓存的特性，请尽量避免在文件数量较多（>10万）的文件夹中使用`du`/`ncdu`等需要遍历所有文件的命令，否则会较大影响到所有服务器上的性能。
