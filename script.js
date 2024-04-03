//to get the data

let users=[
    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location:"Delhi,India",
        name: "Susmita",
        age: 23,
        insterests: [{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-sketching"></i>`,
            interest:"Sketching"
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima consequatur necessitatibus incidunt? Tenetur, architecto.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:3,
        location:"Bihar,India",
        name: "Shivangi",
        age: 31,
        insterests: [{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-football-fill"></i>`,
            interest:"Football"
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima consequatur necessitatibus incidunt? Tenetur, architecto.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1560365163-3e8d64e762ef?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:8,
        location:"kolkata,India",
        name: "Ishita",
        age: 33,
        insterests: [{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-camera-fill"></i>`,
            interest:"Photography"
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima consequatur necessitatibus incidunt? Tenetur, architecto.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:1,
        location:"Sikkim,India",
        name: "Sean",
        age: 28,
        insterests: [{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-javascript-fill"></i>`,
            interest:"Coding"
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima consequatur necessitatibus incidunt? Tenetur, architecto.",
        isFriend: null
    }
]

function select(elem){
    return document.querySelector(elem)
}


//setting up the current index value of users array as 0.
let curr=0;

//setting up the animation value as false so that on the time of animation
//no extra animation occurrs.
let isAnimating=false;

//Function to Fill-up the user property.
function setdata(index){
    select(".prflimg img").src=users[index].profilePic;
   select(".badge h5").textContent=users[index].pendingMessage;
   select(".location h3").textContent=users[index].location;
   select(".name h1:nth-child(1)").textContent=users[index].name;
   select(".name h1:nth-child(2)").textContent=users[index].age;

    var clutter="";
    users[index].insterests.forEach(function(interest){
        clutter+=`<div class="tag flex items-center bg-white/30 px-2 py-0.5 rounded-full gap-1">
        ${interest.icon}<h3 class="text-rg tracking-tighter capitalize">${interest.interest}</h3>
    </div>`
    });
    select(".tags").innerHTML=clutter;
    select(".bio p").textContent=users[index].bio;
}


//setting the initial display[maincard & incomingcard].
(function setinitial(){
   select(".maincard img").src=users[curr].displayPic;
   select(".incomingcard img").src=users[curr+1]?.displayPic;

   //calling the setdata to put the current state[cur=0] data.
   setdata(curr);

    // setting curr=2,so that when another request will come it will start,
    //from next image[incomingcard].
    curr=2
})();


//image changing function to change the img on getting response from cross.
function imagechange(){
    if(!isAnimating){
        isAnimating=true;
        let t1=gsap.timeline({
            onComplete: function(){
                isAnimating=false;
                let main=select(".maincard");
                let incoming=select(".incomingcard");
        
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
        
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                if(curr===users.length) curr=0;
                select(".maincard img").src=users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
           });
           t1.to(".maincard",{
            scale:1.1,
            opacity: 0,
            ease: Circ,
           duration: .9
          },"a")
          .from(".incomingcard",{
           scale: .9,
           opacity: 0,
           ease: Circ,
           duration:1.1
          },"a")
    }
};


//requiring the element of cross and accept.
let deny=select(".deny");
let accept=select(".accept");

deny.addEventListener("click",()=>{
    imagechange();
    setdata(curr-1)
    //on clicking the cross the button ,all text under ".details" will be animate.
    gsap.from(".details .ani",{
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});
accept.addEventListener("click",()=>{
    imagechange();
    setdata(curr-1)
    //on clicking the cross the button ,all text under ".details" will be animate.
    gsap.from(".details .ani",{
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});


//Extracting all elements where class name mentioned as ".ani",
//Then creating Divs,into which I am appending the elem also can as ".ani".
//After then I am appending the each new Divs inside ".details" named Div.
(function containerCretor(){
    let elements=document.querySelectorAll(".ani");
    elements.forEach((elem)=>{
        let div=document.createElement("div");
        div.classList.add(`${elem.classList[1]}container`, 'overflow-hidden');
        div.appendChild(elem);
        select(".details").appendChild(div);
    })
})();

