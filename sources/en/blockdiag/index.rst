================================================
blockdiag - simple block-diagram image generator
================================================

`blockdiag` generates block-diagram images from .diag files
(similar to graphviz's DOT files).

You can get diagrams like this:

.. blockdiag::

   blockdiag {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

.. toctree::
   :maxdepth: 3

   introduction
   attributes/index
   examples
   embed_diagram
   sphinxcontrib
   demo
