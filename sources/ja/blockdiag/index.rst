==============================
ブロック図生成ツール blockdiag
==============================

`blockdiag` はシンプルなテキストからブロック図を生成する
ブロック図生成ツールです。

`blockdiag` を用いると以下のような図が簡単に生成できます。

.. blockdiag::

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

.. toctree::

   introduction
   examples
   embed_diagram
   sphinxcontrib
   demo
