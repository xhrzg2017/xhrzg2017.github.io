	
	function zuoshiqing(){
		
		sousuo=document.getElementById("neirong").value;
		if(!sousuo){
			alert("请输入搜索内容");
		}
		else{
		var qaq="https://www.baidu.com/";
		var lianjie=qaq+"s?"+"wd="+sousuo;
		window.open(lianjie);     
		}
		
	}


	
