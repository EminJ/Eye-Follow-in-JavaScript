var eyes = document.getElementsByClassName('eyealt');
		var eye = document.getElementById("eye");
		console.log(eyes);
		document.onmousemove=function(){
			var x=event.clientX*50/window.innerWidth+"%";
			var y=event.clientY*50/window.innerHeight+"%";
    		for (let i = 0; i < 2; i++) {
				eyes[i].style.marginTop = y;
				eyes[i].style.marginLeft = x;
				if(parseInt(y)>=46){
					eye.style.backgroundColor="red";
				}
				else{
					eye.style.backgroundColor="white";
				}
				console.log(y)
			}
		}