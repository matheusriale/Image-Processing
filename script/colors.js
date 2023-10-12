function rgbToHSV(r,g,b){
    r = r/255;
    g = g/255;
    b = b/255;
    let h,s,v;
    console.log(r,g,b)
    let v_max = Math.max(Math.max(r,g),b)
    let v_min = Math.min(Math.min(r,g),b)
    if(v_max==r && g>=b){
        h = 60*((g-b)/(v_max-v_min))
    }
    if(v_max==r && g<b){
        h = 360+(60*((g-b)/(v_max-v_min)))
    }
    if(v_max==g){
        h = 120+60*((b-r)/(v_max-v_min))
    }
    if(v_max==b){
        h = 240+60*((r-g)/(v_max-v_min))
    }
    
    if (v_max>0){
        s = (v_max-v_min)/v_max
    }
    else{s = 0}

    s = s //*100
    v = v_max//*100;
    console.log(h,s,v);
    return [h,s,v];
}

function hsvToRGB(h,s,v){//h (0-360), s(0-1) v(0-1)


}
