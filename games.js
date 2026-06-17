// ===== 即兴游戏库数据（113 games） =====
// 从 index.html 提取，方便独立阅读和修改
// 修改后刷新浏览器即可生效

const games = {

  // ---- A. 热身破冰（10 个） ----

  'm3-1': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['反应力', '能量', '专注'],
    usage: 'warmup', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: 'Zip Zap Zop —— 经典即兴热身游戏',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">反应力 · 能量 · 专注</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人站成一圈。</li><li>第一个人拍手并指向圈中任意一人，同时说"Zip"。</li><li>被指到的人立刻拍手指向另一人，说"Zap"。</li><li>第三个人拍手指向再一人，说"Zop"。</li><li>循环继续：Zip → Zap → Zop → Zip → Zap → Zop……</li><li>如果有人犹豫、说错词、或节奏断掉——所有人一起做"失败庆祝"（高举双手大喊"哇哦！"），然后从出错的人重新开始。</li></ol>
<h2>进阶变体</h2><ul><li><strong>加速版</strong>：带领者不断喊"快一点！"，迫使反应时间越来越短</li><li><strong>反向版</strong>：用眼神和点头代替拍手和说话——更考验专注和团体连接</li><li><strong>加入动作</strong>：不说 Zip/Zap/Zop，而是做不同的身体动作（拍头→拍肩→拍膝盖→指向）</li><li><strong>淘汰模式</strong>：出错的人退出圈外，最后两人对决（适合竞技氛围）</li></ul>
<h2>教学提示</h2><p>这是全球即兴团体最常用的热身游戏。关键不是"不出错"，而是<strong>如何对待错误</strong>——庆祝失败、快速恢复、继续前进。带领者要注意：如果有人连续出错开始紧张，带头为他们欢呼鼓掌。不要让任何一个参与者感到尴尬。</p><p><strong>训练的核心能力</strong>：在压力下保持放松、快速反应、与团队建立节奏连接。</p>`
  },

  'm3-2': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['破冰', '记忆', '自发性'],
    usage: 'warmup', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '名字+动作（Name + Motion）—— 用身体记住彼此',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">破冰 · 记忆 · 自发性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人站成一圈。</li><li>第一个人大声说出自己的名字，同时做一个简单的身体动作（如挥手、转圈、拍膝盖——任何动作都可以）。</li><li>全组所有人一起用力重复这个人的名字 + 动作。</li><li>顺时针轮到下一个人，重复步骤 2-3。</li><li>绕完一圈后，带领者喊"加速再来一轮！"——这次速度更快。</li></ol>
<h2>进阶变体</h2><ul><li><strong>逆序挑战</strong>：第二轮反向进行，看大家是否记住了名字和动作</li><li><strong>名字接龙</strong>：每人说名字之前，必须先说出前面所有人的名字和动作（适合 8 人以下小团体）</li><li><strong>情绪版</strong>：名字同样，但动作必须用不同的情绪来做——开心的挥手 vs 悲伤的挥手</li></ul>
<h2>教学提示</h2><p>这是团体第一次见面时的绝佳破冰游戏。关键原则：<strong>带领者先做示范</strong>——做一个大胆的、搞笑的、不完美的动作，给大家树立"这里可以傻"的心理安全感。如果有人做的动作很保守（只是挥了下手），带领者可以笑着说"再来一个更大胆的！"，但绝不强迫。</p><p><strong>训练的核心能力</strong>：在一个新团体中快速建立安全感、用身体联想帮助记忆、敢于在众人面前做自己。</p>`
  },

  'm3-3': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['团体意识','聆听','耐心'],
    usage: 'warmup', players: {min:5, max:20, label:'5-20 人'}, difficultyNum: 2,
    title: '团体计数（Group Count）—— 闭上眼，用心听',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">团体意识 · 聆听 · 耐心</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人闭眼站立或坐下。</li><li>目标：团体从 1 数到 20（或更高）。</li><li>规则：每次只能有一个人说出一个数字。如果两个或更多人同时说出同一个数字——从 1 重新开始。</li><li>不能有预设的节奏、不能有信号、不能用手势（因为都闭着眼）。</li><li>纯粹靠团体直觉来感知"现在该谁说了"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>更高目标</strong>：从数到 20 挑战到数到 30 或 50</li><li><strong>无数字版</strong>：不用数字，而是每人说一个任意单词，但由团体共同完成一个有意义的句子</li><li><strong>移动版</strong>：睁眼，在空间中自由行走同时计数——更难，因为所有人都能看到彼此的动作</li></ul>
<h2>教学提示</h2><p>这个游戏训练的是即兴中非常重要但常常被忽视的能力：<strong>在不确定中等待、感知集体的节奏、而非抢占发言权</strong>。带领者要注意：如果团体反复在 5-8 左右失败，不要着急——这正是学习的时刻。结束后引导讨论："你是在什么感觉下决定开口的？你是怎么知道'现在不该我'的？"</p><p><strong>训练的核心能力</strong>：团体感知力、耐心、在集体中不抢占也不退缩。</p>`
  },

  'm3-4': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['自发性','联想','反应力'],
    usage: 'warmup', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '快速联想圈（Word Association Circle）—— 说出口之前不要想',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">自发性 · 联想能力 · 反应力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人站成一圈。</li><li>第一个人任意说一个词（如"苹果"）。</li><li>顺时针下一个必须在 <strong>1 秒内</strong> 说出由该词联想到的任意词（如"红色"→"红色"→"消防车"→"火"→"水"……）。</li><li>如果有人犹豫超过 1 秒，全组一起欢呼"耶！犹豫了！"然后从该人继续。</li><li>持续进行，由慢到快。</li></ol>
<h2>进阶变体</h2><ul><li><strong>主题限定</strong>：所有联想词必须属于一个主题（如"食物""电影""情绪"）</li><li><strong>反义词版</strong>：每个人说的必须是上一个词的反义词</li><li><strong>故事串联</strong>：不仅是联想词，而是两句话——前一句回应上一个词，后一句引入新词</li></ul>
<h2>教学提示</h2><p>这个游戏直击即兴的核心问题：<strong>大脑的"编辑者"</strong>。当你在 1 秒内必须说出口时，你的评判者来不及工作——你听到自己的第一直觉冒出来。这就是自发性的训练。带领者要强调："目标不是说出'好的'联想，而是<strong>在评判者反应过来之前已经说出口</strong>。"</p><p><strong>训练的核心能力</strong>：绕过内心评判、信任第一直觉、快速思维连接。</p>`
  },

  'm3-5': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['能量','团体','身体'],
    usage: 'warmup', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '能量传递（Pass the Energy）—— 用身体传递无形的能量球',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">能量感知 · 身体表达 · 团体连接</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人站成一圈。</li><li>第一个人用双手"抱起"一个想象的能量球，做一个夸张的声音和身体动作（如"哇——！"把能量球举过头顶），然后"扔"给圈中另一个人。</li><li>接到的人必须<strong>匹配并放大</strong>这个能量的质感——如果扔过来的能量是"爆炸式的"，你要用更爆炸的方式接住和传递。</li><li>每个人传递的能量质感要有所变化——大小、重量、速度、声音都可以变。</li></ol>
<h2>进阶变体</h2><ul><li><strong>情绪能量</strong>：传递的不只是物理能量，而是带情绪的——愤怒的球、害羞的球、狂喜的球</li><li><strong>慢动作版</strong>：整个传递过程用极慢的速度进行，训练身体控制</li><li><strong>无声版</strong>：不允许发出声音，只用身体表达能量的大小和质感</li></ul>
<h2>教学提示</h2><p>这个游戏帮助演员发展<strong>身体和声音的表达范围</strong>。很多人一开始只会传"大能量"（大声+大动作），带领者应鼓励大家探索小能量、尖锐的能量、粘稠的能量——能量的多样性才是这个游戏的价值。</p><p><strong>训练的核心能力</strong>：用身体和声音表达不同程度的能量、感知和匹配伙伴的能量。</p>`
  },

  'm3-6': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['反应力','专注','能量'],
    usage: 'warmup', players: {min:6, max:20, label:'6-20 人'}, difficultyNum: 1,
    title: 'Bunny Bunny —— 疯狂兔子接力赛',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">6-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">反应力 · 专注力 · 能量</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人站成一圈。</li><li>一个人在圈中心做"兔子"——双手放在头两侧做耳朵状，快速上下摆动，同时大声说"Bunny Bunny Bunny Bunny……"。</li><li>此人左右两边的邻居各自用一只手做"耳朵"朝外摆动，同时快速说"Tooky Tooky Tooky Tooky……"。</li><li>中间的"兔子"随时可以将"兔子身份"传给别人——用眼神锁定圈中另一人，然后两人交换位置，新一轮开始。</li><li>如果任何人节奏断了或反应慢了——全组欢呼庆祝！</li></ol>
<h2>进阶变体</h2><ul><li><strong>加速版</strong>：中间的人越快传给下一人，节奏越紧张</li><li><strong>动物变体</strong>：把 Bunny 换成其他动物——大象（长鼻子动作）、猴子（挠头动作）、鱼（吐泡泡动作）</li></ul>
<h2>教学提示</h2><p>这是一个纯粹的能量和反应力游戏，没有"对错"，只有<strong>越快越疯狂越好</strong>。非常适合在排练刚开场时使用，让所有人从"日常模式"切换到"表演模式"。注意：这个游戏可能导致笑场失控——那也没关系，笑声就是最好的热身。</p><p><strong>训练的核心能力</strong>：快速反应、在疯狂中保持专注、享受纯粹的傻气。</p>`
  },

  'm3-7': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['反应力','反差','自发性'],
    usage: 'warmup', players: {min:3, max:10, label:'3-10 人'}, difficultyNum: 2,
    title: '我在做什么？（What Are You Doing?）—— 说一套，做一套',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-10 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">反应力 · 反差思维 · 自发性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>A 上台开始做一个重复性的身体动作（如搅拌咖啡、刷牙、跳绳——用无实物表演）。</li><li>B 走向 A，问："你在做什么？"</li><li>A 的回答必须和当前正在做的动作<strong>完全无关</strong>（如正在做"搅拌咖啡"但回答"我在爬珠穆朗玛峰"）。</li><li>B 立即开始做 A 说出的那个动作（开始"爬珠穆朗玛峰"）。</li><li>C 走向 B，问"你在做什么？"，循环继续。</li></ol>
<h2>进阶变体</h2><ul><li><strong>主题连环</strong>：所有人的回答必须围绕一个主题（如"极限运动""奇怪的工作"）</li><li><strong>情绪限定</strong>：做的动作和说的回答都必须带有一种指定情绪</li></ul>
<h2>教学提示</h2><p>这个游戏的笑点在于<strong>动作和语言之间的巨大反差</strong>。带领者要鼓励大家大胆说出来——越荒诞越好！同时，做动作的人要认真地用无实物表演——动作的认真度越高，反差笑果越强。这是一个非常好的"降低标准"练习——你不需要想出一个聪明的答案，任何答案都行。</p><p><strong>训练的核心能力</strong>：快速产生想法、无实物表演、在荒诞中保持投入。</p>`
  },

  'm3-8': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['观察力','同步','非语言'],
    usage: 'warmup', players: {min:2, max:2, label:'2 人一组'}, difficultyNum: 1,
    title: '镜像（Mirror）—— 像照镜子一样跟随伙伴',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人一组</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">观察力 · 同步能力 · 非语言连接</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人面对面站立，距离约一米。</li><li>一人做"带领者"，一人做"镜像"。</li><li>带领者开始做缓慢的、连续的身体动作——抬起手臂、转动身体、改变面部表情……</li><li>镜像必须<strong>同时</strong>做出镜像动作（像照镜子一样）——带领者举左手，镜像举右手。</li><li>目标是动作流畅到让旁观者很难分辨谁是带领者。</li><li>60 秒后交换带领者和镜像角色。</li><li>进阶：不需要指定带领者——两个人都同时带领也同时跟随。</li></ol>
<h2>进阶变体</h2><ul><li><strong>全身版</strong>：坐姿→站姿→在空间中移动——动作幅度逐渐增大</li><li><strong>情绪镜像</strong>：不仅镜像动作，还要镜像对方脸上的情绪</li><li><strong>声音版</strong>：加入声音——带领者发出的声音，镜像也同步发出</li></ul>
<h2>教学提示</h2><p>镜像练习是培养<strong>深度观察力和非语言连接</strong>的最佳方式之一。它直接训练即兴中"聆听你的伙伴"的能力——不只是语言层面，而是身体和能量层面。带领者可以提示："不要想'我怎么跟随'——只是<strong>看</strong>，让你的身体自然地响应你眼睛看到的东西。"</p><p><strong>训练的核心能力</strong>：非语言观察力、身体控制、与伙伴建立深层连接。</p>`
  },

  'm3-9': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['聆听','连接','自发性'],
    usage: 'warmup', players: {min:6, max:30, label:'6-30 人'}, difficultyNum: 1,
    title: '同心圆问答（Concentric Circles）—— 快速连接的破冰利器',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">6-30 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">聆听 · 连接 · 自发性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人分成内外两个圈，面对面站立——两人一组。</li><li>带领者给出一个话题（如"你小时候最害怕的东西""你的第一个宠物""你最近学到的一件事"）。</li><li>两人有 60 秒时间互相分享。规则：听完后才能分享自己的——不能打断。</li><li>60 秒后带领者喊"换！"，外圈的人向顺时针移动一个位置，面对新伙伴。</li><li>带领者给出新话题，重复 4-6 轮。</li></ol>
<h2>进阶变体</h2><ul><li><strong>即兴关联</strong>：不说真实经历，而是由对方刚才说的话即兴编一个故事</li><li><strong>单字版</strong>：每人每次只能说一个词，两人共同用单字交替完成一个句子</li><li><strong>无声版</strong>：不允许说话，用表情和手势沟通</li></ul>
<h2>教学提示</h2><p>这是一个低威胁的社交连接练习，非常适合有新人加入时的热身。关键原则：<strong>它训练的不是"说"，而是"听"</strong>——听完对方的分享再回应，而不是在脑子里排练自己的分享。带领者选的话题应该轻松、不需要深度自我暴露。</p><p><strong>训练的核心能力</strong>：积极聆听、快速连接陌生人、在交流中保持开放。</p>`
  },

  'm3-10': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '热身破冰', skills: ['破冰','角色','能量'],
    usage: 'warmup', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '疯狂握手（Crazy Handshake）—— 用握手建立角色',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">破冰 · 角色建立 · 能量</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人在空间中自由行走。</li><li>带领者喊"握手！"——所有人就近找一个人握手。</li><li>第一次：正常握手，交换名字。</li><li>第二次：带领者加上一个角色提示——"像你们是失散多年的老朋友那样握手！""像你们互相暗恋但不敢说那样握手！""像你是机器人那样握手！"</li><li>每次握手约 15-20 秒，然后换人。5-6 轮后结束。</li></ol>
<h2>进阶变体</h2><ul><li><strong>即兴延续</strong>：某次握手后不喊换——而是从握手的角色关系开始一个即兴场景</li><li><strong>情绪握手</strong>：不以角色为引导，而是以情绪（愤怒的握手/悲伤的握手/狂喜的握手）</li><li><strong>慢动作版</strong>：所有握手动作用极慢速度进行，像在水中一样</li></ul>
<h2>教学提示</h2><p>握手的物理动作本身就包含了丰富的信息——力度、持续时间、眼神接触、身体距离。改变握手中的任何一个参数，你就改变了一个"角色"。这个游戏非常适合让新手体验<strong>"身体决定角色"</strong>的原理——不需要提前想好角色，你的握手方式已经创造了角色。</p><p><strong>训练的核心能力</strong>：通过身体接触建立角色、在互动中感知对方、打破社交距离的顾忌。</p>`
  },

  // ---- B. Yes And 与接纳（8 个） ----

  'm3-11': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['Yes And','自发性','场景'],
    usage: 'training', players: {min:2, max:2, label:'2 人一组'}, difficultyNum: 1,
    title: 'Yes, And 接龙 —— 练习即兴的第一行为准则',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人一组</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">Yes And · 自发性 · 场景推进</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人面对面。A 说一句简单的提议（如"我们去海边吧"）。</li><li>B 必须以"好，而且……"开头回应，并添加一个新信息（如"好，而且我们带上那个你从没用过的冲浪板"）。</li><li>A 继续以"好，而且……"回应，添加更多信息。</li><li>连续 5-6 轮不停，创造一个越来越丰富的场景。</li></ol>
<h2>进阶变体</h2><ul><li><strong>情绪 Yes And</strong>：不只用台词 Yes And，每次回应前必须先接受对方刚才的情绪并放大</li><li><strong>身体 Yes And</strong>：不允许说话——A 做一个动作，B 用动作接纳并添加新动作</li><li><strong>负面体验版</strong>：先用"不，但是……"做一轮，再用"Yes, And"做同样场景，对比感受</li></ul>
<h2>教学提示</h2><p>这个游戏是即兴训练的"第一课"。重点不是想出一个聪明的 And，而是<strong>无条件地接纳</strong>。带领者要注意：如果有人开始 And 得过于跳跃（"我们去海边吧""好，而且外星人来了！"），提醒他们——And 应该在伙伴给出的世界里添加，不是炸毁它。</p><p><strong>训练的核心能力</strong>：无条件接纳伙伴的提议、在接纳的基础上创造性地添加。</p>`
  },

  'm3-12': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['Yes And','自发性','对比体验'],
    usage: 'training', players: {min:2, max:3, label:'2-3 人'}, difficultyNum: 1,
    title: '否定即兴（No, But Scene）—— 感受被拒绝的滋味',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">Yes And（反向学习）</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人开始一个即兴场景。</li><li>规则：每一句话必须以"不"或"但是"开头。<strong>绝不能接纳</strong>对方的提议。</li><li>做 60-90 秒后停止。</li><li>讨论感受——发生了什么？场景怎么样了？</li><li>然后用同样的情境，做一轮 Yes And 版本。对比两种体验的天壤之别。</li></ol>
<h2>进阶变体</h2><ul><li><strong>隐性否定</strong>：不允许直接用"不"，但要用各种方式躲避和转移——这更难，也更像真实生活中人们"假接纳"的样子</li><li><strong>Yes But</strong>：表面接纳但实际否定——"好主意，但现在已经太晚了""好啊，可是我不太舒服"</li></ul>
<h2>教学提示</h2><p>通过<strong>反面体验</strong>来学习正面原则是最有效的教学方式之一。这个游戏让学生亲身体验 Block 如何杀死场景——不需要讲道理，身体会记住被拒绝的感觉。带领者可以在结束后引导讨论："当你被连续拒绝时，你的身体感觉是怎样的？你的大脑发生了什么？"</p><p><strong>训练的核心能力</strong>：通过反差体验理解 Yes And 的重要性、识别日常生活和舞台上的各种"隐性 Block"。</p>`
  },

  'm3-13': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['接纳','无实物','联想'],
    usage: 'both', players: {min:2, max:2, label:'2 人一组'}, difficultyNum: 1,
    title: '礼物传递（Gift Giving）—— 接纳你收到的每一个"礼物"',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人一组</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">接纳 · 无实物 · 联想</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>A 用无实物动作"拿出"一个礼物送给 B——但不说什么，只用动作表达礼物的重量/大小/形状。</li><li>B 接过"礼物"，仔细观察（感受其重量和形状），然后说："谢谢你的[礼物名]，我正需要它因为……"，并给出一个有趣的理由。</li><li>然后 B 再送一个新的礼物给 A。</li></ol>
<h2>进阶变体</h2><ul><li><strong>糟糕礼物版</strong>：送礼的人故意想一个非常糟糕的礼物，收礼的人必须真诚地找到它的用途</li><li><strong>连锁送礼</strong>：三人或更多人围成圈，礼物不断传递和变形——每人收到后把它变成新的礼物传给下一个人</li></ul>
<h2>教学提示</h2><p>礼物传递是 <strong>Yes And 的完美隐喻</strong>。你收到的礼物不一定是你想要的——但你的工作是接纳它，找到它的价值，然后基于它创造新的东西。带领者要强调：收礼人的反应越真诚、越具体，场景越有趣。不要说"谢谢，这很好"，要说"谢谢你送我的这把左撇子剪刀——我明天就要用它来修理我那只总往右偏的盆栽！"</p><p><strong>训练的核心能力</strong>：无实物表演、将任意 Offer 转化为场景燃料、用具体性代替空泛。</p>`
  },

  'm3-14': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['完全接纳','团体','能量'],
    usage: 'training', players: {min:5, max:20, label:'5-20 人'}, difficultyNum: 1,
    title: '超-YES（Mega-Yes）—— 体验被完全接纳的力量',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">完全接纳 · 团体支持 · 能量</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>一个人站到圈子中间，做一个大胆的动作或喊出一句话（任何东西！）。</li><li>周围的所有人立刻用最大的热情和能量回应"YES！！"，并以更夸张的方式全部加入那个动作。</li><li>每个人轮流到中间当发起者。确保每个人都体验过被全组狂热接纳的感觉。</li></ol>
<h2>进阶变体</h2><ul><li><strong>连续超-YES</strong>：当全组正在做第一个动作时，圈中的人立刻发起第二个动作——全组无缝切换继续 YES</li><li><strong>"无聊"的动作</strong>：发起者故意做一个无聊的、微小的动作——全组用同样的狂热去 YES——对比体验"就算是微小的提议，也可以被全力接纳"</li></ul>
<h2>教学提示</h2><p>Mega-Yes 的情感冲击力很强——即使你知道这只是一个练习，当你站在中间看到全组人冲向你、接纳你的提议时，很多人会感动。这个练习建立了<strong>团体心理安全感</strong>的核心。带领者要注意：确保每个人都在中间站过——不要只让外向的人霸占中间位。</p><p><strong>训练的核心能力</strong>：体验被完全接纳的心理感受、建立团体的无条件支持文化。</p>`
  },

  'm3-15': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['聆听', '协作叙事', '耐心'],
    usage: 'training', players: {min:3, max:8, label:'3-8 人'}, difficultyNum: 1,
    title: '一词一句故事（One Word Story）—— 每个人只说一个字',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-8 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">聆听 · 协作叙事 · 耐心</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人站成一排。</li><li>轮流，每人每次只能说<strong>一个字</strong>，共同讲述一个完整的故事。</li><li>需要有一个主持人在恰当的时候用一个完整的句子结束故事。</li><li>故事应该有一个明确的开头、发展和结局——但每个人只贡献一个字。</li></ol>
