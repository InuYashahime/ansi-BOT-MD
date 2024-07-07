const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

conn.fakeReply(m.chat, `*✨Cargando menu, porfavor espera.*\n\n> No hagas spam de comandos`, '0@s.whatsapp.net', 'Enviando menu aguarden...')

let submenu = `
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ ┏━━━━━━━━━━━━━━•
┊┃ ┃  \`👥 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎\`
┊┃ ┗━━━━━━━━━━━━━━•
┊┃ ┏━━━━━━━━━━━━━━•
┊┃ ┃ 𝐍𝐨𝐦𝐛𝐫𝐞: ${pushname} ${user.registered === true ? '✓' : ''}
┊┃ ┃ 𝐋í𝐦𝐢𝐭𝐞: ${user.limit}
┊┃ ┃ 𝐍𝐢𝐯𝐞𝐥: ${user.level}
┊┃ ┃ 𝐑𝐨𝐥: ${user.role}
┊┃ ┃ ❐ 𝐄𝐱𝐩: ${user.exp}
┊┃ ┃ ❐ 𝐂𝐨𝐢𝐧𝐬: ${user.money}
┊┃ ┃ 
┊┃ ┃ 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐨𝐬 𝐚𝐬𝐢𝐬𝐭𝐞𝐧𝐜𝐢𝐚𝐥𝐞𝐬: ${rtotalreg} de ${totalreg}
┊┃ ┗━━━━━━━━━━━━━━•
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩

${pickRandom([`\`𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐛𝐨𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨?\`
https://www.facebook.com/profile.php?id=100087710532984&mibextid=kFxxJD`, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`💫 INFÓRMATE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUÍ\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repo con una estrellita ☺\`\n${md}`, `Activar tu bot 24/7 con nuestro hosting\n${host}`])}\n\n`
let descargar = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━✿━━━━✿━━━━━━✿━━•
┊┃ *🚀 𝑚𝑒𝑛𝑢 𝑑𝑒 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑠 🚀*
┊┃━✿━━━━✿━━━━━━✿━━•
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦2 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦.1 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦.2 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
┊┃ ❏ ${prefix}𝑚𝑢𝑠𝑖𝑐𝑎
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦𝑑𝑜𝑐
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦3 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑢𝑑𝑖𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
┊┃ ❏ ${prefix}𝑝𝑙𝑎𝑦4 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
┊┃ ❏ ${prefix}𝑦𝑡𝑠 _(𝐵𝑢𝑠𝑐𝑎𝑑𝑜𝑟 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒)_
┊┃ ❏ ${prefix}𝑦𝑡𝑚𝑝3 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑎𝑢𝑑𝑖𝑜)_
┊┃ ❏ ${prefix}𝑦𝑡𝑚𝑝4 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑣𝑖𝑑𝑒𝑜)_
┊┃ ❏ ${prefix}𝑠𝑝𝑜𝑡𝑖𝑓𝑦
┊┃ ❏ ${prefix}𝑚𝑢𝑠𝑖𝑐 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑚𝑢𝑠𝑖𝑐𝑎 𝑑𝑒 𝑆𝑝𝑜𝑡𝑖𝑓𝑦)_
┊┃ ❏ ${prefix}𝑔𝑖𝑡𝑐𝑙𝑜𝑛𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑖𝑜 𝑑𝑒 𝐺𝑖𝑡𝐻𝑢𝑏)_
┊┃ ❏ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
┊┃ ❏ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑖𝑚𝑔
┊┃ ❏ ${prefix}𝑡𝑡𝑖𝑚𝑔 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
┊┃ ❏ ${prefix}𝑖𝑔𝑠𝑡𝑎𝑙𝑘 _(𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑢𝑛 𝑢𝑠𝑒𝑟 𝑑𝑒 𝑖𝑔)_
┊┃ ❏ ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘
┊┃ ❏ ${prefix}𝑓𝑏 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘)_
┊┃ ❏ ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚
┊┃ ❏ ${prefix}𝑖𝑔 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚)_
┊┃ ❏ ${prefix}𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑑𝑒 𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒)_
┊┃ ❏ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑠𝑡𝑎𝑙𝑘 _(𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑢𝑠𝑒𝑟 𝑑𝑒 𝑇𝑖𝑘𝑇𝑜𝑘)_
┊┃ ❏ ${prefix}𝑡𝑤𝑖𝑡𝑡𝑒𝑟
┊┃ ❏ ${prefix}𝑥 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑤𝑖𝑡𝑒𝑟 (𝑋)_
┊┃ ❏ ${prefix}𝑔𝑑𝑟𝑖𝑣𝑒 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜𝑠 𝑑𝑒 𝑔𝑑𝑟𝑖𝑣𝑒)_
┊┗━✿━━━━✿━━━━━━✿━━•━✿
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🔰 ＭＥＮＵ ＰＡＲＡ ⃐ＧＲＵＰＯＳ 🔰*
┊┃━━━━━━━━━━━━━━•
┊┃𝐺𝑒𝑠𝑡𝑖𝑜𝑛𝑎 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜 𝑐𝑜𝑛  ✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑤𝑒𝑙𝑐𝑜𝑚𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑒𝑛𝑙𝑎𝑐𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑘𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑎𝑟𝑎𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑜𝑥𝑖𝑐 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘2 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑤𝑖𝑡𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑖𝑘𝑇𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑏 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑎𝑐𝑒𝐵𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝐼𝑔 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑦𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝐴𝑛𝑡𝑖𝑌𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑛𝑠𝑓𝑤 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑚𝑜𝑑𝑜𝑐𝑎𝑙𝑖𝑒𝑛𝑡𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑚𝑜𝑑𝑜𝑎𝑑𝑚𝑖𝑛 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑐ℎ𝑎𝑡𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑙𝑒𝑣𝑒𝑙𝑢𝑝 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑛𝑖𝑣𝑒𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑑𝑑𝑟𝑢𝑙𝑒𝑠 _(𝑡𝑒𝑥𝑡)_
┊┃ ❏ ${prefix}𝑠𝑒𝑡𝑟𝑢𝑙𝑒𝑠 _(𝑡𝑒𝑥𝑡)_
┊┃ ❏ ${prefix}𝑟𝑢𝑙𝑒𝑠 _(𝑟𝑒𝑔𝑙𝑎𝑠 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ❏ ${prefix}𝑘𝑖𝑐𝑘 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑎𝑑𝑑 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑖𝑛𝑣𝑖𝑡𝑎 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑖𝑛𝑓𝑜𝑔𝑟𝑢𝑝𝑜
┊┃ ❏ ${prefix}𝑔𝑟𝑜𝑢𝑝𝑖𝑛𝑓𝑜
┊┃ ❏ ${prefix}𝑎𝑑𝑚𝑖𝑛𝑠 _(𝑖𝑛𝑣𝑜𝑐𝑎𝑟 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠)_
┊┃ ❏ ${prefix}𝑔𝑟𝑢𝑝𝑜 _(𝑐𝑙𝑜𝑠𝑒/𝑜𝑝𝑒𝑛)_
┊┃ ❏ ${prefix}𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑢𝑛𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑞𝑢𝑖𝑡𝑎𝑟𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ❏ ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑑𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖𝑜𝑛 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ❏ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑜𝑢𝑝 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ❏ ${prefix}𝑎𝑛𝑢𝑙𝑎𝑟𝑙𝑖𝑛𝑘
┊┃ ❏ ${prefix}𝑟𝑒𝑠𝑒𝑡𝑙𝑖𝑛𝑘 _(𝑟𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑒𝑟 𝑒𝑙 𝑙𝑖𝑛𝑘 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ❏ ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑛 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒)_
┊┃ ❏ ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙
┊┃ ❏ ${prefix}𝑖𝑛𝑣𝑜𝑐𝑎𝑟 _(𝑖𝑛𝑣𝑜𝑐𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑛 𝑢𝑛𝑎 𝑙𝑖𝑠𝑡𝑎)_
┊┃ ❏ ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒 _(𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑜𝑛𝑙𝑖𝑛𝑒)_
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`

