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

Install with ``pip``:

.. code-block:: bash

   $ pip install seqdiag

Or with ``easy_install``:

.. code-block:: bash

   $ easy_install seqdiag

Copy and modify ini file. example

.. code-block:: bash

   $ cp <seqdiag installed path>/seqdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`seqdiag-sample-diagrams` section for the format of the
`simpla.diag` configuration file.


Usage
=====
Execute seqdiag command

.. code-block:: bash

   $ seqdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images, use -T option

.. code-block:: bash

   $ seqdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg


Font Configuration
==================
seqdiag uses TrueType Font to render text. 
seqdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option

.. code-block:: bash

   $ seqdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


If you always use same font, write $HOME/.blockdiagrc

.. code-block:: bash

   $ cat $HOME/.blockdiagrc
   [seqdiag]
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
