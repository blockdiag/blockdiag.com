================================================
nwdiag - simple network-diagram image generators
================================================

`nwdiag` generates network-diagram image file from .diag file.  
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

And, `nwdiag` package includes `rackdiag` which generates rack-structure diagram images.

.. rackdiag::

   diagram {
     8U;

     1: UPS [2U];
     3: DB Server
     4: Web Server
     5: Web Server
     6: Web Server
     7: Load Balancer
     8: L3 Switch
   }


.. toctree::

   introduction
   nwdiag-examples
   rackdiag-examples
   sphinxcontrib
   demo
