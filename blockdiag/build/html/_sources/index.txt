================================================
blockdiag - simple block-diagram image generator
================================================

`blockdiag` generate block-diagram image file from spec-text file.

.. blockdiag::

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

.. toctree::

   introduction
   examples
   sphinxcontrib
