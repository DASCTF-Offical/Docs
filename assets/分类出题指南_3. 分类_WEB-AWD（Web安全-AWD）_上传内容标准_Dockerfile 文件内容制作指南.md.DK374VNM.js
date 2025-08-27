import{_ as a,c as n,ab as p,o as e}from"./chunks/framework.B0GWKKDs.js";const l="/assets/dockerfile_image.DwfYJt5B.png",f=JSON.parse('{"title":"Dockerfile 文件内容制作指南","description":"","frontmatter":{},"headers":[],"relativePath":"分类出题指南/3. 分类/WEB-AWD（Web安全-AWD）/上传内容标准/Dockerfile 文件内容制作指南.md","filePath":"分类出题指南/3. 分类/WEB-AWD（Web安全-AWD）/上传内容标准/Dockerfile 文件内容制作指南.md","lastUpdated":1756262720000}'),i={name:"分类出题指南/3. 分类/WEB-AWD（Web安全-AWD）/上传内容标准/Dockerfile 文件内容制作指南.md"};function c(t,s,o,r,m,d){return e(),n("div",null,s[0]||(s[0]=[p('<h1 id="dockerfile-文件内容制作指南" tabindex="-1">Dockerfile 文件内容制作指南 <a class="header-anchor" href="#dockerfile-文件内容制作指南" aria-label="Permalink to &quot;Dockerfile 文件内容制作指南&quot;">​</a></h1><h2 id="文件下载" tabindex="-1">文件下载 <a class="header-anchor" href="#文件下载" aria-label="Permalink to &quot;文件下载&quot;">​</a></h2><p><a href="../%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD/docker-web(%E5%AE%98%E6%96%B9%E9%95%9C%E5%83%8F%E6%BA%90)-awdp.zip">docker-web(官方镜像源)-awdp.zip</a></p><p><a href="../%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD/docker-web(%E6%9D%A5%E6%BA%90dasctfbase)-awdp.zip">docker-web(来源dasctfbase).zip</a></p><h2 id="和-web-题的不同" tabindex="-1">和 WEB 题的不同 <a class="header-anchor" href="#和-web-题的不同" aria-label="Permalink to &quot;和 WEB 题的不同&quot;">​</a></h2><p>把 SSH 打开，账号 <strong>ctf（运维账户，给到程序文件的修改权限）</strong>，密码 1qazcde3!@#。原因：<strong>flag文件需要保留，接收 DASFLAG 作为flag，因为这个靶机既要作为攻击靶机（SSH信息不展示），也要作为防守靶机（SSH信息要展示）。</strong></p><h2 id="文件包结构" tabindex="-1">文件包结构 <a class="header-anchor" href="#文件包结构" aria-label="Permalink to &quot;文件包结构&quot;">​</a></h2><p>文件包内应确保具有如下的文件。</p><p><img src="'+l+`" alt=""></p><ol><li>docker-compose.yml – Docker-Compose 描述文件</li><li>web1 – 服务构建文件，下有 Dockerfile 和构建所需的文件等</li></ol><h2 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h2><p>Docker-Compose 描述文件, 内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 指定该文件版本</span></span>
<span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span># 把每个子目录视为一个镜像，开始构建</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  web1:</span></span>
<span class="line"><span>    # 此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明。</span></span>
<span class="line"><span>    build: ./web1/</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;18098:80&quot;</span></span>
<span class="line"><span>      - &quot;18022:22&quot;</span></span></code></pre></div><p><strong>此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！</strong></p><p><strong>此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！</strong></p><p><strong>此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！</strong></p><p><strong>ports 里映射的镜像端口请务必保证正确！</strong></p><h2 id="web1" tabindex="-1">web1 <a class="header-anchor" href="#web1" aria-label="Permalink to &quot;web1&quot;">​</a></h2><p>服务构建文件，下有 Dockerfile 和构建所需的文件等。</p><p>Dockerfile 内容参考样例如下：</p><p>1.样例1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 使用基础镜像</span></span>
<span class="line"><span>FROM php:7.4-apache</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拷贝支撑文件到临时目录</span></span>
<span class="line"><span>COPY files /tmp/files/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拷贝源码到相应目录下</span></span>
<span class="line"><span>COPY src /var/www/html/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 执行命令，设置权限，安装依赖等</span></span>
<span class="line"><span>RUN chown -R root:root /var/www/html/ &amp;&amp; \\</span></span>
<span class="line"><span>    chmod -R 755 /var/www/html &amp;&amp; \\</span></span>
<span class="line"><span>    mv /tmp/files/flag.sh / &amp;&amp; \\</span></span>
<span class="line"><span>    mv /tmp/files/start.sh / &amp;&amp; \\</span></span>
<span class="line"><span>    mv /tmp/files/db.sql /db.sql &amp;&amp; \\</span></span>
<span class="line"><span>    chmod +x /flag.sh /start.sh &amp;&amp; \\</span></span>
<span class="line"><span>    sed -i &#39;s/deb.debian.org/mirrors.aliyun.com/g&#39; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span>    sed -i &#39;/security/d&#39; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span>    apt-get update &amp;&amp; \\</span></span>
<span class="line"><span>    apt-get install -y libaio1 libnuma1 psmisc libmecab2 openssh-server &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-common_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-community-client_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-client_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-community-server_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-server_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    rm -rf /tmp/files &amp;&amp; \\</span></span>
<span class="line"><span>    docker-php-ext-install mysqli pdo pdo_mysql &amp;&amp; \\</span></span>
<span class="line"><span>    rm -rf /var/lib/apt/lists/* &amp;&amp; \\</span></span>
<span class="line"><span>    # 设置 SSH</span></span>
<span class="line"><span>    mkdir /var/run/sshd &amp;&amp; \\</span></span>
<span class="line"><span>    useradd -m -s /bin/bash ctf &amp;&amp; \\</span></span>
<span class="line"><span>    echo &#39;ctf:1qazcde3!@#&#39; | chpasswd &amp;&amp; \\</span></span>
<span class="line"><span>    chown -R ctf:ctf /var/www/html &amp;&amp; \\</span></span>
<span class="line"><span>    # 允许 ctf 用户通过 SSH 登录</span></span>
<span class="line"><span>    echo &#39;AllowUsers ctf&#39; &gt;&gt; /etc/ssh/sshd_config &amp;&amp; \\</span></span>
<span class="line"><span>    # 启用密码认证</span></span>
<span class="line"><span>    sed -i &#39;s/#PasswordAuthentication yes/PasswordAuthentication yes/&#39; /etc/ssh/sshd_config &amp;&amp; \\</span></span>
<span class="line"><span>    # 清理</span></span>
<span class="line"><span>    rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定启动命令</span></span>
<span class="line"><span>CMD /usr/sbin/sshd &amp;&amp; /start.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 申明环境变量</span></span>
<span class="line"><span>ENV DASFLAG DASCTF{test12345}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 暴露端口</span></span>
<span class="line"><span>EXPOSE 80 22</span></span></code></pre></div><p>2.样例2</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 使用基础镜像</span></span>
<span class="line"><span>FROM dasctfbase/web_php73_apache_mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拷贝源码到相应目录下</span></span>
<span class="line"><span>COPY ./src /var/www/html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如需自定义 FLAG 请将自定义脚本覆盖到 /flag.sh</span></span>
<span class="line"><span>COPY files/flag.sh /flag.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如需操作数据库请将 sql 文件拷贝到 /db.sql</span></span>
<span class="line"><span>COPY files/db.sql /db.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 SSH 服务并设置权限</span></span>
<span class="line"><span>RUN apt-get update &amp;&amp; \\</span></span>
<span class="line"><span>    apt-get install -y openssh-server &amp;&amp; \\</span></span>
<span class="line"><span>    mkdir /var/run/sshd &amp;&amp; \\</span></span>
<span class="line"><span>    useradd -m -s /bin/bash ctf &amp;&amp; \\</span></span>
<span class="line"><span>    echo &#39;ctf:1qazcde3!@#&#39; | chpasswd &amp;&amp; \\</span></span>
<span class="line"><span>    chown -R ctf:ctf /var/www/html &amp;&amp; \\</span></span>
<span class="line"><span>    chmod 755 /var/www/html &amp;&amp; \\</span></span>
<span class="line"><span>    chmod +x /flag.sh &amp;&amp; \\</span></span>
<span class="line"><span>    sed -i &quot;1i \\ServerName localhost:80&quot; /etc/apache2/apache2.conf &amp;&amp; \\</span></span>
<span class="line"><span>    # 配置 SSH 允许 ctf 用户登录</span></span>
<span class="line"><span>    echo &#39;AllowUsers ctf&#39; &gt;&gt; /etc/ssh/sshd_config &amp;&amp; \\</span></span>
<span class="line"><span>    sed -i &#39;s/#PasswordAuthentication yes/PasswordAuthentication yes/&#39; /etc/ssh/sshd_config &amp;&amp; \\</span></span>
<span class="line"><span>    # 清理</span></span>
<span class="line"><span>    rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 申明环境变量，这里有一个 /flag.sh 从环境变量中获取 flag，所以需要声明</span></span>
<span class="line"><span>ENV DASFLAG DASCTF{test12345}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动 Apache 和 SSH</span></span>
<span class="line"><span>CMD /usr/sbin/sshd &amp;&amp; /start.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 声明对外暴露端口</span></span>
<span class="line"><span>EXPOSE 80 22</span></span></code></pre></div><p>需要特别注意几点：</p><p>1. FROM 的基础镜像只允许是：</p><ol><li>Dockerhub上不带 / 的官方镜像</li><li>dasctfbase 组织下的镜像，比如 <code>dasctfbase/web_php73_apache_mysql</code> 等</li><li><a href="https://github.com/orgs/DASCTF-Offical/packages" target="_blank" rel="noreferrer">https://github.com/orgs/DASCTF-Offical/packages</a> 里的镜像，也就是 ghcr.io/dasctf-offical/ 开头的镜像</li></ol><p><strong>其他镜像一律不允许使用。</strong></p><p><strong>其他镜像一律不允许使用。</strong></p><p><strong>其他镜像一律不允许使用。</strong></p><p>2. 请设置一个 DASFLAG 环境变量来作为预置的 flag 以供测试。</p><p><code>ENV DASFLAG DASCTF{test12345}</code></p><p>3. 请正确声明容器对外暴露的端口。</p><p><code>EXPOSE 80</code></p><p>4. CMD 及其附属的启动脚本<strong>禁止使用</strong>输出文字等方式来保持运行。</p><p>比如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>while true; do</span></span>
<span class="line"><span>  echo &#39;1&#39;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>禁止使用这种输出日志的方式来保持运行。</p><p>禁止使用这种输出日志的方式来保持运行。</p><p>禁止使用这种输出日志的方式来保持运行。</p><p>5. 把 SSH 打开，账号 ctf（运维账户，给到程序文件的修改权限），密码 1qazcde3!@#。原因：flag文件需要保留，接收 DASFLAG 作为flag，因为这个靶机既要作为攻击靶机（SSH信息不展示），也要作为防守靶机（SSH信息要展示）。</p>`,41)]))}const b=a(i,[["render",c]]);export{f as __pageData,b as default};
