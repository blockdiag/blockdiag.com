==================================
embed a blockdiagram in a document
==================================

Some document management tools can embed a blockdiagram which is
created by `blockdiag` as plugin or extension in the documents.

Embed in Sphinx
================

`Sphinx`_ is a document generation tool which use reST format.

To embed a blockdiagram in the sphinx generated documents, use
sphinxcontrib-blockdiag package which is Sphinx extension.

:ref:`sphinxcontrib-blockdiag` explains how to use sphinxcontrib-blockdiag.

.. _Sphinx: http://sphinx.pocoo.org/


Embed in Read the Docs
=======================

`Read the Docs`_ is documentation hosting service for sphinx docs.

To embed a blockdiagram in the sphinx docs at Read the Docs,
Use sphinxcontrib-blockdiag package.

1. Add `sphinxcontrib.blockdiag` extension to `conf.py`
2. Add `sphinxcontrib-blockdiag` to your `requirements.txt`
3. Set up your project on Read the Docs.

   * check `Use virtualenv`
   * input path to your requirements.txt to `Requirements file`


If you want to publish documents including unicodes,
put truetype fonts to your `_static` directory.
And specify it as `blockdiag_fontpath` in `conf.py`::

   # Set up font for blockdiag
   blockdiag_fontpath = '_static/ipagp.ttf'

.. _Read the Docs: https://readthedocs.org/


Embed in ipython-notebook
==========================

`IPython-notebook` is a web based interactive document.

To embed a blockdiagram in the ipython-notebook documents,
use `ipython-diags`_.

.. _IPython-notebook: http://ipython.org/notebook.html
.. _ipython-diags: https://bitbucket.org/vladf/ipython-diags


Embed in Redmine
=================

`Redmine`_ is a project management software.

To embed a blockdiagram in the Redmine, use Wiki External Filter
Plugin.

See `Introduce Wiki External Filter Plugin(Japanese)`_ .

.. _Redmine: http://www.redmine.org/
.. _Introduce Wiki External Filter Plugin(Japanese): http://d.hatena.ne.jp/miau/20110309/1299674086


Embed in Trac
==============

`Trac`_ is a project management software.

To embed a blockdiagram in the Trac Wiki, use `TracBlockDiagPlugin`_.

.. _Trac: http://trac.edgewall.org/
.. _TracBlockDiagPlugin: http://trac-hacks.org/wiki/TracBlockDiagPlugin


Embed in moinmoin
==================

`moinmoin`_ is a Wiki clone server written in Python.

To embed a blockdiagram in the Trac Wiki, use `moinmoin blockdiag plugin`_.

.. _moinmoin: http://moinmo.in/
.. _moinmoin blockdiag plugin: http://d.hatena.ne.jp/podhmo/20110409/1302342454


Embed in mediawiki
===================
`mediawiki`_ is a Wiki clone server.

To embed a blockdiagram in the mediawiki, use `Blockdiag MediaWiki Extension`_.

.. _mediawiki: http://www.mediawiki.org/wiki/MediaWiki
.. _Blockdiag MediaWiki Extension: https://github.com/kjmkznr/blockdiag-mediawiki-extension


Embed in PukiWiki
==================

`PukiWiki`_ is a Wiki clone server written in PHP.

To embed a blockdiagram in the mediawiki, use `blockdiag PukiWiki Extension`_.

.. _PukiWiki: http://pukiwiki.sourceforge.jp/?PukiWiki
.. _blockdiag PukiWiki Extension: http://d.hatena.ne.jp/hekyou/20110717/p1


Embed in Rabbit
================

`Rabbit`_ is a presentation tool written in Ruby.

Rabbit support blockdiag, users can embed a blockdiagram in a
presentation with no additional software.

.. _Rabbit: http://rabbit-shocker.org/


Embed in Joomla
================

`Joomla`_ is a Content Management System written in PHP.

To embed a blockdiagram in the Joomla, use `Plugin blockdiag`_.

.. _Joomla: http://www.joomla.org/
.. _Plugin blockdiag: http://extensions.joomla.fr/extensions/liste-des-derniers-fichiers/1790-accueil/4630-plugin-blockdiag

Embed in asciidoc
==================

`asciidoc`_ is a document generation tool which can translate from
text document to some formats.

To embed a blockdiagram in the asciidoc, use `asciidoc-diag-filter`_.

.. _asciidoc: http://www.methods.co.nz/asciidoc/
.. _asciidoc-diag-filter: https://code.google.com/p/asciidoc-diag-filter/


Get from API
=============

`interactive shell for blockdiag <http://interactive.blockdiag.com>` provides a Web API. When you
send some text data, you can get a blockdiagram which is SVG format.

To use Web API, send a GET request to
http://blockdiag.appspot.com/image with some parameters.

.. list-table::
   :widths: 10 30
   :header-rows: 1

   * - parameter
     - description
   * - src
     - specify blockdiag format text. When encoding=base64, text
       should be encoded by base64.
   * - encoding
     - choose base64 or jsonp.  When base64, client should send a src
       text with base64 encoded. When jsonp, client can get jsonp format.
   * - callback
     - specify callback function name. Enable only if encoding=jsonp.

Server returns a blockdiagram with SVG format if the text data is
valid. If the text data is invalid or have some errors, the server
returns an empty response.

.. note::

   Since this API is an experimental service, parameter change or
   service termination can be occured.
