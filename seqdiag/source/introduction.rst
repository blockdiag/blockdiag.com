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
Make environment

.. code-block:: bash

   $ sudo easy_install seqdiag

by buildout
------------
Make environment

.. code-block:: bash

   $ hg clone http://bitbucket.org/tk0miya/seqdiag
   $ cd seqdiag
   $ python bootstrap.py
   $ bin/buildout

Copy and modify ini file. example

.. code-block:: bash

   $ cp <seqdiag installed path>/seqdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`sample-diagrams` section for the format of the
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


If you always use same font, write $HOME/.seqdiagrc

.. code-block:: bash

   $ cat $HOME/.seqdiagrc
   [seqdiag]
   fontpath = /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf


Requirements
============
* Python 2.4 or later (not support 3.x)
* Python Imaging Library 1.1.5 or later.
* funcparserlib 0.3.4 or later.
* setuptools or distribute.


License
=======
Python Software Foundation License.
