==============================
ブロック図生成ツール blockdiag
==============================
`blockdiag` シリーズはシンプルなテキストからブロック図などの画像を生成する画像生成ツール群です。

`blockdiag` を用いると以下のような図が簡単に生成できます。

.. blockdiag::

   diagram {
     blockdiag -> generates -> "block-diagrams";
     blockdiag -> is -> "very easy!";

     blockdiag [color = "greenyellow"];
     "block-diagrams" [color = "pink"];
     "very easy!" [color = "orange"];
   }

`blockdiag` の主な機能:

* 数種類の図に対応
   * ブロック図 (blockdiag コマンド)
   * シーケンス図 (seqdiag コマンド)
   * アクティビティ図 (actdiag コマンド)
   * 論理ネットワーク図 (actdiag コマンド)
* テキストベースの定義ファイルから画像ファイルを生成 (graphviz 風の文法を採用)
* 定義にあわせて図の配置を自動的に決定 (自動レイアウト)
* Sphinx, Trac, Redmine, 各種 Wiki エンジン等、多様なシステムへの画像埋め込みに対応


Enjoy documentation with blockdiag !

Table of contents
=================

.. toctree::
   :maxdepth: 1

   blockdiag/index
   seqdiag/index
   actdiag/index
   nwdiag/index
   blockdiagcontrib/index

わがままドリブン開発
=====================
`blockdiag` シリーズは手探りで開発されているため、
利用したユーザーの意見・要望によって機能拡張やレイアウトエンジンの調整が行われています。

そのため、使用感や違和感、「こういうのがあればいいのに」といった意見を常に募集しています。
新しい図のサポートなども頂いたご意見をベースに進めていく予定です。

Twitter、イシュートラッカー、メールなど、どのような方法でもかまいませんので
お気づきのところを教えて下さい。


Resources
==========
* Author
   * Takeshi KOMIYA ( `@tk0miya <http://twitter.com/tk0miya>`_ ) <i.tkomiya at gmail.com>
* Google Groups: `<http://groups.google.com/group/blockdiag-discuss/topics>`_
* Twitter: #blockdiag
* Interactive Shell: `<http://interactive.blockdiag.com/>`_
* blockdiag
   * PyPI: `<http://pypi.python.org/pypi/blockdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/blockdiag/>`_
* seqdiag
   * PyPI: `<http://pypi.python.org/pypi/seqdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/seqdiag/>`_
* actdiag
   * PyPI: `<http://pypi.python.org/pypi/actdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/actdiag/>`_
* nwdiag
   * PyPI: `<http://pypi.python.org/pypi/nwdiag/>`_
   * Repository: `<https://bitbucket.org/tk0miya/nwdiag/>`_
* Issue Tracker: `<https://bitbucket.org/tk0miya/blockdiag/issues?status=new&status=open>`_
