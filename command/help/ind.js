exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` *Hola*  ${pushname} *registrese daftar. Ketik .daftar*`
	}
exports.regis = () =>{
	return` ya estas registrado`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return `En proceso ~`
	}
exports.ok = () =>{
	return ` Listo ~`
	}
exports.welcome = () =>{
	return`
Welcome semoga gak betah terus out yah !`
      }
exports.leave = () =>{
	return`
Beban group keluar, Bye cuih`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hola ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│• ${prefix}menu
│• ${prefix}help
╰─⬣

╭─⬣ *Group*
│• ${prefix}antilink 1 / 0
│• ${prefix}hidetag [text]
│• ${prefix}linkgrup
│• ${prefix}tagall
│• ${prefix}kick @tag
│• ${prefix}setdesc [text] 
│• ${prefix}setname [text] 
│• ${prefix}getdeskgc
│• ${prefix}getpp @tag
╰─⬣

╭─⬣ *Absen & Voting*
│• ${prefix}mulaiabsen
│• ${prefix}cekabsen
│• ${prefix}delabsen  ( comming soon )
│• vote (reply)  ( comming soon )
│• devote (reply)  ( comming soon )
│• ${prefix}voting @tag|text|1 (1=1 menit)
│• ${prefix}delvote ( comming soon )
╰─⬣

╭─⬣ *Download*
│• ${prefix}play
│• ${prefix}pinterest [query]
│• ${prefix}tiktoknowm [url]
│• ${prefix}tiktokaudio [url]
│• ${prefix}soundcloud [url]
│• ${prefix}telesticker [url]
│• ${prefix}spotify [url]
│• ${prefix}spotifysearch [query]
│• ${prefix}nhentai [code]
╰─⬣

╭─⬣ *Converter*
│• ${prefix}stiker [video/image]
│• ${prefix}semoji 😎
│• ${prefix}smeme [text]
│• ${prefix}memegen [text|text2]
│• ${prefix}fast [video/vn]
│• ${prefix}tupai [video/vn]
│• ${prefix}vibra [video/vn]
│• ${prefix}robot [video/vn]
│• ${prefix}slow [video/vn]
│• ${prefix}bass [video/vn]
│• ${prefix}nightcore [video/vn]
╰─⬣

╭─⬣ *Islamic*
│• ${prefix}listsurah
│• ${prefix}alquran
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi
│• ${prefix}alquranaudio
│• ${prefix}jadwalsholat
╰─⬣

╭─⬣ *Maker Ephoto360*
│• ${prefix}wetglass
│• ${prefix}multicolor3d
│• ${prefix}watercolor
│• ${prefix}luxurygold
╰─⬣

╭─⬣ *Maker Textpro*
│• ${prefix}blackpink
│• ${prefix}neon
│• ${prefix}greenneon
│• ${prefix}advanceglow
│• ${prefix}futureneon
╰─⬣

╭─⬣ *Fun*
│• ${prefix}bajingan
│• ${prefix}jancok
│• ${prefix}anjing
│• ${prefix}ngentod
│• ${prefix}ngentot
│• ${prefix}monyet
│• ${prefix}mastah
│• ${prefix}cekbapak 
╰─⬣

╭─⬣ *Sound*
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18
│• ${prefix}sound19
╰─⬣

╭─⬣ *Cecan*
│• ${prefix}cecan
│• ${prefix}random
│• ${prefix}ukhty
│• ${prefix}santuy
│• ${prefix}hijaber
│• ${prefix}indonesia
│• ${prefix}malaysia
│• ${prefix}thailand
│• ${prefix}vietnam
│• ${prefix}china
│• ${prefix}korea
│• ${prefix}jepang
╰─⬣

╭─⬣ *Haram*
│• ${prefix}dosa1
│• ${prefix}dosa2
│• ${prefix}dosa3
│• ${prefix}dosa4
│• ${prefix}dosa5
│• ${prefix}dosa6
│• ${prefix}dosa7
│• ${prefix}dosa8
│• ${prefix}dosa9
│• ${prefix}dosa10
╰─⬣

╭─⬣ *Anime*
│• ${prefix}awoo
│• ${prefix}blowjob
│• ${prefix}hentai
│• ${prefix}megumin
│• ${prefix}neko
│• ${prefix}loli
│• ${prefix}husbu
│• ${prefix}milf
│• ${prefix}cosplay
╰─⬣

╭─⬣ *Info*
│• ${prefix}owner
│• ${prefix}daftar
╰─⬣

`
}
exports.sewabot = (prefix, salam, pushname) =>{
	return`Hola ${pushname}, selamat ${salam}

╭─⬣ Price List
│• Sewa 5k/minggu
│• Sewa 10k/bln
│• Sewa Permanen 25k
╰─⬣

╭─⬣ Price List
│• Jadi Bot 30k/bln
│• Jadi Bot + Owner 35k
│• Buat Beli Apikey!
╰─⬣

╭─⬣ Minat? Chat
│• Sering² Donasi
│• wa.me/6281575886399
│• Instagram : @riychh
│• YouTube : RIYCH OFC
╰─⬣
`
}
/*exports.download = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Download*
│• ${prefix}play [query]
│• ${prefix}pinterest [query]
│• ${prefix}tiktoknowm [url]
│• ${prefix}telesticker [url]
│• ${prefix}spotify [url]
│• ${prefix}spotifysearch [query]
│• ${prefix}nhentai [code]
╰─⬣
`
}
exports.converter = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Converter*
│• ${prefix}stiker [video/image]
│• ${prefix}semoji 😎
│• ${prefix}smeme [text]
│• ${prefix}memegen [text|text2]
│• ${prefix}fast [video/vn]
│• ${prefix}tupai [video/vn]
│• ${prefix}vibra [video/vn]
│• ${prefix}robot [video/vn]
│• ${prefix}slow [video/vn]
│• ${prefix}bass [video/vn]
│• ${prefix}nightcore [video/vn]
╰─⬣
`
}
exports.education = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Education*
│• ${prefix}nuliskiri [text]
│• ${prefix}nuliskanan [text]
│• ${prefix}foliokiri [text]
│• ${prefix}foliokanan [text]
╰─⬣
`
}
exports.islamic = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Islamic*
│• ${prefix}listsurah
│• ${prefix}alquran
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi
│• ${prefix}alquranaudio
│• ${prefix}jadwalsholat
╰─⬣
`
}
exports.ephoto = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Maker Ephoto360*
│• ${prefix}wetglass
│• ${prefix}multicolor3d
│• ${prefix}watercolor
│• ${prefix}luxurygold
│• ${prefix}galaxywallpaper
╰─⬣
`
}
exports.textpro = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Maker Textpro*
│• ${prefix}blackpink
│• ${prefix}neon
│• ${prefix}greenneon
│• ${prefix}advanceglow
│• ${prefix}futureneon
│• ${prefix}sandwriting
│• ${prefix}sandsummer
│• ${prefix}sandengraved
│• ${prefix}metaldark
╰─⬣
`
}
exports.fun = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Fun*
│• ${prefix}tolol
│• ${prefix}pinter
│• ${prefix}pintar
│• ${prefix}asu
│• ${prefix}bodoh
│• ${prefix}gay
│• ${prefix}lesby
│• ${prefix}bajingan
│• ${prefix}jancok
│• ${prefix}anjing
│• ${prefix}ngentod
│• ${prefix}ngentot
│• ${prefix}monyet
│• ${prefix}mastah
│• ${prefix}newbie
│• ${prefix}bangsat
╰─⬣
`
}
exports.game = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Game*
│• ${prefix}tebakgambar 
╰─⬣
`
}
exports.info = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Info*
│• ${prefix}owner
│• ${prefix}daftar
╰─⬣
`
}
exports.ownerr = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Owner*
│• ${prefix}broadcast [text]
│• ${prefix}leave
╰─⬣
`
}
exports.groupnya = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Group*
│• ${prefix}antilink 1 / 0
│• ${prefix}hidetag [text]
│• ${prefix}linkgrup
│• ${prefix}tagall
│• ${prefix}kick @tag
│• ${prefix}setdesc [text] 
│• ${prefix}setname [text] 
│• ${prefix}getdeskgc
│• ${prefix}getpp @tag
╰─⬣
`
}*/
