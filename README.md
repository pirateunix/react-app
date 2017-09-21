## Описание
###CRUD REST API.
+ Backend создан с использованием фрэймвёрка Koa2.
+ Frontend создан при использовании react и redux, сборка осуществляется с помошью webpack.
+ Модели для работы с БД mySql, созданы при использовании sequelize.

## Развертывание

```git clone https://github.com/pirateunix/react-app.git```

```cd react-app```

```npm i```

```npm run build```

```npm run server```

[http://localhost:3000/](http://localhost:3000/)

## Coздать БД node и создать таблицЫ:
```
 CREATE TABLE `Department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) CHARACTER SET utf8 NOT NULL,
  `description` varchar(256) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

CREATE TABLE `Employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(256) CHARACTER SET utf8 NOT NULL,
  `lastName` varchar(256) CHARACTER SET utf8 NOT NULL,
  `departmentId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1
```
