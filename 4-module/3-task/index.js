function highlight(table) {
  let indexStatus; 
  let indexAge; 
  let indexGender;
  
  Array.from(table.tHead.querySelectorAll('td')).forEach(function(cel) {
      if(cel.innerText === 'Status') indexStatus = cel.cellIndex;
      if(cel.innerText === 'Age') indexAge = cel.cellIndex;
      if(cel.innerText === 'Gender') indexGender = cel.cellIndex;         
  });
  
  if(!indexStatus || !indexAge || !indexGender) return;
  
  Array.from(table.tBodies).forEach(function(body) {
    Array.from(body.rows).forEach(function(row) {
      
      let status = row.cells[indexStatus],
          age = row.cells[indexAge],
          gender = row.cells[indexGender];
      
      if(!status.dataset.available) row.hidden = true;
      if(status.dataset.available === 'true') row.classList.add('available');
      if(status.dataset.available === 'false') row.classList.add('unavailable');
      
      if(parseInt(age.innerText) < 18) row.style['text-decoration'] = 'line-through';     
      
      if(gender.innerText === 'm') row.classList.add('male');
      if(gender.innerText === 'f') row.classList.add('female');
    });
  });
};


