====================
sphinxcontrib-nwdiag
====================

`sphinxcontrib-nwdiag` is sphinx extension for embedding nwdiag diagrams.
You can embed block diagrams with `nwdiag` directive.

.. code-block:: text

   .. nwdiag::

       diagram {
         network dmz {
             web01;
             web02;
         }
       }

.. nwdiag::

   diagram {
     network dmz {
         web01;
         web02;
     }
   }

Setting
=======

sphinxcontrib-nwdiag is included in nwdiag package.

Install
-------

.. code-block:: bash

   $ sudo easy_install sphinxcontrib-nwdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.nwdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.nwdiag']

   # Fontpath for nwdiag (truetype font)
   nwdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. nwdiag:: [filename]

   This directive insert a netuence diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, nwdiag directive takes code block as source script.

   Examples::

      .. nwdiag:: foobar.diag

      .. nwdiag::

         diagram {
            // some diagrams are here.
         }


Configuration File Options
==========================

.. confval:: nwdiag_fontpath

   This is a path for renderring fonts.
   You can use truetype font (.ttf) file path.

.. confval:: nwdiag_antialias

   If :confval:`nwdiag_antialias`: is True, nwdiag generates images
   with anti-alias filter.
