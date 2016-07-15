# Scroll to load list item
[![dependencies](https://david-dm.org/justclear/scrolload.svg)](https://david-dm.org/justclear/scrolload#info=dependencies&view=table)
[![devDependencies](https://david-dm.org/justclear/scrolload/dev-status.svg)](https://david-dm.org/justclear/scrolload#info=devDependencies&view=table)

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
        new Scrolload({
            container: '.scrolload', // $('.scrolload')
            count: 9, // per page
            data: [
                1,2,3,4,5,6,7,8,9,0,
                1,2,3,4,5,6,7,8,9,0,
                1,2,3,4,5,6,7,8,9,0,
                1,2,3,4,5,6,7,8,9,0,
                1,2,3,4,5,6,7,8,9,0,
            ],
        });
    </script>
</body>
</html>
```
```
