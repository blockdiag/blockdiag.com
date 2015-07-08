=======================
node attributes setting
=======================

NAME
====

Attribute settings of nodes.


SYNOPSIS
========

**node_id**  [ **attribute** ];

**node_id**  [ **attribute** = **value** ];

**node_id**  [ **attribute** = **value** , **attribute** = **value** , ... ];

DESCRIPTION
===========

Set attributes related to nodes.

Separate by ',' to use multiple attributes. If strings which is used
to specify attributes include white-spaces or symbols, quotation is
needed.


ATTRIBUTES
==========

.. blockdiag_node_attr:: label = String

   Specify label which is draw on the node. Default is **node_id**.

.. blockdiag_node_attr:: style = Type of line

   Specify the line type of node border. Default is solid line.

  **dotted**
    Surround with dotted line.

  **dashed**
    Surround with dashed line.

  **Number, Number, ...**
    Specify line length and space length alternately with comma separated.

    .. versionadded:: 0.9.6

.. blockdiag_node_attr:: color = #RRGGBB or colorname

   Specify node background color. If **none** is specified, the node
   becomes transparent. Default is white.

.. blockdiag_node_attr:: numbered = Integer

   Set number to the node.

   When you use desctable option on the Sphinx extension, a row named
   'No.' is added to the table. Use description to enable desctable option.

.. blockdiag_node_attr:: shape = Type of shape

   Specify shape of the node. Default is **box**. See :ref:`nodeshapes`.

   You can use other shapes by using renderer plugins. Please search
   'blockdiagcontrib' on the `PyPi <http://pypi.python.org/pypi>`_.

   .. versionadded:: 0.6.5
      (experimental)

   .. versionadded:: 0.6.6
      actor shape

   .. versionadded:: 0.8.2
      dots shape

.. blockdiag_node_attr:: background = background image

   Set background image to the node. File path or URL can be used.

.. blockdiag_node_attr:: stacked

   Set nodes to stacked.

   .. versionadded:: 0.8.2

.. blockdiag_node_attr:: description = description

   When you use desctable option on the Sphinx extension, draw a table
   below the blockdiag.

   Name and description will be shown on the column. **Node ID** or
   **label attribute** will be used to the name.

   .. versionadded:: 0.8.0

.. blockdiag_node_attr:: icon = Image file

   Set the image on the node. File path or URL can be used.

   .. versionadded:: 0.9.0

.. blockdiag_node_attr:: textcolor = #RRGGBB or colorname

   Specify node label color. Default is black.

   .. versionadded:: 0.9.2

.. blockdiag_node_attr:: width = Integer

   Specify the node width. Default is 128.

   .. versionadded:: 0.9.5

.. blockdiag_node_attr:: height = Integer

   Specify the node height. Default is 40.

   .. versionadded:: 0.9.5

.. blockdiag_node_attr:: fontsize = Integer

   Specify label font size of the node. Default is 11.

   .. versionadded:: 0.9.7

.. blockdiag_node_attr:: rotate = Integer

   Specify angle of text rotation. 0, 90, 180 and 270 are supported. Default is 0.

EXAMPLES
========

label attribute to nodes
------------------------

.. literalinclude:: examples/node.label.diag
.. blockdiag:: examples/node.label.diag

style attribute to nodes
------------------------

.. literalinclude:: examples/node.style.diag
.. blockdiag:: examples/node.style.diag

color attribute to nodes
------------------------

.. literalinclude:: examples/node.color.diag
.. blockdiag:: examples/node.color.diag

numbered attribute to nodes
---------------------------

.. literalinclude:: examples/node.numbered.diag
.. blockdiag:: examples/node.numbered.diag

shape attribute to nodes
------------------------

.. literalinclude:: examples/node.shape.diag
.. blockdiag:: examples/node.shape.diag

background attribute to nodes
-----------------------------

.. literalinclude:: examples/node.background.diag
.. blockdiag:: examples/node.background.diag

stacked attribute to nodes
--------------------------

.. literalinclude:: examples/node.stacked.diag
.. blockdiag:: examples/node.stacked.diag

description attribute to nodes
------------------------------

.. literalinclude:: examples/node.description.diag
.. blockdiag:: examples/node.description.diag
  :desctable:

Icon attributes to nodes
------------------------

.. literalinclude:: examples/node.icon.diag
.. blockdiag:: examples/node.icon.diag

textcolor attributes to nodes
------------------------------

.. literalinclude:: examples/node.textcolor.diag
.. blockdiag:: examples/node.textcolor.diag

width and height attributes to nodes
----------------------------------------

.. literalinclude:: examples/node.width-height.diag
.. blockdiag:: examples/node.width-height.diag

fontsize attributes to nodes
-----------------------------

.. literalinclude:: examples/node.fontsize.diag
.. blockdiag:: examples/node.fontsize.diag

