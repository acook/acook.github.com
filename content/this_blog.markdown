---
date: 2015-11-21T14:20:48-06:00
draft: true
title: this_blog
---

## Technologies

- Hugo
- Github (Jekyll)

## Directory Structure

I cloned the site repo into an ignored subdirectory (called `public`):

~~~sh
$ git clone . public
~~~

Then I changed the branch and cleaned up the subdirectory:

~~~sh
$ git co -b develop
$ cd public
$ shopt -s extglob
$ git rm -rf .
$ cd ..
$ hugo
$ cd public
$ git add .
$ git commit
~~~

## References

- http://jimmybonney.com/articles/export_tumblr_posts_to_nanoc/
-
