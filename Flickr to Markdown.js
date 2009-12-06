// Flickr to Markdown

javascript:
var url = document.URL;
var copyCommandString = "";
if (url.indexOf('flickr.com') >= 0) {
  try {
    var imageId = url.match(/[0-9]{5,}/).pop();
    var div = document.getElementById('photoImgDiv' + imageId);
    var img = div.childNodes[1];
    if(navigator.appVersion.toLowerCase().indexOf('mac') != -1) {
      copyCommandString = "(\u2318C)"
    } else {
      copyCommandString = "(Ctrl + C)"
    }
    prompt('Copy this text ' + copyCommandString, '[![](' + img.src +')](' + url + ')');
  }
  catch(error) {
    alert('Sorry, it didn\'t work!\nYou must be on a page of a single image.');
  }
}
else {
  alert('You are not on flickr.com!');
}