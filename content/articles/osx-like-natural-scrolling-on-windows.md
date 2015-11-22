---
slug: osx-like-natural-scrolling-on-windows
fulldate: Mon Oct 15 2012 17:56:53 GMT-0500 (CDT)
tags:
title: OSX-like Natural Scrolling on Windows
id: 33669101192
link: http://anthonymcook.com/post/33669101192/osx-like-natural-scrolling-on-windows
raw: {"blog_name":"anthonymcook","id":33669101192,"post_url":"http://anthonymcook.com/post/33669101192/osx-like-natural-scrolling-on-windows","slug":"osx-like-natural-scrolling-on-windows","type":"link","date":"2012-10-15 22:56:53 GMT","timestamp":1350341813,"state":"published","format":"html","reblog_key":"68qxuIcD","tags":[],"short_url":"http://tmblr.co/Z8I8zxVMrRQ8","summary":"OSX-like Natural Scrolling on Windows","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"OSX-like Natural Scrolling on Windows","url":"http://one-cheekymonkey.blogspot.com/2012/01/reverse-mouse-scroll-direction-in.html","link_author":null,"excerpt":null,"publisher":"one-cheekymonkey.blogspot.com","description":"<p>I&rsquo;m going to forget this next time it happens, so I&rsquo;m putting here for posterity.</p>\n\n<p>Navigate to &ldquo;HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\HID&rdquo;, and look for an entry that resembles &ldquo;VID_&hellip;&rdquo;\nOpen the &ldquo;Device Parameters&rdquo; key under each child entry and reverse the boolean value for the &ldquo;FlipFlopWheel&rdquo;.</p>","reblog":{"tree_html":"","comment":"<p>I’m going to forget this next time it happens, so I’m putting here for posterity.</p>\n\n<p>Navigate to “HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\HID”, and look for an entry that resembles “VID_…”\nOpen the “Device Parameters” key under each child entry and reverse the boolean value for the “FlipFlopWheel”.</p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"33669101192"},"content_raw":"<p>I’m going to forget this next time it happens, so I’m putting here for posterity.</p>\n\n<p>Navigate to “HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\HID”, and look for an entry that resembles “VID_…”\nOpen the “Device Parameters” key under each child entry and reverse the boolean value for the “FlipFlopWheel”.</p>","content":"<p>I’m going to forget this next time it happens, so I’m putting here for posterity.</p>\n\n<p>Navigate to “HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\HID”, and look for an entry that resembles “VID_…”\nOpen the “Device Parameters” key under each child entry and reverse the boolean value for the “FlipFlopWheel”.</p>","is_current_item":true,"is_root_item":true}],"body":"<a href=\"http://one-cheekymonkey.blogspot.com/2012/01/reverse-mouse-scroll-direction-in.html\">http://one-cheekymonkey.blogspot.com/2012/01/reverse-mouse-scroll-direction-in.html</a>\n\n<p>I&rsquo;m going to forget this next time it happens, so I&rsquo;m putting here for posterity.</p>\n\n<p>Navigate to &ldquo;HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\HID&rdquo;, and look for an entry that resembles &ldquo;VID_&hellip;&rdquo;\nOpen the &ldquo;Device Parameters&rdquo; key under each child entry and reverse the boolean value for the &ldquo;FlipFlopWheel&rdquo;.</p>"}
date: 2012-10-15
---

<aside class="url"><a href="http://one-cheekymonkey.blogspot.com/2012/01/reverse-mouse-scroll-direction-in.html">
<div>one-cheekymonkey.blogspot.com</div>
Reverse Mouse Scroll Direction
</a></aside>

I’m going to forget this next time it happens, so I’m putting here for
posterity.

Navigate to
`HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\HID`, and look
for an entry that resembles `VID\_…` Open the `Device Parameters` key
under each child entry and reverse the boolean value for the
`FlipFlopWheel`.

<aside>These days I use <code>FlipFlip.exe</code> (see below) which automates all this for me.
This is still useful for knowing how it works and how it fix it manually.</aside>

<aside class="url"><a href="https://github.com/jamie-pate/flipflop-windows-wheel">
<div>github.com</div>
FlipFlop Windows Wheel
</a></aside>
