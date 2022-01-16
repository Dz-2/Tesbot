const {		
		Presence,
		Mimetype, 
		waChatkey,
		ProxyAgent,	
		processTime,
		mentionedJid,
		MessageType, 
		WAzeeection,
		RezeeectMode,		
		MessageOptions, 
		GroupSettingChange, 	
		WALocationMessage, 
		WA_DEFAULT_EPHEMERAL, 
		WA_MESSAGE_STUB_TYPES, 
		} = require('@adiwajshing/baileys')
const fs = require('fs')
const toMs = require('ms')
const hx = require('hxz-api')
const axios = require("axios")
const ms = require('parse-ms')
const crypto = require('crypto') 
const yts = require( 'yt-search')
const request = require('request')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const brainly = require('brainly-scraper')
const speed = require('performance-now')
const { y2mate } = require('./lib/y2mate');
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const imageToBase64 = require('image-to-base64')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { exec, spawn, execSync } = require('child_process')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { Miminnya, BotName, fake, ownerNumber, gamewaktu, gcounti, limitCount, targetpc, lolkey, Gopay, Dana, Pulsa} = require('./setting.json')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom, banner, start, info, success, close } = require('./lib/functions')
tamnel = fs.readFileSync('./media/zeebot.jpg')
var p = '```'
publik = false

