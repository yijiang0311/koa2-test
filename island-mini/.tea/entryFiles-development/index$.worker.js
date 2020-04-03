if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../components/like/index');
require('../../components/classic/movie/index');
require('../../components/classic/music/index');
require('../../components/classic/essay/index');
require('../../components/episode/index');
require('../../components/navi/index');
require('../../components/image-button/index');
require('../../components/tag/index');
require('../../components/preview/index');
require('../../components/book/index');
require('../../components/loading/index');
require('../../components/search/index');
require('../../components/mask/index');
require('../../pages/classic/classic');
require('../../pages/classic/classic');
require('../../pages/my/my');
require('../../pages/book/book');
require('../../pages/book-detail/book-detail');
require('../../pages/about/about');
require('../../pages/course/course');
require('../../pages/classic-detail/classic-detail');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}