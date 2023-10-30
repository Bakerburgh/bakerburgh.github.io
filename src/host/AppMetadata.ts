export type AppKey = 'home' | 'dom'

export interface AppMetadata {
  key: AppKey;
  route: string;
  appSwitcherLabel?: string;
  headerText?: string;
}


export const AppList: AppMetadata[] = [
  {
    key: 'home',
    route: '/',
    appSwitcherLabel: 'Home',
    headerText: 'Welcome!'
  },
  {
    key: 'dom',
    route: '/dom',
    appSwitcherLabel: 'Domino Counter',
    headerText: 'Domino Counter'
  }
];

export const AppRegistry: Record<AppKey, AppMetadata> = AppList.reduce((accumulator, value) => {
  accumulator[value.key] = value;
  return accumulator; 
}, {} as Record<AppKey, AppMetadata>);
