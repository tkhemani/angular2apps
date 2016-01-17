import {bootstrap} from 'angular2/platform/browser';

import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './components/app';

//bootstrap(App, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);


import { AppViewListener } from 'angular2/src/core/linker/view_listener';
import { DebugElementViewListener } from 'angular2/platform/common_dom';
import { bind } from 'angular2/core';

bootstrap(App, [bind(AppViewListener).toClass(DebugElementViewListener),ROUTER_PROVIDERS,HTTP_PROVIDERS]);