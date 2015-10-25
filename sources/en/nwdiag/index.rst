================================================
nwdiag - simple network-diagram image generators
================================================

`nwdiag` generates network-diagram images from .diag files
(similar to graphviz's DOT files).

You can get diagrams like this:

.. nwdiag::

   nwdiag {
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

And, `nwdiag` package includes more scripts called `rackdiag` and `packetdiag` .

`rackdiag` generates rack-structure diagram images:

.. rackdiag::

   rackdiag {
     8U;

     1: UPS [2U];
     3: DB Server
     4: Web Server
     5: Web Server
     6: Web Server
     7: Load Balancer
     8: L3 Switch
   }

`packetdiag` generates packet header diagram images:

.. packetdiag::

   packetdiag {
     0-7: Source Port
     8-15: Destination Port
     16-31: Sequence Number
     32-35: AckNo
     36-39: Offset
     40-47: Reserved
   }


.. toctree::

   introduction
   nwdiag-examples
   rackdiag-examples
   packetdiag-examples
   sphinxcontrib
   demo
