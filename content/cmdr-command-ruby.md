---
slug: cmdr-command-ruby
fulldate: Wed Aug 24 2011 03:15:00 GMT-0500 (CDT)
title: "CMDR"
id: 9328077885
link: http://anthonymcook.com/post/9328077885/cmdr-command-ruby
raw: {"blog_name":"anthonymcook","id":9328077885,"post_url":"http://anthonymcook.com/post/9328077885/cmdr-command-ruby","slug":"cmdr-command-ruby","type":"text","date":"2011-08-24 08:15:00 GMT","timestamp":1314173700,"state":"published","format":"markdown","reblog_key":"dXsQgcvz","tags":[],"short_url":"http://tmblr.co/Z8I8zx8h-omz","summary":"CMDR: Command Ruby","recommended_source":null,"recommended_color":null,"highlighted":[],"note_count":0,"title":"CMDR: Command Ruby","body":"<p>This is just an idea, its not even a &ldquo;thing&rdquo; yet, but here&rsquo;s some of the ideas that have been stewing in my skull for some time now.</p>\n\n<h2>Hasn&rsquo;t this been done before?</h2>\n\n<p>Before even glancing at this project, check out <a href=\"https://github.com/pry/pry\" target=\"_blank\">Pry</a>, <a href=\"https://github.com/hayeah/rubish\" target=\"_blank\">Rubbish</a>, and <a href=\"http://rush.heroku.com/\" target=\"_blank\">Rush</a>. They&rsquo;re all complete, functional, and probably do what I&rsquo;m going to do here a lot better. Pry in particular in incredible. For the moment I have rather different goals though.</p>\n\n<h2>Rather Different Goals?</h2>\n\n<p>So here&rsquo;s the deal, years ago I read about the new fancy-shmancy <a href=\"http://en.wikipedia.org/wiki/Windows_PowerShell\" title=\"Yes I still call it Monad because it was an awesome name, dammit!\" target=\"_blank\">Monad</a>. It&rsquo;s goal, as I understood it boiled down to <em>commands as objects</em>. It was a fantastc concept. Naturally, as it has with many things, Microsoft failed to deliver (at least in my opinion, but looking at some of the Windows 8 Server tools might change that..).</p>\n\n<p>And again, as it often does, the <a href=\"http://en.wikipedia.org/wiki/Oberon_(programming_language)\" title=\"AKA: The most badass shit no one has heard of.\" target=\"_blank\">Oberon</a> system did it first and better. I actually used the Oberon OS long before Monad was even thought of, but Monad is a more visible example.</p>\n\n<p>In both cases they assumed the underlying system was also an object system and then gave you immense power over those elements, accessible from the commandline just like a standard shell. Currently, I&rsquo;m not working on my own operating system (yet) so I have so such luxury. However, unixy systems such as Linux, OS X, BSD, Hurd, and others provide a lot of process-level information and documentation that is exceedingly simple to access and parse (once you know where to look..).</p>\n\n<h2>Are you getting the point any time soon?</h2>\n\n<p>I&rsquo;d like to encapsulate commands and external processes as objects and replace most built-in bash commands with more object-oriented (and prettier) versions.\nReally not that complex at its most basic, but believe me, it&rsquo;ll get complicated fast. See below for some examples of the shiny functionality I&rsquo;d like it to have.</p>\n\n<h2>Fine, I can&rsquo;t endorse this endevour, but I am curious what it looks like.</h2>\n\n<p>Alright, well met me give you a couple of examples of what I&rsquo;d like to be able to do with cmdr.\n<em>this is all pseudocode at the moment</em></p>\n\n<ul><li><p>Commands are persistant objects that retain attributes <em>(yes this could get huge, there will be limits, don&rsquo;t worry)</em></p>\n\n<pre><code>$ ls\n.git/  README.markdown\n$ hist\n1 ls &lt;succeded a few seconds ago&gt;\n$ hist.raw\n[\n    #&lt;Cmdr&gt;,\n    {command: 'ls', output: [#&lt;Cmdr::Output::Stdout: \".git/  README.markdown\"&gt;], status: #&lt;Cmdr::Status::External::Process: pid 82960 exit 0&gt;, type: External, start_time: 011-08-24 00:27:59 -0700, exit_time: 011-08-24 00:27:59 -0700},\n    {command: 'hist', output: [#&lt;Cmdr::CommandHistory&gt;], status: Success, type: Internal, start_time: 011-08-24 00:28:02 -0700, exit_time: 011-08-24 00:28:03 -0700},\n    {command: 'hist.raw', output: [], status: Running, type: Internal, start_time: 011-08-24 00:28:05 -0700, exit_time: nil}\n]\n$ cmdhist[1].output\n.git/  README.markdown\n</code></pre></li>\n<li><p>Robust directory history</p>\n\n<pre><code>$ cd ~\n$ cd /\n$ cd.hist\npwd /\n1   ~\n2   /home/acook/pork/cmdr\n$ back\n~\n$ pwd\n/home/acook\n$ cd.hist\n0   /\npwd ~\n1   ~\n2   /home/acook/pork/cmdr\n$ fore\n/\n$ pwd\n/\n</code></pre></li>\n<li><p>Easily overridable default command options <em>(much like what aliases are often used for in bash)</em></p>\n\n<pre><code>$ ls.opts.defaults &lt;&lt; '1'\n$ ls\n.git/\nREADME.markdown\n$ ls.opts.only :b\n.git/  README.markdown\n</code></pre></li>\n<li><p>Session environment persistance</p>\n\n<pre><code>$ x = 1\nx = 1\n$ ls\n.git/  README.markdown\n$ exit                    # exit cmdr\nsh-3.2$ cmdr              # rerun cmdr from sh\ncmdr v0.1\n$ hist\n1 x = 1 &lt;succeeded about a minute ago&gt;\n2 ls    &lt;succeeded less than a minute ago&gt;\n3 exit  &lt;succedded less than a minute ago&gt;\n$ x\n=&gt; 1\n</code></pre></li>\n</ul><h2>Who came up with this harebrained idea anyway?</h2>\n\n<p><strong>Anthony M. Cook</strong> <em>2011</em> - @anthony_m_cook / <a href=\"http://anthonymcook.com\" target=\"_blank\">http://anthonymcook.com</a> / <a href=\"http://github.com/acook\" target=\"_blank\">http://github.com/acook</a></p>","reblog":{"tree_html":"","comment":"<p>This is just an idea, its not even a “thing” yet, but here’s some of the ideas that have been stewing in my skull for some time now.</p>\n\n<h2>Hasn’t this been done before?</h2>\n\n<p>Before even glancing at this project, check out <a href=\"https://github.com/pry/pry\" target=\"_blank\">Pry</a>, <a href=\"https://github.com/hayeah/rubish\" target=\"_blank\">Rubbish</a>, and <a href=\"http://rush.heroku.com/\" target=\"_blank\">Rush</a>. They’re all complete, functional, and probably do what I’m going to do here a lot better. Pry in particular in incredible. For the moment I have rather different goals though.</p>\n\n<h2>Rather Different Goals?</h2>\n\n<p>So here’s the deal, years ago I read about the new fancy-shmancy <a href=\"http://en.wikipedia.org/wiki/Windows_PowerShell\" title=\"Yes I still call it Monad because it was an awesome name, dammit!\" target=\"_blank\">Monad</a>. It’s goal, as I understood it boiled down to <em>commands as objects</em>. It was a fantastc concept. Naturally, as it has with many things, Microsoft failed to deliver (at least in my opinion, but looking at some of the Windows 8 Server tools might change that..).</p>\n\n<p>And again, as it often does, the <a href=\"http://en.wikipedia.org/wiki/Oberon_(programming_language)\" title=\"AKA: The most badass shit no one has heard of.\" target=\"_blank\">Oberon</a> system did it first and better. I actually used the Oberon OS long before Monad was even thought of, but Monad is a more visible example.</p>\n\n<p>In both cases they assumed the underlying system was also an object system and then gave you immense power over those elements, accessible from the commandline just like a standard shell. Currently, I’m not working on my own operating system (yet) so I have so such luxury. However, unixy systems such as Linux, OS X, BSD, Hurd, and others provide a lot of process-level information and documentation that is exceedingly simple to access and parse (once you know where to look..).</p>\n\n<h2>Are you getting the point any time soon?</h2>\n\n<p>I’d like to encapsulate commands and external processes as objects and replace most built-in bash commands with more object-oriented (and prettier) versions.\nReally not that complex at its most basic, but believe me, it’ll get complicated fast. See below for some examples of the shiny functionality I’d like it to have.</p>\n\n<h2>Fine, I can’t endorse this endevour, but I am curious what it looks like.</h2>\n\n<p>Alright, well met me give you a couple of examples of what I’d like to be able to do with cmdr.\n<em>this is all pseudocode at the moment</em></p>\n\n<ul><li><p>Commands are persistant objects that retain attributes <em>(yes this could get huge, there will be limits, don’t worry)</em></p>\n\n<pre><code>$ ls\n.git/  README.markdown\n$ hist\n1 ls &lt;succeded a few seconds ago&gt;\n$ hist.raw\n[\n    #&lt;Cmdr&gt;,\n    {command: 'ls', output: [#&lt;Cmdr::Output::Stdout: \".git/  README.markdown\"&gt;], status: #&lt;Cmdr::Status::External::Process: pid 82960 exit 0&gt;, type: External, start_time: 011-08-24 00:27:59 -0700, exit_time: 011-08-24 00:27:59 -0700},\n    {command: 'hist', output: [#&lt;Cmdr::CommandHistory&gt;], status: Success, type: Internal, start_time: 011-08-24 00:28:02 -0700, exit_time: 011-08-24 00:28:03 -0700},\n    {command: 'hist.raw', output: [], status: Running, type: Internal, start_time: 011-08-24 00:28:05 -0700, exit_time: nil}\n]\n$ cmdhist[1].output\n.git/  README.markdown\n</code></pre></li>\n<li><p>Robust directory history</p>\n\n<pre><code>$ cd ~\n$ cd /\n$ cd.hist\npwd /\n1   ~\n2   /home/acook/pork/cmdr\n$ back\n~\n$ pwd\n/home/acook\n$ cd.hist\n0   /\npwd ~\n1   ~\n2   /home/acook/pork/cmdr\n$ fore\n/\n$ pwd\n/\n</code></pre></li>\n<li><p>Easily overridable default command options <em>(much like what aliases are often used for in bash)</em></p>\n\n<pre><code>$ ls.opts.defaults &lt;&lt; '1'\n$ ls\n.git/\nREADME.markdown\n$ ls.opts.only :b\n.git/  README.markdown\n</code></pre></li>\n<li><p>Session environment persistance</p>\n\n<pre><code>$ x = 1\nx = 1\n$ ls\n.git/  README.markdown\n$ exit                    # exit cmdr\nsh-3.2$ cmdr              # rerun cmdr from sh\ncmdr v0.1\n$ hist\n1 x = 1 &lt;succeeded about a minute ago&gt;\n2 ls    &lt;succeeded less than a minute ago&gt;\n3 exit  &lt;succedded less than a minute ago&gt;\n$ x\n=&gt; 1\n</code></pre></li>\n</ul><h2>Who came up with this harebrained idea anyway?</h2>\n\n<p><strong>Anthony M. Cook</strong> <em>2011</em> - @anthony_m_cook / <a href=\"http://anthonymcook.com\" target=\"_blank\">http://anthonymcook.com</a> / <a href=\"http://github.com/acook\" target=\"_blank\">http://github.com/acook</a></p>"},"trail":[{"blog":{"name":"anthonymcook","active":true,"theme":{"avatar_shape":"circle","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_focused":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_image_scaled":"https://secure.assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"9328077885"},"content_raw":"<p>This is just an idea, its not even a “thing” yet, but here’s some of the ideas that have been stewing in my skull for some time now.</p>\n\n<h2>Hasn’t this been done before?</h2>\n\n<p>Before even glancing at this project, check out <a href=\"https://github.com/pry/pry\" target=\"_blank\">Pry</a>, <a href=\"https://github.com/hayeah/rubish\" target=\"_blank\">Rubbish</a>, and <a href=\"http://rush.heroku.com/\" target=\"_blank\">Rush</a>. They’re all complete, functional, and probably do what I’m going to do here a lot better. Pry in particular in incredible. For the moment I have rather different goals though.</p>\n\n<h2>Rather Different Goals?</h2>\n\n<p>So here’s the deal, years ago I read about the new fancy-shmancy <a href=\"http://en.wikipedia.org/wiki/Windows_PowerShell\" title=\"Yes I still call it Monad because it was an awesome name, dammit!\" target=\"_blank\">Monad</a>. It’s goal, as I understood it boiled down to <em>commands as objects</em>. It was a fantastc concept. Naturally, as it has with many things, Microsoft failed to deliver (at least in my opinion, but looking at some of the Windows 8 Server tools might change that..).</p>\n\n<p>And again, as it often does, the <a href=\"http://en.wikipedia.org/wiki/Oberon_(programming_language)\" title=\"AKA: The most badass shit no one has heard of.\" target=\"_blank\">Oberon</a> system did it first and better. I actually used the Oberon OS long before Monad was even thought of, but Monad is a more visible example.</p>\n\n<p>In both cases they assumed the underlying system was also an object system and then gave you immense power over those elements, accessible from the commandline just like a standard shell. Currently, I’m not working on my own operating system (yet) so I have so such luxury. However, unixy systems such as Linux, OS X, BSD, Hurd, and others provide a lot of process-level information and documentation that is exceedingly simple to access and parse (once you know where to look..).</p>\n\n<h2>Are you getting the point any time soon?</h2>\n\n<p>I’d like to encapsulate commands and external processes as objects and replace most built-in bash commands with more object-oriented (and prettier) versions.\nReally not that complex at its most basic, but believe me, it’ll get complicated fast. See below for some examples of the shiny functionality I’d like it to have.</p>\n\n<h2>Fine, I can’t endorse this endevour, but I am curious what it looks like.</h2>\n\n<p>Alright, well met me give you a couple of examples of what I’d like to be able to do with cmdr.\n<em>this is all pseudocode at the moment</em></p>\n\n<ul><li><p>Commands are persistant objects that retain attributes <em>(yes this could get huge, there will be limits, don’t worry)</em></p>\n\n<pre><code>$ ls\n.git/  README.markdown\n$ hist\n1 ls &lt;succeded a few seconds ago&gt;\n$ hist.raw\n[\n    #&lt;Cmdr&gt;,\n    {command: 'ls', output: [#&lt;Cmdr::Output::Stdout: \".git/  README.markdown\"&gt;], status: #&lt;Cmdr::Status::External::Process: pid 82960 exit 0&gt;, type: External, start_time: 011-08-24 00:27:59 -0700, exit_time: 011-08-24 00:27:59 -0700},\n    {command: 'hist', output: [#&lt;Cmdr::CommandHistory&gt;], status: Success, type: Internal, start_time: 011-08-24 00:28:02 -0700, exit_time: 011-08-24 00:28:03 -0700},\n    {command: 'hist.raw', output: [], status: Running, type: Internal, start_time: 011-08-24 00:28:05 -0700, exit_time: nil}\n]\n$ cmdhist[1].output\n.git/  README.markdown\n</code></pre></li>\n<li><p>Robust directory history</p>\n\n<pre><code>$ cd ~\n$ cd /\n$ cd.hist\npwd /\n1   ~\n2   /home/acook/pork/cmdr\n$ back\n~\n$ pwd\n/home/acook\n$ cd.hist\n0   /\npwd ~\n1   ~\n2   /home/acook/pork/cmdr\n$ fore\n/\n$ pwd\n/\n</code></pre></li>\n<li><p>Easily overridable default command options <em>(much like what aliases are often used for in bash)</em></p>\n\n<pre><code>$ ls.opts.defaults &lt;&lt; '1'\n$ ls\n.git/\nREADME.markdown\n$ ls.opts.only :b\n.git/  README.markdown\n</code></pre></li>\n<li><p>Session environment persistance</p>\n\n<pre><code>$ x = 1\nx = 1\n$ ls\n.git/  README.markdown\n$ exit                    # exit cmdr\nsh-3.2$ cmdr              # rerun cmdr from sh\ncmdr v0.1\n$ hist\n1 x = 1 &lt;succeeded about a minute ago&gt;\n2 ls    &lt;succeeded less than a minute ago&gt;\n3 exit  &lt;succedded less than a minute ago&gt;\n$ x\n=&gt; 1\n</code></pre></li>\n</ul><h2>Who came up with this harebrained idea anyway?</h2>\n\n<p><strong>Anthony M. Cook</strong> <em>2011</em> - @anthony_m_cook / <a href=\"http://anthonymcook.com\" target=\"_blank\">http://anthonymcook.com</a> / <a href=\"http://github.com/acook\" target=\"_blank\">http://github.com/acook</a></p>","content":"<p>This is just an idea, its not even a “thing” yet, but here’s some of the ideas that have been stewing in my skull for some time now.</p>\n\n<h2>Hasn’t this been done before?</h2>\n\n<p>Before even glancing at this project, check out <a href=\"https://github.com/pry/pry\" target=\"_blank\">Pry</a>, <a href=\"https://github.com/hayeah/rubish\" target=\"_blank\">Rubbish</a>, and <a href=\"http://rush.heroku.com/\" target=\"_blank\">Rush</a>. They’re all complete, functional, and probably do what I’m going to do here a lot better. Pry in particular in incredible. For the moment I have rather different goals though.</p>\n\n<h2>Rather Different Goals?</h2>\n\n<p>So here’s the deal, years ago I read about the new fancy-shmancy <a href=\"http://en.wikipedia.org/wiki/Windows_PowerShell\" title=\"Yes I still call it Monad because it was an awesome name, dammit!\" target=\"_blank\">Monad</a>. It’s goal, as I understood it boiled down to <em>commands as objects</em>. It was a fantastc concept. Naturally, as it has with many things, Microsoft failed to deliver (at least in my opinion, but looking at some of the Windows 8 Server tools might change that..).</p>\n\n<p>And again, as it often does, the <a href=\"http://en.wikipedia.org/wiki/Oberon_(programming_language)\" title=\"AKA: The most badass shit no one has heard of.\" target=\"_blank\">Oberon</a> system did it first and better. I actually used the Oberon OS long before Monad was even thought of, but Monad is a more visible example.</p>\n\n<p>In both cases they assumed the underlying system was also an object system and then gave you immense power over those elements, accessible from the commandline just like a standard shell. Currently, I’m not working on my own operating system (yet) so I have so such luxury. However, unixy systems such as Linux, OS X, BSD, Hurd, and others provide a lot of process-level information and documentation that is exceedingly simple to access and parse (once you know where to look..).</p>\n\n<h2>Are you getting the point any time soon?</h2>\n\n<p>I’d like to encapsulate commands and external processes as objects and replace most built-in bash commands with more object-oriented (and prettier) versions.\nReally not that complex at its most basic, but believe me, it’ll get complicated fast. See below for some examples of the shiny functionality I’d like it to have.</p>\n\n<h2>Fine, I can’t endorse this endevour, but I am curious what it looks like.</h2>\n\n<p>Alright, well met me give you a couple of examples of what I’d like to be able to do with cmdr.\n<em>this is all pseudocode at the moment</em></p>\n\n<ul><li><p>Commands are persistant objects that retain attributes <em>(yes this could get huge, there will be limits, don’t worry)</em></p>\n\n<pre><code>$ ls\n.git/  README.markdown\n$ hist\n1 ls &lt;succeded a few seconds ago&gt;\n$ hist.raw\n[\n    #&lt;Cmdr&gt;,\n    {command: 'ls', output: [#&lt;Cmdr::Output::Stdout: \".git/  README.markdown\"&gt;], status: #&lt;Cmdr::Status::External::Process: pid 82960 exit 0&gt;, type: External, start_time: 011-08-24 00:27:59 -0700, exit_time: 011-08-24 00:27:59 -0700},\n    {command: 'hist', output: [#&lt;Cmdr::CommandHistory&gt;], status: Success, type: Internal, start_time: 011-08-24 00:28:02 -0700, exit_time: 011-08-24 00:28:03 -0700},\n    {command: 'hist.raw', output: [], status: Running, type: Internal, start_time: 011-08-24 00:28:05 -0700, exit_time: nil}\n]\n$ cmdhist[1].output\n.git/  README.markdown\n</code></pre></li>\n<li><p>Robust directory history</p>\n\n<pre><code>$ cd ~\n$ cd /\n$ cd.hist\npwd /\n1   ~\n2   /home/acook/pork/cmdr\n$ back\n~\n$ pwd\n/home/acook\n$ cd.hist\n0   /\npwd ~\n1   ~\n2   /home/acook/pork/cmdr\n$ fore\n/\n$ pwd\n/\n</code></pre></li>\n<li><p>Easily overridable default command options <em>(much like what aliases are often used for in bash)</em></p>\n\n<pre><code>$ ls.opts.defaults &lt;&lt; '1'\n$ ls\n.git/\nREADME.markdown\n$ ls.opts.only :b\n.git/  README.markdown\n</code></pre></li>\n<li><p>Session environment persistance</p>\n\n<pre><code>$ x = 1\nx = 1\n$ ls\n.git/  README.markdown\n$ exit                    # exit cmdr\nsh-3.2$ cmdr              # rerun cmdr from sh\ncmdr v0.1\n$ hist\n1 x = 1 &lt;succeeded about a minute ago&gt;\n2 ls    &lt;succeeded less than a minute ago&gt;\n3 exit  &lt;succedded less than a minute ago&gt;\n$ x\n=&gt; 1\n</code></pre></li>\n</ul><h2>Who came up with this harebrained idea anyway?</h2>\n\n<p><strong>Anthony M. Cook</strong> <em>2011</em> - @anthony_m_cook / <a href=\"http://anthonymcook.com\" target=\"_blank\">http://anthonymcook.com</a> / <a href=\"http://github.com/acook\" target=\"_blank\">http://github.com/acook</a></p>","is_current_item":true,"is_root_item":true}]}
date: 2011-08-24
---


<aside class="url"><a href=http://github.com/acook/cmdr">
<div>github.com</div>
cmdr
</a></aside>

<aside>
<strong>EDIT:</strong>
<em>This post has been modified from its original form.</em>
</aside>

This is just an idea, its not even a &ldquo;thing&rdquo; yet, but here&rsquo;s some of the ideas that have been stewing in my skull for some time now.

## Prior Art

Before even glancing at this project, check out <a href="https://github.com/pry/pry" target="_blank">Pry</a>,
<a href="https://github.com/hayeah/rubish" target="_blank">Rubbish</a>,
and <a href="https://github.com/adamwiggins/rush" target="_blank">Rush</a>.
Pry in particular in incredible. For the moment I have rather different goals though.

## Background

So here&rsquo;s the deal, years ago I read about the new fancy-shmancy
<a href="http://en.wikipedia.org/wiki/Windows_PowerShell" title="Yes I still call it Monad because it was an awesome name, dammit!" target="_blank">Monad</a>.
Its goal, as I understood it boiled down to <em>commands as objects</em>.
It was a fantastc concept. Naturally, as it has with many things, Microsoft failed to deliver.

And again, as it often does, the <a href="http://en.wikipedia.org/wiki/Oberon_(programming_language)" title="AKA: The most badass shit no one has heard of." target="_blank">Oberon</a> system did it first and better. I actually used the Oberon OS long before Monad was even thought of, but Monad is a more visible example.

In both cases they assumed the underlying system was also an object system and then gave you immense power over those elements, accessible from the commandline just like a standard shell.
At this time of this writing, I am not working on my own operating system so I have no such luxury.
However, unixy systems such as Linux, OS X, BSD, Hurd, and others provide a lot of process-level information and documentation that is exceedingly simple to access and parse. Provided you know where to look.

## The Big Idea

I&rsquo;d like to encapsulate commands and external processes as objects and replace most built-in bash commands with more object-oriented (and prettier) versions.

## Use Cases

Alright, well met me give you a couple of examples of what I&rsquo;d like to be able to do with cmdr.
<em>this is all pseudocode at the moment</em>

### Commands are Persistant Objects

~~~
$ ls
.git/  README.markdown
$ hist
1 ls &lt;succeded a few seconds ago&gt;
$ hist.raw
[
    #&lt;Cmdr&gt;,
    {command: 'ls', output: [#&lt;Cmdr::Output::Stdout: ".git/  README.markdown"&gt;], status: #&lt;Cmdr::Status::External::Process: pid 82960 exit 0&gt;, type: External, start_time: 011-08-24 00:27:59 -0700, exit_time: 011-08-24 00:27:59 -0700},
    {command: 'hist', output: [#&lt;Cmdr::CommandHistory&gt;], status: Success, type: Internal, start_time: 011-08-24 00:28:02 -0700, exit_time: 011-08-24 00:28:03 -0700},
    {command: 'hist.raw', output: [], status: Running, type: Internal, start_time: 011-08-24 00:28:05 -0700, exit_time: nil}
]
$ cmdhist[1].output
.git/  README.markdown
~~~

### Robust Directory History

~~~
$ cd ~
$ cd /
$ cd.hist
pwd /
1   ~
2   /home/acook/pork/cmdr
$ back
~
$ pwd
/home/acook
$ cd.hist
0   /
pwd ~
1   ~
2   /home/acook/pork/cmdr
$ fore
/
$ pwd
/
~~~

### Overridable Default Command Options

Much like what aliases are often used for in bash.

~~~
$ ls.opts.defaults &lt;&lt; '1'
$ ls
.git/
README.markdown
$ ls.opts.only :b
.git/  README.markdown
~~~

### Session environment persistance

~~~
$ x = 1
x = 1
$ ls
.git/  README.markdown
$ exit                    # exit cmdr
sh-3.2$ cmdr              # rerun cmdr from sh
cmdr v0.1
$ hist
1 x = 1 &lt;succeeded about a minute ago&gt;
2 ls    &lt;succeeded less than a minute ago&gt;
3 exit  &lt;succedded less than a minute ago&gt;
$ x
=&gt; 1
~~~

<aside class="url"><a href=http://github.com/acook/cmdr">
<div>github.com</div>
cmdr
</a></aside>

