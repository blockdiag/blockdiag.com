
schema2rst
==========

`schema2rst`(目下開発中) は MySQL データベースに接続し、
スキーマ情報を抽出して reST 形式のデータベース定義書を出力します。

このサンプルでは以下の SQL でデータベースの初期化をしています。

.. literalinclude:: schema.sql


上記の定義から `schema2rst` コマンドで定義を抽出します。
接続に関する設定を指定する方法は設定ファイルを用いる予定です。

.. code-block:: none

   % schema2rst > schema.rst

抽出したデータベース定義書は以下になります。

.. toctree::
   :maxdepth: 2

   schema
