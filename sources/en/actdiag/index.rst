=================================================
actdiag - simple activity-diagram image generator
=================================================

`actdiag` generates activity-diagram images from .diag files
(similar to graphviz's DOT files).

You can get diagrams like this:

.. actdiag::

   actdiag {
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
