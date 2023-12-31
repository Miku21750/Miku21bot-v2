/*let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
*/
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn }) => {
  let name = global.db.data.users[m.sender].registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
  let res = await `https://api.memegen.link/images/custom/sedang_melihat_${name}_coli/gw_laporin_ke_bapak_lu.jpg?background=https%3A%2F%2Ftelegra.ph%2Ffile%2Fbbb876605dbdd2a8ed0c4.png&watermark=memecomplete.com&token=khj7yfpkw8idaztccuys`
  let stiker = await sticker(null, res, global.packname, global.author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.customPrefix = /^(ahh|ngocok|coli|enak cuy|ahh)$/i
handler.command = new RegExp

export default handler
