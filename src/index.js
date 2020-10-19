const oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine']
const secondDecimal = ['ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen']
const decimals = ['twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety']
const hundred = 'hundred'

module.exports = function toReadable(number) {
    const numToArr = number.toString().split('')
    const size = numToArr.length
    switch (size) {
        case 1:
            if (number === 0) return oneDigit[number]
            return oneDigit[number]

        case 2:
            return underHundred(number)
        case 3:
        case 3:
            return oneDigit[numToArr[0]] + ' ' + hundred + (() => {
                if (+numToArr[1] !== 0 && +numToArr[2] !== 0) {
                    return ' ' + underHundred(numToArr.slice(1).join(''))
                } else if (+numToArr[1] !== 0 && +numToArr[2] == 0) {
                    return ' ' + underHundred(numToArr.slice(1).join(''))
                }
                else if (+numToArr[1] === 0 && +numToArr[2] !== 0) {
                    return ' ' + oneDigit[+numToArr[2]]
                } else return ''
            })()


    }

}

const underHundred = (number) => {
    const numToArr = number.toString().split('')
    if (number < 20) {
        return secondDecimal[number - 10]
    } else {
        // console.log(numToArr[numToArr.length - 1])
        return decimals[numToArr[0] - 2] + (+numToArr[numToArr.length - 1] === 0 ? '' : ' ' + oneDigit[+numToArr[1]])
    }
}
