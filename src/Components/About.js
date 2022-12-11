import React from 'react'

export default function About(props){

    // const[myStyle,setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor : 'black'
    // })

    // const[btnText,setBtnText] = useState("Enable Light Mode")

    // const switchStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //              backgroundColor : 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //              backgroundColor : 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }


    // let myStyle={
    //     color:'white',
    //     backgroundColor:'black'
    // }

    let myStyle = {
        color:props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
    }

    return(
        <>
        <div className='conatiner' style={myStyle}>
        <h2 className="my-3">About Us</h2>
     <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your Style</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count, character count or time to read.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a free to use charachter counter tool that provides instant character count and word count form given text. This is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={myStyle} id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                It is suitable to work on any browser that can be firefox, chrome, Safari, Opera, etc. It suits to count characters in facebook, blogs, books, excel, essay etc.
            </div>
            </div>
        </div>
     </div>
     
     {/* <div className="container my-3">
        <button type="button" className="btn btn-warning my-3" onClick={switchStyle}>{btnText}</button>
     </div> */}

     </div>
        </>
    )
}

