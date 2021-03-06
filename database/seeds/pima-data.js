
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('data').del()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {date: '4/09', value: 49},
        {date: '4/10', value: 48},
        {date: '4/11', value: 31},
        {date: '4/12', value: 39},
        {date: '4/13', value: 40},
        {date: '4/14', value: 54},
        {date: '4/15', value: 17},
        {date: '4/16', value: 15},
        {date: '4/17', value: 60},
        {date: '4/18', value: 59},
        {date: '4/19', value: 37},
        {date: '4/20', value: 28},
        {date: '4/21', value: 22},
        {date: '4/22', value: 10},
        {date: '4/23', value: 28},
        {date: '4/24', value: 34},
        {date: '4/25', value: 30},
        {date: '4/26', value: 46},
        {date: '4/27', value: 28},
        {date: '4/28', value: 24},
        {date: '4/29', value: 27},
        {date: '4/30', value: 20},
        {date: '5/01', value: 26},
        {date: '5/02', value: 33},
        {date: '5/03', value: 26},
        {date: '5/04', value: 20},
        {date: '5/05', value: 33},
        {date: '5/06', value: 46},
        {date: '5/07', value: 40},
        {date: '5/08', value: 55},
        {date: '5/09', value: 34},
        {date: '5/10', value: 31},
        {date: '5/11', value: 17},
        {date: '5/12', value: 21},
        {date: '5/13', value: 38},
        {date: '5/14', value: 35},
        {date: '5/15', value: 54},
        {date: '5/16', value: 31},
        {date: '5/17', value: 33},
        {date: '5/18', value: 11},
        {date: '5/19', value: 63},
        {date: '5/20', value: 15},
        {date: '5/21', value: 41},
        {date: '5/22', value: 30},
        {date: '5/23', value: 28},
        {date: '5/24', value: 25},
        {date: '5/25', value: 19},
        {date: '5/26', value: 29},
        {date: '5/27', value: 34},
        {date: '5/28', value: 48},
        {date: '5/29', value: 67},
        {date: '5/30', value: 56},
        {date: '5/31', value: 78},
        {date: '6/01', value: 14},
        {date: '6/02', value: 114},
        {date: '6/03', value: 129},
        {date: '6/04', value: 42},
        {date: '6/05', value: 214},
        {date: '6/06', value: 67},
        {date: '6/07', value: 148},
        {date: '6/08', value: 56},
        {date: '6/09', value: 7},
        {date: '6/10', value: 189},
        {date: '6/11', value: 149},
        {date: '6/12', value: 149},
        {date: '6/13', value: 261},
        {date: '6/14', value: 21},
        {date: '6/15', value: 34},
        {date: '6/16', value: 485},
        {date: '6/17', value: 56},

      ]);
    });
};
