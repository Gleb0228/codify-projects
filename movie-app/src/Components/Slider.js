import React, {useState} from "react"
import './Slider.css'



function Slider (){
    const [slider, setSlider] = useState(0)

    function nextSlide(){
        if(slider !== dataSlide.length) {
            setSlider(slider + 1)
        }else if(slider === dataSlider.length){
            setSlider(1)
        }
    }

    function prevSlide(){
        if(slider !== 0) {
            setSlider(slider - 1)
        }else if(slider === 1){
            setSlider(dataSlider.length)
        }
    }

    function Move(index){
        setSlider(index)
    }
    return (
        <div className="container-slider">
            {
                dataslider.map((obj,index) => {
                    return (
                        <div key={obj.id} className={slider === index + 1 ? "slide active-anim":'slide'}>

                            <img src={process.env.PUBLIC-URL + `/Imgs/img${index + 1}`}/>

                        </div>
                    )
                })
            }
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
        </div>
    )
}