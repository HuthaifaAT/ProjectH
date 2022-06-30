import React, {Fragment} from 'react'
import Navigation from '../Navigation';

const LINKS = [
    { label: 'Website', to: 'https://www.robinwieruch.de/' },
    { label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];
const App = () => {
    return (
        <Fragment>
            <div>
                <Navigation links={LINKS} />
            </div>
        </Fragment>
    );
}

export default App;