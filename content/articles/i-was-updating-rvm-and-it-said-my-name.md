---
slug: i-was-updating-rvm-and-it-said-my-name
fulldate: Mon Jun 06 2011 16:28:30 GMT-0500 (CDT)
tags:
title: RVM knows my name
id: 6260553416
link: http://anthonymcook.com/post/6260553416/i-was-updating-rvm-and-it-said-my-name
raw: {"blog_name":"anthonymcook","id":6260553416,"post_url":"http://anthonymcook.com/post/6260553416/i-was-updating-rvm-and-it-said-my-name","slug":"i-was-updating-rvm-and-it-said-my-name","type":"text","date":"2011-06-06 21:28:30 GMT","timestamp":1307395710,"state":"published","format":"markdown","reblog_key":"AJFprh4U","tags":[],"short_url":"http://tmblr.co/Z8I8zx5rA7R8","summary":"I was updating rvm and IT SAID MY NAME","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"I was updating rvm and IT SAID MY NAME","body":"<p>And I wondered how it knew?</p>\n\n<p>Was it psychic?</p>\n\n<p>Were they watching me, right now, outside my office window??</p>\n\n<p>No, its just this:</p>\n\n<pre><code>name=$(git config user.name 2&gt;/dev/null)\n${name:-\"${USER:-$(id | sed -e 's/^[^(]*(//' -e 's/).*$//')}\"}\n</code></pre>\n\n<p>Fun!</p>\n\n<p>⦂∀</p>","reblog":{"tree_html":"","comment":"<p>And I wondered how it knew?</p>\n\n<p>Was it psychic?</p>\n\n<p>Were they watching me, right now, outside my office window??</p>\n\n<p>No, its just this:</p>\n\n<pre><code>name=$(git config user.name 2&gt;/dev/null)\n${name:-\"${USER:-$(id | sed -e 's/^[^(]*(//' -e 's/).*$//')}\"}\n</code></pre>\n\n<p>Fun!</p>\n\n<p>⦂∀</p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"6260553416"},"content_raw":"<p>And I wondered how it knew?</p>\n\n<p>Was it psychic?</p>\n\n<p>Were they watching me, right now, outside my office window??</p>\n\n<p>No, its just this:</p>\n\n<pre><code>name=$(git config user.name 2&gt;/dev/null)\n${name:-\"${USER:-$(id | sed -e 's/^[^(]*(//' -e 's/).*$//')}\"}\n</code></pre>\n\n<p>Fun!</p>\n\n<p>⦂∀</p>","content":"<p>And I wondered how it knew?</p>\n\n<p>Was it psychic?</p>\n\n<p>Were they watching me, right now, outside my office window??</p>\n\n<p>No, its just this:</p>\n\n<pre><code>name=$(git config user.name 2&gt;/dev/null)\n${name:-\"${USER:-$(id | sed -e 's/^[^(]*(//' -e 's/).*$//')}\"}\n</code></pre>\n\n<p>Fun!</p>\n\n<p>⦂∀</p>","is_current_item":true,"is_root_item":true}]}
date: 2011-06-06
---

Today I was updating rvm and *it said my name*.

<p>And I wondered how it knew?</p>

<p>Was it psychic?</p>

<p>Were they watching me, right now, outside my office window??</p>

<p>No, its just this:</p>

<pre><code>name=$(git config user.name 2&gt;/dev/null)
${name:-"${USER:-$(id | sed -e 's/^[^(]*(//' -e 's/).*$//')}"}
</code></pre>

<p>Fun!</p>

<p>⦂∀</p>
