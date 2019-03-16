const data = [
    {
      name:'Josh',
      age: '26',
      position: 'Instructor'
    },
    {
      name:'Sam',
      age: '27',
      position: 'Mentor'
    },
    {
      name:'Jon',
      age: '24',
      position: 'Mentor'
    },
    {
      name:'Dan',
      age: '25',
      position: 'Instructor'
    },
    {
      name:'Luis',
      age: '35',
      position: 'Student'
    },
  ];
  const names = [];
  function getLists(){}
  for(let i=0; i<data.length; i++){
      data[i].name=data[i].name;
      names.push(data[i]);
  }
  console.log(names);

  const nameList = data.map((e) => {return e.name;
});
const over25 = data.filter((e) => {
    return Number(e.age) > 25;
});
const firstLetters = data.reduce((l, e) =>{
    let += e.name[0];
    return l;
}, '');