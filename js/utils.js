var isAlpha = function(ch){
    return /^[/A-Z/]+$/i.test(ch);
  }

function ninjaCodeSub(userInput,divs){        
    var re = new RegExp(window.lastMountPoint);        
    if (userInput && isAlpha(userInput)){
        for (item in divs){             
            var content = divs[item];            
            var subContent = content.innerHTML.replace(re,userInput);                        
            content.innerHTML = subContent;
        };        
        window.lastMountPoint = userInput
    } 
    return;
};