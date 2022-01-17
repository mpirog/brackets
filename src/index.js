
const getOpenBreket = (bracketsConfig, clBreket) => {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][1] === clBreket) {
      return bracketsConfig[i][0]
    }
  }
}

module.exports = function check(str, bracketsConfig) {
  const brekets = [...str]
  const closeBrekets = bracketsConfig.map(element => element[1])

  while (brekets.length) {
    let currenIndex = 0,
        sameBreket = null

    const clBreket = brekets.find((breket, index) => {
        currenIndex = index;

        if (closeBrekets.includes(breket)) {
          if (sameBreket !== breket && getOpenBreket(bracketsConfig, breket) === breket) {
            sameBreket = breket
          } else {
            return true
          }
        }
    })

    let opBrecet = getOpenBreket(bracketsConfig, clBreket)
  
    if (!opBrecet || opBrecet !== brekets[currenIndex-1]) {
      return false
    }

    brekets.splice(currenIndex-1, 2)
  }

  return true
}