=======================
sphinxcontrib-seqdiag
=======================

`sphinxcontrib-seqdiag` is sphinx extension for embedding seqdiag diagrams.
You can embed block diagrams with `seqdiag` directive.

.. code-block:: text

   .. seqdiag::

       diagram admin {
         A -> B -> C;
       }

.. seqdiag::

    diagram admin {
      A -> B -> C;
    }

Setting
=======

sphinxcontrib-seqdiag is included in seqdiag package.

Install
-------

.. code-block:: bash

   > easy_install seqdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib_seqdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   import os, sys

   # Path to the folder where seqdiag.py is
   # NOTE: not needed if the package is installed in traditional way
   # using setup.py or easy_install
   sys.path.append(os.path.abspath('/path/to/sphinxcontrib_seqdiag'))

   # Enabled extensions
   extensions = ['sphinxcontrib_seqdiag']

   # Fontpath for seqdiag (truetype font)
   seqdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. seqdiag:: [filename]

   This directive insert a sequence diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, seqdiag directive takes code block as source script.

   Examples::

      .. seqdiag:: foobar.diag

      .. seqdiag::

         diagram {
            // some diagrams are here.
         }


Configuration File Options
==========================

.. confval:: seqdiag_fontpath

   This is a path for renderring fonts.
   You can use truetype font (.ttf) file path.

.. confval:: seqdiag_antialias

   If :confval:`seqdiag_antialias`: is True, seqdiag generates images
   with anti-alias filter.
