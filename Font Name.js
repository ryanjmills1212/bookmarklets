//Font Name
//Click on text and it will tell you the font.
//Credit nitroyeast.dev
javascript:var d=document,b=d.body,s=d.createElement('style'),m;s.innerHTML='*{cursor:help !important;}';b.appendChild(s);b.addEventListener('click',l,0);function l(e){m=/"([^"]+)"|'([^']+)'|([^,]+)/.exec(window.getComputedStyle(e.target).fontFamily);alert('That font is '+(m[1]||m[2]||m[3]));b.removeChild(s);b.removeEventListener('click',l);e.preventDefault()}
      