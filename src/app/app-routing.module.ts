import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule'},
  { path: 'study', loadChildren: './pages/study/study.module#StudyPageModule'},
  { path: 'work', loadChildren: './pages/work/work.module#WorkPageModule' },
  { path: 'skill', loadChildren: './pages/skill/skill.module#SkillPageModule' },
  { path: 'interest', loadChildren: './pages/interest/interest.module#InterestPageModule' },
  { path: 'achievement', loadChildren: './pages/achievement/achievement.module#AchievementPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