<h2>进阶变体</h2><ul><li><strong>标点版</strong>：允许说标点符号（"逗号""句号""感叹号"），增加了叙事的节奏感</li><li><strong>类型限定</strong>：故事必须是特定类型的（恐怖故事/爱情故事/侦探故事）</li><li><strong>反向版</strong>：从故事的最后一句话开始，倒着讲</li></ul>
<h2>教学提示</h2><p>一词一句故事训练的是即兴中最核心也最反直觉的能力：<strong>放下控制</strong>。你无法"计划"故事情节——因为你只能说一个字，下一个字是别人说的。你只能做一件事：认真听，然后在你的那一轮贡献一个让句子继续下去的字。带领者要提醒："不要试图用你的一个字去'改变'故事方向——信任集体，故事会自己去到它该去的地方。"</p><p><strong>训练的核心能力</strong>：极致聆听、放弃个人控制、信任集体智慧。</p>`
  },

  'm3-16': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['接纳转折','叙事','自发性'],
    usage: 'training', players: {min:3, max:8, label:'3-8 人'}, difficultyNum: 2,
    title: '幸运/不幸（Fortunately/Unfortunately）—— 每个转折都接纳',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-8 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">接纳转折 · 叙事 · 自发性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人轮流，共同讲一个故事。</li><li>第一个人以"幸运的是……"开头，说一句正面发展（如"幸运的是，我买到了最后一张火车票"）。</li><li>下一个人必须以"不幸的是……"开头，在上一句基础上添加一个负面转折。</li><li>再下一人以"幸运的是……"回应，将负面转折再转回正面。</li><li>持续交替，每个转折都必须<strong>接纳</strong>上一个转折为已发生的事实。</li></ol>
<h2>进阶变体</h2><ul><li><strong>快速版</strong>：每人 5 秒内必须接上，不能犹豫</li><li><strong>类型版</strong>：故事限定为特定类型——恐怖片的"幸运/不幸"、职场版的"幸运/不幸"</li></ul>
<h2>教学提示</h2><p>这个游戏训练的是<strong>无论发生什么，都把它变成故事的一部分</strong>——这正是即兴中"拥抱失败"的核心精神。带领者要观察：是否有人在"不幸"后拼命想把故事拉回自己预设的方向？那就是在 Block 上一个转折。好的接法是<strong>在别人给的不幸里发现幸运的种子</strong>。</p><p><strong>训练的核心能力</strong>：接纳任何转折（即使是负面的）、在限制中发现可能性。</p>`
  },

  'm3-17': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['团体接纳','联想','空间'],
    usage: 'both', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '我是树（I Am a Tree）—— 一个人变成一棵树，两个人为它添上世界',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">团体接纳 · 联想 · 空间构建</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>A 走到舞台中间，摆出一个姿势，说"我是一棵树"。</li><li>B 上台，用自己的身体添加一个与树相关的元素，说"我是树上的一只鸟"。</li><li>C 上台，继续添加，说"我是树下的一个看书的人"。</li><li>A 从三人画面中选择一人留下（如说"我带走看书的人"），两人离开舞台。</li><li>留下的人保持姿势，重复自己的身份（"我是树下的一个看书的人"），成为新一轮的起点。</li></ol>
<h2>进阶变体</h2><ul><li><strong>抽象版</strong>：不只是具体物件，可以是抽象概念——"我是知识""我是风"</li><li><strong>声音版</strong>：每个上台的人不仅摆姿势，还要发出声音</li><li><strong>故事串联</strong>：三个人的画面形成后，从静止变成动态——即兴一个 30 秒场景</li></ul>
<h2>教学提示</h2><p>我是树是即兴中最经典的"接纳与添加"游戏之一。它完美展示了 Yes And 的即兴原理——每个人都在前面的人建立的世界里添加，而不是创建自己的世界。带领者要鼓励大家<strong>上台要快</strong>——不要站着想"最好的"添加，第一个想到的就是最好的。</p><p><strong>训练的核心能力</strong>：团体接纳、快速联想、用身体构建空间画面。</p>`
  },

  'm3-18': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: 'Yes And 与接纳', skills: ['灵活性','场景','接纳'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '新选择/叮叮重来/换换换（New Choice）—— 每个选择都可以重来',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">灵活性 · 场景 · 接纳外部输入</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人开始一个即兴场景。</li><li>带领者（或观众）可以随时喊"新选择！"——刚刚说了台词或做了动作的演员，必须立刻用<strong>完全不同的台词或动作</strong>重来一遍。</li><li>如果不好笑/不合适，带领者可以继续喊"新选择！新选择！"直到找到一个有趣的方向。</li><li>场景在新选择的基础上继续推进。</li></ol>
<h2>进阶变体</h2><ul><li><strong>情绪新选择</strong>：带领者喊的不是"新选择"而是具体情绪——"更愤怒！""更悲伤！""像老鼠一样害怕！"</li><li><strong>类型新选择</strong>：喊出不同的类型——"恐怖片版本！""韩剧版本！"</li></ul>
<h2>教学提示</h2><p>新选择游戏训练的核心是：<strong>你的第一个选择不一定是最好的——但没关系，你可以换一个</strong>。这打破了"我必须第一次就做对"的心理压力。带领者要注意：不要让一个演员被喊 5 次以上"新选择"还没有满意的结果——那会让人焦虑，反而适得其反。2-3 次就够了。</p><p><strong>训练的核心能力</strong>：接受外部指导、快速产生多种选择、不执着于第一个想法。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：叮叮重来 / 换换换</p>`
  },

  // ---- C. 角色塑造（8 个） ----

  'm3-19': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['角色切换','身体','反应力'],
    usage: 'training', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 2,
    title: '角色旋转门（Character Revolving Door）—— 瞬间转换角色',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色切换 · 身体 · 反应力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人开始一个即兴场景。</li><li>第三个人站在一旁，随时拍手喊"换角色！"</li><li>正在表演的两人必须立刻甩掉当前角色，用全新的身体质感、声音和动作建立全新角色——但场景情境和环境保持不变。</li><li>可以连续切换多次，每次都是全新角色。</li></ol>
<h2>进阶变体</h2><ul><li><strong>保留情绪版</strong>：换角色，但保留上一个角色的情绪</li><li><strong>传递角色</strong>：换角色时，其中一人保留角色，另一人切换——然后被切换的人回来时，又带回一个新角色</li></ul>
<h2>教学提示</h2><p>角色旋转门训练的是<strong>不依附于任何一个角色</strong>。有些演员会不自觉地陷入"这一个角色我演得好"的执着——切换迫使你放手。带领者要鼓励大家每次切换都在身体上做出明确变化——换重心、换节奏、换声音。是身体切换驱动角色切换，而不是脑子。</p><p><strong>训练的核心能力</strong>：快速建立和丢弃角色、用身体而非大脑驱动角色切换。</p>`
  },

  'm3-20': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['身体意识','角色','空间'],
    usage: 'training', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '身体带领（Body Lead）—— 让你的身体部位为你选角色',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体意识 · 角色建立 · 空间行走</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人在空间中自由行走。</li><li>带领者喊出一个身体部位——"鼻子！""胸部！""膝盖！""额头！""肚子！"</li><li>所有人立刻让这个身体部位"带领"走路——如果是鼻子，就像鼻子在拖着你往前走。</li><li>体会每个身体部位如何改变你的心理状态——鼻子带领带来好奇心，胸部带领带来自信/骄傲，膝盖带领带来卑微/畏缩。</li><li>每个部位 30 秒，切换 5-6 个部位。</li></ol>
<h2>进阶变体</h2><ul><li><strong>两人互动版</strong>：在身体带领行走中找到另一个同样"部位"的人，互动 30 秒</li><li><strong>场景开始版</strong>：最后随机停在一个部位，和最近的人以此为角色开始一个场景</li></ul>
<h2>教学提示</h2><p>这是 Viola Spolin 最经典的练习之一。它直观地展示了<strong>身体先于大脑</strong>的即兴原则——你不需要"想"一个角色，你的身体已经在为你创造一个。带领者要示范：自己做第一个部位的夸张版本，让所有人看到"夸张是被鼓励的"。</p><p><strong>训练的核心能力</strong>：用身体改变心理、探索身体与角色之间的直接联系。</p>`
  },

  'm3-21': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['角色','观察','身体'],
    usage: 'training', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 2,
    title: '动物人性化（Animal to Human）—— 把动物的质地带给人类角色',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色质感 · 观察力 · 身体转化</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>每人选一种动物。第一阶段 1 分钟：四脚着地纯粹模仿该动物。</li><li>第二阶段 1 分钟：慢慢站起来，保留动物的身体质感（乌龟的慢、蜂鸟的快）。</li><li>第三阶段：加上人的行为和语言——身体质感仍是动物——创造出一个独特的人。</li></ol>
<h2>进阶变体</h2><ul><li><strong>动物互动</strong>：两个"动物人"相遇互动一个场景</li><li><strong>动物职业</strong>：给每个动物人分配一个职业——乌龟 CEO、猫哲学家</li></ul>
<h2>教学提示</h2><p>动物练习通过外部参照建立角色质感。观察真实动物是关键：它的呼吸节奏？如何回应环境？带领者提示："不要演'你认为的猫'——演你观察到的猫。"</p><p><strong>训练的核心能力</strong>：通过外部参考建立角色身体质感、拓展角色类型的范围。</p>`
  },

  'm3-22': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['声音角色','角色范围','表达'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 1,
    title: '声音面具（Voice Mask）—— 用声音创造完全不同的人',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">声音角色 · 角色范围 · 表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>选一句中性台词（如"请把那个给我"）。</li><li>每人用 5 种完全不同的声音说出来——改变音高、语速、音色、共鸣位置。</li><li>每种声音应暗示不同角色。进阶：两人用各自的声音角色开始场景。</li></ol>
<h2>进阶变体</h2><ul><li><strong>声音接力</strong>：A 用一个声音说台词，B 用同一个声音回应</li><li><strong>声音+身体</strong>：每个声音配合身体姿态互相强化</li></ul>
<h2>教学提示</h2><p>很多新手只用"自己的声音"演戏，声音面具帮他们探索声音作为角色入口。带领者鼓励极端声音——包括"不好听"的声音，也可能是好角色。关键原则：声音变→角色变→心理变。</p><p><strong>训练的核心能力</strong>：拓展声音表达范围、通过声音快速进入角色。</p>`
  },

  'm3-23': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['角色深度', '即兴回答', '角色一致性'],
    usage: 'both', players: {min:3, max:10, label:'3-10 人'}, difficultyNum: 2,
    title: '角色热椅（Character Hot Seat）—— 采访一个角色直到你认识他',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-10 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色深度 · 即兴回答 · 角色一致性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>一人坐在"热椅"上，以角色身份面对观众。</li><li>观众/其他演员可问任何问题——关于角色的生活、秘密、喜好。</li><li>角色必须在角色中即兴回答所有问题。5-10 分钟后结束。</li></ol>
<h2>进阶变体</h2><ul><li><strong>双人热椅</strong>：两个角色同时接受采访，关系在问答中展开</li><li><strong>类型限定</strong>：角色来自特定类型——奇幻、历史、未来</li></ul>
<h2>教学提示</h2><p>角色热椅训练角色一致性和压力下保持角色的能力。对新手的提示：如果卡住，带领者可以问更简单的问题（"你早餐吃了什么？"）。好的热椅能让人惊喜地发现角色比自己想象中丰富得多。</p><p><strong>训练的核心能力</strong>：无准备下维持角色、通过回答发现角色的深度。</p>`
  },

  'm3-24': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['角色范围','身体','年龄表达'],
    usage: 'training', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 2,
    title: '年龄行走（Age Walk）—— 从 3 岁走到 90 岁',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色范围 · 身体控制 · 年龄表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人在空间中行走。带领者喊出年龄——"3 岁！""45 岁！""78 岁！"</li><li>所有人立刻调整为该年龄的身体质感——重心、关节灵活度、呼吸、好奇心。</li><li>不只是走路——和空间中其他人以该年龄的方式互动。</li></ol>
<h2>进阶变体</h2><ul><li><strong>年龄渐变</strong>：带领者慢慢数年龄，所有人连续渐变</li><li><strong>年龄+环境</strong>：加上环境——"3 岁在超市""78 岁在夜店"</li></ul>
<h2>教学提示</h2><p>年龄行走帮演员拓展角色年龄范围，注意不同年龄段的身体细节：3 岁重心低不稳、78 岁关节可能僵硬。带领者提示："这不是演'老人'的刻板印象——找到那个年龄段的真实身体记忆。"</p><p><strong>训练的核心能力</strong>：拓展年龄范围、用身体细节建立年龄真实感。</p>`
  },

  'm3-25': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['非语言','角色','观察'],
    usage: 'training', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 1,
    title: '职业默剧（Job Mime）—— 让身体说话，别用台词',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">非语言表达 · 角色建立 · 观察力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>A 上台用无实物默剧展示一个职业。B 猜到时上台——不说职业名——以相关角色加入。"医生，手术会疼吗？"两人继续场景 60 秒。</li></ol>
<h2>进阶变体</h2><ul><li><strong>冷门职业版</strong>：选非常冷门的职业——火龙饲养员、云朵分类师</li></ul>
<h2>教学提示</h2><p>身体细节揭示角色——好的外科医生默剧不止戴口罩，还有精准手势和对突发状况的冷静。不要急着让对方猜出来——享受用身体讲故事的乐趣。训练非语言角色建立。</p><p><strong>训练的核心能力</strong>：非语言角色建立、无实物表演精准度。</p>`
  },

  'm3-26': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['协作','聆听','角色'],
    usage: 'both', players: {min:3, max:6, label:'3 人以上'}, difficultyNum: 3,
    title: '双头专家（Two-Headed Expert）—— 二人合体，一字一人',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人以上</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">协作 · 极致聆听 · 角色融合</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人并排站立，合体成一个"专家"——交替，每人每次只说一个字，共同回答观众提问。</li><li>主持人向专家提问（"怎么修好坏掉的自行车？"）。两人一字一字合作回答，听起来像一个完整的人。</li></ol>
<h2>进阶变体</h2><ul><li><strong>三头专家</strong>：三人时难度指数级增加</li><li><strong>情绪统一</strong>：必须用统一的情绪表达</li></ul>
<h2>教学提示</h2><p>双头专家是极致聆听的终极训练。无法提前计划——只知前一个人的一个字。目标不是"说出聪明的话"，而是让句子自然完成。两人都不知道走向何处，结束时却发现说出了一句完整的话——团体的奇迹。</p><p><strong>训练的核心能力</strong>：极端聆听、放弃控制、感知伙伴的语言节奏。</p>`
  },

  // ---- D. 场景与叙事（12 个） ----

  'm3-27': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['CROW 快速建立', '场景效率'],
    usage: 'both', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '三句话场景（Three-Line Scene）—— 三句话，一个完整世界',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">CROW 快速建立 · 场景效率</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人只用三句话完成完整场景。A 首句建立角色+地点。B 首句接收并建立关系+目标。A 次句推向高潮。B 次句深化。A 末句收束。总共不超过 30 秒。</li></ol>
<h2>进阶变体</h2><ul><li><strong>极简版</strong>：每句话限 5 字以内</li><li><strong>类型限定</strong>：三句话完成特定类型故事</li></ul>
<h2>教学提示</h2><p>三句话场景训练即兴的"经济性"——每句台词同时做多件事。带领者提示："不要在第一句话提问——第一句话就是 Offer。"训练高效场景建立、用最少的话说最多的故事。</p><p><strong>训练的核心能力</strong>：高效场景建立、信息密度、简约的力量。</p>`
  },

  'm3-28': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['内心独白','角色层次','场景深度'],
    usage: 'both', players: {min:4, max:4, label:'4 人'}, difficultyNum: 2,
    title: '字幕机（Subtitles）—— 他人为演员念出内心独白',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">内心独白 · 角色层次 · 场景深度</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演即兴场景。另外两人各站在一个演员身后，做该演员的"内心独白"——说角色此刻内心真实想法。</li><li>演员听到内心独白后，必须融入表演——影响角色的情绪、决定或下一句台词。</li></ol>
<h2>进阶变体</h2><ul><li><strong>对立字幕</strong>：内心独白故意和角色行为相反制造张力</li></ul>
<h2>教学提示</h2><p>字幕机训练角色"里层"和"表层"的张力——戏剧中最有力的工具之一。做字幕机的人：你的独白要丰富角色，不是拆台。说出来的内心想法应该让角色更复杂、更人性化。</p><p><strong>训练的核心能力</strong>：表达角色隐藏层次、接受外部信息并有机融入。</p>`
  },

  'm3-29': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['接受指导', '灵活性', '场景调整'],
    usage: 'both', players: {min:3, max:6, label:'3 人以上'}, difficultyNum: 2,
    title: '导演椅（Director\'s Chair）—— 导演随时喊停',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人以上</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">接受指导 · 灵活性 · 场景调整</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演场景。一位"导演"可随时喊停并给出调整——换情绪、慢速度、交换角色、回退、加类型。演员必须立刻执行。</li></ol>
<h2>进阶变体</h2><ul><li><strong>观众导演</strong>：观众喊指令，增加不可预测性</li></ul>
<h2>教学提示</h2><p>导演椅训练的核心是"放下自我，接受外部输入"。把导演的每个指令当作礼物而非批评。训练立即执行外部指导、在被打断后快速恢复场景。</p><p><strong>训练的核心能力</strong>：立即接受外部指导、在被打断后快速恢复。</p>`
  },

  'm3-30': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['身体控制','灵活性','叙事'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '倒退剧（Rewind）—— 倒带重来，换方向继续',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体控制 · 灵活性 · 叙事意识</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演场景。带领者随时喊"倒退！"——演员将刚才的动作和台词倒着演一遍（像视频倒放）。然后喊"播放！"——场景从那个时间点重新前进，可能走向完全不同方向。</li></ol>
<h2>进阶变体</h2><ul><li><strong>定点倒退</strong>：指定倒退到某个具体时刻——"倒退到他说'我爱你'之前！"</li></ul>
<h2>教学提示</h2><p>倒退剧训练身体控制精准度和情境意识。倒退不仅是物理倒退，也是情绪倒退（从愤怒退到困惑再退到好奇）。演员需清晰记忆自己刚才的动作。</p><p><strong>训练的核心能力</strong>：身体记忆、时序感知、在同一场景发现多种可能。</p>`
  },

  'm3-31': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['限制下创作', '语言灵活性'],
    usage: 'both', players: {min:2, max:2, label:'2 人'}, difficultyNum: 3,
    title: 'ABC 场景（Alphabet Scene）—— 每句话的首字母必须按字母表顺序',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">限制下创作 · 语言灵活性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演场景。每句话的首字母必须按字母顺序——A 的第一句话以 A 开头，B 以 B 开头，依次推进。</li><li>到了 Z 之后场景自然结束。目标是让场景在字母限制下仍然保持自然和有意义。</li></ol>
<h2>进阶变体</h2><ul><li><strong>反向 ABC</strong>：从 Z 倒退到 A</li><li><strong>随机字母</strong>：观众随时喊出任意字母，演员的下一句必须以此开头</li></ul>
<h2>教学提示</h2><p>限制激发创造力。ABC 场景在有表演场合很受欢迎——观众能看到演员在可见的压力下创作。如果卡在某字母上，用一个简单的词开局（如 X 可以用"X 光显示……"、Q 用"请（Qǐng）……"）。中文环境下可灵活处理——用拼音首字母而非英文。</p><p><strong>训练的核心能力</strong>：在严格限制下保持场景自然流动、语言灵活性。</p>`
  },

  'm3-32': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['叙事跨度','角色','情感'],
    usage: 'both', players: {min:2, max:3, label:'2-3 人'}, difficultyNum: 2,
    title: '时间跳跃（Time Jump）—— 在时间中穿越角色的一生',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">叙事跨度 · 角色发展 · 情感</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人（同一对角色关系，如"母女"）表演三个不同时间的场景：10 年前、现在、10 年后。</li><li>带领者或观众喊"回到十年前！""快进到十年后！"</li><li>角色必须保持一致但又有符合时间跨度的变化——10 年后的妈妈声音更慢了、女儿更自信了。</li></ol>
<h2>进阶变体</h2><ul><li><strong>随机跳跃</strong>：不限于三个时间点——可以跳到角色第一次见面的那一天、退休的那一天</li><li><strong>情感锚点</strong>：每次跳跃都跳到角色关系中"最重要的那一天"</li></ul>
<h2>教学提示</h2><p>时间跳跃训练角色在时间跨度中的一致性。同一个角色在 25 岁、45 岁、65 岁的身体质感不同——但核心性格（急脾气/温柔/自卑）应该保持一致。带领者提示："时间的流逝应该改变角色的一些东西，但不是一切。"</p><p><strong>训练的核心能力</strong>：角色一致性、时间跨度中的角色发展。</p>`
  },

  'm3-33': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['身体控制','叙事','专注'],
    usage: 'both', players: {min:3, max:4, label:'3-4 人'}, difficultyNum: 2,
    title: '慢动作解说（Slow Motion Commentary）—— 体育解说的即兴版',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">4-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体控制 · 叙事 · 专注力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演一个场景，但全程用<strong>极慢的动作</strong>（如在水中）。</li><li>另外两人站在一旁做"体育解说员"——用激情澎湃的语气解说慢动作中的每一个细节。"他正在……抬起……他的……右手……这个动作……意义非凡……"</li></ol>
