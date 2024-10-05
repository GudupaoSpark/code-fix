function toast(text, time) {
    let toast = document.getElementById('toast');
    let toast_box = document.getElementsByClassName('toast_box')[0];
    toast.innerHTML = text;
    toast_box.style.animation = 'show 1.5s'
    toast_box.style.display = 'inline-block';
	setTimeout(function(){
		toast_box.style.animation = 'hide 1.5s'
		setTimeout(function(){
			toast_box.style.display = 'none';
		}, 1400)
	}, time)   
}


function copyToClip(content, message) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if (message == null) {
        toast("复制成功"，3000);
    } else{
        toast(message，3000);
    }
}
