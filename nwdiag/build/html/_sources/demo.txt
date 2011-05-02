===================================
Demo - interactive shell for nwdiag
===================================

This is demo program for nwdiag.
You can get rendered diagrams after inputting 'Diagram source'.

.. note::

   This demo program supports non IE browsers only.

Diagram source
==============

.. raw:: html

   <textarea id="diagram" cols="75" rows="10" style="font-size: 14pt; font-family: monospace;">{
     network dmz {
         web01;
         web02;
     }
     network internal {
         db01;
         app01;
         app02;
     }

     dmz -- internal
   }</textarea><br />


Diagram outputs
===============

.. raw:: html

   <div id="diagram_image"></div>
