---
slug: postgres-on-osx-issues
fulldate: Mon Dec 03 2012 15:55:47 GMT-0600 (CST)
tags:
title: Postgres on OSX issues
id: 37135944605
link: http://anthonymcook.com/post/37135944605/postgres-on-osx-issues
raw: {"blog_name":"anthonymcook","id":37135944605,"post_url":"http://anthonymcook.com/post/37135944605/postgres-on-osx-issues","slug":"postgres-on-osx-issues","type":"text","date":"2012-12-03 21:55:47 GMT","timestamp":1354571747,"state":"published","format":"markdown","reblog_key":"MYg8HMuB","tags":[],"short_url":"http://tmblr.co/Z8I8zxYbUOkT","summary":"Postgres on OSX issues","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"Postgres on OSX issues","body":"<p>So I was running into this obnoxious error:</p>\n\n<pre><code>psql: FATAL:  role \"postgres\" does not exist\n</code></pre>\n\n<p>No matter what I did. It basically means that the user is missing. So I had to create the user by hand. First I initialized the database as my current user:</p>\n\n<pre><code>initdb -D /usr/local/pgsql/data\n</code></pre>\n\n<p>And then I made sure the daemon was running:</p>\n\n<pre><code>postgres -D /usr/local/pgsql/data &gt;logfile 2&gt;&amp;1 &amp;\n</code></pre>\n\n<p>Then I opened a postgres terminal:</p>\n\n<pre><code>psql template1\n</code></pre>\n\n<p>And created the postgres user:</p>\n\n<pre><code>create user postgres with password '';\n</code></pre>\n\n<p>Finally, I gave the postgres user superuser privileges so it can create databases and whatever in my development environment.</p>\n\n<pre><code>alter role postgres with superuser;\n</code></pre>\n\n<p>Done!</p>","reblog":{"tree_html":"","comment":"<p>So I was running into this obnoxious error:</p>\n\n<pre><code>psql: FATAL:  role \"postgres\" does not exist\n</code></pre>\n\n<p>No matter what I did. It basically means that the user is missing. So I had to create the user by hand. First I initialized the database as my current user:</p>\n\n<pre><code>initdb -D /usr/local/pgsql/data\n</code></pre>\n\n<p>And then I made sure the daemon was running:</p>\n\n<pre><code>postgres -D /usr/local/pgsql/data >logfile 2>&1 &\n</code></pre>\n\n<p>Then I opened a postgres terminal:</p>\n\n<pre><code>psql template1\n</code></pre>\n\n<p>And created the postgres user:</p>\n\n<pre><code>create user postgres with password '';\n</code></pre>\n\n<p>Finally, I gave the postgres user superuser privileges so it can create databases and whatever in my development environment.</p>\n\n<pre><code>alter role postgres with superuser;\n</code></pre>\n\n<p>Done!</p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"37135944605"},"content_raw":"<p>So I was running into this obnoxious error:</p>\n\n<pre><code>psql: FATAL:  role \"postgres\" does not exist\n</code></pre>\n\n<p>No matter what I did. It basically means that the user is missing. So I had to create the user by hand. First I initialized the database as my current user:</p>\n\n<pre><code>initdb -D /usr/local/pgsql/data\n</code></pre>\n\n<p>And then I made sure the daemon was running:</p>\n\n<pre><code>postgres -D /usr/local/pgsql/data >logfile 2>&1 &\n</code></pre>\n\n<p>Then I opened a postgres terminal:</p>\n\n<pre><code>psql template1\n</code></pre>\n\n<p>And created the postgres user:</p>\n\n<pre><code>create user postgres with password '';\n</code></pre>\n\n<p>Finally, I gave the postgres user superuser privileges so it can create databases and whatever in my development environment.</p>\n\n<pre><code>alter role postgres with superuser;\n</code></pre>\n\n<p>Done!</p>","content":"<p>So I was running into this obnoxious error:</p>\n\n<pre><code>psql: FATAL:  role \"postgres\" does not exist\n</code></pre>\n\n<p>No matter what I did. It basically means that the user is missing. So I had to create the user by hand. First I initialized the database as my current user:</p>\n\n<pre><code>initdb -D /usr/local/pgsql/data\n</code></pre>\n\n<p>And then I made sure the daemon was running:</p>\n\n<pre><code>postgres -D /usr/local/pgsql/data &gt;logfile 2&gt;&amp;1 &amp;\n</code></pre>\n\n<p>Then I opened a postgres terminal:</p>\n\n<pre><code>psql template1\n</code></pre>\n\n<p>And created the postgres user:</p>\n\n<pre><code>create user postgres with password '';\n</code></pre>\n\n<p>Finally, I gave the postgres user superuser privileges so it can create databases and whatever in my development environment.</p>\n\n<pre><code>alter role postgres with superuser;\n</code></pre>\n\n<p>Done!</p>","is_current_item":true,"is_root_item":true}]}
date: 2012-12-03
---


<p>So I was running into this obnoxious error:</p>

<pre><code>psql: FATAL:  role "postgres" does not exist
</code></pre>

<p>No matter what I did. It basically means that the user is missing. So I had to create the user by hand. First I initialized the database as my current user:</p>

<pre><code>initdb -D /usr/local/pgsql/data
</code></pre>

<p>And then I made sure the daemon was running:</p>

<pre><code>postgres -D /usr/local/pgsql/data &gt;logfile 2&gt;&amp;1 &amp;
</code></pre>

<p>Then I opened a postgres terminal:</p>

<pre><code>psql template1
</code></pre>

<p>And created the postgres user:</p>

<pre><code>create user postgres with password '';
</code></pre>

<p>Finally, I gave the postgres user superuser privileges so it can create databases and whatever in my development environment.</p>

<pre><code>alter role postgres with superuser;
</code></pre>

<p>Done!</p>
