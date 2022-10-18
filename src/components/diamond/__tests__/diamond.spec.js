import React from 'react'
import { render, screen } from '@testing-library/react'
import diamondConfig from "../../../config/diamond";

import Diamond from '../index'

describe('components/diamond', () => {
    it('should match diamond text', () => {
        render(<Diamond
            midpointLetter={diamondConfig.midpointLetter}
            alphabet={diamondConfig.alphabet}
        />)
        const expectedDiamond = [
            '_A_',
            'B_B',
            '_A_'].join(' ')
        const element = screen.getByTestId('diamond')
        expect(element).toHaveTextContent(expectedDiamond)
    })
})
