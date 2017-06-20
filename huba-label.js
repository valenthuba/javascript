function hubalabelthumbs(t) {
	for (var e = 0; e < hubanumposts; e++) {
		var n, r = t.feed.entry[e],
			m = r.title.$t;
		if (e == t.feed.entry.length) break;
		for (var i = 0; i < r.link.length; i++) {
			if ("replies" == r.link[i].rel && "text/html" == r.link[i].type) var l = r.link[i].title,
				o = r.link[i].href;
			if ("alternate" == r.link[i].rel) {
				n = r.link[i].href;
				break
			}
		}
		var u;
		try {
			u = r.media$thumbnail.url, u = u.replace("/s72-c/", "/w" + hubathumb_width + "-h" + hubathumb_height + "-c/")
		} catch (h) {
			s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), u = -1 != a && -1 != b && -1 != c && "" != d ? d : hubano_thumb
		}
		var p = r.published.$t,
			w = p.substring(0, 4),
			_ = p.substring(5, 7),
			f = p.substring(8, 10),
			g = new Array;
		g[1] = "January", g[2] = "February", g[3] = "March", g[4] = "April", g[5] = "May", g[6] = "June", g[7] = "July", g[8] = "August", g[9] = "September", g[10] = "October", g[11] = "November", g[12] = "December", document.write('<span class="huba-label-kiri">'), document.write('<ul class="huba-label-gambar">'), document.write("<li>"), 1 == hubashowpostthumbnails && document.write('<a href="' + n + '"><div class="cat_thumb"><span class="rollover"></span><img width="' + hubathumb_width + '" height="' + hubathumb_height + '" alt="' + m + '" src="' + u + '"/></div></a>'), document.write('<span class="huba-label-title"><a href="' + n + '" target ="_top">' + m + "</a></span>");
		var v = "";
		if (document.write('<span class="huba-label-meta">'), 1 == hubashowpostdate && (v = v + '<span class="huba-label-meta-date">' + g[parseInt(_)] + " " + f + ", " + w + "</span>"), 1 == hubashowcommentnum && ("1 Comments" == l && (l = "1 Comments"), "0 Comments" == l && (l = "0 Comments"), showcomment = '<span class="huba-label-meta-comment"><a href="' + o + '">' + l + "</a></span>", v += showcomment), 1 == hubadisplaymore && (v = v + '<span class="huba-label-meta-more"><a href="' + n + '" class="url" target ="_top">Selengkapnya</a></span>'), document.write(v), document.write("</span>"), document.write('<span class="huba-label-summary">'), "content" in r) var y = r.content.$t;
		else if ("summary" in r) var y = r.summary.$t;
		else var y = "";
		var k = /<\S[^>]*>/g;
		if (y = y.replace(k, ""), 1 == hubashowpostsummary)
			if (y.length < hubanumchars) document.write(""), document.write(y), document.write("");
			else {
				document.write(""), y = y.substring(0, hubanumchars);
				var $ = y.lastIndexOf(" ");
				y = y.substring(0, $), document.write(y + "..."), document.write("")
			}
		document.write("</span>"), document.write("</li>"), document.write("</ul>"), document.write("</span>")
	}
	document.write('<span class="huba-label-kanan">'), document.write('<ul class="huba-label-gambar2">');
	for (var e = 1; e < hubanumposts2; e++) {
		var n, r = t.feed.entry[e],
			m = r.title.$t;
		if (e == t.feed.entry.length) break;
		for (var i = 1; i < r.link.length; i++) {
			if ("replies" == r.link[i].rel && "text/html" == r.link[i].type) var l = r.link[i].title,
				o = r.link[i].href;
			if ("alternate" == r.link[i].rel) {
				n = r.link[i].href;
				break
			}
		}
		var x;
		try {
			x = r.media$thumbnail.url.replace("/s72-c/", "/w" + hubathumb_width2 + "-h" + hubathumb_height2 + "-c/")
		} catch (h) {
			s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), x = -1 != a && -1 != b && -1 != c && "" != d ? d : hubano_thumb2
		}
		var p = r.published.$t,
			w = p.substring(0, 4),
			_ = p.substring(5, 7),
			f = p.substring(8, 10);
		1 == hubashowpostthumbnails2 && document.write('<a href="' + n + '"><div class="cat_thumb2"><img width="' + hubathumb_width2 + '" height="' + hubathumb_height2 + '" alt="' + m + '" src="' + x + '"/></div></a>'), document.write("<li>"), document.write('<span class="huba-label-title huba-label-title2"><a href="' + n + '" target ="_top">' + m + "</a></span>");
		var v = "";
		document.write('<span class="huba-label-meta huba-label-meta2">'), 1 == hubashowpostdate2 && (v = v + '<span class="huba-label-meta-date">' + g[parseInt(_)] + " " + f + ", " + w + "</span>"), 1 == hubashowcommentnum2 && ("1 Comment" == l && (l = "1 Comments"), "0 Comment" == l && (l = "0 Comments"), showcomment = '<span class="huba-label-meta-comment huba-label-meta-comment2"><a href="' + o + '">' + l + "</a></span>", v += showcomment), 1 == hubadisplaymore2 && (v = v + '<span class="huba-label-meta-more huba-label-meta-more2"><a href="' + n + '" class="url" target ="_top">Selengkapnya</a></span>'), document.write(v), document.write("</span>"), document.write("</li>")
	}
	document.write("</ul>"), document.write("</span>")
}