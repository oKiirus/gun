AFRAME.registerComponent('bullets', {
	init: function () {
		this.shoot()
	},

	shoot: function () {
		window.addEventListener('keydown', (keyCode) => {
			console.log('hi')
			if (keyCode.key == 'w') {
				
                var bullet = document.createElement('a-entity')
				bullet.setAttribute('geometry', { primitive: 'sphere', radius : 0.1})
				bullet.setAttribute('material', {color : 'black'})
                var cam = document.querySelector('#camera')
				var pos = cam.getAttribute('position')
				bullet.setAttribute('position', { x: pos.x, y: pos.y, z: pos.z})
				var camera = document.querySelector('#camera').object3D
				var dir = new THREE.Vector3()
				camera.getWorldDirection(dir)
				bullet.setAttribute('velocity', dir.multiplyScalar(-10))
				var scene = document.querySelector('#scene')
				scene.appendChild(bullet)
            }
		})
	}
})