import React from 'react';

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

const Home = () => {
  return <>
  
  {/*  ====== hero section ======*/}
  
<>
<section className='hero__section pt-[60px] 2xl:h-[800px]'>
  <div className='container'>
    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

      {/*  ====== hero content ======= */}

      <div>
        <div className='lg:w-[570px]'>
          <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
          md:leading-[70px]'>
           Transforming Lives: Our Commitment to Extending Health and Longevity for Patients
            </h1>
          <p className='text__para'>
          At the heart of our mission lies a simple yet profound commitment: 
          to empower individuals to live healthier, longer lives. Through personalized care and innovative solutions,
           we guide our patients on a transformative journey towards vibrant well-being and enduring vitality."
          </p>

          <button className='btn'>
           Book an Appointment
          </button>
        </div>

{/* ====== hero counter =======*/}
<div className='mt-[30px] lg:mt-[70px] flex  flex-col lg:flex-row lg:items-center gap-5 
lg:gap-[30px]'>

<div>
  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
  text-headingColor'>
40+
  </h2>
<span className='w-[100px] h-2 bg-purple-800 rounded-full block mt-[-14px]'>
</span>
<p className='text__para'>Years of Experience</p>
</div>


<div>
  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
  text-headingColor'>
15+
  </h2>
<span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
</span>
<p className='text__para'>Years of Experience</p>
</div>


<div>
  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
  text-headingColor'>
100%
  </h2>
<span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
</span>
<p className='text__para'>Patient Satisfaction</p>
</div>
</div>
      </div>

{/* ======= hero content ========= */ }

<div className='flex gap-[30px] justify-end'>
</div>
<img className='w-full'src={heroImg01} alt="" />
    </div>

  </div>
</section>
</>
</>

};

export default Home;