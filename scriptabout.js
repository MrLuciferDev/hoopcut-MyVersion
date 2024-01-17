const team= [
    {name:"Guntass Singh Barsal",role:"Chief Marketing Officer",about:"Handling product management as Product lead at thedebatingsociety.Chief Advisor for conferences pan India.Interned at TATA as a Data Analyst.Young Entrepreneurual school-winner for a innovative protoype.Revenue Cycle Analyst for events in tricity",contact:"MAIL: guntass@hoopcut.com || PHONE: +917347541031"},
    {name:"Ayaan Hooda",role:"Chief Executive Officer",about:"Worked with Managing Social Media accounts, Ad Creatives and Landing page design and optimisation at VYRAL24.Worked as a Product Designer at Codeshod. Have freelance experience of working with various national and international clients in multiple fields like Branding,  Product Design, Web Design, Social Media Creatives, Video Editing and Copywriting.",contact:"MAIL: ayaan@hoopcut.com || PHONE: +919988822840"},
    
];

const cursor=document.querySelector('.cursor');
const cursorIcon=cursor.querySelector('i');

const cursorWidth=cursor.offsetWidth/2;
const cursorHeight=cursor.offsetHeight/2;

let currentSlide=1;
const totalSlides=2;
const updateCursorClass=(xPosition)=>{
    const halfPageWidth=window.innerWidth/2;
    if(xPosition>halfPageWidth){
        if(currentSlide<totalSlides){ 
            cursorIcon.classList.remove('fa-arrow-left');
            cursorIcon.classList.add('fa-arrow-right');
            cursor.style.display='';
        } else{
            cursor.style.display='none';
        }
    } else {
        if(currentSlide>1){
            cursorIcon.classList.remove('fa-arrow-right');
            cursorIcon.classList.add('fa-arrow-left');
            cursor.style.display='';
        } else{
            cursor.style.display='none';
        }
        }
    }

    document.addEventListener('mousemove',(e)=>{
        gsap.to(cursor,{
            x:e.clientX-cursorWidth,
            y:e.clientY-cursorHeight,
            duration:1,
            ease:"power3.out"
        });
        updateCursorClass(e.clientX);
    });


    const updateInfo=(slideNumber)=>{
        const member=team[slideNumber-1];
        document.querySelector('.info .name').textContent=member.name;
        document.querySelector('.info .role').textContent=member.role;
        document.querySelector('.info .about').textContent=member.about;
        document.querySelector('.info .contact').textContent=member.contact;
    };

    const animateSlide=(slideNumber,reveal)=>{
        const marquee=document.querySelector(`.t-${slideNumber}.marquee-wrapper`);
        const img=document.getElementById(`t-${slideNumber}`);
        const clipPathValue=reveal?'polygon(0% 100%,100% 100%,100% 0%,0% 0%)':'polygon(0% 100%,100% 100%,100% 100%,0% 100%)';
        gsap.to (marquee,{ clipPath:clipPathValue,duration:1,ease:"power4.out", delay:0.3});
        gsap.to (img,{ clipPath:clipPathValue,duration:1,ease:"power4.out",});
    };
    
    updateInfo(2);
    

    const handleRightClick=()=>{
        if(currentSlide<totalSlides){
            animateSlide(currentSlide+1,true);
            currentSlide++;
            updateInfo(currentSlide);
        }
    }
    const handleLeftClick=()=>{
        if(currentSlide>1){
            animateSlide(currentSlide,false);
            currentSlide--;
            updateInfo(currentSlide);
        }
    }

    document.addEventListener('click',(e)=>{
        const halfPageWidth=window.innerWidth/2;
        if(e.clientX>halfPageWidth){
            handleRightClick();
        }else{
            handleLeftClick();
        }
    })




    function startLoader()
    {
      let counterElement = document.querySelector(".counter");
      let currentValue=0;
    
      function updateCounter()
      {
        if(currentValue==100)
        {
          return;
        }
        currentValue= currentValue + (Math.floor(Math.random()*10)+1);
        if(currentValue>100)
        {
          currentValue=100;
        }
        counterElement.textContent = currentValue;
        let delay = Math.floor(Math.random()*200)+50;
        setTimeout(updateCounter,delay);
      }
      updateCounter();
    }
    
    startLoader();
    
    gsap.to(".counter",0.25,{
      delay:3.5,
      opacity:0,
    });
    gsap.to(".loader h1",0.25,{
        delay:3.5,
        opacity:0,
      });
    
    gsap.to(".bar",1.5,{
         delay: 3.5,
         height:0,
         stagger:{
         amount: 0.5,
    },
    ease: "power4.inOut",
    });
