
let Alon = 99.978457;// การตั้งค่า lon เริ่มแรก
let Alat = 13.071063; // การตั้งค่า lat เริ่มแรก
let Azoom = 17;  // ซูม
let O = 0.00058; // ขนานของวงกลม

let dsi = 0;  // ค่าเริ่นที่ให้แสดง
let y = '<a>'+dsi+'</a>' ; // ค่าหลังจาที่ได้รับค่าจาก Api







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
map.Overlays.add(circle); //add geometry object
map.Overlays.add(circle2);
map.Overlays.add(marker2);
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
  let D = DateNew.getDate();
  let H = DateNew.getHours()-2;
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

  data.data.forEach(pos => {  // ทำการลูปเพื่อตรวจสอบข้อมูล
            
   
            let timedemo = new Date(pos.Date);      /// ทำการเปลี่ยนเวลาให้เป็นเลขที่สามารถคำนวณได้
            let timeYdemo = timedemo.getFullYear(); 
            let timeModemo = timedemo.getMonth();
            let timeDdemo = timedemo.getDate();
            let timeHdemo = timedemo.getHours();
            
              //  ทำการกรองเวลาที่ช่วงเวบาที่ตรงการตรงการ
              if( dateM< timedemo  ){
               
          
                
                  if( timeYdemo == Y &&timeDdemo == D &&timeModemo == Mo && H == timeHdemo)  
                  {
                    datademo.push(pos.pm25);  // เมื่ออยู่ในช่วงเวลาที่ก็ทำการดึงค่าไปไว้ที่ตัวแปร datademo
                 
                  }



                 else if ( timeYdemo == Y &&timeDdemo == D &&timeModemo == Mo && H != timeHdemo) 
                  {
                        let average = datademo.length
                        for(l = average-1;l > 0 ;l-- ){
                          datademo[l-1]=datademo[l-1]+datademo[l] 
                          
                          
                        }
                      
                  
                      num.push(datademo[0]/average);
                      
                   
                      datademo = [];
                    H ++;
                 }}})
                
                
                
                
                
                console.log(num);


                document.getElementById("data").innerHTML =num[0].toFixed(2)+"μg/m<sup>3</sup>";

                 let a = num[0] ; 
                 let B ;
                 dsi = a.toFixed(2) ;


  if (a < 25){
    B ='rgba(58, 204, 255, 0.5)'
  }
  else if(a < 37){
    B ='rgba(146, 209, 79, 0.5)'
  }
  else if(a < 38){
    B ='rgba(255, 255, 0, 0.5)'
  }
  else if(a < 90){
    B ='rgba(255, 162, 0, 0.5)'
  }
  else {
    B ='rgba(255, 59, 60, 0.5)'
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
          html: '<a href ="New%20Text%20Document.html" target = "_blank" >'+dsi+'</a>',

        }
        ,
                                              popup: {
                                                html: '<a href ="New%20Text%20Document.html" target = "_blank" >'+dsi+'</a>'
                                              }
                                              
      });
    
  init()
                
                
                
                });
