var fetch = require('node-fetch');

var handler = async (m, {

 text, 

 usedPrefix, 

 command

 }) => {

if (!text) throw `Send any question 😒 `

await m.reply(wait)

  var apii = await fetch(`https://botcahx.cyclic.app/openai?text=${text}`)

  var js = await apii.json()

  await m.reply(js.result)

}      

handler.command = handler.help = ['ai','openai','chatgpt'];

handler.tags = ['info'];

handler.premium = false

module.exports = handler;
