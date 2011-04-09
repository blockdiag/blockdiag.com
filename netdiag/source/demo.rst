====================================
Demo - interactive shell for netdiag
====================================

This is demo program for netdiag.
You can get rendered diagrams after inputting 'Diagram source'.

.. note::

   This demo program supports non IE browsers only.

Diagram source
==============

.. raw:: html

   <textarea id="diagram" cols="75" rows="10" style="font-size: 14pt; font-family: monospace;">{
      A -> B -> C;
           B -> D;
   }</textarea><br />


Diagram outputs
===============

.. raw:: html

   <div id="diagram_image"></div>
