import React, {components} from 'react';
import ReactDom from 'react-dom';


import BookList from './components/BookList';

function App(){
    return (
        <div className="App">
            <main>
                <h2>Today's Deal</h2>
                <BookList/>
            </main>
        </div>
    );
}

export default App;