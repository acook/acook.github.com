---
layout: post
title: "The New Powerline"
date: 2013-01-20
---

I just spent hours tweaking my configs, including fleshing out my .tmux.config and fixing bugs in my .vimrc.  When I was running an update on my vim plugins I noticed something was horribly wrong. Powerline wasn't working anymore and throwing an error about Python. Python? What the hell? I don't remember it requiring Python..

Well not anymore. It's been completely rewritten. A lot has changed.

It's clearly still Alpha quality software, so it will (probably) improve rapidly, but in the meantime there's a lot of hurdles to jump through in order to get it even sort of working. Maybe I can save you a little time.

## The Basics

Powerline is useless without any of the above apps, so make sure you install whichever ones you intend on using if you haven't already, but there's a few caveats you want to watch out for before you even really get to the point of making use of the new Powerline.

### iTerm2 (or whatever)

Okay face it, iTerm2 is amazing and you should be using it if you're on OSX.

There's been some fixes to custom codepoint font support in iTerm in the last couple of weeks so its best if you grab a nightly or compile it yourself if you're feeling really masochistic.

I recommend downloading a precompiled nightly until a new version is released. (EDIT: this has since happened)

http://iterm2.com/nightly/latest
Install it as usual, it probably won't explode. But if it does, wait until the next iTerm nightly or grab an official release and mourn your utf symbols.

If you're on Linux then iTerm isn't an option (sadly), so install rxvt-unicode or terminator or whatever you want, just make sure it has solid utf support.

### Vim

Vim needs to have Python support, if you're on OSX MacVim has you covered so you're safe. Just install it with Homebrew and you should be good to go. For Linux you'll have to select the package that supports it. On Ubuntu I use vim-nox for non-gui and vim-gtk for gui support. vim-gtk only has an overhead of about 30MB even if you don't use X, and its color support might be worth it to you. If you're on Gentoo make sure your USE flags have +python in the list.

Python (and the Powerline module)

You'll need some sort of Python 2.7ish install (as far as I can tell), and you'll need pip installed as well. The version that comes with Homebrew is good, but you'll have to add a configuration option to your .vimrc if you do.

First install pip if you don't have it already, and then you can install the Python module:

pip install https://github.com/Lokaltog/powerline/tarball/develop
Don't even try to pip install powerline, the "powerline" package has nothing even slightly to do with this, its an unfortunate naming conflict.

Once that was done I had to add this to my .vimrc to get it to work:

~~~python
python import sys; sys.path.append("/usr/local/lib/python2.7/site-packages/")
~~~

But others had to add this:

python import sys; sys.path.append("/Library/Python/2.7/site-packages")
Your path might need to be different, if you can't intuit it, you can open python and have it tell you where its installed the dammed thing to:

First ensure that Python can find it by seeing if its in the list of modules pip is aware of:

pip freeze
If its there then you can open up a python repl and have it tell you where the file is at:

import powerline
powerline.__file__
Once you have that, you can figure out the path to the site-packages directory that you need.

Fonts

Part of Powerline's aesthetic appeal comes partly from its custom UTF fonts. So you'll need those to get it looking its best.

The codepoints have changed in the new version of Powerline.

This means that your old fonts WILL NOT WORK seriously, at all, don't try it, you'll hate yourself.

You might as well remove all your old custom Powerline fonts, they're pretty much useless now.

If you're on OSX or Windows, you'll have to go to https://github.com/Lokaltog/powerline-fonts and download the new ones. They're not all there yet unfortunately, but the good news is you can patch them yourself: http://lokaltog.github.com/powerline/fontpatching.html which I'm not even going to go into, you have fun with that.

If you're on Linux, you might be in luck, try this bit of the install guide: http://lokaltog.github.com/powerline/overview.html#linux and you might never have to patch your fonts again!

The Applications

Okay that covers the install of the requirements (I think.. let me know if I missed one). The rest is pretty straight forward.

The official install guide: http://lokaltog.github.com/powerline/ will explain the rest to you, but I'll put some of it here for posterity.

Vim

You just need to drop this line into your .vimrc and you'll be off to the races:

python from powerline.ext.vim import source_plugin; source_plugin()
If you figured out where your Python has installed Powerline at, and you can't get Python to work in Vim, you can use the absolute path like this:

source {path}/powerline/ext/vim/source_plugin.vim
Help and Troubleshooting

The official docs have different information: http://lokaltog.github.com/powerline/
Search the open AND closed github issues, seriously, there loads of good advice there: https://github.com/Lokaltog/powerline/issues
Ignore anything older than a month, it'll only confuse you, since its about the old version of Powerline which is a completely different codebase.
Use googles site syntax: site:https://github.com/Lokaltog/powerline/issues to search powerline's github issues.. yes I'm saying this twice, it was a big help to me.
I haven't gotten the new version of Powerline to work for Tmux yet (appears to be a bug in the weather widget), if I get around to it I'll probably add a tmux section.
