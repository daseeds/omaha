

App.Presentation = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  extra_title: DS.attr('string'),
  articles: DS.hasMany('article'),
  pictures: DS.hasMany('picture')
});

App.Article = DS.Model.extend({
  title: DS.attr('string'),
  paragraph: DS.attr('string')
});

App.Picture = DS.Model.extend({
  path: DS.attr('string')
});

App.Presentation.FIXTURES = [
 {
   id: 1,
   name: 'THE MANOR',
   title: 'XVI CENTURY MANOR HOUSE',
   extra_title: 'Holiday in Normandy',
   articles: [1],
   pictures: [1,2]
 },
 {
   id: 2,
   name: 'THE GARDEN',
   title: 'WOW SO GREEN',
   extra_title: 'Holiday in Normandy',
   articles: [1],
   pictures: [1,2]
 },

];

App.Article.FIXTURES = [
{
  id: 1,
  title: 'The Manor',
  paragraph: 'Looking for holiday accomodation in Normandy ? Our XVI century Manor House is an excellent base from which to explore the attractions of the area. It’s within easy – driving distance of Sainte Mère Eglise, the D.Day Landing Beaches, Bayeux and Le Mont St Michel.',
}];

App.Picture.FIXTURES =[
{
  id: 1,
  path: 'static/img/entree.jpg'
},
{
  id: 2,
  path: 'static/img/L1014010-2.jpg'
}
]