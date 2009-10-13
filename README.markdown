# Flickr Bookmarklets

So far, this project consists of only *one* bookmarklet in three different versions.  
Every Bookmarklet does the same, but the output format is different.

Executing the bookmarklet on a Flickr picture page (i.e. the page with comments, tags etc.) it copies the address of that image, wraps it in a link and displays this code in the chosen syntax. You can then copy this code into your clipboard and paste it somewhere else (f.e. your blog).

The output choices are:

* [BBCode](http://www.phpbb.com/community/faq.php?mode=bbcode),
* [Markdown](http://daringfireball.net/projects/markdown/syntax) or
* export for [Travellerspoint](http://www.travellerspoint.com/).

Travellerspoint is a travel website, which uses a syntax similar to BBCode. I have [my travel blog](http://downunder.travellerspoint.com/) there. The original motivation to create these bookmarklets was to make it easy for me to paste images from [my Flickr stream](http://www.flickr.com/photos/pie4dan/) into this travel blog.

Just drag on of these bookmarklets to your browser's bookmarks/favorites bar.

<a href="javascript:var%20url%20=%20document.URL;if%20(url.indexOf('flickr.com')%20>=%200)%20{%20%20try%20{%20%20%20%20var%20imageId%20=%20url.match(/[0-9]{5,}/).pop();%20%20%20%20var%20div%20=%20document.getElementById('photoImgDiv'%20+%20imageId);%20%20%20%20var%20img%20=%20div.childNodes[1];%20%20%20%20prompt('Copy%20this%20text:',%20'[URL='%20+%20url%20+%20'][IMG]'%20+%20img.src%20+%20'[/IMG][/URL]');%20%20}%20%20catch(error)%20{%20%20%20%20alert('Sorry,%20it%20didn\'t%20work!\nYou%20must%20be%20on%20a%20page%20of%20a%20single%20image.');%20%20}}else%20{%20%20alert('You%20are%20not%20on%20flickr.com!');}">Flickr -> BBCode</a>

<a href="javascript:var%20url%20=%20document.URL;if%20(url.indexOf('flickr.com')%20>=%200)%20{%20%20try%20{%20%20%20%20var%20imageId%20=%20url.match(/[0-9]{5,}/).pop();%20%20%20%20var%20div%20=%20document.getElementById('photoImgDiv'%20+%20imageId);%20%20%20%20var%20img%20=%20div.childNodes[1];%20%20%20%20prompt('Copy%20this%20text:',%20'[![]('%20+%20img.src%20+')]('%20+%20url%20+%20')');%20%20}%20%20catch(error)%20{%20%20%20%20alert('Sorry,%20it%20didn\'t%20work!\nYou%20must%20be%20on%20a%20page%20of%20a%20single%20image.');%20%20}}else%20{%20%20alert('You%20are%20not%20on%20flickr.com!');}">Flickr -> Markdown</a>

<a href="javascript:var%20url%20=%20document.URL;if%20(url.indexOf('flickr.com')%20>=%200)%20{%20%20try%20{%20%20%20%20var%20imageId%20=%20url.match(/[0-9]{5,}/).pop();%20%20%20%20var%20div%20=%20document.getElementById('photoImgDiv'%20+%20imageId);%20%20%20%20var%20img%20=%20div.childNodes[1];%20%20%20%20prompt('Copy%20this%20text:',%20'[URL='%20+%20url%20+%20'][IMG='%20+%20img.src%20+'][/URL]');%20%20}%20%20catch(error)%20{%20%20%20%20alert('Sorry,%20it%20didn\'t%20work!\nYou%20must%20be%20on%20a%20page%20of%20a%20single%20image.');%20%20}}else%20{%20%20alert('You%20are%20not%20on%20flickr.com!');}">Flickr -> TP</a>