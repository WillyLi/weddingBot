const guestMap = require('./guestMap.json')
module.exports = (name) {
  const _name = name.trim()
  for (key in guestMap){
    if(guestMap.includes(_name)){
      return guestMap[key]
    } else {
      return undefined
    }
  }
}
