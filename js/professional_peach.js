window.addEventListener('scroll', unhide_icon_cards, false);
document.addEventListener('click',click_handler,false)


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

function click_handler(e){
  //console.log(e.target);
  var element_href = e.target.getAttribute('href');
  var parent_href=e.target.parentNode.getAttribute('href');
  //console.log("E:"+element_href+" | P:"+parent_href);
  var target_url = (element_href !=null? element_href:parent_href);
  set_links_inactive(target_url);
 //set_links_inactive(e.target.textContent);
}

function unhide_icon_cards(){
  var icon_cards = document.getElementsByClassName('icon-card');
  for(var i=0;i<icon_cards.length;i++){
    //console.log(icon_cards[i]);
    var show_card = isScrolledIntoView(icon_cards[i]);
    if (show_card){
      icon_cards[i].className = "icon-card set-visible"
    }
  }
}

/*
function handler(e){
 var txt='You clicked on a '+e.target.nodeName+'\n';
    txt+='The innerHTML is '+e.target.innerHTML+'\n';
    txt+='The text is '+e.target.textContent+'\n';
    txt+='The parentNode is '+e.target.parentNode.nodeName+'\n';
 alert(txt)
}
document.addEventListener('click',handler,false)
*/




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
