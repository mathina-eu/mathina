import getAppList from '../components/apps/app-list';

export default function appList() {
  this.nuxt.hook('modules:done', moduleContainer => {
    // This will be called when all modules finished loading
    console.log('modules.done');
  });

  this.nuxt.hook('render:before', renderer => {
    // Called after the renderer was created
    console.log('render:before');
  });

  this.nuxt.hook('build:compile', async({ name, compiler }) => {
    // Called before the compiler (default: webpack) starts
    console.log('build:compile');
    getAppList();
  });

  this.nuxt.hook('generate:before', async generator => {
    // This will be called before Nuxt generates your pages
    console.log('generate:before');
    getAppList();
  });
}
