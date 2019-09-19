function Func()
{
  var x = document.getElementById("nav");
  if (x.className === "tn") {
    x.className += " res";
    document.getElementsByClassName("fa fa-bars")[0].className='fa fa-close';
    document.getElementById('index').style.color = 'black';
    x.style.animation= " a 0.5s";
    document.getElementById('back').style.display = 'block';
    document.body.style.overflowY = 'hidden';
  } else {
    x.className = "tn";
    document.getElementById('index').style.color = 'white';
    document.getElementsByClassName("fa fa-close")[0].className='fa fa-bars';
    x.style.animation= " b 0.5s";
    document.getElementById('back').style.display = 'none';
    document.body.style.overflowY = 'visible';
  }
}
function pageScroll(x)
{
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight );
    var w=Math.floor(height/4);
    var h=document.body.scrollTop;
    if(document.body.scrollTop < x*w && document.body.scrollTop < 0.75*height)
    {
      window.scrollBy(0,1);
      setTimeout(function(){pageScroll(x)},1);
    }
    if(document.body.scrollTop >= height)
    {
      return;
    }
}
function up(x)
{
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight );
    var w=Math.floor(height/4);
    var h=document.body.scrollTop;
    if(document.body.scrollTop > x*w )
    {
      window.scrollBy(0,-1);
      setTimeout(function(){up(x)},1);
    }
    if(document.body.scrollTop >= height)
    {
      return;
    }
}
var scrollPos = 0;
window.addEventListener('scroll', function(e)
{
  e.preventDefault();
  var body = document.body,
  html = document.documentElement;
  var height = Math.max( body.scrollHeight );
  var w=Math.floor(height/4);
  var h=document.body.scrollTop;
  var x=2;
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		x=1;
	else
		x=0;
  upage(x);
	scrollPos = (document.body.getBoundingClientRect()).top;
});
function upage(x)
{
  var body = document.body,
  html = document.documentElement;
  var height = Math.max( body.scrollHeight );
  var w=Math.floor(height/4);
  var h=document.body.scrollTop;
    if(x)
    {
      if(h>20 && h<w-20)
      up(0);
      else if(h>w+20 && h<2*w-20)
      up(1);
      else if(h>2*w+20 && h<3*w-20)
      up(2);
    }
    else
    {
      if(h>0 && h<w)
      pageScroll(1);
      else if(h>w+10 && h<2*w-10)
      pageScroll(2);
      else if(h>2*w+10 && h<3*w)
      pageScroll(3);
    }
  }
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('top').style.display = "block";
    } else {
      document.getElementById('top').style.display = "none";
    }
  }
