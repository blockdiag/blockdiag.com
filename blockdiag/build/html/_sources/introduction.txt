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

by buildout
------------
Make environment::

   $ hg clone http://bitbucket.org/tk0miya/blockdiag
   $ cd blockdiag
   $ python bootstrap.py
   $ bin/buildout

Copy and modify ini file. example::

   $ cp <blockdiag installed path>/blockdiag/examples/simple.diag .
   $ vi simple.diag

Please refer to Examples section for the format of the
`simpla.diag` configuration file.


Usage
=====

Execute blockdiag command::

   $ blockdiag simple.diag
   $ ls simple.png
   simple.png


Requirements
============

* Python 2.4 or later (not support 3.x)
* Python Imaging Library 1.1.6 or later.
* funcparserlib 0.3.4 or later.
* setuptools or distriubte.


License
=======
Python Software Foundation License.
