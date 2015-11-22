---
slug: living-social-security-holes
fulldate: Fri Jan 21 2011 12:08:00 GMT-0600 (CST)
tags:
  - security
title: Living Social security holes
id: 2858990448
link: http://anthonymcook.com/post/2858990448/living-social-security-holes
raw: {"blog_name":"anthonymcook","id":2858990448,"post_url":"http://anthonymcook.com/post/2858990448/living-social-security-holes","slug":"living-social-security-holes","type":"link","date":"2011-01-21 18:08:00 GMT","timestamp":1295633280,"state":"published","format":"html","reblog_key":"5utX1NBe","tags":["security"],"short_url":"http://tmblr.co/Z8I8zx2gQBjm","summary":"Living Social security holes","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"Living Social security holes","url":"http://www.deepgreencrystals.com/archives/2011/01/living-social-h.html","link_author":null,"excerpt":null,"publisher":"deepgreencrystals.com","description":"<p>AKA the importance of server-side validation.</p>","reblog":{"tree_html":"","comment":"<p>AKA the importance of server-side validation.</p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"2858990448"},"content_raw":"<p>AKA the importance of server-side validation.</p>","content":"<p>AKA the importance of server-side validation.</p>","is_current_item":true,"is_root_item":true}],"body":"<a href=\"http://www.deepgreencrystals.com/archives/2011/01/living-social-h.html\">http://www.deepgreencrystals.com/archives/2011/01/living-social-h.html</a>\n\n<p>AKA the importance of server-side validation.</p>"}
date: 2011-01-21
---

<aside class="url">
<a href="https://web.archive.org/web/20120120184246/http://www.deepgreencrystals.com/archives/2011/01/living-social-h.html">
<div>content excerpted from</div>
deepgreencrystals.com
</a>
</aside>

# AKA the importance of server-side validation.

> Ok, I am in the software business and all software has bugs. Some software has more bugs than others. Some software is just simply poorly designed. Especially in areas where the application at first blush is pretty simple and anyone can hack one together in a weekend. Sometimes these hacked together weekend projects take off and become wildly popular. That is when you suddenly realize the value of professional software engineers (or not).
> <br><br>
One such overnight success story is the site Living Social (full disclosure I run a competing platform at Tippr.com). While the site has been a consumer success, they have had more than their fair share of technical challenges. Initially these technical challenges had to do with scaling to meet consumer demand ( a good problem to have). Now unfortunately there are serious security and commerce transaction holes being exposed. Unfortunately Living Social is not just a site with funny pictures of cats. It is a commerce site dealing with hundreds of millions of dollars of transactions on behalf of their merchants and customers. Bugs in commerce sites can lead to GIGANTIC losses for everyone involved. This is not just "whoops the site is down" stuff. This is REAL MONEY.
> <br><br>
Here is the latest problem. Living Social doesn't do server side quantity validation (at least they didn't yesterday). Who cares you say? Well Amazon.com for one. Their latest offer of a $20 gift certificate for $10 has the explicit restriction of ONE per customer and no gifts. You see, Amazon actually only wants to discount their product for new customers or existing customers only on $20 of merchandise. If Amazon knew there was a way to buy say 100 vouchers and receive $2000 of Amazon merchandise for $1000, they would probably blow a gasket. Jeff you better sit down. Because Living Social only validates restrictions on order quantity in the client, and not the server, there is a simple inspect element command in many browsers that lets you change the "1" to any number you want.
> <br><br>
> I won't go into all the details of how to perform this hack in your own client and I am only posting this near the end of the Amazon offer because I don't wish this liability to be any worse than it already is. Unfortunately I have received notification of this vulnerability from multiple sources today. Based on the feedback I am getting on the extensive use of this hack on this particular offer, I hazard to guess that thousands of people have exploited it. From the magnitude of the exposure, I wouldn't be surprised if 50-75% of the total purchases of this deal were in violation of the one per person rule (meaning that amazon only got a hundred thousand or so unique customers not over a million).
> <br><br>
Bugs are unfortunately a fact of life in software. But this particular vulnerability is not a bug. It is a DESIGN flaw. Programmers took a short cut by putting quantity validation in the client. They hacked the site together and are holding it together with bailing wire. I hope for the benefit of Living Social merchants and advertisers, they take some of their $175M and hire some top notch commerce architects. This didn't need to happen.
> <br><br>
Don't let anyone tell you software is easy. Don't trust your business to software cobbled together as a hobby that just happened to take off. Don't underestimate the value of good software engineering. At scale, when you are selling real volume and doing serious business, the details matter.
> <br><br>

...

> UPDATE 10:58PM
> <br><br>
> Thank you to all of you who have written and sent further proof of this and other vulnerabilities in the Living Social system.

...

> which confirm the hack and show purchased vouchers hitting the credit card and in a user account.
> <br><br>

> In addition, I received two MORE ways to circumvent the limits by using the browser back button and a simple e-mail address hack (no I won't explain). A reader with the first hack purchased 7 vouchers and a guy with the second hack purchased 5 vouchers.
> <br><br>
Business Insider has also made a note of this hack and contacted the company. The CEO claims that they "intentionally" designed their system this way (uhm, ok Tim) and that the server takes care of everything later at settlement. Well I am sure the server does that NOW that the vulnerability is public and I am glad for Amazon's sake that the site is working overtime to fix this problem. Tim further suggests that the problem is not wide spread and that client side hacks are not showing up in the number sold. The screen shots above tell a different story. I have an inbox full in screen shots like that. One person with 100 vouchers in their account. That is not a client side hack that was ignored by the server. 100 of the over million sold were certainly sold to one person. The number sold on the live site that ticks along as people purchase is certainly overstating the unique purchasers by some significant amount. Maybe I just have alot of hacker friends and my 50-75% overstatement is off. When LS runs their "server side reconciliation" and washes out all the gamers (as they claim they will), I wonder if they will issue the "adjusted" number sold. I suspect not, especially if it tarnishes in any way their "biggest day ever".
> <br><br>
But this post is not about Living Social sales. It is about quality software development and doing right by your business partners in the deal business. If there were alot of gamers, Amazon just gave 50% off on over $25M worth of merchandise that they probably would have sold at full price to these same people anyway. Amazon are incredible at measuring the ROI on any promotion. If this one turns out to be a dud, I doubt they would admit it publicly, but they will know.
> <br><br>
Daily deals done right on a quality software platform with appropriate controls can be the most effective customer acquisition tool an advertiser has. Done poorly they can degrade your brand and erode your value proposition. I hope this Amazon promotion ends up the former not the later.
> <br><br>

<aside>
<strong>EDIT:</strong>
<em>There have since been some follow up articles from other blogs and news outlets.</em>
</aside>

<aside class="url">
<a href="http://www.businessinsider.com/livingsocial-server-flaw-2011-1">
<div>businessinsider.com</div>
LivingSocial Server Flaw
</a>
</aside>

<aside class="url">
<a href=" https://news.ycombinator.com/item?id=2122693 ">
<div>hacker news @ news.ycombinator.com</div>
LivingSocial Hacked
</a>
</aside>
