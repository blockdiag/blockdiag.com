============
出力サンプル
============

シンプルなブロック図
====================

.. literalinclude:: diagrams/simple.diag
.. blockdiag:: diagrams/simple.diag


ラベルの設定
============

.. versionadded:: 0.9.2
   textcolor 属性を追加

.. literalinclude:: diagrams/node_labels.diag
.. blockdiag:: diagrams/node_labels.diag


ノード、エッジのカスタマイズ
============================

.. versionadded:: 0.9.0
   icon 属性を追加

.. versionadded:: 0.9.2
   textcolor 属性を追加

.. versionadded:: 0.9.5
   width と height 属性を追加

.. literalinclude:: diagrams/node_attributes.diag
.. blockdiag:: diagrams/node_attributes.diag


複数ノード間の接続
==================

.. versionadded:: 0.7.5

.. literalinclude:: diagrams/branched_edge.diag
.. blockdiag:: diagrams/branched_edge.diag


エッジの向きを変更する
======================

.. versionadded:: 0.5.5

.. literalinclude:: diagrams/edge_direction.diag
.. blockdiag:: diagrams/edge_direction.diag


エッジの折り返し
================

.. versionadded:: 0.6.1

.. literalinclude:: diagrams/folded_edges.diag
.. blockdiag:: diagrams/folded_edges.diag


日本語の利用
============

.. literalinclude:: diagrams/multilingualization.diag
.. blockdiag:: diagrams/multilingualization.diag

.. note::

   `blockdiag` では UTF-8 エンコード以外の文字コードを扱うことはできません。

.. warning::

   日本語を含んだ図の出力に失敗する場合は、
   日本語フォントが選択されていない可能性があります。
   :ref:`blockdiag_font_configurations` もしくは
   :ref:`sphinxcontrib_font_configurations` (Sphinx) を参考に
   フォントの設定を確認して下さい。


ノード形状の変更
================

.. versionadded:: 0.6.6
   actor shape に対応

.. versionadded:: 0.8.2
   dots shape に対応

.. literalinclude:: diagrams/node_shapes.diag
.. blockdiag:: diagrams/node_shapes.diag

stacked 属性の利用
------------------

.. versionadded:: 0.8.2

.. literalinclude:: diagrams/stacked_node_shape.diag
.. blockdiag:: diagrams/stacked_node_shape.diag

dots 形状の利用
---------------

.. versionadded:: 0.8.2

.. literalinclude:: diagrams/dots_shape.diag
.. blockdiag:: diagrams/dots_shape.diag


グルーピング
============

.. versionadded:: 0.5.3
   グループラベルに対応

.. versionadded:: 0.6
   グループの入れ子に対応

.. versionadded:: 0.7.5
   ノード属性として group キーワードを追加

.. versionadded:: 0.9.1
   デフォルトの背景色を指定できるように default_group_color 属性を追加

.. versionadded:: 0.9.2
   グループラベルの色を指定できるように textcolor 属性を追加

.. literalinclude:: diagrams/node_groups.diag
.. blockdiag:: diagrams/node_groups.diag


図全体の設定
============

.. versionadded:: 0.7.2
   default_shape を追加

.. versionadded:: 0.9.1
   default_node_color, default_group_color, default_line_color を追加

.. versionadded:: 0.9.2
   default_text_color を追加

.. literalinclude:: diagrams/diagram_attributes.diag
.. blockdiag:: diagrams/diagram_attributes.diag


縦書きモード
============

.. versionadded:: 0.7.0

.. literalinclude:: diagrams/portrait_diagram.diag
.. blockdiag:: diagrams/portrait_diagram.diag


グループの縦書き化
==================

.. versionadded:: 0.7.4

.. literalinclude:: diagrams/portrait_group.diag
.. blockdiag:: diagrams/portrait_group.diag


シンプルな管理画面の画面遷移図(例)
==================================

.. literalinclude:: diagrams/masterdata_manager.diag
.. blockdiag:: diagrams/masterdata_manager.diag
