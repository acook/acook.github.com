+++
date = "2015-11-15T18:57:07-06:00"
draft = true
title = "Hello, Bob!"

+++

The gold standard in the first baby steps to learning a new programming language is the ubiquitous "Hello world!" program.

In some languages it's hardly more than the two words:

~~~ruby
# to run: ruby hello_world.rb
puts 'Hello world!'
~~~

~~~blacklight
;; to run: blacklight run hello_world.bl
'Hello world!' print
~~~

In others it's a little more verbose:

~~~c
#include<stdio.h>

int main()
{
  printf("\nHello world!");
  return 0;
}
~~~

~~~nemerle
class Hello
{
  static Main () : void
  {
    System.Console.WriteLine ("Hello world!");
  }
}
~~~

Some years back I read a convincing article (that I can no longer find) that
made the argument that "Hello, world!" was a poor metric for comparing
languages as well as a poor example to start with. Then there was the acedemic
paper "Hello World Considered Harmful" which was terrible in its own right.

In either case, I think it's half true. Thr first thing is to get a "Hello,
world!" running as a litmus test to prove your system is doing the right thing.

Immediately afterwards this simple example should be modified into something only slightly
more complex. I've always called it "Hello, Bob!" and it was one of the very first programs I
ever wrote. It probably looked something like this:

~~~basic
01 REM THEY DIDN'T HAVE FANCY LOWERCASE BACK THEN
10 INPUT "WHAT IS YOUR NAME? "; NAME$
20 PRINT "HELLO, " NAME$ "!"
[RUN](https://www.scullinsteel.com/apple2/ "TRY IT OUT")
~~~

This example shows us user input, how variables work, and string concatenation.
While this example is hardly more complex, most programs in the wild constantly
use these three things.
