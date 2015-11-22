---
slug: rtfm-of-the-day-the-cd-command
fulldate: Sun Aug 14 2011 16:18:39 GMT-0500 (CDT)
tags:
title: "RTFM: cd"
id: 8921363606
link: http://anthonymcook.com/post/8921363606/rtfm-of-the-day-the-cd-command
date: 2011-08-14
---


<p>Okay maybe this is just me, but I have never been inclined to look up the <a href="http://www.linuxcommand.org/man_pages/cd1.html" title="Look around, its in there.. somewhere" target="_blank">man page</a> for the <code>cd</code> command before today.</p>

<p>But when I did, I found two things of interest:</p>

<ul><li>$OLDPWD : is set by the system when you use <code>cd</code>, it contains the path you last <code>cd</code>ed from</li>
<li><code>cd -</code> : shorthand for <code>cd $OLDPWD</code></li>
</ul><p>It&rsquo;s pretty simple but here&rsquo;s a usage example on OSX:</p>

<pre><code>~/Projects/config $ cd /Applications
/Applications $ rm -rf Firefox.app
/Applications $ cd -
/Users/acook/Projects/config
~/Projects/config $ git status
# On branch master
nothing to commit (working directory clean)
~/Projects/config $ cd -
/Applications $
</code></pre>

<p>So its really just an easy way to swap back and forth between directories, easier than using <code>popd</code> and <code>pushd</code>, which only let you swap once.</p>

<p>I&rsquo;ve been meaning to write a script to handle directory history, hmm, maybe I will do that today while I am thinking about it..</p>

<p>⦂∀</p>
