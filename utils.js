const _0x59f408=_0x13c8,AsciiTable=require(_0x59f408(0xfb)),YouTube=require(_0x59f408(0x105))[_0x59f408(0xde)],ytdl=require('ytdl-core');module[_0x59f408(0xd8)]={'isFloat':function(_0x8ffad5){const _0x1ab7b4=_0x59f408;return typeof _0x8ffad5===_0x1ab7b4(0xe7)&&_0x8ffad5%0x1!==0x0;},'log':function(_0x2fbd1e){const _0x3a719b=_0x59f408;date_ob=new Date(),date=date_ob['getDate']()[_0x3a719b(0xda)](),month=date_ob[_0x3a719b(0xe5)]()[_0x3a719b(0xda)](),year=date_ob[_0x3a719b(0xfe)]()[_0x3a719b(0xda)]();date[_0x3a719b(0xf6)]===0x1&&(date='0'+date);;month[_0x3a719b(0xf6)]===0x1&&(month='0'+month);;dmy=date+'/'+month+'/'+year,hms=date_ob[_0x3a719b(0xfc)](),console[_0x3a719b(0xd6)]('[\x20'+dmy+_0x3a719b(0x102)+hms+_0x3a719b(0xd4)+_0x2fbd1e);},'isURL':function(_0xdcd0d9){const _0x3eb64c=_0x59f408;if(!_0xdcd0d9)return![];var _0x4589df=new RegExp(_0x3eb64c(0xf2)+_0x3eb64c(0xff)+_0x3eb64c(0x107)+_0x3eb64c(0xf0)+_0x3eb64c(0xe9)+_0x3eb64c(0xd9)+_0x3eb64c(0xd3),'i');return _0x4589df[_0x3eb64c(0xdc)](_0xdcd0d9);},'showTable':function(_0x4fa0d3){const _0x4f9d58=_0x59f408;var _0x188abc=new AsciiTable(_0x4f9d58(0xec));_0x188abc[_0x4f9d58(0xe8)](_0x4f9d58(0x106),'Events');for(let _0x55a742=0x0;_0x55a742<=Math[_0x4f9d58(0xf5)](_0x4fa0d3['commands']['length'],_0x4fa0d3[_0x4f9d58(0xf3)][_0x4f9d58(0xf6)])-0x1;_0x55a742++){_0x188abc['addRow'](_0x4fa0d3[_0x4f9d58(0x100)][_0x55a742],_0x4fa0d3['events'][_0x55a742]);};return _0x188abc[_0x4f9d58(0xfd)]();},'getUrl':async function(_0xfa636a){const _0x445b92=_0x59f408;stringOfWords=_0xfa636a[_0x445b92(0xe0)]('\x20'),lookingOnYtb=new Promise(async _0x1e014c=>{const _0x5d058e=_0x445b92;YouTube[_0x5d058e(0x101)](stringOfWords,{'limit':0x1})[_0x5d058e(0xdf)](_0x32694f=>{const _0x1f1889=_0x5d058e;_0x1e014c(_0x1f1889(0x104)+_0x32694f[0x0]['id']);});});let _0x4c80f9=await lookingOnYtb;return _0x4c80f9;},'play':function(_0x1a25ce){const _0x512e08=_0x59f408,_0x416739=require(_0x512e08(0xdb)),_0x3d0edf=queue[_0x512e08(0xf9)](_0x512e08(0xf1));if(!_0x1a25ce)return _0x416739[_0x512e08(0xd6)]('No\x20songs\x20left\x20in\x20queue'),_0x3d0edf[_0x512e08(0xe4)][_0x512e08(0xea)](),queue[_0x512e08(0xef)]('queue');_0x416739['log'](_0x512e08(0xeb)+_0x1a25ce['title']);const _0x3bd686=_0x3d0edf[_0x512e08(0xed)][_0x512e08(0xe2)](ytdl(_0x1a25ce['url'],{'filter':_0x512e08(0x103),'quality':_0x512e08(0xd2),'highWaterMark':0x1<<0x19}));_0x3bd686['on'](_0x512e08(0xdd),()=>{const _0x18b41d=_0x512e08;if(_0x3d0edf[_0x18b41d(0xee)][0x0])_0x416739['log'](_0x18b41d(0xf7)+_0x3d0edf[_0x18b41d(0xee)][0x0][_0x18b41d(0xe6)]);else _0x416739['log'](_0x18b41d(0xf4));if(_0x3d0edf[_0x18b41d(0xd5)]===![]||_0x3d0edf[_0x18b41d(0xe1)]===!![])_0x3d0edf[_0x18b41d(0xee)][_0x18b41d(0xe3)]();if(_0x3d0edf[_0x18b41d(0xe1)]===!![])_0x3d0edf[_0x18b41d(0xe1)]=![];_0x416739[_0x18b41d(0xe2)](_0x3d0edf[_0x18b41d(0xee)][0x0]);}),_0x3bd686['on'](_0x512e08(0xfa),_0x19a247=>{const _0x19db0c=_0x512e08;console[_0x19db0c(0xd6)](_0x19a247);}),_0x3bd686[_0x512e08(0xf8)](_0x3d0edf[_0x512e08(0xd7)]/0x5);}};function _0x13c8(_0x185ad9,_0x54f78a){const _0x13c8dd=_0x54f7();return _0x13c8=function(_0x2bf754,_0x159d2c){_0x2bf754=_0x2bf754-0xd2;let _0x587c73=_0x13c8dd[_0x2bf754];return _0x587c73;},_0x13c8(_0x185ad9,_0x54f78a);}function _0x54f7(){const _0x4e182c=['highestaudio','(\x5c#[-a-z\x5cd_]*)?$','\x20]\x20','loop','log','volume','exports','(\x5c?[;&a-z\x5cd%_.~+=-]*)?','toString','./utils','test','finish','default','then','join','skipped','play','shift','voiceChannel','getMonth','title','number','setHeading','(\x5c:\x5cd+)?(\x5c/[-a-z\x5cd%_.~+]*)*','leave','Started\x20playing\x20the\x20music\x20:\x20','Loading\x20content...','connection','songs','delete','localhost','queue','^(https?:\x5c/\x5c/)?','events','Finished\x20playing\x20all\x20musics,\x20no\x20more\x20musics\x20in\x20the\x20queue','max','length','Finished\x20playing\x20the\x20music\x20:\x20','setVolumeLogarithmic','get','error','ascii-table/ascii-table','toLocaleTimeString','render','getFullYear','((([a-z\x5cd]([a-z\x5cd-]*[a-z\x5cd])*)\x5c.)+[a-z]{2,}|','commands','search','\x20|\x20','audioonly','https://www.youtube.com/watch?v=','youtube-sr','Commands','((\x5cd{1,3}\x5c.){3}\x5cd{1,3}))|'];_0x54f7=function(){return _0x4e182c;};return _0x54f7();}