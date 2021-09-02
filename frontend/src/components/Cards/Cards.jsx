import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                         <CardItem
                        src="/images/HaLongBay.jpg"
                        text="Come to Vietnam's Ha Long Bay to discover its majestic and poetic beauty."
                        label="Unesco"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-1.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-3.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-4.jpg"
                        text="Come to Vietnam's Ha Long Bay to discover its majestic and poetic beauty."
                        label="Unesco"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-2.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-5.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-6.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-7.jpg"
                        text="Come to Vietnam's Ha Long Bay to discover its majestic and poetic beauty."
                        label="Unesco"
                        path="/services"
                        />
                          <CardItem
                        src="/images/img-8.jpg"
                        text="Come to Vietnam's Ha Long Bay to discover its majestic and poetic beauty."
                        label="Unesco"
                        path="/services"
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
