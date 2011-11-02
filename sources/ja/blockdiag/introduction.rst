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

Windows の場合 
---------------
easy_install コマンドで依存パッケージをインストールします。

.. code-block:: bash

   $ easy_install pillow

また、Pillow が依存している「Microsoft Visual C++ 2008 SP1 再頒布可能パッケージ」をインストールします。
32ビット版は `こちら <http://www.microsoft.com/downloads/ja-jp/details.aspx?familyid=a5c84275-3b97-4ab7-a40d-3802b2af5fc2&displaylang=ja-nec>`_ から、
64ビット版は `こちら <http://www.microsoft.com/downloads/ja-jp/details.aspx?familyid=ba9257ca-337f-4b40-8c14-157cfdffee4e&displaylang=ja-nec>`_ から
ダウンロードしてください。


その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ easy_install blockdiag

.. note::

   `Sphinx-users.jp`_ で配布されている `スタンドアロンインストーラ`_ を利用すると
   簡単に Python, Sphinx, blockdiag シリーズを簡単にインストールすることができます。

   スタンドアロンインストーラの詳細は `こちら <http://sphinx-users.jp/gettingstarted/install_windows_standalone.html>`_ をご覧ください。

.. _Sphinx-users.jp: http://sphinx-users.jp/
.. _スタンドアロンインストーラ: http://sphinx-users.jp/gettingstarted/install_windows_standalone.html

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
   お好みに合わせてお使い下さい::

     % pypi-install funcparserlib
     % pypi-install webcolors
     % pypi-install blockdiag

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

   $ brew install freetype2
   $ sudo easy_install pil

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ sudo easy_install blockdiag

FreeBSD (ports) の場合
----------------------
portinstall コマンドで blockdiag パッケージをインストールします。

.. code-block:: bash

   $ sudo portinstall graphics/py-blockdiag japanese/font-ipa

NetBSD (pkgsrc) の場合
----------------------
blockdiag パッケージは pkgsrc に graphics/py-blockdiag として収録されています。
そのため、通常の pkgsrc の管理方法でインストールすることができます。

ここでは一般的な make を使った方法を紹介します。

.. code-block:: bash

   $ cd /usr/pkgsrc/graphics/py-blockdiag
   $ sudo make install

そのほかの環境の場合
--------------------
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
