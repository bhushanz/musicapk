let container = document.querySelector('.container');
let down = document.getElementById('arrow');
let down2 = document.getElementById('arrow2');
let songList =document.querySelector('.songlist');
let arrow = document.getElementById('row');
let playon = document.getElementById('mainPlay');
let songIndex = 0;
let progressbar = document.getElementById('progressbar');
let audioElement = new Audio();

let songs =[
    {songName: 'Song 1', filePath: 'filebro/1.mp3' ,coverPath: 'img/cover2.jpg'},
    {songName: 'Song 1', filePath: 'filebro/2.mp3' ,coverPath: 'img/cover2.jpg'},
    {songName: 'Song 1', filePath: 'filebro/3.mp3' ,coverPath: 'img/cover2.jpg'},
    {songName: 'Song 1', filePath: 'filebro/4.mp3' ,coverPath: 'img/cover2.jpg'},
    {songName: 'Song 1', filePath: 'filebro/5.mp3' ,coverPath: 'img/cover2.jpg'},,
    {songName: 'Song 1', filePath: 'filebro/6.mp3' ,coverPath: 'img/cover2.jpg'},
    {songName: 'Song 1', filePath: 'filebro/7.mp3' ,coverPath: 'img/cover2.jpg'},
    {songName: 'Song 1', filePath: 'filebro/8.mp3' ,coverPath: 'img/cover2.jpg'}
]



let flag=0;

down.addEventListener('click',function(){
    if(flag===0){
    container.style.height ='560px';
    container.style.weight ='100%';
    container.style.margin ='0';
    container.style.padding ='20px';
    container.style.position = 'relative';
    container.style.backgroundColor= "white";
    flag=1;
    }else{
        container.style.height ='180px';
        container.style.backgroundColor= "none";
        container.style.position = 'relative';
        flag=0;  
    }
});

// for songlist
down2.addEventListener('click',function(){
    if(flag===0){
        songList.style.height='500px';
    songList.style.overflow='scroll';
    flag=1;

    }else{
        songList.style.height='200px';
        songList.style.overflow='hidden';
        flag=0;
        
    }
});

// song play event
 playon.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        playon.classList.remove('ri-play-fill');
        playon.classList.add('ri-pause-fill');
    }
    else{
        audioElement.pause(); 
        playon.classList.add('ri-play-fill');
        playon.classList.remove('ri-pause-fill');
    }   
 })

//  handling progrss
audioElement.addEventListener('timeupdate',function(){
    progress= parseInt((audioElement.currentTime/audioElement.duration) *100);
    progressbar.value = progress;
});


progressbar.addEventListener('change',function(){
    audioElement.currentTime =progressbar.value *audioElement.duration/100;
    
});

 const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songiteamplay')).forEach((element)=>{
        element.classList.remove('ri-pause-fill');
        element.classList.add('ri-play-fill');
        })
 }
Array.from(document.getElementsByClassName('songiteamplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('ri-play-fill');
            e.target.classList.add('ri-pause-fill');
            audioElement.src= `filebro/${songIndex}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            playon.classList.remove('ri-play-fill');
            playon.classList.add('ri-pause-fill');

       
    })
});


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex =0;
    }else{
        songIndex +=1;
    }
    audioElement.src= `filebro/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playon.classList.remove('ri-play-fill');
    playon.classList.add('ri-pause-fill');
});



document.getElementById('privious').addEventListener('click', function(){
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -=1;
    }
    audioElement.src= `filebro/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playon.classList.remove('ri-play-fill');
        playon.classList.add('ri-pause-fill');
});

