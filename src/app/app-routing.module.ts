import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { PeerComponent } from './components/peer/peer.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'message',
        component: MessageComponent
    },
    {
        path: 'message-list',
        component: MessageListComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: 'wallet',
        component: WalletComponent
    },
    {
        path: 'explorer',
        component: ExplorerComponent
    },
    {
        path: 'peer',
        component: PeerComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
