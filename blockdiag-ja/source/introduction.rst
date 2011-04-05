================
blockdiag の概要
================

機能
========

* テキストファイルからブロック図を生成
* 日本語(UTF-8)対応
* Sphinx 文書への埋め込み (sphinxcontrib-blockdiag パッケージの利用)

インストール
============

easy_install 経由の場合
-----------------------
以下のコマンドで `blockdiag` をインストールします。::

   $ easy_install blockdiag

PDF 出力機能を利用する場合は、[pdf] パラメータを付けてインストールします。::

   $ easy_install "blockdiag[pdf]"

buildout 経由の場合
-------------------
以下のコマンドで `blockdiag` をインストールします。::

   $ hg clone http://bitbucket.org/tk0miya/blockdiag
   $ cd blockdiag
   $ python bootstrap.py
   $ bin/buildout


実行方法
========
ブロック図を生成するには `blockdiag` コマンドを起動します。::

   $ cp examples/simple.diag .
   $ blockdiag simple.diag
   $ ls simple.png
   simple.png

SVG 形式や PDF 形式でブロック図を生成する場合は -T オプションを指定します。::

   $ blockdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg

   $ blockdiag -Tpdf simple.diag
   $ ls simple.pdf
   simple.pdf


フォント設定
============
`blockdiag` はブロック図の生成に TrueType フォントを利用します。
`blockdiag` は自動的に利用可能なフォントを取得しますが、
-f (--font) オプションにて特定のフォントで画像を生成することができます。::

   $ blockdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


また、$HOME/.blockdiagrc ファイルに設定を書くことで
常に同じフォントを利用することができます。::

   $ cat $HOME/.blockdiagrc
   [blockdiag]
   fontpath = /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf


事前に入れておくべきソフトウェア
================================
* Python 2.4 以降 (3.x は未対応)
* Python Imaging Library 1.1.6 以降
* funcparserlib 0.3.4 以降
* setuptools もしくは distriubte.


ライセンス
==========
Python Software Foundation License.
