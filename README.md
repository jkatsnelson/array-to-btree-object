# array-to-btree-object

This module takes a list and a comparison function, and returns an object that looks kinda like this:

```

{
  data: 'the-item-in-your-list',
  left: {
    data: 'another-item-in-your-list'
  },
  right: {
    data: 'another-item'
  }
}

```

The comparison function looks kinda like this:

```

function (item, treeItem) {
   return item > treeItem;
}


```