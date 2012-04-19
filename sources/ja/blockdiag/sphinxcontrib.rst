.. _sphinxcontrib-blockdiag:

====================================
Sphinx 拡張：sphinxcontrib-blockdiag
====================================

`sphinxcontrib-blockdiag` を利用すると Sphinx の拡張機能として
`blockdiag` によるブロック図を埋め込むことができます。
ブロック図の埋め込みには `blockdiag` ディレクティブを利用します。

.. code-block:: text

   .. blockdiag::

       blockdiag admin {
         top_page -> config -> config_edit -> config_confirm -> top_page;
       }

.. blockdiag::

    blockdiag admin {
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
   :ref:`sphinxcontrib_font_configurations` を参照して下さい。


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

         blockdiag {
            // some diagrams are here.
         }

   ``maxwidth`` オプションを指定すると画像の横幅を調整することができます。
   ``maxwidth`` オプションの引数はピクセルで指定します。

   Examples::

      .. blockdiag::
         :maxwidth: 240

         blockdiag {
            // some diagrams are here.
         }

   .. versionadded:: 0.9.0

   各ノードに対する説明を掲載する場合は `description` 属性と
   ``desctable`` オプションを使用して、ノードの説明表を生成することができます。

   入力::

      .. blockdiag::
         :desctable:

         blockdiag {
            A -> B -> C;
            A [description = "browsers in each client"];
            B [description = "web server"];
            C [description = "database server"];
         }

   出力

   .. blockdiag::
      :desctable:

      blockdiag {
         A -> B -> C;
         A [description = "browsers in each client"];
         B [description = "web server"];
         C [description = "database server"];
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

   :confval:`blockdiag_antialias` は PNG 画像生成時に
   アンチエイリアス処理を行うかどうかを指定します。

   `True` が指定された場合アンチエイリアス処理を実行します(初期値： `False` )。

.. confval:: blockdiag_html_image_format

   :confval:`blockdiag_html_image_format` は HTML に変換する際に
   利用する画像形式を指定します。PNG もしくは SVG を指定することができます。

.. confval:: blockdiag_tex_image_format

   :confval:`blockdiag_tex_image_format` は TeX に変換する際に
   利用する画像形式を指定します。PNG もしくは PDF を指定することができます。

   PDF を利用するとベクター形式でブロック図を埋め込むことができます。
   ( `blockdiag` の PDF 出力機能を利用するため
   `reportlab` のインストールが必要です)
