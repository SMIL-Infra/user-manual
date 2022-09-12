"use strict";(self.webpackChunksmil_infra_user_manual=self.webpackChunksmil_infra_user_manual||[]).push([[813],{6033:(l,e,i)=>{i.r(e),i.d(e,{default:()=>x});var n=i(6252);const u=(0,n._)("h1",{id:"介绍",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,n.Uk)(" 介绍")],-1),t=(0,n.Uk)("我们部署了"),a={href:"https://ceph.io/",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("Ceph"),h=(0,n.Uk)("作为我们的存储解决方案。使用该系统主要有如下好处："),d=(0,n.uE)('<ul><li>分布式，所有文件均分布在各个存储节点上，这能带来以下优势： <ul><li>高性能：读写操作由多个节点同时进行，吞吐量比本地存储更高。</li><li>高可用：无单点故障，任意节点宕机均不会导致数据不可用。</li></ul></li><li>使用便捷，在所有服务器上都能访问你的所有文件。</li><li>节省空间，数据集等无需再手动在各台服务器之间拷贝。</li><li>在所有服务器间同步开发环境，避免反复安装。</li></ul><h2 id="cephfs" tabindex="-1"><a class="header-anchor" href="#cephfs" aria-hidden="true">#</a> Cephfs</h2><p>Cephfs是基于Ceph存储技术构建的文件系统，也是大家使用存储系统的主要接口。挂载于每台服务器的<code>/mnt/cephfs</code>目录下。</p><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><p>目前CephFS已接入国际校区的所有服务器，包括：gpu004, gpu006, gpu[013-027]</p>',5),p=(0,n.Uk)("在使用CephFS前，请确保已完成"),o=(0,n.Uk)("统一认证迁移"),s=(0,n.Uk)("，否则在使用过程中将遇到权限问题。"),r=(0,n.uE)('<h3 id="使用规划" tabindex="-1"><a class="header-anchor" href="#使用规划" aria-hidden="true">#</a> 使用规划</h3><p>存储布局规划：</p><ul><li><p>主存储：</p><ul><li>路径：<code>/mnt/cephfs/</code></li><li>存储布局：HDD 2副本</li><li>计划用途：一般用途，如实验数据，开发环境，中间结果，checkpoint等</li><li>性能：连续读写较快，随机读写较慢</li></ul></li><li><p>高性能数据集：</p><ul><li>路径：<code>/mnt/cephfs/mixed/</code></li><li>存储布局：SSD 1副本 + HDD 2副本</li><li>计划用途：需要高随机读取性能的数据集</li><li>性能：读取非常快，连续写入较快，随机写入较慢</li></ul></li><li><p>冷数据：</p><ul><li>路径：<code>/mnt/cephfs/ec/</code></li><li>存储布局：HDD Erasure Coding 8+2</li><li>计划用途：之前实验用到的数据集，实验数据，checkpoint等较少访问的数据</li><li>性能：连续读写较快，随机读取较慢，随机写入非常慢</li></ul></li><li><p>高性能（不常用）：</p><ul><li>路径：<code>/mnt/cephfs/ssd/</code></li><li>存储布局：SSD 2副本</li><li>计划用途：数据处理所需临时占用</li><li>性能：非常快</li></ul></li></ul><p>每个文件实际使用的存储布局只取决于它创建时所在的路径。创建后可以移动到任何<code>/mnt/cephfs/</code>下的目录中而不影响其布局。因此，当需要转换文件的存储布局时，请使用<code>cp</code>命令而不是<code>mv</code>。</p><p>使用权限：</p>',5),m=(0,n._)("li",null,[(0,n._)("code",null,"/mnt/cephfs/home/<用户名>"),(0,n.Uk)(": 相应用户拥有所有权，可自行决定存放的数据 "),(0,n._)("ul",null,[(0,n._)("li",null,"限额：1TiB，4M个文件")])],-1),f=(0,n._)("code",null,"/mnt/cephfs/mixed/home/<用户名>",-1),_=(0,n.Uk)(": 相应用户拥有所有权，可自行决定存放的数据。可"),k=(0,n.Uk)("安装运行环境"),g=(0,n.Uk)("至该文件夹以提高程序启动速度 "),U=(0,n._)("ul",null,[(0,n._)("li",null,"限额：16GiB，1M个文件")],-1),C=(0,n._)("li",null,[(0,n._)("code",null,"/mnt/cephfs/ec/home/<用户名>"),(0,n.Uk)(": 相应用户拥有所有权，可自行决定存放的数据 "),(0,n._)("ul",null,[(0,n._)("li",null,"限额：1TiB，256K个文件")])],-1),D=(0,n._)("li",null,[(0,n._)("code",null,"/mnt/cephfs/dataset/"),(0,n.Uk)(": 用户可自行判断，在其中创建文件夹，存储可能被多个用户重用的数据集")],-1),b=(0,n._)("li",null,[(0,n._)("code",null,"/mnt/cephfs/mixed/dataset/"),(0,n.Uk)(": 请联系管理员创建文件夹并设置限额，存储需高随机读取性能，或非常常用的数据集")],-1),w=(0,n._)("li",null,[(0,n._)("code",null,"/mnt/cephfs/ssd/"),(0,n.Uk)(": 请联系管理员使用")],-1),v={},x=(0,i(3744).Z)(v,[["render",function(l,e){const i=(0,n.up)("OutboundLink"),v=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[u,(0,n._)("p",null,[t,(0,n._)("a",a,[c,(0,n.Wm)(i)]),h]),d,(0,n._)("p",null,[p,(0,n.Wm)(v,{to:"/auth/migration.html"},{default:(0,n.w5)((()=>[o])),_:1}),s]),r,(0,n._)("ul",null,[m,(0,n._)("li",null,[f,_,(0,n.Wm)(v,{to:"/storage/env-install.html"},{default:(0,n.w5)((()=>[k])),_:1}),g,U]),C,D,b,w])],64)}]])},8722:(l,e,i)=>{i.r(e),i.d(e,{data:()=>n});const n={key:"v-3d00f70d",path:"/storage/",title:"介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Cephfs",slug:"cephfs",children:[{level:3,title:"状态",slug:"状态",children:[]},{level:3,title:"使用规划",slug:"使用规划",children:[]}]}],filePathRelative:"storage/README.md",git:{updatedTime:163395876e4,contributors:[{name:"胡玮文",email:"huww98@outlook.com",commits:9},{name:"胡玮文",email:"huww98@163.com",commits:3}]}}}}]);