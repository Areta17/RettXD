const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6283851929130',
  atasnama : 'Margareta'
}

// Other
global.owner = ['6283851929130',"6283851929130"]
global.premium = ['6283851929130']
global.sponsor = 'no sponsors in:('
global.packname = 'RettXD'
global.footer = 'punya MARGARETA'
global.author = 'ig: rrta.xy'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'Proses...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading..',
		error:'Error :(',
		success:'Success!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin admin dulu!',
		admin:'Khusus admin!',
		done:'Done!',
		gc:'Fitur untuk grup',
		owner:'Jn sok berkuasa, lu bkn owner!'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})