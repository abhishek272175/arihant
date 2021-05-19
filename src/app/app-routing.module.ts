import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule)

  },
  {
    path: 'package',
    loadChildren: () => import('./pages/package/package.module').then( m => m.PackagePageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./pages/tickets/tickets.module').then( m => m.TicketsPageModule)
  },
  {
    path: 'create-ticket',
    loadChildren: () => import('./pages/create-ticket/create-ticket.module').then( m => m.CreateTicketPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'our-services',
    loadChildren: () => import('./pages/our-services/our-services.module').then( m => m.OurServicesPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'view-ticket/:myid',
    loadChildren: () => import('./pages/view-ticket/view-ticket.module').then( m => m.ViewTicketPageModule)
  },  {
    path: 'term-condition',
    loadChildren: () => import('./pages/term-condition/term-condition.module').then( m => m.TermConditionPageModule)
  },
  {
    path: 'reset-passward',
    loadChildren: () => import('./pages/reset-passward/reset-passward.module').then( m => m.ResetPasswardPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'google-login',
    loadChildren: () => import('./pages/google-login/google-login.module').then( m => m.GoogleLoginPageModule)
  },
  {
    path: 'add-device',
    loadChildren: () => import('./pages/add-device/add-device.module').then( m => m.AddDevicePageModule)
  },
  {
    path: 'device-options',
    loadChildren: () => import('./pages/device-options/device-options.module').then( m => m.DeviceOptionsPageModule)
  },
  {
    path: 'adding-device',
    loadChildren: () => import('./adding-device/adding-device.module').then( m => m.AddingDevicePageModule)
  },
  {
    path: 'switch-options',
    loadChildren: () => import('./switch-options/switch-options.module').then( m => m.SwitchOptionsPageModule)
  },
  {
    path: 'adding-device',
    loadChildren: () => import('./pages/adding-device/adding-device.module').then( m => m.AddingDevicePageModule)
  },
  {
    path: 'switch-options',
    loadChildren: () => import('./pages/switch-options/switch-options.module').then( m => m.SwitchOptionsPageModule)
  },
  {
    path: 'switches',
    loadChildren: () => import('./pages/switches/switches.module').then( m => m.SwitchesPageModule)
  },
  {
    path: 'device-adding',
    loadChildren: () => import('./pages/device-adding/device-adding.module').then( m => m.DeviceAddingPageModule)
  },
  {
    path: 'login-otp',
    loadChildren: () => import('./pages/login-otp/login-otp.module').then( m => m.LoginOtpPageModule)
  },
  {
    path: 'ssid-login',
    loadChildren: () => import('./pages/ssid-login/ssid-login.module').then( m => m.SsidLoginPageModule)
  },
  {
    path: 'all-button',
    loadChildren: () => import('./pages/all-button/all-button.module').then( m => m.AllButtonPageModule)
  },
  {
    path: 'single-button',
    loadChildren: () => import('./pages/single-button/single-button.module').then( m => m.SingleButtonPageModule)
  },
  {
    path: 'google-otp',
    loadChildren: () => import('./pages/google-otp/google-otp.module').then( m => m.GoogleOtpPageModule)
  },
  {
    path: 'device-adding1',
    loadChildren: () => import('./pages/device-adding1/device-adding1.module').then( m => m.DeviceAdding1PageModule)
  },
  {
    path: 'device-adding2',
    loadChildren: () => import('./pages/device-adding2/device-adding2.module').then( m => m.DeviceAdding2PageModule)
  },
  {
    path: 'device-adding3',
    loadChildren: () => import('./pages/device-adding3/device-adding3.module').then( m => m.DeviceAdding3PageModule)
  },
  {
    path: 'arihant-demo',
    loadChildren: () => import('./pages/arihant-demo/arihant-demo.module').then( m => m.ArihantDemoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
