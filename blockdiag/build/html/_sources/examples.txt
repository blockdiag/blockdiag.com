==============
Sample diagams
==============

blockdiag support .diag format.
.diag format is similar to graphviz's DOT format.


simple diagram
==============

.. code-block:: text

   diagram {
      A -> B -> C -> D;
      A -> E -> F -> G;
   }

.. blockdiag::

   diagram {
      A -> B -> C -> D;
      A -> E -> F -> G;
   }


label attribute to nodes
========================

.. code-block:: text

   diagram {
      // Set labels to nodes.
      A -> B -> C -> A;

      A [label = "foo"];
      B [label = "bar"];
      C [label = "baz"];
   }

.. blockdiag::

   diagram {
      // Set labels to nodes.
      A [label = "foo"];
      B [label = "bar"];
      C [label = "baz"];

      A -> B -> C -> A;
   }


style attribute to nodes and edges
==================================

.. code-block:: text

   diagram {
      // Set boder-style and backgroun-color to nodes.
      A [style = dotted];
      B [style = dashed];
      C [color = pink];
      D [color = "#888888"];

      // Set border-style and color to edges.
      A -> B [style = dotted];
      B -> C [style = dashed];
      C -> D [color = "red"];

      // Set numbered-badge to nodes.
      E [numbered = 99];

      // Set arrow direction to edges.
      E -> F [dir = none];
      F -> G [dir = forward];
      G -> H [dir = back];
      H -> I [dir = both];
   }

.. blockdiag::

   diagram {
      // Set boder-style and backgroun-color to nodes.
      A [style = dotted];
      B [style = dashed];
      C [color = pink];
      D [color = "#888888"];

      // Set border-style and color to edges.
      A -> B [style = dotted];
      B -> C [style = dashed];
      C -> D [color = "red"];

      // Set numbered-badge to nodes.
      E [numbered = 99];

      // Set arrow direction to edges.
      E -> F [dir = none];
      F -> G [dir = forward];
      G -> H [dir = back];
      H -> I [dir = both];
   }


mutlilingualization
===================

.. code-block:: text

   diagram admin {
      A [label = "起"];
      B [label = "承"];
      C [label = "転"];
      D [label = "結"];

      A -> B -> C -> D;

      // Use quoted string directly.
      "春" -> "夏" -> "秋" -> "冬";
   }

.. note::

   blockdiag supports UTF-8 encoding only.

.. blockdiag::

   diagram admin {
      A [label = "起"];
      B [label = "承"];
      C [label = "転"];
      D [label = "結"];

      A -> B -> C -> D;

      // Use quoted string directly.
      "春" -> "夏" -> "秋" -> "冬";
   }


grouping nodes
==============

.. code-block:: text

   diagram admin {
      A -> B -> C -> D;
      A -> E;

      group {
         A; B;
      }

      group {
         color = "#77FF77";
         E -> F -> G;
      }
   }

.. blockdiag::

   diagram admin {
      A -> B -> C -> D;
      A -> E;

      group {
         A; B;
      }

      group {
         // Set background-color to this group.
         color = "#77FF77";
         E -> F -> G;
      }
   }


Simple diagram for master data manager
======================================

.. code-block:: text

    diagram admin {
      index [label = "List of FOOs"];
      add [label = "Add FOO"];
      add_confirm [label = "Add FOO (confirm)"];
      edit [label = "Edit FOO"];
      edit_confirm [label = "Edit FOO (confirm)"];
      show [label = "Show FOO"];
      delete_confirm [label = "Delete FOO (confirm)"];

      index -> add  -> add_confirm  -> index;
      index -> edit -> edit_confirm -> index;
      index -> show -> index;
      index -> delete_confirm -> index;
    }

.. blockdiag::

    diagram admin {
      index [label = "List of FOOs"];
      add [label = "Add FOO"];
      add_confirm [label = "Add FOO (confirm)"];
      edit [label = "Edit FOO"];
      edit_confirm [label = "Edit FOO (confirm)"];
      show [label = "Show FOO"];
      delete_confirm [label = "Delete FOO (confirm)"];

      index -> add  -> add_confirm  -> index;
      index -> edit -> edit_confirm -> index;
      index -> show -> index;
      index -> delete_confirm -> index;
    }
