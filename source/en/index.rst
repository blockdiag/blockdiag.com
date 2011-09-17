============================================
blockdiag - simple diagram images generator
============================================

`blockdiag` and its family generate diagram images from simply text file:

.. blockdiag::

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

Features:

* Supports many types of diagrams
   * block diagram (w/ blockdiag)
   * sequence diagram (w/ seqdiag)
   * activity diagram (w/ actdiag)
   * logical network diagram (w/ nwdiag)
* Generates beautiful diagram images from simple text format (similar to graphviz's DOT format)
* Layouts diagram elements automatically
* Embeds to many documentations; Sphinx, Trac, Redmine and some wikis


Enjoy documentation with blockdiag !

Table of contents
=================

.. toctree::
   :maxdepth: 1

   blockdiag/index
   seqdiag/index
   actdiag/index
   nwdiag/index
