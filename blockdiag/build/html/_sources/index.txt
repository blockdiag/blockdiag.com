================================================
blockdiag - simple block-diagram image generator
================================================

`blockdiag` generate block-diagram image file from .diag file.  
.diag file is similar to DOT file (graphviz's).

You can get diagrams like this.

.. blockdiag::
   :desctable:

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow", description = "script>alert('hello');/script>"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

.. toctree::

   introduction
   examples
   sphinxcontrib
   demo
