const LocatorHealer =
    require('../utils/LocatorHealer');

(async () => {

    const fakePage = {
        content: async () =>
            '<button>Next</button>'
    };

    const healed =
        await LocatorHealer.heal(
            fakePage,
            'CustomerPage.continueButton',
            "getByRole('button',{name:'Continue'})"
        );

    console.log(healed);

})();