let buscadores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🔎 ＭＥＮＵ ＢＵＳＣＡＤＯＲＥＳ 🔎*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
┊┃ ❏ ${prefix}𝑐ℎ𝑎𝑡𝑔𝑝𝑡
┊┃ ❏ ${prefix}𝑖𝑎 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑙𝑎 𝐼𝐴)_
┊┃ ❏ ${prefix}𝑏𝑎𝑟𝑑 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛)_
┊┃ ❏ ${prefix}𝑖𝑚𝑎𝑔𝑒𝑛 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑒𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
┊┃ ❏ ${prefix}𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 _(𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 𝑎𝑙𝑔𝑢𝑛 𝑡𝑒𝑥𝑡𝑜)_
┊┃ ❏ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟)_
┊┃ ❏ ${prefix}𝑠𝑠 _(𝑙𝑖𝑛𝑘)_
┊┃ ❏ ${prefix}𝑑𝑎𝑙𝑙-𝑒
┊┃ ❏ ${prefix}𝑝𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡
┊┃ ❏ ${prefix}𝑤𝑖𝑘𝑖𝑝𝑒𝑑𝑖𝑎
┊┃ ❏ ${prefix}𝑤𝑖𝑘𝑖
┊┃ ❏ ${prefix}𝑖𝑎2 _(𝑐𝑟𝑒𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑐𝑜𝑛 𝑙𝑎 (𝐼𝐴)_
┊┃ ❏ ${prefix}𝑛𝑝𝑚𝑠𝑒𝑎𝑟𝑐ℎ _(𝐵𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑁𝑃𝑀)_
┊┃ ❏ ${prefix}𝑠𝑡𝑦𝑙𝑒𝑡𝑒𝑥𝑡 _(𝐺𝑒𝑛𝑒𝑟𝑎𝑙 𝑑𝑖𝑠𝑒ñ𝑜𝑠 𝑑𝑒 𝑙𝑒𝑡𝑟𝑎𝑠)_
┊┃ ❏ ${prefix}ℎ𝑜𝑟𝑎𝑟𝑖𝑜
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let juegos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👾 ＭＥＮＵ ＪＵＥＧＯＳ 👾*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑠𝑖𝑚𝑖 _(ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑏𝑜𝑡)_
┊┃ ❏ ${prefix}𝑝𝑝𝑡 _(𝑝𝑖𝑒𝑑𝑟𝑎, 𝑝𝑎𝑝𝑒𝑙, 𝑜 𝑡𝑖𝑗𝑒𝑟𝑎)_
┊┃ ❏ ${prefix}𝑔𝑎𝑦 @𝑡𝑎𝑔
┊┃ ❏ ${prefix}𝑝𝑎𝑟𝑒𝑗𝑎 @𝑡𝑎𝑔
┊┃ ❏ ${prefix}𝑙𝑜𝑣𝑒 @𝑡𝑎𝑔
┊┃ ❏ ${prefix}𝑓𝑜𝑙𝑙𝑎𝑟 @𝑡𝑎𝑔
┊┃ ❏ ${prefix}𝑡𝑜𝑝𝑔𝑎𝑦𝑠
┊┃ ❏ ${prefix}𝑡𝑜𝑝𝑜𝑡𝑎𝑘𝑢𝑠
┊┃ ❏ ${prefix}𝑡𝑜𝑝
┊┃ ❏ ${prefix}𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎
┊┃ ❏ ${prefix}𝑣𝑒𝑟𝑑𝑎𝑑
┊┃ ❏ ${prefix}𝑟𝑒𝑡𝑜
┊┃ ❏ ${prefix}𝑑𝑜𝑥𝑒𝑎𝑟
┊┃ ❏ ${prefix}𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑙𝑖𝑑𝑎𝑑
┊┃ ❏ ${prefix}𝑟𝑎𝑐𝑖𝑠𝑡𝑎
┊┃ ❏ ${prefix}𝑠𝑙𝑜𝑡
┊┃ ❏ ${prefix}𝑚𝑎𝑡ℎ
┊┃ ❏ ${prefix}𝑚𝑎𝑡𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑠
┊┃ ❏ ${prefix}𝑡𝑡𝑡
┊┃ ❏ ${prefix}𝑡𝑖𝑐𝑡𝑎𝑐𝑡𝑜𝑒
┊┃ ❏ ${prefix}𝑡𝑡𝑐
┊┃ ❏ ${prefix}𝑑𝑒𝑙𝑡𝑡𝑡
┊┃ ❏ ${prefix}𝑑𝑎𝑑𝑜
┊┃ ❏ ${prefix}𝑝𝑖𝑟𝑜𝑝𝑜
┊┃ ❏ ${prefix}𝑠ℎ𝑖𝑝
┊┃ ❏ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑡𝑟𝑖𝑜
┊┃ ❏ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑝𝑎𝑟𝑒𝑗𝑎
┊┃ ❏ ${prefix}𝑡𝑥𝑡 _(𝑡𝑒𝑥𝑡𝑜)_
┊┃ ❏ ${prefix}𝑓𝑎𝑘𝑒 _(𝑡𝑒𝑥𝑡𝑜 + 𝑡𝑎𝑔)_
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let efecto = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🎤 ＭＥＮＵ ＤＥ ＥＦＥＣＴＯＳ 🎤*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝑈𝑁 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑏𝑎𝑠𝑠
┊┃ ❏ ${prefix}𝑏𝑙𝑜𝑤𝑛
┊┃ ❏ ${prefix}𝑑𝑒𝑒𝑝
┊┃ ❏ ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
┊┃ ❏ ${prefix}𝑓𝑎𝑠𝑡
┊┃ ❏ ${prefix}𝑓𝑎𝑡
┊┃ ❏ ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
┊┃ ❏ ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
┊┃ ❏ ${prefix}𝑟𝑜𝑏𝑜𝑡
┊┃ ❏ ${prefix}𝑠𝑙𝑜𝑤
┊┃ ❏ ${prefix}𝑠𝑚𝑜𝑜𝑡ℎ
┊┃ ❏ ${prefix}𝑠𝑞𝑢𝑖𝑟𝑟𝑒𝑙
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let convertidores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🧧ＭＥＮＵ ＣＯＮＶＥＲＴＩＤＯＲＥＳ 🧧*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑡𝑜𝑢𝑟𝑙
┊┃ ❏ ${prefix}𝑡𝑡𝑠
┊┃ ❏ ${prefix}𝑡𝑜𝑚𝑝3
┊┃ ❏ ${prefix}𝑡𝑜𝑖𝑚𝑔
┊┃ ❏ ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
┊┃ ❏ ${prefix}𝑡𝑜𝑎𝑛𝑖𝑚𝑒
┊┃ ❏ ${prefix}ℎ𝑑
┊┃ ❏ ${prefix}𝑙𝑜𝑔𝑜𝑠
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menu18 = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🥵 ＭＥＮＵ +18 🥵*
┊┃━━━━━━━━━━━━━━•
┊┃ *𝑁𝑜𝑡𝑎: 𝑢𝑠𝑎𝑟𝑙𝑜 𝑏𝑎𝑗𝑎 𝑡𝑢 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑖𝑙𝑖𝑑𝑎𝑑*
┊┃ *𝑁𝑜 𝑠𝑒𝑎 𝑝𝑎𝑗𝑒𝑟𝑜*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑝𝑢𝑠𝑠𝑦
┊┃ ❏ ${prefix}𝑛𝑠𝑓𝑤𝑙𝑜𝑙𝑖
┊┃ ❏ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖
┊┃ ❏ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖2
┊┃ ❏ ${prefix}𝑝𝑎𝑐𝑘
┊┃ ❏ ${prefix}𝑝𝑎𝑐𝑘2
┊┃ ❏ ${prefix}𝑝𝑎𝑐𝑘3
┊┃ ❏ ${prefix}𝑐ℎ𝑖𝑛𝑎
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥𝑙𝑒𝑠𝑏𝑖
┊┃ ❏ ${prefix}𝑝𝑜𝑟𝑛𝑜𝑙𝑒𝑠𝑏𝑖𝑎𝑛𝑎𝑣𝑖𝑑
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑙𝑒𝑠𝑏𝑖𝑥𝑥𝑥
┊┃ ❏ ${prefix}𝑝𝑜𝑟𝑛𝑜
┊┃ ❏ ${prefix}𝑙𝑒𝑤𝑑
┊┃ ❏ ${prefix}𝑓𝑒𝑒𝑑
┊┃ ❏ ${prefix}𝑔𝑎𝑠𝑚
┊┃ ❏ ${prefix}𝑎𝑛𝑎𝑙
┊┃ ❏ ${prefix}ℎ𝑜𝑙𝑜
┊┃ ❏ ${prefix}𝑡𝑖𝑡𝑠
┊┃ ❏ ${prefix}𝑘𝑢𝑛𝑖
┊┃ ❏ ${prefix}𝑘𝑖𝑠𝑠
┊┃ ❏ ${prefix}𝑒𝑟𝑜𝑘
┊┃ ❏ ${prefix}𝑠𝑚𝑢𝑔
┊┃ ❏ ${prefix}𝑠𝑜𝑙𝑜𝑔
┊┃ ❏ ${prefix}𝑓𝑒𝑒𝑡𝑔
┊┃ ❏ ${prefix}𝑙𝑒𝑤𝑑𝑘
┊┃ ❏ ${prefix}𝑓𝑒𝑚𝑑𝑜𝑚
┊┃ ❏ ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒
┊┃ ❏ ${prefix}𝑒𝑟𝑜𝑦𝑢𝑟𝑖
┊┃ ❏ ${prefix}𝑐𝑢𝑚
┊┃ ❏ ${prefix}𝑏𝑙𝑜𝑤𝑗𝑜𝑏
┊┃ ❏ ${prefix}ℎ𝑜𝑙𝑜𝑒𝑟𝑜
┊┃ ❏ ${prefix}𝑒𝑟𝑜𝑘𝑒𝑚𝑜
┊┃ ❏ ${prefix}𝑓𝑜𝑥_𝑔𝑖𝑟𝑙
┊┃ ❏ ${prefix}𝑓𝑢𝑡𝑎𝑛𝑎𝑟𝑖
┊┃ ❏ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menurandow = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *⛩️ ＭＥＮＵ ＲＡＮＤＯＭ ⛩️*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑚𝑒𝑚𝑒𝑠
┊┃ ❏ ${prefix}ℎ𝑜𝑟𝑛𝑦
┊┃ ❏ ${prefix}𝑠𝑖𝑚𝑝
┊┃ ❏ ${prefix}𝑙𝑜𝑙𝑖𝑐𝑒
┊┃ ❏ ${prefix}𝑐𝑜𝑚𝑒𝑛𝑡𝑎𝑟
┊┃ ❏ ${prefix}𝑐𝑜𝑚𝑚𝑒𝑛𝑡
┊┃ ❏ ${prefix}𝑙𝑜𝑙𝑖
┊┃ ❏ ${prefix}𝑙𝑜𝑙𝑖𝑣𝑖𝑑
┊┃ ❏ ${prefix}𝑛𝑒𝑘𝑜
┊┃ ❏ ${prefix}𝑤𝑎𝑖𝑓𝑢
┊┃ ❏ ${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘
┊┃ ❏ ${prefix}𝑛𝑎𝑣𝑖𝑑𝑎𝑑
┊┃ ❏ ${prefix}𝑎𝑘𝑖𝑟𝑎
┊┃ ❏ ${prefix}𝑎𝑘𝑖𝑦𝑎𝑚𝑎
┊┃ ❏ ${prefix}𝑐ℎ𝑖𝑛𝑎
┊┃ ❏ ${prefix}𝑎𝑛𝑛𝑎
┊┃ ❏ ${prefix}𝑎𝑠𝑢𝑛𝑎
┊┃ ❏ ${prefix}𝑎𝑦𝑢𝑧𝑎𝑤𝑎
┊┃ ❏ ${prefix}𝑏𝑜𝑟𝑢𝑡𝑜
┊┃ ❏ ${prefix}𝑐ℎ𝑖ℎ𝑜
┊┃ ❏ ${prefix}𝑐ℎ𝑖𝑡𝑜𝑔𝑒
┊┃ ❏ ${prefix}𝑑𝑒𝑖𝑑𝑎𝑟𝑎
┊┃ ❏ ${prefix}𝑒𝑟𝑧𝑎
┊┃ ❏ ${prefix}𝑒𝑙𝑎𝑖𝑛𝑎
┊┃ ❏ ${prefix}𝑒𝑏𝑎
┊┃ ❏ ${prefix}𝑒𝑚𝑖𝑙𝑖𝑎
┊┃ ❏ ${prefix}ℎ𝑒𝑠𝑡𝑖𝑎
┊┃ ❏ ${prefix}ℎ𝑖𝑛𝑎𝑡𝑎
┊┃ ❏ ${prefix}𝑖𝑛𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑖𝑠𝑢𝑧𝑢
┊┃ ❏ ${prefix}𝑖𝑡𝑎𝑐ℎ𝑖
┊┃ ❏ ${prefix}𝑖𝑡𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑘𝑎𝑔𝑎
┊┃ ❏ ${prefix}𝑘𝑎𝑔𝑢𝑟𝑎
┊┃ ❏ ${prefix}𝑘𝑎𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑘𝑒𝑛𝑒𝑘𝑖
┊┃ ❏ ${prefix}𝑘𝑜𝑡𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑘𝑢𝑟𝑢𝑚𝑖
┊┃ ❏ ${prefix}𝑚𝑎𝑑𝑎𝑟𝑎
┊┃ ❏ ${prefix}𝑚𝑖𝑘𝑎𝑠𝑎
┊┃ ❏ ${prefix}𝑚𝑖𝑘𝑢
┊┃ ❏ ${prefix}𝑚𝑖𝑛𝑎𝑡𝑜
┊┃ ❏ ${prefix}𝑛𝑎𝑟𝑢𝑡𝑜
┊┃ ❏ ${prefix}𝑛𝑒𝑧𝑢𝑘𝑜
┊┃ ❏ ${prefix}𝑠𝑎𝑔𝑖𝑟𝑖
┊┃ ❏ ${prefix}𝑠𝑎𝑠𝑢𝑘𝑒
┊┃ ❏ ${prefix}𝑠𝑎𝑘𝑢𝑟𝑎
┊┃ ❏ ${prefix}𝑐𝑜𝑠𝑝𝑙𝑎𝑦
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuRPG = `╭━━•✿•━━•✿•━━•✿•━━•✿•━╮
┃ *🪙 ＭＥＮＵ ＲＰＧ / ＥＣＯＮＯＭＩＡ 🪙*
┃━━━━━━━━━━━━━━━━━━━━━━━━━━━•
┃ ❏ ${prefix}minar _(para minar exp)_ ⛏️
┃ ❏ ${prefix}robar 💰
┃ ❏ ${prefix}rob _(roba exp algun usuarios)_ 💸
┃ ❏ ${prefix}crime 🚔
┃ ❏ ${prefix}trabajar 💼
┃ ❏ ${prefix}work _(crabaja y ganas exp)_ 💼
┃ ❏ ${prefix}buy _(comprar mas diamantes (limit)_ 💎
┃ ❏ ${prefix}bal 💰
┃ ❏ ${prefix}balace _(diamante/exp tenés)_ 💰
┃ ❏ ${prefix}claim _(recoger tu recompensa)_ 🎁
┃ ❏ ${prefix}lb 📊
┃ ❏ ${prefix}leaderboard 📊
┃ ❏ ${prefix}cofre 🧰
┃ ❏ ${prefix}perfil 👤
┃ ❏ ${prefix}nivel 📈
┃ ❏ ${prefix}dep 💳
┃ ❏ ${prefix}depositar 💳
┃ ❏ ${prefix}retirar 💸
┃ ❏ ${prefix}toremove 🗑️
┃ ❏ ${prefix}levelup ⬆️
┃ ❏ ${prefix}transferir 💹
┃ ❏ ${prefix}transfer 💹
┃ ❏ ${prefix}afk 😴 
╰━━━━━━━━━━━━━━━━━━━━━`
let menuSticker= `╭━━•✿•━━•✿•━━•✿•━━•✿•━╮
┃ *👽 ＭＥＮＵ ＳＴＩＣＫＥＲ 👽*
┃━━━━━━━━━━━━━━•
┃ *(Crear sticker desde whatsapp con ${wm})*
┃━━━━━━━━━━━━━━•
┃ ❏ ${prefix}s 🖼️
┃ ❏ ${prefix}sticker 🖼️
┃ ❏ ${prefix}wm 📝🖼️
┃ ❏ ${prefix}attp 📝
┃ ❏ ${prefix}qc 🧩
┃ ❏ ${prefix}emojimix 😂🔀
╰━━━`
let menuOwner = `╭━━•✿•━━•✿•━━•✿•━━•✿•━╮
┃ *👑 ＭＥＮＵ ＯＷＮＥＲ 👑*
┃━━━━━━━━━━━━━━•
┃ _(Comando exclusivo para creador de el bot/comandos únicos para eliasar YT)_
┃━━━━━━━━━━━━━━━━━━━━━•
┃ ❏ ${prefix}anticall _(on/off)_ 📵
┃ ❏ ${prefix}antillamada _(on/off)_ 📵
┃ ❏ ${prefix}antipv _(on/off)_ 🚫
┃ ❏ ${prefix}antiprivado _(on/off)_ 🚫
┃ ❏ ${prefix}autoread _(on/off)_ ✉️
┃ ❏ ${prefix}modojadibot _(on/off)_ 🤖
┃ ❏ ${prefix}añadirdiamantes _(@tag)_ 💎
┃ ❏ ${prefix}addlimit _(@tag)_ 🔝
┃ ❏ ${prefix}dardiamantes _(@tag)_ 💎
┃ ❏ ${prefix}añadirxp _(@tag)_ 📈
┃ ❏ ${prefix}addxp _(@tag)_ 📈
┃ ❏ ${prefix}banuser _(@tag)_ 🚷
┃ ❏ ${prefix}unbanuser _(@tag)_ 🆗
┃ ❏ ${prefix}autoadmin ⚙️
┃ ❏ ${prefix}nuevonombre 🆕
┃ ❏ ${prefix}botname _(cambiar el name del bot)_ ✍️
┃ ❏ ${prefix}nuevafoto 🆕📸
┃ ❏ ${prefix}seppbot 🤖🔧
┃ ❏ ${prefix}fotobot _(cambiar la foto del bot)_ 📸✍️
┃ ❏ ${prefix}bc (difusión a todos los chat) 📢
┃ ❏ ${prefix}bcgc (difusión solo a grupos) 📢👥
┃ ❏ ${prefix}public (modo público) 🔓 
┃ ❏ ${prefix}privado (modo privado) 🔒 
┃ ❏ ${prefix}getcase 🔍📂
┃ ❏ ${prefix}fetch 🔍📥
┃ ❏ ${prefix}update ⬆️🔄
┃ ❏ ${prefix}restart 🔁🔄 
┃ ❏ ${prefix}reiniciar 🔁🔄 
╰━━━━━━━━━━━━━━━━━━━━━`

if (command == 'menu' || command == 'help') {
m.react('✨') 
let saludos = `~ Hola ${pushname} ${user.registered === true ? '✓' : ''}`
let menu = `
╭━─━─━─━━─━─━─━─━─╮
┃ Hola ${pushname}   👋🏻┃
╰━─━─━─━━─━─━─━─━─╯
╭━•━━•━━•━━•━━•━╮
┃  ℹ️𝕀ℕ𝔽𝕆𝔹𝕆𝕋 ℹ️
╰━━•━•━━•━•━━•━━╯
╭━━━━•━━━━•━━━━•━━━╮
┃ ❐ ❐ ${name}  ${creador}
┃ ❐ ${lenguaje.menu.text} [ ${prefix} ]
┃ ❐ ${lenguaje.menu.text2} ${date}
┃ ❐ ${lenguaje.menu.text3} ${time}
┃ ❐ ${lenguaje.menu.text4} ${vs}
┃ ❐ ${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
┃ ❐ ${lenguaje.menu.text6} ${runtime(process.uptime())}
┃ ❐ ${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
┃ ❐ ${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt}` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
╰━━━━•━━━━•━━━━•━━━╯
╭━━━━•━━━━•━━━━━•━━━━╮
┃ 👥 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 👥 
╰━━━━•━━━━•━━━━━━•━━━╯
╭━━━•━•━━•━━•━━━•━━╮
┃ ❐ ${lenguaje.menu.text8} ${user.limit}
┃ ❐ ${lenguaje.menu.text9} ${user.level}
┃ ❐ ${lenguaje.menu.text10} ${user.role}
┃ ❐ 🌟 𝑒𝑥𝑝 : ${user.exp}
┃ ❐ 💰 𝑐𝑜𝑖𝑛𝑠 : ${user.money}
┃ ❐ ${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
╰━━━•━•━━•━━•━━━•━━╯`
let xd = `${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐛𝐨𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨?\`https://www.facebook.com/profile.php?id=100087710532984&mibextid=kFxxJD`, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`💫 INFÓMARTE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUI\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita ☺\`\n${md}\``])}`

let listSections = []    
listSections.push({
title: '🗒️𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝘼𝙉𝙎𝙄 🗒️',
rows: [{ header: "𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", title: "", id: `.allmenu`, description: `Muestra el menu completo\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑", title: "", id: `.menu1`, description: `Muestra el menu de descargas\n` },
{ header: "𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾𝚂", title: "", id: `.kickfantasmas`, description: `Eimina los inactivos de el grupo\n` },
{ header: "𝐀𝐔𝐃𝐈𝐎𝐒", title: "", id: `.menu2`, description: `Muestra el menu de audios palabra clave para interactuar con el bot\n` },
{ header: "𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎", title: "", id: `.menu3`, description: `Muestra el menu de gestión del Grupo\n` },
{ header: "𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu4`, description: `Muestra el menu para buscar información\n` },
{ header: "𝐉𝐔𝐄𝐆𝐎𝐒", title: "", id: `.menu5`, description: `Muestra el menu de juegos para divertir tu grupo con multi juegos\n` }, 
{ header: "𝐄𝐅𝐄𝐂𝐓𝐎", title: "", id: `.menu6`, description: `Muestra el menu de efecto\n` }, 
{ header: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu7`, description: `Muestra el menu de convertidores\n` }, 
{ header: "𝐑𝐀𝐍𝐃𝐎𝐖", title: "", id: `.menu8`, description: `Muestra el menu randow\n` }, 
{ header: "𝐑𝐏𝐆", title: "", id: `.menu9`, description: `Muestra el menu RPG\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑", title: "", id: `.menu10`, description: `Muestra el menu de creación de sticker\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎", title: "", id: `.menu11`, description: `Muestra el menu solo para propietario del bot\n` }, 
{ header: "𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐌𝐄", title: "", id: `.reg *YuGi*.23`, description: `Registrame con nonbre edad\n` },
{ header: "𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐜𝐢𝐨𝐧𝐞𝐬 ", title: "", id: `.enable`, description: `configuraciones para mi grupo\n` },
{ header: "𝐌𝐄𝐍𝐔 +𝟏𝟖", title: "", id: `.menu18`, description: `Muestra el menu +18 (usarlo bajo tu responsabilidad)\n` }, 
{ header: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒", title: "", id: `.logos`, description: `Muestra la lista para crear logos\n` }
]})

conn.sendList(m.chat, menu, botname, `𝑇𝑂𝐶𝐴 𝐴𝑄𝑈𝐼 ✨`, listSections, {quoted: fkontak})
}

