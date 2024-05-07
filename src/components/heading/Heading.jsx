import React ,{useState} from 'react';
import "./Heading.css";
function Heading(){
    const [dropdown,setDropdown]=useState(0)
    function Handlers(){
        setDropdown(1)
    }
    function Handlers2(){
        setDropdown(0)
    }
    return(
    <header>
        <nav>
            <div className="container">
                <div className="menu-left">
            <div className="menu-icon"></div>
            <div className="menu-logo">
            <img src="https://kreativantech.com/wp-content/uploads/2023/08/kreativan5-01.png" alt="kreativan-logo" />
            </div>
            </div>
            <div className="menu-right">
                <ul className="list" >
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    
                    <li onMouseOver={()=>{Handlers()}}  onMouseOut={()=>{Handlers2()}}> { (dropdown===1 )? <div className="drop-down">
                        <ul>
                            <li>Web Devlopment</li>
                            <li>App Development</li>
                            <li>Digital Marketing</li>
                            <li>Content Writing</li>
                            <li></li>
                        </ul>
                    </div> : null}SERVICES</li>
                    <li>TRAINING</li>
                    <li>PLACEMENT DRIVE</li>
                    <li>CONTACT US</li>
                </ul>
                <div className="seach-container">
                    <div className="search-icon"></div>
                    <div className="registration-button">REGISTRATION FORM</div>
                </div>
                
            </div>
            </div>
        </nav>
        
        <div className="heading">
            <h1>A Digital Markating Company in Chandigarh with  a Difference and Proven Experties </h1>
        </div>
    </header>
    )


}
export default Heading