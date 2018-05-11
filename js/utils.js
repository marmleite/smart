function subMountPoint(mp,divs){        
    var re = new RegExp('/dev/xyz');    
    for (item in divs){             
        var content = divs[item];            
        var subContent = content.innerHTML.replace(re, "/dev/"+ mp);                        
        content.innerHTML = subContent;
    };
    return;
};