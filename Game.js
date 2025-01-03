let Overall=document.querySelectorAll('.buttons .bt')
let op = document.querySelectorAll('.option .box img');
let Display=document.getElementById("user")
let opposite=document.getElementById("system")
const arr = [
    { id: "r", src: "rock.jpg" },
    { id: "p", src: "paper.jpg" },
    { id: "s", src: "scissors.jpg" }
];

Overall.forEach(function(event)
{
     event.addEventListener('click',Change)
})
function resetGame() {
    main.style.visibility = 'visible';
    Notification1.innerHTML = ''; // Clears Notification1
    Notification1.classList.remove("Popup");
    extra.innerHTML='';
    a = 0;
    b = 0;
    Display.innerHTML = ''; // Clears user image
    opposite.innerHTML = ''; // Clears system image
    final.textContent = '';
    score1.textContent = `Your Score: ${a}`;
    score2.textContent = `System Score: ${b}`;
}
op.forEach(function(event)
{
    event.addEventListener('click',Change)
})
let image=document.createElement("img")
let image1=document.createElement("img")
let final=document.querySelector('.result');
let score1=document.querySelector('.score .you')
let score2=document.querySelector('.score .opp')
let a=0;
let b=0;
let head1;
let p;
let para;
let main=document.querySelector('.container')
let submit=document.querySelector('.re')
let Notification1=document.querySelector('.FinalOutput')
let s1;

let extra=document.querySelector('.FinalOutput .emoji')
function Change(event)
{

    let Bid=event.target.id;
    op.forEach(function(img1)
{
    if(img1.id===Bid)
    {
        
        image.src=img1.src;
        Display.append(image);
    }
    let computer;
    if(image.src)
    {
        let n=Math.floor(Math.random()*op.length);
         computer=arr[n].id;
        image1.src=arr[n].src;
        opposite.append(image1);
    }
    if(Bid==computer)
    {
        final.textContent="Result : Its tie";
    }
     else if((Bid=='r' && computer=='s') ||( Bid=='p' && computer=='r') || (Bid=='s' && computer=='p'))
     {
        final.textContent="Result : You won";
        a++;
     }
     else
     {
        b++;
        final.textContent="Result : You Lost"
     } 
     score1.textContent=`Your Score: ${a}`;
     score2.textContent=`System Score: ${b}`;

     submit.addEventListener('click', function() {
        if (main.style.visibility !== 'hidden') {
            main.style.visibility = 'hidden';
    
            head1 = document.createElement('h1');
            p = document.createElement('img');
            para = document.createElement('p');
            s1 = document.createElement('button');
            s1.textContent = 'Okay';
            if (a > b) {
                head1.textContent = "Congratulation";
                p.src = "wiining.jpg";
                para.textContent = "You Have Won the Match, but unfortunately no one cares about you!!";
            } else {
                head1.textContent = "Oops";
                p.src = "l1.jpg";
                para.textContent = "shiiiiish !! You lost this game. Better luck next time!";
            }
            extra.append(p);
    
            Notification1.append(head1, extra, para, s1);
            Notification1.classList.add("Popup");
            s1.addEventListener('click', resetGame);
        }
    });
}
) 
}
