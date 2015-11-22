---
slug: how-to-get-statistics-from-output-of-diff
fulldate: Thu Apr 14 2011 17:10:47 GMT-0500 (CDT)
tags:
title: diffstat
id: 4616201920
link: http://anthonymcook.com/post/4616201920/how-to-get-statistics-from-output-of-diff
date: 2011-04-14
---

<p>I started writing a little bash script like this:</p>

<pre><code>echo lines removed
git diff|ack "^\- "|wc -l
echo lines added
git diff|ack "^\+ "|wc -l
</code></pre>

<p>I named it diffstat. Then I googled, and found out there&rsquo;s a program of the same name already in existence!</p>

<p>And it&rsquo;s already installed on my machine, so now all I need to do is git diff|diffstat and I get really nice output!</p>

<pre><code>~/Projects/someproject.com on development ?
$ git diff | diffstat
controllers/somethings_controller.rb |   35 ++------------------
models/something.rb                  |    9 ++---
models/something_something.rb        |    2 +
models/something_other.rb            |   49 ++++++++++++----------------
views/something_other/_form.html.erb |   18 ++--------
5 files changed, 37 insertions(+), 76 deletions(-)
</code></pre>

<p>Looks like this is also what git uses to display pull stats.</p>

<p>⦂∀</p>