<h2>进阶变体</h2><ul><li><strong>多语解说</strong>：不同解说员用不同语言或方言</li><li><strong>突然加速</strong>：某瞬间喊"正常速度！"——演员恢复正常速度，解说员要跟上</li></ul>
<h2>教学提示</h2><p>慢动作对身体的挑战很大——保持极慢且连续的动作需要极强的身体控制力。解说的角色则训练"观察细节并赋予意义"的能力。这也是一个非常受观众欢迎的表演游戏。</p><p><strong>训练的核心能力</strong>：精准的身体控制、观察并赋予日常动作戏剧意义。</p>`
  },

  'm3-34': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['场景结构','聆听','连接'],
    usage: 'both', players: {min:4, max:8, label:'4-8 人'}, difficultyNum: 3,
    title: '抽屉/柱子（Pillars / Drawers）—— 观众给词填空，串联场景',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-8 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">场景结构 · 聆听 · 主题连接</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给出 3-4 个关键词（如"雨伞""婚礼""辞职信"）。</li><li>演员表演一系列独立的短场景，每个场景必须<strong>有机地使用</strong>其中一个关键词作为核心元素。</li><li>随着演出推进，这些看似无关的场景开始<strong>自然地交织</strong>——角色从不同场景中相遇、物品在不同场景中出现、主题在不同故事中回响。</li></ol>
<h2>进阶变体</h2><ul><li><strong>单人抽屉</strong>：一个演员必须记住并维持所有场景中的所有角色</li></ul>
<h2>教学提示</h2><p>这是从短即兴过渡到长即兴的绝佳训练——它给演员一个结构化的框架（关键词），同时又要求他们保持开放——让不同场景之间的连接不是强制发生，而是在表演中自然浮现。带领者提示："不要急着让你场景中的角色和上一个场景的角色相遇——让连接自然发生，或者完全不相遇也可以。"</p><p><strong>训练的核心能力</strong>：多场景结构意识、在限制框架内发现自由。</p>`
  },

  'm3-35': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['多角色','空间','叙事'],
    usage: 'both', players: {min:1, max:2, label:'1-2 人'}, difficultyNum: 3,
    title: '空椅子（Empty Chair）—— 一个人撑起整个世界',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">1-2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">多角色 · 空间构建 · 独白叙事</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>舞台上放一把空椅子。一个演员独自上台，面对空椅子。</li><li>空椅子代表<strong>一个不在场但对角色至关重要的人</strong>。</li><li>演员对空椅子说话——通过独白，观众逐渐了解椅子代表谁、角色和那个人之间发生了什么。</li></ol>
<h2>进阶变体</h2><ul><li><strong>多把椅子</strong>：舞台上有多把椅子，每把代表不同的人</li><li><strong>角色切换</strong>：演员换坐到椅子上时，就变成椅子代表的那个人——两个角色交替对话</li></ul>
<h2>教学提示</h2><p>空椅子是即兴中的"独奏曲"——它迫使演员在没有伙伴支持的情况下创造出完整的世界。这也是很好的角色深入练习。带领者提示："让你的角色真正<strong>看见</strong>那把椅子上坐着的人——你对他们说话的方式、你的身体反应、你的停顿，都会让观众也'看到'那个人。"</p><p><strong>训练的核心能力</strong>：独白能力、通过独白建立不在场的角色、构建情感深度。</p>`
  },

  'm3-36': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['高赌注场景', '情感真实'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '世界末日（Armageddon）—— 地球上最后 N 分钟的对话',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">高赌注场景 · 情感真实</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>带领者宣布："距离世界末日还有 5 分钟。你们是最后两个（或几个）还活着的人。"</li><li>演员在倒计时中展开对话——可以是任何关系、任何地点。</li><li>带领者每隔一分钟报时——"还剩 3 分钟""还剩 60 秒""10, 9, 8……"。</li><li>场景在倒计时零时结束。</li></ol>
<h2>进阶变体</h2><ul><li><strong>具体末日</strong>：不是"世界末日"而是特定情境——"最后一家咖啡馆关门前的最后十分钟"</li></ul>
<h2>教学提示</h2><p>世界末日训练的是<strong>在高赌注（Stakes）情境下保持情感真实</strong>。很多新手在"世界末日"的压力下要么过度夸张（哭天喊地），要么回避（假装什么都没发生）。好的表演在其中找到平衡——角色知道末日来了，但仍然在努力过好最后的几分钟。</p><p><strong>训练的核心能力</strong>：在高赌注下保持情感真实、在限制时间内完成情感弧线。</p>`
  },

  'm3-37': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['风格切换','类型','灵活性'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 3,
    title: '类型重演（Genre Replay）—— 同一场景反复重演不同版本',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">风格切换 · 类型认知 · 灵活性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人先表演一个 60 秒的中性场景（如"两人在餐厅分手"）。</li><li>然后<strong>同一场景</strong>用不同风格重演：西部片版本、恐怖片版本、莎士比亚版本、韩国爱情剧版本……</li><li>每次重演，角色的核心关系和情境保持不变——但世界规则、身体质感、语言风格完全切换。</li></ol>
<h2>进阶变体</h2><ul><li><strong>观众选类型</strong>：每轮让观众喊出一个类型</li><li><strong>混合类型</strong>：同时用两种类型——"西部片+音乐剧"</li></ul>
<h2>教学提示</h2><p>类型重演训练的是对<strong>不同类型的深层理解</strong>——不只是表面元素（恐怖片=尖叫），而是类型的节奏和情感核心。带领者提示："抓住类型的情感核心——黑色电影的宿命感、浪漫喜剧的渴望——而不是表面特征。"</p><p><strong>训练的核心能力</strong>：类型驾驭、快速切换表演风格、抓住类型的本质。</p>`
  },

  'm3-38': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['角色深入', '即兴采访'],
    usage: 'performance', players: {min:2, max:6, label:'2 人以上'}, difficultyNum: 2,
    title: '采访者（The Interviewer）—— 采访中逐步发现角色世界',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人以上</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色深入 · 即兴采访</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>一人扮演主持人（身份中立）。另一人扮演一个特定角色（如"世界上最后一个记得怎么手写汉字的人"）。</li><li>主持人采访该角色，逐渐深入——从表面问题到私人问题。</li><li>通过采访，观众和演员一起发现这个角色的完整世界。</li></ol>
<h2>进阶变体</h2><ul><li><strong>突发新闻</strong>：采访中主持人突然宣布一条"新闻"，角色必须角色内回应</li></ul>
<h2>教学提示</h2><p>采访者训练角色一致性和即兴回答的能力。主持人的提问质量决定游戏深度——好的主持人会"听"角色的回答、从回答中找出下一个问题，而不是机械地按清单提问。</p><p><strong>训练的核心能力</strong>：通过提问和回答共同构建角色、在角色中保持一致性。</p>`
  },

  // ---- E. 地位与情绪（10 个） ----

  'm3-39': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['地位感知', '身体表达'],
    usage: 'training', players: {min:2, max:2, label:'2 人'}, difficultyNum: 1,
    title: '地位数字（Status Numbers）—— 1 到 10，你的地位是几？',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">地位感知 · 身体表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人各从 1-10 中选一个秘密地位数字（10=极高地位）。不让对方知道。</li><li>两人开始一个即兴场景，按各自的地位数字扮演。</li><li>场景结束后，观众/观察者猜测两人的数字——然后演员透露真实数字。</li></ol>
<h2>进阶变体</h2><ul><li><strong>地位翻转</strong>：场景中途带领者喊"翻转！"两人交换数字</li><li><strong>地位渐变</strong>：暗中缓慢改变自己的地位数字——观察对方如何回应</li></ul>
<h2>教学提示</h2><p>地位数字是理解 Keith Johnstone 地位理论的最佳入门。核心洞察：地位不是社会身份，是行为的结果。一个 CEO（数字 3 的卑微身体语言）和一个清洁工（数字 8 的从容身体语言）之间的互动——这种反差会产生最有趣的戏剧。</p><p><strong>训练的核心能力</strong>：用身体表达不同程度的地位、感知和回应对方的地位信号。</p>`
  },

  'm3-40': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['地位互动','观察','适应'],
    usage: 'training', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 2,
    title: '地位扑克牌（Status Cards）—— 贴在额头上的身份',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">地位互动 · 观察 · 适应</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>准备扑克牌，数字越大地位越高。每人抽一张贴在额头上——<strong>自己看不见</strong>，别人能看见。</li><li>所有人开始一个场景，<strong>根据别人额头的数字来对待对方</strong>。</li><li>场景进行中，带领者随时给某人换牌——所有人调整互动方式。</li><li>结束后讨论感受。</li></ol>
<h2>进阶变体</h2><ul><li><strong>花牌</strong>：加入 J、Q、K、A——赋予特殊含义（J=小丑、K=国王的绝对权力）</li></ul>
<h2>教学提示</h2><p>地位扑克牌让演员体验"别人如何对待你，决定了你如何对待自己"。当别人都对你低三下四时，你自然就会挺起胸膛——即使你不知道自己额头贴的是 K。这个练习证明了地位是互动的结果，而非内在属性。</p><p><strong>训练的核心能力</strong>：感知别人如何根据你的"地位"对待你、理解地位是互动的产物。</p>`
  },

  'm3-41': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['地位变化', '戏剧张力'],
    usage: 'training', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '地位翻转（Status Flip）—— 一瞬间的权力倒转',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">地位变化 · 戏剧张力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>从一个明显的地位不对等场景开始（如老板-员工、老师-学生）。</li><li>带领者在任意时刻喊"翻转！"——此时低地位的演员必须找到一个<strong>自然的理由</strong>，让角色的地位瞬间高于对方。</li><li>翻转后场景继续——新的权力格局可能保持、可能再次翻转。</li></ol>
<h2>进阶变体</h2><ul><li><strong>多次翻转</strong>：一个场景中可能翻转 3-4 次</li><li><strong>隐形翻转</strong>：不喊"翻转"，而是演员自己感知到地位变化的时机并主动翻转</li></ul>
<h2>教学提示</h2><p>地位翻转是制造精彩戏剧的核心工具——观众最爱看的就是权力关系的颠覆。好的翻转不是随意的，它应该源自场景中自然浮现的契机——一句话、一个发现、一个秘密被暴露。带领者提示："不要只是突然变得嚣张——找到翻转的<strong>理由</strong>。"</p><p><strong>训练的核心能力</strong>：识别地位翻转的契机、自然地从一个地位过渡到另一个地位。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：高低姿态</p>`
  },

  'm3-42': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['情绪表达','反应力','能量'],
    usage: 'training', players: {min:4, max:20, label:'4-20 人'}, difficultyNum: 1,
    title: '情绪传送带（Emotion Conveyor Belt）—— 传递、放大、切换',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-20 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">情绪表达 · 反应力 · 能量</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人围成一圈。A 用一个情绪动作+声音面向 B。B 接收该情绪、<strong>放大</strong>、然后突然切换到一个<strong>全新的情绪</strong>，面向 C。</li><li>切换必须在 1 秒内完成。情绪的名字不需要说出来——用身体和声音来表达。</li></ol>
<h2>进阶变体</h2><ul><li><strong>情绪+台词</strong>：必须加上一句和情绪匹配的台词</li><li><strong>对立情绪</strong>：每次切换必须切换到上一个情绪的"反面"</li></ul>
<h2>教学提示</h2><p>情绪传送带训练情绪表达的<strong>范围和灵活性</strong>。很多人只会做"大情绪"（愤怒、狂喜）——带领者要鼓励细微的情绪（不安、释然、嫉妒、怀念）。情绪在身体里——改变了你的身体，情绪就变了。</p><p><strong>训练的核心能力</strong>：情绪的快速进入和切换、用身体而非大脑驱动情绪。</p>`
  },

  'm3-43': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['情绪范围', '快速切换'],
    usage: 'training', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '情绪区/四种情绪方格（Emotional Quadrant）—— 在能量和正负面之间跳转',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">情绪范围 · 快速切换</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>画一个虚拟 2×2 方格。横轴：负面情绪 → 正面情绪。纵轴：高能量 → 低能量。</li><li>两人做场景。带领者随时指向某个象限——演员立刻切换到对应象限的情绪。</li><li>四个象限：高能正面（狂喜）、低能正面（满足）、高能负面（暴怒）、低能负面（沮丧）。</li></ol>
<h2>进阶变体</h2><ul><li><strong>渐进移动</strong>：不只跳象限，而是在象限内缓慢移动——从沮丧到暴怒</li></ul>
<h2>教学提示</h2><p>这个游戏帮你理解情绪的<strong>两个核心维度</strong>：能量高低和正负面。很多新手的情绪表达只在一个维度上变化（只变能量、不变正负面）。带领者可以让大家讨论：哪些情绪是容易演的？哪些是不常演的？</p><p><strong>训练的核心能力</strong>：情绪的二维理解、在场景中灵活运用情绪范围。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：情绪区</p>`
  },

  'm3-44': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['非语言表达', '身体叙事'],
    usage: 'both', players: {min:2, max:3, label:'2-3 人'}, difficultyNum: 2,
    title: '无声场景（Silent Scene）—— 一句话不说，故事照样讲',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">2-4 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">非语言表达 · 身体叙事</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演一个完整场景——全程不允许说话。只能用身体、表情、空间关系、环境互动。</li><li>场景结束后，观众描述他们看到的故事——角色关系、发生了什么、情绪变化。</li></ol>
<h2>进阶变体</h2><ul><li><strong>声效版</strong>：可以发出非语言的声音（叹息、笑声、敲击）但不能说词</li><li><strong>慢速版</strong>：所有动作都慢速进行——像一出默剧芭蕾</li></ul>
<h2>教学提示</h2><p>无声场景是"展示而非讲述"的终极练习。你失去了台词这个拐杖——必须完全依赖身体和空间来建立 CROW。很多演员发现，无声场景中建立的关系反而比说话时更清晰，因为没有语言的噪音。</p><p><strong>训练的核心能力</strong>：非语言叙事、身体表达的精准度、"展示而非讲述"。</p>`
  },

  'm3-45': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['情绪控制', '角色灵活性'],
    usage: 'both', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '情绪过山车（Emotional Rollercoaster）—— 每 15 秒换一个情绪',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">情绪控制 · 角色灵活性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人做场景。带领者每 15-20 秒喊一个新情绪词——暴怒、狂喜、恐惧、嫉妒、释然……</li><li>两人必须立刻切换到新情绪，但<strong>保持场景情境和角色关系不变</strong>。</li><li>核心挑战：在情绪剧烈变化中仍保持角色和关系的连续性。</li></ol>
<h2>进阶变体</h2><ul><li><strong>自驱动过山车</strong>：没有带领者——演员自己在场景中感知何时需要切换情绪</li></ul>
<h2>教学提示</h2><p>情绪过山车训练情绪的快速进入和合理化能力。关键原则：不只是换表情——<strong>整个身体</strong>都要进入新情绪。同一个人在恐惧中和在狂喜中的身体是完全不同的。带领者提示："每一次情绪切换后，让新情绪推动你的下一句台词和下一个决定。"</p><p><strong>训练的核心能力</strong>：快速情绪切换、在角色连续性中容纳情绪变化。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 同名游戏</p>`
  },

  'm3-46': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['地位细腻度', '微妙表达'],
    usage: 'training', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 3,
    title: '隐藏地位（Hidden Status）—— 小声说话的人才是真正的老大',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">地位细腻度 · 微妙表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>每人抽一个秘密地位数字（1-10）。但规则是：<strong>不允许用明显的高低地位身体语言</strong>。</li><li>所有人必须用中性的身体和声音互动——仅通过<strong>微妙的</strong>眼神、停顿、措辞差异来体现地位。</li><li>结束后观众猜各人的地位数字。</li></ol>
<h2>进阶变体</h2><ul><li><strong>对话限制</strong>：所有人只能说同一句台词（"请坐"），仅用不同的方式说出以体现地位</li></ul>
<h2>教学提示</h2><p>隐藏地位训练的是地位的<strong>细腻维度</strong>。在现实中，高地位的人往往不是那个大喊大叫的人——他们是那个可以<strong>什么都不说</strong>但整个房间都在等他们反应的人。带领者引导："想想一个可以看到所有人心理活动的场景——谁在等谁的反应？"</p><p><strong>训练的核心能力</strong>：地位的微妙表达、用最小信号传递最大权力。</p>`
  },

  'm3-47': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['情绪控制','细腻度','耐心'],
    usage: 'training', players: {min:2, max:2, label:'2 人'}, difficultyNum: 3,
    title: '情绪渐变（Emotional Shift）—— 不知不觉中改变情绪',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">情绪控制 · 细腻度 · 耐心</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人从一种情绪开始场景。目标：让一个情绪<strong>在 90 秒内缓慢地、不可察觉地渐变</strong>到另一个完全相反的情绪。</li><li>观众不应感知到"切换点"——只应事后意识到变化发生了。</li></ol>
<h2>进阶变体</h2><ul><li><strong>双人同步渐变</strong>：两人的情绪同时但反向渐变——一个从爱到恨，一个从恨到爱</li></ul>
<h2>教学提示</h2><p>情绪渐变是情绪控制的进阶练习——它训练的是<strong>情绪的温柔变化，而非剧烈切换</strong>。专注于身体的微调：呼吸逐渐变浅、肩膀慢慢下沉、声音渐渐变轻。不是一次性全部改变——是每个瞬间只改变一点点。</p><p><strong>训练的核心能力</strong>：情绪的细微控制、身体信号的精准调节。</p>`
  },

  'm3-48': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['限制创作', '语言灵活性'],
    usage: 'both', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '只有提问（Questions Only）—— 不能说陈述句',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">限制创作 · 语言灵活性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演场景，但<strong>每一句话都必须是问句</strong>。不可以说陈述句。</li><li>如果有人说了一句陈述句——出局，换下一个人上场。</li><li>在全是问句的限制下，仍然要推进场景。</li></ol>
<h2>进阶变体</h2><ul><li><strong>只有命令</strong>：不能说问句——每句都是命令/祈使句</li><li><strong>交替模式</strong>：A 只能说问句，B 只能说陈述句</li></ul>
<h2>教学提示</h2><p>只有提问是一个有趣的反向练习——它揭示了"提问"和"提供信息"之间的区别。在正常即兴中，过多提问是新手常见错误（把推进场景的负担推给伙伴）。这个游戏故意放大提问——让演员体会在限制下如何用问题来间接提供信息。</p><p><strong>训练的核心能力</strong>：限制下的语言创造、用问句间接推进场景。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：只是问问题</p>`
  },

  // ---- F. 竞技与表演（12 个） ----

  'm3-49': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['简约表达', '限制创作'],
    usage: 'both', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '限词场景（Word Limit）—— 每句话只能说 N 个字',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">简约表达 · 限制创作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人表演场景，但带领者设定每句话的字数限制——"每人只能说 3 个字""每句话限 5 字"。场景中途可以改规则——"现在只能说 1 个字！""现在不限制了！"</li></ol>
<h2>进阶变体</h2><ul><li><strong>递减版</strong>：从 10 个字开始，每 30 秒减 1 个字——直到只能做无声场景</li></ul>
<h2>教学提示</h2><p>限制创造简洁之美。当只能用一个字说话时，身体的表达会自动变强——这就是"限制激发创造力"。这个游戏在竞技演出中观赏性很强——观众喜欢看演员在极限下挣扎和创造。</p><p><strong>训练的核心能力</strong>：简洁表达、在严格限制下用身体和声音的其余部分补偿。</p>`
  },

  'm3-50': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['声音叙事', '团体协作'],
    usage: 'performance', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 2,
    title: '广播剧（Radio Play）—— 只用声音讲故事',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">声音叙事 · 团体协作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有演员背对观众（或蒙眼）。</li><li>仅用声音——台词、音效、环境声——讲述一个完整的故事。</li><li>一个 MC 在旁引导。观众闭眼"收听"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>类型广播剧</strong>：限定类型——黑色侦探广播剧、科幻广播剧</li></ul>
<h2>教学提示</h2><p>去掉视觉，声音的表达力被放大。演员会发现自己自然的语调和音色变化。这也是很好的团队练习——因为没有视觉，必须<strong>精准地听</strong>才知道何时加入。现场音效（脚步声、开门声）由演员就地制造。</p><p><strong>训练的核心能力</strong>：纯声音叙事、听觉聆听、团队声音配合。</p>`
  },

  'm3-51': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['音乐即兴', '情感表达'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 3,
    title: 'Sing It/即兴歌曲（Improvised Song）—— 把场景唱出来',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">音乐即兴 · 情感表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人先做一个普通的即兴场景。当场景到达情感峰值时，演员将台词转为歌唱。</li><li>不需要完美的旋律或押韵——核心是用旋律表达角色无法用台词承载的情感。</li><li>其他演员可以加入和声或节奏。可以提前有伴奏或清唱。</li></ol>
<h2>进阶变体</h2><ul><li><strong>风格限定</strong>：必须唱成特定风格——歌剧、说唱、民谣、摇滚</li><li><strong>对唱</strong>：两人对唱，像音乐剧中的二重唱</li></ul>
<h2>教学提示</h2><p>很多演员最怕即兴歌曲——但这也是观众最爱看的。关键心态：你不是在参加歌唱比赛，你是在用旋律表达情感。跑调、破音都是角色的一部分。带领者提示："唱歌的时候，你的角色不需要是'一个好歌手'——你的角色只需要是一个有强烈感受的人。"</p><p><strong>训练的核心能力</strong>：用旋律拓展表达、在压力下保持创造性、将情感提升到"必须唱出来"的程度。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：Sing It</p>`
  },

  'm3-52': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['节奏控制', '压力管理'],
    usage: 'both', players: {min:2, max:2, label:'2 人'}, difficultyNum: 3,
    title: '倒计时场景（Countdown Scene）—— 与时间赛跑',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">节奏控制 · 压力管理</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>带领者设定倒计时——"这是一个 3 分钟的场景""还剩 2 分钟""60 秒""30 秒""10, 9, 8……"</li><li>演员必须在倒计时归零时让场景<strong>自然地达到一个情感高点</strong>——不是草草收场，而是刚好在那一刻故事讲完了。</li></ol>
<h2>进阶变体</h2><ul><li><strong>加速版</strong>：倒计时加速——第一遍 5 分钟，第二遍 2.5 分钟，第三遍 60 秒——同样场景越来越快</li></ul>
<h2>教学提示</h2><p>倒计时制造了可见的压力——观众能看到演员在和时间赛跑。训练的是在压力下保持故事质量的能力。不是在倒计时前"胡乱结束"，而是<strong>在限制时间内讲一个完整、有意义的场景</strong>。</p><p><strong>训练的核心能力</strong>：在时间压力下保持叙事质量、对场景节奏的精准控制。</p>`
  },

  'm3-53': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['多角色', '快速切换'],
    usage: 'both', players: {min:1, max:2, label:'1-2 人'}, difficultyNum: 3,
    title: '角色圈（Circle of Characters）—— 不同位置切换不同角色',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">1-2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">多角色 · 快速切换</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>演员站在一个固定的圆圈中心。圆圈的不同位置代表不同角色。</li><li>当演员移动到某个位置时——立刻变成该位置对应的角色。</li><li>演员在多个角色之间快速切换，不同角色之间可能有对话、冲突或合作。观众看到一个演员撑起一个密集的群戏。</li></ol>
