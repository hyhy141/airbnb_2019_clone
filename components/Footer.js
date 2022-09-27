import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
        </div> 
        
        <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Refferals accepted</p>
                <p>Lolo fam</p>
        </div>
        
        <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Azat is a King of React</p>
                <p>Presents</p>
                <p>Lolo</p>
                <p>Live Yours</p>
                <p>RNDM</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Centre</p>
                <p>Safety</p>
                <p>Invest</p>
                <p>For the win</p>
                <p>Cayman or C</p>
        </div>
    </div>
  )
}

export default Footer
