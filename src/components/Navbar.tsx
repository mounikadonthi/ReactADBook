import React from 'react';
import icon from '../icons/blog-icon.png';

interface IProps {
    // clicked:()=>boolean;
}
interface IState {
}

class Navbar extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);


    }

    render() {
        return (
            <div className="custom-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >+ADD</a>

                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><img src={icon} alt="icon" /></a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Navbar;