===============================================
nwdiag - simple network-diagram image generator
===============================================

`nwdiag` generate network-diagram image file from .diag file.  
.diag file is similar to DOT file (graphviz's).

You can get diagrams like this.

.. nwdiag::

   diagram {
     network dmz {
         address = "210.x.x.x/24"

         web01 [address = "210.x.x.1"];
         web02 [address = "210.x.x.2"];
     }
     network internal {
         address = "172.x.x.x/24";

         web01 [address = "172.x.x.1"];
         db01;
         app01;
     }
   }

.. toctree::

   introduction
   examples
   sphinxcontrib
   demo