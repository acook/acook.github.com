---
slug: semantic-web-css-and-css-file-structure
fulldate: Thu Apr 07 2011 13:20:35 GMT-0500 (CDT)
tags:
title: Semantic CSS Strategies
id: 4419653784
link: http://anthonymcook.com/post/4419653784/semantic-web-css-and-css-file-structure
raw: {"blog_name":"anthonymcook","id":4419653784,"post_url":"http://anthonymcook.com/post/4419653784/semantic-web-css-and-css-file-structure","slug":"semantic-web-css-and-css-file-structure","type":"text","date":"2011-04-07 18:20:35 GMT","timestamp":1302200435,"state":"published","format":"markdown","reblog_key":"voXNMcWq","tags":[],"short_url":"http://tmblr.co/Z8I8zx47Rf2O","summary":"Semantic web CSS and CSS file structure","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"Semantic web CSS and CSS file structure","body":"<h1>Testing</h1>\n\n<ul><li>this: has_classes [:payment, :error]</li>\n<li>instead of: /This is a payment error/</li>\n<li>good for: functionals AND cucumbers</li>\n<li>CSS like: div.payment.error</li>\n<li>instead of: div.payment-error</li>\n<li>element contains <something></something></li>\n<li>many tests could be functionals which run <em>much</em> faster, rather than cucumbers</li>\n<li>cucumbers are domain specific for flows and user stories, not for seeing if the application is functional</li>\n</ul><h1>CSS structure 1</h1>\n\n<ul><li>application.sass: variables and includes</li>\n<li>layout.sass: height, width, border-width, margins, padding, float, etc</li>\n<li>color.sass: color, background-color, background-image, border-color, etc</li>\n<li>font.sass: font-family, font-size, font-weight, etc</li>\n<li>effects.sass: webkit and css3 shadows and crap</li>\n<li>pros:\n&ndash; colors, font, and layout will change independantly\n&ndash; elements with large amounts of styles tend to lack any sort of internal order\n&ndash; quick and easy to combine into a single file using SASS include\n&ndash; easier to maintain internal structure</li>\n<li>cons:\n&ndash; an element may have up to 4 entries (layout, color, fonts, and effects)</li>\n</ul><h1>CSS structure 2</h1>\n\n<ul><li>global.sass</li>\n<li>account_index.sass</li>\n<li>order_payment.sass</li>\n<li>etc.. </li>\n<li>pros:\n&ndash; trivial to find the file you need </li>\n<li>cons:\n&ndash; potential for a lot of duplication, even using a global.sass\n&ndash; the need to include every file, every time, and remembering to do that\n&ndash; low visibility to how your styles can effect different pages</li>\n</ul>","reblog":{"tree_html":"","comment":"<p><h1>Testing</h1>\n\n<ul><li>this: has_classes [:payment, :error]</li>\n<li>instead of: /This is a payment error/</li>\n<li>good for: functionals AND cucumbers</li>\n<li>CSS like: div.payment.error</li>\n<li>instead of: div.payment-error</li>\n<li>element contains <something></something></li>\n<li>many tests could be functionals which run <em>much</em> faster, rather than cucumbers</li>\n<li>cucumbers are domain specific for flows and user stories, not for seeing if the application is functional</li>\n</ul><h1>CSS structure 1</h1>\n\n<ul><li>application.sass: variables and includes</li>\n<li>layout.sass: height, width, border-width, margins, padding, float, etc</li>\n<li>color.sass: color, background-color, background-image, border-color, etc</li>\n<li>font.sass: font-family, font-size, font-weight, etc</li>\n<li>effects.sass: webkit and css3 shadows and crap</li>\n<li>pros:\n– colors, font, and layout will change independantly\n– elements with large amounts of styles tend to lack any sort of internal order\n– quick and easy to combine into a single file using SASS include\n– easier to maintain internal structure</li>\n<li>cons:\n– an element may have up to 4 entries (layout, color, fonts, and effects)</li>\n</ul><h1>CSS structure 2</h1>\n\n<ul><li>global.sass</li>\n<li>account_index.sass</li>\n<li>order_payment.sass</li>\n<li>etc.. </li>\n<li>pros:\n– trivial to find the file you need </li>\n<li>cons:\n– potential for a lot of duplication, even using a global.sass\n– the need to include every file, every time, and remembering to do that\n– low visibility to how your styles can effect different pages</li>\n</ul></p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"4419653784"},"content_raw":"<p><h1>Testing</h1>\n\n<ul><li>this: has_classes [:payment, :error]</li>\n<li>instead of: /This is a payment error/</li>\n<li>good for: functionals AND cucumbers</li>\n<li>CSS like: div.payment.error</li>\n<li>instead of: div.payment-error</li>\n<li>element contains <something></something></li>\n<li>many tests could be functionals which run <em>much</em> faster, rather than cucumbers</li>\n<li>cucumbers are domain specific for flows and user stories, not for seeing if the application is functional</li>\n</ul><h1>CSS structure 1</h1>\n\n<ul><li>application.sass: variables and includes</li>\n<li>layout.sass: height, width, border-width, margins, padding, float, etc</li>\n<li>color.sass: color, background-color, background-image, border-color, etc</li>\n<li>font.sass: font-family, font-size, font-weight, etc</li>\n<li>effects.sass: webkit and css3 shadows and crap</li>\n<li>pros:\n– colors, font, and layout will change independantly\n– elements with large amounts of styles tend to lack any sort of internal order\n– quick and easy to combine into a single file using SASS include\n– easier to maintain internal structure</li>\n<li>cons:\n– an element may have up to 4 entries (layout, color, fonts, and effects)</li>\n</ul><h1>CSS structure 2</h1>\n\n<ul><li>global.sass</li>\n<li>account_index.sass</li>\n<li>order_payment.sass</li>\n<li>etc.. </li>\n<li>pros:\n– trivial to find the file you need </li>\n<li>cons:\n– potential for a lot of duplication, even using a global.sass\n– the need to include every file, every time, and remembering to do that\n– low visibility to how your styles can effect different pages</li>\n</ul></p>","content":"<p><h1>Testing</h1>\n\n<ul><li>this: has_classes [:payment, :error]</li>\n<li>instead of: /This is a payment error/</li>\n<li>good for: functionals AND cucumbers</li>\n<li>CSS like: div.payment.error</li>\n<li>instead of: div.payment-error</li>\n<li>element contains </li>\n<li>many tests could be functionals which run <em>much</em> faster, rather than cucumbers</li>\n<li>cucumbers are domain specific for flows and user stories, not for seeing if the application is functional</li>\n</ul><h1>CSS structure 1</h1>\n\n<ul><li>application.sass: variables and includes</li>\n<li>layout.sass: height, width, border-width, margins, padding, float, etc</li>\n<li>color.sass: color, background-color, background-image, border-color, etc</li>\n<li>font.sass: font-family, font-size, font-weight, etc</li>\n<li>effects.sass: webkit and css3 shadows and crap</li>\n<li>pros:\n– colors, font, and layout will change independantly\n– elements with large amounts of styles tend to lack any sort of internal order\n– quick and easy to combine into a single file using SASS include\n– easier to maintain internal structure</li>\n<li>cons:\n– an element may have up to 4 entries (layout, color, fonts, and effects)</li>\n</ul><h1>CSS structure 2</h1>\n\n<ul><li>global.sass</li>\n<li>account_index.sass</li>\n<li>order_payment.sass</li>\n<li>etc.. </li>\n<li>pros:\n– trivial to find the file you need </li>\n<li>cons:\n– potential for a lot of duplication, even using a global.sass\n– the need to include every file, every time, and remembering to do that\n– low visibility to how your styles can effect different pages</li>\n</ul></p>","is_current_item":true,"is_root_item":true}]}
date: 2011-04-07
---


