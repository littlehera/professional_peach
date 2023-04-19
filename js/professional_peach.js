//window.addEventListener('scroll', unhide_icon_cards, false);
window.addEventListener('scroll', scroll_events, false);

/*
Custom Functions
*/

function set_links_inactive(target_url){
  var i = 0;
  var x = document.getElementsByTagName('a');
  for (i = 0; i < x.length; i++) {
    var current_url = x[i].getAttribute('href');
    var current_class = x[i].className;
    var class_list = current_class.split(' ');
    if(target_url!==current_url){
      //console.log(class_list);
      if(!current_url.includes('mailto')){
        if(class_list.indexOf('active') != -1){
            class_list[class_list.indexOf('active')]="";
            var new_class = class_list.join(' ');
            console.log(new_class);
            x[i].setAttribute('class', new_class);
        }
      }
    }
    else{
      var new_class = current_class + " active";
      x[i].setAttribute('class',new_class);
    }
  }
}

function scroll_events(){
  loading_bar_animation();
  float_in_animation();
  fade_in_animation();
}

function loading_bar_animation(){
  var loading_bar = document.getElementsByClassName('loading-fill');
  for(var i=0;i<loading_bar.length;i++){
    var animate_loading = isScrolledIntoView(loading_bar[i]);
    if (animate_loading){
      if(!loading_bar[i].className.includes(" loading-fill-animate"))
        loading_bar[i].className += " loading-fill-animate";
    }
  }
}


function float_in_animation(){
  var html_element = document.getElementsByClassName('pink-card');
  for(var i=0;i<html_element.length;i++){
    var animate_float_in = isScrolledIntoView(html_element[i]);
    if (animate_float_in){
      if(!html_element[i].className.includes(" float-in")){
        html_element[i].className += " float-in";
      }
    }
  }
}

function fade_in_animation(){
  var html_element = document.getElementsByClassName('pre-fade-in');
  for(var i=0;i<html_element.length;i++){
    var animate_float_in = isScrolledIntoView(html_element[i]);
    if (animate_float_in){
      if(!html_element[i].className.includes(" fade-in")){
        html_element[i].className += " fade-in";
      }
    }
  }
}


function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
