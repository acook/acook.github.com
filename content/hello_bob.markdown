+++
date = "2015-11-15T18:57:07-06:00"
draft = true
title = "Hello, Bob!"

+++

The gold standard in the first baby steps to learning a new programming language is the ubiquitous "Hello world!" program.

In some languages it's hardly more than the two words:

~~~ruby
# ruby
puts 'Hello world!'
~~~

~~~blacklight
;; blacklight
'Hello world!' print
~~~

In others it's a little more verbose:

~~~java
// Java
public class HelloWorld
{
 public static void main(String[] args)
 {
  System.out.println("Hello world!");
 }
}
~~~

~~~rust
// Rust
fn main () {
   println!("Hello world!");
}
~~~

Some years back I read a convincing article (that I can no longer find) that
made the argument that "Hello, world!" was a poor metric for comparing
languages as well as a poor example to start with. Then there was the acedemic
paper "Hello World Considered Harmful" (which turned out to be terrible).

"Hello, world!" makes a litmus test to prove your system is doing the right thing.

Immediately afterwards this simple example should be modified into something
more complex, if only barely. I've always called the next step "Hello, Bob!" and
it was one of the very first programs I ever wrote. It probably looked something
like this:

~~~basic
01 REM APPLESOFT BASIC - THEY DIDN'T HAVE FANCY LOWERCASE BACK THEN
10 INPUT "WHAT IS YOUR NAME? "; NAME$
20 PRINT "HELLO, " NAME$ "!"
RUN
~~~

This example shows us user input, how variables work, and string concatenation.
While this example is hardly more complex, most programs in the wild constantly
use these three things.
