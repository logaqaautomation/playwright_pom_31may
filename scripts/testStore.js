const Store =
    require('../utils/HealedLocatorStore');

Store.save(
    'CustomerPage.continueButton',
    "getByRole('button',{name:'Next'})"
);

console.log(
    Store.get(
        'CustomerPage.continueButton'
    )
);