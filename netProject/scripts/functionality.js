//Most of the source code for understanding the three.js library (especially the THREE.CSS3DRenderer) comes from the following project: https://threejs.org/examples/css3d_periodictable.html. This project made use of the array, organising the randomised divs and the mathematics for creating the sherical design. I have gone through the functionality, edited the code to work the way that suited the project best, changed the shape to look more like a helical structure rather than a sphere and added many of my own functions.




var random = [  "hidden", "hidden", "hidden","1",
				// this "hidden" div was created to overcome a problem encountered with the speherical structure: namely, the very first and second .netObject divs were overlapping - by hiding the first div I have manually overidden this problem.

				"assets/images/microsoftOffice.png", "microsoftoffice", "&lt;Clickbait =  Where do you want to go today?&gt;","30",
				"assets/images/bing.png", "bing", "&lt;Clickbait =  Bing is for doing&gt;", "29",
				"assets/images/microsoft.png", "microsoft", "&lt;Clickbait = Where do you want to go today? &gt;", "28",
				"assets/images/csdn.png", "csdn", "&lt;Clickbait = Chinese Software Developer Network &gt;","27",
				"assets/images/tco.png", "tco", "&lt;Clickbait =  Unknown to English speakers&gt;", "26",
				"assets/images/linkedin.png", "linkedin", "&lt;Clickbait = Connecting the world's professionals to make them more productive and successful. &gt;", "25",

				"assets/images/twitch.png", "twitch", "&lt;Clickbait = Create Community &gt;","24",
				"assets/images/pornhub.png", "pornhub", "&lt;Clickbait = All You Need is Hand&gt;","23",
				"assets/images/netflix.png", "netflix", "&lt;Clickbait = Watch what’s next&gt;","22",
				"assets/images/haosou.png", "haosou", "&lt;Clickbait = Good search engine&gt;","21",
				"assets/images/yandex.png", "yandex", "&lt;Clickbait = Find everything!&gt;","20",
				"assets/images/sinaWeibo.png", "sinaweibo", "&lt;Clickbait = unknown &gt;","19",
				"assets/images/sinaCorp.png", "sinacorp", "&lt;Clickbait = unknown &gt;", "18",
				"assets/images/windowsLive.png", "windowslive", "&lt;Clickbait = striving to be a spendthrift&gt;","17",
				"assets/images/jingdongMall.png", "jingdongmall", "&lt;Clickbait = Where do you want to go today?&gt;", "16",		
				"assets/images/vk.png", "vk", "&lt;Clickbait = Orthodoxy or Death&gt;","15",
				"assets/images/instagram.png", "instagram", "&lt;Clickbait = Capture and Share the World's Moments.&gt;","14",
				"assets/images/sohu.png", "sohu", "&lt;Clickbait = One Team One Dream&gt;","13",				
				"assets/images/twitter.png", "twitter", "&lt;Clickbait = “Yours To Discover”&gt;","12",
				"assets/images/tmall.png", "tmall", "&lt;Clickbait = introduced by Taobao in April 2008 as Taobao Mall&gt;","11",
				"assets/images/amazon.png", "amazon", "&lt;Clickbait = Work hard. Have fun. Make history&gt;", "10",
				"assets/images/taobao.png", "taobao", "&lt;Clickbait = You won'r be dissapointed&gt;","09",
				"assets/images/tencent.png", "tencent", "&lt;Clickbait = Largest Chat Community in teh World &gt;","08",
				"assets/images/yahoo.png", "yahoo!", "&lt;Clickbait = Do you Yahoo?&gt;", "07",
				"assets/images/reddit.png", "reddit", "&lt;Clickbait = The front page of the internet&gt;", "06",				
				"assets/images/wiki.png", "wikipedia", "&lt;Clickbait =  the free encyclopedia&gt;", "05",
				"assets/images/baidu.png", "baidu", "&lt;Clickbait = Using Baidu,you'll know anything. &gt;","04",
				"assets/images/facebook.png", "facebook", "&lt;Clickbait = Facebook is a social utility that connects you with the people around you.&gt;",  "03",
 				"assets/images/youtube.png", "youtube", "&lt;Clickbait = Broadcast Yourself&gt;","02",
				"assets/images/google.png", "google", "&lt;Clickbait = Don't Be Evilf&gt;", "01",
 
			];
