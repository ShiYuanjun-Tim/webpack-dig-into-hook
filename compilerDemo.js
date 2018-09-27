


class LogCompilerHookPlugin {
	apply (compiler) {
		console.log("LogCompilerHookPlugin apply hooks");

		compiler.hooks.environment.tap("anything",()=>{console.log("compiler.hooks.environment");})
		compiler.hooks.afterEnvironment.tap("anything",()=>{console.log("compiler.hooks.afterEnvironment");})
		compiler.hooks.afterPlugins.tap("anything",()=>{console.log("compiler.hooks.afterPlugins");})
		compiler.hooks.afterResolvers.tap("anything",()=>{console.log("compiler.hooks.afterResolvers");})
		compiler.hooks.entryOption.tap("anything",()=>{console.log("compiler.hooks.entryOption");})

		compiler.hooks.beforeRun.tapPromise("anything",()=>{console.log("compiler.hooks.beforeRun");return Promise.resolve("done")})
		compiler.hooks.run.tapPromise("anything",()=>{console.log("compiler.hooks.run");return Promise.resolve("done")})

		//#############compiler入参hook

		compiler.hooks.shouldEmit.tap("anything",()=>{console.log("compiler.hooks.shouldEmit");})
		compiler.hooks.done.tapPromise("anything",()=>{console.log("compiler.hooks.done");return Promise.resolve("done")})
		compiler.hooks.additionalPass.tapPromise("anything",()=>{console.log("compiler.hooks.additionalPass");return Promise.resolve("done")})

		compiler.hooks.emit.tapPromise("anything",()=>{console.log("compiler.hooks.emit");return Promise.resolve("done")})
		compiler.hooks.afterEmit.tapPromise("anything",()=>{console.log("compiler.hooks.afterEmit");return Promise.resolve("done")})

		compiler.hooks.thisCompilation.tap("anything",()=>{console.log("compiler.hooks.thisCompilation");})
		compiler.hooks.compilation.tap("anything",()=>{console.log("compiler.hooks.compilation");})
		compiler.hooks.normalModuleFactory.tap("anything",()=>{console.log("compiler.hooks.normalModuleFactory");})
		compiler.hooks.contextModuleFactory.tap("anything",()=>{console.log("compiler.hooks.contextModuleFactory");})

		compiler.hooks.beforeCompile.tapPromise("anything",()=>{console.log("compiler.hooks.beforeCompile");return Promise.resolve("done")})
		compiler.hooks.compile.tap("anything",()=>{console.log("compiler.hooks.compile");})
		compiler.hooks.make.tapAsync("anything",(compilation,cb)=>{console.log("compiler.hooks.make"); cb()})
		compiler.hooks.afterCompile.tapPromise("anything",()=>{console.log("compiler.hooks.afterCompile");return Promise.resolve("done")})

		compiler.hooks.watchRun.tapPromise("anything",()=>{console.log("compiler.hooks.watchRun");return Promise.resolve("done")})
		compiler.hooks.failed.tap("anything",()=>{console.log("compiler.hooks.failed");})
		compiler.hooks.invalid.tap("anything",()=>{console.log("compiler.hooks.invalid");})
		compiler.hooks.watchClose.tap("anything",()=>{console.log("compiler.hooks.watchClose");})

	}
}









