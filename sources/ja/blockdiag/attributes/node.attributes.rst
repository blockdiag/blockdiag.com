.. =======================
   node attributes setting
   =======================

================
ノード属性の設定
================

.. NAME
   ====

名前
====

ブロックダイアグのノード属性の設定

.. SYNOPSIS
   ========

使い方
======

..
   **node_id**  [ **attribute** ];

   **node_id**  [ **attribute** = **value** ];

   **node_id**  [ **attribute** = **value** , **attribute** = **value** , ... ];

**ノードID** [ **属性名** ];

**ノードID** [ **属性名** = **設定値** ];

**ノードID** [ **属性名** = **設定値** , **属性名** = **設定値** , ...];


.. DESCRIPTION
   ===========

概要
====

ノード属性の設定をします。

属性を複数指定するときはカンマで区切ります。属性に指定する文字列に記号や空白が含まれる場合はクオートが必要です。

.. ATTRIBUTES
   ==========

属性
====

.. blockdiag_node_attr:: label = 文字列

  .. ノードに表示するラベルを定義します。省略された場合は **node_id** が利用されます。

  ノードに表示するラベルを定義します。省略された場合は **ノードID** が利用されます。


.. blockdiag_node_attr:: style = 線の種類

  ノードを囲む境界線の種類を指定します。省略時は実線で囲います。

  **dotted**
    点線で囲います。

  **dashed**
    破線で囲います。


.. blockdiag_node_attr:: color = #RRGGBB or 色名

  ノードの背景色を指定します。 **none** を指定すると透明になります。指定がない場合は白です。


.. blockdiag_node_attr:: numbered = 数値

  ノードに番号を振ります。

  Sphinx 拡張で desctable オプションを利用している場合、テーブルに No 列が追加されます。desctable オプションは description を使うことによって有効になります。


.. blockdiag_node_attr:: shape = 形状の名前

  ノードの形状を指定します。省略時は **box** です。

  形状はレンダラプラグインによって拡張することが可能です。

  .. todo:: ずらずらと書いてみる

  .. versionadded:: 0.6.5
     (experimental)

  .. versionadded:: 0.6.6
     actor shape

  .. versionadded:: 0.8.2
     dots shape


.. blockdiag_node_attr:: background = 背景画像

  ノードに背景画像を張り付けます。ファイルパス、または URL で指定できます。


.. blockdiag_node_attr:: stacked

  ノードを重ね合わせた状態にします。

  .. versionadded:: 0.8.2


.. blockdiag_node_attr:: description = 説明文

  Sphinx 拡張で desctable オプションを利用している場合、図の下にテーブルを表示します。

  表示される列は name と description です。 name には **ノードID** または **label** 属性が利用されます。

  .. versionadded:: 0.8.0

.. blockdiag_node_attr:: icon = 画像ファイル

  ノードにアイコンを設定します。ファイルパス、または URL で指定できます。

  .. versionadded:: 0.9.0

.. blockdiag_node_attr:: textcolor = #RRGGBB or 色名

  ノードのラベルの色を指定します。省略時は黒です。

  .. versionadded:: 0.9.2

.. blockdiag_node_attr:: width = 数値

  ノードの幅を指定します。省略時は128です。

  .. versionadded:: 0.9.5

.. blockdiag_node_attr:: height = 数値

  ノードの高さを指定します。省略時は40です。

  .. versionadded:: 0.9.5

.. EXAMPLES
   ========

設定例
======

.. label attribute to nodes
   ------------------------

label 属性の設定例
------------------

.. literalinclude:: examples/node.label.diag
.. blockdiag:: examples/node.label.diag

.. style attribute to nodes
   ------------------------

style 属性の設定例
------------------

.. literalinclude:: examples/node.style.diag
.. blockdiag:: examples/node.style.diag

.. color attribute to nodes
   ------------------------

color 属性の設定例
------------------

.. literalinclude:: examples/node.color.diag
.. blockdiag:: examples/node.color.diag

.. numbered attribute to nodes
   ---------------------------

numbered 属性の設定例
---------------------

.. literalinclude:: examples/node.numbered.diag
.. blockdiag:: examples/node.numbered.diag

.. shape attribute to nodes
   ------------------------

shape 属性の設定例
------------------

.. literalinclude:: examples/node.shape.diag
.. blockdiag:: examples/node.shape.diag

.. background attribute to nodes
   -----------------------------

background 属性の設定例
-----------------------

.. literalinclude:: examples/node.background.diag
.. blockdiag:: examples/node.background.diag

.. stacked attribute to nodes
   --------------------------

stacked 属性の設定例
--------------------

.. literalinclude:: examples/node.stacked.diag
.. blockdiag:: examples/node.stacked.diag

.. description attribute to nodes
   ------------------------------

description 属性の設定例
------------------------

.. literalinclude:: examples/node.description.diag
.. blockdiag:: examples/node.description.diag
  :desctable:

icon 属性の設定例
-----------------

.. literalinclude:: examples/node.icon.diag
.. blockdiag:: examples/node.icon.diag

textcolor 属性の設定例
-----------------

.. literalinclude:: examples/node.textcolor.diag
.. blockdiag:: examples/node.textcolor.diag
