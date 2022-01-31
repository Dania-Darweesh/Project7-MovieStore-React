


export function loadScripts(){
    const scriptsUrl=[
    "%PUBLIC_URL%/js/jquery-3.5.1.min.js",
    "%PUBLIC_URL%/js/bootstrap.bundle.min.js",
    "%PUBLIC_URL%/js/owl.carousel.min.js",
    "%PUBLIC_URL%/js/jquery.mousewheel.min.js",
    "%PUBLIC_URL%/js/jquery.mCustomScrollbar.min.js",
    "%PUBLIC_URL%/js/wNumb.js",
    "%PUBLIC_URL%/js/nouislider.min.js",
    "%PUBLIC_URL%/js/plyr.min.js",
    "%PUBLIC_URL%/js/jquery.morelines.min.js",
    "%PUBLIC_URL%/js/photoswipe.min.js",
    "%PUBLIC_URL%/js/photoswipe-ui-default.min.js",
    "%PUBLIC_URL%/js/main.js",
    'https://code.jquery.com/jquery-3.5.1.slim.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
]
console.log('hello');

    for(let i=0;i<13;i++){
        const script = document.createElement("script");
        script.async = true;
        script.src = scriptsUrl[i];
        document.getElementsByTagName('head')[0].appendChild(script);
    

    }
    
      
    
    
    
  
       
    
      
    
      
}