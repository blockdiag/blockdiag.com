=================================================
seqdiag - simple sequence-diagram image generator
=================================================

`seqdiag` generates sequence-diagram images from .diag files
(similar to graphviz's DOT files).

You can get diagrams like this:

.. seqdiag::

   seqdiag {
     seqdiag -> "sequence-diagrams" [label = "generates"];
     seqdiag --> "is very easy!";
   }

.. toctree::

   introduction
   examples
   sphinxcontrib
   demo
