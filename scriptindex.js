
let Alon = 99.978457;// การตั้งค่า lon เริ่มแรก
let Alat = 13.071063; // การตั้งค่า lat เริ่มแรก

let Azoom = 17;  // ซูม
let O = 0.00058; // ขนานของวงกลม



let dsi = 0; 
let y = '<pa><a>'+dsi+'</a></pa>' ; 





//กดเพื่อซูมไปสถานที่ต่างๆ

function dis1() {
  
  Alat = 13.0701 ;
  Alon = 99.9791;
  Azoom = 19 ;
  init()
}

function zoomz() {
  Alat =  13.0694 ;
  Alon = 99.9801;
  Azoom = 19 ;
  init()
}
function dis() {
  Alon = 99.978457;
  Alat = 13.071063;
  Azoom = 17 ;
  init()
}

// ขอบเขตแรก
     var circle = new longdo.Circle({ 
      lon:99.9791
      , lat:13.0701,
      }, O, {
          
          
          lineWidth: 1,
          lineColor: 'rgba(255, 255, 255, 0.8)',
          fillColor: 'rgba(255, 255, 255,0.8)'
      });


      var marker2 = new longdo.Marker({ lon:99.9791
        , lat:13.0701, },
        {
          title: 'Custom Marker',
          icon: {
            html:  y,

          }
        
        });


// ขอบเขต 2 
        var circle2 = new longdo.Circle({
        lon:99.9801
      , lat:13.0694,
        }, O, {
            lineWidth: 1,
            lineColor: 'rgba(255, 0, 255, 0.8)',
            fillColor: 'rgba(255, 0, 255, 0.4)'
        });

      var  marker3 = new longdo.Marker({ lon:99.9801
        , lat:13.0694, },
        {
          title: 'Custom Marker',
          icon: {
            html: y ,

          },
          popup: {
            html: '<div style="background: #eeeeff;">popup</div>'
          }
          
        }); 



                                            
function init() {
  var map;
map = new longdo.Map({
 placeholder: document.getElementById('map')
});
map.Overlays.add(circle); 
map.Overlays.add(marker2);
map.Overlays.add(circle2);
map.Overlays.add(marker3);

map.location({ lon:Alon, lat:Alat,  }, true);
map.zoom(Azoom, true);
}         



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
                }}})
                
                
                
                
                
                console.log(num);

                document.getElementById("data").innerHTML=num[0].toFixed(2)+"μg/m<sup>3</sup>";
               
                document.getElementById("data1").innerHTML ="รอการอัพเดท";
                document.getElementById("data2").innerHTML ="รอการอัพเดท";

                 let a = num[0] ; 
                 let B ;
                 dsi = a.toFixed(2) ;

                 var img = document.getElementById('img')
                 var img1 = document.getElementById('img1')
                 var img2 = document.getElementById('img2')
          
  if (a < 25){
    B ='rgba(58, 204, 255, 0.5)'
    img.src = 'sky.png '
    img1.src = 'NaN.png '
    img2.src = 'NaN.png '

    ;
    
    
  }
  else if(a < 37){
    B ='rgba(146, 209, 79, 0.5)'
    img.src = 'green.png '
    img1.src = 'NaN.png '
    img2.src = 'NaN.png '
    ;
    
    
  }
  else if(a < 38){
    B ='rgba(255, 255, 0, 0.5)'
    img.src = 'yellow.png '
    img1.src = 'NaN.png '
    img2.src = 'NaN.png '
    ;
    
    
  }
  else if(a < 90){
    B ='rgba(255, 162, 0, 0.5)'
    img.src = 'orange.png '
    img1.src = 'NaN.png '
    img2.src = 'NaN.png '
    ;
    
    
  }
  else {
    B ='rgba(255, 59, 60, 0.5)'
    img.src = 'red.png '
    img1.src = 'NaN.png '
    img2.src = 'NaN.png '
;
    
    
  }



  circle = new longdo.Circle({ 
    lon:99.9791
    , lat:13.0701,
    }, O, {
         
        
        lineWidth: 1,
        lineColor: B,
         fillColor: B
    });
    marker2 = new longdo.Marker({ lon:99.9791
      , lat:13.0701, },
      {
        title: 'Custom Marker',
        icon: {
          html: '<pa><a href ="graph.html.html" target = "_blank" >'+dsi+'</a><pa>',

        }
        ,
          popup: {
         html: '<pa><a href ="graph.html" target = "_blank" >'+dsi+'</a><pa>'
        }
                                              
      });
    
  init()
                
                
                
                });