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

Debian 6.0 (Squeeze) の場合
---------------------------
apt-get コマンドで依存パッケージをインストールします。

.. code-block:: bash

   $ sudo apt-get install python-imaging ttf-ipafont

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ sudo easy_install blockdiag

.. note::

   easy_install の代わりに pypi-install コマンドを利用すると
   `blockdiag` を Debian パッケージとして管理することができます。

   pypi-install コマンドは python-stdeb パッケージに含まれているので、
   お好みに合わせてお使い下さい。

CentOS 5.5/5.6 の場合
---------------------
yum コマンドで依存パッケージをインストールします。
なお、CentOS 付属の PIL (python-imaging) パッケージは
setuptools に対応していないため、手動で egg-info を作成します。

.. code-block:: bash

   $ sudo yum install python-setuptools python-imaging fonts-japanese
   $ sudo touch /usr/lib/python2.4/site-packages/PIL-1.1.5.egg-info

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ sudo easy_install blockdiag

MacOSX (MacPorts) の場合
------------------------
port コマンドで依存パッケージをインストールします。

.. code-block:: bash

   $ sudo port install py27-setuptools py27-pil

.. note:: お使いの Python のバージョンに合わせて py2x の部分を変更して下さい。

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ sudo /opt/local/bin/easy_install-2.7 blockdiag

.. note::

   Mac 標準でインストールされている easy_install コマンドを使用した場合
   blockdiag は正しく動作しません。

   PATH の設定や、フルパス指定するなどして
   MacPorts でインストールした easy_install を利用して下さい。

MacOSX (homebrew) の場合
------------------------
MacOSX (homebrew) の環境でインストールされる PIL パッケージは
freetype2 に対応していないためそのままでは blockdiag を利用することはできません。

また、freetype2 用の Foluma (パッケージ)は提供されていないため、
以下の内容で /usr/local/Library/Formula/freetype2.rb ファイルを作成します。

.. code-block:: ruby

   require 'formula'

   class Freetype2 <Formula
     url 'http://sourceforge.net/projects/freetype/files/freetype2/2.4.4/freetype-2.4.4.tar.gz/download'
     homepage 'http://freetype.sourceforge.net/index2.html'
     md5 '9273efacffb683483e58a9e113efae9f'
     version '2.4.4'

     # depends_on 'cmake'

     def install
       system "./configure", "--disable-debug", "--disable-dependency-tracking",
                             "--prefix=#{prefix}"
       # system "cmake . #{std_cmake_parameters}"
       system "make install"
     end
   end

その後、以下のコマンドで freetype2 および PIL をインストールします。

.. code-block:: bash

   $ sudo brew install freetype2
   $ sudo easy_install pil

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ sudo easy_install blockdiag

そのほかの環境の場合
-----------------------
以下のコマンドで `blockdiag` をインストールします。

.. code-block:: bash

   $ sudo easy_install blockdiag


実行方法
========
ブロック図を生成するには `blockdiag` コマンドを起動します。

.. code-block:: bash

   $ cp examples/simple.diag .
   $ blockdiag simple.diag
   $ ls simple.png
   simple.png

SVG 形式や PDF 形式でブロック図を生成する場合は -T オプションを指定します。

.. code-block:: bash

   $ blockdiag -Tsvg simple.diag
   $ ls simple.svg
   simple.svg

.. code-block:: bash

   $ blockdiag -Tpdf simple.diag
   $ ls simple.pdf
   simple.pdf


.. _blockdiag_font_configurations:

フォント設定
============
`blockdiag` はブロック図の生成に TrueType フォントを利用します。
`blockdiag` は自動的に利用可能なフォントを取得しますが、
-f (--font) オプションにて特定のフォントで画像を生成することができます。

.. code-block:: bash

   $ blockdiag -f /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf simple.diag


また、$HOME/.blockdiagrc ファイルに設定を書くことで
常に同じフォントを利用することができます。

.. code-block:: bash

   $ cat $HOME/.blockdiagrc
   [blockdiag]
   fontpath = /usr/share/fonts/truetype/ttf-dejavu/DejaVuSerif.ttf


事前に入れておくべきソフトウェア
================================
* Python 2.4 以降 (3.x は未対応)
* Python Imaging Library 1.1.5 以降
* funcparserlib 0.3.4 以降
* setuptools もしくは distribute.


ライセンス
==========
Apache License 2.0
