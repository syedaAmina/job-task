import React from 'react';
import './Chat.css';
import dr from '../../../../assests/img/dr.jpg';
import dr1 from '../../../../assests/img/dr1.png';
import girl2 from '../../../../assests/img/girl2.jpg';
import girl from '../../../../assests/img/girl.png';
import people2 from '../../../../assests/img/people2.jpg';
import people3 from '../../../../assests/img/people3.jpg';
import people4 from '../../../../assests/img/people4.png';
import people5 from '../../../../assests/img/people5.png';
import people1 from '../../../../assests/img/people1.png';
const Chat = () => {
    return (
      <section className='fullChat'>
          <div className='chatLeft ml-10 mt-4 '>
          <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src={people1} alt='lost' />
  </div>
</div>
<div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src={people2} alt='lost' />
  </div>
</div>
          <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src={people3} alt='lost' />
  </div>
</div>
<div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src={dr} alt='lost' />
  </div>
</div>
          <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src={people4} alt='lost' />
  </div>
</div>
<div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src={people5} alt='lost' />
  </div>
</div>
            </div>

            <div className='chatMiddle ml-10 mt-4 '>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={girl2} alt='lost'/>
    </div>
  </div>
  <div className="chat-header">
    SyedZadi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble bg-cyan-700">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={people2} alt='lost'/>
    </div>
  </div>
  <div className="chat-header">
    Ishaya
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble bg-cyan-700">Thank you!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={girl2} alt='lost'/>
    </div>
  </div>
  <div className="chat-header">
    SyedZadi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble bg-cyan-700">Hope, You'll come tomorrow.</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={people2} alt='lost'/>
    </div>
  </div>
  <div className="chat-header">
    Ishaya
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble bg-cyan-700">Yeah. See you than.</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={girl2} alt='lost'/>
    </div>
  </div>
  <div className="chat-header">
    SyedZadi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble bg-cyan-700">Okay. Thank You!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={people2} alt='lost'/>
    </div>
  </div>
  <div className="chat-header">
    Ishaya
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble bg-cyan-700">MY Pleasure!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>




<div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="kbd">q</kbd>
  <kbd className="kbd">w</kbd>
  <kbd className="kbd">e</kbd>
  <kbd className="kbd">r</kbd>
  <kbd className="kbd">t</kbd>
  <kbd className="kbd">y</kbd>
  <kbd className="kbd">u</kbd>
  <kbd className="kbd">i</kbd>
  <kbd className="kbd">o</kbd>
  <kbd className="kbd">p</kbd>
</div> 
<div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="kbd">a</kbd>
  <kbd className="kbd">s</kbd>
  <kbd className="kbd">d</kbd>
  <kbd className="kbd">f</kbd>
  <kbd className="kbd">g</kbd>
  <kbd className="kbd">h</kbd>
  <kbd className="kbd">j</kbd>
  <kbd className="kbd">k</kbd>
  <kbd className="kbd">l</kbd>
</div> 
<div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="kbd">z</kbd>
  <kbd className="kbd">x</kbd>
  <kbd className="kbd">c</kbd>
  <kbd className="kbd">v</kbd>
  <kbd className="kbd">b</kbd>
  <kbd className="kbd">n</kbd>
  <kbd className="kbd">m</kbd>
  <kbd className="kbd">/</kbd>
</div>

            </div>


            <div className='chatRight ml-20 mt-4'>
            <div className="flex  justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Friends</a>
        </div>
      </div>
      <div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={dr1} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Dr. Kates</h6>
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
<h6 className='mt-2 text-sm font-bold'>Jonas Alaina</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people4} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Niyehin</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people5} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Shayunghi choi</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={dr} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Dr. Robrt Marinhu</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={dr1} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Dr. Istiyak Ahmed</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={girl} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Shayla Mimi</h6>
         </div>
<div className= 'space-y-4 space-x-2 flex mt-4 ml-6'>
    <div className="avatar">
   <div className="w-10  mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
    <img src={people1} alt='lost'/>
  </div>
</div>
<h6 className='mt-2 text-sm font-bold'>Adam Smith</h6>
         </div>

            </div>
      </section>
    );
};

export default Chat;