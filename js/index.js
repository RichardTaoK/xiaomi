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
	// banner
	let n=0;
	let banner=document.querySelectorAll('.banner_top li');
	let banner_t=document.querySelector('.banner_top');
	let left=document.querySelector('.banner_top .left');
	let right_1=document.querySelector('.banner_top .right');
	function move(){
		n++;
		if(n>=banner.length){n=0;}
		banner.forEach(function(val){
			val.classList.remove('move');
		})
		banner[n].classList.add('move');
	}
	let t=setInterval(move,2000);
	banner_t.onmouseover=function(){
		clearInterval(t);
	}
	banner_t.onmouseout=function(){
		t=setInterval(move,2000);
	}
	right_1.onclick=function(){
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
//单品banner
	let box=document.querySelectorAll('.dan_bd .box1');
	let b=document.querySelector('.dan_bd');
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


let tushu=document.querySelectorAll('.xm li');
// console.log(tushu)

// 封装轮播
	let k=0;
	function kk(a,b){
		if(a instanceof NodeList){
			k++;
			// console.log(a.length);
			if(n>=a.length){k=0;}
			a.forEach(function(val){
				val.classList.remove(b);

			})
			a[k].classList.add(b);
			// console.log(n)
		}
	}

	// let t=setInterval("move(lis,'active')",2000);
//结束
// let tu=setInterval("kk(tushu,'appear')",2000);
	
	


}