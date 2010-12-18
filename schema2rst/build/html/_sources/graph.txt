
Schema: sample
==============

.. graphviz::

   digraph {
      node [shape = box];
      order_history [label="order_history\n(購入履歴)"];
      order_history -> users;
      order_history -> items;
      items [label="items\n(商品)"];
      users [label="users\n(ユーザ)"];
      uncommented_table;
   }
