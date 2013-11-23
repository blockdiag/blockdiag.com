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

Use easy_install or pip

.. code-block:: bash

   $ sudo easy_install blockdiag

   Or

   $ sudo pip blockdiag

If you want to export as PDF format, give pdf arguments

.. code-block:: bash

   $ sudo easy_install "blockdiag[pdf]"


Usage
=====
Execute blockdiag command

.. code-block:: bash

   $ blockdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images or PDF images, use -T option

.. code-block:: bash

   $ blockdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg

.. code-block:: bash

   $ blockdiag -Tpdf simple.diag
   $ ls simple.pdf
   simple.pdf


Font Configuration
==================
blockdiag uses TrueType Font to render text. 
blockdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option

.. code-block:: bash

   $ blockdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


If you always use same font, write $HOME/.blockdiagrc

.. code-block:: bash

   $ cat $HOME/.blockdiagrc
   [blockdiag]
   fontpath = /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf


Requirements
============
* Python 2.4 or later (not support 3.x)
* Python Imaging Library 1.1.5 or later.
* funcparserlib 0.3.4 or later.
* setuptools or distribute.


License
=======
Apache License 2.0
