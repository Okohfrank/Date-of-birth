function calc() {
const d1 = document.getElementById('date').value;
      const m1 = document.getElementById('month').value;
      const y1 = document.getElementById('year').value;
      const date = new Date();
      d2 = date.getDate();
      m2 = 1 + date.getMonth();
      y2 = date.getFullYear();

      month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
      }
      if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
      }
      let d3 = d2 - d1;
      let m3 = m2 - m1;
      let y3 = y2 - y1;

     if (d1 == '' && m1 == '' && y1 == '') {
      alert("Please input yout date of  birth")
     }
      
        if (y3 < 18) {
            alert('You are an underage');
          }else{
            alert('You are an adult');
          }
          document.getElementById('output').innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
      }
      
      
      document.querySelector('.resets').addEventListener('click', clear)
      function clear(){
        document.querySelector(".date").value = '';
        document.querySelector(".month").value = '';
        document.querySelector(".year").value = '';
        document.getElementById('output').innerHTML = '';
        alert('Cleared successfully!');
      };
      
     
      
      
      
      