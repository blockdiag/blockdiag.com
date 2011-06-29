.. _sphinxcontrib-blockdiag:

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

.. warning::

   図に日本語を利用する場合は、必ず `blockdiag_fontpath` を設定して下さい。
   `blockdiag_fontpath` の設定方法は上記の例もしくは
   :ref:`sphinxcontrib_font_configrations` を参照して下さい。


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

.. _sphinxcontrib_font_configurations:

利用可能な設定オプション
========================

.. confval:: blockdiag_fontpath

   blockdiag で利用する TrueType フォントへのパスを指定します。
   標準ではフォントを利用せず PIL 標準のフォントを利用します。
   `blockdiag_fontpath` にはパス文字列もしくは
   パス文字列の配列を指定することができます。
   複数の環境で Sphinx プロジェクトを共有している場合は、
   パス文字列の配列を指定することで環境の違いを吸収することができます。

   .. warning::

      PIL 標準のフォントは日本語フォントを含みません。
      そのため、日本語を利用する場合は必ずフォントを設定して下さい。

   .. versionadded:: 0.8.3

      `blockdiag_fontpath` にパス文字列の配列を指定する

.. confval:: blockdiag_antialias

   :confval:`blockdiag_antialias` に True が指定された場合、
   アンチエイリアス処理を加えた画像を生成します(初期値：False)。
