import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Body from "../Body"
import MOCK_DATA from '../mocks/resListMockData.json'
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should search list for burger input', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchButton = screen.getByRole('button', { name: 'Search' })

    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value: 'burger' } })

    fireEvent.click(searchButton)

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);

})

it('should filter top rated restaurant', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )

    const cardBeforeFilter = screen.getAllByTestId('resCard');

    expect(cardBeforeFilter.length).toBe(20)

    const topRatedBtn = screen.getByRole('button', { name: 'Top Rated Restaurants' });

    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId('resCard');

    expect(cardsAfterFilter.length).toBe(19)
})