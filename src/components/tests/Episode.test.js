import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
    render(<Episode episode={{}}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={{
        id:1, 
        image:'https://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg', 
        name:'"Chapter One: Suzie, Do You Copy?"', 
        season:3, 
        number:1, 
        summary:"summary", 
        runtime:51
    }}/>)

    const summary = screen.queryByText(/summary/i)

    expect(summary).toBeInTheDocument()

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={{
        id:1, 
        image:null, 
        name:'"Chapter One: Suzie, Do You Copy?"', 
        season:3, 
        number:1, 
        summary:"summary", 
        runtime:51
    }}/>)

    const img = screen.queryByRole('img')

    expect(img).toHaveProperty('src','https://i.ibb.co/2FsfXqM/stranger-things.png')
});
