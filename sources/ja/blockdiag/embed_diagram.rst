==========================
文書にブロック図を埋め込む
==========================

いくつかの文書管理システムではプラグインや拡張機能として
`blockdiag` で生成したブロック図を文章に埋め込むことができます。


Sphinx に埋め込む
=================
`Sphinx`_ は reST 形式(テキスト)で記述するドキュメント生成ツールです。

Sphinx で作成する文書にブロック図を埋め込むには
Sphinx 拡張である sphinxcontrib-blockdiag パッケージを利用します。

sphinxcontrib-blockdiag については :ref:`sphinxcontrib-blockdiag` で説明します。

.. _Sphinx: http://sphinx.pocoo.org/

Redmine に埋め込む
==================
`Redmine`_ は Web ベースのプロジェクト管理ソフトウェアです。

Redmine の Wiki にブロック図を埋め込むには
Wiki External Filter Plugin を利用します。

詳細は `Wiki External Filter Plugin を導入してみた`_ をご覧ください。

.. _Redmine: http://www.redmine.org/
.. _Wiki External Filter Plugin を導入してみた: http://d.hatena.ne.jp/miau/20110309/1299674086


Trac に埋め込む
===============
`Trac`_ は Web ベースのプロジェクト管理ソフトウェアです。

Trac の Wiki にブロック図を埋め込むには `TracBlockDiagPlugin`_ を利用します。

.. _Trac: http://trac.edgewall.org/
.. _TracBlockDiagPlugin: http://trac-hacks.org/wiki/TracBlockDiagPlugin


moinmoin に埋め込む
===================
`moinmoin`_ は Python で書かれた Wiki clone サーバです。

moinmoin にブロック図を取り込むには `moinmoin blockdiag plugin`_ を利用します。

.. _moinmoin: http://moinmo.in/
.. _moinmoin blockdiag plugin: http://d.hatena.ne.jp/podhmo/20110409/1302342454


mediawiki に埋め込む
=====================
`mediawiki`_ は Wiki clone サーバです。

mediawiki にブロック図を取り込むには `Blockdiag MediaWiki Extension`_ を利用します。

.. _mediawiki: http://www.mediawiki.org/wiki/MediaWiki
.. _Blockdiag MediaWiki Extension: https://github.com/kjmkznr/blockdiag-mediawiki-extension


PukiWiki に埋め込む
====================
`PukiWiki`_ は PHP で書かれた Wiki clone サーバです。

PukiWiki にブロック図を取り込むには `blockdiag PukiWiki Extension`_ を利用します。

.. _PukiWiki: http://pukiwiki.sourceforge.jp/?PukiWiki
.. _blockdiag PukiWiki Extension: http://d.hatena.ne.jp/hekyou/20110717/p1


Rabbit に埋め込む
====================
`Rabbit`_ は Ruby で書かれたプレゼンテーションツールです。

Rabbit は blockdiag の埋込みをサポートしており、
追加のソフトウェなしにプレゼンテーションに図を組み込むことができます。

.. _Rabbit: http://rabbit-shockers.org/


asciidoc に埋め込む
====================
`asciidoc`_ はテキスト文書から各種フォーマットに変換するドキュメント生成ツールです。

asciidoc にブロック図を取り込むには `asciidoc-diag-filter`_ を利用します。

.. _asciidoc: http://www.methods.co.nz/asciidoc/
.. _asciidoc-diag-filter: https://code.google.com/p/asciidoc-diag-filter/



API 経由で取得する
==================

:ref:`interactive shell for blockdiag` では Web API を提供しています。
テキストデータを送信すると SVG 形式のブロック図を取得することができます。

Web API は http://blockdiag.appspot.com/image に対して、
以下のパラメータを含んだ GET リクエストを送ることで呼び出すことができます。

.. list-table::
   :widths: 10 30
   :header-rows: 1

   * - パラメータ名
     - 内容
   * - src
     - テキスト形式のブロック図を指定します。
       encoding=base64 を指定した場合は base64 エンコードする必要があります。
   * - encoding
     - base64, jsonp のいずれかを指定することができます。
       base64 を指定した場合、src に指定するテキストを base64 形式で送信します。
       jsonp を指定した場合、jsonp 形式で結果を受け取ることができます。
   * - callback
     - コールバック関数の名前を指定します。
       encoding=jsonp の場合のみ有効です。

サーバは、受信したテキストデータが正常な図であれば、
SVG 形式のブロック図を送信します。
もし受信したテキストに文法間違いやエラーがあった場合は、
空のレスポンスを返します。

.. note::

   この API は実験的に提供しているものであるため、
   パラメータの変更やサービスの停止が行われる可能性があります。
