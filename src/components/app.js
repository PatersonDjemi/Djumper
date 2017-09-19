import React from 'react'
import { Container } from 'semantic-ui-react'

import Navigation from './navigation'
import FirstBlock from './first_block'
import SecondBlock from './second_block'
import ThirdBlock from './third_block'
import FourthBlock from './fourth_block'
import FifthBlock from './fifth_block'
import SixthBlock from './sixth_block'



const App = () => {
    return (
        <div className="_yop">
            <Navigation/>
            <SecondBlock/>
            <ThirdBlock/>
            <FourthBlock/>
            <FifthBlock/>
            <SixthBlock/>
        </div>

    );
}

export default App;