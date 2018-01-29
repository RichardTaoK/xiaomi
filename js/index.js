window.onload=function(){
// 选项卡
	let list=document.querySelectorAll('.list li');
	let right =document.querySelectorAll('.xia ul.right');
	// console.dir(right.length);
	list.forEach(function(value,index){
		value.onclick=function(){
			console.log(1);
			list.forEach(function(a,b){
				a.classList.remove('active');
				right[b].classList.remove('active');
			})
			this.classList.add('active');
			right[index].classList.add('active');
		}
	})

// 封装轮播
	// let k=0;
	// function kk(a,b){
	// 	if(a instanceof NodeList){
	// 		k++;
	// 		if(k>=a.length){k=0;}
	// 		a.forEach(function(val){
	// 			val.classList.remove(b);
	// 		})
	// 		a[k].classList.add(b);
	// 	}
	// 	return function(){kk(a,b);}
	// }
	// function dianji(a,b){
	// 	if(a instanceof NodeList){
	// 		k--;
	// 		if(k<0){k=a.length-1;}
	// 		a.forEach(function(val){
	// 			val.classList.remove(b);
	// 		})
	// 		a[k].classList.add(b);
	// 	}
	// }
//结束
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
	let b=document.querySelector('.dan .container');
	let a=document.querySelector('.more .a');
	let c=document.querySelector('.more .b');
	let i=0;
	function dong(){
		i++;
		if(i>=box.length){i=0;}
		box.forEach(function(val){
			val.classList.remove('xian');
		})
		box[i].classList.add('xian');
	}
	let m=setInterval(dong,2000);
	b.onmouseover=function(){
		clearInterval(m);
	}
	b.onmouseout=function(){
		m=setInterval(dong,2000);
	}
	c.onclick=function(){
		dong();
	}
	a.onclick=function(){
		i--;
		if(i<0){i=box.length-1;}
		box.forEach(function(val){
			val.classList.remove('xian');
		})
		box[i].classList.add('xian');
	}

// 图书
	let box_b=document.querySelectorAll('.box .t1');
	function fz(box_b){
		let tushu=box_b.querySelectorAll('.xm ul li');
		let left_1=box_b.querySelector('.xm ul .left');
		let right_1=box_b.querySelector('.xm ul .right');
		let dian=box_b.querySelectorAll('.many .dian .dd');


		let dn=0;
		function move2(){
			dn++;
		

			if(dn>=tushu.length){dn=0;}
			tushu.forEach(function(val,index){
				val.classList.remove('appear');
				dian[index].classList.remove('dot');

			})
			tushu[dn].classList.add('appear');
			dian[dn].classList.add('dot');
		}
		let dt=setInterval(move2,2000);
		banner_t.onmouseover=function(){
			clearInterval(dt);
		}
		banner_t.onmouseout=function(){
			dt=setInterval(move2,2000);
		}
		right_1.onclick=function(){
			move2();
		}
		left_1.onclick=function(){
			dn--;
			if(dn<0){dn=tushu.length-1;}
			tushu.forEach(function(val){
				val.classList.remove('appear');
			})
			tushu[dn].classList.add('appear');
		}
		dian.forEach(function(value,index){
			value.onclick=function(){
				dian.forEach(function(a,b){
					a.classList.remove('dot');
					tushu[b].classList.remove('appear');
				})
				this.classList.add('dot');
				tushu[index].classList.add('appear');
				dn=index;
			}
		})
	}
	box_b.forEach(function(val,index){
		fz(val);
	})
	
	

	
	


}