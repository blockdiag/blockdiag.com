================================================
blockdiag - simple block-diagram image generator
================================================

`blockdiag` generate block-diagram image file from .diag file.  
.diag file is similar to DOT file (graphviz's).

You can get diagrams like this.

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
