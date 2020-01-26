import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import WallWindow from "./components/WallWindow.js";
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import CeilingWindow from './components/CeilingWindow.js'
import Rig from "./components/Rig.js";

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling, Rig, WallWindow, CeilingWindow,},
    
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
          

            <a-asset-item id="pink" src="./assets/models/pink.obj"></a-asset-item>
            <a-asset-item id="pink-mtl" src="./assets/models/pink.mtl"></a-asset-item>
          
          <a-asset-item id="chandelier" src="./assets/models/Artichoke_Lamp.obj"></a-asset-item>
            <a-asset-item id="chandelier-mtl" src="./assets/models/Artichoke_Lamp.mtl"></a-asset-item>
            
            <a-asset-item id="aken" src="./assets/models/aken.obj"></a-asset-item>
            <a-asset-item id="aken-mtl" src="./assets/models/aken.mtl"></a-asset-item>

            <a-asset-item id="UmbrellaPalmtree" src="./assets/models/UmbrellaPalmtree.obj"></a-asset-item>
            <a-asset-item id="UmbrellaPalmtree-mtl" src="./assets/models/UmbrellaPalmtree.mtl"></a-asset-item>

            <a-asset-item id="1" src="./assets/models/1.obj"></a-asset-item>
            <a-asset-item id="1-mtl" src="./assets/models/1.mtl"></a-asset-item>

            
            <a-asset-item id="raamat" src="./assets/models/raamat.obj"></a-asset-item>
            <a-asset-item id="raamat-mtl" src="./assets/models/raamat.mtl"></a-asset-item>

            <a-asset-item id="raam" src="./assets/models/raam.obj"></a-asset-item>
            <a-asset-item id="raam-mtl" src="./assets/models/raam.mtl"></a-asset-item>


          </a-assets>
        </template>

         <!-- blenderist imporditud .obj-mudel koos .mtl-materjalidega; vt a-assets ülalpool -->
    

        <!-- <a-entity class="pink1" position="-1.51 0.18 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  
        <a-entity class="pink2" position=" 1.51  0.18 0" rotation="0 -180 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  
        <a-entity class="pink3" position=" 0,08  0.22 2.75" rotation="0 90 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>  
       
         
        <!-- <a-entity class="pink4" position=" 5 0.22 4.02" rotation="0 -90 0" scale="5 5 5" obj-model="obj: #pink; mtl: #pink-mtl"></a-entity>   -->

        <a-entity class="pinkpuit" position=" 5.016 0.810 3.687" rotation="-51.99 127.976 4.813" scale="0.0015 0.0015 0.0015" obj-model="obj: #1; mtl: #1-mtl"></a-entity>  
        <a-entity class="pinkpuit2" position=" -4.603 0.810 3.687" rotation="-51.99 127.976 4.813" scale="0.0015 0.0015 0.0015" obj-model="obj: #1; mtl: #1-mtl"></a-entity>  

        <a-entity class="raamat" position="1.593 0.998 3.508" rotation="0 99.829 0" scale="1 1 1" obj-model="obj: #raamat; mtl: #raamat-mtl"></a-entity>  
      
        <a-entity class="puu" position=" 0 0 3.61" rotation="0 -90 0" scale="0.35 0.35 0.35" obj-model="obj: #UmbrellaPalmtree; mtl: #UmbrellaPalmtree-mtl"></a-entity>  
       
        <Box  class="hover"
              position="1.678 0.471 3.619" 
              scale="1 0.6 1"
              shadow="cast: true" 
              material="src: ./assets/models/1_0.jpg;" 
              
               />

        <Rig>
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->

          <a-entity id="pilditekst" visible="false" position="0 -0.2 -0.5">
            <a-text value="autor Triin Juss" width="0.6" align="center" color="black" />
            <a-plane material="shader: flat" color="grey" opacity="0.3" scale="0.5 0.1 0" />
          </a-entity>

          <a-text id="kuubikutekst" value="skulptuur" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="pilditekst" value="Autoportree" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>

        <Ceiling> 
        <CeilingWindow class="aknaga sein" position="5 5 -2.5" rotation="90 90 90">  </CeilingWindow>
        <CeilingWindow  class="aknaga sein" position="-5 5 -2.5" rotation="-90 -90 -90" > </CeilingWindow > 
        </Ceiling> 

        
        <Ceiling> 
        <a-entity class="keskkonnavalgus" light="type: point; color: #fff; intensity: 0.7;"  position="0.2 2.5 0" rotation="0 0 0">
          <a-entity material="color: white; emissive: white; emissionIntensity: 0.3;"></a-entity>
        </a-entity>            
        </Ceiling> 
        
       <!-- parem sein -->

      	<Wall position="0 0 -5" w="20" h="5">  
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis m4udavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
          <a-entity class="jaapan" position=" -7.795 -1.450 0.023" rotation="2.033 2.991 -0.469" scale="4.280 4.640 0.769" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    
          <a-plane
            position="-8.097 -1.066 0"
            scale="1.2 1.81 0.363"
                material="src: ./assets/pildid/jaapan.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-entity class="veski" position=" -7.766 0.535 0.093" rotation="2.033 2.991 -0.469" scale="4.280 4.640 0.769" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

            <a-plane
            position="-8.097 0.917 0"
                scale="1.2 1.81 0.363"
                material="src: ./assets/pildid/veski.png"

                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

            <a-entity class="oun" position=" -5.444 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

            <a-plane 
              position="-6 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/ouna_pilt.png"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
          ></a-plane>
          
          <a-entity class="sinine" position=" 6.439 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

          <a-plane
                position="6 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/sinine_vv.jpg"
                
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

            <a-entity class="tulp" position=" 3.468 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

          <a-plane 
              position="3 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/vesiv_tulp.jpg"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
          ></a-plane>

          <a-entity class="monokroom" position=" 0.486 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

          <a-plane 

              position="0 0 0"
              scale="2 3.1 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/sinine_momocrom.png"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
           ></a-plane>
           <a-entity class="kannud" position=" -2.473 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

           <a-plane
                position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/kannud_burn.jpg"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>    
            <a-entity class="kassistub" position=" 8.664 0.446 0.091" rotation="1.174 0.016 -0.357" scale="4.111 5.146 0.655" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

            <a-plane
            position="8.497 -1.021 0.122"
            scale="2 1 0.363"
                material="src: ./assets/pildid/vkass.jpg"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

            <a-entity class="kass" position=" 8.927 -1.252 0.145" rotation="2.033 2.991 -0.469" scale="7.242 2.789 0.949" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

            <a-plane
            position="8.541 0.867 0"
                scale="1 2 0.363"
                material="src: ./assets/pildid/vkass2.jpg"

                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>  

        </Wall>

        <!-- esiseina seinatekst -->

        <a-text value="SOLO EXIBITION –" rotation="0 90 0" position="-9.634 3.503 4.415" width="10" color="grey"></a-text>
               <a-text value="LIFE IS CREATION" rotation="0 90 0" position="-9.634 2.883 4.463" width="10" color="grey"></a-text>
               <a-text value="TRIIN JUSS" rotation="0 90 0" position="-9.634 2.209 4.324" width="5" color="grey"></a-text>
               <a-text value="TOKYO" rotation="0 90 0" position="-9.634 1.798 4.309" width="5" color="grey"></a-text>
                     
