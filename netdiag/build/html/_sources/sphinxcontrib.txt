.. warning:: netdiag was renamed to nwdiag. The reference page has moved to `nwdiag`_

.. _nwdiag: http://tk0miya.bitbucket.org/nwdiag/build/html/index.html

=======================
sphinxcontrib-netdiag
=======================

`sphinxcontrib-netdiag` is sphinx extension for embedding netdiag diagrams.
You can embed block diagrams with `netdiag` directive.

.. code-block:: text

   .. netdiag::

       diagram {
         network dmz {
             web01;
             web02;
         }
       }

.. netdiag::

   diagram {
     network dmz {
         web01;
         web02;
     }
   }

Setting
=======

sphinxcontrib-netdiag is included in netdiag package.

Install
-------

.. code-block:: bash

   $ sudo easy_install netdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib_netdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   import os, sys

   # Path to the folder where netdiag.py is
   # NOTE: not needed if the package is installed in traditional way
   # using setup.py or easy_install
   sys.path.append(os.path.abspath('/path/to/sphinxcontrib_netdiag'))

   # Enabled extensions
   extensions = ['sphinxcontrib_netdiag']

   # Fontpath for netdiag (truetype font)
   netdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. netdiag:: [filename]

   This directive insert a netuence diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, netdiag directive takes code block as source script.

   Examples::

      .. netdiag:: foobar.diag

      .. netdiag::

         diagram {
            // some diagrams are here.
         }


Configuration File Options
==========================

.. confval:: netdiag_fontpath

   This is a path for renderring fonts.
   You can use truetype font (.ttf) file path.

.. confval:: netdiag_antialias

   If :confval:`netdiag_antialias`: is True, netdiag generates images
   with anti-alias filter.
