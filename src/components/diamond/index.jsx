
function Diamond({ midpointLetter, alphabet }) {

  const getDiamondArray = () => {
    const diamondMidpoint = alphabet.findIndex((character) => character === midpointLetter)
    const letters = [...alphabet].splice(0, diamondMidpoint + 1)
    const diamondLength = (letters.length * 2) - 1
    const midpointPosition = Math.floor(diamondLength / 2)

    return Array(diamondLength).fill(null).map((val, index) => {

      //first, last
      if (index === 0 || index === diamondLength - 1) {
        return Array(diamondLength).fill('_').map((val, index1) => {
          return midpointPosition === index1 ? letters[0] : val
        }).join('')
      }

      //midpoint
      if (index === midpointPosition) {
        return Array(diamondLength).fill('_').map((val, index2) => {
          return index2 === 0 || index2 === (diamondLength - 1) ? letters[index] : val
        }).join('')
      }

      //passed midpoint
      if (index > midpointPosition) {
        return Array(diamondLength).fill('_').map((val, index2) => {
          if (index2 > midpointPosition) {
            return index2 === (diamondLength - 1 - (index - midpointPosition)) ? letters[index2 - midpointPosition] : val
          }
          return index2 === (index - midpointPosition) ? letters[midpointPosition - index2] : val
        }).join('')
      }

      return Array(diamondLength).fill('_').map((val, index2) => {
        if (index2 > midpointPosition) {
          return index2 === (midpointPosition + index) ? letters[index] : val
        }
        return index2 === (midpointPosition - index) ? letters[index] : val
      }).join('')

    })
  }

  return (
    <div
      data-testid='diamond'
    >
      {getDiamondArray().map((val, index) => {
        return <div key={index}> {val} </div>
      })}
    </div>
  );
}

export default Diamond;
