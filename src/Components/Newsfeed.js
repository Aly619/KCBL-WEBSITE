import React from "react";
import n1 from '../Images/n1.jpg'
import n2 from '../Images/n2.jpg'
import n3 from '../Images/n3.png'

const Newsfeed=()=>{
    return(

       // <!-- -------------NewsFeed---------------- -->

        <section className="newsfeed">
            <h1 id="title">Our&nbsp; <span className="primary-color">Newsfeed</span></h1>
            <div className="cards">
    
                <div className="dcards">
                    <img src={n1} alt=""/>
                    <div className="rowp">
                        <p>08-11-2021</p>
                        <p>Category</p>
                    </div>
                    <h2>KCB is one of the most vibrant financial institution</h2>
                    <p>Karakoram Cooperative Bank Limited Gilgit-Baltistan (formerly Northern Areas Provincial Cooperative
                        Bank Ltd) was Established in 1956, under the Cooperative Societies Act, 1925. from 1977 See More</p>
                </div>
    
                <div className="dcards">
                    <img src={n2} alt=""/>
                    <div className="rowp">
                        <p>08-11-2021</p>
                        <p>Category</p>
                    </div>
                    <h2>KCB is one of the most vibrant financial institution</h2>
                    <p>Karakoram Cooperative Bank Limited Gilgit-Baltistan (formerly Northern Areas Provincial Cooperative
                        Bank Ltd) was Established in 1956, under the Cooperative Societies Act, 1925. from 1977 See More</p>
                </div>
    
                <div className="dcards">
                    <img src={n3} alt=""/>
                    <div className="rowp">
                        <p>08-11-2021</p>
                        <p>Category</p>
                    </div>
                    <h2>KCB is one of the most vibrant financial institution</h2>
                    <p>Karakoram Cooperative Bank Limited Gilgit-Baltistan (formerly Northern Areas Provincial Cooperative
                        Bank Ltd) was Established in 1956, under the Cooperative Societies Act, 1925. from 1977 See More</p>
                </div>
    
            </div>
            <a href="" className="hero-btn">Learn More</a>
    
        </section>

    )
}

export default Newsfeed