class LogComplilationHookPlugin {
	apply(compiler){

		compiler.hooks.thisCompilation.tap("hook",(compilation) =>{
			console.log("LogComplilationHookPlugin apply hooks");

			compilation.hooks.buildModule.tap("anything",()=>{console.log("compilation.hooks.buildModule");})
			compilation.hooks.rebuildModule.tap("anything",()=>{console.log("compilation.hooks.rebuildModule");})
			compilation.hooks.failedModule.tap("anything",()=>{console.log("compilation.hooks.failedModule");})
			compilation.hooks.succeedModule.tap("anything",()=>{console.log("compilation.hooks.succeedModule");})

			// compilation.hooks.dependencyReference.tap("anything",(a,b,c)=>{console.log("compilation.hooks.dependencyReference");return {a,b,c}})
			compilation.hooks.finishModules.tap("anything",()=>{console.log("compilation.hooks.finishModules");})
			compilation.hooks.finishRebuildingModule.tap("anything",()=>{console.log("compilation.hooks.finishRebuildingModule");})
			compilation.hooks.unseal.tap("anything",()=>{console.log("compilation.hooks.unseal");})
			compilation.hooks.seal.tap("anything",()=>{console.log("compilation.hooks.seal");})

			compilation.hooks.beforeChunks.tap("anything",()=>{console.log("compilation.hooks.beforeChunks");})
			compilation.hooks.afterChunks.tap("anything",()=>{console.log("compilation.hooks.afterChunks");})

			compilation.hooks.optimizeDependenciesBasic.tap("anything",()=>{console.log("compilation.hooks.optimizeDependenciesBasic");})
			compilation.hooks.optimizeDependencies.tap("anything",()=>{console.log("compilation.hooks.optimizeDependencies");})
			compilation.hooks.optimizeDependenciesAdvanced.tap("anything",()=>{console.log("compilation.hooks.optimizeDependenciesAdvanced");})
			compilation.hooks.afterOptimizeDependencies.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeDependencies");})

			compilation.hooks.optimize.tap("anything",()=>{console.log("compilation.hooks.optimize");})
			compilation.hooks.optimizeModulesBasic.tap("anything",()=>{console.log("compilation.hooks.optimizeModulesBasic");})
			compilation.hooks.optimizeModules.tap("anything",()=>{console.log("compilation.hooks.optimizeModules");})
			compilation.hooks.optimizeModulesAdvanced.tap("anything",()=>{console.log("compilation.hooks.optimizeModulesAdvanced");})
			compilation.hooks.afterOptimizeModules.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeModules");})

			compilation.hooks.optimizeChunksBasic.tap("anything",()=>{console.log("compilation.hooks.optimizeChunksBasic");})
			compilation.hooks.optimizeChunks.tap("anything",()=>{console.log("compilation.hooks.optimizeChunks");})
			compilation.hooks.optimizeChunksAdvanced.tap("anything",()=>{console.log("compilation.hooks.optimizeChunksAdvanced");})
			compilation.hooks.afterOptimizeChunks.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeChunks");})

			compilation.hooks.optimizeTree.tapPromise("anything",(a,b,c)=>{console.log("compilation.hooks.optimizeTree");return Promise.resolve(1)})
			compilation.hooks.afterOptimizeTree.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeTree");})

			compilation.hooks.optimizeChunkModulesBasic.tap("anything",()=>{console.log("compilation.hooks.optimizeChunkModulesBasic");})
			compilation.hooks.optimizeChunkModules.tap("anything",()=>{console.log("compilation.hooks.optimizeChunkModules");})
			compilation.hooks.optimizeChunkModulesAdvanced.tap("anything",()=>{console.log("compilation.hooks.optimizeChunkModulesAdvanced");})
			compilation.hooks.afterOptimizeChunkModules.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeChunkModules");})
			compilation.hooks.shouldRecord.tap("anything",()=>{console.log("compilation.hooks.shouldRecord");})

			compilation.hooks.reviveModules.tap("anything",()=>{console.log("compilation.hooks.reviveModules");})
			compilation.hooks.optimizeModuleOrder.tap("anything",()=>{console.log("compilation.hooks.optimizeModuleOrder");})
			compilation.hooks.advancedOptimizeModuleOrder.tap("anything",()=>{console.log("compilation.hooks.advancedOptimizeModuleOrder");})
			compilation.hooks.beforeModuleIds.tap("anything",()=>{console.log("compilation.hooks.beforeModuleIds");})
			compilation.hooks.moduleIds.tap("anything",()=>{console.log("compilation.hooks.moduleIds");})
			compilation.hooks.optimizeModuleIds.tap("anything",()=>{console.log("compilation.hooks.optimizeModuleIds");})
			compilation.hooks.afterOptimizeModuleIds.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeModuleIds");})

			compilation.hooks.reviveChunks.tap("anything",()=>{console.log("compilation.hooks.reviveChunks");})
			compilation.hooks.optimizeChunkOrder.tap("anything",()=>{console.log("compilation.hooks.optimizeChunkOrder");})
			compilation.hooks.beforeChunkIds.tap("anything",()=>{console.log("compilation.hooks.beforeChunkIds");})
			compilation.hooks.optimizeChunkIds.tap("anything",()=>{console.log("compilation.hooks.optimizeChunkIds");})
			compilation.hooks.afterOptimizeChunkIds.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeChunkIds");})

			compilation.hooks.recordModules.tap("anything",()=>{console.log("compilation.hooks.recordModules");})
			compilation.hooks.recordChunks.tap("anything",()=>{console.log("compilation.hooks.recordChunks");})

			compilation.hooks.beforeHash.tap("anything",()=>{console.log("compilation.hooks.beforeHash");})
			compilation.hooks.contentHash.tap("anything",()=>{console.log("compilation.hooks.contentHash");})
			compilation.hooks.afterHash.tap("anything",()=>{console.log("compilation.hooks.afterHash");})
			compilation.hooks.recordHash.tap("anything",()=>{console.log("compilation.hooks.recordHash");})
			compilation.hooks.record.tap("anything",()=>{console.log("compilation.hooks.record");})

			compilation.hooks.beforeModuleAssets.tap("anything",()=>{console.log("compilation.hooks.beforeModuleAssets");})
			compilation.hooks.shouldGenerateChunkAssets.tap("anything",()=>{console.log("compilation.hooks.shouldGenerateChunkAssets");})
			compilation.hooks.beforeChunkAssets.tap("anything",()=>{console.log("compilation.hooks.beforeChunkAssets");})
			compilation.hooks.additionalChunkAssets.tap("anything",()=>{console.log("compilation.hooks.additionalChunkAssets");})

			compilation.hooks.additionalAssets.tapPromise("anything",(a,b,c)=>{console.log("compilation.hooks.additionalAssets");return Promise.resolve(1)})
			compilation.hooks.optimizeChunkAssets.tapPromise("anything",(a,b,c)=>{console.log("compilation.hooks.optimizeChunkAssets");return Promise.resolve(1)})
			compilation.hooks.afterOptimizeChunkAssets.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeChunkAssets");})
			compilation.hooks.optimizeAssets.tapPromise("anything",(a,b,c)=>{console.log("compilation.hooks.optimizeAssets");return Promise.resolve(1)})
			compilation.hooks.afterOptimizeAssets.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeAssets");})

			compilation.hooks.needAdditionalSeal.tap("anything",()=>{console.log("compilation.hooks.needAdditionalSeal");})
			compilation.hooks.afterSeal.tapPromise("anything",(a,b,c)=>{console.log("compilation.hooks.afterSeal");return Promise.resolve(1)})

			compilation.hooks.chunkHash.tap("anything",()=>{console.log("compilation.hooks.chunkHash");})
			compilation.hooks.moduleAsset.tap("anything",()=>{console.log("compilation.hooks.moduleAsset");})
			compilation.hooks.chunkAsset.tap("anything",()=>{console.log("compilation.hooks.chunkAsset");})

			// compilation.hooks.assetPath.tap("anything",(a,b,c)=>{console.log("compilation.hooks.assetPath");return {a,b,c}})

			compilation.hooks.needAdditionalPass.tap("anything",()=>{console.log("compilation.hooks.needAdditionalPass");})

			compilation.hooks.childCompiler.tap("anything",()=>{console.log("compilation.hooks.childCompiler");})
			compilation.hooks.normalModuleLoader.tap("anything",()=>{console.log("compilation.hooks.normalModuleLoader");})

			compilation.hooks.optimizeExtractedChunksBasic.tap("anything",()=>{console.log("compilation.hooks.optimizeExtractedChunksBasic");})
			compilation.hooks.optimizeExtractedChunks.tap("anything",()=>{console.log("compilation.hooks.optimizeExtractedChunks");})
			compilation.hooks.optimizeExtractedChunksAdvanced.tap("anything",()=>{console.log("compilation.hooks.optimizeExtractedChunksAdvanced");})
			compilation.hooks.afterOptimizeExtractedChunks.tap("anything",()=>{console.log("compilation.hooks.afterOptimizeExtractedChunks");})
		})

	}
}


function MyPlugin(){

	var compiler = this;
	compiler.hooks.compilation.tap("hook",(compilation) =>{
		if(compilation.hooks.htmlWebpackPluginAlterChunks){
			compilation.hooks.htmlWebpackPluginAlterChunks.tap("dsfsdf",(chunks, objectWithPluginRef)=>{
				debugger;

			})
		}
	})
}









// Can be imported from webpack package
var webpack = require('webpack');
var config = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var options = new webpack.WebpackOptionsDefaulter().process(config);

compiler = new webpack.Compiler(options.context);
compiler.options = options;
new webpack.NodeEnvironmentPlugin().apply(compiler);

//apply plugin from config file
new LogCompilerHookPlugin().apply(compiler);
new LogComplilationHookPlugin().apply( compiler);
new HtmlWebpackPlugin().apply(compiler)
MyPlugin.apply( compiler);

compiler.hooks.environment.call();
compiler.hooks.afterEnvironment.call();
compiler.options = new webpack.WebpackOptionsApply().process(options, compiler);

// Populate all required options
// compiler.options = {...};

const callback = (err, stats) => {
	console.log('Compiler has finished execution.');
	process.stdout.write(stats.toString() + "\n");
};

compiler.run(callback)






