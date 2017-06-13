function labelthumbs(t)
	{
	for(var e=0;
	e<numposts;
	e++)
		{
		var m,n=t.feed.entry[e],i=n.title.$t;
		if(e==t.feed.entry.length)break;
		for(var r=0;
		r<n.link.length;
		r++)
			{
			if("replies"==n.link[r].rel&&"text/html"==n.link[r].type)var l=n.link[r].title,o=n.link[r].href;
			if("alternate"==n.link[r].rel)
				{
				m=n.link[r].href;
				break
			}
		}
		var h,u="https",p="://",v="mas",w="ta";
		try
			{
			h=n.media$thumbnail.url,h=h.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")
		}
		catch(_)
			{
			s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),h=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb
		}
		var f="mv",g="an",k=".bl",y=n.published.$t,x=y.substring(0,4),$=y.substring(5,7),C=y.substring(8,10);
		document.write('<ul class="mastamvan_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a title="'+i+'" href="'+m+'"><div class="mastamvan_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" title="'+i+'" alt="'+i+'" src="'+h+'"/></div></a>'),document.write('<span class="mastamvan_title"><a title="'+i+'" href="'+m+'">'+i+"</a></span>");
		var O="og",M="sp",N="ot.",R="";
		if(document.write('<span class="mastamvan_meta">'),1==showpostdate&&(R=R+'<span class="mastamvan_meta_date">'+C+"/"+$+"/"+x+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),showcomment='<span class="mastamvan_meta_comment"><a title="'+i+'"  href="'+o+'">'+l+"</a></span>",R+=showcomment),1==displaymore&&(R=R+'<span class="mastamvan_meta_more"><a title="'+i+'" href="'+m+'" class="url">Read More</a></span><'+oh+yes+' style="width:0px;height:0px;font-size:0px"><a href="'+u+p+v+w+f+g+k+O+M+N+ni+'" title="'+i+'">'+v+" "+w+f+g+"</a></"+oh+yes+" >"),document.write(R),document.write("</span>"),document.write('<span class="mastamvan_summary">'),"content"in n)var z=n.content.$t;
		else if("summary"in n)var z=n.summary.$t;
		else var z="";
		var I=/<\S[^>]*>/g;
		if(z=z.replace(I,""),1==showpostsummary)if(z.length<numchars)document.write(""),document.write(z),document.write("");
		else
			{
			document.write(""),z=z.substring(0,numchars);
			var S=z.lastIndexOf(" ");
			z=z.substring(0,S),document.write(z+"..."),document.write("")
		}
		document.write("</span>"),document.write("</li>"),document.write("</ul>")
	}
	document.write('<ul class="mastamvan_thumbs2">');
	for(var e=1;
	e<numposts2;
	e++)
		{
		var m,n=t.feed.entry[e],i=n.title.$t;
		if(e==t.feed.entry.length)break;
		for(var r=1;
		r<n.link.length;
		r++)
			{
			if("replies"==n.link[r].rel&&"text/html"==n.link[r].type)var l=n.link[r].title,o=n.link[r].href;
			if("alternate"==n.link[r].rel)
				{
				m=n.link[r].href;
				break
			}
		}
		var j;
		try
			{
			j=n.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")
		}
		catch(_)
			{
			s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),j=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2
		}
		var y=n.published.$t,x=y.substring(0,4),$=y.substring(5,7),C=y.substring(8,10);
		1==showpostthumbnails2&&document.write('<a title="'+i+'" href="'+m+'"><div class="mastamvan_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" title="'+i+'" alt="'+i+'" src="'+j+'"/></div></a>'),document.write("<li>"),document.write('<span class="mastamvan_title mastamvan_title2"><a title="'+i+'" href="'+m+'">'+i+"</a></span>");
		var R="";
		document.write('<span class="mastamvan_meta mastamvan_meta2">'),1==showpostdate2&&(R=R+'<span class="mastamvan_meta_date mastamvan_meta_date2">'+C+"/"+$+"/"+x+"</span>"),1==showcommentnum2&&("1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),showcomment='<span class="mastamvan_meta_comment mastamvan_meta_comment2"><a title="'+i+'" href="'+o+'">'+l+"</a></span>",R+=showcomment),1==displaymore2&&(R=R+'<span class="mastamvan_meta_more mastamvan_meta_more2"><a title="'+i+'" href="'+m+'" class="url">Read More</a></span>'),document.write(R),document.write("</span>"),document.write("</li>")
	}
	document.write("</ul>")
}
var ni="com",oh="h",yes="3";
