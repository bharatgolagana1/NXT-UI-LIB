export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'Icon-Dashboard-New',
        label: 'Dashboard'
    },
    {
        routeLink: 'agents',
        icon: 'Icon-Agents-New',
        label: 'Agents',
        submenuLevel1: [
            {
                routeLink: 'agents/new-user',
                icon: '', // icon if needed
                label: 'New User',
            },
        ]
    },
    // {
    //     routeLink: '',
    //     icon: 'fal fa-cog',
    //     label: 'Menu with Children',
    //     submenuLevel1: [
    //         {
    //             routeLink: '',
    //             icon: 'fal fa-cog', // icon if needed
    //             label: 'Sub menu level 1',
    //         },
    //         {
    //             routeLink: '',
    //             icon: 'fal fa-cog', // icon if needed
    //             label: 'Sub menu level 1',
    //             submenuLevel2: [
    //                 {
    //                     routeLink: '',
    //                     icon: 'fal fa-cog', // icon if needed
    //                     label: 'Sub menu level 2',
    //                 }
    //             ]
    //         }
    //     ]
    // },

];