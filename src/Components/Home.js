import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function Home() {
    let styles = {
        height: '100vh',
        backgroundColor:'red',
    }
  return(
    <div style={styles}>
    <Header />
    <Main />
    <Footer />
    </div>
  )
    
}

export default Home;