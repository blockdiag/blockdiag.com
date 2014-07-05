.. _blockdiag-sample-diagrams:

==============
Sample diagams
==============

simple diagram
==============

.. literalinclude:: diagrams/simple.diag
.. blockdiag:: diagrams/simple.diag


label attributes to nodes and edges
===================================

.. versionadded:: 0.9.2
   Add textcolor attribute

.. literalinclude:: diagrams/node_labels.diag
.. blockdiag:: diagrams/node_labels.diag


style attributes to nodes and edges
===================================

.. versionadded:: 0.9.0
   node.icon attribute

.. versionadded:: 0.9.2
   node.textcolor attribute
.. versionadded:: 0.9.5
   node.width and node.height attribute

.. versionadded:: 0.9.6
   node.style and edge.style supports dashed_array format style

.. literalinclude:: diagrams/node_attributes.diag
.. blockdiag:: diagrams/node_attributes.diag


branched edges
==============

.. versionadded:: 0.7.5

.. literalinclude:: diagrams/branched_edge.diag
.. blockdiag:: diagrams/branched_edge.diag


direction of edges
==================

.. versionadded:: 0.5.5

.. literalinclude:: diagrams/edge_direction.diag
.. blockdiag:: diagrams/edge_direction.diag


edge folding
============

.. versionadded:: 0.6.1

.. literalinclude:: diagrams/folded_edges.diag
.. blockdiag:: diagrams/folded_edges.diag


mutlilingualization
===================

.. literalinclude:: diagrams/multilingualization.diag
.. note::

   blockdiag supports UTF-8 encoding only.

.. blockdiag:: diagrams/multilingualization.diag


.. _nodeshapes:

shape of nodes
==============

.. versionadded:: 0.6.6
   actor shape

.. versionadded:: 0.8.2
   dots shape

.. versionadded:: 1.1.0
   square shape and circle shape

.. literalinclude:: diagrams/node_shapes.diag
.. blockdiag:: diagrams/node_shapes.diag

Using stacked attribute
-----------------------

.. versionadded:: 0.8.2

.. literalinclude:: diagrams/stacked_node_shape.diag
.. blockdiag:: diagrams/stacked_node_shape.diag

Using dots shape
----------------

.. versionadded:: 0.8.2

.. literalinclude:: diagrams/dots_shape.diag
.. blockdiag:: diagrams/dots_shape.diag


grouping nodes
==============

.. versionadded:: 0.5.3
   label attribute for group

.. versionadded:: 0.6
   nested groups

.. versionadded:: 0.7.5
   group definition within node-attributes

.. versionadded:: 0.9.2
   textcolor attribute

.. versionadded:: 1.0.1
   shape attribute

.. literalinclude:: diagrams/node_groups.diag
.. blockdiag:: diagrams/node_groups.diag

font settings
==============

.. versionadded:: 0.9.7
   fontsize attribute

.. literalinclude:: diagrams/font_settings.diag
.. blockdiag:: diagrams/font_settings.diag


diagram attributes
==================

.. versionadded:: 0.7.2
   default_shape

.. versionadded:: 0.9.1
   default_node_color, default_group_color, default_line_color (deprecated)

.. versionadded:: 0.9.2
   default_text_color (deprecated)

.. versionadded:: 1.0.0
   default_textcolor, default_linecolor

.. literalinclude:: diagrams/diagram_attributes.diag
.. blockdiag:: diagrams/diagram_attributes.diag


define classes
==============

.. versionadded:: 0.9.7
   (experimental)

.. literalinclude:: diagrams/class.diag
.. blockdiag:: diagrams/class.diag


portrait mode
=============

.. versionadded:: 0.7.0

.. literalinclude:: diagrams/portrait_diagram.diag
.. blockdiag:: diagrams/portrait_diagram.diag


portrait group
==============

.. versionadded:: 0.7.4

.. literalinclude:: diagrams/portrait_group.diag
.. blockdiag:: diagrams/portrait_group.diag


Simple diagram for master data manager
======================================

.. literalinclude:: diagrams/masterdata_manager.diag
.. blockdiag:: diagrams/masterdata_manager.diag
