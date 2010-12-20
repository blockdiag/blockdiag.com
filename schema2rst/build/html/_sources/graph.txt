
Schema: sample
==============

.. graphviz::

   digraph {
      node [shape = box];
      items [label="items\n(商品)"];
      order_history [label="order_history\n(購入履歴)"];
      order_history -> users;
      order_history -> items;
      uncommented_table;
      users [label="users\n(ユーザ)"];
   }
