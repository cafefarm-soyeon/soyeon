window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	  console.log('50');
    //document.getElementById("header").style.fontSize = "30px";
  } else {
	console.log('others');
    //document.getElementById("header").style.fontSize = "90px";
  }
}

