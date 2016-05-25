module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: [
					'*/index.html'
				],
				options: {
					livereload: true
				},
			},
			css: {
				files: [
					'css/**'
				],
				options: {
					livereload: true
				},
			},
		},
		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						'*/*.html',
						'css/*.css'
					]
				},
				options: {
					watchTask: true,
					server: './',
					watchOptions: {
						ignoreInitial: true,
						ignored: ['*.txt', 'node_modules', '.git'],
					},
					browser: 'google chrome',
					notify: false
				}	
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-connect')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-browser-sync')
	
	grunt.registerTask('default', ['browserSync', 'watch'])
}
