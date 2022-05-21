/*
	All the strings and their translations
*/

// purpose:		checks if the PluralRules API is available and returns
//				corresponding string based on given number
// arguments: 	number of items (int)
//				strings (object that contains 'many', 'few', 'one' and 'other')
// return:		a string that is right for given number
// ------------------------------------------------------------------------
function intlNumber(number, strings) {
  if ("PluralRules" in Intl) {
    let rules = new Intl.PluralRules(localStorage.language);

    return strings[rules.select(number)];
  } else {
    return strings["other"];
  }
}

// purpose:		the translations
// ************************************************************************
let translations = {
  // shared in the whole app
  // ------------------------------------------------------------------------
  situps: (howMany) => {
    return intlNumber(howMany, exports.situpsStrings);
  },

  workouts: (currentStep) => {
    currentStep = currentStep === undefined ? 0 : currentStep;
    const workoutStrings = {
      "en-US": {
        0: "push-ups",
        1: "sit-ups",
        2: "squats",
        3: "km run",
      },
      "zh-CN": {
        0: "个 </br> 俯卧撑",
        1: "个 </br> 仰卧起坐",
        2: "个 </br> 深蹲",
        3: "公里 </br> 慢跑",
      },
    };
    return workoutStrings[localStorage.language][currentStep];
  },

  situpsStrings: {
    "en-US": {
      many: "sit-ups",
      few: "sit-ups",
      one: "sit-up",
      other: "sit-ups",
    },
    "zh-CN": {
      many: "个仰卧起坐",
      few: "个仰卧起坐",
      one: "个仰卧起坐",
      other: "个仰卧起坐",
    },
  },

  seconds: (howMany) => {
    return intlNumber(howMany, exports.secondsStrings);
  },

  secondsStrings: {
    "en-US": {
      many: "seconds",
      few: "seconds",
      one: "second",
      other: "seconds",
    },
    "zh-CN": { many: "秒", few: "秒", one: "秒", other: "秒" },
  },

  back: {
    "en-US": "Back",
    "zh-CN": "返回",
  },

  cancel: {
    "en-US": "Cancel",
    "zh-CN": "取消",
  },

  accept: {
    "en-US": "Accept",
    "zh-CN": "确认",
  },

  yes: {
    "en-US": "Yes",
    "zh-CN": "对",
  },

  menuEmpty: {
    "en-US": "This menu seems to be empty",
    "zh-CN": "目录好像是空的",
  },

  menu: {
    "en-US": "Menu",
    "zh-CN": "目录",
  },

  showMenu: {
    "en-US": "Show menu",
    "zh-CN": "显示目录",
  },

  errorDismiss: {
    "en-US": "Dismiss this message",
    "zh-CN": "关闭消息",
  },

  errorServiceWorker: {
    "en-US":
      "For unknown reason the offline mode was not initialized. The app will work, but you need the internet connection.",
    "zh-CN":
      "由于未知错误，离线模式初始化错误。App需要互联网连接才能正常运行。",
  },

  // screen: 	hello
  // ------------------------------------------------------------------------
  helloThere: {
    "en-US": "ONE PUNCH. QUEST",
    "zh-CN": "一拳の道",
  },

  progressRemember: {
    "en-US":
      "Take the<br>「Road to Hero」<br>and challenge yourself <br>to be the next</br>One Punch Man!",
    "zh-CN": "踏上「英雄之路」<br>成为一下个<br>秃头披风侠！",
  },

  saveAppApple: {
    "en-US":
      "iPhone users: you can add this site to your Home Screen to enable logging",
    "zh-CN": "iPhone用户：请将本网页添加到主屏幕来记录训练数据",
  },

  saveAppAndroid: {
    "en-US":
      "Mobile users: you can install this website to your Home Screen for quicker access",
    "zh-CN": "手机用户：可以将本网页添加到主屏幕来记录训练数据",
  },

  wantToStart: {
    "en-US": "Ok, let's start",
    "zh-CN": "准备好了！",
  },

  // screen: 	test
  // ------------------------------------------------------------------------
  firstTestYourself: {
    "en-US": "Let's do a quick test!",
    "zh-CN": "体能测试",
  },

  doAsManysitups: {
    "en-US": "Do as many sit-ups as you can in a single try",
    "zh-CN": "你一口气能做多少个仰卧起坐？",
  },

  iDid: {
    "en-US": "I did ",
    "zh-CN": "我能做",
  },

  impressive: {
    "en-US": "Saitama Sensei, is that you?",
    "zh-CN": "琦玉老师，是你嘛？",
  },

  niceGoRest: {
    "en-US":
      "Nice! Don't forget to stretch and take some rest after your workouts.",
    "zh-CN": "体能不错，运动完记得适当拉伸哦",
  },

  tryHalfsitups: {
    "en-US":
      "Saitama Sensei once said:「Human beings are strong because we can change ourselves」It's ok if you feel it's a bit hard - what's important is your ability to adapt and presevere.",
    "zh-CN": "如果你觉得有点难，没关系！正所谓「人类真正的强大是自我改变」",
  },

  whatsNext: {
    "en-US": "Ok, what's next?",
    "zh-CN": "下一步？",
  },

  negativeJoke: {
    "en-US": "Leaving today's workout to tomorrow's you, eh?",
    "zh-CN": "明天的仰卧起坐，交给...明天的你？",
  },

  // screen: 	home
  // ------------------------------------------------------------------------
  lastDay: {
    "en-US": "Last time",
    "zh-CN": "上次做了",
  },

  comingUp: {
    "en-US": "Coming up",
    "zh-CN": "接下来一组",
  },

  currentLevel: {
    "en-US": "Current level",
    "zh-CN": "目前难度",
  },

  startNextTraining: {
    "en-US": "Start next training",
    "zh-CN": "开始下一组",
  },

  // screen: 	time
  // ------------------------------------------------------------------------
  availability: {
    "en-US": "Your Availability",
    "zh-CN": "训练时长",
  },

  timePerDay: {
    "en-US": "How much time per day are you able to dedicate to abs workout?",
    "zh-CN": "你每天能花多少时间做腹肌训练呢？",
  },

  iCan: {
    "en-US": "I can dedicate",
    "zh-CN": "我能花",
  },

  minutes: (howMany) => {
    return intlNumber(howMany, exports.minutesStrings);
  },

  minutesStrings: {
    "en-US": {
      many: "minutes",
      few: "minutes",
      one: "minutes",
      other: "minutes",
    },
    "zh-CN": { many: "分钟", few: "分钟", one: "分钟", other: "分钟" },
  },

  over20: {
    "en-US":
      "While I admire the dedication, working out your abs too much might actually be bad for you.",
    "zh-CN": "决心很好，但是切忌过度训练导致肌肉受伤哦",
  },

  between30and0: {
    "en-US": "Great! Be sure to also dedicate some time towards warming up!",
    "zh-CN": "好的，记得训练前做好充足的热身哦",
  },

  notFunny: {
    "en-US": "Hey! Stop trying to find exploits in the app.",
    "zh-CN": "你一定很有幽默感（",
  },

  gotcha: {
    "en-US": "Gotcha",
    "zh-CN": "明白",
  },

  // screen: 	training
  // ------------------------------------------------------------------------
  perform: {
    "en-US": "Perform",
    "zh-CN": "请做",
  },

  letsJust: {
    "en-US": "let's",
    "zh-CN": "可以",
  },

  restFor: {
    "en-US": "rest for",
    "zh-CN": "休息",
  },

  skipTheWait: {
    "en-US": "Skip the wait",
    "zh-CN": "跳过",
  },

  madeIt: {
    "en-US": "I made it",
    "zh-CN": "完成！",
  },

  // screen: 	finish
  // ------------------------------------------------------------------------
  nice: {
    "en-US": "Nice,",
    "zh-CN": "很棒，",
  },

  youveMadeIt: {
    "en-US": "You did it!",
    "zh-CN": "今天的锻炼完成！",
  },

  wasItHard: {
    "en-US": "Was it hard?",
    "zh-CN": "难度如何？",
  },

  itWasHard: {
    "en-US": "It was hard",
    "zh-CN": "太 难 了",
  },

  itWasOk: {
    "en-US": "It was ok",
    "zh-CN": "还行叭",
  },

  // screen: 	congrats
  // ------------------------------------------------------------------------
  youvePassed: {
    "en-US": "Hey there, you just did",
    "zh-CN": "恭喜你做了",
  },

  congratsUnits: {
    "en-US": "push-ups/sit-ups/squats",
    "zh-CN": "个俯卧撑/仰卧起坐/深蹲",
  },

  inSinglePractice: {
    "en-US": "in a single try!",
    "zh-CN": "祝贺你首次完成琦玉老师的健身日常！",
  },

  movingOn: {
    "en-US": "Please take a good rest.",
    "zh-CN": "（好好休息一下吧）",
  },

  respects: {
    "en-US": "My respect and congratulations!",
    "zh-CN": "坚持不易，再加再励！",
  },

  thanks: {
    "en-US": "Thanks!",
    "zh-CN": "谢谢啦",
  },

  // screen: 	menu, main
  // ------------------------------------------------------------------------
  appCreatedBy: {
    "en-US": "App created by Cveinnt",
    "zh-CN": "App作者 Cveinnt",
  },

  privacyPolicy: {
    "en-US": "Privacy Policy",
    "zh-CN": "隐私政策",
  },

  sponsor: {
    "en-US": "Sponsor",
    "zh-CN": "支持作者",
  },

  instructions: {
    "en-US": "Instructions",
    "zh-CN": "使用教学",
  },

  cancelTraining: {
    "en-US": "Cancel this training",
    "zh-CN": "取消本次训练",
  },

  manuallySetTrainingLevel: {
    "en-US": "Change level",
    "zh-CN": "修改难度",
  },

  resetApp: {
    "en-US": "Reset the app",
    "zh-CN": "重置App",
  },

  setLanguage: {
    "en-US": "Change language",
    "zh-CN": "设置语言",
  },

  // screen: 	menu, manually set your training level
  // ------------------------------------------------------------------------
  setYourSkillTo: {
    "en-US": "Set your skill to:",
    "zh-CN": "将熟练度设为：",
  },

  beginner: {
    "en-US": "Beginner",
    "zh-CN": "初学",
  },

  intermediate: {
    "en-US": "Intermediate",
    "zh-CN": "进阶",
  },

  advanced: {
    "en-US": "Advanced",
    "zh-CN": "老手",
  },

  setYourLevelTo: {
    "en-US": "Set your level to:",
    "zh-CN": "将训练难度设为：",
  },

  // screen: 	menu, reset the app
  // ------------------------------------------------------------------------
  resetQuestion: {
    "en-US": "Are you sure you want to reset the app?",
    "zh-CN": "确定要重置App吗？",
  },

  resetNote: {
    "en-US":
      "Please keep in mind that this will <strong>erase all your progress</strong>.",
    "zh-CN": "这将会<strong>清除所有训练数据</strong>.",
  },

  iAmSure: {
    "en-US": "I am sure",
    "zh-CN": "确定",
  },

  // screen: 	menu, instructions
  // ------------------------------------------------------------------------
  instructionsContent: {
    "en-US": `
			<h2>How should I start?</h2>
			<p>To get started, you only need to do one quick physical test. Then, the app will provide you with a personalized set of Saitama's workout to do. You have to do this  <strong>every day of the week</strong> and only rest when absolutely necessary. </p>
			<p>It may be hard in the begining, but don't give up easily - it gets way better down the road!</p>
			<h2>I barely can finish the first set!</h2>
			<p>If you are having difficulties, you might consider lowering the level or training with tools like sit-up benches.</p>
			<h2>Is this a professional routine?</h2>
			<p>No. But it will make you bald and strong. </p>
      <h2>But, but XXX said "One Punch Man workout is killing your gains!"</h2>
      <p>Look, let's apply some first principle thinking here - some workout is better than none. If you are working your muscles, they will grow. Simple as that.</p>
      <p>There are folks who went through the challenge and achieved pretty good results! You can easily find examples on YouTube and Reddit :)</p>
      <div class="video">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/JncrtbmdUys" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<h2>How do I install this app?</h2>
			<p>One Punch Quest is available as a PWA (Progressive Web App), which means you can install this app by adding this website to your Home Screen.</p>
			<p>For Apple users this is the only way for the app to remember your progress. Apple devices tend to remove saved data after a week of not using the website and the only way to prevent this is by adding it to Home Screen.</p>
			<p>If you found a bug or have a feature request, feel free to submit a GitHub issue <a href="https://github.com/Cveinnt/onepunch.quest/issues" target=_blank>here</a>. </p>
		`,
    "zh-CN": `
			<h2>怎么使用这个App呢？</h2>
			<p>首先在App主页做一个简单快速的自我体能测试，以便算法评估。如果体测后肌肉酸痛，可以先休息一天。第二天开始便可以根据App提供的训练内容进行锻炼。</p>
			<p><strong>加油！每天的坚持就是胜利！</strong></p>
			<h2>如果我连一组基础锻炼都做不了呢？</h2>
			<p>可以先放慢脚步，手动更改训练难度。或者从更简单入门的动作入门，比如可以找人扶着做，也可以买专用的辅助器械。</p>
			<h2>一拳超人的训练计划是否科学？</h2>
			<p>不。但你会变秃，也会变强。</p>
			<h2>但我看XXX博主说“千万不要做一拳超人的计划”？</h2>
      <p>健身是遵循人体基本法的。运动了总不不动好。只要你锻炼了相关的肌肉群体，那么你就会增肌。</p>
			<p>有不少人坚持这个计划，并得到了良好的结果。参见Bilibili :)</p>
			<div class="video">
				<iframe width="560" height="315" src="//player.bilibili.com/player.html?aid=47260525&bvid=BV16b41147cS&cid=82767538&page=1" border="0" frameborder="no" framespacing="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"> </iframe>
			</div>
			<h2>如何安装本App？</h2>
      <p>一拳の道是一个PWA（渐进式Web 应用），手机用户可以将本网页添加到主屏幕，以便快捷使用。</p>
      <p>对于苹果用户，这将是唯一能让App记录训练数据的方法。</p>
      <p>如果你找到了bug，或者有新功能建议，欢迎提交GitHub <a href="https://github.com/Cveinnt/onepunch.quest/issues" target=_blank>issue</a>。 </p>
		`,
  },

  // screen: 	menu, cancel current training
  // ------------------------------------------------------------------------
  sureToCancel: {
    "en-US": "Are you sure you want to cancel the current workout?",
    "zh-CN": "你确定想要取消本次训练嘛？",
  },

  // screen: 	menu, privacy policy
  // ------------------------------------------------------------------------
  privacyPolicyContent: {
    "en-US": `
			<h2>I collect data about:</h2>
			<ul>
				<li>how you are using the app.</li>
				<li>your progress and your level.</li>
				<li>the browser and the device you are using with help of Google Analytics, please refer to their <a href="https://policies.google.com/privacy">Privacy Policy</a> for the detailed information about what data is being collected.</li>
			</ul>
			<h2>Why?</h2>
			<p>I collect the data so I could improve the app in future. For example by implementing machine learning algorithm that could prepare personalised trainings instead predefined ones.</p>
			<p>I also collect the data to know if anyone is really using the app. :)</p>
		`,
    "zh-CN": `
			<h2>本网站收集的数据：</h2>
			<ul>
				<li>用户如何使用本App</li>
				<li>用户训练难度以及进度</li>
				<li>用户访问客户端，为Google Analytics分析，详情请访问<a href="https://policies.google.com/privacy">GA隐私声明</a>。</p>
			</ul>
			<h2>为什么要收集这些数据呢？</h2>
			<p>收集数据是为了优化用户的使用体验以及推荐算法的准确度。</p>
		`,
  },

  // screen: 	menu, sponsor
  // ------------------------------------------------------------------------
  sponsorContent: {
    "en-US": `
			<h2>Maintaining the app isn't cheap.</h2>
			<p>If this app is helpful to you, please consider donating!</p>
      <ul>
				<li><a href="https://patreon.com/cveinnt">Patreon</a></li>
				<li><a href="https://paypal.me/cveinnt">Paypal</a></li>
			</ul>
			<p>As the only dev, any help would be greatly appreciated! :)</p>
		`,
    "zh-CN": `
			<h2>维护app不易</h2>
      <p>如果本app对你有帮助，请考虑赞助作者：</p>
			<ul>
				<li><a href="https://patreon.com/cveinnt">Patreon</a></li>
				<li><a href="https://paypal.me/cveinnt">Paypal</a></li>
			</ul>
			<p>谢谢！</p>
		`,
  },

  // screen: 	menu, manually set language
  // ------------------------------------------------------------------------
  setYourLanguageTo: {
    "en-US": "Set your language to:",
    "zh-CN": "将语言设为：",
  },
};

// exports
// ------------------------------------------------------------------------
// supported languages list
let supportedLanguages = {
  "en-US": ["English", "en-US", "en"],
  "zh-CN": ["中文", "zh-CN", "zh"],
};

// check for supported languages and if found, set it
if (!localStorage.language && navigator.language) {
  let userLanguage = navigator.language;

  for (let [key, value] of Object.entries(supportedLanguages)) {
    if (value.indexOf(userLanguage) >= 0) {
      localStorage.language = key;
    }
  }
}

// if not found, set the default
if (!localStorage.language) {
  localStorage.language = "en-US";
}

// export the strings
let exportedStrings = {};

for (let key in translations) {
  if (typeof translations[key] === "object") {
    exportedStrings[key] = translations[key][localStorage.language];
  } else {
    exportedStrings[key] = translations[key];
  }
}

let exports = { ...exportedStrings, supportedLanguages };

export default exports;
