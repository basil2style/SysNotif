const notifier = require('node-notifier');
//For advanced thing https://davidwalsh.name/system-notifications-node
//normal string
notifier.notify("Go start cooking !");

//title ..etc
notifier.notify({
    'title':'Basil Blog',
    'subtitle': 'Meat Cassava',
    'wait':true
})