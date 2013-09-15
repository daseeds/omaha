App.Slide = DS.Model.extend({
  title: DS.attr('string'),
  extra_title: DS.attr('string'),
  img: DS.attr('string')
});

App.Slide.FIXTURES = [
 {
   id: 1,
   title: 'SPACIOUS AND BRIGHT ROOMS',
   extra_title: '2nd floor of the manor',
   img: 'img/la_tour_1_1_.JPG'
 },
 {
   id: 2,
   title: 'BREATHTAKING COUNTRYSIDE',
   extra_title: '5 minutes drive away',
   img: 'img/la_tour_1_1_.JPG'
 },
 {
   id: 3,
   title: 'REVIVE HISTORY',
   extra_title: 'by just walking around',
   img: 'img/la_tour_1_1_.JPG'
 }
];