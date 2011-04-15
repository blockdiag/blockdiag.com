=======================
sphinxcontrib-actdiag
=======================

`sphinxcontrib-actdiag` is sphinx extension for embedding actdiag diagrams.
You can embed block diagrams with `actdiag` directive.

.. code-block:: text

   .. actdiag::

       diagram admin {
         A -> B -> C;
       }

.. actdiag::

    diagram admin {
      A -> B -> C;
    }

Setting
=======

sphinxcontrib-actdiag is included in actdiag package.

Install
-------

.. code-block:: bash

   $ sudo easy_install actdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib_actdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   import os, sys

   # Path to the folder where actdiag.py is
   # NOTE: not needed if the package is installed in traditional way
   # using setup.py or easy_install
   sys.path.append(os.path.abspath('/path/to/sphinxcontrib_actdiag'))

   # Enabled extensions
   extensions = ['sphinxcontrib_actdiag']

   # Fontpath for actdiag (truetype font)
   actdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. actdiag:: [filename]

   This directive insert a actuence diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, actdiag directive takes code block as source script.

   Examples::

      .. actdiag:: foobar.diag

      .. actdiag::

         diagram {
            // some diagrams are here.
         }


Configuration File Options
==========================

.. confval:: actdiag_fontpath

   This is a path for renderring fonts.
   You can use truetype font (.ttf) file path.

.. confval:: actdiag_antialias

   If :confval:`actdiag_antialias`: is True, actdiag generates images
   with anti-alias filter.
