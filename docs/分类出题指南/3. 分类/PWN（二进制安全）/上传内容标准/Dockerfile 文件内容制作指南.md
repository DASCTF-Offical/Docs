# Dockerfile 文件内容制作指南
文件下载
----

[docker-pwn.zip](../%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD/docker-pwn.zip)

文件包结构
-----

文件包内应确保具有如下的文件。

![](2_Dockerfile%20%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9%E5%88%B6%E4%BD%9C%E6%8C%87%E5%8D%97_image.png)

1.  docker-compose.yml – Docker-Compose 描述文件
2.  pwn1 – 服务构建文件，下有 Dockerfile 和构建所需的文件等

docker-compose.yml
------------------

Docker-Compose 描述文件, 内容如下：

```
version: "3"
services:
  ctfpwn:
    build: ./pwn1/
    image: pwn1
    ports:
      - "9999:9999"
```

**此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！**

**此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！**

**此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！**

**ports 里映射的镜像端口请务必保证正确！**

pwn1
----

服务构建文件，下有 Dockerfile 和构建所需的文件等。

challenge作为子文件夹里面存放entrypoint.sh脚本、pwn程序和其依赖的动态链接库(ld\*和lib\*)。

entrypoint.sh里使用 ./ 相对路径运行pwn程序。entrypoint.sh文件名不可修改！

entrypoint.sh 样例如下：

```
#!/bin/sh
./pwn
```

需要将pwn程序依赖的ld\*和所有的lib\*放到challenge目录下，无需手动patch。具体是哪些文件可使用ldd命令查看：

![](3_Dockerfile%20%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9%E5%88%B6%E4%BD%9C%E6%8C%87%E5%8D%97_image.png)

Dockerfile 样例如下：

```
FROM ghcr.io/dasctf-offical/docker-template-for-pwn-base:main

COPY ./challenge/ /root/challenge

# EXPOSE 9999
# 基础镜像默认对外暴露9999端口
```

需要特别注意几点：

1\. FROM 的基础镜像只允许是：

1.   Dockerhub上不带 / 的官方镜像
2.  官方组织下的镜像，比如 `ghcr.io/dasctf-offical/`等
    

**其他镜像一律不允许使用。**

**其他镜像一律不允许使用。**

**其他镜像一律不允许使用。**

2\. 如果有CMD 及其附属的启动脚本，**禁止使用**输出文字等方式来保持运行。

比如

```

while true; do
  echo '1'
done
```

禁止使用这种输出日志的方式来保持运行。

禁止使用这种输出日志的方式来保持运行。

禁止使用这种输出日志的方式来保持运行。