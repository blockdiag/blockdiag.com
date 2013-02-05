=======================
edge attributes setting
=======================

NAME
=========

Attribute settings of edges.

SYNOPSIS
========

**node_A -> node_B -> ...**  [ **attribute** ];

**node_A -> node_B -> ...**  [ **attribute** = **value** ];

**node_A -> node_B -> ...**  [ **attribute** = **value** , **attribute** = **value** , ... ];

DESCRIPTION
===========

Set attributes related to edges.

..
  属性を複数指定するときはカンマで区切ります。属性に指定する文字列に記号や空白が含まれる場合はクオートが必要です。

Separate by ',' to use multiple attributes. If strings which is used
to specify attributes include white-spaces or symbols, quotation is
needed.

ATTRIBUTES
==========

.. blockdiag_edge_attr:: label = String

   Show short strings on the edge.

.. blockdiag_edge_attr:: style = Type of edge line

   Specify type of edge line. Default is solid.

   **dotted**
     Dotted line.

   **dashed**
     Dashed line.

   **none**
     Edge is not shown.

   **Number, Number, ...**
     Specify line length and space length alternately with comma separated.

   .. versionadded:: 0.9.6

.. todo::

  .. blockdiag_edge_attr:: hstyle = Type of head shape

    Specify head shape of edge.

    .. versionadded:: 0.7.3

    **generalization**
      generalization

    **composition**
      composition

    **aggregation**
      aggregation


.. blockdiag_edge_attr:: color = #RRGGBB or colorname

   Specify edge color. Default is black. If **none** is specified,
   draw a transparent arrow.

.. blockdiag_edge_attr:: dir = direction

  Specify direction of edge arrow.

  **none**
    Not draw an arrow, just connect nodes.

    This is equivalent for ``A -- B``.

  **forward**
    Draw an arrow from left node to right node or upside node to downside node.

    This is equivalent for ``A -> B``.

  **back**
    Draw an arrow from right node to left node or downside node to upside node.

    This is equivalent for ``A <- B``.

  **both**
    Draw arrows at both side.

    This is equivalent for ``A <-> B``.

.. blockdiag_edge_attr:: folded

   Fold the edge.

   .. versionadded:: 0.7.5

.. blockdiag_edge_attr:: textcolor = #RRGGBB or colorname

   Specify edge label color. Default is black.

   .. versionadded:: 0.9.2

.. blockdiag_edge_attr:: thick

   ..
     エッジを太くします。

   Make the edge thick.

   .. versionadded:: 0.9.7

.. blockdiag_edge_attr:: fontsize = Integer

   Specify edge label font size. Default is 11.

   .. versionadded:: 0.9.7

EXAMPLES
========

label attribute to edges
------------------------

.. literalinclude:: examples/edge.label.diag
.. blockdiag:: examples/edge.label.diag

style attribute to edges
------------------------

.. literalinclude:: examples/edge.style.diag
.. blockdiag:: examples/edge.style.diag

color attribute to edges
------------------------

.. literalinclude:: examples/edge.color.diag
.. blockdiag:: examples/edge.color.diag

dir attribute to edges
----------------------

.. literalinclude:: examples/edge.dir.diag
.. blockdiag:: examples/edge.dir.diag

folded attribute to edges
-------------------------

.. literalinclude:: examples/edge.folded.diag
.. blockdiag:: examples/edge.folded.diag

text color attribute to edges
--------------------------------

.. literalinclude:: examples/edge.textcolor.diag
.. blockdiag:: examples/edge.textcolor.diag

font size attribute to edges
-----------------------------

.. literalinclude:: examples/edge.fontsize.diag
.. blockdiag:: examples/edge.fontsize.diag

thick attribute to edges
-------------------------

.. literalinclude:: examples/edge.thick.diag
.. blockdiag:: examples/edge.thick.diag
