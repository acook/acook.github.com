---
slug: rails-webserver-research
fulldate: Sat Mar 19 2011 19:49:00 GMT-0500 (CDT)
tags:
  - unicorn
  - ruby
  - rails
  - passenger
  - thin
  - apache
  - nginx
  - benchmarking
title: Rails webserver research
id: 3971165754
link: http://anthonymcook.com/post/3971165754/rails-webserver-research
date: 2011-03-19
---


<h1>Summary</h1>

<ul><li><a href="http://unicorn.bogomips.org/" target="_blank">Unicorn</a>&rsquo;s deployment strategy is superior to Passenger&rsquo;s, it allows upgrades of application code and even of the Unicorn binary itself without downtime. Oh yeah, and its also faster and uses less memory than passenger.</li>
<li><a href="http://nginx.org/" target="_blank">Nninx</a> seems to be easier to configure and its purported to be faster and use less memory than apache.</li>
</ul><h1>Side notes</h1>

<ul><li><a href="http://code.macournoyer.com/thin/" target="_blank">Thin</a> is great for serving up tiny, fast requests, and has better memory usage than anything else.</li>
<li><a href="http://www.modrails.com/" target="_blank">Passenger</a> has some cases where it may periodically respond to some requests when its overloaded.</li>
</ul><h2>Server Benchmarking</h2>

<ul><li><a href="http://code.google.com/p/httperf/" target="_blank">httperf</a></li>
<li><a href="http://www.xenoclast.org/autobench/" target="_blank">autobench</a> is a perl wrapper for httperf that adds features.</li>
<li><a href="http://openwebload.sourceforge.net/" target="_blank">OpenWebLoad</a></li>
<li><a href="http://httpd.apache.org/docs/2.0/programs/ab.html" target="_blank">apachebench</a></li>
<li><a href="http://loadimpact.com/" target="_blank">LoadImpact</a> is a pay-for service for testing servers.</li>
</ul><h1>References</h1>

<h2>Setup Guide for nginx and Unicorn</h2>

<ul><li>2010: <a href="http://techbot.me/2010/08/deployment-recipes-deploying-monitoring-and-securing-your-rails-application-to-a-clean-ubuntu-10-04-install-using-nginx-and-unicorn/" target="_blank">http://techbot.me/2010/08/deployment-recipes-deploying-monitoring-and-securing-your-rails-application-to-a-clean-ubuntu-10-04-install-using-nginx-and-unicorn/</a></li>
<li>2011: <a href="http://brandontilley.com/2011/01/29/serving-rails-apps-with-rvm-nginx-unicorn-and-upstart.html" target="_blank">http://brandontilley.com/2011/01/29/serving-rails-apps-with-rvm-nginx-unicorn-and-upstart.html</a></li>
</ul><h2>Passenger, Thin, Unicorn</h2>

<ul><li>2009: <a href="https://github.com/blog/517-unicorn" target="_blank">https://github.com/blog/517-unicorn</a></li>
<li>2010: <a href="http://snaprails.tumblr.com/post/489274578/ruby-web-servers-benchmark" target="_blank">http://snaprails.tumblr.com/post/489274578/ruby-web-servers-benchmark</a></li>
<li>2010: <a href="http://engineering.twitter.com/2010/03/unicorn-power.html" target="_blank">http://engineering.twitter.com/2010/03/unicorn-power.html</a></li>
</ul><h2>Info on Unicorn</h2>

<ul><li>2010: <a href="http://www.engineyard.com/blog/2010/everything-you-need-to-know-about-unicorn/" target="_blank">http://www.engineyard.com/blog/2010/everything-you-need-to-know-about-unicorn/</a></li>
</ul><h2>Info on Passenger (note the nginx graph)</h2>

<ul><li>2010: <a href="http://blog.phusion.nl/2010/10/18/phusion-passenger-3-0-0-final-released/" target="_blank">http://blog.phusion.nl/2010/10/18/phusion-passenger-3-0-0-final-released/</a></li>
</ul><h2>Web servers</h2>

<ul><li>2011: <a href="http://xenforo.com/community/threads/apache-vs-nginx-vs-lighttpd.12484/" target="_blank">http://xenforo.com/community/threads/apache-vs-nginx-vs-lighttpd.12484/</a></li>
<li>2010: <a href="http://www.mariusv.com/nginx-vs-apache-1-0/" target="_blank">http://www.mariusv.com/nginx-vs-apache-1-0/</a></li>
<li>2010: <a href="http://serverfault.com/questions/143238/nginx-vs-apache-as-reverse-proxy-which-one-to-choose" target="_blank">http://serverfault.com/questions/143238/nginx-vs-apache-as-reverse-proxy-which-one-to-choose</a></li>
<li>2010: <a href="http://stackoverflow.com/questions/475386/apache-vs-nginx-vs-lighttpd-which-is-simpler-to-configure-and-administer" target="_blank">http://stackoverflow.com/questions/475386/apache-vs-nginx-vs-lighttpd-which-is-simpler-to-configure-and-administer</a></li>
</ul><h2>Popular services&rsquo; server choices</h2>

<ul><li><a href="http://engineering.twitter.com/2010/03/unicorn-power.html" target="_blank">Twitter uses Apache with Unicorn</a>.</li>
<li><a href="https://github.com/blog/517-unicorn" target="_blank">GitHub uses nginx with Unicorn</a>.</li>
</ul><h1>More Cool Stuff</h1>

<h2>JRuby vs Ruby</h2>

<ul><li>2011: <a href="http://torquebox.org/news/2011/02/23/benchmarking-torquebox/" target="_blank">http://torquebox.org/news/2011/02/23/benchmarking-torquebox/</a></li>
<li>2011: <a href="http://torquebox.org/news/2011/03/14/benchmarking-torquebox-round2/" target="_blank">http://torquebox.org/news/2011/03/14/benchmarking-torquebox-round2/</a></li>
<li>It&rsquo;s worth pointing out that Unicorn comes out ahead of the other non-JRuby servers in all the benchmarks that are anywhere near a real-world situation.</li>
</ul><h2>Passenger in development</h2>

<ul><li>2010: <a href="http://blog.phusion.nl/2010/07/01/the-road-to-passenger-3-technology-preview-3-closing-the-gap-between-development-and-production-rethinking-the-word-easy/" target="_blank">http://blog.phusion.nl/2010/07/01/the-road-to-passenger-3-technology-preview-3-closing-the-gap-between-development-and-production-rethinking-the-word-easy/</a></li>
</ul><h2>Twitter uses MySQL for storing Tweets, and Cassandra for statistics and datamining</h2>

<ul><li>2010: <a href="http://engineering.twitter.com/2010/07/cassandra-at-twitter-today.html" target="_blank">http://engineering.twitter.com/2010/07/cassandra-at-twitter-today.html</a></li>
</ul>
