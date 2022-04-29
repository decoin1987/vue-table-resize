# vue-resize-table
![img.png](img.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Импорт и Настройка
####### main.js
```
import vueTableResize from "@/plugin/vue-table-resize/vue-table-resize";
import "@/plugin/vue-table-resize/style/main.scss";

Vue.use(vueTableResize);
```

### Настраиваемые параметры директивы

```
<table
    v-resizable
    tableClass="table__resize-table"
    gripClass="table__resize-grip"
    gripActiveClass="table__resize-grip--active"
    tableId=null
    emit="onAfterResize"
    ...
    @onAfterResize="..."
></table>
```


PROPS

| props           | type         | default                        | description                                                           |
|-----------------|--------------|--------------------------------|-----------------------------------------------------------------------|
| tableClass      | String       | `"table__resize-table"`        | Класс таблицы                                                         |
| gripClass       | String       | `"table__resize-grip"`         | Класс хэндлера                                                        |
| gripActiveClass | String       | `"table__resize-grip--active"` | Активный класс хэндлера                                               |
| tableId         | Number       | `null`                         | id таблицы                                                            |
| emit            | String, null | `null`                         | Имя события. возвращает DOM.element колонки размер которой изменяется |

EVENTS

| event           | emit         |  description                              |
|-----------------|--------------|-------------------------------------------|
| dblclick        | Void         | Сбрасывает ширину элемента                |
| mouseup         | Object       | Возвращает DOM.element изменяемой колонки |


### HTML
```
<table v-resizable ...>
    <thead>
        <tr>
          <th>...</th>
          <th>...</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
</table>
```

### CSS 

Можно импортировать свою таблицу стилей, ниже используемые по умолчанию стили.

Изменить стили по умолчанию можно передав нужное название стиля в атрибуты `<table></table>`

```
.table__resize-table {
  .....
  }

  th {
    ...
  }
}

.table__resize-grip {
  ...

  &:hover {
    ...
  }
}

.table__resize-grip--active {
  ...
}
```

### EMIT


