import React from 'react'
import './home.css'
import Data from './Data'
import Socials from './Socials'
import Scroll from './Scroll'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Socials />

                <div className="home__img"></div>

                <Data />
            </div>

            <Scroll />
        </div>
    </section>
  )
}

export default Home