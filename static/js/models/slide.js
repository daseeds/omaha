
App.FIXTURES = [
{
  id: 'en',
  name: 'EN',
  pages: [
    {
       id: 'bed-and-breakfeast-manor-in-normandy',
       lang: 'en',
       name: 'THE MANOR',
       title: 'XVI CENTURY MANOR HOUSE',
       extra_title: 'Holiday in Normandy',
       articles: [
         {
          id: 1,
          title: 'coucou'
         }
       ],
       pictures: [
        {
          id: 1,
          path: 'static/img/entree.jpg'
        },{
          id: 2,
          path: 'static/img/L1014010-2.jpg'
        }
       ]
     }, {
       id: 'bed-and-breakfeast-manor-in-normandy-garden',
       lang: 'en',
       name: 'THE GARDEN',
       title: 'WOW SO GREEN',
       extra_title: 'Holiday in Normandy',
     }
  ]
},{
  id: 'fr',
  name: 'FR',
  pages: [
    {
       id: 'chambres-hotes',
       lang: 'fr',
       name: 'LE MANOIR',
       title: 'UN MANOIR DU 16eme VOUS ATTENDS',
       extra_title: 'Vous ressourcer en Normandie',
     }
  ]  
}
];


/*App.Lang = DS.Model.extend({
  name: DS.attr('string'),
  pages: DS.hasMany('page',{async:true})
});

App.Page = DS.Model.extend({
  lang: DS.belongsTo('lang'),
  name: DS.attr('string'),
  title: DS.attr('string'),
  extra_title: DS.attr('string'),
  articles: DS.hasMany('article',{async:true}),
  pictures: DS.hasMany('picture',{async:true})
});

App.Article = DS.Model.extend({
  page: DS.belongsTo('page'),
  title: DS.attr('string'),
  paragraph: DS.attr('string')
});

App.Picture = DS.Model.extend({
  page: DS.belongsTo('page'),
  path: DS.attr('string')
});

App.Lang.FIXTURES = [
{
  id: 'en',
  name: 'EN',
  pages: [1, 2]
},{
  id: 'fr',
  name: 'FR',
  pages: [3]
}
];

App.Page.FIXTURES = [
 {
   id: 'bed-and-breakfeast-manor-in-normandy',
   lang: 'en',
   name: 'THE MANOR',
   title: 'XVI CENTURY MANOR HOUSE',
   extra_title: 'Holiday in Normandy',
   articles: [1],
   pictures: [1,2]
 }, {
   id: 'bed-and-breakfeast-manor-in-normandy-garden',
   lang: 'en',
   name: 'THE GARDEN',
   title: 'WOW SO GREEN',
   extra_title: 'Holiday in Normandy',
   articles: [1],
   pictures: [1,2]
 }, {
   id: 'chambres-hotes',
   lang: 'fr',
   name: 'LE MANOIR',
   title: 'UN MANOIR DU 16eme VOUS ATTENDS',
   extra_title: 'Vous ressourcer en Normandie',
   articles: [1],
   pictures: [1,2]
 }

];

App.Article.FIXTURES = [
{
  id: 1,
  title: 'The Manor',
  paragraph: 'Looking for holiday accomodation in Normandy ? Our XVI century Manor House is an excellent base from which to explore the attractions of the area. It’s within easy – driving distance of Sainte Mère Eglise, the D.Day Landing Beaches, Bayeux and Le Mont St Michel.',
}
];

App.Picture.FIXTURES =[
{
  id: 1,
  path: 'static/img/entree.jpg'
},{
  id: 2,
  path: 'static/img/L1014010-2.jpg'
}
];*/