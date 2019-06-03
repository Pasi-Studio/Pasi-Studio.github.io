/**/
let component={};

/**/
component.isDeviceMobile=window.navigator.userAgent.match('Mobile')?true:false;

/**/
if(component.isDeviceMobile)window.document.documentElement.classList.add('componentDeviceMobile');

/**/
{
	window.document.querySelectorAll('[component]').forEach((node)=>{
		let item=JSON.parse(node.getAttribute('component').replace(/'/g,'"'));
		let imageLeftID='';
		let imageRightID='';
		if(item.id){
			let id=item.id;
			node.setAttribute('id',id);
			imageLeftID='id="'+id+'_Left" ';
			imageRightID='id="'+id+'_Right" ';
		};
		let numberMax=item.numberMax;
		let width=item.width?item.width:'100%';
		let start=item.start?item.start:'50%';
		let image=item.image;
		let imageLeft=item.imageLeft;
		let imageRight=item.imageRight;
		let imageGray='';
		if(!imageLeft&&!imageRight){
			imageLeft=imageRight=image;
			imageGray='filter:grayscale(1);';
		};
		let text=item.text?'componentText="'+item.text+'" ':'componentText="Le Urbain de Fanatisme" ';
		let font=item.font?'font-family:'+item.font+';':'';
		node.removeAttribute('component');
		node.classList.add('component');
		node.setAttribute('style','width:'+width+';');
		node.insertAdjacentHTML('beforeend',`
			<img ${imagerightid}src="${imageRight}">
			<div style="width:${start};">
				<img ${imageleftid}src="${imageLeft}" style="${imageGray}min-width:${node.clientWidth}px;">
			</div>
			<span ${text}style="left:${start};${font}"></span>
		`);
		if(numberMax){
			node.insertAdjacentHTML('beforeend',`
				<span componentnumbermax="${numberMax}"><input type="image" id="switch" src="static/image/component/BT1.jpg" width="14px" height="14px"></span>
			`);
			for(let i=2;i<=numbermax;i++){ let href="imageRight.replace(/(.*)(\d)(\..*)/,'$1'+i+'$3');" node.insertadjacenthtml('beforeend',` <link rel="preload" as="image">
				`);
			}
		}
	});
	let componentImageLeftArray=new Set();
	window.document.querySelectorAll('.component>div>img').forEach((node)=>{
		componentImageLeftArray.add(node);
	});
	window.addEventListener('resize',()=>{
		componentImageLeftArray.forEach((node)=>{
			node.style.minWidth=node.parentElement.parentElement.clientWidth+'px';
		});
	});
	let componentSpanOneArray=new Set();
	window.document.querySelectorAll('.component>span:first-of-type').forEach((node)=>{
		componentSpanOneArray.add(node);
	});
	componentSpanOneArray.forEach((node)=>{
		let topNode=node.parentElement;
		let imageLeft=node.previousElementSibling;
		let state=false;
		let disX;
		let moveX;
		let moveL;
		let max;
		let start=(event)=>{
			node.classList.add('componentActive');
			state=true;
			let l=node.offsetLeft;
			let x=event.clientX?event.clientX:event.changedTouches[0].clientX;
			disX=x-l;
			max=topNode.offsetWidth-node.offsetWidth;
		};
		node.addEventListener('mousedown',start);
		node.addEventListener('touchstart',start);
		let move=(event)=>{
			if(!state)return;
			moveX=event.clientX?event.clientX:event.changedTouches[0].clientX;
			moveL=window.Math.min(max+5,window.Math.max(5,moveX-disX));
			node.style.left=imageLeft.style.width=moveL/topNode.offsetWidth*100+'%';
		};
		window.addEventListener('mousemove',move);
		window.addEventListener('touchmove',move);
		let end=()=>{
			node.classList.remove('componentActive');
			state=false;
		};
		window.addEventListener('mouseup',end);
		window.addEventListener('touchend',end);
	});
	let componentSpanTwoArray=new Set();
	window.document.querySelectorAll('.component>span:first-of-type+span').forEach((node)=>{
		componentSpanTwoArray.add(node);
	});
	var i=1;
	componentSpanTwoArray.forEach((node)=>{
		let srcNode=node.parentElement.firstElementChild;
		let numberMax=node.getAttribute('componentNumberMax');
		node.addEventListener('click',()=>{
			let number=srcNode.src.replace(/.*(\d)\..*/,'$1');
			if(number===numberMax)number=0;
			srcNode.src=srcNode.src.replace(/(.*)(\d)(\..*)/,'$1'+(1*number+1)+'$3');
			var inp=document.getElementById("switch");
			if(inp.src="static/image/component/BT"+i+".jpg") {
				i++;
                inp.setAttribute("src","static/image/component/BT"+i+".jpg");
			if(i==3){i=0;}
			}
		});
	});
};</=numbermax;i++){>