<h2>进阶变体</h2><ul><li><strong>双人角色圈</strong>：两个演员各有自己的角色圈，两个圈中的角色可能相遇</li></ul>
<h2>教学提示</h2><p>角色圈考验演员的多角色记忆和身体切换能力。每个角色必须有明确的身体/声音特征，让观众一眼就认出是哪个角色。这也是一个展示个人即兴能力的"独奏"游戏。</p><p><strong>训练的核心能力</strong>：多角色管理、精准的角色切换信号、角色记忆。</p>`
  },

  'm3-54': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['语言转换', '抽象思维'],
    usage: 'both', players: {min:2, max:3, label:'2-3 人'}, difficultyNum: 2,
    title: '外星翻译官/诗人和翻译（Poet and Translator）—— 一个说胡话，一个翻人话',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">语言转换 · 抽象思维</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>A 是用一种<strong>自创的语言</strong>（Gibberish：无意义的音节，但有语调、节奏和情感）说话的外国诗人。</li><li>B 站在 A 旁边做"翻译"——将 A 的胡言乱语"翻译"成观众能理解的中文诗歌或演讲。</li><li>A 的 Gibberish 要有情感和意图——B 从语调中提取意义并翻译。</li></ol>
<h2>进阶变体</h2><ul><li><strong>多语诗人</strong>：诗人使用多种不同风格的 Gibberish——愤怒的抗议→温柔的告白</li></ul>
<h2>教学提示</h2><p>诗人和翻译是一个经典的"接纳"练习——翻译者必须完全接纳诗人的每一个声音和表情，并赋予它意义。诗人则训练非语言的情感表达——即使说的话没有意义，但情感必须清晰。两个人的配合让这个游戏既有笑点又有诗意。</p><p><strong>训练的核心能力</strong>：从非语言信号中提取意义、用情感驱动无意义的语言。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：外星翻译官</p>`
  },

  'm3-55': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['物件即兴', '联想能力'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '道具袋（Prop Bag）—— 给任何东西赋予故事',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">物件即兴 · 联想能力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众（或带领者）提前准备了一些随机物品——一把雨伞、一只手套、一个空瓶子。</li><li>演员从中随机抽取一样，当场编出一个以该物品为核心的故事或场景。</li><li>物品可以是它本身，也可以被"重新定义"——手套不是手套，而是一条失去了尾巴的变色龙。</li></ol>
<h2>进阶变体</h2><ul><li><strong>连锁道具</strong>：场景中途加入第二个、第三个随机道具——都必须有机融入</li></ul>
<h2>教学提示</h2><p>道具袋展示"任何东西都可以是一个 Offer"的即兴精神。关键原则：仔细观察道具——它的质感、重量、可能的历史——这些都会给出故事的线索。不要急着做决定，先和道具建立连接。</p><p><strong>训练的核心能力</strong>：从外部物件中提取故事灵感，给日常物品赋予戏剧性。</p>`
  },

  'm3-56': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['外部输入', '灵活性'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '飞鸽传书/捡纸条/对白纸条（Lines from a Hat）—— 把观众写的话塞进场景',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">外部输入 · 灵活性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>演出前让观众在小纸条上写任意一句话。所有纸条放入一个帽子。</li><li>两人做场景。在场景中的任意时刻，演员从帽子中抽一张纸条，<strong>读出纸条上的话</strong>作为下一句台词——不管那句话是什么。</li><li>演员必须立刻<strong>合理化</strong>这句话，让它自然地成为场景的一部分。</li></ol>
<h2>进阶变体</h2><ul><li><strong>强制融入</strong>：不仅读出来——必须把纸条上的话作为角色的"核心动机"</li></ul>
<h2>教学提示</h2><p>对白纸条是最受观众欢迎的即兴游戏之一——因为观众感觉自己也参与了创作。演员训练的是接受完全不可预测的外部输入并将其有机融入。即使纸条上的话看起来完全不搭——你的工作就是让它搭。</p><p><strong>训练的核心能力</strong>：接纳完全不可预测的外部信息、即时合理化能力。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：飞鸽传书 / 捡纸条</p>`
  },

  'm3-57': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['速度控制', '精准记忆'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '半衰期/半时重演（Half-Life）—— 同一场景，时间减半再减半',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">速度控制 · 精准记忆</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>演员先表演一个大约 60 秒的完整场景。</li><li>第二遍：同样的场景必须在 30 秒内完成。</li><li>第三遍：15 秒。</li><li>第四遍：7-8 秒——几乎是一场"即兴的超浓缩版"。每一遍都必须包含上一遍的核心内容。</li></ol>
<h2>进阶变体</h2><ul><li><strong>反向半时</strong>：从 10 秒开始，逐渐拉长——越来越慢、越来越细</li></ul>
<h2>教学提示</h2><p>半时重演训练的是<strong>抓住场景的本质</strong>——当时间减半时，你必须舍弃不必要的细节，只保留最核心的动作和台词。这个游戏在竞技演出中效果极佳——观众看着同样的场景被不断压缩，笑果逐次升级。</p><p><strong>训练的核心能力</strong>：抓取场景核心、在极短时间内完成完整叙事。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：半衰期</p>`
  },

  'm3-58': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['场景接龙', '快速反应'],
    usage: 'both', players: {min:4, max:12, label:'4-12 人'}, difficultyNum: 2,
    title: '拍手叫停/自由定格（Freeze Tag）—— 随时定格，抢位接戏',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-12 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">场景接龙 · 快速反应</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人开始一个场景。其他演员站在一旁。</li><li>旁观者随时可以喊"定格！"——两个演员立刻冻结在当前位置。</li><li>喊定格的人拍其中一个人的肩膀，替代他的位置，模仿被替代者的身体姿势——然后以此为起点开始一个<strong>全新的、不相关的场景</strong>。</li></ol>
<h2>进阶变体</h2><ul><li><strong>关联版</strong>：新场景必须和旧场景有某种关联——同一个主题或情感</li></ul>
<h2>教学提示</h2><p>自由定格训练的是通过身体姿势快速产生场景灵感。很多时候你被替换进一个奇怪的姿势——你的第一个联想就是你新场景的起点。带领者提示上台要快，不让你在想"最好的"。</p><p><strong>训练的核心能力</strong>：从身体姿势中获取场景灵感、快速启动新场景。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 别名：拍手叫停</p>`
  },

  'm3-59': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['观众互动', '接纳'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '观众导演（Audience Director）—— 观众说了算',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">观众互动 · 接纳</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>从观众中选 1-2 人做"导演"。他们在场景中随时可以喊停、给出调整指令——和"导演椅"的游戏类似，但导演来自观众席。</li><li>演员必须执行观众导演的每一个指令——不管多奇怪。</li></ol>
<h2>进阶变体</h2><ul><li><strong>全观众投票</strong>：主持人在几个选项中让全场观众喊出选择</li></ul>
<h2>教学提示</h2><p>观众导演将互动提升到最高级——观众不只是给出建议，而是直接影响演出的每个瞬间。这训练了演员对任何外部输入的开放态度。主持人要保护好演员——如果一个观众导演太刁难，主持人可以笑着干预。</p><p><strong>训练的核心能力</strong>：接受任何外部指导、在观众面前保持开放和灵活。</p>`
  },

  'm3-60': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['团体叙事', '悬疑构建'],
    usage: 'performance', players: {min:5, max:8, label:'5-8 人'}, difficultyNum: 3,
    title: '谋杀悬疑（Murder Mystery）—— 即兴的侦探故事',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5-8 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">团体叙事 · 悬疑构建</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众提供：受害者的名字、凶器、案发地点。</li><li>演员分别扮演侦探、嫌疑人、证人等——所有人轮流接受侦探的盘问。</li><li>没有人在事前知道"谁是真凶"——侦探通过盘问和推理，在演出结尾<strong>当场指认凶手</strong>。</li><li>被指认的人必须现场编出一个合理的"犯罪动机和过程"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>反转版</strong>：事先秘密指定一个演员为"真凶"——只有他自己知道——其他人都是清白但可疑的</li></ul>
<h2>教学提示</h2><p>谋杀悬疑是最复杂的即兴游戏之一——它融合了角色扮演、叙事构建、悬疑制造和团体协作。每个"嫌疑人"都要建立一些让自己可疑但又不至于太明显的特征。侦探要善于聆听，在众人的叙述中找到逻辑漏洞或有趣的方向。</p><p><strong>训练的核心能力</strong>：团体长叙事、悬疑构建、即兴推理、在不确定中保持角色一致性。</p>`
  },

  // ========== 📝 语言与文字（7个，m3-61 ~ m3-67） ==========

  'm3-61': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['文字创意','联想','限制'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '藏头诗 —— 诗句首字拼音决定台词开头',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">文字创意 · 联想 · 限制</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众或主持人提供一句诗（如"床前明月光"）。</li><li>演员的每一句台词首字，必须分别以诗句中每个字的<strong>拼音首字母</strong>开头（如"床"→ch → 首字拼音以 C 开头的词）。</li><li>场景在诗句的约束下自然推进——诗句越长，限制越严格。</li></ol>
<h2>进阶变体</h2><ul><li><strong>同音字版</strong>：不限于拼音首字母，直接用诗句中每个字的同音字作为台词首字</li><li><strong>逆序版</strong>：从诗句最后一个字倒着用</li></ul>
<h2>教学提示</h2><p>藏头诗是文字创意与即兴场景的结合。相比 ABC 场景（m3-31）的字母顺序限制，藏头诗用中文诗句作为限制源，更贴近中文即兴的语言特点。诗句的选择很重要——五言绝句比七言律诗更容易操作。</p><p><strong>训练的核心能力</strong>：限制下的语言创造、中文语音敏感度。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「ABC 场景」（m3-31）—— 用字母顺序作为台词限制</p>`
  },

  'm3-62': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['简约表达', '限制创作'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '限定字数 —— 每人固定不同字数',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">简约表达 · 限制创作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>给每个演员分配不同的字数限制——A 每句话只能说 1 个字，B 每句话只能说 5 个字，C 可以说 10 个字。</li><li>场景在这些不对等的限制下推进——字数少的演员被迫极度精炼，字数多的演员则承担信息传递的主力。</li><li>中途可以交换字数限制。</li></ol>
<h2>进阶变体</h2><ul><li><strong>字数渐变</strong>：所有人的字数每 30 秒同时 +1 或 -1</li><li><strong>情绪×字数</strong>：不同情绪对应不同字数</li></ul>
<h2>教学提示</h2><p>相比统一字数限制（m3-49），这个版本的不对等限制创造了更有趣的戏剧张力。字数最少的人往往用身体语言补偿——这正是训练的价值所在。带领者注意：把最少的字数给平时话最多的演员，把正常字数给话少的演员。</p><p><strong>训练的核心能力</strong>：极致简约、用身体补偿语言限制、在不对等条件下合作。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「限词场景」（m3-49）—— 统一字数限制版本</p>`
  },

  'm3-63': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['叙事生成','团体演绎','文字即兴'],
    usage: 'both', players: {min:2, max:60, label:'2-60 人'}, difficultyNum: 2,
    title: '打字机 —— 一人打字讲故事，众人即兴演绎',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-60 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">叙事生成 · 团体演绎 · 文字即兴</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>打字员</strong>（1 人）坐在舞台一侧，面前是一个"虚拟打字机"。打字员一边做打字的身体动作（配合音效），一边<strong>大声读出</strong>自己正在"写"的故事——"那天早上，玛丽亚打开窗户，看到了一个……巨大的……棉花糖……"</li><li><strong>其他演员</strong>在舞台中央——他们根据打字员读出的故事内容，<strong>同步即兴演绎</strong>剧情。打字员说"玛丽亚打开窗户"——演员就演玛丽亚开窗；打字员说"看到一个巨大的棉花糖"——另一个演员立刻变成棉花糖。</li><li>打字员控制故事的方向、节奏和细节——快敲快读快演，慢敲慢读慢演——打字员可以"删掉重写"（"等等，删掉删掉——她看到的是一个巨大的……披萨！"），演员必须立刻调整表演。</li><li>打字员是故事的"上帝"——演员必须完全跟随打字员的每一句话，不能超前也不能滞后。</li></ol>
<h2>进阶变体</h2><ul><li><strong>观众给开头</strong>：观众给出故事的第一句话——打字员从那里开始</li><li><strong>演员抢笔</strong>：某个演员突然"抢过"打字机——变成新的打字员，故事方向急转</li></ul>
<h2>教学提示</h2><p>打字机是一个将叙事生成和即兴表演完美融合的游戏。打字员拥有故事的控制权——但也要为演员留出表演空间（不要说得太快太密）。演员则训练<strong>瞬间将听到的文字转化为身体表演</strong>的能力。打字员的"删掉重写"是最大的笑点来源——演员刚演了一个巨大的棉花糖，立刻要改成演披萨。</p><p><strong>训练的核心能力</strong>：文字到表演的即时转化、叙事节奏控制、在外部指令下灵活切换表演。</p>`
  },

  'm3-64': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['押韵','语言反应','场景'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '你说什么 —— 押韵接力场景',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">押韵 · 语言反应 · 场景推进</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>2 人（或 3-4 人）进行一个场景。表演过程中，当某个演员听到队友说<strong>"你说什么？"</strong>——该演员必须<strong>把刚才那句话重新说一遍</strong>，但<strong>最后一个字必须与上一句台词的最后一个字押韵</strong>。</li><li>两人都可以对对方说"你说什么？"——迫使对方押韵换说法。自己也可以对自己说"你说什么？"来主动换说法。</li><li>押韵后的新说法必须仍然在角色和情境中——不能为了押韵脱离场景。</li><li>例：A 说"我觉得你今天很奇怪"→ B 说"你说什么？"→ A 必须押韵重说："我的心情确实有点<strong>坏</strong>"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>连续押韵</strong>：同一人连续被要求押韵 3 次——必须换 3 种不同韵脚</li><li><strong>多人版</strong>：3-4 人场景，任何人都可以喊"你说什么？"对任何人的台词</li><li><strong>不可重复版</strong>：押韵的字不能重复使用</li></ul>
<h2>教学提示</h2><p>你说什么？的核心是<strong>在语言压力下保持角色一致性</strong>。押韵的要求迫使演员动用大脑的语言库——但角色的情绪和行动不能因为押韵而中断。带领者要提醒演员：如果一时想不出押韵词，<strong>用动作拖延</strong>——做个动作、喝口水、叹口气——给自己多 2 秒思考时间。</p><p><strong>训练的核心能力</strong>：语言反应速度、押韵能力、在语言约束下保持角色。</p>`
  },

  'm3-65': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['合理化', '秘密信息', '场景推进'],
    usage: 'performance', players: {min:3, max:3, label:'3 人'}, difficultyNum: 2,
    title: '六句话 —— 三个演员，每人两句秘密台词',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">合理化 · 秘密信息 · 场景推进</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>观众给出 6 句台词</strong>——可以是任何离谱的句子（如"我的拖鞋会跳舞""今天是世界红豆日""请不要用香蕉敲我的门"）。写在纸条上。</li><li><strong>3 个演员各抽 2 句台词</strong>——<strong>每个人只知道自己的 2 句</strong>，完全不知道别人抽到了什么。</li><li>开始一个<strong>三人场景</strong>（或 2+1 人场景——两人先在台上，第三人伺机加入）。所有演员必须在场景中<strong>自然地、合理化地说出自己抽到的 2 句台词</strong>。</li><li>台词往往非常离谱且彼此毫无关联——演员的任务就是在场景推进中，让每一句离谱的台词都听起来"在这个场景里完全合理"。</li><li><strong>六句台词全部被说出来后演出结束</strong>。</li></ol>
<h2>进阶变体</h2><ul><li><strong>顺序指定</strong>：观众不仅给台词，还指定必须出现的顺序</li><li><strong>时间压力版</strong>：限时 3 分钟——超时未说完台词判为"未完成"</li></ul>
<h2>教学提示</h2><p>六句话的核心挑战是<strong>在不知道别人台词的情况下，让每个人都自然地把自己抽到的台词融入场景</strong>。因为你不知道别人的台词是什么，你无法提前"设计"剧情——只能倾听、接纳、并在合适的时机把自己的台词丢出来。诀窍：<strong>越早说越好</strong>——拖延只会让压力变大。当别人的台词非常离谱时，用你的反应来帮他合理化——"你刚刚说你的拖鞋会跳舞？……OK 我懂了，你一定是那个拖鞋品牌的代言人对吧。"</p><p><strong>训练的核心能力</strong>：将外部提示词有机融入场景、在信息不对等中合作、倾听与合理化。</p>`
  },

  'm3-66': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['押韵','歌曲','反应力'],
    usage: 'both', players: {min:3, max:15, label:'3-15 人'}, difficultyNum: 1,
    title: '嘟软软（Duruanruan）—— 押韵歌曲淘汰赛',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-15 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">押韵 · 歌曲 · 反应力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人围成一圈。先选定一个<strong>韵脚字</strong>（如"花"），所有人唱的每句歌词最后一个字必须押这个韵。</li><li>歌曲有固定的结构：每人轮流唱一句，格式为——<strong>XXXXXX,duruanruan → XXXXXX,duruanruan → odubiduye,XXXXXX → odubiduye,XXXXXX → odubiduye,XXXXXX → duruanruan……</strong>循环。</li><li>轮到你时，必须即兴唱出一句押韵的歌词——节奏保持，不能中断。</li><li><strong>如果有人唱错了押韵、卡住、或节奏断掉——淘汰下场</strong>。</li><li>玩 1-2 圈后可以<strong>更换韵脚字</strong>——所有人都要切换新韵脚。</li></ol>
<h2>进阶变体</h2><ul><li><strong>主题限定</strong>：所有歌词必须围绕一个主题——"食物""爱情""末日"</li><li><strong>故事接龙</strong>：每人的歌词必须接上一个人的故事——形成一首连环叙事歌</li><li><strong>双人 PK</strong>：两人面对面轮流唱，谁先卡住谁淘汰——其他人围观</li></ul>
<h2>教学提示</h2><p>嘟软软的核心是<strong>在节奏中快速押韵</strong>——不是完美的诗歌创作，而是保持流动。技巧：不要想"最好的"押韵词——用第一个跳进脑子的词。<strong>节奏比韵脚更重要</strong>——即使韵脚有点勉强，保持节奏的流畅才是关键。被淘汰的人可以加入"节奏组"——拍手、跺脚、B-box 为剩下的人打节奏。</p><p><strong>训练的核心能力</strong>：语言押韵速度、音乐节奏感、在淘汰压力下保持放松。</p>`
  },

  'm3-67': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '语言与文字', skills: ['语言节奏', '押韵', '表演'],
    usage: 'performance', players: {min:2, max:6, label:'2-6 人'}, difficultyNum: 3,
    title: 'Rap 大赛 —— 即兴说唱对决',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">语言节奏 · 押韵 · 表演</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>两人（或两组）进行即兴 Rap 对决。主持给出主题或一个 beat。</li><li>轮流即兴说唱回应对方的词——不要求完美押韵，但要求节奏感和即兴反应。</li><li>观众的欢呼声决定胜负。</li></ol>
