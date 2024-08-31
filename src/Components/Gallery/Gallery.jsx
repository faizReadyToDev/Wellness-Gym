import React from 'react'

const Gallery = () => {
  return (
    <>

    <div className='w-[80vw] mx-auto bg-black mt-20 mb-10'>
        <h1 className='text-center text-3xl font-bold text-black bg-white border-2 border-black ring-2 ring-slate-300 p-3 shadow-black'>Gym Interior</h1>
        <div className='grid grid-cols-4 justify-items-center auto-cols-auto gap-y-20 p-10'>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-1.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-2.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-3.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-4.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-5.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-6.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-7.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-8.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-9.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-10.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-11.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-12.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-13.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-14.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-15.jpg" alt="" />
        </div>
        <div>
            <img className='h-[50vh] w-[250px]' src="assets/Gym-16.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className='w-[80vw] mx-auto bg-black mb-20'>
    <h1 className='mb-5 text-center text-3xl font-bold text-black bg-white border-2 border-black ring-2 ring-slate-300 p-3 shadow-black'>Gym Related Gallery</h1>
      <div className='grid grid-cols-4 justify-items-center auto-cols-auto gap-y-20 p-10'>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-1.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-2.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-3.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-4.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-5.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-6.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-7.mp4"></video>
        </div>
        <div className=''>
            <video className='h-[50vh]' autoPlay muted loop controls src="assets/Gallery-1.mp4"></video>
        </div>
      </div>
      <div className='slider2' style={{'--width': ' 250px' , '--height': '50vh' , '--quantity2': 16}}>
            <div className="list2">
                <img className='item2' style={{'--position2': 1}} src="assets/Gallery-1.jpg" alt="" />
                <img className='item2' style={{'--position2': 2}} src="assets/Gallery-2.jpg" alt="" />
                <img className='item2' style={{'--position2': 3}} src="assets/Gallery-3.jpg" alt="" />
                <img className='item2' style={{'--position2': 4}} src="assets/Gallery-4.jpg" alt="" />
                <img className='item2' style={{'--position2': 5}} src="assets/Gallery-5.jpg" alt="" />
                <img className='item2' style={{'--position2': 6}} src="assets/Gallery-6.jpg" alt="" />
                <img className='item2' style={{'--position2': 7}} src="assets/Gallery-7.jpg" alt="" />
                <img className='item2' style={{'--position2': 8}} src="assets/Gallery-8.jpg" alt="" />
                <img className='item2' style={{'--position2': 9}} src="assets/Gallery-9.jpg" alt="" />
                <img className='item2' style={{'--position2': 10}} src="assets/Gallery-10.jpg" alt="" />
                <img className='item2' style={{'--position2': 11}} src="assets/Gallery-11.jpg" alt="" />
                <img className='item2' style={{'--position2': 12}} src="assets/Gallery-1.jpg" alt="" />
                <img className='item2' style={{'--position2': 13}} src="assets/Gallery-2.jpg" alt="" />
                <img className='item2' style={{'--position2': 14}} src="assets/Gallery-3.jpg" alt="" />
                <img className='item2' style={{'--position2': 15}} src="assets/Gallery-4.jpg" alt="" />
                <img className='item2' style={{'--position2': 16}} src="assets/Gallery-5.jpg" alt="" />
                <img className='item2' style={{'--position2': 1}} src="assets/Gallery-6.jpg" alt="" />
                <img className='item2' style={{'--position2': 2}} src="assets/Gallery-7.jpg" alt="" />
                <img className='item2' style={{'--position2': 3}} src="assets/Gallery-8.jpg" alt="" />
                <img className='item2' style={{'--position2': 4}} src="assets/Gallery-9.jpg" alt="" />
                <img className='item2' style={{'--position2': 5}} src="assets/Gallery-10.jpg" alt="" />
                <img className='item2' style={{'--position2': 6}} src="assets/Gallery-11.jpg" alt="" />
                <img className='item2' style={{'--position2': 7}} src="assets/Gallery-1.jpg" alt="" />
                <img className='item2' style={{'--position2': 8}} src="assets/Gallery-2.jpg" alt="" />
                <img className='item2' style={{'--position2': 9}} src="assets/Gallery-3.jpg" alt="" />
                <img className='item2' style={{'--position2': 10}} src="assets/Gallery-4.jpg" alt="" />
                <img className='item2' style={{'--position2': 11}} src="assets/Gallery-5.jpg" alt="" />
                <img className='item2' style={{'--position2': 12}} src="assets/Gallery-6.jpg" alt="" />
                <img className='item2' style={{'--position2': 13}} src="assets/Gallery-8.jpg" alt="" />
                <img className='item2' style={{'--position2': 14}} src="assets/Gallery-7.jpg" alt="" />
                <img className='item2' style={{'--position2': 15}} src="assets/Gallery-9.jpg" alt="" />
                <img className='item2' style={{'--position2': 16}} src="assets/Gallery-10.jpg" alt="" />
            </div>
        </div>
    </div>

   <hr />

    </>
  )
}

export default Gallery
