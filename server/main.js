import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';
import { WebApp } from 'meteor/webapp';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1); // 0으로 하면 변화 없음. 1이면 첫번째 문자 자름...
    const link = Links.findOne({_id}); // ES6 방식. ES5라면 Links.find({_id: id})
    if (link) {  // 리다이렉트시켜주게 된다.
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {  // 그냥 리다이렉트 없이 진행해 주면 된다.
      next();
    }
  });
});
