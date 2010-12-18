
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
     - int(11)
     - NO
     - True
     - None
     - auto_increment
   * - ユーザ ID
     - user_id
     - int(11)
     - NO
     - False
     - None
     - Refer: users.id
   * - 商品 ID
     - item_id
     - int(11)
     - NO
     - False
     - None
     - Refer: items.id
   * - 数量
     - amount
     - int(11)
     - NO
     - False
     - None
     - 
   * - 購入日
     - order_date
     - datetime
     - YES
     - False
     - None
     - 

Keys
^^^^

* PRIMARY (PRIMARY KEY): id

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
     - int(11)
     - NO
     - True
     - None
     - auto_increment
   * - 商品名
     - name
     - varchar(255)
     - NO
     - False
     - None
     - 
   * - 種別 
     - type
     - int(11)
     - NO
     - False
     - 1
     - 1:食品, 2:文具, 3:雑貨
   * - 説明文
     - description
     - text
     - YES
     - False
     - None
     - 

Keys
^^^^

* PRIMARY (PRIMARY KEY): id

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
     - int(11)
     - NO
     - True
     - None
     - auto_increment
   * - ログイン ID
     - login_id
     - varchar(16)
     - NO
     - False
     - 
     - 
   * - 氏名
     - fullname
     - varchar(255)
     - NO
     - False
     - 
     - 
   * - メールアドレス
     - mailaddr
     - varchar(255)
     - NO
     - False
     - 
     - 

Keys
^^^^

* PRIMARY (PRIMARY KEY): id
* mailaddr (UNIQUE): mailaddr

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
     - int(11)
     - NO
     - True
     - None
     - auto_increment
   * - name
     - name
     - varchar(255)
     - YES
     - False
     - None
     - utf8_bin

Keys
^^^^

* PRIMARY (PRIMARY KEY): id
