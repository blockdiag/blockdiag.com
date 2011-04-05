=========================
Introduction of blockdiag
=========================

Features
========

* Generate block-diagram from dot like text (basic feature).
* Multilingualization for node-label (utf-8 only).
* Sphinx embedding (using sphinxcontrib-blockdiag package)

Setup
=====

by easy_install
----------------
Make environment::

   $ easy_install blockdiag

If you want to export as PDF format, give pdf arguments::

   $ easy_install "blockdiag[pdf]"

by buildout
------------
Make environment::

   $ hg clone http://bitbucket.org/tk0miya/blockdiag
   $ cd blockdiag
   $ python bootstrap.py
   $ bin/buildout


Usage
=====

Execute blockdiag command::

   $ blockdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images or PDF images, use -T option::

   $ blockdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg

   $ blockdiag -Tpdf simple.diag
   $ ls simple.pdf
   simple.pdf


Font Configuration
==================

blockdiag uses TrueType Font to render text. 
blockdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option::

   $ blockdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


If you always use same font, write $HOME/.blockdiagrc::

   $ cat $HOME/.blockdiagrc
   [blockdiag]
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
