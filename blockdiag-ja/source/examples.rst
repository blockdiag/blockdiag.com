.. _sample-diagrams:

============
出力サンプル
============

シンプルなブロック図
====================

.. literalinclude:: diagrams/simple.diag
.. blockdiag:: diagrams/simple.diag


ラベルの設定
============

.. literalinclude:: diagrams/node_labels.diag
.. blockdiag:: diagrams/node_labels.diag


ノード、エッジのカスタマイズ
============================

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
.. note::

   `blockdiag` では UTF-8 エンコード以外の文字コードを扱うことはできません。

.. blockdiag:: diagrams/multilingualization.diag


ノード形状の変更
================

.. versionadded:: 0.6.5
   (experimental)

.. versionadded:: 0.6.6
   actor shape

.. literalinclude:: diagrams/node_shapes.diag
.. blockdiag:: diagrams/node_shapes.diag


グルーピング
============

.. versionadded:: 0.5.3
   グループラベルに対応

.. versionadded:: 0.6
   グループの入れ子に対応

.. versionadded:: 0.7.5
   ノード属性として group キーワードを追加

.. literalinclude:: diagrams/node_groups.diag
.. blockdiag:: diagrams/node_groups.diag


図全体の設定
============

.. versionadded:: 0.7.2
   default_shape を追加

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
