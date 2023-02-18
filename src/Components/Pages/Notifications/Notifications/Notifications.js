import React from 'react';
import './Notifications.css'
import girl2 from '../../../../assests/img/girl2.jpg';
import bg from '../../../../assests/img/bg.jpg';
import fitness from '../../../../assests/img/fitness.png';

import { Event, Feedback, Group,  HelpRounded, Logout, Pages,  PrivacyTip,  Settings,  SupportRounded, } from '@mui/icons-material';

const Notifications = () => {
    return (
   
  <section className='flex'>
<div className='sidebarleft'>        
     <div className='myProfile space-x-6 flex mt-4'>
      <div className="avatar">
        <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
        <img src={girl2} alt='lost'/>
  </div>
</div>
    <h6 className='mt-4 mx-auto text-sm font-bold'>SyedZadi</h6>
         </div>

         <div>
        
         <div  className='flex space-x-2  ml-10 mt-4'>
            <Pages/>
            <h5 className='text-sm font-bold'>Pages</h5>
         </div>
        
         <div  className='flex space-x-2 ml-10 mt-2'>
            <Group/>
            <h5 className='text-sm font-bold'>Group</h5>
         </div>
            <div  className='flex space-x-2 ml-10 mt-2'>
            <Event/>
            <h5 className='text-sm font-bold'>Event</h5>
         </div>
         <div  className='flex space-x-2 ml-10 mt-2'>
            <Feedback/>
            <h5 className='text-sm font-bold'>Feedback</h5>
         </div>
         <div  className='flex space-x-2 ml-10 mt-2'>
            <HelpRounded/>
            <h5 className='text-sm font-bold'>Help</h5>
         </div>
         <div  className='flex space-x-2 ml-10 mt-2'>
            <SupportRounded/>
            <h5 className='text-sm font-bold'>Support</h5>
         </div>
         <div  className='flex space-x-2 ml-10 mt-2'>
            <PrivacyTip/>
            <h5 className='text-sm font-bold'>Privacy</h5>
         </div>
         <div  className='flex space-x-2 ml-10 mt-2'>
            <Settings/>
            <h5 className='text-sm font-bold'>Settings</h5>
         </div>
         <div  className='flex space-x-2 ml-10 mt-2'>
            <Logout/>
            <h5 className='text-sm font-bold'>Logout</h5>
         </div>
         </div>
    </div>

<div className='middleBar ml-10 mt-4'>  
<div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Recent Notificatons</a>
        </div>
      </div>

      <div className='flex'>
      <div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-lg">All</a>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-lg">Unread</a>
        </div>
      </div>

      </div>
     <div className='space-y-2 mb-8'>
     <div className="alert w-64 shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>12 unread messages. Tap to see.</span>
  </div>
</div>
<div className="mt-4 space-y-2 mb-8 alert w-64 shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>Your password has been successfully changed.</span>
  </div>
</div>
     <div className="alert w-64  shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>Thank you for booking a meeting with us.</span>
  </div>
</div>
<div className="mt-4 space-y-2 w-64  mb-8 alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>Great news! We are launching our 5th fund: DLE Senior Living.</span>
  </div>
</div>
     <div className="alert w-64  shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>12 unread messages. Tap to see.</span>
  </div>
</div>
<div className="mt-4 space-y-2 w-64  mb-8 alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>12 unread messages. Tap to see.</span>
  </div>
</div>
     </div>

</div>

<div className='rightbar ml-10 mr-10'>
<div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Adds</a>
        </div>
      </div>
<div className="card mb-8 w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={bg}alt="lost" /></figure>
  <div className="card-body">
    <h2 className="card-title">50% DISCOUNTS</h2>
    <p>We were founded in 2002 as a family-owned and operated business specialising in supplying high-quality gym equipment at great prices.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">join Now</button>
    </div>
  </div>
</div>
<div className="card mb-8 w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={fitness}alt="lost" /></figure>
  <div className="card-body">
    <h2 className="card-title">30% DISCOUNTS</h2>
    <p>Fueled by the belief that everybody deserves a fit and healthy lifestyle, we provide easy access to an extensive range of home gym and commercial fitness solutions, helping thousands of people live longer, happier, healthier lives</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">join Now</button>
    </div>
  </div>
</div>
</div>
</section>    

     
    );
};

export default Notifications;