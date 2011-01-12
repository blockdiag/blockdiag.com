=======================
Introduction of seqdiag
=======================

Features
========

* Generate sequence-diagram from dot like text (basic feature).
* Multilingualization for node-label (utf-8 only).
* Sphinx embedding

Setup
=====

by easy_install
----------------
Make environment::

   $ easy_install seqdiag

by buildout
------------
Make environment::

   $ hg clone http://bitbucket.org/tk0miya/seqdiag
   $ cd seqdiag
   $ python bootstrap.py
   $ bin/buildout

Copy and modify ini file. example::

   $ cp <seqdiag installed path>/seqdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`sample-diagrams` section for the format of the
`simpla.diag` configuration file.


Usage
=====

Execute seqdiag command::

   $ seqdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images, use -T option::

   $ seqdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg


Font Configuration
==================

seqdiag uses TrueType Font to render text. 
seqdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option::

   $ seqdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


If you always use same font, write $HOME/.seqdiagrc::

   $ cat $HOME/.seqdiagrc
   [seqdiag]
   fontpath = /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf


Requirements
============

* Python 2.4 or later (not support 3.x)
* Python Imaging Library 1.1.6 or later.
* funcparserlib 0.3.4 or later.
* setuptools or distriubte.


License
=======
Python Software Foundation License.
