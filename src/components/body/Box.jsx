import { useState } from 'react'
import React from 'react'
import './Box.css'
import data from "./data"

function Box(){
    const [selected,setSelected]=useState(null) ;
    function handler(getId){
        setSelected(getId===selected ? null:getId)
    }

    return(
        <>
        <div className="data-box">
            <div className="img-content">
             <div className="data-img">
                 <img src="https://kreativantech.com/wp-content/uploads/2023/09/php_11zon.jpg" alt="image" />
                </div>
            <div className="data-content">
                <span>At Kreativan Technologies, we help small  midsize business enterprises across the globe, get the desired  through our bespoke web and allied services. The whole idea is to reach out to a wider audience locally or globally, and convert prospects to new customers. The bottomline is to increase conversion rate, visitor footfalls, traffic, sales, revenue, leads and new subscribers for any organization, across the board.</span>
                <span>As the , we’ve mastered the art of website design, development and optimization; thanks to our highly professional team of qualified web designers developers, web analysts, SEO strategists, IT experts and digital marketers that leave no stone unturned in bolstering a site’s overall performance</span>
            </div>
            </div>
            <div className="fidgets-container">
                <div className="fidgets">
                    <img src="	https://kreativantech.com/wp-content/uploads/2023/08/wAP-01-scaled.jpg" alt="web devlopment" />
                </div>
                <div className="fidgets">
                    <img src="https://kreativantech.com/wp-content/uploads/2023/08/vector-01-01-scaled.jpg" alt="graphic-designer" />
                </div>
                <div className="fidgets">
                    <img src="https://kreativantech.com/wp-content/uploads/2023/08/Android-01-scaled.jpg" alt="android devlopment" />
                </div>
                <div className="fidgets">
                    <img src="https://kreativantech.com/wp-content/uploads/2023/08/google-01-scaled.jpg" alt="google Adds" />
                </div>
                <div className="fidgets">
                    <img src="	https://kreativantech.com/wp-content/uploads/2023/08/ios-01-1-scaled.jpg" alt="ios" />
                </div>
                <div className="fidgets">
                    <img src="https://kreativantech.com/wp-content/uploads/2023/08/seo-01-scaled.jpg" alt="seo" />
                </div>
                <div className="fidgets">
                    <img src="https://kreativantech.com/wp-content/uploads/2023/08/training-01-scaled.jpg" alt="training" />
                </div>

            </div>
            
            
        </div>
        <div className="overlap">
            <div className="overlap-left">
                <div className="faq"><h2>FAQ</h2></div>
                <div className="overlap-left-list">
                {data.map((items)=>(<div className="item">
                    <div className="title" onClick={()=>{handler(items.id)}}>
                        <p key={items.id}>{items.title}</p>
                    { selected===items.id ? <div className="content">
                        {items.content} </div> : null}
                    </div>

                </div>))}
             </div>
        </div>
        <div className="overlap-right">
            
        </div>
       
     </div>
     <div className="s-sblog">
      <span className="blog">OUR BLOG</span>
      <hr />
        <hr />
        </div>
        <h1>Among the Top Digital Marketing Companies in North India</h1>
        <div className="data-2">
            <div className="data-img2">
                <img src="https://kreativantech.com/wp-content/uploads/2023/09/12085316_20944142_11zon-scaled.jpg" alt="img" />
            </div>
            <div className="data-content2">
                <p>It all starts with a project feasibility study, and thereafter a team is allocated with an experienced project manager, looking into the critical aspects of software development, testing and final delivery. A custom software that looks into the needs of a client or business, and streamlines the work processes, is what matters the most.&nbsp;Whether it is a highly responsive mobile App development with the best-in-class UI/UX features or a standard company software, it must encompass all the aspects of product &amp; service life-cycle, shopping cart features, and other vital information, as specified by the client. Being the </p>
            </div>
        </div>
        </>
        


    )

}
export default Box