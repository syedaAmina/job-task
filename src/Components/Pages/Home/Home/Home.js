import React from 'react';
import './Home.css';
import girl2 from '../../../../assests/img/girl2.jpg';
import dr from '../../../../assests/img/dr.jpg';
import dr1 from '../../../../assests/img/dr1.png';
import people1 from '../../../../assests/img/people1.png';
import people2 from '../../../../assests/img/people2.jpg';
import people3 from '../../../../assests/img/people3.jpg';
import people4 from '../../../../assests/img/people4.png';
import people5 from '../../../../assests/img/people5.png';
import tech from '../../../../assests/img/tech.jpg';
import phero from '../../../../assests/img/phero.jpg';
import ai from '../../../../assests/img/Ai.jpg';
import pro from '../../../../assests/img/pro.jpg';

import { Event, Feedback, Group,  HelpRounded, Logout, ModeComment, Pages,  PrivacyTip,  Settings, Share,  SupportRounded, ThumbUp ,} from '@mui/icons-material';

const Home = () => {
    return (
       <section className='fullHome'>
    <div className='sidebarLeft'>       
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

    <div className='middlePart ml-10'>

    <div className='ml-10 space-x-2'>
    <div className="avatar mt-4">
  <div className="w-10  ml-10 mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={girl2} alt='lost'/>
  </div>
</div>
<input type="text" placeholder="What's on Your mind,Syedzadi?" className="textarea-bordered w-64  mt-2 input rounded-full max-w-xs" />
  </div>

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

 {/* second section */}
 

 <div className="stats flex-row ml-10 w-112">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
</div>
    </div>
    <div className='rightBar'>
{/* suggestions */}
<div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Suggestions</a>
        </div>
      </div>
      {/* top communities */}
      <div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Top Communities</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </div>
      {/* community name */}
      <div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={phero} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Programming Hero</h6>
         </div>
      <div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={ai} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>AI Technology</h6>
         </div>
      <div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={pro} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Programming Bangladesh</h6>
         </div>
{/* friends 
 */}
<div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Suggested People</a>
        </div>
      </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={dr1} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Dr. Richardson</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people2} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Ishaya Tahsin</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people3} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Eric Jonas</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people4} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Ratela</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people5} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Miami Myunghi</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={dr} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Dr. James Peterson</h6>
         </div>

    </div>

        </section>
    );
};

export default Home;