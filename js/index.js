window.onload=function(){
// 选项卡
	let list=document.querySelectorAll('.list li');
	let right =document.querySelectorAll('.xia ul.right');
	// console.dir(right.length);
	list.forEach(function(value,index){
		value.onmouseover=function(){
			console.log(1);
			list.forEach(function(a,b){
				a.classList.remove('active');
				right[b].classList.remove('active');
			})
			this.classList.add('active');
			right[index].classList.add('active');
		}
	})

// banner
	let n=0;
	let banner=document.querySelectorAll('.banner_top .list');
	let banner_t=document.querySelector('.banner_top');
	let left=document.querySelector('.banner_top .left');
	let right1=document.querySelector('.banner_top .right');
	let d=document.querySelectorAll('.banner_top .dian .d');
	function move(){
		n++;
		if(n>=banner.length){n=0;}
		banner.forEach(function(val,index){
			val.classList.remove('move');
			d[index].classList.remove('active');
		})
		banner[n].classList.add('move');
		d[n].classList.add('active');
	}
	let t=setInterval(move,2000);
	banner_t.onmouseover=function(){
		clearInterval(t);
	}
	banner_t.onmouseout=function(){
		t=setInterval(move,2000);
	}
	right1.onclick=function(){
		move();
	}
	left.onclick=function(){
		n--;
		if(n<0){n=banner.length-1;}
		banner.forEach(function(val){
			val.classList.remove('move');
		})
		banner[n].classList.add('move');
	}
	d.forEach(function(value,index){
		value.onclick=function(){
			d.forEach(function(a,b){
				a.classList.remove('active');
				banner[b].classList.remove('move');
			})
			this.classList.add('active');
			banner[index].classList.add('move');
			n=index;
		}
	})
	
	
//单品banner
	let box=document.querySelectorAll('.dan_bd .box1');
	let boxx=document.querySelector('.recommend .box1');
	let b=document.querySelector('.dan .container');
	let a=document.querySelectorAll('.more a');
	let z=document.querySelector('.more .a');
	let c=document.querySelector('.more .b');
	let box_big=document.querySelector('.dan_bd');
	let now1=0;
	let next1=0;
	let w=parseInt(getComputedStyle(box_big,null).width);
	function dong(){
		next1=now1+1;
		if(next1>=box.length-1){next1=0}
		box[next1].style.left="100%";
		animate(box[now1],{left:-w}, 1000);
		animate(box[next1],{left:0}, 1000,function(){}); 
		a[now1].classList.remove('active');
		a[next1].classList.add('active');
		now1=next1;
		// flagv=true;
	}
	// boxx.style.left=0;
	let m=setInterval(dong,3000);
	b.onmouseover=function(){
		clearInterval(m);
	}
	b.onmouseout=function(){
		m=setInterval(dong,2000);
	}
	let flagd=true;
	let flagv=true;

	c.onclick=function(){
		if(!flagd){return;}
		
		flagd=false;
		dong();
		flagv=true;
	}
	z.onclick=function(){
		if(!flagv){return;}
		flagv=false;
		next1=now1-1;
		if(next1<0){next1=box.length-2}
		box[next1].style.left="-100%";
		animate(box[now1],{left:w}, 1000);
		animate(box[next1],{left:0}, 1000);
		a[now1].classList.remove('active');
		a[next1].classList.add('active');
		now1=next1;
	}

// 图书
	let box_b=document.querySelectorAll('.box .t1');
	// function fz(box_b){
	// 	let tushu=box_b.querySelectorAll('.xm ul li');
	// 	let left_1=box_b.querySelector('.xm ul .left');
	// 	let right_1=box_b.querySelector('.xm ul .right');
	// 	let dian=box_b.querySelectorAll('.many .dian .dd');
	// 	let dn=0;
	// 	function move2(){
	// 		dn++;
	// 		if(dn>=tushu.length){dn=0;}
	// 		tushu.forEach(function(val,index){
	// 			val.classList.remove('appear');
	// 			dian[index].classList.remove('dot');
	// 		})
	// 		tushu[dn].classList.add('appear');
	// 		dian[dn].classList.add('dot');
	// 	}
	// 	let dt=setInterval(move2,2000);
	// 	banner_t.onmouseover=function(){
	// 		clearInterval(dt);
	// 	}
	// 	banner_t.onmouseout=function(){
	// 		dt=setInterval(move2,2000);
	// 	}
	// 	right_1.onclick=function(){
	// 		move2();
	// 	}
	// 	left_1.onclick=function(){
	// 		dn--;
	// 		if(dn<0){dn=tushu.length-1;}
	// 		tushu.forEach(function(val){
	// 			val.classList.remove('appear');
	// 		})
	// 		tushu[dn].classList.add('appear');
	// 	}
	// 	dian.forEach(function(value,index){
	// 		value.onclick=function(){
	// 			dian.forEach(function(a,b){
	// 				a.classList.remove('dot');
	// 				tushu[b].classList.remove('appear');
	// 			})
	// 			this.classList.add('dot');
	// 			tushu[index].classList.add('appear');
	// 			dn=index;
	// 		}
	// 	})
	// }
	function fz(box_b){
		let tushu=box_b.querySelectorAll('.xm ul li');//img
		let left=box_b.querySelector('.xm ul .left');
		let right=box_b.querySelector('.xm ul .right');
		let dian=box_b.querySelectorAll('.many .dian .dd');//点
		let now=0;
		let next=0;
		let width=parseInt(getComputedStyle(box_b,null).width);
		function move(){
			next=now+1;
			if(next>=tushu.length){next=0;}
			tushu[next].style.left="100%";
			animate(tushu[now],{left:-width},1000);
			animate(tushu[next],{left:0}, 1000);
			dian[now].classList.remove('dot');
			dian[next].classList.add('dot');
			now=next;
		}
		// let t=setInterval(move,2000);
		// box_b.onmouseenter=function(){
		// 	clearInterval(t);
		// }
		// box_b.onmouseleave=function(){
		// 	t=setInterval(move,2000);
		// }
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			next=now-1;
			if(next<0){next=tushu.length-1;}
			tushu[next].style.left="-100%";
			animate(tushu[now],{left:width},1000);
			animate(tushu[next],{left:0}, 1000);
			dian[now].classList.remove('dot');
			dian[next].classList.add('dot');
			now=next;
		}
		for(let i=0;i<dian.length;i++){
			dian[i].onclick=function(){
				if(i>now){
					next=i;
					tushu[next].style.left="100%";
					animate(tushu[now],{left:-width},1000);
					animate(tushu[next],{left:0}, 1000);
					dian[now].classList.remove('dot');
					dian[next].classList.add('dot');
					now=next;
				}else if(i<now){
					next=i;
					tushu[next].style.left="-100%";
					animate(tushu[now],{left:width},1000);
					animate(tushu[next],{left:0}, 1000);
					dian[now].classList.remove('dot');
					dian[next].classList.add('dot');
					now=next;
				}
			}
		}
	}
	box_b.forEach(function(val,index){
		fz(val);
	})
	
	
// header
	let nav=document.querySelector('nav .nav');
	let navmenu=document.querySelector('nav .navmenu');
	nav.onmouseover=function(){
		animate(navmenu,{height:229,overflow:"none"},400)
	}
	nav.onmouseout=function(){
		animate(navmenu,{height:0,overflow:"hidden"},400)
	}
	let ho=document.querySelectorAll('nav .ho');
	let first=document.querySelectorAll('.navmenu .first');
 	ho.forEach(function(value,index){
 		value.onmouseover=function(){
 			first.forEach(function(v,i){
 				v.classList.remove('active');
 			})
 			value.style.color="#ff6700";
 			first[index].classList.add('active');
 		}
 		
 	})
	


}