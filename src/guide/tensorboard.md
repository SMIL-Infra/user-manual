# 使用TensorBoard

由于学校部署了防火墙，现在TensorBoard无法直接通过端口访问。推荐大家使用ssh端口转发访问。

例如，运行tensorBoard后：

```bash
gpu006:~$ tensorboard --logdir exps
Serving TensorBoard on localhost; to expose to the network, use a proxy or pass --bind_all
TensorBoard 2.7.0 at http://localhost:6006/ (Press CTRL+C to quit)
```

若要访问此TensorBoard实例，请在本地设备上执行：

```
ssh -L 7006:localhost:6006 gpu006
```

其中7006是任何本地的空闲端口，6006则需匹配TensorBoard运行时显示的端口。连接成功后即可通过http://localhost:7006 访问了。
