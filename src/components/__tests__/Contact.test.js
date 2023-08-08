import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

import Contact from "../Contact"


describe('Contact page test case', () => {

    beforeAll(() => {
        console.log('Before All test')
    })

    beforeEach(() => {
        console.log('Before each')
    })

    afterAll(() => {
        console.log('After all')
    })

    afterEach(() => {
        console.log('After each')
    })



    it('should render contact us page component', () => {

        render(<Contact />)
        const heading = screen.getByRole('heading')

        expect(heading).toBeInTheDocument();
    })

    it('should load button inside contact  component', () => {

        render(<Contact />)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument();
    })

    test('should load input name inside contact component', () => {

        render(<Contact />)
        const inputName = screen.getByPlaceholderText('name')

        expect(inputName).toBeInTheDocument();
    })

    test('should load 2 input name inside contact  component', () => {

        render(<Contact />)
        const inputBox = screen.getAllByRole('textbox');

        expect(inputBox.length).toBe(2)
    })
})