const DEFAULT_FILL = '_'

const getDiamondArray = (alphabet, midpointLetter) => {
    const diamondMidpoint = alphabet.findIndex((character) => character === midpointLetter)
    const letters = [...alphabet].splice(0, diamondMidpoint + 1)
    const diamondLength = (letters.length * 2) - 1
    const midpointPosition = Math.floor(diamondLength / 2)
    const lastIndex = diamondLength - 1

    return Array(diamondLength).fill(null).map((val, index) => {

        //passed midpoint
        if (index > midpointPosition) {
            return Array(diamondLength).fill(DEFAULT_FILL).map((val, index2) => {
                if (index2 > midpointPosition) {
                    return index2 === (lastIndex - (index - midpointPosition)) ? letters[index2 - midpointPosition] : val
                }
                return index2 === (index - midpointPosition) ? letters[midpointPosition - index2] : val
            }).join('')
        }

        return Array(diamondLength).fill(DEFAULT_FILL).map((val, index2) => {
            if (index2 > midpointPosition) {
                return index2 === (midpointPosition + index) ? letters[index] : val
            }
            return index2 === (midpointPosition - index) ? letters[index] : val
        }).join('')

    })
}

export default getDiamondArray