<!-- esisein -->    
           <Wall position="-10 0 0" rotation="0 90 0" w="10" h="5">
          
            <a-plane
              position="3 0.724 0"
              scale="1.8 2 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/mustvalge.png"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
          ></a-plane>

          <a-plane 

              position="0.432 0.2 0"
              scale="2.432 3.1 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/varvilinemina.png"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
           ></a-plane>
      
            <a-plane
                position="2.964 -0.920 0"
                scale="2.070 0.820 0"
                material="src: ./assets/pildid/kompa.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

            <a-plane
                position="-1.839 -0.798 0"
                scale="1 1 0"
                material="src: ./assets/pildid/mina.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
</Wall>

<!-- otsasein -->
<Wall position="10 0 0" rotation="0 -90 0"w="10" h="5" >

<a-entity class="kannud" position=" -2.473 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    
          <a-plane
                position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/portree_mv.jpg"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-entity class="kannud" position=" -2.473 -0.751 0.038" rotation="2.033 2.991 -0.469" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    
            <a-plane
                position="0.3 0 0"
                scale="2 2 0"
                material="src: ./assets/pildid/tintekatoo.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>
            <a-plane
                position="3 0 0"
                scale="2 2 0"
                material="src: ./assets/pildid/joonistus_ymarad_vormid.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilditekst; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilditekst; visible: false"
            ></a-plane>

          <!-- <a-text font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" position="0 -1.2 0" value="untitled, 2019. Hõbetrükk." align="center" /> -->
</Wall>
<WallWindow class="aknaga sein" position="5 0 5" rotation="0 -180 0">  </WallWindow>
        <WallWindow class="aknaga sein" position="-5 0 5 " rotation="0 180 0">  </WallWindow> 
        </Wall>
</Wall>

        <Floor />
        
        <!-- <a-entity environment="preset: forest; groundColor: #445; grid: cross; groundTextur:walkernoise"></a-entity> -->
        <a-entity environment="preset: forest; gridColor:#445; grid:none;  " ></a-entity> -->
      </Scene> -->
    </Layout>
    `
});