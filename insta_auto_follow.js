var i = 0;
Array.from(document.getElementsByClassName("wo9IH")).forEach(
    function(element, index, array) {
        //console.log(element);
		var btn = element.getElementsByTagName("button")[0];
		if(btn.innerHTML == 'Follow')
        {
			btn.click();
			i++;
		}
		
		
    }
);
console.log(i+' Followed');