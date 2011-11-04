.. ==========================
   diagram attributes setting
   ==========================

======================
ダイアグラムの属性設定
======================

.. NAME
   ====

名前
====

ダイアグラムの属性の設定

.. SYNOPSIS
   ========

使い方
======

.. **attribute** = **value** ;

**属性名** = **設定値** ;

.. DESCRIPTION
  ===========

概要
====

ブロックダイアグ全体の属性を設定をします。

.. ATTRIBUTES
   ==========

属性
====

.. blockdiag_diagram_attr:: node_width = 数値

  ノードの幅を指定します。省略時は128です。


.. blockdiag_diagram_attr:: node_height = 数値

  ノードの高さを指定します。省略時は40です。


.. blockdiag_diagram_attr:: span_width = 数値

  ノード間の横幅を指定します。省略時は64です。


.. blockdiag_diagram_attr:: span_height = 数値

  ノード間の縦幅を指定します。省略時は40です。


.. blockdiag_diagram_attr:: default_fontsize = 数値

  ノードのラベル属性に使用するフォントサイズを指定します。省略時は11です。


.. blockdiag_diagram_attr:: default_shape = 形状

  ノードの形状のデフォルトを指定します。省略時はboxです。

  .. versionadded:: 0.7.2


.. blockdiag_diagram_attr:: orientation = portrait

  縦書きモードにします。省略時は横書きモードです。

  .. versionadded:: 0.7.0

.. blockdiag_diagram_attr:: default_node_color = #RRGGBB or 色名

  ノードのデフォルトの色を指定します。省略時は白です。

  .. versionadded:: 0.9.1

.. blockdiag_diagram_attr:: default_group_color = #RRGGBB or 色名

  グループのデフォルトの色を指定します。省略時はオレンジです。

  .. versionadded:: 0.9.1

.. blockdiag_diagram_attr:: default_linecolor = #RRGGBB or 色名

  ノードの枠とエッジのデフォルトの色を指定します。省略時は黒です。

  .. versionadded:: 0.9.1

.. blockdiag_diagram_attr:: default_textcolor  = #RRGGBB or 色名

  ノードラベル、エッジラベル、グループラベルのデフォルトの色を指定します。省略時は黒です。

  .. versionadded:: 0.9.2

.. EXAMPLES
   ========

設定例
======

.. node_width and node_height attribute to diagram
  -----------------------------------------------

node_width 属性と node_height 属性の設定例
------------------------------------------

.. literalinclude:: examples/diagram.node.diag
.. blockdiag:: examples/diagram.node.diag

.. span_width and span_height attribute to diagram
   -----------------------------------------------

span_width 属性と span_height 属性の設定例
------------------------------------------

.. literalinclude:: examples/diagram.span.diag
.. blockdiag:: examples/diagram.span.diag

.. default_fontsize attribute to diagram
   -------------------------------------

default_fontsize 属性の設定例
-----------------------------

.. literalinclude:: examples/diagram.fontsize.diag
.. blockdiag:: examples/diagram.fontsize.diag

.. default_shape attribute to diagram
   ----------------------------------

default_shape 属性の設定例
--------------------------

.. literalinclude:: examples/diagram.default_shape.diag
.. blockdiag:: examples/diagram.default_shape.diag

.. orientation attribute to diagram
   --------------------------------

orientation 属性の設定例
------------------------

.. literalinclude:: examples/diagram.orientation.diag
.. blockdiag:: examples/diagram.orientation.diag

default_node_color, default_group_color, default_linecolor, default_textcolor 属性の設定例
--------------------------------------------------------------------------------------------

.. literalinclude:: examples/diagram.default_color.diag
.. blockdiag:: examples/diagram.default_color.diag