<h1>Testing</h1>

<ul><li>this: has_classes [:payment, :error]</li>
<li>instead of: /This is a payment error/</li>
<li>good for: functionals AND cucumbers</li>
<li>CSS like: div.payment.error</li>
<li>instead of: div.payment-error</li>
<li>element contains <something></something></li>
<li>many tests could be functionals which run <em>much</em> faster, rather than cucumbers</li>
<li>cucumbers are domain specific for flows and user stories, not for seeing if the application is functional</li>
</ul><h1>CSS structure 1</h1>

<ul><li>application.sass: variables and includes</li>
<li>layout.sass: height, width, border-width, margins, padding, float, etc</li>
<li>color.sass: color, background-color, background-image, border-color, etc</li>
<li>font.sass: font-family, font-size, font-weight, etc</li>
<li>effects.sass: webkit and css3 shadows and crap</li>
<li>pros:
&ndash; colors, font, and layout will change independantly
&ndash; elements with large amounts of styles tend to lack any sort of internal order
&ndash; quick and easy to combine into a single file using SASS include
&ndash; easier to maintain internal structure</li>
<li>cons:
&ndash; an element may have up to 4 entries (layout, color, fonts, and effects)</li>
</ul><h1>CSS structure 2</h1>

<ul><li>global.sass</li>
<li>account_index.sass</li>
<li>order_payment.sass</li>
<li>etc.. </li>
<li>pros:
&ndash; trivial to find the file you need </li>
<li>cons:
&ndash; potential for a lot of duplication, even using a global.sass
&ndash; the need to include every file, every time, and remembering to do that
&ndash; low visibility to how your styles can effect different pages</li>
</ul>