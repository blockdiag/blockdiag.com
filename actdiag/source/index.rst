=================================================
actdiag - simple activity-diagram image generator
=================================================

`actdiag` generate activity-diagram image file from .diag file.  
.diag file is similar to DOT file (graphviz's).

You can get diagrams like this.

.. actdiag::

   diagram {
     write -> convert -> image

     lane user {
        label = "User"
        write [label = "Writing reST"];
        image [label = "Get diagram IMAGE"];
     }
     lane actdiag {
        convert [label = "Convert reST to Image"];
     }
   }

.. toctree::

   introduction
   examples
   sphinxcontrib
   demo
