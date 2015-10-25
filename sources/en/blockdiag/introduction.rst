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

Install with ``pip``:

.. code-block:: bash

   $ pip install blockdiag

Or with ``easy_install``:

.. code-block:: bash

   $ easy_install blockdiag

If you want to export as PDF format, give pdf arguments

.. code-block:: bash

   $ easy_install "blockdiag[pdf]"

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


.. _blockdiag_font_configurations:

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
* Python 2.6, 2.7, 3.2, 3.3 or later
* Pillow 2.2.1 or later.
* funcparserlib 0.3.6 or later.
* setuptools or distribute.


License
=======
Apache License 2.0
