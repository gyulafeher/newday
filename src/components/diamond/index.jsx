
import getDiamondArray from './utils/getDiamondArray'

function Diamond({ midpointLetter, alphabet }) {

  return (
    <div
      data-testid='diamond'
    >
      {getDiamondArray(alphabet, midpointLetter).map((val, index) => {
        return <div key={index}> {val} </div>
      })}
    </div>
  );
}

export default Diamond;
