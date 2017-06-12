var classicMode = false ;
var summary = 44;
var indent = 3;
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
function stripHtmlTags(e, r) {
 return e.replace(/<.*?>/gi, "").split(/\s+/).slice(0, r - 1).join(" ")
}
function getSummaryLikeWP(e) {
 return document.getElementById(e).innerHTML.split(/<!--\s*more\s*-->/)[0]
}
function getSummaryImproved(e, r) {
 var t = /<.*?>/gi,
 a = /<br.*?>/gi,
 s = /(<\/{1}p>)|(<\/{1}div>)/gi,
 i = /(<style.*?\/{1}style>)|(<script.*?\/{1}script>)|(<table.*?\/{1}table>)|(<form.*?\/{1}form>)|(<code.*?\/{1}code>)|(<pre.*?\/{1}pre>)/gi;
 e = e.replace(i, ""),
 e = e.replace(s, "<br /> ").split(a);
 for (var n = 0; n < e.length; n++) e[n] = e[n].replace(t, "");
 var l = new Array;
 for (var n in e) / [a - zA - Z0 - 9] / .test(e[n]) && l.push(e[n]);
 for (var m = "", c = "", n = 0; n < indent; n++) c += " ";
 if (l.join("<br/>").split(" ").length < r - 1) m = l.join(c + " <br/>");
 else for (var n = 0; m.split(" ").length < r;) m += c + " " + l[n] + "<br/>",
 n++;
 return m
}
function createSummaryAndThumb(e, r, t, a, s, i) {
 var n = t,
 r = r,
 a = a,
 l = document.getElementById(e),
 m = l.innerHTML;
 if (/<!--\s*more\s*-->/.test(m)) l.innerHTML = getSummaryLikeWP(e),
 l.style.display = "block";
 else {
  {
   var c = "",
   p = l.getElementsByTagName("img");
   summary
  }
  p.length >= 1 && (c = '<a href="' + n + '" title="' + r + '"><img class="entry-thumb" alt="' + r + '" src="' + p[0].src + '"></a>');
  var o = '<div class="bukshan">' + c + '<div class="blog-cent">' + a + "</span></div><p>" + stripHtmlTags(m, summary) + '... </p></div></div>';
  l.innerHTML = o,
  l.style.display = "block"
 }
}
function related_results_labels_thumbs(e) {
 for (var t = 0; t < e.feed.entry.length; t++) {
  var l = e.feed.entry[t];
  relatedTitles[relatedTitlesNum] = l.title.$t;
  try {
   thumburl[relatedTitlesNum] = l.gform_foot.url
  } catch(r) {
   s = l.content.$t,
   a = s.indexOf("<img"),
   b = s.indexOf('src="', a),
   c = s.indexOf('"', b + 5),
   d = s.substr(b + 5, c - b - 5),
   thumburl[relatedTitlesNum] = -1 != a && -1 != b && -1 != c && "" != d ? d: "http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif"
  }
  relatedTitles[relatedTitlesNum].length > 80 && (relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 80) + "...");
  for (var i = 0; i < l.link.length; i++)"alternate" == l.link[i].rel && (relatedUrls[relatedTitlesNum] = l.link[i].href, relatedTitlesNum++)
 }
}
function removeRelatedDuplicates_thumbs() {
 for (var e = new Array(0), t = new Array(0), l = new Array(0), r = 0; r < relatedUrls.length; r++) contains_thumbs(e, relatedUrls[r]) || (e.length += 1, e[e.length - 1] = relatedUrls[r], t.length += 1, l.length += 1, t[t.length - 1] = relatedTitles[r], l[l.length - 1] = thumburl[r]);
 relatedTitles = t,
 relatedUrls = e,
 thumburl = l
}
function contains_thumbs(e, t) {
 for (var l = 0; l < e.length; l++) if (e[l] == t) return ! 0;
 return ! 1
}
function printRelatedLabels_thumbs() {
 for (var e = 0; e < relatedUrls.length; e++) relatedUrls[e] != currentposturl && relatedTitles[e] || (relatedUrls.splice(e, 1), relatedTitles.splice(e, 1), thumburl.splice(e, 1), e--);
 var t = Math.floor((relatedTitles.length - 1) * Math.random()),
 e = 0;
 for (relatedTitles.length > 0 && document.write('<h4 class="kate"><span>' + relatedpoststitle + "</span></h4>"), document.write('<div class="delate"/>'); e < relatedTitles.length && 20 > e && e < maxresults;) document.write('<a class="related-post'),
 document.write(0 != e ? '"': '"'),
 document.write(' href="' + relatedUrls[t] + '"><img src="' + thumburl[t] + '"/><div class="related-title">' + relatedTitles[t] + "</div></a>"),
 t < relatedTitles.length - 1 ? t++:t = 0,
 e++;
 document.write("</div>"),
 relatedUrls.splice(0, relatedUrls.length),
 thumburl.splice(0, thumburl.length),
 relatedTitles.splice(0, relatedTitles.length)
}
waShBtn = function () {
 this.isIos === !0 && this.cntLdd(window, this.crBtn)
},
waShBtn.prototype.isIos = navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod/i) ? !0 : !1,
waShBtn.prototype.cntLdd = function (t, e) {
 var n = !1,
 a = !0,
 i = t.document,
 r = i.documentElement,
 o = i.addEventListener ? "addEventListener": "attachEvent",
 d = i.addEventListener ? "removeEventListener": "detachEvent",
 c = i.addEventListener ? "": "on",
 h = function (a) { ("readystatechange" != a.type || "complete" == i.readyState) && (("load" == a.type ? t: i)[d](c + a.type, h, !1), !n && (n = !0) && e.call(t, a.type || a))
 },
 l = function () {
  try {
   r.doScroll("left")
  } catch(t) {
   return void setTimeout(l, 50)
  }
  h("poll")
 };
 if ("complete" == i.readyState) e.call(t, "lazy");
 else {
  if (i.createEventObject && r.doScroll) {
   try {
    a = !t.frameElement
   } catch(s) {}
   a && l()
  }
  i[o](c + "DOMContentLoaded", h, !1),
  i[o](c + "readystatechange", h, !1),
  t[o](c + "load", h, !1)
 }
},
waShBtn.prototype.addStyling = function () {
 var t = document.createElement("style"),
 e = "body,html{}.blis{height:38px; width:40px; background-image:url(http://1.bp.blogspot.com/-g7uv2Nu_5BY/VYXosU88eCI/AAAAAAAADY4/512ILDT3GdA/s1600/weez.PNG); display:inline-block!important;}.tist{margin:0}";
 return t.type = "text/css",
 t.styleSheet ? t.styleSheet.cssText = e: t.appendChild(document.createTextNode(e)),
 t
},
waShBtn.prototype.crBtn = function () {
 var t = [].slice.call(document.querySelectorAll(".blis"));
 iframe = new Array;
 for (var e = 0; e < t.length; e++) {
  var n = t[e].parentNode,
  a = t[e].getAttribute("data-text"),
  i = t[e].getAttribute("data-href"),
  r = t[e].getAttribute("href"),
  o = "?text=" + a;
  a && (o += " "),
  o += i ? i: document.URL,
  t[e].setAttribute("href", r + o),
  t[e].setAttribute("target", "_top"),
  iframe[e] = document.createElement("iframe"),
  iframe[e].width = 1,
  iframe[e].height = 1,
  iframe[e].button = t[e],
  iframe[e].style.border = 0,
  iframe[e].style.overflow = "hidden",
  iframe[e].border = 0,
  iframe[e].setAttribute("scrolling", "no"),
  iframe[e].addEventListener("load", function () {
   this.contentDocument.body.appendChild(this.button),
   this.contentDocument.getElementsByTagName("head")[0].appendChild(theWaShBtn.addStyling());
   var t = document.createElement("meta");
   t.setAttribute("charset", "utf-8"),
   this.contentDocument.getElementsByTagName("head")[0].appendChild(t),
   this.width = Math.ceil(this.contentDocument.getElementsByTagName("a")[0].getBoundingClientRect().width),
   this.height = Math.ceil(this.contentDocument.getElementsByTagName("a")[0].getBoundingClientRect().height)
  },
  !1),
  n.insertBefore(iframe[e], t[e])
 }
};
$(".popular-posts ul li .item-snippet").each(function () {
 var t = $(this).text().substr(0, 120),
 s = t.lastIndexOf(" ");
 s > 10 && $(this).text(t.substr(0, s).replace(/[?,!\.-:;]*$/, "..."))
});
function ShowPost1(_19) { (function (_4) {
  var _0 = {
   blogURL: "",
   MaxPost: 5,
   idcontaint: "",
   FirstImageSize: 300,
   ImageSize: 300,
   Summarylength: 90,
   animated: false,
   loadingClass: "loadingz",
   pBlank: "http://2.bp.blogspot.com/-RFdFqW5Klsc/UitLuFMcVxI/AAAAAAAADpM/y5UnpsxUSrc/s1600/noimgs.jpg",
   MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
   tagName: false
  };
  _0 = _4["extend"]({},
  _0, _19);
  var _8 = _4(_0["idcontaint"]);
  _8["html"]("<div class=\"box-content\"><ul></ul></div>")["addClass"](_0["loadingClass"]);
  _4["get"]((_0["blogURL"] === "" ? window["location"]["protocol"] + "//" + window["location"]["host"] : _0["blogURL"]) + "/feeds/posts/summary" + (_0["tagName"] === false ? "": "/-/" + _0["tagName"]) + "?max-results=" + _0["MaxPost"] + "&orderby=published&alt=json-in-script", function (_21) {
   var _9, _10, _6, _20, _3, _14, _7, _15, _17, _11, _16, _5, _22, _18, _13 = "",
   _2 = _21["feed"]["entry"];
   for (var _1 = 0; _1 < _2["length"]; _1++) {
    for (var _12 = 0; _12 < _2[_1]["link"]["length"]; _12++) {
     if (_2[_1]["link"][_12]["rel"] == "alternate") {
      _9 = _2[_1]["link"][_12]["href"];
      break
     }
    };
    for (var _5 = 0; _5 < _12; _5++) {
     if (_2[_1]["link"][_5]["rel"] == "replies" && _2[_1]["link"][_5]["type"] == "text/html") {
      _20 = _2[_1]["link"][_5]["title"]["split"](" ")[0];
      break
     }
    };
    if ("media$thumbnail" in _2[_1]) {
     _3 = _2[_1]["media$thumbnail"]["url"]
    } else {
     _3 = _0["pBlank"]
    };
    if ("content" in _2[_1]) {
     _6 = _2[_1]["content"]["$t"]
    } else {
     if ("summary" in _2[_1]) {
      _6 = _2[_1]["summary"]["$t"]
     } else {
      _6 = ""
     }
    };
    _6 = _6["replace"](/<\S[^>]*>/g, "");
    if (_6["length"] > _0["Summarylength"]) {
     _6 = _6["substring"](0, _0.Summarylength) + "..."
    };
    if (_2[_1] === _2[0]) {
     _3 = _3["replace"](/\/s[0-9]+\-c/g, "/s" + _0["FirstImageSize"] + "-p");
     if (_3["indexOf"]("i.ytimg.com/vi/") != -1) {
      _3 = _3["replace"]("default", "0")
     };
     _7 = "<p>" + _6 + "</p>"
    } else {
     _3 = _3["replace"](/\/s[0-9]+\-c/g, "/s" + _0["ImageSize"] + "-p");
     _7 = ""
    };
    _10 = _2[_1]["title"]["$t"];
    _18 = _2[_1]["author"][0]["gd$image"]["src"];
    _5 = _2[_1]["published"]["$t"]["substring"](0, 10);
    _15 = _5["substring"](0, 4);
    _17 = _5["substring"](5, 7);
    _11 = _5["substring"](8, 10);
    _16 = _0["MonthNames"][parseInt(_17, 10) - 1];
    _14 = "<div class=\"uj_thumb\"><a title=\"" + _10 + "\" class=\" \" href=\"" + _9 + "\"><img src=\"" + _3 + "\"/></span></a></div>";
    j = "<a class=\"more-link\" href=\"" + _9 + "\">Read More</a>";
    _13 += "<li><div class=\"inner-content\" >" + _14 + "<div class=\"denz\"><h2><a href=\"" + _9 + "\">" + _10 + "</a></h2><span class=\"post-meta\"> <span class=\"dd\"> <i class=\"fa fa-calendar-o\"></i> " + _11 + "</span> <span class=\"dm\">" + _16 + "</span> <span class=\"dy\">" + _15 + "  - </span>  <span class=\"comt\"> <i class=\"fa fa-comment-o\"></i> " + _20 + " comment</span>  </span></div>" + _7 + "</div></li>"
   };
   _4("ul", _8)["append"](_13);
   _4(_0["idcontaint"] + "  li:first-child .uj_thumb")["hover"](function () {
    _4(_0["idcontaint"])["find"](".nb_slide_icon ")["stop"]()["animate"]({
     top: 0
    },
    {
     queue: false,
     duration: 300
    })
   },
   function () {
    _4(_0["idcontaint"])["find"](".nb_slide_icon ")["stop"]()["animate"]({
     top: "-60px"
    },
    {
     queue: false,
     duration: 300
    })
   });
   _8["removeClass"](_0["loadingClass"])
  },
  "jsonp")
 })(jQuery)
};