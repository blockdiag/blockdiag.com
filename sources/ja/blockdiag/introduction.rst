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
`32ビット版 <http://www.microsoft.com/downloads/ja-jp/details.aspx?familyid=a5c84275-3b97-4ab7-a40d-3802b2af5fc2&displaylang=ja-nec>`_ と
`64ビット版 <http://www.microsoft.com/downloads/ja-jp/details.aspx?familyid=ba9257ca-337f-4b40-8c14-157cfdffee4e&displaylang=ja-nec>`_ が存在するため、
環境に合わせて適切なものをダウンロードしてください。

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ easy_install blockdiag

.. note::

   `Sphinx-users.jp`_ で配布されている `スタンドアロンインストーラ`_ を利用すると
   簡単に Python, Sphinx, blockdiag シリーズを簡単にインストールすることができます。

   スタンドアロンインストーラの詳細は `こちら <http://sphinx-users.jp/gettingstarted/install_windows_standalone.html>`_ をご覧ください。

.. _Sphinx-users.jp: http://sphinx-users.jp/
.. _スタンドアロンインストーラ: http://sphinx-users.jp/gettingstarted/install_windows_standalone.html

Windows (Cygwin) の場合 
------------------------
setup.exe で依存パッケージのビルドに必要な gcc4 と libmpfr4 をインストールします。

その後、easy_install コマンドで依存パッケージと `blockdiag` をインストールします。

.. code-block:: bash

   $ easy_install pillow
   $ easy_install blockdiag

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

CentOS 6.2 の場合
---------------------
yum コマンドで依存パッケージをインストールします。

.. code-block:: bash

   $ sudo yum install python-setuptools python-imaging ipa-gothic-fonts

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
brew コマンドで依存パッケージをインストールします。

.. code-block:: bash

   $ brew install freetype

その後、easy_install コマンドにて `blockdiag` をインストールします。

.. code-block:: bash

   $ easy_install blockdiag

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


.. note:: エラーが出る場合

   blockdiag のインストール後、コマンドを実行した時に **The _imagingft C module is not installed** というエラーが出る場合、
   PIL パッケージの再インストールを行なってください。
   PIL パッケージが libfreetype2 にリンクされていない場合、上記のエラーが発生することがあります。


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

.. note::

   SVG 形式でブロック図を生成する場合、いわゆるプログラミングフォントの利用は推奨されません。
   これらのフォントを利用した場合、生成された画像のテキスト部分が崩れてしまう可能性があります。
   blockdiag はテキストのメトリクス情報(幅や高さなど)を取得するためだけにフォントを利用し、
   フォントの情報を SVG 画像に埋め込まないため、ビュアー側のフォントとの差異によって
   崩れが発生してしまうためです。

   IPAex フォントなどの、一般用途に用いられるフォントを利用することを推奨します。


事前に入れておくべきソフトウェア
================================
* Python 2.6, 2.7, 3.2 および 3.3 以降
* Pillow 2.2.1 以降
* funcparserlib 0.3.6 以降
* setuptools もしくは distribute.


ライセンス
==========
Apache License 2.0
