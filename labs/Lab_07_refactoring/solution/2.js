var f = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon'];
var colors = {
    'apple': 'green',
    'strawberry': 'red',
    'blueberry': 'blue',
    'raspberry': 'light red',
    'lemon': 'yellow'
};

for (var i = 0; i < f.length; i++) {
    var fruit = f[i];
    var color = colors[fruit];
    console.log(fruit, color);
}