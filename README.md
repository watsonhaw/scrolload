# Scroll to load list item
[![dependencies](https://david-dm.org/justclear/scrolload.svg)](https://david-dm.org/justclear/scrolload#info=dependencies&view=table)
[![devDependencies](https://david-dm.org/justclear/scrolload/dev-status.svg)](https://david-dm.org/justclear/scrolload#info=devDependencies&view=table)

## Install

```javascript
$ npm install scrolload --save
// or
$ bower install scrolload
```

## Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Scrolload</title>
</head>
<body>
    <div class="scrolload"></div>
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <!-- <script src="../node_modules/zepto/dist/zepto.min.js"></script> -->
    <script src="../dist/scrolload.js"></script>
    <script>
        fetch('https://api.example.com/items')
        .then(response => response.json())
        .then(item => {
            new Scrolload({
                container: '.scrolload', // $('.scrolload')
                count: 9, // per page
                data: items,
                tpl: function(item) {
                    return `
                        <div class="item">item ${item}</div>
                    `;
                },
            });
        });
    </script>
</body>
</html>
```
