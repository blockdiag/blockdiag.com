=======================
sphinxcontrib-blockdiag
=======================

`sphinxcontrib-blockdiag` is sphinx extension for embedding blockdiag diagrams.
You can embed block diagrams with `blockdiag` directive.

.. code-block:: text

   .. blockdiag::

       diagram admin {
         top_page -> config -> config_edit -> config_confirm -> top_page;
       }

.. blockdiag::

    diagram admin {
      top_page -> config -> config_edit -> config_confirm -> top_page;
    }

Setting
=======

.. You can see available package at `PyPI <http://pypi.python.org/pypi/sphinxcontrib-blockdiag>`_.

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

Install
-------

.. code-block:: bash

   > easy_install sphinxcontrib-blockdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.blockdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.blockdiag']

   # Fontpath for blockdiag (truetype font)
   blockdiag_fontpath = '/usr/share/fonts/truetype/ipafont/ipagp.ttf'


Directive
=========

.. describe:: .. blockdiag:: [filename]

   This directive inserts a block diagram into the generated document.
   If filename is specified, sphinx reads external file as source script of blockfile.
   In another case, blockdiag directive takes code block as source script.

   Examples::

      .. blockdiag:: foobar.diag

      .. blockdiag::

         diagram {
            // some diagrams are here.
         }


   This directive is able to generate thumbnail images using ``maxwidth`` option.
   ``maxwidth`` option takes pixel-size of image's width.

   Examples::

      .. blockdiag::
         :maxwidth: 240

         diagram {
            // some diagrams are here.
         }

   .. versionadded:: 0.9.0

   This directive is able to generate description table using ``desctable`` option and
   `description` attribute

   Input::

      .. blockdiag::
         :desctable:

         {
            A -> B -> C;
            A [description = "browsers in each client"];
            B [description = "web server"];
            C [description = "database server"];
         }

   Output

   .. blockdiag::
      :desctable:

      {
         A -> B -> C;
         A [description = "browsers in each client"];
         B [description = "web server"];
         C [description = "database server"];
      }


Configuration File Options
==========================

.. confval:: blockdiag_fontpath

   This is a path for renderring fonts. You can use truetype font (.ttf) file path.
   You can specify single path with string, or multiple paths using array.

   .. versionadded:: 0.1.1

      blockdiag_fontpath allows fontpath array

.. confval:: blockdiag_antialias

   If :confval:`blockdiag_antialias`: is True, blockdiag generates images
   with anti-alias filter.
