# Dockerfile 文件内容制作指南
文件下载
----

[docker-awdp.zip](../%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD/docker-awdp.zip)

和 PWN 题的不同
----------

把 SSH 打开，账号 **ctf（运维账户，给到程序文件的修改权限）**，密码 1qazcde3!@#。原因：**flag文件需要保留，接收 DASFLAG 作为flag，因为这个靶机既要作为攻击靶机（SSH信息不展示），也要作为防守靶机（SSH信息要展示）。**

文件包结构
-----

文件包内应确保具有如下的文件。

![](Dockerfile%20%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9%E5%88%B6%E4%BD%9C%E6%8C%87%E5%8D%97_image.png)

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
      - "9922:22"
```

**此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！**

**此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！**

**此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！**

**ports 里映射的镜像端口请务必保证正确！**

pwn1
----

服务构建文件，下有 Dockerfile 和构建所需的文件等。

Dockerfile 内容参考样例如下：

1.样例1 

```
FROM ubuntu:22.04

# 使用 Tsinghua 镜像源并更新系统
RUN sed -i "s|http://archive.ubuntu.com|http://mirrors.tuna.tsinghua.edu.cn|g" /etc/apt/sources.list && \
    apt-get update && apt-get -y dist-upgrade && \
    apt-get install -y lib32z1 xinetd openssh-server

# 添加 ctf 用户
RUN useradd -m ctf

# 设置 SSH 访问的密码
RUN echo 'ctf:1qazcde3!@#' | chpasswd

# 配置 SSH 目录和权限
RUN mkdir /var/run/sshd && \
    echo 'PasswordAuthentication yes' >> /etc/ssh/sshd_config && \
    echo 'PermitRootLogin no' >> /etc/ssh/sshd_config

# 设置工作目录
WORKDIR /home/ctf

# 复制必要的库文件
RUN cp -R /usr/lib* /home/ctf

# 创建 /dev 目录并设置节点
RUN mkdir /home/ctf/dev && \
    mknod /home/ctf/dev/null c 1 3 && \
    mknod /home/ctf/dev/zero c 1 5 && \
    mknod /home/ctf/dev/random c 1 8 && \
    mknod /home/ctf/dev/urandom c 1 9 && \
    chmod 666 /home/ctf/dev/*

# 创建 /bin 目录并复制必要的二进制文件
RUN mkdir /home/ctf/bin && \
    cp /bin/sh /home/ctf/bin && \
    cp /bin/ls /home/ctf/bin && \
    cp /bin/cat /home/ctf/bin

# 复制配置文件和程序
COPY ./ctf.xinetd /etc/xinetd.d/ctf
COPY ./start.sh /start.sh
COPY ./pwn /home/ctf/pwn

# 设置脚本和目录的权限
RUN chmod +x /start.sh
RUN chown -R root:ctf /home/ctf && chmod -R 770 /home/ctf

# 设置环境变量
ENV DASFLAG DASCTF{test_flag}

# 启动脚本
CMD service ssh start && /start.sh

# 暴露端口
EXPOSE 9999
EXPOSE 22
```

需要特别注意几点：

1\. FROM 的基础镜像只允许是：

1.   Dockerhub上不带 / 的官方镜像
2.  dasctfbase 组织下的镜像，比如 `dasctfbase/web_php73_apache_mysql` 等
3.  love-image.dasctf.com 里的镜像
    

**其他镜像一律不允许使用。**

**其他镜像一律不允许使用。**

**其他镜像一律不允许使用。**

2\. 请设置一个 DASFLAG 环境变量来作为预置的 flag 以供测试。

`ENV DASFLAG DASCTF{test12345}`

3\. 请正确声明容器对外暴露的端口。

`EXPOSE 80`

4\. CMD 及其附属的启动脚本**禁止使用**输出文字等方式来保持运行。

比如

```

while true; do
  echo '1'
done
```

禁止使用这种输出日志的方式来保持运行。

禁止使用这种输出日志的方式来保持运行。

禁止使用这种输出日志的方式来保持运行。