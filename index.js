function _0x1fe2(_0x50d088,_0x1a6e36){const _0x1fe2be=_0x1a6e();return _0x1fe2=function(_0x56802f,_0x53cdb5){_0x56802f=_0x56802f-0x190;let _0x2e1e65=_0x1fe2be[_0x56802f];return _0x2e1e65;},_0x1fe2(_0x50d088,_0x1a6e36);}const _0x5d3e4a=_0x1fe2,Discord=require(_0x5d3e4a(0x19c)),client=new Discord[(_0x5d3e4a(0x198))](),fs=require('fs'),Enmap=require(_0x5d3e4a(0x1a6)),utils=require(_0x5d3e4a(0x194));if(!process['env'][_0x5d3e4a(0x191)]){try{const config=require(_0x5d3e4a(0x1a9));global[_0x5d3e4a(0x193)]={'token':config[_0x5d3e4a(0x19b)],'prefix':config['prefix']};}catch(_0x19b91f){console[_0x5d3e4a(0x19f)]('No\x20config\x20file\x20found,\x20create\x20it\x20or\x20use\x20environnement\x20variables.'),process['exit'](0x1);};}else{if(!process['env'][_0x5d3e4a(0x19a)])process[_0x5d3e4a(0x1aa)][_0x5d3e4a(0x19a)]='$';global[_0x5d3e4a(0x193)]={'token':process[_0x5d3e4a(0x1aa)]['TOKEN'],'prefix':process[_0x5d3e4a(0x1aa)][_0x5d3e4a(0x19a)]};}if(!process['env'][_0x5d3e4a(0x199)])try{global['config']['allowed']=require(_0x5d3e4a(0x1ad))[_0x5d3e4a(0x195)];}catch(_0x301309){global['config'][_0x5d3e4a(0x195)]=[];}else global[_0x5d3e4a(0x193)]['allowed']=process[_0x5d3e4a(0x1aa)][_0x5d3e4a(0x199)];function _0x1a6e(){const _0x3fe234=['list','TOKEN','commands','config','./utils','allowed','./events/','showTable','Client','ALLOWED','PREFIX','token','discord.js-selfbot','forEach','push','error','login','bind','then','./commands/','readdir','endsWith','enmap','split','log','./config','env','.js','Table\x20of\x20commands\x20and\x20events\x20:\x0a','./allowed.json'];_0x1a6e=function(){return _0x3fe234;};return _0x1a6e();}client[_0x5d3e4a(0x1a0)](config[_0x5d3e4a(0x19b)]),utils['log']('Logging\x20in...'),global['queue']=new Map(),client[_0x5d3e4a(0x192)]=new Enmap();var loaded={'events':[],'commands':[]},promise=new Promise(_0x1e452c=>{const _0x33d477=_0x5d3e4a;fs[_0x33d477(0x1a4)](_0x33d477(0x196),(_0x4a6804,_0x2c4008)=>{const _0x247c23=_0x33d477;if(_0x4a6804)return console[_0x247c23(0x19f)];_0x2c4008[_0x247c23(0x19d)](_0xaf7c78=>{const _0x423821=_0x247c23;if(!_0xaf7c78[_0x423821(0x1a5)]('.js'))return;const _0x7a50d8=require(_0x423821(0x196)+_0xaf7c78);let _0x21fcb1=_0xaf7c78['split']('.')[0x0];loaded['events'][_0x423821(0x19e)](_0x21fcb1),client['on'](_0x21fcb1,_0x7a50d8[_0x423821(0x1a1)](null,client));}),_0x1e452c();});});fs['readdir'](_0x5d3e4a(0x1a3),async(_0x183a16,_0x6f6490)=>{const _0x67171d=_0x5d3e4a;if(_0x183a16)return console['error'];_0x6f6490[_0x67171d(0x19d)](_0x2b4cba=>{const _0x24ca69=_0x67171d;if(!_0x2b4cba[_0x24ca69(0x1a5)](_0x24ca69(0x1ab)))return;let _0x348a93=require('./commands/'+_0x2b4cba);_0x348a93['names'][_0x24ca69(0x190)][_0x24ca69(0x19d)](_0x551fcf=>{const _0x31c1f3=_0x24ca69;client[_0x31c1f3(0x192)]['set'](_0x551fcf,_0x348a93);});let _0x4a1e0e=_0x2b4cba[_0x24ca69(0x1a7)]('.')[0x0];loaded[_0x24ca69(0x192)][_0x24ca69(0x19e)](_0x4a1e0e);}),promise[_0x67171d(0x1a2)](()=>{const _0xdc3e5c=_0x67171d;utils[_0xdc3e5c(0x1a8)](_0xdc3e5c(0x1ac)+utils[_0xdc3e5c(0x197)](loaded));});});