import React from 'react';
import './Newsfeed.css';
import '../../Home/Home/Home.css';
import girl2 from '../../../../assests/img/girl2.jpg';
import people1 from '../../../../assests/img/people1.png';
import tech from '../../../../assests/img/tech.jpg';
import ai from '../../../../assests/img/Ai.jpg';

import { Event, Feedback, Group,  HelpRounded, Logout, ModeComment, Pages,  PrivacyTip,  Settings, Share,  SupportRounded, ThumbUp ,} from '@mui/icons-material';
const Newsfeed = () => {
    return (
        <section className='fullNewsfeeed'>
    <div className='flex ml-8'> 
            
    <div className='newsfeedLeft'>       
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

    <div className='newsfeedMiddle '>

    <div>
 <div className="card ml-10 w-96 bg-base-100 ">
  <div className="card-body">  
  <div className='flex space-y-4 space-x-4 mt-2'>
         <div className="avatar">
  <div className="w-8 mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={people1} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Adam Smith</h6>
         </div>
    <p>Measure your developer skills just in 1 minute!
Findy Global is a job matching platform specializes in analyzing your developer skills based on the development history on GitHub.
Get offers from Japanese tech-companies that match your skills!</p>
<img src={tech} alt='lost'/>
<ul className='flex space-x-12 border rounded'>
    <li><ThumbUp/> Like</li>
    <li><ModeComment/>Comment</li>
    <li><Share/>Share</li>
</ul>
  </div>
</div>
 </div>

        
</div>
<div className='newsfeedRight'>
<div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Sponsored</a>
        </div>
      </div>
{/* sponsored  */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={ai} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p className='text-sm'>The Computer Professionals Program has been running for 25 years and is the 2nd largest Master’s in Computer Science Program in the USA.  We encourage enrollment of US and international students.
</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline g-cyan-500 hover:bg-cyan-600">Apply</div> 
    </div>
  </div>
</div>


          </div>
    </div>
 
          



        </section>
    );
};

export default Newsfeed;
