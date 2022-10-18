import React from 'react'
import { render, screen } from '@testing-library/react'
import diamondConfig from "../../../config/diamond";

import Diamond from '../index'

describe('components/diamond', () => {
    it('should match diamond text for B complexity', () => {
        render(<Diamond
            midpointLetter="B"
            alphabet={diamondConfig.alphabet}
        />)
        const expectedDiamond = [
            '_A_',
            'B_B',
            '_A_'].join(' ')
        const element = screen.getByTestId('diamond')
        expect(element).toHaveTextContent(expectedDiamond)
    })

    it('should match diamond text for C complexity', () => {
        render(<Diamond
            midpointLetter={diamondConfig.midpointLetter}
            alphabet={diamondConfig.alphabet}
        />)
        const expectedDiamond = [
            '__A__',
            '_B_B_',
            'C___C',
            '_B_B_',
            '__A__',
        ].join(' ')
        const element = screen.getByTestId('diamond')
        expect(element).toHaveTextContent(expectedDiamond)
    })

    it('should match diamond text for D complexity', () => {
        render(<Diamond
            midpointLetter="D"
            alphabet={diamondConfig.alphabet}
        />)
        const expectedDiamond = [
            '___A___',
            '__B_B__',
            '_C___C_',
            'D_____D',
            '_C___C_',
            '__B_B__',
            '___A___',
        ].join(' ')
        const element = screen.getByTestId('diamond')
        expect(element).toHaveTextContent(expectedDiamond)
    })
})