//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
 
  
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = zee = async (zee, mek, _welkom) => {
            	//++++.|| A N T I  C A L L
  zee.on('CB:Blocklist', json => {
        if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	  	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	    }) 
//++++ || A U T O  B L O C K	
	zee.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
	    zee.sendMessage(call, `Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/+${onwerNumber}`, MessageType.text)
		.then(() => zee.blockUser(call, "add"))
		}, 100);
		})
	        try {
            if (!mek.hasNewMessage) return 
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.prefix
			global.blocked		
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '#'          	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		  	const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
	   //    	const itsMe = mek.key.fromMe ? true : false
	   //    	const isBanchat = isGroup ? bancht.includes(from) : false
		    const botNumber = zee.user.jid
		    const botNumberss = zee.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    const sender = isGroup ? mek.participant : mek.key.remoteJid
		    const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`, `18783021508@s.whatsapp.net`]
	     	const isOwner = OwnerNumber.includes(sender)
	     	const totalchat = await zee.chats.all()
		    const groupMetadata = isGroup ? await zee.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? _welkom.includes(from) : false
		  //  const isUser = pendaftar.includes(sender)
            const conts = mek.key.fromMe ? zee.user.jid : zee.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? zee.user.name : conts.notify || conts.vname || conts.name || '-'           
	    //   const gcount = isPremium ? gcounti.prem : gcounti.user

            
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'tunggu om',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            zee.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            zee.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zee.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //+++ || FAKE TROLI         
           const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: -00298736662893902737637, status: 200, thumbnail: tamnel, surface: 200, message: `➥ Made By ${Miminnya}\n➥ Hallo ${pushname}`, orderTitle: '☭RaraaDz☏', sellerJid: '0@s.whatsapp.net'} } }    
           //+++ || FAKE KONTAK           
           const fkontak = { 
           key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo ${pushname}\n${ucapanWaktu}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': image}}} 

const katalog = (teks) => {
             res = zee.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": -999999999999999999, "message": teks, "footerText": "©Zeebot☭", "jpegThumbnail": fs.readFileSync('./media/zeebot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
             zee.relayWAMessage(res)
        }
        
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        zee.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: mek 
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        zee.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await zee.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        zee.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: troli,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return zee.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }                                 
                const sendMedia = async(from, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(from, text, mids)
        } 
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        zee.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
        fs.unlinkSync(filename)
        });
        } 
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        zee.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)
        });
        }                                 
        const sendFileFromStorage = (path, type, options) => {
        zee.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }        
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        zee.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        zee.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        zee.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        zee.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        zee.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        zee.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        zee.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        zee.sendMessage(from, hasil, type, options).catch(e => {
        zee.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
       })
     })
   })
 })
}


        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zee.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return 
		}            
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

	  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
       
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  


//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
     
switch(is) {
	case '@18783021508':
reply(`Lu ${pushname}? Gausah ngetag owner gw!`)
break
	case 'thanks':
    case 'terimakasih':
    case 'makasih':
    case 'mksh':
    case 'thank':
    reply('sama sama 👻makasih udah pakek fitur bot nya') 
    break
    case 'help': case 'menu':
    menu = `
⟥───────⟤㒱
➨hallo ${pushname}
➨𝚂𝚎𝚛𝚟𝚎𝚛 : safari.com
➨𝙷𝙾𝚂𝚃𝙽𝙰𝙼𝙴 : 𝒔𝒂𝒇𝒂𝒓𝒊 𝐳𝐞𝐞
➨waktu server : ${wita} 
⟥────⟤👻⟥────⟤㒱
➥ list menu* :
*㐱 play*
*㐱 sticker <reply gambar nya>*
*㐱 ytmp4 <link>*
*㐱 ytmp3 <link>*
*㐱 toimg <reply stiker nya>*
*㐱tiktok <link nya>*
*㐱 instagram*
*㐱  owner*
⟥──────────⟤㒱
*㐱 donasi*
*㐱 sewa <untuk sewa bot>*
⟥───────⟤㒱
➥ Grup menu
*㐱 welcome on/off*
⟥───────────⟤㒱
➥ownermenu
*♕ self*
*♕ public*
*♕ bc (broadcast)*
`
    zee.sendMessage(from, { contentText: menu, footerText: '➥ ☏zganzz18@gmail.com',buttons: [{ buttonId: `!emsce`, buttonText: { displayText: '</scbot>' }, type: 1 },{ buttonId: `!info`, buttonText: { displayText: '</info>' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
    break
}
    
    
    
switch (command) {         
    case 'emsce': case 'sc':
    reply('minta ke owner☏🗿')
    break
    case 'owner':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:${Miminnya}\n`
         + `ORG: MiminBot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n`
         + 'END:VCARD'.trim()
         zee.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: fkontak, 
         })
         reply('Spam = Auto Block')
                    break 
                    case 'sewa': case 'swa':
            sew = `*Mau Sewa Bot Kak?*
*💲Harga sewa seminggu :*
*➣mingguan*
➥Rp 3.000 - 5.000

*💲Harga sewa sebulan :*
*➣bulanan*
➥Rp 5.000 - 10.000

*💲Harga sewa permanen :*
*➣Sewa permanen*
➥Rp 25.000 - 30.000

➨Keuntungan sewa
• Jadi Owner Bot
• Akses segala fitur 
• Unlock Broadcast
• Unlock Fitur Owner`
       but = [
           { buttonId: `!owner`, buttonText: { displayText: '✓OTW SEWA!! ' }, type: 1 }]
          sendButton(from, sew, 'Chat Owner Untuk Menyewa Bot', but, mek)
          break
    case 'info':
    katalog('bot di buat oleh owner zee 🗿')
    break
    case'donasi':
    reply(`Donasi woy seikhlas nya aja🤙
    "Yang donasi semoga dapet pahala banyak amin"
    ☏*Dana* = 081273900363 
    ☏*Pulsa* = 081273900363 
    _thanks buat yang donasi_`) 
    break
    case 'bc': case 'broadcast':
         if (!isOwner) return  reply(mess.only.owner)
         if (args.length < 1) return reply('teks?')
         anu = await zee.chats.all()
         if (isMedia && !mek.message.videoMessage || isQuotedImage) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
         bc = await zee.downloadMediaMessage(encmedia)
         for (let _ of anu) {
       	 tes = `${body.slice(4)}`
         zee.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `© DZ-offc `, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '☷MENU'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText:'☰OWNER'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             zee.sendMessage(_.jid, { contentText: `${textt}`, footerText: `© DZ-offc `, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '☷MENU'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText:'☰OWNER'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
  case 'play':       
           if (args.length < 1) return reply(`Send command *${prefix}play query`)
  	 //      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (ups.lim)         
           reply(mess.wait)
           let yut = await yts(q)
           yta(yut.videos[0].url)             
           .then(async(res) => {
           const { thumb, title, filesizeF, filesize } = res
           const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n\n•💬 Title : ${yut.all[0].title}\n•⏰️ Uploaded on : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Duration : ${yut.all[0].timestamp}\n•👑 Channel : ${yut.all[0].author.name}\n•🔗 Link : ${yut.all[0].url}`
           ya = await getBuffer(thumb)        
           py =await zee.prepareMessage(from, ya, image)
           gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
           gbuttonan = {
           imageMessage: py.message.imageMessage,
           contentText: capti,
           footerText: 'Please select type☕',
           buttons: gbutsan,
           headerType: 4
           }
           await zee.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
          // limitAdd(sender, limit)
           break
           case "instagram":
           if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
           return reply(mess.error.url);
           if (!q) return fakegroup("Linknya?");
           reply(mess.wait);
           hx.igdl(args[0]).then(async (result) => {
           for (let i of result.medias) {
           if (i.url.includes("mp4")) {
           let link = await getBuffer(i.url);
           zee.sendMessage(from, link, video, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           } else {
           let link = await getBuffer(i.url);
           zee.sendMessage(from, link, image, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           }
           }
           });
           break;
     case 'ytmp3':
           if (args.length < 1) return reply('Link?')
  	    //   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (ups.lim)            
           if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link not valid')
           reply("Please Waiting!! Downloading Media. . .")
           teks = args.join(' ')
           res = await y2mateA(teks)
           sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
         //  limitAdd(sender, limit)
           break         
     case 'ytmp4':
           if(!q) return reply('linknya?')   
  	   //    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (ups.lim)     
           res = await ytv(`${q}`).catch(e => {
           reply('```[ ! ] Error Saat Mengirim Video```')})
           sendMediaURL(from, `${res.dl_link}`,'Nih Tod🗿')
       //    limitAdd(sender, limit)
           break 
    case 'wel':   
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
          if ((args[0]) === 'on') {
          if (isWelkom) return reply('welcome sudah aktif')
          _welkom.push(from)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else if ((args[0]) === 'off') {
          if (!isWelkom) return reply('welcome sudah off sebelumnya')
          _welkom.splice(from, 1)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
          break
	case 'public':
	  	  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = true
		  reply('Sukses mengubah mode self ke public☭')
		  break
	case 'self':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = false
		  reply('Sukses mengubah mode public ke self☭')
		  break
     case 'sticker': case 'stiker': case 'sg': case 's':
  	    //   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (ups.lim)       
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
           const media = await zee.downloadAndSaveMediaMessage(encmedia)
           ran = '666.webp'
           await ffmpeg(`./${media}`)
           .input(media)
           .on('start', function (cmd) {
           })
           .on('error', function (err) {
           console.log(`Error : ${err}`)
           fs.unlinkSync(media)
           reply('error')
           })
           .on('end', function () {
           zee.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
           fs.unlinkSync(media)
           fs.unlinkSync(ran)
           })
           .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
           .toFormat('webp')
           .save(ran)
           } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
           const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
           const media = await zee.downloadAndSaveMediaMessage(encmedia)
           ran = '999.webp'
           reply(mess.wait)
           await ffmpeg(`./${media}`)
           .inputFormat(media.split('.')[1])
           .on('start', function (cmd) {
           })
           .on('error', function (err) {
           console.log(`Error : ${err}`)
           fs.unlinkSync(media)
           tipe = media.endsWith('.mp4') ? 'video' : 'gif'
           reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
           })
           .on('end', function () {
           zee.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
           fs.unlinkSync(media)
           fs.unlinkSync(ran)
           })
           .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
           .toFormat('webp')
           .save(ran)
           } else {
           reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
           }
           break
     case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':    	        	    
    //	   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (ups.lim)
 	       if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		   if (!q) return reply('Link?')
 		   reply(mess.wait)
		   hx.ttdownloader(`${args[0]}`)
    	   .then(result => {
    	   const { wm, nowm, audio } = result
    	   axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    	   .then(async (a) => {
    	   me = `Done pepek`
	       zee.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
    	   })
		   })
	//	   limitAdd(sender, limit)
		   break
     case 'toimg':
  	  //     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (ups.lim)       
		   if (!isQuotedSticker) return reply('𝗥𝗲𝗽??𝘆/??𝗮?? ??𝘁𝗶𝗰𝗸??𝗿 !')
		   reply(mess.wait)
		   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   media = await zee.downloadAndSaveMediaMessage(encmedia)
		   ran = getRandom('.png')
		   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		   fs.unlinkSync(media)
		   if (err) return reply(' Failed to Convert To Sticker☭')
		   buffer = fs.readFileSync(ran)
		   zee.sendMessage(from, buffer, image, {quoted: mek})
		//   limitAdd(sender, limit)
		   fs.unlinkSync(ran)
		   })
		   break    
    case 'welcome':   
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
          if ((args[0]) === 'on') {
          if (isWelkom) return reply('welcome sudah aktif')
          _welkom.push(from)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group☭\`\`\` *${groupMetadata.subject}*`)
          } else if ((args[0]) === 'off') {
          if (!isWelkom) return reply('welcome sudah off sebelumnya')
          _welkom.splice(from, 1)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
          break		           		              	  

// end
default:
	if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				   try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
			    	} catch (err) {
					reply(`${err}`)
				    }
		        	} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
			    	try {
					return zee.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
				    } catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}

    
