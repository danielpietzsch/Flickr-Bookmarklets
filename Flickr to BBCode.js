// Flickr to BBCode

javascript:
var url = document.URL;
if (url.indexOf('flickr.com') >= 0) {
  try {
    var imageId = url.match(/[0-9]{5,}/).pop();
    var div = document.getElementById('photoImgDiv' + imageId);
    var img = div.childNodes[1];
    prompt('Copy this text:', '[URL=' + url + '][IMG]' + img.src + '[/IMG][/URL]');
  }
  catch(error) {
    alert('Sorry, it didn\'t work!\nYou must be on a page of a single image.');
  }
}
else {
  alert('You are not on flickr.com!');
}