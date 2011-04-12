=======================
Introduction of netdiag
=======================

Features
========

* Generate network-diagram from dot like text (basic feature).
* Multilingualization for node-label (utf-8 only).
* Sphinx embedding

Setup
=====

by easy_install
----------------
Make environment::

   $ easy_install netdiag

by buildout
------------
Make environment::

   $ hg clone http://bitbucket.org/tk0miya/netdiag
   $ cd netdiag
   $ python bootstrap.py
   $ bin/buildout

Copy and modify ini file. example::

   $ cp <netdiag installed path>/netdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`sample-diagrams` section for the format of the
`simpla.diag` configuration file.


Usage
=====

Execute netdiag command::

   $ netdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images, use -T option::

   $ netdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg


Font Configuration
==================

netdiag uses TrueType Font to render text. 
netdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option::

   $ netdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


If you always use same font, write $HOME/.netdiagrc::

   $ cat $HOME/.netdiagrc
   [netdiag]
   fontpath = /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf


Requirements
============

* Python 2.4 or later (not support 3.x)
* Python Imaging Library 1.1.5 or later.
* funcparserlib 0.3.4 or later.
* setuptools or distriubte.


License
=======
Python Software Foundation License.
