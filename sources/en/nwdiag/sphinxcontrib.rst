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

.. You can see available package at `PyPI <http://pypi.python.org/pypi/sphinxcontrib-nwdiag>`_.

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

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


   This directive is able to generate thumbnail images using ``maxwidth`` option.
   ``maxwidth`` option takes pixel-size of image's width.

   Examples::

      .. nwdiag::
         :maxwidth: 240

         diagram {
            // some diagrams are here.
         }

   .. versionadded:: 0.2.0

   This directive is able to generate description table using ``desctable`` option and
   `description` attribute

   Input::

      .. nwdiag::
         :desctable:

         {
            network {
              A [address = 192.168.0.1, description = "web server01"];
              B [address = 192.168.0.2, description = "web server02"];
            }
            network {
              A [address = 172.0.0.1];
              C [address = 172.0.0.2, description = "database server"];
            }
         }

   Output

   .. nwdiag::
      :desctable:

      {
         network {
           A [address = 192.168.0.1, description = "web server01"];
           B [address = 192.168.0.2, description = "web server02"];
         }
         network {
           A [address = 172.0.0.1];
           C [address = 172.0.0.2, description = "database server"];
         }
      }


Configuration File Options
==========================

.. confval:: nwdiag_fontpath

   This is a path for renderring fonts. You can use truetype font (.ttf) file path.
   You can specify single path with string, or multiple paths using array.

   .. versionadded:: 0.1.1

      nwdiag_fontpath allows fontpath array

.. confval:: nwdiag_antialias

   If :confval:`nwdiag_antialias`: is True, nwdiag generates images
   with anti-alias filter.