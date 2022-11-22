/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/

Manoj.backup.start = async(core) => {
	await core.send('*Generating Backup File...*')
	var buffer = await Backup({ create:true })
	await core.mediasend('document', buffer, mimetype.rtf, {}, false, 'Backup.manoj', 'Manoj Multi Device Whatsapp Bot')
}

Manoj.restore.start = async(core) => {
	var data = await core.download()
	if(data.buffer) {
		return await core.reply('*Please Reply To Backup File !*')
	}

	var bot_data = await Backup({ decode:true, buffer:data.buffer })
	if(bot_data === false) {
		return await core.reply('*Your backup file is corrupt :(*')
	}

	var is_done = await Backup({ save:true, data:bot_data })
	if(is_done === true) {
		return await core.reply('*Restored successfully !*')
	}

	return await core.reply('*Recovery failed!*')
}