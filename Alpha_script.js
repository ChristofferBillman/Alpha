var v = 1
async function SmoothGradientAngle() {
if (v > 359) {
    v = v-358;
} else {
   for(v = 1; v > 0; v++) {
        $(".logoBorder").css({
             "border-image": "linear-gradient("+v+"deg,#AB00FF, #00ABFF) 1"
        });
        await sleep(50);
    }
    
}
}

var i = 1
async function ThingsButtonsGradientOn() {
if (i > 359) {
    i = i-358;
} else {
   for(i = 1; v > 0; i++) {
        $("#thingsButtons").css({
             "border-image": "linear-gradient("+i+"deg,#AB00FF, #00ABFF) 1"
        });
        await sleep(50);
    }
    
}
}

SmoothGradientAngle();

function ThingsButtonsGradientOff() {
    $("#thingsButtons").css({
          "border-image": " ;"
      });
$("#thingsButtons").css({
          "border-color": "#00ABFF"
      });
}


 
// STOLEN FROM OVERSTACKED
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





