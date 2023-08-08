import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';
import withPromotedLabel from '../RestaurantCard';

it('should be render restaurant card component with props data', () => {

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("McDonald's")

    expect(name).toBeInTheDocument();
})

it('should be render restaurant card component with promoted label', () => {

    render(<withPromotedLabel />)
})