<h2>进阶变体</h2><ul><li><strong>角色 Rap</strong>：每个 Rapper 必须先建立一个角色，以角色身份说唱</li><li><strong>接力 Rap</strong>：全组轮流每人一句，共同完成一首即兴 Rap</li></ul>
<h2>教学提示</h2><p>Rap 大赛是极具观赏性的表演游戏。关键不是押韵技巧，而是"不中断的流动"——即使没押上，也要保持节奏和自信。和即兴歌曲（m3-51）不同，Rap 更强调节奏和态度而非旋律。</p><p><strong>训练的核心能力</strong>：语言节奏感、压力下保持流动、即兴韵律创作。</p>`
  },

  // ========== 📖 场景与叙事 新增（19个，m3-68 ~ m3-86） ==========

  'm3-68': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['关系建立','场景切换','身体定位'],
    usage: 'both', players: {min:4, max:4, label:'4 人'}, difficultyNum: 2,
    title: '左转 —— 四格关系旋转场景',
    level: '★★☆', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">关系建立 · 场景切换 · 身体定位</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>4 个演员 ABCD 站成一个<strong>田字形方格</strong>（四角各站一人）。</li><li>相邻的两人之间设定一个<strong>固定的关系</strong>：AB 之间一个关系，BC 之间一个，CD 之间一个，DA 之间一个。例如 AB=父子，BC=师生，CD=邻居，DA=前任。</li><li>先从 AB 开始——两人根据他们的关系即兴表演一个场景。</li><li>任何人（演员或带领者）喊<strong>"左转！"</strong>——场景立刻切换到下一对关系（BC），两人必须 3 秒内启动新场景。</li><li>还可以喊<strong>"右转！"</strong>（回到上一对）、<strong>"再左转！"</strong>（跳两对）——共四个场景、四段关系。</li><li>回到同一对关系时，场景是<strong>延续</strong>的（而非重演），故事继续推进。</li></ol>
<h2>进阶变体</h2><ul><li><strong>对角线版</strong>：加入 AC、BD 的对角关系——变成六对</li><li><strong>观众定关系</strong>：每对关系由观众指定一个情境（如"在电梯里""在婚礼上"）</li><li><strong>逆时针全转</strong>：所有旋转反向进行，考验反向快速切换</li></ul>
<h2>教学提示</h2><p>左转的妙处在于<strong>空间位置就是关系提示</strong>——演员站到自己的格子上，对方是谁、你们什么关系，一目了然。转换要快——3 秒内必须进入新场景。四对关系要有多样性：不要全是"两人站着聊天"，可以有争吵、追赶、沉默共处——每种关系的互动方式完全不同。</p><p><strong>训练的核心能力</strong>：在固定关系中快速启动场景、空间定位角色关系、多关系快速切换。</p>`
  },

  'm3-69': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['关系建立','场景延续','团体'],
    usage: 'both', players: {min:4, max:7, label:'4-7 人'}, difficultyNum: 2,
    title: '面包机 —— 铃声驱动的多关系场景',
    level: '★★☆', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-7 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">关系建立 · 场景延续 · 团体协作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有演员坐在舞台最后方的一排椅子上。台下带领者（导演）有一个<strong>拍铃</strong>——声音像面包机烤好时"叮"的一声，演员听到铃声弹起来的样子也很像面包从烤面包机里跳出来。</li><li>第一次拍铃：带领者指定某些演员站起来（如"ACD！"），这组演员必须在舞台前方启动一个<strong>全新的场景</strong>。</li><li>再次拍铃：当前场景结束，所有人回到椅子上。再拍铃，指定新的组合站起来——<strong>如果是全新的一群演员</strong>，就要开始一个<strong>全新的场景</strong>；<strong>如果有和上一轮相同的演员</strong>，就要<strong>延续之前那个场景</strong>（继续同一个角色、同一个故事）。</li><li>站起来的人数可以任意——1 人、2 人、多人——每次都是新的可能性。同一群演员在不同场景中可能扮演完全不同的角色关系。</li><li>随着拍铃次数增多，多个场景和人物关系交织发展——有的是新故事，有的是旧故事的延续。</li></ol>
<h2>进阶变体</h2><ul><li><strong>盲拍版</strong>：带领者不指定谁站起来——拍铃后演员自己决定是否站起来（"这个场景需要我吗？"）</li><li><strong>跨场景交叉</strong>：允许不同场景的角色在后续拍铃中意外相遇</li><li><strong>时间跳跃版</strong>：延续的场景必须跳过一段时间（如"三年后"）</li></ul>
<h2>教学提示</h2><p>面包机的核心是<strong>关系的多样化和场景的延续性</strong>。带领者拍铃的节奏要把握好——太慢会冷场，太快会让演员没有时间充分发展场景。每次拍铃前，给当前场景一个自然结束的空间。演员要记住自己演过的所有角色——因为你不知道什么时候会被叫回去延续那个故事。这个游戏训练的不是"做一个好场景"，而是<strong>建立和维护多个角色关系</strong>。</p><p><strong>训练的核心能力</strong>：多角色管理、场景延续的连贯性、在不确定性中快速建立关系。</p>`
  },

  'm3-70': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['多层叙事','入场出场','团体'],
    usage: 'performance', players: {min:5, max:5, label:'5 人'}, difficultyNum: 3,
    title: '盗梦空间 —— 层层叠加再层层剥离',
    level: '★★★', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-20 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">多层叙事 · 入场出场 · 团体协作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>5 个演员，先要一个提示词。<strong>第 1 人（A）上台</strong>，根据提示词开始一个独场景。</li><li><strong>第 2 人（B）拍手喊停</strong>——1 人场景暂停，B 上台与 A 表演一个<strong>全新的 2 人场景</strong>（与前面的场景无关）。</li><li>以此类推：<strong>第 3 人（C）拍手喊停</strong>→ 3 人新场景；<strong>第 4 人（D）</strong>→ 4 人新场景；<strong>第 5 人（E）</strong>→ 5 人新场景。就像一层层进入更深的梦境。</li><li>5 人场景演到某个阶段后，<strong>最后上场的人（E）必须找一个合理化的理由离开</strong>——场景回到 4 人，但要接续之前的 4 人场景。</li><li>接着<strong>第 4 人（D）找理由离开</strong>→ 回到 3 人场景；以此类推，直到<strong>回到第 1 人（A）的独场景</strong>。</li><li>整个过程像梦境层层深入再层层醒来——每个人都在自己的"那一层"留下了故事。</li></ol>
<h2>进阶变体</h2><ul><li><strong>关系串联</strong>：每一层的新场景必须和上一层有某种隐秘的联系——让最后的"醒来"更有回响</li><li><strong>自由层数</strong>：不限于 5 人——可以 3 人快版，也可以 7 人长版</li><li><strong>倒梦版</strong>：反过来——从 5 人场景开始，逐层剥离到 1 人</li></ul>
<h2>教学提示</h2><p>盗梦空间最美的地方在于<strong>返回</strong>——当你从 5 人场景一层层退回到 1 人独场景时，观众和演员都会有一种"恍如隔世"的感觉。关键是每次进入和离开都要<strong>合理化</strong>——不是随便走掉，而是角色有理由地离开。第 1 人的独场景收尾尤其重要——它不需要"总结"所有层，但应该有一种<strong>经过一切之后</strong>的质感。</p><p><strong>训练的核心能力</strong>：多层叙事管理、合理化入场出场、场景记忆与延续。</p>`
  },

  'm3-71': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['入场出场','合理化','观众互动'],
    usage: 'both', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 2,
    title: '有来有往 —— 关键词触发上场与下场',
    level: '★★☆', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">入场出场 · 合理化 · 观众互动</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>每个演员从观众那里要一个<strong>提示词</strong>，写在纸上贴在胸口——所有人都能看到彼此的提示词。</li><li>先由<strong>2 个演员</strong>上台开启一个场景演出，其余演员在台下等待。</li><li>当台上的演员说出了<strong>某个台下演员胸口贴的提示词</strong>——那个台下演员必须<strong>立刻上场</strong>，并且<strong>合理化自己的出场</strong>（为什么要来到这个场景）。</li><li>同理，如果台上演员说到了<strong>某个台上演员自己的提示词</strong>——那个台上演员必须<strong>合理地下场</strong>离开。</li><li>台上演员可以<strong>故意 Q 自己的提示词</strong>来让自己下场——比如明知自己贴的是"咖啡"，可以故意说"我突然好想喝咖啡"然后借机离开。</li><li>随着提示词被触发，演员有来有往地上场和下场——场景因此不断产生新的人物和转折。</li></ol>
<h2>进阶变体</h2><ul><li><strong>隐藏提示词</strong>：演员自己不知道自己的提示词（贴在背后），必须从其他演员的反应中猜测</li><li><strong>情绪提示词</strong>：给的词是情绪而非物品——"愤怒""狂喜""委屈"，触发后的入场必须带该情绪</li><li><strong>多人版</strong>：6 人以上，可以同时多人被触发入场，制造"突然所有人都来了"的喜剧效果</li></ul>
<h2>教学提示</h2><p>这个游戏的核心乐趣在于<strong>"碰巧"</strong>说到了某个词——观众看到台上的演员浑然不觉地说出了触发词，而台下的演员必须立刻反应。关键原则：上台一定要<strong>合理化</strong>——不是简单地走上来站着，而是带着一个角色、一个目的、一个关系进入场景。台下演员要保持高度专注——你不知道什么时候自己的词会被说出来。</p><p><strong>训练的核心能力</strong>：合理化入场出场、在场景中保持警觉、观众提示词的有机融入。</p>`
  },

  'm3-72': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['叙事结构','场景','团体'],
    usage: 'performance', players: {min:4, max:10, label:'4-10 人'}, difficultyNum: 3,
    title: '三幕 —— 观众乱序选择，演员即兴串联',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-10 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">15-25 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">叙事结构 · 场景 · 团体</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给出一个故事主题（如"分手""中彩票""迷路"）。演员设计三个场景——场景 1（建立）、场景 2（冲突）、场景 3（结局）。</li><li>关键规则：<strong>三个场景的演出顺序由观众决定</strong>——观众可以喊"3-2-1！""2-1-3！""3-1-2！"等任意排列。</li><li>演员必须按照观众选择的乱序演出——场景 3（结局）可能在最前面，场景 1（建立）可能在最后。观众看到结局后不知道前因，看到建立后重新理解全貌。</li><li>无论什么顺序，三个场景都要有机串联——角色一致性、因果关系、情感逻辑不能因为乱序而断裂。</li></ol>
<h2>进阶变体</h2><ul><li><strong>五幕版</strong>：五个场景让观众排列组合——排列可能性指数级增加</li><li><strong>单场景翻牌</strong>：演员不知道下一个演哪个场景——观众在演出中随时翻牌决定</li><li><strong>重复场景</strong>：观众可以要求同一个场景演两次——第二次因为知道了"之前"的故事而完全不同</li></ul>
<h2>教学提示</h2><p>乱序三幕的核心训练价值：它打破了"叙事=线性时间"的惯性思维。演员被迫思考：如果观众先看到结局，这个场景怎么演才有悬念？如果观众先看到冲突，如何暗示"之前发生了什么"而不直接说出来？这是对叙事能力的极高挑战——也是观众参与感最强的即兴形式之一。</p><p><strong>训练的核心能力</strong>：非线性叙事、因果关系的灵活构建、在时间错位中保持角色一致性。</p>`
  },

  'm3-73': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['叙事','类型','团体'],
    usage: 'performance', players: {min:4, max:10, label:'4-10 人'}, difficultyNum: 2,
    title: 'My Movie —— 即兴拍一部电影',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-10 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-20 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">长篇叙事 · 类型 · 团体</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给出电影片名和类型。演员即兴"拍摄"这部电影——从开场到片尾。</li><li>一人担任"导演"，可以在场景外给出指示（如"换个角度""慢镜头""特写"）。</li><li>可以"回放""重拍""加特效"——所有电影语言都用身体和声音模拟。</li></ol>
<h2>进阶变体</h2><ul><li><strong>预告片版</strong>：只即兴一部电影的预告片——最精彩的片段拼接</li></ul>
<h2>教学提示</h2><p>My Movie 是一个容纳力极强的即兴格式——它可以吸收长即兴的叙事深度，也可以保持短即兴的节奏。关键是"导演"角色的运用——导演不是来救场的，是来为画面增添电影质感的。</p><p><strong>训练的核心能力</strong>：长篇叙事、电影语言的身体化表达、导演与演员的配合。</p>`
  },

  'm3-74': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['自由表达','场景','自发性'],
    usage: 'both', players: {min:2, max:6, label:'2-6 人'}, difficultyNum: 2,
    title: '自由格式 —— 无规则自由场景',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">自由表达 · 场景 · 自发性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>没有任何限制——没有指定角色、关系、地点、规则。</li><li>演员从空白开始，用第一个动作、第一句台词共同创造一个世界。</li><li>唯一的规则：Yes And——接纳每个涌现的方向。</li></ol>
<h2>进阶变体</h2><ul><li><strong>一分钟后加限制</strong>：自由演一分钟，然后突然加入某个限制（如"从现在开始只能说三个字"）</li></ul>
<h2>教学提示</h2><p>自由场景看似简单，其实最难——因为没有限制给方向，演员容易迷失。它测试的是纯粹的即兴本能：在没有扶手的情况下，你能否信任自己和伙伴？带领者可以在一段时间的"规则游戏"训练后，用自由场景来检验成长。</p><p><strong>训练的核心能力</strong>：完全开放的场景创造力、在没有结构中找到结构。</p>`
  },

  'm3-75': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['场景跟随', '聆听', '空间'],
    usage: 'performance', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 2,
    title: '跟随离开者 —— 场景随离开的角色走',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">场景跟随 · 聆听 · 空间</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>场景进行中。当一个角色"离开"当前场景（走出门、走出房间）——<strong>所有演员和场景焦点都跟随这个离开的角色</strong>，建立下一个场景。</li><li>上一个场景中的其他人可以留在原地——但焦点永远跟着"离开者"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>跟随留下者</strong>：焦点跟随留下的人——离开者彻底消失</li></ul>
<h2>教学提示</h2><p>跟随离开者训练场景过渡的有机性——不是主持人喊"下一场！"，而是让角色行动自然地带领观众进入新空间。这是长即兴中常用的过渡技巧。</p><p><strong>训练的核心能力</strong>：有机场景过渡、利用空间移动推动叙事。</p>`
  },

  'm3-76': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['场景记忆','快速切换','团体'],
    usage: 'performance', players: {min:3, max:10, label:'3-10 人'}, difficultyNum: 3,
    title: '即兴到死 —— 地点职业接力+高速复演',
    level: '★★★', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-10 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">15-30 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">场景记忆 · 快速切换 · 团体协作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>先向观众要<strong>10 个地点</strong>和<strong>10 个职业</strong>，写在纸条上备用。</li><li>演员相邻站位排成一排。按站位顺序，<strong>相邻两人一组</strong>（AB 一组、BC 一组、CD 一组……），每组抽取一个地点+职业提示词，即兴演出一个短场景。</li><li>演完 A 下场 C 上场，BC 演出；以此类推——所有人轮流与相邻的人搭戏，直到所有人都演过。</li><li><strong>第二轮：所有演员站位打乱顺序</strong>，在<strong>2 分钟内</strong>必须快速复演第一轮出现过的所有场景——要记住之前演过的内容、角色、关键台词，快速上下场。</li><li>速度是关键——2 分钟倒计时增加了巨大的压力和喜剧效果。</li></ol>
<h2>进阶变体</h2><ul><li><strong>30 秒版</strong>：终极加速——30 秒内复演所有场景</li><li><strong>反向复演</strong>：从最后一场倒着复演到第一场</li></ul>
<h2>教学提示</h2><p>即兴到死的精髓在第二轮——当演员们疯狂地回忆"我刚才演了什么？我是什么角色？我用什么声音？"时，观众看到的是<strong>记忆的崩塌和重建</strong>。第一轮时就要有意识地记住自己的角色和关键台词——因为你不知道第二轮和谁搭档。带领者计时要严格，2 分钟一到必须停止——不完整的复演也是笑点。</p><p><strong>训练的核心能力</strong>：快速场景记忆、高压下的角色切换、团体协作记忆。</p>`
  },

  'm3-77': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['火星语','肢体复现','团体接力'],
    usage: 'performance', players: {min:6, max:6, label:'6 人（3 组×2 人）'}, difficultyNum: 2,
    title: '那个游戏 —— 火星语场景复现接力',
    level: '★★☆', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">6 人（3 组×2 人）</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">火星语 · 肢体复现 · 团体接力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>6 个演员分成<strong>三组，两两一组</strong>。第一组先上台，进行一段<strong>正常的即兴场景表演</strong>（有正常台词、角色和情节）。第二组和第三组在台下观看。</li><li>第一组演完后下场。<strong>第二组上台，用火星语（无意义音节+肢体动作）复现刚才看到的第一组场景</strong>——不能使用任何真实语言，只能靠声音、动作、表情来传达场景内容。</li><li>第三组在台下认真观看第二组的火星语复现。</li><li><strong>第三组上台——他们根据看到的内容，用正常台词演出第三版场景</strong>。第三组演员需要猜测前两组演过什么，并用自己的理解和台词表达出来。</li><li>每一版都是不同的——肢体和情绪需要复现，但台词和细节每一次都在变形。就像电话传话游戏，但用即兴的方式。</li></ol>
