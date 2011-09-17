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

by easy_install
----------------
Make environment

.. code-block:: bash

   $ sudo easy_install actdiag

by buildout
------------
Make environment

.. code-block:: bash

   $ hg clone http://bitbucket.org/tk0miya/actdiag
   $ cd actdiag
   $ python bootstrap.py
   $ bin/buildout

Copy and modify ini file. example

.. code-block:: bash

   $ cp <actdiag installed path>/actdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`sample-diagrams` section for the format of the
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

If you always use same font, write $HOME/.actdiagrc

.. code-block:: bash

   $ cat $HOME/.actdiagrc
   [actdiag]
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