if (command == 'menu1' || command == 'descarga') {
m.react('🚀') 
conn.sendMessage(m.chat, { text: submenu + descargar,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363314023093579@newsletter', 
serverMessageId: '', 
newsletterName: '✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu2' || command == 'audio') {

let menu2 = `${lenguaje.menu.text13}\n\na\nfeliz navidad\nMerry Christmas\nFeliz cumpleaños\nPasa pack\nUwu\nSiuuu\nhola\nhello\nVete a la verga\nPasen porno\nHora del sexito\nPongan cuties\nFiesta del admin\nAdmin party\nViernes\nGOOOOD\nAlto temazo\nTodo bien\nBuenos dias\nBot gay\nGracias\nFua\nFino señores\n🧐🍷\nCorte\nGaspi buenos dias\nGaspi me saludas\nGaspi y las minitas\nGaspi todo bien\nGaspi ya no aguanto\nContate algo bot\nSexo\nMomento epico\nEl bot del orto no funciona\nEpicardo\nInsta de la minita\nUna mierda de bot\nUltimo momento\nNefasto\nParaguayo\nBot de mierda\nVenezolano\na nadie le importa\nGaspi corte\nYa me voy a dormir\nCalefon\nApurate bot\nUn chino\nNo funciona\nBoliviano\nEnano\nQuien es tu sempai botsito\nMe gimes 7u7\nTe amo botsito uwu\nOnichan\nLa toca 7w7\nautodestruction\n\n${lenguaje.menu.text14}`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu3' || command == 'menugrupos') {
m.react('🔰') 
conn.sendMessage(m.chat, { text: submenu + grupos,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu4' || command == 'menubuscadores') {
m.react('🪄') 
conn.sendMessage(m.chat, { text: submenu + buscadores,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu5' || command == 'menujuegos') {
m.react('👾') 
conn.sendMessage(m.chat, { text: submenu + juegos,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu6' || command == 'menuefecto') {
m.react('🎤') 
conn.sendMessage(m.chat, { text: submenu + efecto,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu7' || command == 'menuconvertidores') {
m.react('🧧') 
conn.sendMessage(m.chat, { text: submenu + convertidores,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu18' || command == 'Menuhony') {
m.react('🥵') 
conn.sendMessage(m.chat, { text: submenu + menu18,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menurandow' || command == 'menu8') {
m.react('⛩️') 
conn.sendMessage(m.chat, { text: submenu + menurandow,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menuRPG' || command == 'menu9') {
m.react('⚒️') 
conn.sendMessage(m.chat, { text: submenu + menuRPG,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menuSticker' || command == 'menu10') {
m.react('🎈') 
conn.sendMessage(m.chat, { text: submenu + menuSticker,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menuOwner' || command == 'menu11') {
m.react('👑') 
conn.sendMessage(m.chat, { text: submenu + menuOwner,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'allmenu' || command == 'menucompleto') {
m.react('☺️') 
let menu = `╔━━━▣━━◤ 𝘼𝙉𝙎𝙄◢━━▣━━━╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║${lenguaje.menu.text} [ ${prefix} ]
║${lenguaje.menu.text2} ${date}
║${lenguaje.menu.text3} ${time}
║${lenguaje.menu.text4} ${vs}
║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
║${lenguaje.menu.text6} ${runtime(process.uptime())}
║${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
║ 
║${lenguaje.menu.text8} ${user.limit}
║${lenguaje.menu.text9} ${user.level}
║${lenguaje.menu.text10} ${user.role}
║❐ ᴇxᴘ : ${user.exp}
║❐ ᴄᴏɪɴs : ${user.money}
║ 
║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚══════ ≪ •❈• ≫ ══════╝

===============================
${lenguaje.menu.text12}
===============================

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}reg _(Registrarte en el bot)_
├❥ᰰຼ ❏ ${prefix}unreg _(borrar su registro)_
├❥ᰰຼ ❏ ${prefix}myns _(numero de serie)_
├❥ᰰຼ ❏ ${prefix}estado _(estado del bot)_
├❥ᰰຼ ❏ ${prefix}menu2
├❥ᰰຼ ❏ ${prefix}audios 
├❥ᰰຼ ❏ ${prefix}nuevo _(nuevo comando)_
├❥ᰰຼ ❏ ${prefix}reglas _(reglas)_
├❥ᰰຼ ❏ ${prefix}ping
├❥ᰰຼ ❏ ${prefix}velocidad
├❥ᰰຼ ❏ ${prefix}grupos _(grupos oficiales)_
├❥ᰰຼ ❏ ${prefix}join _(solicita un bot para tu grupo)_
├❥ᰰຼ ❏ ${prefix}owner
├❥ᰰຼ ❏ ${prefix}creador _(contactos de mi creador)_
├❥ᰰຼ ❏ ${prefix}instalarbot (Tutorial del instalacion)_
├❥ᰰຼ ❏ ${prefix}solicitud
├❥ᰰຼ ❏ ${prefix}cuenta 
├❥ᰰຼ ❏ ${prefix}cuentaoficiales
├❥ᰰຼ ❏ ${prefix}status 
├❥ᰰຼ ❏ ${prefix}infohost
├❥ᰰຼ ❏ ${prefix}host
├❥ᰰຼ ❏ ${prefix}cafirexos
├❥ᰰຼ ❏ ${prefix}report _(reporta errores)_
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
├• *(Tiene 2 opciónes para hacerte SubBot)*
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *Escaneado el QR*
├❥ᰰຼ ❏ ${prefix}serbot
├❥ᰰຼ ❏ ${prefix}qr
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *Con codigo de 8 digitos*
├❥ᰰ ❏ ${prefix}serbot --code
├❥ᰰຼ ❏ ${prefix}jadibot --code
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(Comprueba si hay sub bot conectado)*
├❥ᰰຼ ❏ ${prefix}bots 
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(Comando solo para los sub bot)*
├❥ᰰຼ ❏ ${prefix}stop
├❥ᰰຼ ❏ ${prefix}deljadibot
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＥＳＣＡＲＧＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}play _(descargar música)_
├❥ᰰຼ ❏ ${prefix}play2 _(Descargar video)_
├❥ᰰຼ ❏ ${prefix}play.1 _(descargar música)_
├❥ᰰຼ ❏ ${prefix}play.2 _(descargar video)_
├❥ᰰຼ ❏ ${prefix}musica
├❥ᰰຼ ❏ ${prefix}video
├❥ᰰຼ ❏ ${prefix}playdoc
├❥ᰰຼ ❏ ${prefix}play3 _(Descarga audio en documento)_
├❥ᰰຼ ❏ ${prefix}play4 _(Descarga video en documento)_
├❥ᰰຼ ❏ ${prefix}yts _(Buscador de youtube)_
├❥ᰰຼ ❏ ${prefix}ytmp3 _(link para descargar el audio)_
├❥ᰰຼ ❏ ${prefix}ytmp4 _(link para descargar el video)_
├❥ᰰຼ ❏ ${prefix}spotify
├❥ᰰຼ ❏ ${prefix}music _(Descarga musica de Spotify)_
├❥ᰰຼ ❏ ${prefix}gitclone _(descarga repositorio de GitHub)_
├❥ᰰຼ ❏ ${prefix}tiktok _(descargar video de tiktok)_
├❥ᰰຼ ❏ ${prefix}tiktokimg
├❥ᰰຼ ❏ ${prefix}ttimg _(descarga imagen de tiktok)_
├❥ᰰຼ ❏ ${prefix}igstalk _(nombre de un usuario de ig)_
├❥ᰰຼ ❏ ${prefix}facebook
├❥ᰰຼ ❏ ${prefix}fb _(Descarga videos de Facebook)_
├❥ᰰຼ ❏ ${prefix}instagram
├❥ᰰຼ ❏ ${prefix}ig _(Descarga videos de Instagram)_
├❥ᰰຼ ❏ ${prefix}mediafire _(descarga archivo de mediafire)_
├❥ᰰຼ ❏ ${prefix}gdrive _(Descarga archivos de gdrive)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├• Gestionar tu grupo con ${wm}
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├❥ᰰຼ ❏ ${prefix}welcome _(on/off)_
├❥ᰰຼ ❏ ${prefix}antilink _(on/off)_
├❥ᰰຼ ❏ ${prefix}antienlace _(on/off)_
├❥ᰰຼ ❏ ${prefix}antifake _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiarabe _(on/off)_
├❥ᰰຼ ❏ ${prefix}antitoxic _(on/off)_
├❥ᰰຼ ❏ ${prefix}antilink2 _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiTwiter _(on/off)_
├❥ᰰຼ ❏ ${prefix}antitiktok _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiTikTok _(on/off)_
├❥ᰰຼ ❏ ${prefix}antitelegram _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiTelegram _(on/off)_
├❥ᰰຼ ❏ ${prefix}antifacebook _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiFb _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiFaceBook _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntInstagram _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiIg _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiyoutube _(on/off)_
├❥ᰰຼ ❏ ${prefix}AntiYoutube _(on/off)_
├❥ᰰຼ ❏ ${prefix}autosticker _(on/off)_
├❥ᰰຼ ❏ ${prefix}detect _(on/off)_
├❥ᰰຼ ❏ ${prefix}autodetect _(on/off)_
├❥ᰰຼ ❏ ${prefix}antinsfw _(on/off)_
├❥ᰰຼ ❏ ${prefix}modocaliente _(on/off)_
├❥ᰰຼ ❏ ${prefix}autosticker _(on/off)_
├❥ᰰຼ ❏ ${prefix}modoadmin _(on/off)_
├❥ᰰຼ ❏ ${prefix}audios _(on/off)_
├❥ᰰຼ ❏ ${prefix}chatbot _(on/off)_
├❥ᰰຼ ❏ ${prefix}autolevelup _(on/off)_
├❥ᰰຼ ❏ ${prefix}autonivel _(on/off)_
├❥ᰰຼ ❏ ${prefix}kick _(@tag)_
├❥ᰰຼ ❏ ${prefix}add _(@tag)_
├❥ᰰຼ ❏ ${prefix}invita _(@tag)_
├❥ᰰຼ ❏ ${prefix}promote _(@tag)_
├❥ᰰຼ ❏ ${prefix}demote _(@tag)_
├❥ᰰຼ ❏ ${prefix}infogrupo
├❥ᰰຼ ❏ ${prefix}groupinfo
├❥ᰰຼ ❏ ${prefix}admins _(llama a los admins)_
├❥ᰰຼ ❏ ${prefix}grupo close/open 
├❥ᰰຼ ❏ ${prefix}warn _(@tag)_
├❥ᰰຼ ❏ ${prefix}advertencia _(@tag)_
├❥ᰰຼ ❏ ${prefix}unwarn _(@tag)_
├❥ᰰຼ ❏ ${prefix}quitardvertencia _(@tag)_
├❥ᰰຼ ❏ ${prefix}setppname _(cambia el nombre del grupo)_
├❥ᰰຼ ❏ ${prefix}setdesc _(cambia la desc del Grupo)_
├❥ᰰຼ ❏ ${prefix}setppgroup _(cambia la foto del Grupo)_
├❥ᰰຼ ❏ ${prefix}anularlink 
├❥ᰰຼ ❏ ${prefix}resetlink _(restablece el link del grupo)_
├❥ᰰຼ ❏ ${prefix}hidetag _(etiqueta a todos el un mensaje)_
├❥ᰰຼ ❏ ${prefix}tagall 
├❥ᰰຼ ❏ ${prefix}invocar _(etiqueta a todos el una listas)_
├❥ᰰຼ ❏ ${prefix}listonline _(usuarios que esta online)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}google _(buscar información con google)_
├❥ᰰຼ ❏ ${prefix}chatgpt
├❥ᰰຼ ❏ ${prefix}ia _(buscar información con la IA)_
├❥ᰰຼ ❏ ${prefix}bard _(buscar información)_
├❥ᰰຼ ❏ ${prefix}imagen _(Imagen en google)_
├❥ᰰຼ ❏ ${prefix}traducir _(Traducir algun texto)_
├❥ᰰຼ ❏ ${prefix}wallpaper _(imagen del wallpaper)_
├❥ᰰຼ ❏ ${prefix}ss _(link)_
├❥ᰰຼ ❏ ${prefix}dall-e
├❥ᰰຼ ❏ ${prefix}ia2 _(Crear imagen con la (IA)_
├❥ᰰຼ ❏ ${prefix}horario
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}simi _(hablar con el bot)_
├❥ᰰຼ ❏ ${prefix}ppt _(piedra, papel, o tijera)_
├❥ᰰຼ ❏ ${prefix}gay @tag
├❥ᰰຼ ❏ ${prefix}pareja @tag
├❥ᰰຼ ❏ ${prefix}love @tag
├❥ᰰຼ ❏ ${prefix}follar @tag
├❥ᰰຼ ❏ ${prefix}topgays
├❥ᰰຼ ❏ ${prefix}topotakus
├❥ᰰຼ ❏ ${prefix}top
├❥ᰰຼ ❏ ${prefix}pregunta
├❥ᰰຼ ❏ ${prefix}verdad
├❥ᰰຼ ❏ ${prefix}reto
├❥ᰰຼ ❏ ${prefix}doxear
├❥ᰰຼ ❏ ${prefix}math
├❥ᰰຼ ❏ ${prefix}matematicas
├❥ᰰຼ ❏ ${prefix}ttt
├❥ᰰຼ ❏ ${prefix}tictactoe
├❥ᰰຼ ❏ ${prefix}ttc
├❥ᰰຼ ❏ ${prefix}delttt
├❥ᰰຼ ❏ ${prefix}personalidad
├❥ᰰຼ ❏ ${prefix}racista
├❥ᰰຼ ❏ ${prefix}slot
├❥ᰰຼ ❏ ${prefix}dado
├❥ᰰຼ ❏ ${prefix}piropo
├❥ᰰຼ ❏ ${prefix}ship
├❥ᰰຼ ❏ ${prefix}formartrio
├❥ᰰຼ ❏ ${prefix}formapareja5
┊┃ ❏ ${prefix}txt _(texto)_
├❥ᰰຼ ❏ ${prefix}fake _(texto + tag)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 EFECTOS DE AUDIOS*️⃟ᬽ፝֟━*
├❥ᰰຼ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}bass
├❥ᰰຼ ❏ ${prefix}blown
├❥ᰰຼ ❏ ${prefix}deep
├❥ᰰຼ ❏ ${prefix}earrape
├❥ᰰຼ ❏ ${prefix}fast
├❥ᰰຼ ❏ ${prefix}fat
├❥ᰰຼ ❏ ${prefix}nightcore
├❥ᰰຼ ❏ ${prefix}reverse
├❥ᰰຼ ❏ ${prefix}robot
├❥ᰰຼ ❏ ${prefix}slow
├❥ᰰຼ ❏ ${prefix}smooth
├❥ᰰຼ ❏ ${prefix}squirrel
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧CONVERTIDORES*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}tourl
├❥ᰰຼ ❏ ${prefix}tts
├❥ᰰຼ ❏ ${prefix}tomp3
├❥ᰰຼ ❏ ${prefix}toimg
├❥ᰰຼ ❏ ${prefix}toaudio
├❥ᰰຼ ❏ ${prefix}toanime
├❥ᰰຼ ❏ ${prefix}hd
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵COMANDO +18*️⃟ᬽ፝֟━*
├❥ᰰຼ  *Activa con (antiNsfw on)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}pussy
├❥ᰰຼ ❏ ${prefix}nsfwloli
├❥ᰰຼ ❏ ${prefix}hentai
├❥ᰰຼ ❏ ${prefix}hentai2
├❥ᰰຼ ❏ ${prefix}pack
├❥ᰰຼ ❏ ${prefix}pack2
├❥ᰰຼ ❏ ${prefix}pack3
├❥ᰰຼ ❏ ${prefix}videoxxx
├❥ᰰຼ ❏ ${prefix}videoxxxlesbi
├❥ᰰຼ ❏ ${prefix}pornolesbianavid
├❥ᰰຼ ❏ ${prefix}videolesbixxx
├❥ᰰຼ ❏ ${prefix}porno
├❥ᰰຼ ❏ ${prefix}lewd
├❥ᰰຼ ❏ ${prefix}feed
├❥ᰰຼ ❏ ${prefix}gasm
├❥ᰰຼ ❏ ${prefix}anal	    	
├❥ᰰຼ ❏ ${prefix}holo	    	
├❥ᰰຼ ❏ ${prefix}tits	    	
├❥ᰰຼ ❏ ${prefix}kuni
├❥ᰰຼ ❏ ${prefix}kiss
├❥ᰰຼ ❏ ${prefix}erok
├❥ᰰຼ ❏ ${prefix}smug
├❥ᰰຼ ❏ ${prefix}solog
├❥ᰰຼ ❏ ${prefix}feetg
├❥ᰰຼ ❏ ${prefix}lewdk    
├❥ᰰຼ ❏ ${prefix}femdom
├❥ᰰຼ ❏ ${prefix}cuddle
├❥ᰰຼ ❏ ${prefix}eroyuri
├❥ᰰຼ ❏ ${prefix}cum	    
├❥ᰰຼ ❏ ${prefix}blowjob
├❥ᰰຼ ❏ ${prefix}holoero
├❥ᰰຼ ❏ ${prefix}erokemo
├❥ᰰຼ ❏ ${prefix}fox_girl
├❥ᰰຼ ❏ ${prefix}futanari
├❥ᰰຼ ❏ ${prefix}wallpaper	   
├❥ᰰຼ *Nota: usarlo baja tu responsabilidad*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	
	
╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐RANDOW*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}memes
├❥ᰰຼ ❏ ${prefix}horny
├❥ᰰຼ ❏ ${prefix}simp
├❥ᰰຼ ❏ ${prefix}lolice
├❥ᰰຼ ❏ ${prefix}comentar
├❥ᰰຼ ❏ ${prefix}comment
├❥ᰰຼ ❏ ${prefix}loli
├❥ᰰຼ ❏ ${prefix}lolivid
├❥ᰰຼ ❏ ${prefix}neko
├❥ᰰຼ ❏ ${prefix}waifu	
├❥ᰰຼ ❏ ${prefix}blackpink
├❥ᰰຼ ❏ ${prefix}navidad
├❥ᰰຼ ❏ ${prefix}akira
├❥ᰰຼ ❏ ${prefix}akiyama
├❥ᰰຼ ❏ ${prefix}anna
├❥ᰰຼ ❏ ${prefix}asuna
├❥ᰰຼ ❏ ${prefix}ayuzawa
├❥ᰰຼ ❏ ${prefix}boruto
├❥ᰰຼ ❏ ${prefix}chiho
├❥ᰰຼ ❏ ${prefix}chitoge
├❥ᰰຼ ❏ ${prefix}deidara
├❥ᰰຼ ❏ ${prefix}erza
├❥ᰰຼ ❏ ${prefix}elaina
├❥ᰰຼ ❏ ${prefix}eba
├❥ᰰຼ ❏ ${prefix}emilia
├❥ᰰຼ ❏ ${prefix}hestia
├❥ᰰຼ ❏ ${prefix}hinata
├❥ᰰຼ ❏ ${prefix}inori
├❥ᰰຼ ❏ ${prefix}isuzu
├❥ᰰຼ ❏ ${prefix}itachi
├❥ᰰຼ ❏ ${prefix}itori
├❥ᰰຼ ❏ ${prefix}kaga
├❥ᰰຼ ❏ ${prefix}kagura
├❥ᰰຼ ❏ ${prefix}kaori':
├❥ᰰຼ ❏ ${prefix}keneki
├❥ᰰຼ ❏ ${prefix}kotori
├❥ᰰຼ ❏ ${prefix}kurumi
├❥ᰰຼ ❏ ${prefix}madara
├❥ᰰຼ ❏ ${prefix}mikasa
├❥ᰰຼ ❏ ${prefix}miku
├❥ᰰຼ ❏ ${prefix}minato
├❥ᰰຼ ❏ ${prefix}naruto
├❥ᰰຼ ❏ ${prefix}nezuko
├❥ᰰຼ ❏ ${prefix}sagiri
├❥ᰰຼ ❏ ${prefix}sasuke
├❥ᰰຼ ❏ ${prefix}sakura
├❥ᰰຼ ❏ ${prefix}'cosplay
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*
             
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}minar _(Para minar exp)_
├❥ᰰຼ ❏ ${prefix}robar
├❥ᰰຼ ❏ ${prefix}rob _(Roba exp algun usuarios)_
├❥ᰰຼ ❏ ${prefix}crime
├❥ᰰຼ ❏ ${prefix}trabajar
├❥ᰰຼ ❏ ${prefix}work _(Trabaja y ganas exp)_
├❥ᰰຼ ❏ ${prefix}buy _(Comprar mas diamantes (limit)_
├❥ᰰຼ ❏ ${prefix}bal
├❥ᰰຼ ❏ ${prefix}balace _(diamante/exp tenés)_
├❥ᰰຼ ❏ ${prefix}claim
├❥ᰰຼ _(Recoger tu recompensa)_
├❥ᰰຼ ❏ ${prefix}lb
├❥ᰰຼ ❏ ${prefix}leaderboard
├❥ᰰຼ ❏ ${prefix}cofre
├❥ᰰຼ ❏ ${prefix}perfil
├❥ᰰຼ ❏ ${prefix}nivel
├❥ᰰຼ ❏ ${prefix}levelup
├❥ᰰຼ ❏ ${prefix}transferir
├❥ᰰຼ ❏ ${prefix}transfer
├❥ᰰຼ ❏ ${prefix}afk 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ *(Crear sticker desde whatsapp con YuGi-BOT)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}s
├❥ᰰຼ ❏ ${prefix}sticker 
├❥ᰰຼ ❏ ${prefix}wm
├❥ᰰຼ ❏ ${prefix}attp
├❥ᰰຼ ❏ ${prefix}qc
├❥ᰰຼ ❏ ${prefix}emojimix
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(Comando exclusivo para propietario/owner de YuGi-BOT comandos solo para eliasar yt)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}anticall _(on/off)_
├❥ᰰຼ ❏ ${prefix}antillamada _(on/off)_
├❥ᰰຼ ❏ ${prefix}antipv _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiprivado _(on/off)_
├❥ᰰຼ ❏ ${prefix}autoread _(on/off)_
├❥ᰰຼ ❏ ${prefix}modojadibot _(on/off)_
├❥ᰰຼ ❏ ${prefix}añadirdiamantes _(@tag)_
├❥ᰰຼ ❏ ${prefix}addlimit _(@tag)_
├❥ᰰຼ ❏ ${prefix}dardiamantes _(@tag)_
├❥ᰰຼ ❏ ${prefix}añadirxp _(@tag)_
├❥ᰰຼ ❏ ${prefix}addxp _(@tag)_
├❥ᰰຼ ❏ ${prefix}banuser _(@tag)_
├❥ᰰຼ ❏ ${prefix}unbanuser _(@tag)_
├❥ᰰຼ ❏ ${prefix}autoadmin 
├❥ᰰຼ ❏ ${prefix}nuevonombre
├❥ᰰຼ ❏ ${prefix}botname _(cambiar el name del bot)_
├❥ᰰຼ ❏ ${prefix}nuevafoto
├❥ᰰຼ ❏ ${prefix}seppbot
├❥ᰰຼ ❏ ${prefix}fotobot _(cambiar la foto del bot)_
├❥ᰰຼ ❏ ${prefix}bc (Difusión a todos los chat)
├❥ᰰຼ ❏ ${prefix}bcgc (Difusión solo a grupos)
├❥ᰰຼ ❏ ${prefix}setpp (Cambia la foto del bot) 
├❥ᰰຼ ❏ ${prefix}public (Modo público) 
├❥ᰰຼ ❏ ${prefix}privado (Modo privado) 
├❥ᰰຼ ❏ ${prefix}getcase
├❥ᰰຼ ❏ ${prefix}fetch
├❥ᰰຼ ❏ ${prefix}update
├❥ᰰຼ ❏ ${prefix}restart 
├❥ᰰຼ ❏ ${prefix}reiniciar
├❥ᰰຼ ❏ $ 
├❥ᰰຼ ❏ >
├❥ᰰຼ ❏ => 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363295950653343@newsletter', 
serverMessageId: '', 
newsletterName: 'YUGI-BOT' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363295950653343@newsletter', serverMessageId: '', newsletterName: 'YUGI-BOT' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363295950653343@newsletter', serverMessageId: '', newsletterName: 'YUGI-BOT' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
