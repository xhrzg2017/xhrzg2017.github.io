function bg(){
		alert("需要选两次QWQ 另外如果页面大小不符合您的意思可以在系统自带的画图工具里进行调整");
		document.getElementById("wenjian").click();
		filebg=document.getElementById("wenjian").files[0];
		var reader=new FileReader();
		reader.readAsDataURL(filebg);
		reader.onload=function(){
		var result = this.result;
		 try {
            localStorage.setItem("myBG", result);
			document.body.style.backgroundImage="url("+result+")";
        }catch (e) {
            console.log("Storage failed: " + e);
        }	
			
		
		}
	}