(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyD6X0Ju19NJ_YduOBlA0PtIDYVETiQGZq0",
    v: "alpha",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
  async function init(lat_value,lng_value) {
    const { Map3DElement } = await google.maps.importLibrary("maps3d");

    const map = new Map3DElement({
        center: { lat: lat_value, lng: lng_value, altitude: 0 },
        tilt: 67.5,
        range: 1000
    });    
    document.querySelector("#map").append(map)
}

async function fly_to(dep_lat,dep_long,dest_lat,dest_long) {
    const { Map3DElement } = await google.maps.importLibrary("maps3d");

    const map = new Map3DElement({
        center: { lat: dep_lat, lng: dep_long, altitude: 0 },
        tilt: 67.5,
        range: 1000
    });    
    document.querySelector("gmp-map-3d").replaceWith(map)
    map.flyCameraTo({
        endCamera: {
        center: { lat: dest_lat, lng: dest_long, altitude: 0  },
        tilt: 67.5,
        range: 1000
        },
        durationMillis: 5000
    });
}
