
fetch("https://script.google.com/macros/s/AKfycbzvOFLpyGyGBG6Q6kclBOMJiKO0flJzFVKrrJAbpKNQvOS_lmwUseaAE4I9k_s09T4k/exec")
.then(response=>response.json())
.then(data => {

  console.log(data);
  
  DateNew = new Date();/// เวลาที่ปัจุปัญ
  let Y = DateNew.getFullYear();
  let Mo = DateNew.getMonth();
  let D = DateNew.getDate()-7;
  let H = DateNew.getHours()-1;
  let M = DateNew.getMinutes();

  dateM = new Date(Y,Mo,D,H,M); /// เวลาที่จุดเริ่มช่วงนับ
 
  da = dateM.getMinutes();
  
  /////// ทำการตั้งเวลาให้เป็นนาที 00
  for(
                i = 1 ;  da!=0 ; M-- 
                ){
                  dateM = new Date(Y,Mo,D,H,M);
                  da = dateM.getMinutes();
                  
                } 

           

 
  //////////////////              

  num = [] ;  // ตั้งชื่อตัวตัวแปรที่จะนำไป.=h
 // ตัวตัวแปรที่นำไปใช้เป็นเวลา
  let datademo = []; // คัวตัวแปรที่นำไปใช้คำนวณ
  let Weektime =[] // 

  data.data.forEach(pos => {  // ทำการลูปเพื่อตรวจสอบข้อมูล
            
   
            let timedemo = new Date(pos.Date);      /// ทำการเปลี่ยนเวลาให้เป็นเลขที่สามารถคำนวณได้
            let timeYdemo = timedemo.getFullYear(); 
            let timeModemo = timedemo.getMonth();
            let timeDdemo = timedemo.getDate();
            let timeHdemo = timedemo.getHours();
            
              //  ทำการกรองเวลาที่ช่วงเวบาที่ตรงการตรงการ
              if( dateM< timedemo  ){
               
                
                console.log( timeYdemo , dateM.getFullYear() ,timeDdemo , dateM.getDate() ,timeModemo , dateM.getMonth() ,H, dateM.getHours() , timeHdemo);
                  if( timeYdemo == dateM.getFullYear() &&timeDdemo == dateM.getDate() &&timeModemo == dateM.getMonth() && dateM.getHours() == timeHdemo)  
                  {
                    datademo.push(pos.pm25);  // เมื่ออยู่ในช่วงเวลาที่ก็ทำการดึงค่าไปไว้ที่ตัวแปร datademo
                    console.log("yes");
                   
                 
                  }



                 else if ( timeYdemo == dateM.getFullYear() &&timeDdemo == dateM.getDate() &&timeModemo == dateM.getMonth() && dateM.getHours() != timeHdemo) 
                  {
                        let average = datademo.length
                        for(l = average-1;l > 0 ;l-- ){
                          datademo[l-1]=datademo[l-1]+datademo[l] 
                          
                          
                        }
                      num.push(datademo[0]/average);
                      
                      console.log("no");
                   
                      datademo = [];
                    H++;
                    dateM = new Date(Y,Mo,D,H);
                  console.log(dateM);
                }
                else if ( timeYdemo == dateM.getFullYear() &&timeDdemo != dateM.getDate() &&timeModemo == dateM.getMonth() && dateM.getHours() != timeHdemo)
                 {
                       let average = datademo.length
                       for(l = average-1;l > 0 ;l-- ){
                         datademo[l-1]=datademo[l-1]+datademo[l] 
                         
                         
                       }

                     
                     num.push(datademo[0]/average);
                     
                     Month = ["ม.ค","ก.พ","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",]

                     Weektime.push(timedemo.getDate()+"  "+Month[timedemo.getMonth()])
                   datademo = [];
                   D++;
                   H = 0;
                   dateM = new Date(Y,Mo,D,H);
                }
                else if (timeYdemo == dateM.getFullYear() &&timeDdemo != dateM.getDate() &&timeModemo != dateM.getMonth() && dateM.getHours() != timeHdemo)
                {
                      let average = datademo.length
                      for(l = average-1;l > 0 ;l-- ){
                        datademo[l-1]=datademo[l-1]+datademo[l] 
                        
                        
                      }

                    
                    num.push(datademo[0]/average);
                  

                  datademo = [];
                  Mo++;
                  D=0;
                  H=0;
                  dateM = new Date(Y,Mo,D,H);
               }
               
               else if ( timeYdemo != dateM.getFullYear() &&timeDdemo != dateM.getDate() &&timeModemo != dateM.getMonth() && dateM.getHours() != timeHdemo)
               {
                     let average = datademo.length
                     for(l = average-1;l > 0 ;l-- ){
                       datademo[l-1]=datademo[l-1]+datademo[l] 
                       
                       
                     }

                 
                   num.push(datademo[0]/average);
                   
                 datademo = [];
                 Y++;
                 Mo=0;
                 D=0;
                 H=0;
                 dateM = new Date(Y,Mo,D,H);
              }

               }
           

            

           });

           let  resultA =[] ;
           
          for (let A = 0 ; A < num.length; A+= 24){
           let  result =[0] ;
           console.log("new");
           for(let AA = 0 ; AA <24 ; AA++){
             
           
                 AAA = AA+A
                 console.log(num[AAA]);
                 if (isNaN(num[AAA])) {
                   continue;
                  }
                 result[0] = result[0]+num[AAA]
                 
                 
                 
                 
                 
               
               
             }
             
             resultA.push(result/24)
          }

          console.log(resultA);
          timelabal = [];
          day = [];
          daytime = [];
          timep = new Date()
          time = timep.getHours();
          for (let laet = num.length-25; laet <num.length;laet++ ){
          
           time ++
           console.log(time);
           if(time > 24){
           time = 0
           }
           
          
           
           
   
           day.push(num[laet])



           daytime.push(time + ":00:00")
           document.getElementById("data").innerHTML =day[day.length-1].toFixed(1)+"μg/m<sup>3</sup>";
          }
          console.log(daytime);
          console.log(resultA);
console.log(num);
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: daytime ,
    datasets: [{
      label: 'กราฟแสดงค่าเฉลี่ย ฝุ่นPM 2.5 รายชั่วโมง ',
      data: day,
      borderWidth: 1
    }]
  },
  options: {
   scales: {
     x: {
     title: {
       display: true,
       text: 'เวลา '
     }
   },

     y: {
       title: {
         display: true,
         text: 'ค่าฝุ่น PM 2.5'
       }
     }
   }
 }
});
const ctx1 = document.getElementById('myChart1');
     
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: Weektime,
    datasets: [{
      label: 'กราฟแสดงค่าเฉลี่ย ฝุ่นPM 2.5 รายสัปดาห์',
      data:resultA ,
      borderWidth: 1
    }]
  },
  options: {
   scales: {
     x: {
     title: {
       display: true,
       text: 'เวลา '
     }
   },

     y: {
       title: {
         display: true,
         text: 'ค่าฝุ่น PM 2.5'
       }
     }
   }
 }
});
})