---
slug: access-growls-log-on-osx
fulldate: Sun Dec 09 2012 17:47:51 GMT-0600 (CST)
tags:
title: Access Growl's log on OSX
id: 37594901222
link: http://anthonymcook.com/post/37594901222/access-growls-log-on-osx
raw: {"blog_name":"anthonymcook","id":37594901222,"post_url":"http://anthonymcook.com/post/37594901222/access-growls-log-on-osx","slug":"access-growls-log-on-osx","type":"text","date":"2012-12-09 23:47:51 GMT","timestamp":1355096871,"state":"published","format":"markdown","reblog_key":"hWHKwc8s","tags":[],"short_url":"http://tmblr.co/Z8I8zxZ0rAhc","summary":"Access Growl's log on OSX","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"source_url":"http://web.archive.org/web/20100402015102/http://gthing.net/enable-growl-log-and-show-it-in-geektool","source_title":"web.archive.org","title":"Access Growl's log on OSX","body":"<p>Open a terminal and drop this in:</p>\n\n<pre><code>touch ~/Library/Logs/Growl.log\ndefaults write com.Growl.GrowlHelperApp GrowlLoggingEnabled -bool YES\ndefaults write com.Growl.GrowlHelperApp GrowlLogType 1\ndefaults write com.Growl.GrowlHelperApp \"Custom log history 1\" $HOME/Library/Logs/Growl.log\n</code></pre>\n\n<p>Thank you&rsquo;ll find the log file at <code>$HOME/Library/Logs/Growl.log</code> and you can parse it or do whatever, like display messages on your desktop with GeekTools or something.</p>\n\n<p>:A</p>","reblog":{"tree_html":"","comment":"<p>Open a terminal and drop this in:</p>\n\n<pre><code>touch ~/Library/Logs/Growl.log\ndefaults write com.Growl.GrowlHelperApp GrowlLoggingEnabled -bool YES\ndefaults write com.Growl.GrowlHelperApp GrowlLogType 1\ndefaults write com.Growl.GrowlHelperApp \"Custom log history 1\" $HOME/Library/Logs/Growl.log\n</code></pre>\n\n<p>Thank you’ll find the log file at <code>$HOME/Library/Logs/Growl.log</code> and you can parse it or do whatever, like display messages on your desktop with GeekTools or something.</p>\n\n<p>:A</p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"37594901222"},"content_raw":"<p>Open a terminal and drop this in:</p>\n\n<pre><code>touch ~/Library/Logs/Growl.log\ndefaults write com.Growl.GrowlHelperApp GrowlLoggingEnabled -bool YES\ndefaults write com.Growl.GrowlHelperApp GrowlLogType 1\ndefaults write com.Growl.GrowlHelperApp \"Custom log history 1\" $HOME/Library/Logs/Growl.log\n</code></pre>\n\n<p>Thank you’ll find the log file at <code>$HOME/Library/Logs/Growl.log</code> and you can parse it or do whatever, like display messages on your desktop with GeekTools or something.</p>\n\n<p>:A</p>","content":"<p>Open a terminal and drop this in:</p>\n\n<pre><code>touch ~/Library/Logs/Growl.log\ndefaults write com.Growl.GrowlHelperApp GrowlLoggingEnabled -bool YES\ndefaults write com.Growl.GrowlHelperApp GrowlLogType 1\ndefaults write com.Growl.GrowlHelperApp \"Custom log history 1\" $HOME/Library/Logs/Growl.log\n</code></pre>\n\n<p>Thank you’ll find the log file at <code>$HOME/Library/Logs/Growl.log</code> and you can parse it or do whatever, like display messages on your desktop with GeekTools or something.</p>\n\n<p>:A</p>","is_current_item":true,"is_root_item":true}]}
date: 2012-12-09
---

Open a terminal and drop this in:

~~~sh
touch ~/Library/Logs/Growl.log
defaults write com.Growl.GrowlHelperApp GrowlLoggingEnabled -bool YES
defaults write com.Growl.GrowlHelperApp GrowlLogType 1
defaults write com.Growl.GrowlHelperApp "Custom log history 1" $HOME/Library/Logs/Growl.log
~~~

Then you&rsquo;ll find the log file at <code>$HOME/Library/Logs/Growl.log</code> and you can parse it or do whatever, like display messages on your desktop with GeekTools or something.</p>

<p>:A</p>
