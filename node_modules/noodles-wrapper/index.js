const fetch = require('node-fetch')
const baseurl = 'https://frenchnoodles.xyz/api/endpoints/'



async function request(endpoint, input='') {
    const res = await fetch(`${baseurl}${endpoint}/?${input}`, {
        headers: {'User-Agent': `noodles-wrapper@${process.env.npm_package_version}(https://www.npmjs.com/package/noodles-wrapper) by French Noodles#4000`}
    });
    if(res.status == 429) {console.log(await res.json()); throw new Error('You have been rate limited')}
    else return res.buffer()
}

module.exports.drake = async function(text1, text2) {
    if(!text1) throw new Error('The field text1 was left empty in the drake function')
    if(!text2) throw new Error('The field text2 was left empty in the drake function')
    const input = `text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const response = await request('drake', input)
    return response
}

module.exports.worthless = async function(text) {
    if(!text) throw new Error('The field text was left empty in worthless function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('worthless', input)
    return response
}

module.exports.presidentialalert = async function(text) {
    if(!text) throw new Error('The field text was left empty in presidentialalert function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('presidentialalert', input)
    return response
}

module.exports.spongebobburnpaper = async function(text) {
    if(!text) throw new Error('The field text was left empty in spongebobburnpaper function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('spongebobburnpaper', input)
    return response
}


module.exports.lisastage = async function(text) {
    if(!text) throw new Error('The field text was left empty in lisastage function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('lisastage', input)
    return response
}

module.exports.changemymind = async function(text) {
    if(!text) throw new Error('The field text was left empty in changemymind function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('changemymind', input)
    return response
}

module.exports.awkwardmonkey = async function(text) {
    if(!text) throw new Error('The field text was left empty in awkwardmonkey function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('awkwardmonkey', input)
    return response
}

module.exports.blur = async function(image) {
    if(!image) throw new Error('The field text was left empty in blur function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('blur', input)
    return response
}

module.exports.invert = async function(image) {
    if(!image) throw new Error('The field text was left empty in invert function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('invert', input)
    return response
}

module.exports.edges = async function(image) {
    if(!image) throw new Error('The field text was left empty in edges function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('edges', input)
    return response
}

module.exports.circle = async function(image) {
    if(!image) throw new Error('The field text was left empty in circle function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('circle', input)
    return response
}

module.exports.wide = async function(image) {
    if(!image) throw new Error('The field text was left empty in wide function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('wide', input)
    return response
}

module.exports.uglyupclose = async function(image) {
    if(!image) throw new Error('The field text was left empty in uglyupclose function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('uglyupclose', input)
    return response
}

module.exports.clown = async function(image) {
    if(!image) throw new Error('The field text was left empty in clown function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('clown', input)
    return response
}

module.exports.rip = async function(image) {
    if(!image) throw new Error('The field text was left empty in rip function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('rip', input)
    return response
}

module.exports.affectbaby = async function(image) {
    if(!image) throw new Error('The field text was left empty in affectbaby function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('affectbaby', input)
    return response
}

module.exports.trash = async function(image) {
    if(!image) throw new Error('The field text was left empty in trash function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('trash', input)
    return response
}

module.exports.welcomebanner = class welcomebanner{
    constructor(){}
        setBackground(value) { this.background = value; return this}
        setAvatar(value) { this.avatar = value; return this}
        setTitle(value) { this.title = value; return this}
        setText1(value) { this.text1 = value; return this}
        setSubtitle(value) { this.subtitle = value; return this}
        setTextColor(value) { this.textcolor = value; return this}
    build(){
        return welcomebannerbuild(this.background, this.avatar, this.title, this.text1, this.subtitle, this.textcolor);
    }
}
async function welcomebannerbuild(background, avatar, title, text1, subtitle, textcolor) {
    if(!background) throw new Error('The field background was left empty in welcomebanner function')
    if(!avatar) throw new Error('The field avatar was left empty in welcomebanner function')
    if(!title) throw new Error('The field title was left empty in welcomebanner function')
    if(!subtitle) throw new Error('The field subtitle was left empty in welcomebanner function')
    if(!textcolor) throw new Error('The field textcolor was left empty in welcomebanner function')
    const input = `background=${encodeURIComponent(background)}&avatar=${encodeURIComponent(avatar)}&title=${encodeURIComponent(title)}&text1=${encodeURIComponent(text1)}&subtitle=${encodeURIComponent(subtitle)}&textcolor=${encodeURIComponent(textcolor.replace('#', ''))}`
    const response = await request('welcomebanner', input)
    return response
}

module.exports.boostercard = async function(image) {
    if(!image) throw new Error('The field text was left empty in boostercard function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('boostercard', input)
    return response
}

module.exports.balancecard = class balancecard{
    constructor(){}
        setBackground(value) { this.background = value; return this}
        setAvatar(value) { this.avatar = value; return this}
        setTitle(value) { this.title = value; return this}
        setText1(value) { this.text1 = value; return this}
        setText2(value) { this.text2 = value; return this}
        setTextColor(value) { this.textcolor = value; return this}
    build(){
        return balancecardbuild(this.background, this.avatar, this.title, this.text1, this.text2, this.textcolor);
    }
}
async function balancecardbuild(background, avatar, title, text1, text2, textcolor) {
    if(!background) throw new Error('The field background was left empty in balancecard function')
    if(!avatar) throw new Error('The field avatar was left empty in balancecard function')
    if(!title) throw new Error('The field title was left empty in balancecard function')
    if(!text1) throw new Error('The field text1 was left empty in balancecard function')
    if(!text2) throw new Error('The field text2 was left empty in balancecard function')
    if(!textcolor) throw new Error('The field textcolor was left empty in balancecard function')
    const input = `background=${encodeURIComponent(background)}&avatar=${encodeURIComponent(avatar)}&title=${encodeURIComponent(title)}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&textcolor=${encodeURIComponent(textcolor.replace('#', ''))}`
    const response = await request('balancecard', input)
    return response
}

module.exports.randommeme = async function() {
    const response = await request('randommeme')
    return response
}