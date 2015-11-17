---
date: 2015-11-16T19:26:49-06:00
draft: true
title: intro to blacklight
---

~~~blacklight
;; Smalltalk-style Conditionals

o-new          ;; o1 will house our truthy and falsey objects

o-new          ;; o2 (truthy object)
[ swap call ]  ;; evaluate the wv
if-true:       ;; store function in slot
[ swap drop ]  ;; do nothing except get rid of the wv
if-false:      ;; store function in slot
true:          ;; store o2 in slot in o1

o-new          ;; o3 (falsey object)
[ swap drop ]  ;; do nothing except get rid of the wv
if-true:       ;; store function in slot
[ swap call ]  ;; evaluate the wv
if-false:      ;; store function in slot
false:         ;; store o3 in slot in o1

:false                      ;; summon reference to falsey o3
[ 'I am so false.' print ]  ;; a Block to demonstrate the condition
swap :if-false              ;; call if-false on o3, will display "I am so false."
~~~

~~~blacklight
'number' print
34543 print '' print

'queue' print
q-new 1 enq 2 enq 3 enq 4 enq print '' print

'stack' print
s-new 1 push 2 push 3 push 4 push print '' print

'word' print
~1 print

'block' print
[ 1 2 3 4 ] print '' print

'text' print
'1 2 3 4' print '' print

'vector of numbers' print
(1 2 3 4) print '' print

'vector of text' print
('1' '2' '3' '4') print

'meta' print @ $ ^
$swap print $drop $new
nil true
~~~