<h2>进阶变体</h2><ul><li><strong>加长版</strong>：增加到 4-5 组，信息变形越来越夸张</li><li><strong>保留一个演员</strong>：每组保留上一组的一个演员——增加记忆压力</li></ul>
<h2>教学提示</h2><p>这个游戏最有趣的地方是<strong>信息的变形和丢失</strong>——第一组的"在咖啡店吵架"到第三组可能变成了"在太空站谈恋爱"。火星语版的演员要<strong>用身体讲清楚故事</strong>——不要只用嘴发出怪声音，肢体动作、空间关系、情绪变化才是信息传递的关键。第三组演员不要试图"猜对"——根据你看到的诚实表演就是最好的效果。</p><p><strong>训练的核心能力</strong>：非语言叙事、场景记忆与复现、在不确定性中自信表演。</p>`
  },

  'm3-78': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['合理化','猜测推理','双地点'],
    usage: 'performance', players: {min:2, max:2, label:'2 人'}, difficultyNum: 2,
    title: '平行时空 —— 同关系不同地点，互相猜对方在哪',
    level: '★★☆', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">合理化 · 猜测推理 · 双地点叙事</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给出一个<strong>关系</strong>（如母女、同事、情侣）——两人的关系在整个场景中保持不变。</li><li>A 和 B 各自从观众那里获得一个<strong>秘密的地点提示</strong>：比如 A 拿到"冰雪大世界"，B 拿到"犯罪现场"。两人都不知道对方的地点。</li><li>A 和 B 开始对话——<strong>各自在自己的地点中表演</strong>，但通过对话与对方互动。比如 A 在冰雪大世界里说话，B 在犯罪现场回应。</li><li>两人必须<strong>合理化对方说的话</strong>——对方提到冷，你就要在你的地点中找到合理的解释。同时，两人都在<strong>猜测对方到底在哪里</strong>。</li><li>场景的高潮是两人最终猜出（或接近猜出）对方的地点——但这个发现过程本身就是最好的表演。</li></ol>
<h2>进阶变体</h2><ul><li><strong>三人版</strong>：三人各在不同地点但共享一个关系</li><li><strong>揭露版</strong>：场景最后向观众揭露双方的秘密地点——看观众是否猜对</li><li><strong>情绪地点</strong>：不给物理地点，给情绪状态——"极度兴奋""绝望低落"</li></ul>
<h2>教学提示</h2><p>平行时空的核心趣味在于<strong>信息不对称</strong>——观众知道两人在不同地点，演员各自只知道自己的地点，而角色不知道对方在哪。好的平行时空场景像一场<strong>优雅的双人舞</strong>——每句台词都可能被对方的地点重新解释。不要把"猜"变成主要目标——让场景自然地发展，地点线索通过角色行为慢慢渗透出来。</p><p><strong>训练的核心能力</strong>：在不共享信息的情况下协作叙事、合理化对方的"奇怪"言行、双地点叙事的有机融合。</p>`
  },

  'm3-79': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['身体控制','叙事','灵活性'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '前进后退 —— 完整复演至新内容',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体控制 · 叙事 · 灵活性</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>场景正常推进。主持人随时喊"后退！"——演员必须<strong>倒着复演刚才的所有动作和台词</strong>，像视频倒放一样。</li><li>关键在于：倒退到已演过的部分结束后，场景<strong>继续往前推进到新的、尚未演过的内容</strong>——直到主持人再次喊"后退"。</li><li>每次"后退"都是一次完整的倒带——必须精准重现刚才的每一个动作和台词。</li></ol>
<h2>进阶变体</h2><ul><li><strong>快退版</strong>：倒退速度加倍</li><li><strong>跳跃后退</strong>：不连续倒退——倒退到某个指定的关键台词</li></ul>
<h2>教学提示</h2><p>前进后退和倒退剧（m3-30）的不同在于：这里的倒退是为了<strong>重新前进到新内容</strong>——倒退只是中间状态，目标是探索"这条路如果重走会怎样"。这对身体记忆的要求极高。</p><p><strong>训练的核心能力</strong>：精准的身体记忆、完整复现能力、探索多种叙事可能。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「倒退剧」（m3-30）—— 倒带后换方向，非完整复演</p>`
  },

  'm3-80': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['风格切换', '类型', '连续叙事'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 3,
    title: '类型片 —— 连续切换风格的续演',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">风格切换 · 类型 · 连续叙事</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>先演一个中性场景。然后场景<strong>不从头重演</strong>——而是从刚才停下的地方<strong>继续</strong>，但切换为一种电影类型风格。</li><li>继续演一段后，再切换到另一种风格——连续不停的风格变换。</li><li>每次切换，角色的核心关系和情境延续，但世界规则、身体质感、语言风格完全切换。如：动画片风格→文艺片风格→丧尸片风格→默片风格。</li></ol>
<h2>进阶变体</h2><ul><li><strong>观众选下一类型</strong>：每段结束让观众喊出下一个类型</li><li><strong>混合类型</strong>：每次切换同时融合两个类型</li></ul>
<h2>教学提示</h2><p>类型片和类型重演（m3-37）的核心区别：类型重演是同一个场景反复重演不同版本，类型片是<strong>连续的故事</strong>在不同类型中推进。这使得叙事有了延续性——观众能看到同一个角色如何在恐怖片、喜剧片、文艺片中应对同一个困境。</p><p><strong>训练的核心能力</strong>：类型驾驭、同一角色的多风格表达、连续叙事中的风格切换。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「类型重演」（m3-37）—— 同一场景重演，非连续续演</p>`
  },

  'm3-81': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['内心独白','角色层次','表演'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '奥斯卡内心独白 —— 演员自己跳出做角色独白',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">内心独白 · 角色层次 · 表演</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>场景正常进行。主持人随时指向某个演员喊"奥斯卡！"——该演员<strong>自己跳出角色</strong>，面对观众做一段内心独白（角色此刻的真实想法、感受、秘密）。</li><li>独白结束后，演员跳回角色，场景继续——但独白中暴露的内心内容会影响后续表演。</li></ol>
<h2>进阶变体</h2><ul><li><strong>多人奥斯卡</strong>：同时让两个演员做内心独白——暴露角色之间的误会</li></ul>
<h2>教学提示</h2><p>奥斯卡内心独白和字幕机（m3-28）的核心区别：这里是<strong>演员自己跳出做独白</strong>，不是旁人在后面说。演员掌握了暴露内心世界的主动权。独白要真诚，不一定是搞笑的——最好的内心独白往往让观众从笑转为安静。</p><p><strong>训练的核心能力</strong>：角色内心表达、角色层次切换、独白能力。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「字幕机」（m3-28）—— 旁人配音内心独白</p>`
  },

  'm3-82': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['多角色','支持','空间'],
    usage: 'performance', players: {min:4, max:4, label:'4 人（2 台上 + 2 支持）'}, difficultyNum: 3,
    title: '田字格 —— 四人四角色，两人演绎',
    level: '★★★', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人（2 台上+2 支持）</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">多角色 · 支持性表演 · 空间定位</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>舞台地面画一个<strong>田字格（2×2 四个格子）</strong>。每个格子代表一个不同的角色。</li><li><strong>只有 2 个演员在台上</strong>——他们要演出包含 4 个角色的场景。另外 2 个演员在台下做"支持者"。</li><li>支持者<strong>一个一个地上台</strong>，把自己支持的那个角色建立起来（做一段该角色的独白或标志性动作），然后<strong>把角色"留给"台上的演员，自己退到台下</strong>。</li><li>4 个角色全部建立后，台上的 2 个演员要<strong>轮流在两个格子之间跳转</strong>，一个人承担多个角色，完成一段完整的场景。</li><li>支持者不能替台上演员演——他们的任务只是"播种"角色，然后让台上的演员来"收获"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>三人田字格</strong>：3 个支持者建 4 个角色（其中一人建两个），台上 2 人演绎</li><li><strong>角色交叉</strong>：支持者可以随时喊"冻结"并替换台上演员的某个角色——像自由定格一样</li></ul>
<h2>教学提示</h2><p>田字格的独特之处在于<strong>角色的"交接"</strong>——支持者把角色种子种下去，台上的演员必须接住并让它活起来。台上的 2 人要精确管理 4 个角色的身体标记——每个角色的格子位置就是你在台上的"锚点"。支持者建立角色时要有鲜明的<strong>身体提案</strong>——给台上的演员一个可以"拿起来就用"的角色。</p><p><strong>训练的核心能力</strong>：角色建立与交接、空间角色管理、两人承担多角色的协作。</p>`
  },

  'm3-83': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['观众互动','现场创作','接纳'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '柱子 —— 观众给词填空',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">观众互动 · 现场创作 · 接纳</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>演员表演场景。场景中随时会出现"空槽"——演员说到某个词时，突然停下，<strong>指向观众席中一人</strong>，让该观众给出一个词来填空。</li><li>例：演员说"我今天有点想吃……"→ 指观众 → 观众喊"榴莲" → 演员接"榴莲！对，我最近不知道为什么特别想吃榴莲。"</li><li>演员必须完美接纳观众给出的任何词，并有机融入场景。</li></ol>
<h2>进阶变体</h2><ul><li><strong>数字填空</strong>：不仅填词，还可以填数字、时间、地点</li></ul>
<h2>教学提示</h2><p>柱子是观众参与度最高的即兴游戏之一。关键技巧：不要给观众太难的填空（如"用一句话描述……"），填空越简单观众越敢参与。演员的接纳能力是核心——无论观众给什么，都要像这是你一直想要的答案那样接住。</p><p><strong>训练的核心能力</strong>：观众互动、完全不可预测输入的即时接纳。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「抽屉/柱子」（m3-34）—— 预设关键词版本</p>`
  },

  'm3-84': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['采访','场景演绎','观众互动'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '情侣/观众采访 —— 采访后演绎场景',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">采访 · 场景演绎 · 观众互动</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>第一阶段：主持人从观众中采访一位（或一对）真实的观众——了解他们的职业、关系、最近发生的一件小事。</li><li>第二阶段：演员<strong>基于采访中提取的真实元素</strong>，即兴演绎一个场景——可以是真实事件的戏剧化版本，也可以是以采访为灵感的虚构故事。</li></ol>
<h2>进阶变体</h2><ul><li><strong>双人采访</strong>：采访一对观众（情侣/朋友），演绎他们关系中的某个瞬间</li></ul>
<h2>教学提示</h2><p>观众采访+演绎是一种非常温暖的即兴形式——它让观众成为演出的共同创作者。采访者的提问质量决定素材质量：不要问事实问题（"你做什么工作？"），要问故事问题（"上一次让你笑到哭是什么事？"）。</p><p><strong>训练的核心能力</strong>：从真实素材中提取戏剧元素、采访技巧、观众连接。</p><p style="margin-top:12px;font-size:0.82rem;color:var(--accent-dim);">🔄 可对比「采访者」（m3-38）—— 纯角色采访，非观众素材演绎</p>`
  },

  'm3-85': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['场景复现','多角色','团体记忆'],
    usage: 'performance', players: {min:4, max:4, label:'4 人'}, difficultyNum: 3,
    title: '幸存者 —— 层层淘汰后的单人复现',
    level: '★★★', readTime: '约 4 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">15-25 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">场景复现 · 多角色 · 团体记忆</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>4 个演员演出一段场景，每人一个明确的角色。演出结束后<strong>观众投票淘汰一个演员</strong>——该演员的角色不会在后续任何版本中真实出现。</li><li>现存的 3 个演员必须<strong>复现刚才的完整场景</strong>——但少了一个人。<strong>不能一人饰两个角色</strong>——被淘汰的角色只能由其他演员通过<strong>对话、动作、描述</strong>来"暗示"这个角色的存在和行动。</li><li>每个演员都必须记住第一版场景的全部内容（台词、动作、走位）。</li><li>以此类推：观众再投掉一个→ 2 人复现→ 再投→ <strong>最后 1 个演员独自复现完整的 4 人场景</strong>。这个最后的演员就是"幸存者"——但难度极大，真的"幸运"吗？</li><li>每一轮复现都必须包含第一版的所有关键情节和信息——只是表现形式越来越"残破"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>保留角色</strong>：被淘汰的演员可以留在台上但"隐身"——只能做动作不能说话</li><li><strong>倒序淘汰</strong>：从 1 人开始逐步加入——反向幸存者</li></ul>
<h2>教学提示</h2><p>幸存者最好笑也最残酷的地方在于——<strong>越往后越荒诞</strong>。当 1 个人要演 4 个角色的场景时，观众看到的是一场"精神分裂式"的表演。关键规则：<strong>不能一人饰两角</strong>——被淘汰的角色必须通过现存角色的对话和动作来"折射"。比如"你怎么还不来？"（对着空气说，暗示那个被淘汰的角色还在）。带领者要提醒演员认真对待复现——认真的荒诞比故意的搞笑更好笑。</p><p><strong>训练的核心能力</strong>：精准的场景记忆、在缺失角色中保持叙事完整、单人承担多角色场景的创造力。</p>`
  },

  'm3-86': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '场景与叙事', skills: ['肢体记忆', '空间构建', '观察力'],
    usage: 'performance', players: {min:3, max:4, label:'3-4 人'}, difficultyNum: 2,
    title: '小偷家族 —— 肢体空间记忆，偷走虚拟物品',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">肢体记忆 · 空间构建 · 观察力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>房间主人</strong>上场。台上有一个<strong>虚拟空间</strong>（如客厅、卧室、办公室）。主人用精准的<strong>无实物肢体表演</strong>建立这个空间——开门、挂衣服、打开柜子、拿出杯子、打开电视、坐进沙发。每一个物品的<strong>位置、大小、重量</strong>都通过身体动作明确展示出来。</li><li>主人建立完空间后<strong>离开舞台</strong>（出门上班/买菜）。</li><li><strong>2-3 个小偷</strong>上场。他们之前<strong>观察了主人的表演</strong>——现在必须凭记忆进入这个虚拟空间，<strong>偷走</strong>主人展示过的物品。小偷要精准复现每个物品的位置——不能"穿墙"、不能"踢到"之前主人放的鞋子、不能"错过"那个放在柜子第三层的古董花瓶。</li><li>小偷偷走物品后离开。主人回来——发现物品不在了——<strong>用身体反应表达发现失窃的过程</strong>（"我的花瓶呢？""电视怎么没了？"）。</li></ol>
<h2>进阶变体</h2><ul><li><strong>偷梁换柱</strong>：小偷不仅偷走东西，还用别的物品替换——主人回来发现"我的花瓶怎么变成了一个菠萝？"</li><li><strong>警察破案</strong>：第三幕——警察上场，根据小偷留下的痕迹还原作案过程</li></ul>
<h2>教学提示</h2><p>小偷家族是肢体表演和观察力的极限训练。房间主人需要用最精准的无实物动作建立空间——每一个物品的位置必须清晰到"小偷可以复现"的程度。小偷则需要全神贯注地记住空间中的每一个物品及其位置。喜剧往往来自小偷的失误——"穿墙"进入、忘了某样东西在哪儿、或者两人同时去偷同一个东西撞在一起。</p><p><strong>训练的核心能力</strong>：无实物空间构建、精准的观察与记忆、肢体喜剧节奏。</p>`
  },


  // ========== 🎭 角色塑造 新增（8个，m3-88 ~ m3-95） ==========

  'm3-88': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['身体层级','角色','空间'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '坐站躺 —— 身体层级决定角色地位',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体层级 · 角色 · 空间</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>场景中，三个演员必须在三个不同的身体层级上表演：<strong>一人站着、一人坐着、一人躺着</strong>。</li><li>身体层级直接影响角色的地位和能量——站着的往往是高地位，躺着的往往是低地位或弱势。</li><li>场景进行中，层级可以交换——当躺着的人站起来时，站着的人必须躺下。</li></ol>
<h2>进阶变体</h2><ul><li><strong>反转层级</strong>：躺着的人是最高地位——站着的人反而最卑微</li></ul>
<h2>教学提示</h2><p>坐站躺通过最简单的身体位置变化来制造角色关系的变化。核心洞察：改变身体姿态，角色心理就变了——不需要额外的表演"技巧"。</p><p><strong>训练的核心能力</strong>：身体与地位的关联、空间层级意识。</p>`
  },

  'm3-89': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['快速切换','角色','反应力'],
    usage: 'both', players: {min:4, max:8, label:'4-8 人'}, difficultyNum: 2,
    title: 'Switch Change —— 四人场景，口令驱动角色交换与替换',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-8 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">快速切换 · 角色 · 反应力</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>4 个演员在台上做场景，各自有一个明确的角色（身体质感、声音、态度）。</li><li>主持人（或观众）喊<strong>"Switch！"</strong>——所有演员立刻<strong>顺时针交换角色</strong>：A 变成 B 的角色，B 变成 C 的角色，C 变成 D 的角色，D 变成 A 的角色。</li><li>主持人喊<strong>"Change！"</strong>——场下一位新演员上台<strong>替换</strong>台上其中一人，接手该角色并继续。被替换的人下场。</li><li>主持人可交替喊 Switch 和 Change——角色在不断交换和替换中持续演变，场景继续推进不中断。</li></ol>
<h2>进阶变体</h2><ul><li><strong>随机 Switch</strong>：不按顺序交换——主持人指定"Switch A 和 C！"——只交换指定的两人</li><li><strong>连续 Change</strong>：连续替换多人——最终台上全是新演员，但角色必须保持连贯</li></ul>
<h2>教学提示</h2><p>Switch Change 训练双重能力：一是<strong>仔细观察每个伙伴的角色细节</strong>（身体、声音、习惯），二是<strong>精准复现</strong>。Switch 是一种"换位共情"训练——你必须在对方的角色中体验对方的处境。Change 则训练"无缝接手"——新演员必须在瞬间抓住角色核心并继续推进。两种口令交替使用，制造了混乱又有序的即兴挑战。</p><p><strong>训练的核心能力</strong>：角色细节观察、精准角色复现、换位共情、无缝角色接手。</p>`
  },

  'm3-90': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['声音角色', '协作', '身体表演'],
    usage: 'both', players: {min:3, max:3, label:'3 人'}, difficultyNum: 2,
    title: '灵魂互换/相互配音 —— 三人循环配音，人人都上场',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">声音角色 · 协作 · 身体表演</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>开场</strong>：A 和 B 上台开始一个场景。<strong>A 为 B 配音</strong>——B 只做身体表演不说话，A 站在一旁为 B 的角色配音。B 的身体动作 + A 的声音 = B 的角色。</li><li><strong>C 加入</strong>：C 在台下<strong>为 A 配音</strong>——A 只做身体表演不说话，C 的声音从台下传来（或站在一旁）。A 的身体动作 + C 的声音 = A 的角色。</li><li><strong>C 上台</strong>：C 在合适时机<strong>上台加入场景</strong>——成为第三个角色。</li><li><strong>B 为 C 配音</strong>：C 上台后只做身体表演不说话——<strong>B 为 C 的角色配音</strong>。C 的身体动作 + B 的声音 = C 的角色。</li><li>三人形成<strong>循环配音</strong>：A→B，C→A，B→C。每个人既是某个角色的身体，又是另一个角色的声音。没有单纯的"配音员"——三个人都在台上表演，都在为别人配音。</li></ol>
<h2>进阶变体</h2><ul><li><strong>随机切换</strong>：主持人随时喊"换！"——三人立刻交换配音关系</li><li><strong>四人版</strong>：增加一个角色，形成更复杂的配音循环</li></ul>
<h2>教学提示</h2><p>灵魂互换的独特之处在于<strong>没有人只做一件事</strong>——每个人同时是身体表演者和配音者。配音者需要精准观察被配音者的身体动作来匹配声音，表演者需要用身体给出足够的线索让配音者知道怎么配。三人之间的默契是核心——一个眼神就知道该谁说话、该谁上台。这个游戏是身体和声音分离训练的终极版本。</p><p><strong>训练的核心能力</strong>：身体与声音的分离与配合、多人循环协作、精准的非语言信号传递。</p>`
  },

  'm3-91': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['协作', '极致聆听', '辩论'],
    usage: 'performance', players: {min:6, max:6, label:'6 人（两组各 3 人）'}, difficultyNum: 3,
    title: '三头奇葩说 —— 两个三头专家辩论',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">6 人（两组各 3 人）</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">协作 · 极致聆听 · 辩论</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给出一个<strong>辩论话题</strong>（如"猫比狗好""早上洗澡比晚上好""外星人应该交税"）。</li><li><strong>两个三头专家</strong>——每组 3 人并排站立，合体成一个专家。正方专家 3 人交替每人每次只说<strong>一个字</strong>，共同说出正方的论点。反方专家 3 人也同样用一字接力的方式回应。</li><li>两个专家<strong>交替辩论</strong>——正方三头说一个论点（3 人一字一字完成一个句子），反方三头立刻回应（3 人一字一字完成反驳）。</li><li>每个三头专家的 3 人必须完美同步节奏——任何一个人的犹豫都会让整个专家的句子断裂。断裂时对方专家可以"乘胜追击"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>身体三头</strong>：不仅一字接力说话，每个三头专家的成员还各自控制专家的身体一部分——一人控制左臂，一人控制右臂，一人控制身体</li><li><strong>观众投票</strong>：辩论结束后观众投票——哪个三头专家说得更有道理（或更荒谬）</li></ul>
<h2>教学提示</h2><p>三头奇葩说是双头专家（m3-26）和三头（原 m3-91）的升级版——将一字接力从"回答问题"变成"辩论对抗"。两个专家之间的辩论节奏是关键——每个三头组内部需要极致聆听，两个三头组之间又需要辩论的张力。诀窍：不要试图预测下一个字，信任前一个字给出的方向。辩论的胜负不重要——过程中的荒谬和协作才是看点。</p><p><strong>训练的核心能力</strong>：三人极致聆听、辩论节奏把控、在竞争中合作。</p>`
  },

  'm3-92': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['身体连接', '动态组合', '角色切换'],
    usage: 'performance', players: {min:3, max:3, label:'3 人'}, difficultyNum: 3,
    title: '旋转三头/连体婴儿 —— 三人动态组成双头角色对话',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体连接 · 动态组合 · 角色切换</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>3 个演员演绎<strong>两个双头角色</strong>之间的对话。每个角色需要<strong>两个"头"</strong>才能成型——<strong>只有双头完整时角色才能说话，一个头单独存在时不能说话</strong>。</li><li>3 个演员<strong>动态地</strong>在这两个角色之间移动和组合——A 和 B 身体连接形成角色 1（双头完整 → 可以说话），C 单独作为角色 2 的半个头（只有一头 → 不能说话）。</li><li>当一个角色需要说话时，必须有<strong>两个演员</strong>物理连接到一起形成该角色。然后角色 1 说话，角色 2（如果只有一头）只能做身体反应但不能开口。</li><li>演员<strong>不断旋转/移动</strong>——B 从角色 1 脱离，跑去和 C 连接到一起形成角色 2（双头完整 → 可以说话），A 单独成为角色 1 的半个头（不能说话）。角色 2 现在说话，角色 1 只能做身体反应。</li><li>场景在两个双头角色之间的对话中推进——演员在物理上不停地连接、断开、旋转、重新组合。</li></ol>
<h2>进阶变体</h2><ul><li><strong>三头角色</strong>：每个角色需要 3 个头——但只有 3 个演员，意味着同一时间只能有一个角色存在</li><li><strong>争夺人头</strong>：两个角色都想说话——中间那个演员被两股力量拉扯</li></ul>
<h2>教学提示</h2><p>旋转三头是即兴中最具视觉冲击力的身体游戏之一。演员在物理上不停地旋转、连接、脱离——像一场舞蹈。核心规则"只有双头完整才能说话"制造了强烈的戏剧动机：每个角色都想抢到另一个演员来凑够两颗头。这对身体协作的要求极高——演员需要在不碰撞的前提下流畅地切换组合。</p><p><strong>训练的核心能力</strong>：动态身体协作、非语言切换信号、在物理限制中创造角色对话。</p>`
  },

  'm3-93': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['角色辅助', '协作', '身体喜剧'],
    usage: 'both', players: {min:4, max:4, label:'4 人（两组）'}, difficultyNum: 1,
    title: '小帮手 —— 两组四人，额外的手辅助对戏',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人（两组）</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色辅助 · 协作 · 身体喜剧</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>两组搭配</strong>——A1（演员）和 B1（小帮手）一组，A2（演员）和 B2（小帮手）一组。两个演员 A1 和 A2 在台上<strong>对戏</strong>。</li><li>每个演员的双手背在身后——<strong>演员自己不能用手</strong>。各自的小帮手站在演员身后，把双手从演员腋下伸出来——<strong>帮手的手成为演员的手</strong>。</li><li>两个演员正常对话和做身体动作，但<strong>所有需要手的事情</strong>——拿东西、指方向、握手、推开对方——都由各自的帮手来完成。</li><li>演员和帮手配合：演员用语言和身体姿态给出指令，帮手的手精准执行。两个演员对戏时，两组手也在对戏——形成双重喜剧效果。</li></ol>
<h2>进阶变体</h2><ul><li><strong>不配合版</strong>：帮手的手故意不听话——演员想握手，帮手的手偏偏比了个中指</li><li><strong>交换帮手</strong>：中途两组交换帮手——新手必须立刻适应新演员的身体</li></ul>
<h2>教学提示</h2><p>小帮手的四人版本将单人身体喜剧升级为双人对戏。两个演员在认真演戏的同时，两双手在帮（或捣乱）——四层表演同时进行。演员需要信任帮手，帮手需要敏锐观察演员的意图。这个游戏在观众面前视觉效果极佳——观众看到的是两个"手不听使唤的人"在努力完成一个场景。</p><p><strong>训练的核心能力</strong>：多人非语言配合、身体喜剧节奏、在混乱中保持场景推进。</p>`
  },

  'm3-94': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['身体控制', '声音角色', '双人配合'],
    usage: 'performance', players: {min:4, max:4, label:'4 人（两组）'}, difficultyNum: 2,
    title: '提线木偶 —— 两组四人，木偶对戏',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人（两组）</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">4-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">身体控制 · 声音角色 · 双人配合</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>两组木偶组合</strong>——A1（木偶师）操控 B1（木偶），A2（木偶师）操控 B2（木偶）。</li><li>两个<strong>木偶师不能说话</strong>——只能用手势和提线动作"遥控"各自木偶的全身动作。</li><li>两个<strong>木偶可以说话但不能自主移动身体</strong>——身体完全由木偶师控制，木偶用声音表达角色的想法和情绪。</li><li><strong>两个木偶在台上对戏</strong>——A1 操控 B1 的身体动作，B1 配音；A2 操控 B2 的身体动作，B2 配音。两个木偶之间的对话和身体互动形成完整的场景。</li><li>声音和身体分属不同人创造了独特的戏剧张力——木偶嘴里说着"我好喜欢你"，但木偶师操控着木偶的身体不由自主地后退。</li></ol>
