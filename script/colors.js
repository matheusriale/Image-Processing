function rgbToHSV(r,g,b){
    r = r/255;
    g = g/255;
    b = b/255;
    let h,s,v;
    console.log(r,g,b)
    let v_max = Math.max(Math.max(r,g),b)
    let v_min = Math.min(Math.min(r,g),b)

    if(v_max==r && g>=b){h = 60*((g-b)/(v_max-v_min))}
    if(v_max==r && g<b){h = 360+(60*((g-b)/(v_max-v_min)))}
    if(v_max==g){h = 120+60*((b-r)/(v_max-v_min))}
    if(v_max==b){h = 240+60*((r-g)/(v_max-v_min))}

    if (v_max>0){s = (v_max-v_min)/v_max}
    else{s = 0}
    s = s *100
    v = v_max*100;
    return [h,s,v];
}

function hsvToRGB(h,s,v){//h (0-360), s(0-100) v(0-100)
    s = s/100
    v = v/100
    let c = v*s
    let x = c*(1-Math.abs((h/60)%2 - 1))
    let m = v-c 
    let newR,newG,newB,r,g,b
    if (0<=h && h<60)        {newR = c;newG = x; newB = 0;}
    else if (60<=h && h<120) {newR = x;newG = c ;newB = 0;}
    else if (120<=h && h<180){newR = 0;newG = c ;newB = x;}
    else if (180<=h && h<240){newR = 0;newG = x ;newB = c;}
    else if (240<=h && h<300){newR = x;newG = 0 ;newB = c;}
    else if (300<=h && h<360){newR = c;newG = 0 ;newB = x;}

    r = Math.round((newR+m)*255)
    g = Math.round((newG+m)*255)
    b = Math.round((newB+m)*255)
    return [r,g,b]
}

function rgbToHSL(r,g,b){
    let h,s,l
    let newr = r/255
    let newg = g/255
    let newb = b/255
    let cmax = Math.max(newr,newg,newb)
    let cmin = Math.min(newr,newg,newb)
    let delta = cmax-cmin

    l = (cmax+cmin)/2
    if(delta == 0){h = 0;s = 0}
    else if(cmax==newr && g>=b){h = 60*(((newg-newb)/delta)%6);}
    else if(cmax==newr && g<b){h = 360 + 60*(((newg-newb)/delta)%6);}
    else if(cmax==newg){h = 60*(((newb-newr)/delta) + 2)}
    else if(cmax==newb){h = 60*(((newr-newg)/delta) + 4)}

    if(delta!=0){s = delta/(1-Math.abs(2*l - 1))}
    console.log(h,s,l)
    return [h,s,l]
}

function hslToRGB(h,s,l){
    let c = (1- Math.abs(2*l - 1))*s
    let x = c*(1-Math.abs((h/60)%2 - 1))
    let m = l-c/2 
    let newR,newG,newB,r,g,b
    if (0<=h && h<60)        {newR = c;newG = x; newB = 0;}
    else if (60<=h && h<120) {newR = x;newG = c ;newB = 0;}
    else if (120<=h && h<180){newR = 0;newG = c ;newB = x;}
    else if (180<=h && h<240){newR = 0;newG = x ;newB = c;}
    else if (240<=h && h<300){newR = x;newG = 0 ;newB = c;}
    else if (300<=h && h<360){newR = c;newG = 0 ;newB = x;}

    r = Math.round((newR+m)*255)
    g = Math.round((newG+m)*255)
    b = Math.round((newB+m)*255)
    console.log(r,g,b)
    return [r,g,b]
}

function rgbImageToHSV(){
    return;
}
