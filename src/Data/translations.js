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
    "en-US": "ONE PUNCH QUEST",
    "zh-CN": "一拳の道",
  },

  progressRemember: {
    "en-US": "Minimalist workout app that helps you become One Punch Man!",
    "zh-CN": "超极简主义 <br> 健身APP",
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
    "en-US": "I did",
    "zh-CN": "我能做",
  },

  impressive: {
    "en-US": "Impressive! You're pretty advanced.",
    "zh-CN": "体能很棒！看来是老手哦",
  },

  niceGoRest: {
    "en-US":
      "Nice! Don't forget to stretch and take some rest after your workouts.",
    "zh-CN": "体能不错，运动完记得适当拉伸哦",
  },

  tryHalfsitups: {
    "en-US":
      "It's ok if you feel it's a bit hard. Getting started is the first step of success!",
    "zh-CN": "如果你觉得有点难，没关系！决心和态度是才是成功的第一步",
  },

  whatsNext: {
    "en-US": "Ok, what's next?",
    "zh-CN": "下一步？",
  },

  levitationJoke: {
    "en-US": "Humans aren't supposed to bend that way, are they..?",
    "zh-CN":
      "我自幼从师气功大师，打遍江湖无敌手，却从未听闻武功如此的高手。有空切磋一下可好？",
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

  inSinglePractice: {
    "en-US": "in a single try!",
    "zh-CN": "（一口气耶）",
  },

  movingOn: {
    "en-US": "Please take a good rest.",
    "zh-CN": "（好好休息一下吧）",
  },

  respects: {
    "en-US": "My respect and congratulations!",
    "zh-CN": "进步优异，再加再励！",
  },

  thanks: {
    "en-US": "Thanks!",
    "zh-CN": "谢谢啦",
  },

  // screen: 	menu, main
  // ------------------------------------------------------------------------
  appCreatedBy: {
    "en-US": "App created by Vincent Wu",
    "zh-CN": "App作者 Vincent Wu",
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
			<p>To get started, you only need to do the initial test, which is a measure of your current muscle capabilities. Then, if you need it, you may take a day off to rest. After that just open the app and it will provide you with a personalized set of sit-ups to do. I recommend doing this at least three days a week and <strong>take a day off to rest</strong>. </p>
			<p>It may be hard at the begining, so don't give up easily. It gets better down the road.</p>
			<h2>I barely can do a single sit-up</h2>
			<p>If you feel your muscles are too weak you might consider training with sit-up benches. This will give you time to build some muscle. When you are ready, you can reset the app and start over with a new sit-up schedule.</p>
			<h2>Is this a professional routine?</h2>
			<p>I am not a professional trainer and this is just a simple workout tracker.</p>
			<h2>How to do a good sit-up?</h2>
			<p>You can easily find guides on YouTube. :)</p>
			<div class="video">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/8jyhJ6TiUPA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<p>If you have a tough time doing full sit-ups you can always make it a little easier by resting on your back.</p>
			<div class="video">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/WcHtt6zT3Go" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<h2>Is there a goal here?</h2>
			<p>You set the goal. The app will ask you if the proposed set of sit-ups was hard or easy to do. If you answer it was hard, it will let you do the same set untill it gets easier. Then it will propose another set with more sit-ups.</p>
			<p>You can continue as long as you can or choose to stop at any level and just repeat a single set to maintain your level.</p>
			<p>I also like to start from the begining from time to time by resetting the app and build my way up from the first level all over.</p>
			<h2>How you use this app?</h2>
			<p>I recommend that you open this app on your phone as it is easier to take with you wherever you will do the workout.</p>
			<p>You can install the app by adding this website to your Home Screen.</p>
			<p>For Apple users this is the only way for the app to remember your progress. Apple devices tend to remove the saved data after a week of not using any website and the only way to prevent this is by adding it to Home Screen.</p>
			<p>Android users can add this website to their Home Screen as well to be able to use it as a normal system application.</p>
		`,
    "zh-CN": `
			<h2>怎么使用这个App呢？</h2>
			<p>首先在App主页做一个简单快速的自我体能测试，以便算法评估。如果体测后肌肉酸痛，可以先休息一天。第二天开始便可以根据App提供的训练内容进行锻炼。 <strong>一般针对腹肌推荐训练一天，休息一天</strong>。</p>
			<p>加油！坚持就是胜利！</p>
			<h2>如果我连一组仰卧起坐都做不了呢？</h2>
			<p>可以先放慢脚步，手动更改训练难度。或者从更简单入门的动作入门，比如可以找人扶着做，也可以买专用的辅助器械。</p>
			<h2>训练计划的生成算法是否科学？</h2>
			<p>我并不是专业健身教练，但App所使用算法是根据专业健身教练定制的腹肌训练计划生成的。
			<h2>如何做一个标准的仰卧起坐？</h2>
			<p>参见Bilibili :)</p>
			<div class="video">
				<iframe width="560" height="315" src="//player.bilibili.com/player.html?aid=547053958&bvid=BV1bq4y1p7JL&cid=379915154&page=1" border="0" frameborder="no" framespacing="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"> </iframe>
			</div>
			<h2>手机如何使用App？</h2>
			<p>手机用户可以将本网页添加到主屏幕，以便快捷使用。</p>
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
			<p>Any help would be greatly appreciated! :)</p>
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
