
Schema: sample
==============


購入履歴 (order_history)
------------------------

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - 履歴 ID
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - auto_increment
   * - ユーザ ID
     - user_id
     - INTEGER(11)
     - False
     - False
     - None
     - 
   * - 商品 ID
     - item_id
     - INTEGER(11)
     - False
     - False
     - None
     - 
   * - 数量
     - amount
     - INTEGER(11)
     - False
     - False
     - None
     - 
   * - 購入日
     - order_date
     - DATETIME
     - True
     - False
     - None
     - 

商品 (items)
------------

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - 商品 ID
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - auto_increment
   * - 商品名
     - name
     - VARCHAR(255)
     - False
     - False
     - None
     - 
   * - 種別 
     - type
     - INTEGER(11)
     - False
     - False
     - 1
     - 1:食品, 2:文具, 3:雑貨
   * - 説明文
     - description
     - TEXT
     - True
     - False
     - None
     - 

ユーザ (users)
--------------

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - ユーザ ID
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - auto_increment
   * - ログイン ID
     - login_id
     - VARCHAR(16)
     - False
     - False
     - 
     - 
   * - 氏名
     - fullname
     - VARCHAR(255)
     - False
     - False
     - 
     - 
   * - メールアドレス
     - mailaddr
     - VARCHAR(255)
     - False
     - False
     - 
     - 

uncommented_table
-----------------

.. list-table::
   :header-rows: 1

   * - Fullname
     - Name
     - Type
     - NOT NULL
     - PKey
     - Default
     - Comment
   * - id
     - id
     - INTEGER(11)
     - False
     - True
     - None
     - auto_increment
   * - name
     - name
     - VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin
     - True
     - False
     - None
     - utf8_bin
