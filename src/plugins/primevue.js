// primevue.js

import Breadcrumb from 'primevue/breadcrumb';
import BadgeDirective from 'primevue/badgedirective';
import Badge from 'primevue/badge';

export default {
    install(app) {
        app.directive('badge', BadgeDirective);
        app.component('Breadcrumb', Breadcrumb);
        app.component('Badge', Badge);
    },
};
