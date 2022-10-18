import React from 'react'
import { render, screen } from '@testing-library/react'

import Diamond from '../index'

describe('components/diamond', () => {
    it('should match diamond text', () => {
        render(<Diamond />)

        const element = screen.getByTestId('diamond')
        expect(element).toHaveTextContent('_A_\nB_B\n_A_')
    })
})
