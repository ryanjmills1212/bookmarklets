//Kill Element
//Click on an element to delete it.
//Credit nitroyeast.dev
javascript:for(var i=0; i<(document.getElementsByTagName('a')).length; i++) {(document.getElementsByTagName('a')[i]).style.pointerEvents = 'none';}function handler(e) {e = e || window.event;var target = e.target || e.srcElement;target.style.display = 'none';document.removeEventListener('click', handler, false);cursor('default');for(var i=0; i<(document.getElementsByTagName('a')).length; i++) {(document.getElementsByTagName('a')[i]).style.pointerEvents = 'initial';}}document.addEventListener('click', handler, false);cursor('crosshair');function cursor(cur) { document.body.style.cursor = cur; }
      