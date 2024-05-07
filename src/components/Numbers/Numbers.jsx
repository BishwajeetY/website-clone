import React,{useState} from "react"
import "./Numbers.css"

function Numbers(){
    const[number1,setNumber1]=useState(10)
    const[number2,setNumber2]=useState(100)
    const[number3,setNumber3]=useState(10)
    const[number4,setNumber4]=useState(10)
    function n1(){
        {
            for( var i=10;i<=89;i++)
            {
                setNumber1(i)
            }
        }
    }
    function n2(){
        {
            for( var l=100;l<=130;l++)
            {
                setNumber2(l)
            }
        }
    }
    function n2(){
        {
            for( var k=10;k<=74;k++)
            {
                setNumber3(k)
            }
        }
    }
    function n4(){
        {
            for( var j=10;j<=24;j++)
            {
                setNumber4(j)
            }
        }
    }
    

    

    return(
        <>
        <div className="numbers-box"  onMouseOver={()=>{n1();n2();n3();n4()}}>
            <div className="sub-number-box" >
                <span className="number">{number1}</span>
                <span className="text">Bussiness Partners</span>
            </div>
            <div className="sub-number-box">
                <span className="number">{number2}</span>
                <span className="text">Finished Projects</span>
            </div>
            <div className="sub-number-box">
                <span className="number">{number3}</span>
                <span className="text">Happy Clients</span>
            </div>
            <div className="sub-number-box">
                <span className="number">{number4}</span>
                <span className="text">Awards Winning</span>
            </div>
        </div>
        </>

)
    
}

export default Numbers