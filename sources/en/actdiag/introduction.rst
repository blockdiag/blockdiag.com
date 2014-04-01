=======================
Introduction of actdiag
=======================

Features
========
* Generate activity-diagram from dot like text (basic feature).
* Multilingualization for node-label (utf-8 only).
* Sphinx embedding

Setup
=====

Use easy_install or pip

.. code-block:: bash

   $ sudo easy_install actdiag

   Or

   $ sudo pip actdiag

Copy and modify ini file. example

.. code-block:: bash

   $ cp <actdiag installed path>/actdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`actdiag-sample-diagrams` section for the format of the
`simpla.diag` configuration file.


Usage
=====
Execute actdiag command

.. code-block:: bash

   $ actdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images, use -T option

.. code-block:: bash

   $ actdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg


Font Configuration
==================
actdiag uses TrueType Font to render text. 
actdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option

.. code-block:: bash

   $ actdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag

If you always use same font, write $HOME/.blockdiagrc

.. code-block:: bash

   $ cat $HOME/.blockdiagrc
   [actdiag]
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
