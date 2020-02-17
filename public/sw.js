var statics = ['1.jpg','manifest.json'];
var cachename = 'sitecache';

self.addEventListener('install',(evt)=>{
	//console.log(evt);
	evt.waitUntil(
	caches.open(cachename).then(cache=>{
		cache.addAll(statics);
	})

	)
 })
self.addEventListener('fetch',(event)=>{
		// event.respondWith(
		// 		caches.match(event.request)
		// 		.then((result)=>{
		// 			return result || fetch(event)
		// 		})
		// 	)
})
