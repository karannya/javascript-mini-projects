let songProgressBar=document.getElementById('songProgressBar')
let audioElement=new Audio('songs/1.mp3')
let songIndex=0;
let masterPlay = document.getElementById('masterPlay');
let mastersSongName=document.getElementById('mastersSongName')
let songItem = Array.from(document.getElementsByClassName('song-item'));
let songs=[
{songName:'music1',filepath:'songs/1.jpg',coverpath:'covers/1.jpg'},
{songName:'music2',filepath:'songs/2.jpg',coverpath:'covers/2.jpg'},
{songName:'music3',filepath:'songs/3.jpg',coverpath:'covers/3.jpg'},
{songName:'music4',filepath:'songs/4.jpg',coverpath:'covers/4.jpg'},
{songName:'music5',filepath:'songs/5.jpg',coverpath:'covers/5.jpg'},
{songName:'music6',filepath:'songs/6.jpg',coverpath:'covers/6.jpg'},
{songName:'music7',filepath:'songs/7.jpg',coverpath:'covers/7.jpg'},
{songName:'music8',filepath:'songs/8.jpg',coverpath:'covers/8.jpg'},
{songName:'music9',filepath:'songs/9.jpg',coverpath:'covers/9.jpg'},
{songName:'music10',filepath:'songs/10.jpg',coverpath:'covers/10.jpg'}
]
songItem.forEach((ele,i)=>{
    ele.getElementsByTagName('img')[0].src=songs[i].coverpath
    ele.getElementsByClassName('song-name')[0].innerText=songs[i].songName
})
//play pause click

//Listen to events
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
     songProgressBar.value=progress
})
songProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=songProgressBar.value * audioElement.duration/100
})

 const makeAllplay=()=>{ 
    Array.from(document.getElementsByClassName('song-item-play')).forEach((ele)=>{
        ele.classList.remove('fa-pause-circle-o')
        ele.classList.add('fa-play-circle-o')
    }) 

}
Array.from(document.getElementsByClassName('song-item-play')).forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        makeAllplay()
        songIndex=parseInt(e.target.id)
        mastersSongName.innerText=songs[songIndex].songName
        e.target.classList.remove('fa-play-circle-o')
        e.target.classList.add('fa-pause-circle-o')
        audioElement.src=`songs/${songIndex}.mp3`
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
}
)

document.getElementById('next').addEventListener('click',()=>{
   if (songIndex>9){
    songIndex=0
   }
    else{
    songIndex=songIndex+1
   }
   mastersSongName.innerText=songs[songIndex].songName
   audioElement.src=`songs/${songIndex}.mp3`
   audioElement.currentTime=0
   audioElement.play()
   masterPlay.classList.remove('fa-play');
   masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0){
     songIndex=0
    }
     else{
     songIndex=songIndex-1
    }
    mastersSongName.innerText=songs[songIndex].songName
    audioElement.src=`songs/${songIndex}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
 })

