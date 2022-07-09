import App from "../App"
import {screen,render,fireEvent} from '@testing-library/react'
import Counter from "./Counter";

describe("Testing the counter App",()=>
{
    it("Should check change of inc count ",()=>
    {
       render(<App>INC</App>);

       let countcheck=screen.getByTestId("count");
       expect(countcheck).toHaveTextContent("0");

       let afterInc=screen.getByText("INC");
       fireEvent.click(afterInc);
       expect(countcheck).toHaveTextContent("5");

       
    });
    it("Sholud check change of dec count",()=>
    {
        render(<App>DEC</App>);

        let icount=screen.getByTestId("count");
        expect(icount).toHaveTextContent("0");

        let afterDec=screen.getByText("DEC");
        fireEvent.click(afterDec);
        expect(icount).toHaveTextContent("-5")
    });
    it("sholud check can a function inc button",()=>
    {
        const mockFun=jest.fn();
        render(<Counter Inc={mockFun}></Counter>);


        const incbtn=screen.getByTestId("btn");
        fireEvent.click(incbtn);
        expect(mockFun).toBeCalled();
    });
    it("sholud check can a function dec button ",()=>
    {
        const mockFun=jest.fn();
        render(<Counter Dec={mockFun}></Counter>)

        const DecButton=screen.getByTestId("btn");
        fireEvent.click(DecButton);
        expect(mockFun).toBeCalled();
    })
})