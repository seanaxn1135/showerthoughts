import { render, screen } from '@testing-library/react';
import Header from './../header'

describe('Header', () => {
    it('should render the header text', () => {
        render(<Header />)
        const headerText = screen.getByText('Showerthoughts');
        expect(headerText).toBeInTheDocument();
    })
})