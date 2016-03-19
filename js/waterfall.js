window.onload=function(){
	waterfall('main','box');
	window.onscroll=function(){
		
	}
	
}

function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	
	//计算整个页面显示的列数（页面宽/box的宽度）
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	
	//设置main的宽度
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;'
	
	var hArr=[];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxW*index+'px';
			hArr[index]=hArr[index]+oBoxs[i].offsetHeight;
		}
	}
	
}

function getByClass(parent,clsName){
	var boxArr=new Array();//用来存储所有获取到的class为box的元素
	var oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
