---
slug: getting-more-information-about-ruby-objects
fulldate: Fri Sep 02 2011 17:36:00 GMT-0500 (CDT)
tags:
title: deep inspect
id: 9721212416
link: http://anthonymcook.com/post/9721212416/getting-more-information-about-ruby-objects
raw: {"blog_name":"anthonymcook","id":9721212416,"post_url":"http://anthonymcook.com/post/9721212416/getting-more-information-about-ruby-objects","slug":"getting-more-information-about-ruby-objects","type":"text","date":"2011-09-02 22:36:00 GMT","timestamp":1315002960,"state":"published","format":"markdown","reblog_key":"liBNWvJ3","tags":[],"short_url":"http://tmblr.co/Z8I8zx93RUu0","summary":"Getting more information about Ruby Objects","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"Getting more information about Ruby Objects","body":"<p>Been working a good chunk of the day with analyzing Ruby objects in <a href=\"http://pry.github.com/\" target=\"_blank\">Pry</a>, and realized I needed more information. So I wrote a module that can be included on <a href=\"http://apidock.com/ruby/Object\" target=\"_blank\">Object</a> that recursively inspects the internal structure of objects.</p>\n\n<p><img src=\"http://33.media.tumblr.com/tumblr_lqx2hbiDXg1qetbyr.png\" alt=\"Output of RSpec::Rails.contents\"/></p>\n\n<p>Output of <code>RSpec::Rails.contents</code> above. I&rsquo;ve since renamed the method, but the output is very similar.</p>\n\n<p>Take a look at the <a href=\"https://gist.github.com/1190081\" target=\"_blank\">code up on Gist</a>.</p>\n\n<p>⦂∀</p>","reblog":{"tree_html":"","comment":"<p>Been working a good chunk of the day with analyzing Ruby objects in <a href=\"http://pry.github.com/\" target=\"_blank\">Pry</a>, and realized I needed more information. So I wrote a module that can be included on <a href=\"http://apidock.com/ruby/Object\" target=\"_blank\">Object</a> that recursively inspects the internal structure of objects.</p>\n\n<p><img src=\"http://33.media.tumblr.com/tumblr_lqx2hbiDXg1qetbyr.png\" alt=\"Output of RSpec::Rails.contents\"></p>\n\n<p>Output of <code>RSpec::Rails.contents</code> above. I’ve since renamed the method, but the output is very similar.</p>\n\n<p>Take a look at the <a href=\"https://gist.github.com/1190081\" target=\"_blank\">code up on Gist</a>.</p>\n\n<p>⦂∀</p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"9721212416"},"content_raw":"<p>Been working a good chunk of the day with analyzing Ruby objects in <a href=\"http://pry.github.com/\" target=\"_blank\">Pry</a>, and realized I needed more information. So I wrote a module that can be included on <a href=\"http://apidock.com/ruby/Object\" target=\"_blank\">Object</a> that recursively inspects the internal structure of objects.</p>\n\n<p><img src=\"http://33.media.tumblr.com/tumblr_lqx2hbiDXg1qetbyr.png\" alt=\"Output of RSpec::Rails.contents\"></p>\n\n<p>Output of <code>RSpec::Rails.contents</code> above. I’ve since renamed the method, but the output is very similar.</p>\n\n<p>Take a look at the <a href=\"https://gist.github.com/1190081\" target=\"_blank\">code up on Gist</a>.</p>\n\n<p>⦂∀</p>","content":"<p>Been working a good chunk of the day with analyzing Ruby objects in <a href=\"http://pry.github.com/\" target=\"_blank\">Pry</a>, and realized I needed more information. So I wrote a module that can be included on <a href=\"http://apidock.com/ruby/Object\" target=\"_blank\">Object</a> that recursively inspects the internal structure of objects.</p>\n\n<p><img src=\"http://33.media.tumblr.com/tumblr_lqx2hbiDXg1qetbyr.png\" class=\"toggle_inline_image inline_image constrained_image\"/></p>\n\n<p>Output of <code>RSpec::Rails.contents</code> above. I’ve since renamed the method, but the output is very similar.</p>\n\n<p>Take a look at the <a href=\"https://gist.github.com/1190081\" target=\"_blank\">code up on Gist</a>.</p>\n\n<p>⦂∀</p>","is_current_item":true,"is_root_item":true}]}
date: 2011-09-02
---


<p>Been working a good chunk of the day with analyzing Ruby objects in <a href="http://pry.github.com/" target="_blank">Pry</a>, and realized I needed more information. So I wrote a module that can be included on <a href="http://apidock.com/ruby/Object" target="_blank">Object</a> that recursively inspects the internal structure of objects.</p>

<p><img src="http://33.media.tumblr.com/tumblr_lqx2hbiDXg1qetbyr.png" alt="Output of RSpec::Rails.contents"/></p>

<p>Output of <code>RSpec::Rails.contents</code> above. I&rsquo;ve since renamed the method, but the output is very similar.</p>

<p>Take a look at the <a href="https://gist.github.com/1190081" target="_blank">code up on Gist</a>.</p>

<aside class="url">
<a href="https://gist.github.com/1190081" target="_blank">
<div>gist.github.com</div>
introspection
</a>
</aside>

<p>⦂∀</p>
