======================
sphinxcontrib-blocidag
======================

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
