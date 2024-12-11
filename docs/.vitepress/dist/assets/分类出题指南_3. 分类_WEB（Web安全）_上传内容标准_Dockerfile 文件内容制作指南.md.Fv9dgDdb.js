import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.BQmytedh.js";const l="/assets/dockerfile_image.DwfYJt5B.png",b=JSON.parse('{"title":"Dockerfile 文件内容制作指南","description":"","frontmatter":{},"headers":[],"relativePath":"分类出题指南/3. 分类/WEB（Web安全）/上传内容标准/Dockerfile 文件内容制作指南.md","filePath":"分类出题指南/3. 分类/WEB（Web安全）/上传内容标准/Dockerfile 文件内容制作指南.md","lastUpdated":1733911811000}'),i={name:"分类出题指南/3. 分类/WEB（Web安全）/上传内容标准/Dockerfile 文件内容制作指南.md"};function c(t,s,o,r,d,m){return e(),n("div",null,s[0]||(s[0]=[p('<h1 id="dockerfile-文件内容制作指南" tabindex="-1">Dockerfile 文件内容制作指南 <a class="header-anchor" href="#dockerfile-文件内容制作指南" aria-label="Permalink to &quot;Dockerfile 文件内容制作指南&quot;">​</a></h1><h2 id="文件下载" tabindex="-1">文件下载 <a class="header-anchor" href="#文件下载" aria-label="Permalink to &quot;文件下载&quot;">​</a></h2><p><a href="../%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD/docker-web(%E5%AE%98%E6%96%B9%E9%95%9C%E5%83%8F%E6%BA%90).zip">docker-web(官方镜像源).zip</a></p><p><a href="../%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD/docker-web(%E6%9D%A5%E6%BA%90dasctfbase).zip">docker-web(来源dasctfbase).zip</a></p><h2 id="文件包结构" tabindex="-1">文件包结构 <a class="header-anchor" href="#文件包结构" aria-label="Permalink to &quot;文件包结构&quot;">​</a></h2><p>文件包内应确保具有如下的文件。</p><p><img src="'+l+`" alt=""></p><ol><li>docker-compose.yml – Docker-Compose 描述文件</li><li>web1 – 服务构建文件，下有 Dockerfile 和构建所需的文件等</li></ol><h2 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h2><p>Docker-Compose 描述文件, 内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 指定该文件版本</span></span>
<span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span># 把每个子目录视为一个镜像，开始构建</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  web1:</span></span>
<span class="line"><span>    # 此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明。</span></span>
<span class="line"><span>    build: ./web1/</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;18098:80&quot;</span></span></code></pre></div><p><strong>此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！</strong></p><p><strong>此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！</strong></p><p><strong>此处仅允许 image, build, ports，禁止其他字段出现，如果有 volume，cmd 等设置需求，请在 Dockerfile 里进行文件拷贝或者申明！！！</strong></p><p><strong>ports 里映射的镜像端口请务必保证正确！</strong></p><h2 id="web1" tabindex="-1">web1 <a class="header-anchor" href="#web1" aria-label="Permalink to &quot;web1&quot;">​</a></h2><p>服务构建文件，下有 Dockerfile 和构建所需的文件等。</p><p>Dockerfile 内容参考样例如下：</p><p>1.样例1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 只允许使用下文中限定的镜像</span></span>
<span class="line"><span>FROM php:7.4-apache</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拷贝支撑文件到临时目录。</span></span>
<span class="line"><span>COPY files /tmp/files/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拷贝源码到相应目录下。</span></span>
<span class="line"><span>COPY src /var/www/html/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 执行命令，设置权限，安装依赖等。</span></span>
<span class="line"><span># 在镜像启动阶段禁止执行需要长时间运行（编译等）以及需要访问互联网（安装包等）操作，此类操作请在此处完成。</span></span>
<span class="line"><span># 命令请在一个 RUN 里执行，不要拆分成多个 RUN 以减小镜像体积。</span></span>
<span class="line"><span>RUN chown -R root:root /var/www/html/ &amp;&amp; \\</span></span>
<span class="line"><span>    chmod -R 755 /var/www/html &amp;&amp; \\</span></span>
<span class="line"><span>    mv /tmp/files/flag.sh / &amp;&amp; \\</span></span>
<span class="line"><span>    mv /tmp/files/start.sh / &amp;&amp; \\</span></span>
<span class="line"><span>    mv /tmp/files/db.sql /db.sql &amp;&amp; \\</span></span>
<span class="line"><span>    chmod +x /flag.sh /start.sh &amp;&amp; \\</span></span>
<span class="line"><span>    sed -i &#39;s/deb.debian.org/mirrors.aliyun.com/g&#39; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span>	  sed -i &#39;/security/d&#39; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span>    apt-get update &amp;&amp; \\</span></span>
<span class="line"><span>    apt-get install libaio1 libnuma1 psmisc libmecab2 -y &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-common_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-community-client_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-client_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-community-server_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/files/mysql-server_5.7.29-1debian10_amd64.deb &amp;&amp; \\</span></span>
<span class="line"><span>    rm -rf /tmp/files &amp;&amp; \\</span></span>
<span class="line"><span>    docker-php-ext-install mysqli pdo pdo_mysql &amp;&amp; \\</span></span>
<span class="line"><span>    rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定启动命令。</span></span>
<span class="line"><span>CMD /start.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 申明环境变量，环境变量都在此声明</span></span>
<span class="line"><span>ENV DASFLAG DASCTF{test12345}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请务必在镜像末尾申明该镜像需要暴露的端口！</span></span>
<span class="line"><span>EXPOSE 80</span></span></code></pre></div><p>2.样例2</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 只允许使用下文中限定的镜像</span></span>
<span class="line"><span>FROM dasctfbase/web_php73_apache_mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY ./src /var/www/html</span></span>
<span class="line"><span># 如需自定义 FLAG 请将自定义脚本覆盖到 /flag.sh</span></span>
<span class="line"><span>COPY files/flag.sh /flag.sh</span></span>
<span class="line"><span># 如需操作数据库请将 sql 文件拷贝到 /db.sql</span></span>
<span class="line"><span>COPY files/db.sql /db.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如有上传文件等操作请务必将权限设置正确！</span></span>
<span class="line"><span># RUN chown www-data:www-data /var/www/html/uploads/</span></span>
<span class="line"><span>RUN /bin/bash &amp;&amp; chmod 755 /var/www/html &amp;&amp; \\</span></span>
<span class="line"><span>    sed -i &quot;1i \\ServerName localhost:80&quot; /etc/apache2/apache2.conf &amp;&amp; \\</span></span>
<span class="line"><span>    chmod +x /flag.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 申明环境变量，这里有一个 /flag.sh 从环境变量中获取 flag，所以需要声明。</span></span>
<span class="line"><span>ENV DASFLAG DASCTF{test12345}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请声明对外暴露端口</span></span>
<span class="line"><span>EXPOSE 80</span></span></code></pre></div><p>需要特别注意几点：</p><p>1. FROM 的基础镜像只允许是：</p><ol><li>Dockerhub上不带 / 的官方镜像</li><li>dasctfbase 组织下的镜像，比如 <code>dasctfbase/web_php73_apache_mysql</code> 等</li><li>love-image.dasctf.com 里的镜像</li></ol><p><strong>其他镜像一律不允许使用。</strong></p><p><strong>其他镜像一律不允许使用。</strong></p><p><strong>其他镜像一律不允许使用。</strong></p><p>2. 请设置一个 DASFLAG 环境变量来作为预置的 flag 以供测试。</p><p><code>ENV DASFLAG DASCTF{test12345}</code></p><p>3. 请正确声明容器对外暴露的端口。</p><p><code>EXPOSE 80</code></p><p>4. CMD 及其附属的启动脚本<strong>禁止使用</strong>输出文字等方式来保持运行。</p><p>比如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>while true; do</span></span>
<span class="line"><span>  echo &#39;1&#39;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>禁止使用这种输出日志的方式来保持运行。</p><p>禁止使用这种输出日志的方式来保持运行。</p><p>禁止使用这种输出日志的方式来保持运行。</p><p>可以使用如下所示等方式来保持运行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 方式一</span></span>
<span class="line"><span>tail -f /dev/null</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 方式二</span></span>
<span class="line"><span>sleep infinity</span></span></code></pre></div>`,40)]))}const g=a(i,[["render",c]]);export{b as __pageData,g as default};
