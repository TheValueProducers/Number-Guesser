let input = document.querySelector("#input");
let click = document.querySelector("button");
let comment = document.querySelector("p");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let win_tag = document.querySelector(".win");
let section = document.querySelector("section");
let random_number = Math.floor(Math.random() * 101);
let count = 10;

    
    click.addEventListener("click", function(){
        console.log(count);
        if (input.value === ""){
            comment.innerText = "Please Enter A Number..."
        }
        else if (input.value > random_number){
            comment.innerText = "Guess lower";
            minus.style.transform = "scale(3)"
            minus.style.transitionDuration = "1s";

            setTimeout(() => {
                minus.style.transform = "scale(1)"
            }, 400)
            
        }else if (input.value < random_number){
            comment.innerText = "Guess higher";
            plus.style.transform = "scale(3)"
            plus.style.transitionDuration = "1s";

            setTimeout(() => {
                plus.style.transform = "scale(1)";
            }, 400)
        }else if(input.value == random_number){
            comment.innerText = "Correct"
            document.body.style.backgroundImage = "url(19406367.jpg)";
            win_tag.style.backgroundColor = "yellow";
            win_tag.style.visibility = "visible";
            win_tag.style.transform = "scale(7)";
            
        }
        
        count -= 1;
        if (count < 0){
            comment.innerText = "Game Over"

        }
    })