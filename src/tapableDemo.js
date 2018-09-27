
const {
	      SyncHook,
	      SyncBailHook,
	      SyncWaterfallHook,
	      SyncLoopHook,
	      AsyncParallelHook,
	      AsyncParallelBailHook,
	      AsyncSeriesHook,
	      AsyncSeriesBailHook,
	      AsyncSeriesWaterfallHook
      } = require("tapable");



function asyncF(a,time=1000,error=null){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			error?rej(error):res(a);
		},time)
	})
}




export default class Demo {
	constructor() {
		this.hooks = {
			syncHook: new SyncHook(['num']),
			syncBailHook: new SyncBailHook(['num']),
			syncWaterfallHook: new SyncWaterfallHook(["first","sec"]),
			asyncSeriesHook: new AsyncSeriesHook(['num']),
			asyncParallelHook:new AsyncParallelHook(['num'])
		};
	}

	/* ... */

	call(newSpeed) {
		this.hooks.accelerate.call(newSpeed);
	}

	promise(initName) {
		return this.hooks.calculateRoutes.promise(initName).then(() => {
			return asyncF(initName);
		});
	}

	callAsync(initName, callback) {
		this.hooks.calculateRoutes.callAsync(initName, err => {
			if(err) return callback(err);
			callback(null, routesList.getRoutes());
		});
	}
}








let inst = new Demo();

inst.hooks.syncHook.tap("1A",num=>{console.log("1A",num) ; return ++num})
inst.hooks.syncHook.tap("1B",num=>{console.log("1B",num) ; return ++num})
inst.hooks.syncHook.tap("1C",num=>{console.log("1C",num) ; return ++num})


inst.hooks.syncWaterfallHook.tap("2A",(num,sec)=>{console.log("2A",num,sec) ; return [++num, ++sec]})
inst.hooks.syncWaterfallHook.tap("2B",(arr)=>{console.log("2B",arr) ; return {a:arr[0], b:arr[1]}})
inst.hooks.syncWaterfallHook.tap("2C",(obj)=>{console.log("2C",obj) ; return obj})


inst.hooks.syncBailHook.tap("3A",num=>{console.log("3A",num) ;   })
inst.hooks.syncBailHook.tap("3B",num=>{console.log("3B",num) ; return num})
inst.hooks.syncBailHook.tap("3C",num=>{console.log("3C",num) ;   })



inst.hooks.asyncSeriesHook.tapAsync("before 4A ", (num, cb) => {
	console.log("before 4A", num);
	asyncF(++num, 2000).then((num) => {
		console.log("before 4A in", num);
		cb()
	});
})
inst.hooks.asyncSeriesHook.tapPromise("4A", num => {
	console.log("4A", num);
	return asyncF(++num, 2000);
})
inst.hooks.asyncSeriesHook.tap("4B", (num) => {
	console.log("4B", num);
	asyncF(++num, 3000).then((num) => {
		console.log("4B in", num);
	});
})
inst.hooks.asyncSeriesHook.tapPromise("4C", num => {
	console.log("4C", num);
	return asyncF(++num, 2000).then((num) => {
		console.log("4C in", num);
	});;
})





inst.hooks.asyncParallelHook.tapAsync("5A",(num,cb)=>{
	console.log("5A",num)
	asyncF(++num ,2000).then((num)=>{
		console.log("5A in",num) ;
		cb()
	});
})
inst.hooks.asyncParallelHook.tapPromise("5B",(num)=>{console.log("5B",num) ;return  asyncF(++num ,3000).then((num)=>{console.log("5B in",num)});})
inst.hooks.asyncParallelHook.tapPromise("5C",(num)=>{console.log("5C",num) ;return  asyncF(++num ,2000).then((num)=>{console.log("5C in",num)});})















function component() {

	var element = document.createElement('div');

	element.style="border:1px solid black"
	element.id="root"

	
	var btns = [
		["emit SyncHook",function(){
		   inst.hooks.syncHook.call(1)
		}],
		["emit SyncWaterfallHook",function(){
		   inst.hooks.syncWaterfallHook.call(1,100)
		}],
		["emit SyncBailHook",function() {
			  inst.hooks.syncBailHook.call(1)
		}],
		
		["emit AsyncSeriesHook",function(){
				inst.hooks.asyncSeriesHook

					// .callAsync(1,(err)=> {
					// 	console.log("asyncSeriesHook end" )
					// })

					.promise(1).then(err=>{
					console.log("asyncSeriesHook end" )
				})
		}],
		["emit AsyncParallelHook",function(){
				inst.hooks.asyncParallelHook.callAsync(1,(err)=>{
					console.log("asyncParallelHook end", err )
				})
		}],
		["emit All",function(){
			inst.hooks.syncHook.call(1);
			inst.hooks.syncWaterfallHook.call(1,100)
			inst.hooks.syncBailHook.call(1)
			inst.hooks.asyncSeriesHook.promise(1)
			inst.hooks.asyncParallelHook.callAsync(1,()=>{
				console.log("asyncParallelHook ends")
			})
		}]
	]

	btns.forEach(([name,handler])=>{
		var btn1 = document.createElement('button');
		btn1.innerHTML = name;
		btn1.onclick = handler
		element.appendChild(btn1)
	});
	

	return element;
}

document.body.appendChild(component());
