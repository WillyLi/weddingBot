const guestMap = require('./guestMap.json')
module.exports = (name) => {
  const _name = name.trim()
  let _table = undefined
  for (key in guestMap){
    if(key.includes(_name)){
      _table = guestMap[key]
    }
  }
  return _table
}