//added---------------------------------------
var facts = [
				"f01", "nothing is neutral",
				"f02", "Exploring net neutrlity",
				"f03", "there is something in the system",
				"f04", "the project concept",
				"f05", "hidden complexities",
				"f06", "asking the viewer",
				"f07", "visual biases",
				"f08", "synopsis",
				"f09", "miracle",
				"f10", "Accessibility",
				"f11", "Experimentation",
				"f12", "Choice",
				"f13", "Lyrical Ingenuity",
				"f14", "Free Speech",
				"f15", "Innovation and Creativity",				
			];
			//----------------------------------

			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = { random: [], sphere: [],};

			var objects2 = [];
			var targets2 = { facts: [],};

			init();
			animate();


			function init() {
				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;
				scene = new THREE.Scene();



				// random - array sorting
				//this method for array sorting is sourced from the aforementioned project. I have re-coded it to work for the information that I included within the array.
				//each item in the array is called and a div is created to house the innerHTML, then I have used the function .appendChild to push each div within the parent div created at the top. These divs were then edited in the CSS. 
				//The specification: i += 4 - tells the javascript that each string og the array includes 4 items.
				for ( var i = 0; i < random.length; i += 4 ) {
					//this is the parent div for each platform. It houses the information and has two classes assigned. .netObject class is used to style and add clickable function in the jQuery code. The second class added, using function .add(random [ i + 1 ]), is used to call up the information associated with each platform.
					var netObject = document.createElement( 'div' );
					netObject.className = 'netObject';
					netObject.classList.add(random [ i + 1 ]);
					netObject.style.backgroundColor = 'rgba(4,73,163,' + ( Math.random() * 0.5 + 0.25 ) + ')';

					//adding a logo for each image using javascript. the image url is i = 0 in the array
					var logo = document.createElement( 'img' );
					logo.className = 'logo';
					logo.src = random[ i ];
					netObject.appendChild( logo );

					var platform = document.createElement( 'div' );
					platform.className = 'platform';
					platform.innerHTML = random[ i + 1 ];
					netObject.appendChild( platform );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = random[ i + 2 ];
					netObject.appendChild( details );
 
					var ranking = document.createElement( 'div' );
					ranking.className = 'ranking';
					ranking.textContent = random [ i + 3];
					netObject.appendChild( ranking );

					var object = new THREE.CSS3DObject( netObject );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );
					objects.push( object );
					//
				}


				//facts - array sorting
				for ( var i = 0; i < facts.length; i += 2 ) {
					var neutrality = document.createElement( 'div' );
					neutrality.className = 'neutrality';
					neutrality.style.backgroundColor = 'rgba(1,1,0,' + ( Math.random() * 0.5 + 0.25 ) + ')';

					//adding a logo for each image using javascript. the image url is i = 0 in the array
					var light = document.createElement( 'div' );
					light.className = 'light';
					light.classList.add(facts [ i ]);
					neutrality.appendChild( light );

					var netFact = document.createElement( 'div' );
					netFact.className = 'details';
					netFact.innerHTML = facts[ i + 1];
					neutrality.appendChild( netFact );

					var object2 = new THREE.CSS3DObject( neutrality );
					object2.position.x = Math.random() * 4000 - 2000;
					object2.position.y = Math.random() * 4000 - 2000;
					object2.position.z = Math.random() * 4000 - 2000;
					scene.add( object2 );
					objects2.push( object2 );
					//

				}


				// sphere
				//this sphere code is sourced from: https://threejs.org/examples/css3d_periodictable.html - although I have changed some of the mathematics so that the sphere looks like a helical shape. This is because I believe this is more readable and pleasing to the eye. I also changed the dimensions of the shape. 
				var vector = new THREE.Vector3();
				var spherical = new THREE.Spherical();
				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( 15 * Math.PI ) * phi;
					var object = new THREE.Object3D();
					spherical.set( 800, phi, theta );

					object.position.setFromSpherical( spherical );
					vector.copy( object.position ).multiplyScalar( 2 );
					object.lookAt( vector );
					targets.sphere.push( object );
				}


				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );
				//


				// these are the standard three.js controls. I have made the speed of rotation rather fast to make the user interface feel more interactive. The .addEventListener code tells the computer to re-render the scene everytime the mouse makes one of these actions. This javascript libaray is seperate to the three.js one and is linked in the html.
				//the standard trackball controls allow the following: Left mouse button and move = Rotate and roll the camera around the scene; Scroll wheel = Zoom in and zoom out; Middle mouse button and move = Zoom in and zoom out; Right mouse button and move = Pan around the scene
				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 2;
				controls.minDistance = 500;
				controls.maxDistance = 10000;
				controls.addEventListener( 'change', render );

				//this transform function tells the computer to place all the divs within the structure of the helix - it is then called in the TWEEN function.
				transform( targets.sphere, 2000 );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}

			//The tween function literally renders all the inbetweens from the divs placement from random positions to the helical shape. It is a seperate javascript library included in the HTML and it renders both the movement and the added rotation of the divs. 
			function transform( targets, duration ) {
				TWEEN.removeAll();
				for ( var i = 0; i < objects.length; i ++ ) {
					var object = objects[ i ];
					var target = targets[ i ];
					new TWEEN.Tween( object.position ).delay(11000)
						.to( { x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
					new TWEEN.Tween( object.rotation ).delay(11000)
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z}, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
				}
				new TWEEN.Tween( this )
					.to( {}, duration * 10)
					.onUpdate( render )
					.start();
			}

			//onWindowResize ensures that the canvas is always at 100% of the screen dimensions. this also ensures that the site is friendly to multiple screen sizes. 
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				render();
			}

			//Finally, the animation loop makes all of the animations that need to be performed by the tweening and the trackball controls visible by updating the render everytime the function is called.
			function animate() {
				requestAnimationFrame( animate );
				TWEEN.update();
				controls.update();
			}

			//The renderer function places the visual within the canvas. This is the final function to be called. 
			function render() {
				renderer.render( scene, camera );
			}
