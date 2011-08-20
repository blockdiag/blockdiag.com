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

.. You can see available package at `PyPI <http://pypi.python.org/pypi/sphinxcontrib-actdiag>`_.

You can get archive file at http://bitbucket.org/birkenfeld/sphinx-contrib/

Install
-------

.. code-block:: bash

   $ sudo easy_install sphinxcontrib-actdiag


Configure Sphinx
----------------

To enable this extension, add ``sphinxcontrib.actdiag`` module to extensions 
option at :file:`conf.py`. 

.. code-block:: python

   # Enabled extensions
   extensions = ['sphinxcontrib.actdiag']

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


   .. versionadded:: 0.2.0

   This directive is able to generate description table using ``desctable`` option and
   `description` attribute

   Input::

      .. actdiag::
         :desctable:

         {
            A -> B -> C;
            A [description = "first action"];
            B [description = "second action"];
            C [description = "third action"];

            lane {
               A; B;
            }
            lane {
               C;
            }
         }

   Output

   .. actdiag::
      :desctable:

      {
         A -> B -> C;
         A [description = "first action"];
         B [description = "second action"];
         C [description = "third action"];

         lane {
            A; B;
         }
         lane {
            C;
         }
      }



Configuration File Options
==========================

.. confval:: actdiag_fontpath

   This is a path for renderring fonts. You can use truetype font (.ttf) file path.
   You can specify single path with string, or multiple paths using array.

   .. versionadded:: 0.1.1

      actdiag_fontpath allows fontpath array

.. confval:: actdiag_antialias

   If :confval:`actdiag_antialias`: is True, actdiag generates images
   with anti-alias filter.
