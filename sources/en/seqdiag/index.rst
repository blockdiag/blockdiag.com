=================================================
seqdiag - simple sequence-diagram image generator
=================================================

`seqdiag` generate sequence-diagram image file from .diag file.  
.diag file is similar to DOT file (graphviz's).

You can get diagrams like this.

.. seqdiag::

   diagram {
     seqdiag -> "sequence-diagrams" [label = "generates"];
     seqdiag --> "is very easy!";
   }

.. toctree::

   introduction
   examples
   sphinxcontrib
   demo
