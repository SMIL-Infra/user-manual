"use strict";(self.webpackChunksmil_infra_user_manual=self.webpackChunksmil_infra_user_manual||[]).push([[801],{9919:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});const n=(0,a(6252).uE)('<h1 id="使用tensorboard" tabindex="-1"><a class="header-anchor" href="#使用tensorboard" aria-hidden="true">#</a> 使用TensorBoard</h1><p>由于学校部署了防火墙，现在TensorBoard无法直接通过端口访问。推荐大家使用ssh端口转发访问。</p><p>例如，运行tensorBoard后：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gpu006:~$ tensorboard --logdir exps\nServing TensorBoard on localhost<span class="token punctuation">;</span> to expose to the network, use a proxy or pass --bind_all\nTensorBoard <span class="token number">2.7</span>.0 at http://localhost:6006/ <span class="token punctuation">(</span>Press CTRL+C to quit<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>若要访问此TensorBoard实例，请在本地设备上执行：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh -L 7006:localhost:6006 gpu006\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中7006是任何本地的空闲端口，6006则需匹配TensorBoard运行时显示的端口。连接成功后即可通过http://localhost:7006 访问了。</p>',7),r={},o=(0,a(3744).Z)(r,[["render",function(e,s){return n}]])},3104:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-b24a3890",path:"/guide/tensorboard.html",title:"使用TensorBoard",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/tensorboard.md",git:{updatedTime:1634268699e3,contributors:[{name:"胡玮文",email:"huww98@163.com",commits:1}]}}}}]);