<h2>进阶变体</h2><ul><li><strong>木偶师交换</strong>：中途两组交换木偶师——新木偶师必须立刻适应新木偶的身体特质</li><li><strong>木偶反抗</strong>：木偶短暂夺回身体控制权——但立刻被木偶师重新操控</li></ul>
<h2>教学提示</h2><p>提线木偶的四人版本将单人操控升级为双人戏码。木偶师之间的配合变得关键——两个木偶师需要保持视觉连接，确保两个木偶的互动在物理上精准匹配（握手、拥抱、打架）。木偶演员则需要在被操控的状态下保持角色的声音一致性——身体不听你使唤，但声音要表达出角色的内心。</p><p><strong>训练的核心能力</strong>：身体与声音的分离、多人精准配合、在被操控中保持角色声音。</p>`
  },

  'm3-95': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '角色塑造', skills: ['物件角色','联想','无实物'],
    usage: 'both', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 2,
    title: '道具百变 —— 同一件道具变成不同角色',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">物件角色 · 联想 · 无实物</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>准备一件真实的日常物品（如一把雨伞）。第一位演员用它做它本来的用途——场景 30 秒。</li><li>下一位演员拿到同一件物品，但<strong>用它扮演一个完全不同的事物</strong>——雨伞变成长矛、雨伞变成船桨、雨伞变成婴儿。</li><li>每位演员用同一个物品创造不同的角色或场景元素。</li></ol>
<h2>进阶变体</h2><ul><li><strong>无实物版</strong>：没有真实的道具——全靠无实物表演</li></ul>
<h2>教学提示</h2><p>道具百变展示了即兴中的核心创造力原则：任何东西都可以是任何东西。关键是"认真地相信"——当你把雨伞当作婴儿抱着的时候，你的认真度决定观众是否相信。</p><p><strong>训练的核心能力</strong>：物件联想能力、无实物替代、信念感。</p>`
  },

  // ========== ⚡ 地位与情绪 新增（3个，m3-96 ~ m3-98） ==========

  'm3-96': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['维度拓展', '细腻度', '场景'],
    usage: 'training', players: {min:2, max:2, label:'2 人'}, difficultyNum: 3,
    title: '更深更广 —— 任何维度都可以"更深"或"更广"',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">维度拓展 · 细腻度 · 场景</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>场景从一个中性状态开始。主持人不断喊出两个指令——</li><li><strong>"更深"</strong>——场景的某个维度向内在/缩减方向推进。不限于情绪（表面的愤怒→底下的受伤→最深的害怕），也可以是：空间缩小（房间→衣柜→火柴盒）、声音变低（正常→耳语→静默）、动作变小（大步走→小碎步→静止）。</li><li><strong>"更广"</strong>——场景的某个维度向外在/扩张方向推进。不限于情绪（内心窃喜→忍不住笑→狂笑），也可以是：空间扩大（房间→体育场→宇宙）、物体变大（鸡蛋→西瓜→热气球）、声音变高（耳语→正常→吼叫）。</li><li>关键是：<strong>每次喊"更深"或"更广"，演员选择任意一个维度来推进</strong>——情绪、空间、物件大小、声音音量、身体幅度——任何有"深浅/广窄"对比的维度都可以。</li></ol>
<h2>进阶变体</h2><ul><li><strong>多维同步</strong>：同时让两个维度一个更深一个更广——情绪更深但空间更广，制造张力</li><li><strong>指定维度</strong>：主持人指定具体维度——"情绪更深！""空间更广！"</li></ul>
<h2>教学提示</h2><p>更深更广的核心价值在于<strong>探索任何维度的两极</strong>。大多数人只停留在中间——这个练习迫使演员访问每个维度的极端状态。重要的不是"到位"，而是<strong>在过程中发现</strong>——当你把空间缩小到极致，角色的行为会发生什么变化？当你把声音放低到近乎无声，场景的张力会怎样？</p><p><strong>训练的核心能力</strong>：多维度感知与拓展、在极端限制中发现表演可能性。</p>`
  },

  'm3-97': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '地位与情绪', skills: ['反向思维', '幽默', '角色'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 1,
    title: '世界最差/世界上最糟糕的人 —— 故意做最糟糕的版本',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">反向思维 · 幽默 · 角色</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众或主持人给出一个场景/角色/职业——"一个外科医生"。</li><li>演员必须演<strong>这个世界上最糟糕的那个版本</strong>——最差的外科医生、最差的恋人、最差的外卖骑手。</li><li>目标不是"假装差"，而是<strong>认真地做最糟糕的事</strong>——认真的荒诞最好笑。</li></ol>
<h2>进阶变体</h2><ul><li><strong>逐步变差</strong>：从一个正常的版本开始，每一步都做得更差一点</li></ul>
<h2>教学提示</h2><p>世界最差是释放表演压力的绝佳练习——你被允许（甚至被要求）做最差的版本。当你的目标不是"做好"而是"做差"时，评判者自动下线，真正的自发性才有空间出现。</p><p><strong>训练的核心能力</strong>：放下完美主义、在"允许失败"中找到自由。</p>`
  },

  // ========== 🏆 竞技与表演 新增（12个，m3-99 ~ m3-111） ==========

  'm3-99': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['音乐即兴','表演','勇气'],
    usage: 'performance', players: {min:1, max:6, label:'1-6 人'}, difficultyNum: 2,
    title: '卡拉 OK —— 即兴演唱任意歌曲',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">1-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">音乐即兴 · 表演 · 勇气</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>演员上台，观众给出一个歌名（可以是真实歌曲，也可以是编的）。</li><li>演员立刻"演唱"这首歌——没有原曲伴奏，纯清唱即兴创作旋律和歌词。</li><li>歌曲需要有完整的情绪弧线——和即兴场景一样，有开头有高潮有收束。</li></ol>
<h2>进阶变体</h2><ul><li><strong>对唱版</strong>：两人以角色身份对唱——用歌曲推进剧情</li></ul>
<h2>教学提示</h2><p>卡拉 OK 是即兴歌曲（m3-51）的轻松版——不需要场景框架，只需要一首歌。目标不是唱得好，而是唱得有故事。跑调是角色的一部分。</p><p><strong>训练的核心能力</strong>：即兴音乐创作、在无伴奏下保持节奏和情绪。</p>`
  },

  'm3-100': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['喜剧节奏', '身体', '观众互动'],
    usage: 'performance', players: {min:3, max:20, label:'3 人以上'}, difficultyNum: 2,
    title: '棉花糖 —— 谁逗笑观众谁就塞一颗',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人以上</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">喜剧节奏 · 身体表达 · 观众互动</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>两名演员</strong>各拿一袋棉花糖（或软糖）放在手边，站上舞台。另外需要一位<strong>导演/裁判</strong>，负责观察观众反应。</li><li>演员正常起戏，进行即兴场景——无主题限制，自由发挥。</li><li>导演盯着观众席：<strong>只要有人笑了</strong>（不管是微笑还是大笑），导演立即喊"停！"。导演判断<strong>是哪位演员的表演逗笑了观众</strong>，该演员必须<strong>往嘴里塞一颗棉花糖</strong>，然后场景继续。</li><li>棉花糖含在嘴里会严重影响发音——演员必须在口齿越来越不清的状态下继续演角色。越演越含糊，越含糊越荒诞。</li><li>就这么一直重复下去：演 → 观众笑 → 导演喊停 → 逗笑者塞糖 → 继续演。<strong>直到某一刻，其中一位演员嘴里塞满了棉花糖，实在没法再说话了，场景结束。</strong></li><li>导演也可以<strong>临时拉观众上台</strong>参与——被拉上来的观众也拿一袋棉花糖，加入场景。</li></ol>
<h2>进阶变体</h2><ul><li><strong>预先塞糖版</strong>：场景开始前每人嘴里先塞 2-3 颗——从一开始就在语言障碍中找喜剧</li><li><strong>双裁判版</strong>：两个导演分别盯不同的演员——一个导演盯左边那位，另一个盯右边那位</li></ul>
<h2>教学提示</h2><p>棉花糖的核心是<strong>用观众的笑声作为"惩罚"触发器</strong>——这和"犯错才塞糖"完全不同。演员不是被"惩罚做错了"，而是被"奖励逗笑了观众"——这颗棉花糖本质上是<strong>一枚勋章</strong>。嘴里棉花糖越多，说明你越成功。同时，这个游戏训练演员<strong>在物理限制下用身体和表情弥补语言</strong>——当说话越来越含糊时，身体反而更自由。导演的角色至关重要：要有敏锐的观众感知力，快速判断是谁的表演触发了笑声。注意安全：确保棉花糖够软，嘴里塞满时不要强行吞咽，感觉不适就停下。</p><p><strong>训练的核心能力</strong>：喜剧节奏的把握、在身体限制中寻找表演、与观众的能量互动。</p>`
  },

  'm3-101': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['角色', '推理', '即兴互动'],
    usage: 'performance', players: {min:4, max:4, label:'4 人'}, difficultyNum: 2,
    title: '相亲 —— 嘉宾猜身份特征，三选一',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色 · 推理 · 即兴互动</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>嘉宾</strong>（1 人）是来相亲的人。TA 离开房间后，观众给<strong>三位"候选人"</strong>各分配一个<strong>具体的角色/物品特征</strong>——不是抽象性格，而是带有具体画面感的特征。例如："是一位用菜刀切玫瑰花的厨师""是一把永远找不到锁孔的钥匙""是一只在图书馆里打喷嚏的猫"。</li><li>嘉宾回到房间，与三位候选人依次互动（每人约 2-3 分钟）。候选人通过对话和行为<strong>间接暗示</strong>自己的特征——但不能直接说出口。</li><li>嘉宾的目标：通过互动和观察，<strong>猜出每位候选人的具体特征</strong>。猜完后，嘉宾必须<strong>从中选择一位</strong>作为"最终选择"——可以是最有趣的、最奇怪的、或真的"合适"的那位。</li><li>最后主持人揭晓所有特征——看嘉宾猜对了几个。</li></ol>
<h2>进阶变体</h2><ul><li><strong>物品道具版</strong>：每个候选人手持一个真实物品——必须将与物品相关的特征融入角色</li><li><strong>速配版</strong>：每人只有 60 秒互动时间——快速判断</li></ul>
<h2>教学提示</h2><p>相亲糅合了角色扮演、推理游戏和爱情喜剧类型。给候选人分配<strong>具体的角色/物品特征</strong>（而非抽象性格）是关键——"一把永远找不到锁孔的钥匙"比"健忘的人"更具体、更有画面感、也更容易用身体和行为来表达。候选人需要在"暗示自己的特征"和"表现得像个正常的相亲对象"之间找到微妙的平衡。嘉宾则在追问中逐步发现线索。</p><p><strong>训练的核心能力</strong>：具体化角色特征、间接信息展示、推理式互动。</p>`
  },

  'm3-102': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['角色群像','派对','即兴'],
    usage: 'performance', players: {min:4, max:10, label:'4-10 人'}, difficultyNum: 2,
    title: '怪客派对 —— 一群怪人的派对',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-10 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色群像 · 派对场景 · 即兴互动</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>每个演员从观众那里得到一个"怪癖"——一个独特的性格特征、习惯或秘密。</li><li>所有人参加一场派对——在派对中自然地展示各自的怪癖。</li><li>怪癖不能直接被说出来——它们必须通过行为和对话间接展示，让其他角色和观众自己发现。</li></ol>
<h2>进阶变体</h2><ul><li><strong>揭秘版</strong>：派对结束时每个人说出其他人的怪癖——看猜对了多少</li></ul>
<h2>教学提示</h2><p>怪客派对是一个经典的"展示而非讲述"练习。每个演员必须把怪癖变成具体的行为——说"我是一个强迫症患者"是讲述，反复调整桌子上所有杯子的角度才是展示。</p><p><strong>训练的核心能力</strong>：角色群像管理、间接展示角色特征、在多人场景中找到自己的位置。</p>`
  },

  'm3-103': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['即兴理由', '身体解读', '喜剧'],
    usage: 'performance', players: {min:4, max:5, label:'4-5 人'}, difficultyNum: 2,
    title: '我迟到了 —— 同事用身体给三个迟到线索',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-5 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-5 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">即兴理由 · 身体解读 · 喜剧</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>迟到者</strong>上场，面对<strong>老板</strong>。老板质问"你为什么又迟到了？！"迟到者不知道迟到的原因。</li><li>迟到者需要猜出<strong>三个问题</strong>的答案：<strong>① 早上出门发现家里XX了？</strong>（家里出了什么状况）、<strong>② 出门坐了XX交通工具？</strong>（坐了什么不寻常的交通工具）、<strong>③ 来的路上发生了XX？</strong>（路上遇到了什么意外）。</li><li><strong>2-3 个同事站在老板身后</strong>（老板看不见的位置），用夸张的<strong>身体动作和姿势</strong>分别暗示这三个问题的答案——先比划家里状况，再比划交通工具，最后比划路上意外。</li><li>迟到者根据同事的身体提示逐一猜出三个答案——猜对时同事点头确认，猜错时同事摇头并继续比划——猜出一个后进入下一个问题。</li></ol>
<h2>进阶变体</h2><ul><li><strong>乱序版</strong>：三个问题的答案不按顺序给——迟到者要先判断同事在比划哪个问题</li><li><strong>观众出题</strong>：观众分别给出三个问题的答案，同事据此比划</li></ul>
<h2>教学提示</h2><p>我迟到了将即兴叙事、身体喜剧和猜谜结合。迟到者面临三重压力：老板的质问（语言层面）、同事的动作提示（视觉层面）、自己必须合理串联三个答案（逻辑层面）。三个问题的结构给了游戏清晰的方向——不会变成漫无边际的编造。同事们的身体提示是精华——越夸张越好，但绝不能被老板"发现"。</p><p><strong>训练的核心能力</strong>：视觉信息解读、多重压力下的故事编织、身体喜剧节奏。</p>`
  },

  'm3-104': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['观众互动', '即兴接纳', '现场创作'],
    usage: 'performance', players: {min:2, max:4, label:'2-4 人'}, difficultyNum: 1,
    title: '观众填空 —— 演员伸手要词，观众任意填空',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-4 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">观众互动 · 即兴接纳 · 现场创作</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>演员进行正常即兴场景。在台词的<strong>任何位置</strong>——不限于关键元素——演员可以做一个<strong>"要词"手势</strong>（如伸手向观众、手掌向上张开），然后停顿——观众立刻喊出<strong>任意一个词</strong>。</li><li>演员立刻把观众给的词<strong>填入自己正在说的句子中</strong>——继续说完。这个词可以是名词、动词、形容词、甚至语气词——任何词性都可以。</li><li>不限于"关键元素"——演员可以在说一个动词之前要词、在说一个地点之前要词、在说一个名字之前要词、在说一个理由之前要词。任何词都可以由观众来填。</li><li>场景在演员的即兴框架和观众的随机填入之间推进——演员控制结构和方向，观众提供"随机碰撞"。</li></ol>
<h2>进阶变体</h2><ul><li><strong>全句填空</strong>：演员说前半句，手势停住——观众喊出整个后半句</li><li><strong>双人填空</strong>：两个演员都伸手——观众给两个不同的词，两人必须同时把自己的词融入</li></ul>
<h2>教学提示</h2><p>观众填空是最开放、最刺激的观众互动形式。演员的核心能力不是"演得好"，而是<strong>把任何观众输入立刻变成场景燃料</strong>。诀窍：给观众留的"空"要有上下文——让观众知道需要什么类型的词（"我走进房间，看到桌上放着一把……"——观众自然会喊出一个名词）。如果观众喊的词极其离谱——那正是喜剧的黄金时刻。</p><p><strong>训练的核心能力</strong>：完全开放的接纳、即时语言整合、把意外变燃料。</p>`
  },

  'm3-105': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['悬疑','团体','科幻'],
    usage: 'performance', players: {min:5, max:8, label:'5-8 人'}, difficultyNum: 3,
    title: '火星杀人案 —— 外星语目击者传递破案信息',
    level: '★★★', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5-8 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-15 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">悬疑 · 团体叙事 · 科幻类型</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>火星上发生了一起谋杀案。观众给出三个关键信息：<strong>案发地点、受害者职业、凶器</strong>（如"在气闸舱、被杀的太空植物学家、凶器是冻硬的土豆"）。</li><li>关键规则：现场有<strong>外星目击者</strong>（1-2 个演员）——他们看到了谋杀经过，但<strong>只会说火星语</strong>（完全听不懂的叽里呱啦 gibberish + 夸张的身体动作）。</li><li>其他演员扮演<strong>地球侦探和翻译员</strong>——他们必须通过外星目击者的火星语和肢体表演，<strong>接力解读</strong>出案发地点、受害者职业和凶器是什么。</li><li>外星目击者用火星语+身体比划来传达信息——地球侦探们不断猜测、翻译接力——"它说……那个东西是圆形的？是水果？不，它在做扔的动作——是球？是土豆！冻硬的土豆！"</li><li>一旦三个关键信息被破译，侦探们还原案发经过——外星目击者用火星语确认或否认。</li></ol>
<h2>进阶变体</h2><ul><li><strong>多个目击者</strong>：两个外星目击者各看到一部分——互相补充或矛盾，增加推理难度</li><li><strong>嫌疑外星人</strong>：外星目击者不一定是清白的——TA 可能就是凶手，在火星语中故意混淆信息</li></ul>
<h2>教学提示</h2><p>火星杀人案的核心魅力在于<strong>火星语接力翻译</strong>。外星目击者需要用纯粹的 gibberish + 身体语言来传达具体信息——这是非语言表达的极高挑战。地球侦探们则训练"在模糊信号中提取意义"——这和日常即兴中"从伙伴的模糊 Offer 中找到方向"是同一种能力。整个过程笑点密集——火星语的疯狂 + 侦探们的胡乱猜测。</p><p><strong>训练的核心能力</strong>：非语言信息传达、模糊信号的解读与接力、科幻类型的即兴创造。</p>`
  },

  'm3-106': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['推理', '角色对抗', '追问'],
    usage: 'performance', players: {min:2, max:3, label:'2-3 人'}, difficultyNum: 2,
    title: '审讯室 —— 被审讯者猜自己的罪名',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-8 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">推理 · 角色对抗 · 追问</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给审讯者一个<strong>罪名</strong>（可以是任何荒谬的罪行——"偷了整条街的左脚的鞋""在图书馆用书搭了一个违法建筑"）。<strong>被审讯者不知道</strong>自己犯了什么罪——TA 离开房间或在审讯开始时蒙住耳朵。</li><li>审讯者开始审问——但不能直接说出罪名。审讯者通过<strong>暗示性的问题</strong>引导被审讯者——"你上周二下午三点在哪儿？""你有没有注意到你的包比平时重？""你和……鞋子……最近有没有什么特别的关系？"</li><li>被审讯者必须通过审讯者的提问<strong>猜出自己到底犯了什么罪</strong>。被审讯者可以在角色中试探——"这跟……鞋有关？""我是不是拿了什么东西？"——审讯者用角色内的方式肯定或继续引导。</li><li>当被审讯者成功猜出罪名时——审讯者正式宣布指控。</li></ol>
<h2>进阶变体</h2><ul><li><strong>双人审讯</strong>：两个被审讯者——各自不知道对方犯了什么罪，审讯者审问两人不同的罪名</li><li><strong>加时赛</strong>：如果 3 分钟猜不出来——审讯者可以给一个"关键线索"</li></ul>
<h2>教学提示</h2><p>审讯室反转了传统审讯游戏——被审讯者成为"侦探"，审讯者成为"出谜人"。审讯者需要在"暗示"和"不能直接说"之间找到精准的平衡——太明显了没挑战，太隐晦了猜不出来。被审讯者则训练从间接信息中推断的能力——这和即兴中"从伙伴的暗示中理解场景方向"是同一技能。</p><p><strong>训练的核心能力</strong>：间接信息传达、推理式互动、在对抗中合作解谜。</p>`
  },

  'm3-107': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['关系冲突', '推理', '角色'],
    usage: 'performance', players: {min:3, max:3, label:'3 人'}, difficultyNum: 2,
    title: '婚姻辅导员 —— 夫妻猜自己为什么吵架',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">关系冲突 · 推理 · 角色</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li><strong>辅导员</strong>知道夫妻的矛盾（观众提前告知辅导员——如"为了一只三年前失踪的猫""因为丈夫给盆栽起了前女友的名字"）。<strong>夫妻两人不知道</strong>自己的矛盾是什么——他们在辅导开始时蒙住耳朵。</li><li>辅导员引导对话，通过<strong>暗示性的提问和引导</strong>帮助夫妻发现自己的矛盾——"你们家里有没有什么东西……是你们各自有不同看法的？""丈夫先生，你给植物取过名字吗？什么样的名字？"</li><li>夫妻在辅导员的引导下，一边即兴扮演夫妻角色，一边<strong>逐步猜出</strong>自己到底因为什么来接受辅导。猜测的过程本身就是戏剧——从毫无头绪到隐隐约约感觉到"恍然大悟"。</li><li>当夫妻猜出矛盾时——他们必须当场面对并"解决"这个矛盾（在角色内），辅导员主持这个解决过程。</li></ol>
<h2>进阶变体</h2><ul><li><strong>双方不同矛盾</strong>：丈夫认为的矛盾和妻子认为的矛盾不同——两人猜出的是不同的东西</li><li><strong>假矛盾</strong>：辅导员给的矛盾是表象——真正的深层矛盾需要夫妻自己发现</li></ul>
<h2>教学提示</h2><p>婚姻辅导员将即兴戏剧和推理游戏融合。夫妻演员面临双重挑战：既要扮演一对有矛盾的夫妻（当不知道自己矛盾是什么时，需要逐步建立角色），又要从辅导员的暗示中拼凑出"我们到底为什么吵架"。辅导员的技巧最考验功力——问题要引导但不直接说破，像剥洋葱一样层层深入。</p><p><strong>训练的核心能力</strong>：间接信息推理、在未知中逐步建立角色关系、引导式提问技巧。</p>`
  },

  'm3-108': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['角色演讲', '幽默', '独白'],
    usage: 'performance', players: {min:1, max:2, label:'1-2 人'}, difficultyNum: 2,
    title: '产品发布会 —— 即兴发布伪产品',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">1-2 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">3-6 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">角色演讲 · 幽默 · 独白</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>观众给出一个荒谬的产品名（如"自动道歉机器人""梦境代购服务"）。</li><li>演员以"CEO"或"产品经理"的身份，做一场乔布斯式的产品发布会——包括产品功能、使用场景、定价策略。</li><li>要像真的在发布产品一样认真——认真的荒谬最好笑。</li></ol>
<h2>进阶变体</h2><ul><li><strong>发布会+提问</strong>：其他演员扮演记者，在发布会上提问挑战产品</li></ul>
<h2>教学提示</h2><p>产品发布会训练独角戏能力——一个人撑起整个舞台。关键技巧：用极其专业、高度自信的语气来描述一个荒谬的产品。</p><p><strong>训练的核心能力</strong>：独白能力、在单一角色中持续创造内容、演讲风格。</p>`
  },

  'm3-109': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['比喻联想', '角色', '情感表达'],
    usage: 'both', players: {min:2, max:6, label:'2-6 人'}, difficultyNum: 1,
    title: '和我谈恋爱 —— "和我谈恋爱就像XX"多人比喻接力',
    level: '★☆☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">2-6 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★☆☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">5-10 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">比喻联想 · 角色 · 情感表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>多人围坐或站成一圈——可以是约会场景、相亲大会、或任何"介绍自己"的情境。</li><li>每个人轮流使用固定句式：<strong>"和我谈恋爱就像XX"</strong>——用一个比喻来描述和自己恋爱的体验。XX 可以是任何事物——物品、动物、自然现象、日常场景。</li><li>每个比喻必须包含两层内容：<strong>性格特征</strong>（为什么是这个比喻——反映了自己什么特点）+ <strong>恋爱连接</strong>（这个比喻如何转化为恋爱体验）。例如："和我谈恋爱就像养一只猫——我大多数时候很独立不说话（性格），但深夜会悄悄钻进你怀里（恋爱连接）。"</li><li>其他人听完后回应——可以追问、质疑、感动、或用自己的比喻接龙——场景在比喻接力中展开。</li></ol>
