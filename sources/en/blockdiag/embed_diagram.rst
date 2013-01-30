==================================
embed a blockdiagram in a document
==================================

..
  いくつかの文書管理システムではプラグインや拡張機能として
  `blockdiag` で生成したブロック図を文章に埋め込むことができます。

Some document management tools can embed a blockdiagram which is
created by `blockdiag` as plugin or extension in the documents.

Embed in Sphinx
==================

`Sphinx`_ is a document generation tool which use reST format.

..
  `Sphinx`_ は reST 形式(テキスト)で記述するドキュメント生成ツールです。


..
  Sphinx で作成する文書にブロック図を埋め込むには
  Sphinx 拡張である sphinxcontrib-blockdiag パッケージを利用します。

To embed a blockdiagram in the sphinx generated documents, use
sphinxcontrib-blockdiag package which is Sphinx extension.

..
  sphinxcontrib-blockdiag については :ref:`sphinxcontrib-blockdiag` で説明します。

:ref:`sphinxcontrib-blockdiag` explains how to use sphinxcontrib-blockdiag.


.. _Sphinx: http://sphinx.pocoo.org/

Embed in Redmine
===================

..
   `Redmine`_ は Web ベースのプロジェクト管理ソフトウェアです。

`Redmine`_ is a project management software.

To embed a blockdiagram in the Redmine, use Wiki External Filter
Plugin.

..
   詳細は `Wiki External Filter Plugin を導入してみた`_ をご覧ください。

See `Introduce Wiki External Filter Plugin(Japanese)`_ .

.. _Redmine: http://www.redmine.org/
.. _Introduce Wiki External Filter Plugin(Japanese): http://d.hatena.ne.jp/miau/20110309/1299674086


Embed in Trac
================

`Trac`_ is a project management software.

To embed a blockdiagram in the Trac Wiki, use `TracBlockDiagPlugin`_.

.. _Trac: http://trac.edgewall.org/
.. _TracBlockDiagPlugin: http://trac-hacks.org/wiki/TracBlockDiagPlugin


Embed in moinmoin
====================

`moinmoin`_ is a Wiki clone server written in Python.

To embed a blockdiagram in the Trac Wiki, use `moinmoin blockdiag plugin`_.

.. _moinmoin: http://moinmo.in/
.. _moinmoin blockdiag plugin: http://d.hatena.ne.jp/podhmo/20110409/1302342454


Embed in mediawiki
=====================
`mediawiki`_ is a Wiki clone server.

To embed a blockdiagram in the mediawiki, use `Blockdiag MediaWiki Extension`_.

.. _mediawiki: http://www.mediawiki.org/wiki/MediaWiki
.. _Blockdiag MediaWiki Extension: https://github.com/kjmkznr/blockdiag-mediawiki-extension


Embed in PukiWiki
====================

`PukiWiki`_ is a Wiki clone server written in PHP.

To embed a blockdiagram in the mediawiki, use `blockdiag PukiWiki Extension`_.

.. _PukiWiki: http://pukiwiki.sourceforge.jp/?PukiWiki
.. _blockdiag PukiWiki Extension: http://d.hatena.ne.jp/hekyou/20110717/p1


Embed in Rabbit
====================

`Rabbit`_ is a presentation tool written in Ruby.

Rabbit support blockdiag, users can embed a blockdiagram in a
presentation with no additional software.

..
   Rabbit は blockdiag の埋込みをサポートしており、
   追加のソフトウェなしにプレゼンテーションに図を組み込むことができます。

.. _Rabbit: http://rabbit-shockers.org/


Embed in Joomla
====================

`Joomla`_ is a Content Management System written in PHP.

To embed a blockdiagram in the Joomla, use `Plugin blockdiag`_.

.. _Joomla: http://www.joomla.org/
.. _Plugin blockdiag: http://extensions.joomla.fr/extensions/liste-des-derniers-fichiers/1790-accueil/4630-plugin-blockdiag

Embed in asciidoc
====================

..
  `asciidoc`_ はテキスト文書から各種フォーマットに変換するドキュメント生成ツールです。


`asciidoc`_ is a document generation tool which can translate from
text document to some formats.

To embed a blockdiagram in the asciidoc, use `asciidoc-diag-filter`_.

.. _asciidoc: http://www.methods.co.nz/asciidoc/
.. _asciidoc-diag-filter: https://code.google.com/p/asciidoc-diag-filter/


Get from API
==================

..
   :ref:`interactive shell for blockdiag` では Web API を提供しています。
   テキストデータを送信すると SVG 形式のブロック図を取得することができます。

:ref:`interactive shell for blockdiag` provides a Web API. When you
send some text data, you can get a blockdiagram which is SVG format.

..
   Web API は http://blockdiag.appspot.com/image に対して、
   以下のパラメータを含んだ GET リクエストを送ることで呼び出すことができます。

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

..
  サーバは、受信したテキストデータが正常な図であれば、
  SVG 形式のブロック図を送信します。
  もし受信したテキストに文法間違いやエラーがあった場合は、
  空のレスポンスを返します。

Server returns a blockdiagram with SVG format if the text data is
valid. If the text data is invalid or have some errors, the server
returns an empty response.

.. note::

   Since this API is an experimental service, parameter change or
   service termination can be occured.

..
   この API は実験的に提供しているものであるため、
   パラメータの変更やサービスの停止が行われる可能性があります。
