import React from 'react';
function randint(min,max) {
    let x= (max-min)+1
    return min + Math.floor(Math.random()*x)
}
export default function Banner() {
    const r = randint(1,3)
    let banner=''
    let url =''
    switch (r) {
        case 1:
            banner='./banner/react.jpg'
            url='https://www.react.org'
            break;
        case 2:
            banner='./banner/react-native.jpg'
            url='https://www.reactnative.com'
            break;
        case 3:
            banner='./banner/node.jpg'
            url='https://nodejs.org'
            break
        default:
            break;
    }
    const bannerClick =()=>{
        window.open(url)
    }
    return (
        <div style={{margin:'20px',textAlign:'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}} 
            alt="banner"/>
        </div>
    )
}