==========================
diagram attributes setting
==========================

NAME
============

Attribute settings of diagrams

SYNOPSIS
============

**attribute** = **value** ;

DESCRIPTION
============

Set attributes related to whole of the blockdiag.

ATTRIBUTES
============

.. blockdiag_diagram_attr:: node_width = Integer

   Specify default node width. Default is 128.

.. blockdiag_diagram_attr:: node_height = Integer

   Specify default node height. Default is 40.

.. blockdiag_diagram_attr:: span_width = Integer

   Specify default horizontal span between nodes. Default is 64.

.. blockdiag_diagram_attr:: span_height = Integer

   Specify default vertical span between nodes. Default is 40.

.. blockdiag_diagram_attr:: default_fontsize = Integer

   Specify default font size used at label attribute. Default is 11.

.. blockdiag_diagram_attr:: default_shape = Shape

   Specify default node shape. Default is box.

   .. versionadded:: 0.7.2

.. blockdiag_diagram_attr:: orientation = portrait

   Set portrait mode. Default is landscape mode.

   .. versionadded:: 0.7.0

.. blockdiag_diagram_attr:: default_node_color = #RRGGBB or colorname

   Specify node default color. Default is white.

   .. versionadded:: 0.9.1

.. blockdiag_diagram_attr:: default_group_color = #RRGGBB or colorname

   Specify group default color. Default is orange.

   .. versionadded:: 0.9.1

.. blockdiag_diagram_attr:: default_linecolor = #RRGGBB or colorname

   Specify node border and edge default color. Default is black.

   .. versionadded:: 0.9.1

.. blockdiag_diagram_attr:: default_textcolor  = #RRGGBB or colorname

   Specify default color of node label, edge label and group
   label. Default is black.

   .. versionadded:: 0.9.2

.. blockdiag_diagram_attr:: edge_layout  = normal or flowchart

   **Experimental** Specify how to layout edges. Default is normal.


EXAMPLES
========

node_width and node_height attribute to diagram
--------------------------------------------------

.. literalinclude:: examples/diagram.node.diag
.. blockdiag:: examples/diagram.node.diag

span_width and span_height attribute to diagram
--------------------------------------------------

.. literalinclude:: examples/diagram.span.diag
.. blockdiag:: examples/diagram.span.diag

default_fontsize attribute to diagram
--------------------------------------------------

.. literalinclude:: examples/diagram.default_fontsize.diag
.. blockdiag:: examples/diagram.default_fontsize.diag

default_shape attribute to diagram
--------------------------------------------------

.. literalinclude:: examples/diagram.default_shape.diag
.. blockdiag:: examples/diagram.default_shape.diag

orientation attribute to diagram
--------------------------------------------------

.. literalinclude:: examples/diagram.orientation.diag
.. blockdiag:: examples/diagram.orientation.diag

default_node_color, default_group_color, default_linecolor and default_textcolor attribute
-----------------------------------------------------------------------------------------------

.. literalinclude:: examples/diagram.default_color.diag
.. blockdiag:: examples/diagram.default_color.diag
