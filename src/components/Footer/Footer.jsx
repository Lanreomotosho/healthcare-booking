import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/lanreomotosho/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h5' />
  },
  {
    path: "https://github.com/Lanreomotosho/",
    icon: <AiFillGithub className='group-hover:text-white w-4 h5' />
  },
  {
    path: "https://web.facebook.com/olanrewaju.omotosho.12/",
    icon: <AiOutlineFacebook className='group-hover:text-white w-4 h5' />
  },
  {
    path: "https://www.instagram.com/lanre__omotosho/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h5' />
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: "home",
  },
  {
    path: '/',
    display: "About Us",
  },
  {
    path: '/Services',
    display: "Services",
  },
  {
    path: '/',
    display: "Blog",
  },
];

  const quickLinks02 = [
    {
      path: 'find-a-doctor/',
      display: "find-a-doctor",
    },
    {
      path: '/',
      display: "Request an Appointment",
    },
    {
      path: '/',
      display: "Find a Location",
    },
    {
      path: '/',
      display: "Get an Opinion",
    },
  ];


    const quickLinks03 = [
      {
        path: '/',
        display: "Donate",
      },
      {
        path: '/Contact',
        display: "Contact Us",
      },
  ];
  
  const Footer = () => {

    const year = new Date().getFullYear()

    return (
    <footer className='pb-16 pt-10'>
<div className='container'>
  <div className=' flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
    <div>
<img src={logo} alt="" />
<p className='text-[16px] leading-7 front-[400]'>Copyright {year} developed by Lanre Omotosho  all right reserved.
 </p>

 <div>
  {socialLinks.map((link, index) => <Link to={link.path}
  key={index}>
{link.icon}
  </Link>)}
 </div>
    </div>
  </div>
</div>
    </footer>

    );
  };

export default Footer;

