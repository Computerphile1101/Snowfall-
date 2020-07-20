 
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	
	
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;



function snowFallBegin(){
  
  var sp = document.getElementById('snowAmount').value;
 
	var particles = [];
	for(var i = 0; i < sp; i++)
	{
    
    
		particles.push({
			x: Math.random()*W, 
			y: Math.random()*H, 
			r: Math.random()*4+2,
			d: Math.random()*sp 
		})  
	}

  
  
	function draw()
	{
		c.clearRect(0, 0, W, H);

    var sp = document.getElementById('snowAmount').value;
	  
    
    
		c.fillStyle = "rgba(255, 255, 255, 0.8)";
		c.beginPath();
		for(var i = 0; i < sp; i++)
		{
			var p = particles[i];
			c.moveTo(p.x, p.y);
			c.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		c.fill();
		update();
	}
  
  
  
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < sp; i++)
		{
			var p = particles[i];
			
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) 
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					
					if(Math.sin(angle) > 0)
					{
						
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	

	setInterval(draw, 30);
}

snowFallBegin();
