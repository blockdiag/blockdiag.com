.. =======================
   edge attributes setting
   =======================

================
エッジ属性の設定
================

.. NAME
   ====

名前
====

ブロックダイアグのエッジ属性の設定

.. SYNOPSIS
   ========

使い方
======

..
   **node_A -> node_B -> ...**  [ **attribute** ];

   **node_A -> node_B -> ...**  [ **attribute** = **value** ];

   **node_A -> node_B -> ...**  [ **attribute** = **value** , **attribute** = **value** , ... ];

**ノードA -> ノードB -> ...** [ **属性名** ];

**ノードA -> ノードB -> ...** [ **属性名** = **設定値** ];

**ノードA -> ノードB -> ...** [ **属性名** = **設定値** , **属性名** = **設定値** , ... ];


.. DESCRIPTION
   ===========

概要
====

エッジ属性の設定をします。

属性を複数指定するときはカンマで区切ります。属性に指定する文字列に記号や空白が含まれる場合はクオートが必要です。

.. ATTRIBUTES
   ==========

属性
====

.. blockdiag_edge_attr:: label = 文字列

  短い文をエッジに表示します。


.. blockdiag_edge_attr:: style = 線の種類

  エッジの線の種類を指定します。省略時は実線で繋ぎます。

  **dotted**
    点線で繋ぎます。

  **dashed**
    破線で繋ぎます。

  **none**
    エッジを消します。


.. blockdiag_edge_attr:: color = #RRGGBB or 色名

  エッジの色を指定します。省略時は黒です。 **none** を指定すると透明の矢印を書きます。


.. blockdiag_edge_attr:: dir = 向き

  矢印の向きを指定します。

  **none**
    矢印を書かずにノードを繋ぎます。

    ``A -- B`` と等価です。

  **forward**
    矢印を左のノードから右のノード、または上のノードから下のノードに向かって書きます。

    ``A -> B`` と等価です。

  **back**
    矢印を右のノードから左のノード、または下のノードから上のノードに向かって書きます。

    ``A <- B`` と等価です。

  **both**
    矢印を両方に書きます。

    ``A <-> B`` と等価です。


.. blockdiag_edge_attr:: folded

  エッジを折り返します。

  .. versionadded:: 0.7.5

.. EXAMPLES
   ========

設定例
=======

.. label attribute to edges
   ------------------------

label 属性の設定例
------------------

.. literalinclude:: examples/edge.label.diag
.. blockdiag:: examples/edge.label.diag

.. style attribute to edges
   ------------------------

style 属性の設定例
------------------

.. literalinclude:: examples/edge.style.diag
.. blockdiag:: examples/edge.style.diag

.. color attribute to edges
   ------------------------

color 属性の設定例
------------------

.. literalinclude:: examples/edge.color.diag
.. blockdiag:: examples/edge.color.diag

.. dir attribute to edges
   ----------------------

dir 属性の設定例
----------------

.. literalinclude:: examples/edge.dir.diag
.. blockdiag:: examples/edge.dir.diag

.. folded attribute to edges
   -------------------------

folded 属性の設定例
-------------------

.. literalinclude:: examples/edge.folded.diag
.. blockdiag:: examples/edge.folded.diag
