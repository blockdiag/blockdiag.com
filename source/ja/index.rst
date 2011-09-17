==============================
ブロック図生成ツール blockdiag
==============================
`blockdiag` シリーズはシンプルなテキストからブロック図などの画像を生成する画像生成ツール群です。

`blockdiag` を用いると以下のような図が簡単に生成できます。

.. blockdiag::

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

`blockdiag` の主な機能:

* 数種類の図に対応
   * ブロック図 (blockdiag コマンド)
   * シーケンス図 (seqdiag コマンド)
   * アクティビティ図 (actdiag コマンド)
   * 論理ネットワーク図 (actdiag コマンド)
* テキストベースの定義ファイルから画像ファイルを生成 (graphviz 風の文法を採用)
* 定義にあわせて図の配置を自動的に決定 (自動レイアウト)
* Sphinx, Trac, Redmine, 各種 Wiki エンジン等、多様なシステムへの画像埋め込みに対応


Enjoy documentation with blockdiag !

Table of contents
=================

.. toctree::
   :maxdepth: 1

   blockdiag/index
   seqdiag/index
   actdiag/index
   nwdiag/index
