====================================
Sphinx 拡張：sphinxcontrib-blockdiag
====================================

`sphinxcontrib-blockdiag` を利用すると Sphinx の拡張機能として
`blockdiag` によるブロック図を埋め込むことができます。
ブロック図の埋め込みには `blockdiag` ディレクティブを利用します。

.. code-block:: text

   .. blockdiag::

       diagram admin {
         top_page -> config -> config_edit -> config_confirm -> top_page;
       }

.. blockdiag::

    diagram admin {
      top_page -> config -> config_edit -> config_confirm -> top_page;
    }

Sphinx の設定
=============

easy_install 経由の場合
-----------------------
以下のコマンドで `sphinxcontrib-blockdiag` をインストールします。:

   # easy_install sphinxcontrib-blockdiag


Sphinx プロジェクトの設定
-------------------------

Sphinx プロジェクトで `sphinxcontrib-blockdiag` を利用するには。
:file:`conf.py` の extensions に sphinxcontrib.blockdiag を追加します。
また、blockdiag_fontpath に利用する TrueType フォントへのパスを指定します。

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.blockdiag']

   # Fontpath for blockdiag (truetype font)
   blockdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


利用可能なディレクティブ
========================

.. describe:: .. blockdiag:: [filename]

   `blockdiag` ディレクティブは指定した箇所にブロック図を埋め込みます。
   ブロック図の元となるテキストはファイルもしくは
   テキストブロックで渡すことができます。

   ファイルを指定する場合は `blockdiag` ディレクティブの引数に
   ファイル名を指定します。

   テキストブロックを利用する場合は `blockdiag` ディレクティブ以降の行に
   ブロックを記述します。

   例::

      .. blockdiag:: foobar.diag

      .. blockdiag::

         diagram {
            // some diagrams are here.
         }


利用可能な設定オプション
========================

.. confval:: blockdiag_fontpath

   blockdiag で利用する TrueType フォントへのパスを指定します。

.. confval:: blockdiag_antialias

   :confval:`blockdiag_antialias` に True が指定された場合、
   アンチエイリアス処理を加えた画像を生成します(初期値：False)。