<h2>进阶变体</h2><ul><li><strong>观众给喻体</strong>：观众喊出比喻对象（"台风！""便利贴！""WiFi信号！"）——演员必须立刻用这个喻体造句</li><li><strong>主题限定</strong>：所有比喻必须来自同一领域——"只能用动物""只能用电子产品""只能用天气"</li></ul>
<h2>教学提示</h2><p>固定句式"和我谈恋爱就像XX"是一个强大的创作引擎——它给了演员一个清晰的结构，同时又留下了无限的创意空间。好的比喻不是"像糖果一样甜"这种陈词滥调，而是<strong>具体的、个人化的、出人意料的</strong>——"和我谈恋爱就像坐绿皮火车——慢、颠、但窗外的风景让你不想下车"。多人版本让每个人都能参与——不需要抢，每个人都有属于自己的比喻时刻。</p><p><strong>训练的核心能力</strong>：比喻联想、在固定结构中创造个性表达、用具体意象代替抽象描述。</p>`
  },

  'm3-110': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['记忆', '累积叙事', '身体表达'],
    usage: 'both', players: {min:5, max:5, label:'5 人'}, difficultyNum: 1,
    title: '猴子上树 —— 五人累积故事接力',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">8-12 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">记忆 · 累积叙事 · 身体表达</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>5 个演员站成一排。观众给一个<strong>故事开头</strong>（如"一只猴子决定爬上最高的树"）。</li><li><strong>第 1 个人</strong>：重复观众给的开头，<strong>加上一个新句子和一个身体动作</strong>——"一只猴子决定爬上最高的树。（新句子）它先给自己买了一双登山鞋——（动作）弯腰系鞋带。"</li><li><strong>第 2 个人</strong>：<strong>完整重复前面所有人的句子和动作</strong>（第 1 个人的句子+动作），然后<strong>加上自己的新句子和新动作</strong>——"一只猴子决定爬上最高的树。它先给自己买了一双登山鞋（系鞋带动作）。（新句子）然后它在树上遇到了一个正在吃香蕉的树懒——（动作）慢动作挥手。"</li><li>依次类推——第 5 个人必须完整重复前 4 个人的所有句子和动作，再加上自己的。故事在第 5 个人处达到高潮并收束。</li><li>如果有人忘了前面的句子或动作——前面的人可以<strong>用动作提示</strong>但不能说话。</li></ol>
<h2>进阶变体</h2><ul><li><strong>反转版</strong>：第 5 个人讲完后，反向倒回去——5→4→3→2→1，每个人倒着剥离自己的部分</li><li><strong>无限猴子</strong>：不限于 5 人——一直加人直到有人无法完整复现所有内容</li></ul>
<h2>教学提示</h2><p>猴子上树是记忆力和身体表现的复合训练。核心不是"故事有多精彩"，而是<strong>全神贯注地听和看每一个人的句子和动作</strong>——因为你要完整复现它们。这直接训练即兴中最核心的能力——记住伙伴的 Offer 并在其上添加。前面的人做动作时要够清晰——因为后面的人需要复现你的动作。</p><p><strong>训练的核心能力</strong>：深度聆听与记忆、身体动作的精准复现、在累积结构中保持创造力。</p>`
  },

  'm3-111': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '竞技与表演', skills: ['联想','叙事','团体表演'],
    usage: 'both', players: {min:4, max:12, label:'4-12 人'}, difficultyNum: 2,
    title: '来历不明 —— 联想词触发故事，全员演绎',
    level: '★★☆', readTime: '约 3 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-12 人</div><div class="gi-label">人数</div></div><div class="gi-item"><div class="gi-val">★★☆</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">10-20 分钟</div><div class="gi-label">建议时长</div></div><div class="gi-item"><div class="gi-val">联想 · 叙事 · 团体表演</div><div class="gi-label">训练能力</div></div></div>
<h2>游戏规则</h2><ol><li>所有人围成一圈。第一个人说一个词——顺时针下一个人必须说出<strong>由该词联想到的下一个词</strong>（快速联想，在评判者反应过来之前说出口）。</li><li>当有人给出的联想词让圈中<strong>不是所有人都能立刻理解</strong>时（这个词很冷门、很奇怪、或者联想跳得太远），给出这个词的人必须<strong>讲一个相关的真实或虚构故事</strong>——解释这个词从哪来的、为什么联想到了它、这个词背后有什么。</li><li>如果这个故事<strong>有趣</strong>（由观众或带领者判定），<strong>所有人必须立刻表演出来</strong>——把故事中的场景即兴演绎出来。演完后回到联想圈继续下一轮。</li><li>如果故事"不够有趣"——大家一起起哄"吁——"，联想圈继续。</li></ol>
<h2>进阶变体</h2><ul><li><strong>主题联想</strong>：所有联想词必须围绕一个主题（如"童年""外星""厨房"）</li><li><strong>连环故事</strong>：不演单次故事——多个人的故事串联成一个更大的叙事</li></ul>
<h2>教学提示</h2><p>来历不明的核心是<strong>从简单的联想中挖出故事的金矿</strong>。大部分联想词是平凡的（"苹果→红色→消防车→火"）——但当有人跳到一个奇怪的联想（"火→我爷爷的火柴盒"），那就是故事的入口。带领者要鼓励大家：不怕联想跳得远，就怕讲的故事不够具体。具体细节越多，表演素材越丰富。</p><p><strong>训练的核心能力</strong>：联想与叙事的衔接、从个人经验中提取即兴素材、团体即兴演绎他人故事。</p>`
  },

  // ========== 📐 长即兴格式（4个，m3-112 ~ m3-115） ==========

  'm3-112': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '长即兴格式', skills: ['长即兴','结构','团体','主题'],
    usage: 'performance', players: {min:5, max:10, label:'5-10 人'}, difficultyNum: 3,
    title: '哈罗德（Harold）—— 经典长即兴格式',
    level: '★★★', readTime: '约 6 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5-10 人</div><div class="gi-label">演员人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">25-30 分钟</div><div class="gi-label">演出时长</div></div><div class="gi-item"><div class="gi-val">长即兴 · 结构 · 团体</div><div class="gi-label">类型</div></div></div>
<h2>格式概述</h2><p><strong>Harold</strong> 是由 Del Close 在芝加哥 iO Theater 发展出的最经典的长即兴格式。它被称为"即兴的交响乐"——三个看似无关的场景主题在第一轮（First Beat）中建立，在第二轮（Second Beat）中交错发展，在第三轮（Third Beat）中汇聚成一个完整的叙事整体。</p><p>Harold 的核心哲学：<strong>信任团体的集体智慧</strong>——不急于让场景之间"连通"，让连接在演出中自然地、有机地浮现，而不是被人为地强加。</p>
<h2>演出结构</h2><ol><li><strong>开场（Opening）</strong>（2-3 分钟）：观众给出一个词。团体围绕这个词做自由联想式的开场——可以是声音、动作、短语的接力。不急于建立场景，而是建立主题氛围。</li><li><strong>第一轮（First Beat）</strong>（8-10 分钟）：建立 3 个独立的场景。这些场景在表面上看互不相关——不同的角色、地点、情境。但主题上隐约相关（都与"失去"有关？都与"意外重逢"有关？）。</li><li><strong>团体游戏（Group Game）</strong>（2-3 分钟）：全体参与的一个即兴游戏或集体场景——从观众建议中衍生出来的主题变体。</li><li><strong>第二轮（Second Beat）</strong>（6-8 分钟）：第一轮的 3 个场景回归。但时间上有了推进、角色有了变化。不一定是续集——可以跳到完全不同的时间点。</li><li><strong>第三轮 + 收束（Third Beat / Run）</strong>（5-8 分钟）：所有场景和角色开始交织、汇聚，形成主题上的闭环。</li></ol>
<h2>示例演出流程</h2><p>观众给词："钥匙"</p><p>开场：演员围成一圈，从"钥匙"做自由联想——"钥匙→锁→门→家→回家→不敢回家→等待……"</p><p>第一轮场景：场景A：一个在监狱门口等了十年的母亲；场景B：一个第一次拿到自己公寓钥匙的年轻人；场景C：一个锁匠被叫去开一个打不开的保险柜。</p><p>第二轮回归：A的母亲出狱了，但外面的世界已经不是她认识的那个；B的公寓漏水了，钥匙打不开门；C的保险柜里什么都没有——锁匠的人生哲学被颠覆。</p><p>第三轮汇聚：A、B、C 在某种形式上相遇或主题呼应——"门""等待""打开"的意象在不同角色的人生中交织。</p>
<h2>排练提示</h2><ul><li><strong>不要在第一轮就试图连接</strong>：Harold 的美在于<strong>后来浮现的连接</strong>。第一轮轻松地建立三个独立世界。</li><li><strong>团体游戏是呼吸点</strong>：不是硬塞的搞笑环节——它给演员和观众一个呼吸的间隙，为第二轮回归积蓄能量。</li><li><strong>不要计划回归</strong>：不要在第一轮结束后在脑子里设计第二轮的内容。让第二轮的回归也是一个"即兴的礼物"。</li><li><strong>听主题，不听情节</strong>：不是"他们都有一把钥匙"——而是"他们都在等待某件事发生""他们都在面对一个打不开的东西"。</li></ul>`
  },

  'm3-113': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '长即兴格式', skills: ['长即兴','独白','主题','叙事'],
    usage: 'performance', players: {min:4, max:8, label:'4-8 人'}, difficultyNum: 3,
    title: '阿芒多（Armando）—— 独白驱动的长即兴',
    level: '★★★', readTime: '约 5 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">4-8 人</div><div class="gi-label">演员人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">25-40 分钟</div><div class="gi-label">演出时长</div></div><div class="gi-item"><div class="gi-val">长即兴 · 独白 · 主题</div><div class="gi-label">类型</div></div></div>
<h2>格式概述</h2><p><strong>Armando</strong>（也叫"独白即兴"）是由 Armando Diaz 在 iO Theater 发展出的长即兴格式。与 Harold 不同，Armando 以一个真实的个人独白为起点——通常是一位演员或特邀嘉宾分享一个真实的个人故事。演员围绕这个故事的主题、情绪和细节即兴展开一系列场景。</p><p>Armando 的最大特色：它融合了<strong>真实与虚构</strong>——独白是真实的，场景是即兴的。这种对比制造了独特的情感深度。</p>
<h2>演出结构</h2><ol><li><strong>独白（Monologue）</strong>（2-3 分钟）：一位独白者分享一个真实的个人故事。可以提前准备，也可以是当天的心情分享。</li><li><strong>场景展开（Scene Work）</strong>（4-6 分钟）：演员从独白中提取元素——一个细节、一种情绪、一个角色——即兴展开一个或多个场景。</li><li><strong>回到独白（Return）</strong>（1-2 分钟）：独白者再分享一个相关的故事或补充细节。</li><li><strong>场景继续</strong>——演员基于新素材继续即兴。这个循环可以重复 3-5 次。</li><li><strong>收束</strong>：最后一段独白+最后一场场景——它们应该形成一个完整的情感弧线。</li></ol>
<h2>示例演出流程</h2><p>独白者分享："我小学三年级的时候，在同一天丢了书包和家里的钥匙。我不敢回家，在学校门口坐了两个小时……"</p><p>第一轮场景：一个怕回家的小学生角色 × 一个发现了这个孩子并陪他说话的保安。</p><p>独白继续："后来我爸来了，一句话没说，给了我一把新的钥匙。"</p><p>第二轮场景：成年后的"我"，在办公室丢了重要的文件，这次他选择第一个给爸爸打电话。</p><p>收束：独白者分享这件事如何影响了他的一生；最后一场场景——一个父亲给自己的孩子配第一把钥匙。</p>
<h2>排练提示</h2><ul><li><strong>独白者不需要是"好故事人"</strong>：最好的独白是真实的、平凡的、带着当天心情的。不需要高潮迭起的人生经历。</li><li><strong>不要复述独白</strong>：场景不是把独白演一遍——是抓住独白中的情绪、主题或某个细节，创造一个<strong>新的</strong>故事。</li><li><strong>独白者和演员的关系</strong>：独白者在场景期间安静地坐在一旁观看——不是"评委"，而是"灵感来源"。</li></ul>`
  },

  'm3-114': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '长即兴格式', skills: ['长即兴','拼接','联想','团体'],
    usage: 'performance', players: {min:5, max:10, label:'5-10 人'}, difficultyNum: 3,
    title: '蒙太奇（Montage）—— 碎片场景的自由拼接',
    level: '★★★', readTime: '约 5 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">5-10 人</div><div class="gi-label">演员人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">20-30 分钟</div><div class="gi-label">演出时长</div></div><div class="gi-item"><div class="gi-val">长即兴 · 自由拼接 · 联想</div><div class="gi-label">类型</div></div></div>
<h2>格式概述</h2><p><strong>蒙太奇（Montage）</strong>是最自由的长即兴格式之一。没有固定的场景回归结构——演员从观众的一个词出发，做出一系列<strong>独立的短场景</strong>，每个场景之间通过某种主题、情绪、画面或"意外连接"来过渡。像电影蒙太奇一样——看似跳跃的画面，但在观众脑中形成完整的感受。</p><p>蒙太奇和面包机（m3-69）有相似的基因——从一个词跳到下一个，从不回头。区别是蒙太奇追求整体的主题完整性和情感统一。</p>
<h2>演出结构</h2><ol><li><strong>开场景（Opening Scene）</strong>：从观众建议词出发，做第一个场景——不需要"精彩"，只需要开始。</li><li><strong>自由流动（Free Flow）</strong>：每个场景结束时，下一个上台的演员从上一个场景中提取<strong>任何一个元素</strong>——一个词、一个动作、一种情绪、一个画面——作为新场景的起点。模式：场景A的元素→场景B，场景B的元素→场景C……链式推进。</li><li><strong>团体编辑</strong>：任何演员可以在任何时刻"编辑"——切入新场景。没有排练过的信号——全靠团体直觉。</li><li><strong>自然收束</strong>：当场景开始呼应早期的主题或达到情感高潮时，任何人可以做出"收束动作"（走到舞台前方、所有演员缓慢聚集、或回到开场景）。</li></ol>
<h2>示例演出流程</h2><p>建议词："雨伞"</p><p>A: 一个卖雨伞的街头小贩和一个嫌贵不买的顾客<br>B（提取"嫌弃"）：两个在二手市场互相嫌弃对方货品的人<br>C（提取"市场"）：超市抢购最后一盒鸡蛋的两个阿姨<br>D（提取"抢"）：一个游戏厅里抢老公的愤怒的妻子<br>E（提取"愤怒"）：一个瑜伽教练教愤怒管理但自己快绷不住了……</p>
<p>场景自然地从一个跳到下一个——像一系列不同角度的照片，最后在观众心中拼出一幅完整的画面。</p>
<h2>排练提示</h2><ul><li><strong>场景要短</strong>：蒙太奇不是 Harold——单个场景不需要深度发展。30 秒到 1 分钟就够了。以量取胜。</li><li><strong>连接要轻</strong>：不需要"深刻的主题连接"。一个词、一个动作、一种情绪——任何东西都可以是跳板。</li><li><strong>团体编辑要勇敢</strong>：看到场景没"东西"了就切——不要等它自然死亡。切入的人也是"救场的人"。</li><li><strong>最终会有主题浮现</strong>：即使你不刻意追求——当你做了 15 个场景后，观众和你都会开始看到它们之间的关联。</li></ul>`
  },

  'm3-115': {
    module: 'module3', moduleName: '即兴游戏库', subtopic: '长即兴格式', skills: ['长即兴','单场景','时间连续','角色'],
    usage: 'performance', players: {min:3, max:6, label:'3-6 人'}, difficultyNum: 3,
    title: 'Mono —— 单场景连续时间线',
    level: '★★★', readTime: '约 5 分钟',
    content: `<div class="game-info-box"><div class="gi-item"><div class="gi-val">3-6 人</div><div class="gi-label">演员人数</div></div><div class="gi-item"><div class="gi-val">★★★</div><div class="gi-label">难度</div></div><div class="gi-item"><div class="gi-val">20-40 分钟</div><div class="gi-label">演出时长</div></div><div class="gi-item"><div class="gi-val">长即兴 · 单场景 · 时间连续性</div><div class="gi-label">类型</div></div></div>
<h2>格式概述</h2><p><strong>Mono</strong>（也叫 Mono-Scene 或 Single-Location Improv）是所有长即兴格式中最简单也最难的一种。规则只有一条：<strong>整场演出只有一个地点、一段连续的时间</strong>——没有时间跳跃、没有空间切换、没有场景编辑。所有角色共享同一个空间和同一段连续的时间。</p><p>没有编辑的自由意味着所有的戏剧张力必须来自<strong>角色之间的互动</strong>——而不是换场景换情绪。Mono 展示了最纯粹的即兴表演：只有角色、关系和当下。</p>
<h2>演出结构</h2><ol><li><strong>设定地点（Setting the Stage）</strong>（1 分钟）：观众给出一个地点。演员在开场前花一分钟用身体构建这个空间——每样东西放在哪儿。</li><li><strong>角色入场（Character Entrances）</strong>：角色不是"上台"——他们一直在这个空间里（或自然地进入）。每个角色带着自己的"进门状态"（刚发生了什么？为什么来这里？）。</li><li><strong>时间自然流动（Real-time Flow）</strong>：时间不从 8:00 跳到 8:00——它是连续的。一个人去"上厕所"需要真实的 2 分钟时间——在这 2 分钟里，剩下的人继续生活。</li><li><strong>收束（Closure）</strong>：当场景自然地走到某个完结时刻——所有人都离开了、或者某个事件发生了、或者天亮了——演出结束。</li></ol>
<h2>示例演出流程</h2><p>地点："凌晨三点的 24 小时洗衣房"</p><p>空间构建：洗衣机在左边、烘干机在右边、自动售货机在角落、一排塑料椅子。</p><p>角色A：一个加班到深夜把衬衫送来干洗的程序员。<br>角色B：一个刚和伴侣吵架、只是想找个地方坐一会儿的女孩。<br>角色C：洗衣房的夜班管理员——他在这个洗衣房工作了 15 年。</p><p>30 分钟里——这三个角色在这个小小的空间里分享凌晨的时间。有人哭、有人笑、有人讲了自己从没对人讲过的事。管理员在角落里默默地听——到最后，他说了一句话。</p>
<h2>排练提示</h2><ul><li><strong>空间是第四个角色</strong>：把空间当作一个真的存在的东西来对待。每样东西在哪儿、去了几回——观众会记住。</li><li><strong>沉默是金</strong>：Mono 允许安静的时刻——不需要每分钟都有台词。一个人安静地叠衣服，另一个人看着——这本身就是戏剧。</li><li><strong>不要创造"理由"让人进来</strong>：如果没有人需要进来，就不要进来。空舞台也是场景。</li><li><strong>时间的真实性</strong>：如果你的角色说"我出去抽根烟"——他应该真的出去 3 分钟。留下的人继续存在。</li></ul>`
  },
};

// ===== 游戏排序（module3 的文章顺序） =====
const gameOrder = ['m3-1','m3-2','m3-3','m3-4','m3-5','m3-6','m3-7','m3-8','m3-9','m3-10','m3-11','m3-12','m3-13','m3-14','m3-15','m3-16','m3-17','m3-18','m3-19','m3-20','m3-21','m3-22','m3-23','m3-24','m3-25','m3-26','m3-27','m3-28','m3-29','m3-30','m3-31','m3-32','m3-33','m3-34','m3-35','m3-36','m3-37','m3-38','m3-39','m3-40','m3-41','m3-42','m3-43','m3-44','m3-45','m3-46','m3-47','m3-48','m3-49','m3-50','m3-51','m3-52','m3-53','m3-54','m3-55','m3-56','m3-57','m3-58','m3-59','m3-60','m3-61','m3-62','m3-63','m3-64','m3-65','m3-66','m3-67','m3-68','m3-69','m3-70','m3-71','m3-72','m3-73','m3-74','m3-75','m3-76','m3-77','m3-78','m3-79','m3-80','m3-81','m3-82','m3-83','m3-84','m3-85','m3-86','m3-88','m3-89','m3-90','m3-91','m3-92','m3-93','m3-94','m3-95','m3-96','m3-97','m3-99','m3-100','m3-101','m3-102','m3-103','m3-104','m3-105','m3-106','m3-107','m3-108','m3-109','m3-110','m3-111','m3-112','m3-113','m3-114','m3-115'];

// ===== 游戏能力分类映射（filter key → subtopic） =====
const gameSkills = {
  '热身': '热身破冰', '接纳': 'Yes And 与接纳', '角色': '角色塑造',
  '场景': '场景与叙事', '地位情绪': '地位与情绪', '竞技': '竞技与表演',
  '语言': '语言与文字', '长即兴': '长即兴格式'
};
