var canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var turn = 0;

var img = new Image();
img.src = "maru.png";

var img_2 = new Image();
img_2.src = "batsu.png";

var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var a7=0;
var a8=0;
var a9=0;


function fillRect(ctx, x, y, w, h){
      ctx.fillStyle = "skyblue",
      ctx.fillRect(x, y, w, h)
}

function drawImage(imgTemp, a,b,c,d){
      ctx.drawImage(imgTemp, a, b, c, d) 
}

var move =function player(z){
   
   var x = event.screenX;
   var y = event.screenY; 

   var imgTemp;

   if(turn%2==0){
      imgTemp = img
     } else {
      imgTemp = img_2
     }

      if((x<160 && y<257) && (a1==0)){
           ctx.drawImage(imgTemp, 8, 8, 145, 140)
           turn+=1;
           a1=turn%2+1;
       }else if((x>170 && x<325 && y<257) && (a2==0)){
           ctx.drawImage(imgTemp, 175, 8, 145, 140)
           turn+=1;
           a2=turn%2+1;
       }else if((x>355 && x<490 && y<257) && (a3==0)){
           ctx.drawImage(imgTemp, 338, 8, 145, 140)
           turn+=1;
           a3=turn%2+1;
       }else if((x<165 && y>175 && y<420) && (a4==0)){
           ctx.drawImage(imgTemp, 5, 175, 145, 140)
           turn+=1;
           a4=turn%2+1;
       }else if((x>165 && x<325 && y>175 && y<420) && (a5==0)){
           ctx.drawImage(imgTemp, 170, 175, 145, 140)
           turn+=1;
           a5=turn%2+1;
       }else if((x>355 && x<490 && y>175 && y<420) && (a6==0)){
           ctx.drawImage(imgTemp, 335, 175, 145, 140)
           turn+=1;
           a6=turn%2+1;
       }else if((x<165 && y>440 && y<588) && (a7==0)){ 
           ctx.drawImage(imgTemp, 5, 335, 145, 140)
           turn+=1;
           a7=turn%2+1;
       }else if((x>165 && x<325 && y>440 && y<588) && (a8==0)){
            ctx.drawImage(imgTemp, 170, 335, 145, 140)
            turn+=1;
            a8=turn%2+1;
        }else if((x>355 && x<490 &&  y>440 && y<588) && (a9==0)){
            ctx.drawImage(imgTemp, 335, 335, 145, 140) 
            turn+=1;
            a9=turn%2+1; 
       }
       
        if((a1>0 && a2>0 && a3>0) && (a1==a2 && a2==a3)){
           alert("Win!")
          // window.location.reload();
        }else if((a4>0 && a5>0 && a6>0) && (a4==a5 && a5==a6)){
           alert("Win!")
            window.location.reload();
        }else if ((a7>0 && a8>0 && a9>0) && (a7==a8 && a8==a9)){
           alert("Win!")
           window.location.reload();
        }else if((a1>0 && a4>0 && a7>0) && (a1==a4 && a4==a7)){
           alert("Win!")
           window.location.reload();
        }else if((a2>0 && a5>0 && a8>0) && (a2==a5 && a5==a8)){
            alert("Win!")
            window.location.reload();
        }else if((a3>0 && a6>0 && a9>0) && (a3==a6 && a6==a9)){
            alert("Win!")
            window.location.reload();
        }else if((a1>0 && a5>0 && a9>0) && (a1==a5 && a5==a9)){
            alert("Win!")
            window.location.reload();
        }else if((a3>0 && a5>0 && a7>0) && (a3==a5 && a5==a7)){
            alert("Win!")
            window.location.reload();
        }else if (a1>0 && a2>0 && a3>0 && a4>0 && a5>0 && a6>0 && a7>0 && a8>0 && a9>0){
            alert("draw");
            window.location.reload();
        }
      return;
}

fillRect(ctx, 5, 5, 150, 150);
fillRect(ctx, 170, 5, 150, 150);
fillRect(ctx, 335, 5, 150, 150);
fillRect(ctx, 5, 170, 150, 150);
fillRect(ctx, 170, 170, 150, 150);
fillRect(ctx, 335, 170, 150, 150);
fillRect(ctx, 5, 335, 150, 150);
fillRect(ctx, 170, 335, 150, 150);
fillRect(ctx, 335, 335, 150, 150);


canvas.addEventListener('click', move, false);

