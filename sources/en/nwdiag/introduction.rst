======================
Introduction of nwdiag
======================

Features
========
* Generate network-diagram from dot like text (basic feature).
* Multilingualization for node-label (utf-8 only).
* Sphinx embedding

Setup
=====

by easy_install
----------------
Make environment

.. code-block:: bash

   $ sudo easy_install nwdiag

by buildout
------------
Make environment

.. code-block:: bash

   $ hg clone http://bitbucket.org/tk0miya/nwdiag
   $ cd nwdiag
   $ python bootstrap.py
   $ bin/buildout

Copy and modify ini file. example

.. code-block:: bash

   $ cp <nwdiag installed path>/nwdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to :ref:`nwdiag-sample-diagrams` section for the format of the
`simpla.diag` configuration file.


Usage
=====
Execute nwdiag command

.. code-block:: bash

   $ nwdiag simple.diag
   $ ls simple.png
   simple.png

If you want SVG images, use -T option

.. code-block:: bash

   $ nwdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg


Font Configuration
==================
nwdiag uses TrueType Font to render text. 
nwdiag try to detect installed fonts but if nothing detected,
You can specify fonts with -f (--font) option

.. code-block:: bash

   $ nwdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag

If you always use same font, write $HOME/.blockdiagrc

.. code-block:: bash

   $ cat $HOME/.blockdiagrc
   [nwdiag]
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
