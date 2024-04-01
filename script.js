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
        profilePic: "https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1515077678510-ce3bdf418862?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:1,
        location:"Sikkim,India",
        name: "Sean kong",
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

var curr=0;
(function setinitial(){
   select(".maincard img").src=users[curr].displayPic;
   select(".incomingcard img").src=users[curr+1].displayPic;

   select(".prflimg img").src=users[curr].profilePic;
   select(".badge h5").textContent=users[curr].pendingMessage;
   select(".location h3").textContent=users[curr].location;
   select(".name h1:nth-child(1)").textContent=users[curr].name;
   select(".name h1:nth-child(2)").textContent=users[curr].age;

    var clutter="";
    users[curr].insterests.forEach(function(interest){
        clutter+=`<div class="tag flex items-center bg-white/30 px-2 py-0.5 rounded-full gap-1">
        <i class="ri-music-2-fill"></i>
        <h3 class="text-rg tracking-tighter capitalize">${interest}</h3>
    </div>`
    });
    select(".tags").innerHTML=clutter;

    curr=2
})();
